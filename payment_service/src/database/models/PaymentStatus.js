// models/paymentStatus.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class PaymentStatus extends Model {
    static associate(models) {
      PaymentStatus.hasMany(models.Payment, { foreignKey: 'status_id' });
      PaymentStatus.hasMany(models.PaymentTransaction, { foreignKey: 'status_id' });
    }
  }
  PaymentStatus.init({
    status_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    status_name: {
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
    modelName: 'PaymentStatus',
    tableName: 'payment_statuses',
    underscored: true,
  });
  return PaymentStatus;
};