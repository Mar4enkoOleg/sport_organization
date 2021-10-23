"use strict";
import { Model } from "sequelize";
import { ISportClub } from "../../interfaces";
module.exports = (sequelize: any, DataTypes: { STRING: any }) => {
  class sport_club extends Model<ISportClub> implements ISportClub {
    name!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  sport_club.init(
    {
      name: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "sport_club",
    }
  );
  return sport_club;
};
