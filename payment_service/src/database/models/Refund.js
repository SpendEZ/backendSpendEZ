// models/refund.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Refund extends Model {
    static associate(models) {
      Refund.belongsTo(models.Payment, { foreignKey: 'payment_id' });
      Refund.belongsTo(models.RefundStatus, { foreignKey: 'status_id' });
    }
  }
  Refund.init({
    refund_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    payment_id: {
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
    reason: {
      type: DataTypes.TEXT,
    },
    description: {
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
    metadata: {
      type: DataTypes.JSONB,
    },
  }, {
    sequelize,
    modelName: 'Refund',
    tableName: 'refunds',
    underscored: true,
  });
  return Refund;
};