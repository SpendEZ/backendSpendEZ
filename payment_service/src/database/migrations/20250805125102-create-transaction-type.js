// migrations/20250805125102-create-transaction-type.js
'use strict';
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('transactionType', {
    transactionTypeId: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    typeName: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
    }
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('transactionTypes');
}