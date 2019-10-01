// module.exports = (sequelize, DataTypes) => {
//   const { Sequelize } = sequelize;
//   const Model = sequelize.define('products', {
//     createdAt: {
//       type: DataTypes.DATE,
//     },
//     updatedAt: {
//       type: DataTypes.DATE,
//     },
//     price: {
//       type: DataTypes.DOUBLE,
//     },
//     label: {
//       type: DataTypes.STRING,
//     },
//     picture: {
//       type: DataTypes.STRING,
//     },
//   }, {
//     tableName: 'products',
//     underscored: true,
//     schema: process.env.DATABASE_SCHEMA,
//   });

//   Model.associate = (models) => {
//   };

//   return Model;
// };

