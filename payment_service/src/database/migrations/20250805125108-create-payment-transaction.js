// migrations/20250805125108-create-payment-transaction.js
'use strict';
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('payment_transactions', {
    transaction_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    payment_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'payments',
        key: 'payment_id',
      },
    },
    transaction_type_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'transaction_types',
        key: 'transaction_type_id',
      },
    },
    amount: {
      type: Sequelize.DECIMAL(15, 2),
      allowNull: false,
    },
    currency: {
      type: Sequelize.STRING(3),
      allowNull: false,
    },
    status_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'payment_statuses',
        key: 'status_id',
      },
    },
    gateway_transaction_id: {
      type: Sequelize.STRING(100),
    },
    gateway_response: {
      type: Sequelize.TEXT,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    processed_at: {
      type: Sequelize.DATE,
    },
    gateway_metadata: {
      type: Sequelize.JSONB,
    },
  });
  await queryInterface.addIndex('payment_transactions', ['payment_id']);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('payment_transactions');
}