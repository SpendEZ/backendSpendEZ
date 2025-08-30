// models/refundStatus.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class RefundStatus extends Model {
    static associate(models) {
      RefundStatus.hasMany(models.Refund, { foreignKey: 'refundStatusId' });
    }
  }
  RefundStatus.init({
    refundStatusId: {
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
    modelName: 'RefundStatus',
    tableName: 'refundStatus',
    underscored: false,
  });
  return RefundStatus;
};
