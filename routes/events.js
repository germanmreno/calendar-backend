const { Router } = require('express');
const { check } = require('express-validator');

const { jwtValidator } = require('../middlewares/jwt-validator');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { fieldValidator } = require('../middlewares/field-validator');
const { isDate } = require('../helpers/isDate');

const router = Router();

//Validar token
router.use(jwtValidator);

//Obtener eventos
router.get('/', getEvents);

//Crear nuevo evento
router.post(
    '/',
    [
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom(isDate),
        fieldValidator,
        check('end', 'La fecha de finalización es obligatoria').custom(isDate),
    ],
    createEvent
);

//Actualizar evento
router.put('/:id', updateEvent);

//Borrar evento
router.delete('/:id', deleteEvent);

module.exports = router;
