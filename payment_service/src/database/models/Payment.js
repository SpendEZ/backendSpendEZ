// models/payment.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Payment extends Model {
    static associate(models) {
      Payment.belongsTo(models.PaymentMethod, { foreignKey: 'paymentMethodId' });
      Payment.belongsTo(models.PaymentStatus, { foreignKey: 'paymentStatusId' });
      Payment.hasMany(models.PaymentTransaction, { foreignKey: 'paymentId' });
      Payment.hasMany(models.Refund, { foreignKey: 'paymentId' });
      Payment.hasMany(models.PaymentAudit, { foreignKey: 'paymentId' });
      Payment.hasMany(models.WebhookEvent, { foreignKey: 'paymentId' });
    }
  }
  Payment.init({
    paymentId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    customerId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    paymentMethodId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    orderId: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
    paymentStatusId: {
      type: DataTypes.UUID,
      allowNull: false,
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
    metadata: {
      type: DataTypes.JSONB,
    },
  }, {
    sequelize,
    modelName: 'Payment',
    tableName: 'payment',
    underscored: false,
  });
  return Payment;
};