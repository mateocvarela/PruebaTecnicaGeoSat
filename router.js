const { error } = require('console');
const express = require('express');
const router = express.Router();


const conexion = require('./database/db');
router.get('/',(req,res)=> {
    

    conexion.query('SELECT * FROM public."Predio"',(error,results)=>{


        if (error){


            throw error;
        }else{
            res.render('index', {results:results});
        
        }
    })
})

module.exports=router;

