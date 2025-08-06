// models/payment.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Payment extends Model {
    static associate(models) {
      Payment.belongsTo(models.PaymentMethod, { foreignKey: 'payment_method_id' });
      Payment.belongsTo(models.PaymentStatus, { foreignKey: 'status_id' });
      Payment.belongsTo(models.PaymentType, { foreignKey: 'payment_type_id' });
      Payment.hasMany(models.PaymentTransaction, { foreignKey: 'payment_id' });
      Payment.hasMany(models.Refund, { foreignKey: 'payment_id' });
      Payment.hasMany(models.PaymentAudit, { foreignKey: 'payment_id' });
      Payment.hasMany(models.WebhookEvent, { foreignKey: 'payment_id' });
    }
  }
  Payment.init({
    payment_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    customer_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    merchant_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    payment_method_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    external_order_id: {
      type: DataTypes.STRING(100),
    },
    amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
    status_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    payment_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    failure_reason: {
      type: DataTypes.TEXT,
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
    processed_at: {
      type: DataTypes.DATE,
    },
    metadata: {
      type: DataTypes.JSONB,
    },
  }, {
    sequelize,
    modelName: 'Payment',
    tableName: 'payments',
    underscored: true,
  });
  return Payment;
};