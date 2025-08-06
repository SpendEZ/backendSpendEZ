// migrations/20250805125112-create-payment-audit.js
'use strict';
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('payment_audits', {
    audit_id: {
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
    action: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    old_status_id: {
      type: Sequelize.UUID,
      references: {
        model: 'audit_statuses',
        key: 'status_id',
      },
    },
    new_status_id: {
      type: Sequelize.UUID,
      references: {
        model: 'audit_statuses',
        key: 'status_id',
      },
    },
    changed_by: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    changes: {
      type: Sequelize.JSONB,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  });
  await queryInterface.addIndex('payment_audits', ['payment_id']);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('payment_audits');
}