// models/auditStatus.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class AuditStatus extends Model {
    static associate(models) {
      AuditStatus.hasMany(models.PaymentAudit, { foreignKey: 'old_status_id' });
      AuditStatus.hasMany(models.PaymentAudit, { foreignKey: 'new_status_id' });
    }
  }
  AuditStatus.init({
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
    modelName: 'AuditStatus',
    tableName: 'audit_statuses',
    underscored: true,
  });
  return AuditStatus;
};