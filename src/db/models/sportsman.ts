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
