"use strict";
import { Model } from "sequelize";
import { ITrainer } from "../../interfaces";
module.exports = (sequelize: any, DataTypes: { STRING: any }) => {
  class trainer extends Model<ITrainer> implements ITrainer {
    full_name!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      trainer.belongsTo(models.kind_of_sport, {
        foreignKey: "kind_of_sport_id",
      });
    }
  }
  trainer.init(
    {
      full_name: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "trainer",
    }
  );
  return trainer;
};
