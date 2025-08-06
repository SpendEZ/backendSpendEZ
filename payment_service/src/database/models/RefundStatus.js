// models/refundStatus.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class RefundStatus extends Model {
    static associate(models) {
      RefundStatus.hasMany(models.Refund, { foreignKey: 'status_id' });
    }
  }
  RefundStatus.init({
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
    modelName: 'RefundStatus',
    tableName: 'refund_statuses',
    underscored: true,
  });
  return RefundStatus;
};
