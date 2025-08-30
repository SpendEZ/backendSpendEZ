// models/webhookEvent.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class WebhookEvent extends Model {
    static associate(models) {
      WebhookEvent.belongsTo(models.Webhook, { foreignKey: 'webhookId' });
      WebhookEvent.belongsTo(models.Payment, { foreignKey: 'paymentId' });
      WebhookEvent.belongsTo(models.WebhookEventStatus, { foreignKey: 'webhookEventStatusId' });
    }
  }
  WebhookEvent.init({
    webhookEventId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    webhookId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    paymentId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    eventType: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    webhookEventStatusId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    payload: {
      type: DataTypes.JSONB,
    },
    responseCode: {
      type: DataTypes.STRING(10),
    },
    responseBody: {
      type: DataTypes.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    deliveredAt: {
      type: DataTypes.DATE,
    },
    retryCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  }, {
    sequelize,
    modelName: 'WebhookEvent',
    tableName: 'webhookEvent',
    underscored: true,
  });
  return WebhookEvent;
};