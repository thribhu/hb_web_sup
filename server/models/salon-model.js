//salon model schema

const mongoose = require('mongoose');
const schema = mongoose.Schema;

let salonModelSchema = new schema(
     {
         salon_name : {type: String, required: true, max: 100},
         owner_first_name : {type: String, required: true, max: 100},
         owner_last_name:  {type: String, required: true, max: 100},
         owner_dob: { type: Date, default: null},
         owner_contact_number : { type: string, required: true, max: 15},
         no_of_chairs: {type: Number, required: true, max: 20},
         no_of_stylist: {type: Number, required: true, max: 20},
         salon_stylist: [{type: mongoose.Schema.Types.ObjectId, ref: 'salonStylistModel', required: true}],
         salon_images: [{type: String, required: true}],
         salon_type: { type: String, required: true, enum: ['Unisex', 'Mens Salon', 'Ladies Saloon', 'Family Salon', 'Unisex-family Salon', 'Kids Salon', 'No Gender Salon'], default:'Unisex'},
         salon_services_type: [{type: mongoose.Schema.Types.ObjectId, ref: 'SalonServiceMode'}],
         working_days: { type: mongoose.Schema.Types.ObjectId, ref: 'SalonWorkingDays', required: true},
         hb_rep_emp_code: {type: mongoose.Schema.Types.ObjectId, ref: 'SalesTeam'}
     }
)

salonModelSchema
.virtual('url')
.get(function salonId(){
     return '/hb_salons/' + this._id;
});

salonModelSchema
.virtual('url')
.get(function hb_emp_salon_code(){
     return '/hb_salons/' + this.salon_name + '/' + this.hb_rep_emp_code;
});

salonModelSchema
.virtual('url')
.get(function salon_stylists(){
     return '/hb_salons/' + this.salon_name + '/' + this.salon_stylists;
});


//exporting module SalonModel
module.exports = mongoose.model('SalonModel', salonModelSchema);