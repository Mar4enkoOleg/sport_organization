"use strict";
import { Model } from "sequelize";
import { ITournament } from "../../interfaces";
module.exports = (sequelize: any, DataTypes: { STRING: any }) => {
  class tournament extends Model<ITournament> implements ITournament {
    name!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      tournament.belongsTo(models.organizator, {
        foreignKey: "organizator_id",
      });
      // tournament.belongsTo(models.sports_facility_type, {
      //   foreignKey: "sports_facility_type_id",
      // });
      tournament.belongsTo(models.sports_facility, {
        foreignKey: "sports_facility_id",
      });
      tournament.hasOne(models.rewarding, { foreignKey: "tournament_id" });
    }
  }
  tournament.init(
    {
      name: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "tournament",
    }
  );
  return tournament;
};
