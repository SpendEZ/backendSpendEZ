// migrations/20250805125109-create-refund.js
'use strict';
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('refunds', {
    refund_id: {
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
        model: 'refund_statuses',
        key: 'status_id',
      },
    },
    reason: {
      type: Sequelize.TEXT,
    },
    description: {
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
    metadata: {
      type: Sequelize.JSONB,
    },
  });
  await queryInterface.addIndex('refunds', ['payment_id']);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('refunds');
}