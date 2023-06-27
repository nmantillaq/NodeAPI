const express = require('express');
const estudiantSchema = require('../models/estudiante_Model');
const router = express.Router();

//Crear un estudiante
router.post('/estudiante', (req, res)=>{
    const estudiante = estudiantSchema(req.body);
    estudiante
        .save()
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}));
});

//Metodo para obtener todos los estudiantes
router.get('/todos', (req, res)=>{
    estudiantSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}));
});

//Metodo para obtener un estudiante
router.get('/todos/:id', (req, res)=>{
    const {id} = req.params;
    estudiantSchema
        .findById(id)
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}));
});


//Metodo para actualizar un estudiante
router.put('/todos/:id', (req, res)=>{
    const {id} = req.params;
    const {nombres, edad, correo, institucion} = req.body;
    estudiantSchema
        .updateOne({_id: id},{ $set: {nombres, edad, correo, institucion}})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}));
});


//Metodo para eliminar un estudiante
router.delete('/todos/:id', (req, res)=>{
    const {id} = req.params;
    estudiantSchema
        .deleteOne({_id: id})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}));
});

module.exports = router;