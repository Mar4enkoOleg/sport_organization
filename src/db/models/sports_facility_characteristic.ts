"use strict";
import { Model } from "sequelize";
import { ISportFacilityCharacteristics } from "../../interfaces";
module.exports = (sequelize: any, DataTypes: { STRING: any }) => {
  class sports_facility_characteristic
    extends Model<ISportFacilityCharacteristics>
    implements ISportFacilityCharacteristics
  {
    name!: string;
    value!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  sports_facility_characteristic.init(
    {
      name: { type: DataTypes.STRING },
      value: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "sports_facility_characteristic",
    }
  );
  return sports_facility_characteristic;
};
