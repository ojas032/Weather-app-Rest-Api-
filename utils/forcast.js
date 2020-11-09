const request=require('request');

const forcast=(data,callback)=>{

    data.features.forEach((el,ind)=>{
              //console.log(ind+" "+el.text+" ,"+el.place_name);
                const url='http://api.openweathermap.org/data/2.5/weather?q='+el.text+'&appid=78654e8f8e5674da47cf16517aa744ee';
               request((url ) ,(error,response)=>{
                   const data=JSON.parse(response.body);
                   //console.log(data);
                    if(error){
            
                        callback("Error occured");    
                    }
                    else if(data.cod=="404"){
                        callback("City not found",undefined);
                    }
                    else{
                    const temp=parseInt(data.main.temp)-273;
                   // console.log(data.weather[0].description+'. The temperture is '+temp+' degree out ');
                    callback(undefined,{
                        weather:data.weather[0].description,
                        temp:temp,
                        location:el.place_name,
                        })
                    }
                    
                 });
             });

    }


module.exports=forcast;