const mongoose = require('mongoose');
const schema = mongoose.Schema;

let salon_stylist_schema = new schema(
     
    {
        first_name: {type: String, required: true, max: 100},
        last_name:  {type: String, required: true, max: 100},
        dob: {type:Date, required: true, default: Date.now},
        stylist_exp: {type: Float32Array, max:40.00, required: true},
        age: {type: Number, required: true, max: 80},
        gender: {type: String, required: true, enum:['male', 'female'], default: 'male'},
        contact: {type: string, max: 14, required: true},
        is_beautician:{type: Boolean, required:true, default: false},
        current_wroking_salon: { type: mongoose.Schema.Types.ObjectId, ref: 'salonModelSchema', required: true}

    }
);

salon_stylist_schema
.virtual('url')
.get(function stylist_details(){
    return 'hb/salons/stylist/' + this._id;
});

salon_stylist_schema
.virtual('name')
.get(function stylistFullName(){
    return this.first_name + ' ' + this.last_name;
});

module.exports = mongoose.model('stylistModel', salon_stylist_schema);