// models/paymentTransaction.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class PaymentTransaction extends Model {
    static associate(models) {
      PaymentTransaction.belongsTo(models.Payment, { foreignKey: 'paymentId' });
      PaymentTransaction.belongsTo(models.TransactionType, { foreignKey: 'transactionTypeId' });
    }
  }
  PaymentTransaction.init({
    transactionId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    paymentId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    transactionTypeId: {
      type: DataTypes.UUID,
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
    merchantId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    description:{
      type: DataTypes.TEXT,
    },
    gatewayTransactionId: {
      type: DataTypes.STRING(100),
    },
    gatewayResponse: {
      type: DataTypes.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    processedAt: {
      type: DataTypes.DATE,
    },
    gatewayMetadata: {
      type: DataTypes.JSONB,
    },
  }, {
    sequelize,
    modelName: 'PaymentTransaction',
    tableName: 'transaction',
    underscored: false,
  });
  return PaymentTransaction;
};