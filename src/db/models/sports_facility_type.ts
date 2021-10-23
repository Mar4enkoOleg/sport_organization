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
      sports_facility_type.hasOne(models.sports_facility, {
        foreignKey: "sports_facility_type_id",
      });
      sports_facility_type.belongsToMany(
        models.sports_facility_characteristic,
        {
          through: "type_characteristic",
          foreignKey: "type_id",
          timestamps: false,
        }
      );
      sports_facility_type.hasMany(models.tournament, {
        foreignKey: "sports_facility_type_id",
      });
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
