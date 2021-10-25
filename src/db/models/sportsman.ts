"use strict";
import { Model } from "sequelize";
import { ISportsman } from "../../interfaces";
module.exports = (sequelize: any, DataTypes: { STRING: any; INTEGER: any }) => {
  class sportsman extends Model<ISportsman> implements ISportsman {
    full_name!: string;
    skill_lvl!: number;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      sportsman.belongsToMany(models.kind_of_sport, {
        through: "sportsman_kind_of_sport",
        foreignKey: {
          name: "sportsman_id",
        },
        timestamps: false,
      });
      sportsman.belongsTo(models.sport_club, { foreignKey: "sport_club_id" });
      sportsman.hasMany(models.reward, { foreignKey: "sportsman_id" });
      sportsman.belongsToMany(models.trainer, {
        through: "sportsman_trainer",
        foreignKey: "sportsman_id",
        timestamps: false,
      });
    }
  }
  sportsman.init(
    {
      full_name: { type: DataTypes.STRING },
      skill_lvl: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "sportsman",
    }
  );
  return sportsman;
};
