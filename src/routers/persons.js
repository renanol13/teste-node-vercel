const router = require('express').Router()
const PersonController = require('../controllers/PersonController')

router
    .route('/')
    .post((req, res)=> PersonController.insert(req, res))
    .get((req, res) => PersonController.getAll(req, res))

router
    .route('/:id')
    .get((req, res) => PersonController.getId(req, res))
    .put((req, res) => PersonController.update(req, res))
    .delete((req, res)=> PersonController.delete(req, res))
    
    


module.exports = router