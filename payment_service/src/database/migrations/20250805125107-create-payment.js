// migrations/20250805125107-create-payment.js
'use strict';
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('payments', {
    payment_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    customer_id: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    merchant_id: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    payment_method_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'payment_methods',
        key: 'payment_method_id',
      },
    },
    external_order_id: {
      type: Sequelize.STRING(100),
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
    payment_type_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'payment_types',
        key: 'payment_type_id',
      },
    },
    description: {
      type: Sequelize.TEXT,
    },
    failure_reason: {
      type: Sequelize.TEXT,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    processed_at: {
      type: Sequelize.DATE,
    },
    metadata: {
      type: Sequelize.JSONB,
    },
  });
  await queryInterface.addIndex('payments', ['customer_id']);
  await queryInterface.addIndex('payments', ['merchant_id']);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('payments');
}