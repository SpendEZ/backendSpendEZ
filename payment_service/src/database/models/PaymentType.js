// models/paymentType.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class PaymentType extends Model {
    static associate(models) {
      PaymentType.hasMany(models.PaymentMethod, { foreignKey: 'payment_type_id' });
      PaymentType.hasMany(models.Payment, { foreignKey: 'payment_type_id' });
    }
  }
  PaymentType.init({
    payment_type_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    type_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    sequelize,
    modelName: 'PaymentType',
    tableName: 'payment_types',
    underscored: true,
  });
  return PaymentType;
};
