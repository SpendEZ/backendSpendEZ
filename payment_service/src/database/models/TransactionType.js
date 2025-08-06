// models/transactionType.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class TransactionType extends Model {
    static associate(models) {
      TransactionType.hasMany(models.PaymentTransaction, { foreignKey: 'transaction_type_id' });
    }
  }
  TransactionType.init({
    transaction_type_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    type_name: {
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
    modelName: 'TransactionType',
    tableName: 'transaction_types',
    underscored: true,
  });
  return TransactionType;
};