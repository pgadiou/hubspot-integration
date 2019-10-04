module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('subscriptions', {
    price: {
      type: DataTypes.INTEGER,
    },
    periodicity: {
      type: DataTypes.ENUM,
      values: ['monthly', 'annual']
    },
  }, {
    tableName: 'subscriptions',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
    Model.hasMany(models.subscription_features);
    Model.belongsTo(models.companies);
  };

  return Model;
};

