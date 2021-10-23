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
      // reward.belongsTo(models.tournament, { foreignKey: "tournament_id" });
      // reward.belongsTo(models.kind_of_sport, {
      //   foreignKey: "kind_of_sport_id",
      // });
      // reward.belongsTo(models.sports_facility, {
      //   foreignKey: "sport_facility_id",
      // });
      reward.belongsToMany(models.rewarding, {
        through: "rewarding_reward",
        foreignKey: "reward_id",
        timestamps: false,
      });
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
