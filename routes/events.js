const { Router } = require('express');
const { jwtValidator } = require('../middlewares/jwt-validator');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');

const router = Router();

//Validar token
router.use(jwtValidator);

//Obtener eventos
router.get('/', getEvents);

//Crear nuevo evento
router.post('/', createEvent);

//Actualizar evento
router.put('/:id', updateEvent);

//Borrar evento
router.delete('/:id', deleteEvent);

module.exports = router;
