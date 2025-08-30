// models/paymentStatus.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class PaymentStatus extends Model {
    static associate(models) {
      PaymentStatus.hasMany(models.Payment, { foreignKey: 'paymentStatusId' });
    }
  }
  PaymentStatus.init({
    paymentStatusId: {
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
    modelName: 'PaymentStatus',
    tableName: 'paymentStatus',
    underscored: false,
  });
  return PaymentStatus;
};