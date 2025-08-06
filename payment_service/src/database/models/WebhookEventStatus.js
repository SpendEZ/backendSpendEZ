// models/webhookEventStatus.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class WebhookEventStatus extends Model {
    static associate(models) {
      WebhookEventStatus.hasMany(models.WebhookEvent, { foreignKey: 'status_id' });
    }
  }
  WebhookEventStatus.init({
    status_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    status_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
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
  }, {
    sequelize,
    modelName: 'WebhookEventStatus',
    tableName: 'webhook_event_statuses',
    underscored: true,
  });
  return WebhookEventStatus;
};