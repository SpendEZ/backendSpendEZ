// migrations/20250805125108-create-payment-transaction.js
'use strict';
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('transaction', {
    transactionId: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    paymentId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'payment',
        key: 'paymentId',
      },
    },
    transactionTypeId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'transactionType',
        key: 'transactionTypeId',
      },
    },
    merchantId:{
      type: Sequelize.UUID,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
    },
    amount: {
      type: Sequelize.DECIMAL(15, 2),
      allowNull: false,
    },
    currency: {
      type: Sequelize.STRING(3),
      allowNull: false,
    },
    gatewayTransactionId: {
      type: Sequelize.STRING(100),
    },
    gatewayResponse: {
      type: Sequelize.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    processedAt: {
      type: Sequelize.DATE,
    },
    gatewayMetadata: {
      type: Sequelize.JSONB,
    },
  });
  await queryInterface.addIndex('transaction', ['paymentId']);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('transaction');
}