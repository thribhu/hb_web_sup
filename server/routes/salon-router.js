import express from "express";

import SalonModel from "../models/salon-model";
import SalesTeam from "../models/sales-team-model";

const salon_router = express.Router();
const team = express.Router();
salon_router('/salons')
    .get((req, res) => {
        SalonModel.find({}, (err, salons) => {
            res.json(salons);
        });
    })
    .post((req, res) => {
        let salon = new SalonModel(req.body);
        salon.save()
        res.status(201).send(salon)
    })
    
salon_router.use('/salons/salon/:id', (req, res, next)=>{
    SalonModel.findById(req.params.id, (err, salon)=>{
        if(err){
            res.status(500).send(err);
        }
        else {
            req.salon = salon;
            next();
        }
    })
})

salon_router('salons/salon/:id')
    .get((req, res) => {
            res.json(salon);
    })
    .put((req, res) => {
        req.salon.salon_name = req.body.salon_name;
        req.salon.owner_first_name = req.body.owner_first_name;
        req.salon.save();
        res.json(req.body)
    })
    .patch((req, res) => {
        
            if(req.body._id){
                delete req.body.body;
            }
            for( let s in req.body) {
                salon[s] = req.body[s];
            }
            salon.save();
            res.json(salon);
        
    })
    .delete((req, res) => {
        
            req.salon.remove(err => {
                if(err) {
                    res.status(500).send(err)
                }
                else {
                    res.status(204).send('removed')
                }
            });
        
    });
    
/* sales team router */    
team('/hb/sales_team')
    .get((req, res) => {
        SalesTeam.find({}, (err, team) => {
            res.json(team);
        });
    });
team('/hb/sales_team/:id')
    .get((req, res) => {
        SalesTeam.findById(req.params.id, (err, team_mem) => {
            res.json(team_mem);
        });
    });

    export default salon_router;