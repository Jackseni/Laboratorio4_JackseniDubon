var mongoose = require('mongoose');
// Esquema de configuración 
var contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        predeterminado: Date.now
    }
});
// Exportar modelo de contacto 
var Contact = module.exports = mongoose.model('contact', contactSchema);
module.exports.get = function(callback, limit) {
    Contact.find(callback).limit(limit);
}


let Dog = {
    name: 'Poopy',
    breed: 'Terrier'
};


console.log(dog["breed"]);
console.log(dog["breed"]);



console.log(dog[breed]);