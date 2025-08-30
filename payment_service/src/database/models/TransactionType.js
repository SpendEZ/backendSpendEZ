// models/transactionType.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class TransactionType extends Model {
    static associate(models) {
      TransactionType.hasMany(models.PaymentTransaction, { foreignKey: 'transactionTypeId' });
    }
  }
  TransactionType.init({
    transactionTypeId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    typeName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'TransactionType',
    tableName: 'transactionType',
    underscored: false,
  });
  return TransactionType;
};