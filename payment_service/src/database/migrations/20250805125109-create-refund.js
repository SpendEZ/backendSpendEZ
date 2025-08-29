// migrations/20250805125109-create-refund.js
'use strict';
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('refund', {
    refundId: {
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
    amount: {
      type: Sequelize.DECIMAL(15, 2),
      allowNull: false,
    },
    currency: {
      type: Sequelize.STRING(3),
      allowNull: false,
    },
    refundStatusId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'refundStatus',
        key: 'refundStatusId',
      },
    },
    reason: {
      type: Sequelize.TEXT,
    },
    description: {
      type: Sequelize.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    processedAt: {
      type: Sequelize.DATE,
    },
    metadata: {
      type: Sequelize.JSONB,
    },
  });
  await queryInterface.addIndex('refund', ['paymentId']);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('refund');
}