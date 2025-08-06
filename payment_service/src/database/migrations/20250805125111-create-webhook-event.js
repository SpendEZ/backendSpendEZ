// migrations/20250805125111-create-webhook-event.js
'use strict';
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('webhook_events', {
    event_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    webhook_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'webhooks',
        key: 'webhook_id',
      },
    },
    payment_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'payments',
        key: 'payment_id',
      },
    },
    event_type: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    status_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'webhook_event_statuses',
        key: 'status_id',
      },
    },
    payload: {
      type: Sequelize.JSONB,
    },
    response_code: {
      type: Sequelize.STRING(10),
    },
    response_body: {
      type: Sequelize.TEXT,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    delivered_at: {
      type: Sequelize.DATE,
    },
    retry_count: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });
  await queryInterface.addIndex('webhook_events', ['webhook_id']);
  await queryInterface.addIndex('webhook_events', ['payment_id']);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('webhook_events');
}
