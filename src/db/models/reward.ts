"use strict";
import { Model } from "sequelize";
import { IReward } from "../../interfaces";
module.exports = (sequelize: any, DataTypes: { INTEGER: any }) => {
  class reward extends Model<IReward> implements IReward {
    number_place!: number;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  reward.init(
    {
      number_place: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "reward",
    }
  );
  return reward;
};
