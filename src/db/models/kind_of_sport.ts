"use strict";
import { Model } from "sequelize";
import { IKindOfSport } from "../../interfaces";
module.exports = (sequelize: any, DataTypes: { STRING: any }) => {
  class kind_of_sport extends Model<IKindOfSport> implements IKindOfSport {
    name!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      kind_of_sport.belongsToMany(models.sportsman, {
        through: "sportsman_kind_of_sport",
        foreignKey: "kind_of_sport_id",
        timestamps: false,
      });
      kind_of_sport.hasMany(models.trainer, { foreignKey: "kind_of_sport_id" });
      kind_of_sport.belongsToMany(models.sports_facility, {
        through: "sport_facility_kind_of_sport",
        foreignKey: "kind_of_sport_id",
        timestamps: false,
      });
    }
  }
  kind_of_sport.init(
    {
      name: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "kind_of_sport",
    }
  );
  return kind_of_sport;
};
