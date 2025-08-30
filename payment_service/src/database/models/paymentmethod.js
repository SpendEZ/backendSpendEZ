// models/paymentMethod.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class PaymentMethod extends Model {
    static associate(models) {
      PaymentMethod.belongsTo(models.PaymentType, { foreignKey: 'paymentTypeId' });
      PaymentMethod.hasMany(models.Payment, { foreignKey: 'paymentMethodId' });
    }
  }
  PaymentMethod.init({
    paymentMethodId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    customerId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    paymentTypeId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    isDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    sequelize,
    modelName: 'PaymentMethod',
    tableName: 'paymentMethod',
    underscored: false,
  });
  return PaymentMethod;
};