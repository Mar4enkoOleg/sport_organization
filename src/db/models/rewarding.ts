"use strict";
import { Model } from "sequelize";
module.exports = (sequelize: any, DataTypes: any) => {
  class rewarding extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      rewarding.belongsTo(models.tournament, { foreignKey: "tournament_id" });
      // rewarding.belongsTo(models.kind_of_sport, {
      //   foreignKey: "kind_of_sport_id",
      // });
      // не задана обратная связь
      // rewarding.belongsTo(models.sports_facility, {
      //   foreignKey: "sport_facility_id",
      // });
      rewarding.belongsToMany(models.reward, {
        through: "rewarding_reward",
        foreignKey: "rewarding_id",
        timestamps: false,
      });
    }
  }
  rewarding.init(
    {},
    {
      sequelize,
      modelName: "rewarding",
    }
  );
  return rewarding;
};
