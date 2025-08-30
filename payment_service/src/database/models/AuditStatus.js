// models/auditStatus.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class AuditStatus extends Model {
    static associate(models) {
      AuditStatus.hasMany(models.PaymentAudit, { foreignKey: 'oldStatusId' });
      AuditStatus.hasMany(models.PaymentAudit, { foreignKey: 'newStatusId' });
    }
  }
  AuditStatus.init({
    auditStatusId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    statusName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'AuditStatus',
    tableName: 'auditStatus',
    underscored: false,
  });
  return AuditStatus;
};