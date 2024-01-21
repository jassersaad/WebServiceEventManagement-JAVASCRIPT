const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');


router.post("/create", eventController.createEvent);
router.get('/display', eventController.getAllEvents); //get all the events available in the database 
router.get('/display/:eventId', eventController.getEventById); // get a specefic event by its ID
router.put('/update/:eventId', eventController.updateEventById);
router.delete('/delete/:eventId', eventController.deleteEventById);

module.exports = router;
