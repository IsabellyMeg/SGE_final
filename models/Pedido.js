const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./Cliente');

const Pedido = sequelize.define('Pedido', {
  pedido_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  data_compra: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  cliente_id: {  
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Cliente,
      key: 'cliente_id',
    },
  },
});

Pedido.belongsTo(Cliente, { foreignKey: 'cliente_id' });

module.exports = Pedido;
