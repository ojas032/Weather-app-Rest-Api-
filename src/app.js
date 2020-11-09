const express=require('express')
const app=express()
const port=3000
const path=require('path')
const hbs=require('hbs')
const forcast=require('../utils/forcast')
const geocoding=require('../utils/geocoding')


const publicDirectory=path.join(__dirname,'../public')
const viewsDir=path.join(__dirname,'../Templates/views')
const partialpath=path.join(__dirname,'../Templates/partials')
app.set('views',viewsDir)
app.set('view engine','hbs')
app.use(express.static(publicDirectory))
hbs.registerPartials(partialpath)

app.get('',(req,res)=>{
    res.render('index',{
        title:"Weather"
    });
})

app.get('/weather',(req,res)=>{

    console.log(req.query.address);
    if(!req.query.address){
        res.send('Please Enter the address')
    }
    else{
    geocoding(req.query.address,(error,response)=>{
        if(error){
            console.log("Error", error);
           }
           else{
            const data=JSON.parse(response.body);
            forcast(data,(error,resp)=>{
                console.log(resp);
                res.render('index',{
                    title:'Weather',
                    weather:resp.weather,
                    temp:resp.temp,
                    location:resp.location,
                    searched_location:req.query.address,
                });
            });
           }
    })

   
    }
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
    });
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        
    });
})


app.get('/help/*',(req,res)=>{
    res.send('Help article not found')
})


app.get('*',(req,res)=>{
    res.send('My 404 error')
})


app.listen(port,()=>{
    console.log("It is active on port"+port);
})

