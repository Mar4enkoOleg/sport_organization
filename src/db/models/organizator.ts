"use strict";
import { Model } from "sequelize";
import { IOrganizator } from "../../interfaces";
module.exports = (sequelize: any, DataTypes: { STRING: any }) => {
  class organizator extends Model<IOrganizator> implements IOrganizator {
    name!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      organizator.hasMany(models.tournament, { foreignKey: "organizator_id" });
    }
  }
  organizator.init(
    {
      name: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "organizator",
    }
  );
  return organizator;
};
