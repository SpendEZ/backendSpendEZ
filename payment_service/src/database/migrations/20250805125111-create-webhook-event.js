// migrations/20250805125111-create-webhook-event.js
'use strict';
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('webhookEvent', {
    webhookEventId: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    webhookId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'webhook',
        key: 'webhookId',
      },
    },
    paymentId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'payment',
        key: 'paymentId',
      },
    },
    eventType: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    webhookEventStatusId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'webhookEventStatus',
        key: 'webhookEventStatusId',
      },
    },
    payload: {
      type: Sequelize.JSONB,
    },
    responseCode: {
      type: Sequelize.STRING(10),
    },
    responseBody: {
      type: Sequelize.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    deliveredAt: {
      type: Sequelize.DATE,
    },
    retryCount: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });
  await queryInterface.addIndex('webhookEvent', ['webhookId']);
  await queryInterface.addIndex('webhookEvent', ['paymentId']);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('webhookEvent');
}
