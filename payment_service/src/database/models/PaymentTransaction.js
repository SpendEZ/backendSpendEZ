// models/paymentTransaction.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class PaymentTransaction extends Model {
    static associate(models) {
      PaymentTransaction.belongsTo(models.Payment, { foreignKey: 'payment_id' });
      PaymentTransaction.belongsTo(models.TransactionType, { foreignKey: 'transaction_type_id' });
      PaymentTransaction.belongsTo(models.PaymentStatus, { foreignKey: 'status_id' });
    }
  }
  PaymentTransaction.init({
    transaction_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    payment_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    transaction_type_id: {
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
    status_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    gateway_transaction_id: {
      type: DataTypes.STRING(100),
    },
    gateway_response: {
      type: DataTypes.TEXT,
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    processed_at: {
      type: DataTypes.DATE,
    },
    gateway_metadata: {
      type: DataTypes.JSONB,
    },
  }, {
    sequelize,
    modelName: 'PaymentTransaction',
    tableName: 'payment_transactions',
    underscored: true,
  });
  return PaymentTransaction;
};