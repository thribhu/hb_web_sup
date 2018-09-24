const mongoose = require('mongoose');
const schema = mongoose.Schema;

let hb_team_salon_instance= new schema(
    {
        hb_emp_id: {type: schema.Types.ObjectId, ref:'SalesTeam'},
        salon: [{type: schema.Types.ObjectId, ref: 'salonModelSchema', required: true}],
        statuss: {type: string, required: true, enum: ['completed', 'pending', 'leaving', 'not-intrested']},
    }
);

module.exports = mongoose.model('hbInstanceSchema', hb_team_salon_instance);