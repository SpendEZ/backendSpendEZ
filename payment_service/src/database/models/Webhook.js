// models/webhook.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Webhook extends Model {
    static associate(models) {
      Webhook.hasMany(models.WebhookEvent, { foreignKey: 'webhook_id' });
    }
  }
  Webhook.init({
    webhook_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    merchant_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    endpoint_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    secret_key: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    event_types: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    retry_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    last_retry_at: {
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Webhook',
    tableName: 'webhooks',
    underscored: true,
  });
  return Webhook;
};
