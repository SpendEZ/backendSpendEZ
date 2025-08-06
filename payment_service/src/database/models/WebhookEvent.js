// models/webhookEvent.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class WebhookEvent extends Model {
    static associate(models) {
      WebhookEvent.belongsTo(models.Webhook, { foreignKey: 'webhook_id' });
      WebhookEvent.belongsTo(models.Payment, { foreignKey: 'payment_id' });
      WebhookEvent.belongsTo(models.WebhookEventStatus, { foreignKey: 'status_id' });
    }
  }
  WebhookEvent.init({
    event_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    webhook_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    payment_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    event_type: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    status_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    payload: {
      type: DataTypes.JSONB,
    },
    response_code: {
      type: DataTypes.STRING(10),
    },
    response_body: {
      type: DataTypes.TEXT,
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    delivered_at: {
      type: DataTypes.DATE,
    },
    retry_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  }, {
    sequelize,
    modelName: 'WebhookEvent',
    tableName: 'webhook_events',
    underscored: true,
  });
  return WebhookEvent;
};