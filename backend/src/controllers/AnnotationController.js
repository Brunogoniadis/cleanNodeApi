const { response } = require('express');
const Annotations = require('../models/AnnotationData');

module.exports = {

    read(request, response){
        const annotationList = Annotations.find();
        


    },

    create(request, response){
        const { title, notes, priority } = request.body; 

        console.log(title);
        console.log(notes);
        console.log(priority);
    }

}