const { Router } = require('express');
const pokeRouter = require('./pokeRouter');
const typeRouter = require('./typeRouter.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(pokeRouter);
router.use(typeRouter);

module.exports = router;
