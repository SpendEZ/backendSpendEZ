// migrations/20250805125112-create-payment-audit.js
'use strict';
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('audit', {
    auditId: {
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
    action: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    oldStatusId: {
      type: Sequelize.UUID,
      references: {
        model: 'auditStatus',
        key: 'auditStatusId',
      },
    },
    newStatusId: {
      type: Sequelize.UUID,
      references: {
        model: 'auditStatus',
        key: 'auditStatusId',
      },
    },
    changedBy: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    changes: {
      type: Sequelize.JSONB,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  });
  await queryInterface.addIndex('audit', ['paymentId']);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('audit');
}