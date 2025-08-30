// models/paymentType.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class PaymentType extends Model {
    static associate(models) {
      PaymentType.hasMany(models.PaymentMethod, { foreignKey: 'paymentTypeId' });
      PaymentType.hasMany(models.Payment, { foreignKey: 'paymentTypeId' });
    }
  }
  PaymentType.init({
    paymentTypeId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    typeName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'PaymentType',
    tableName: 'paymentType',
    underscored: false,
  });
  return PaymentType;
};
