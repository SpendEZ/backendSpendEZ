// models/refund.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Refund extends Model {
    static associate(models) {
      Refund.belongsTo(models.Payment, { foreignKey: 'paymentId' });
      Refund.belongsTo(models.RefundStatus, { foreignKey: 'refundStatusId' });
    }
  }
  Refund.init({
    refundId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    paymentId: {
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
    refundStatusId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    reason: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt:{
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,

    },
    processedAt: {
      type: DataTypes.DATE,
    },
    metadata: {
      type: DataTypes.JSONB,
    },
  }, {
    sequelize,
    modelName: 'Refund',
    tableName: 'refund',
    underscored: false,
  });
  return Refund;
};