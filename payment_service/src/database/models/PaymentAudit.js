// models/paymentAudit.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class PaymentAudit extends Model {
    static associate(models) {
      PaymentAudit.belongsTo(models.Payment, { foreignKey: 'payment_id' });
      PaymentAudit.belongsTo(models.AuditStatus, { foreignKey: 'old_status_id', as: 'oldStatus' });
      PaymentAudit.belongsTo(models.AuditStatus, { foreignKey: 'new_status_id', as: 'newStatus' });
    }
  }
  PaymentAudit.init({
    audit_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    payment_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    action: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    old_status_id: {
      type: DataTypes.UUID,
    },
    new_status_id: {
      type: DataTypes.UUID,
    },
    changed_by: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    changes: {
      type: DataTypes.JSONB,
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    sequelize,
    modelName: 'PaymentAudit',
    tableName: 'payment_audits',
    underscored: true,
  });
  return PaymentAudit;
};