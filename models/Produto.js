const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Categoria = require('./Categoria');

const Produto = sequelize.define('Produto', {
  produto_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  produto_nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  produto_preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  categoria_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Categoria,
      key: 'categoria_id',
    },
  },
});

Produto.belongsTo(Categoria, { foreignKey: 'categoria_id' });
module.exports = Produto;
