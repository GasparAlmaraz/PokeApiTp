const { Router } = require('express');
const pokeRouter = require('./pokeRouter');
const typeRouter = require('./typeRouter.js');
const userRouter = require('./userRouter');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(pokeRouter);
router.use(typeRouter);
router.use(userRouter);

module.exports = router;
