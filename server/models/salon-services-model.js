const mongoose = require('mongoose');
const schema = mongoose.Schema;

let salon_service_schema = new schema(
    {
        all_mens_serices: {type: Boolean, required: true, default: false},
        all_women_services: {type: Boolean, required: true, default: false},
        typical_services_offered: 
            [   {basic_hair_services: {type: Boolean}},
                {chemical_hair_services: {type: Boolean}},
                {facial_services: Boolean},
                {pedicure: Boolean},
                {manicure: Boolean},
                {spa: Boolean},
                
            ]
    }
);

//export service model
module.exports = mongoose.model("SalonServiceModel");