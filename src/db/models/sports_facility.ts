"use strict";
import { Model } from "sequelize";
import { ISportFacility } from "../../interfaces";
module.exports = (sequelize: any, DataTypes: { STRING: any }) => {
  class sports_facility
    extends Model<ISportFacility>
    implements ISportFacility
  {
    name!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      sports_facility.belongsTo(models.sports_facility_type, {
        foreignKey: "sports_facility_type_id",
      });
      sports_facility.hasMany(models.tournament, {
        foreignKey: "sports_facility_id",
      });
    }
  }
  sports_facility.init(
    {
      name: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "sports_facility",
    }
  );
  return sports_facility;
};
