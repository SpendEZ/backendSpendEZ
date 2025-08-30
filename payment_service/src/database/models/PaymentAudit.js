// models/paymentAudit.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class PaymentAudit extends Model {
    static associate(models) {
      PaymentAudit.belongsTo(models.Payment, { foreignKey: 'paymentId' });
      PaymentAudit.belongsTo(models.AuditStatus, { foreignKey: 'oldStatusId', as: 'oldStatus' });
      PaymentAudit.belongsTo(models.AuditStatus, { foreignKey: 'newStatusId', as: 'newStatus' });
    }
  }
  PaymentAudit.init({
    auditId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    paymentId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    action: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    oldStatusId: {
      type: DataTypes.UUID,
    },
    newStatusId: {
      type: DataTypes.UUID,
    },
    changedby: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    changes: {
      type: DataTypes.JSONB,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    sequelize,
    modelName: 'PaymentAudit',
    tableName: 'audit',
    underscored: false,
  });
  return PaymentAudit;
};