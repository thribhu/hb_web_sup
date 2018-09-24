/*
 sales-teams model db,
 username = hbEmployeName,
 empId = hbId
 */
import * as mongooose from "mongoose";
import {Schema as schema} from "mongoose"
 
 
 
 let SalesTeamSchema = new schema(
     {
         first_name : {type: string, required: true, max: 100},
         last_name : {type: string, required: true, max: 50},
         dob: {type: Date, default: Date.name, required: true},
         hb_emp_id : {type: string, required: true, max: 10},
         email: {type:email, required: true},
         salons_associated: {type: schema.Types.ObjectId, ref: 'TeamSalonInstance', required: true}
     }
 );

 //virtual schema for hb_sales_team

 SalesTeamSchema
 .virtual('url')
 .get(function url_team_player_id() {
     return '/team/member/'+ this._id;
 });
 SalesTeamSchema
 .virtual('url')
 .get(function url_team_player_performance_count() {
     return 'team/member/' + this._id +'/' + this.salons_associated;
 });

 //export model
 module.exports = mongooose.model('SalesTeam', SalesTeamSchema);