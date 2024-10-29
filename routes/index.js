const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const ClienteController = require('../controllers/ClienteController');
const PedidoController = require('../controllers/PedidoController');
const DetalhePedidoController = require('../controllers/DetalhePedidoController');
const ProdutoController = require('../controllers/ProdutoController');
const CategoriaController = require('../controllers/CategoriaController');
const authenticateToken = require('../middleware/authenticateToken');

// Rotas de Usuario
router.post('/usuarios', UsuarioController.createUsuario);
router.post('/usuarios/login', UsuarioController.loginUsuario);
router.get('/usuarios', authenticateToken, UsuarioController.listarUsuarios);

// Rotas de Cliente
router.post('/clientes', authenticateToken, ClienteController.createCliente);
router.get('/clientes', authenticateToken, ClienteController.listarClientes);
router.put('/clientes/:cliente_id', authenticateToken, ClienteController.updateCliente);
router.delete('/clientes/:cliente_id', authenticateToken, ClienteController.deleteCliente);

// Rotas de Pedido
router.post('/pedidos', authenticateToken, PedidoController.createPedido);
router.get('/pedidos', authenticateToken, PedidoController.listarPedidos)
router.put('/pedidos/:pedido_id', authenticateToken, PedidoController.updatePedido);
router.delete('/pedidos/:pedido_id', authenticateToken, PedidoController.deletePedido);

// Rotas de DetalhePedido
router.post('/detalhespedido', authenticateToken, DetalhePedidoController.createDetalhePedido);
router.get('/detalhespedido', authenticateToken, DetalhePedidoController.listarDetalhesPedidos);
router.get('/detalhespedido/:dt_id', authenticateToken, DetalhePedidoController.getDetalhePedido);
router.put('/detalhespedido/:dt_id', authenticateToken, DetalhePedidoController.updateDetalhePedido);
router.delete('/detalhespedido/:dt_id', authenticateToken, DetalhePedidoController.deleteDetalhePedido);

// Rotas de Produto
router.post('/produtos', authenticateToken, ProdutoController.createProduto);
router.put('/produtos/:produto_id', authenticateToken, ProdutoController.updateProduto);
router.get('/produtos/', authenticateToken, ProdutoController.listarProdutos);
router.delete('/produtos/:produto_id', authenticateToken, ProdutoController.deleteProduto);

// Rotas de Categoria
router.post('/categorias', authenticateToken, CategoriaController.createCategoria);
router.get('/categorias', authenticateToken, CategoriaController.listarCategorias);
router.put('/categorias/:categoria_id', authenticateToken, CategoriaController.updateCategoria);
router.delete('/categorias/:categoria_id', authenticateToken, CategoriaController.deleteCategoria);


module.exports = router;
