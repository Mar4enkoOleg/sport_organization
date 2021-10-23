"use strict";
import { Model } from "sequelize";
import { ISportFacilityType } from "../../interfaces";
module.exports = (sequelize: any, DataTypes: { STRING: any }) => {
  class sports_facility_type
    extends Model<ISportFacilityType>
    implements ISportFacilityType
  {
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
  sports_facility_type.init(
    {
      name: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "sports_facility_type",
    }
  );
  return sports_facility_type;
};
