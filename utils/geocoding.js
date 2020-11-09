const request=require('request');

// const temp_url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+p+'.json?access_token=pk.eyJ1Ijoib2phczAzMiIsImEiOiJja2g1MWI4dzQwM3M4MnFvYndxOHcydmo4In0.tazjsU8eaY05SEBT_gj-kQ&limit=1';

// request((temp_url),(error,response)=>{
//     console.log(response);
//     if(error){
//         console.log('Cit not found');
//     }
//     else{
//     const data=JSON.parse(response.body);
//     data.features.forEach((el,ind)=>{
//         console.log(ind+" "+el.text+" ,"+el.place_name);
//         const url='http://api.openweathermap.org/data/2.5/weather?q='+el.text+'&appid=78654e8f8e5674da47cf16517aa744ee';
//         request((url ) ,(error,response)=>{
//             //console.log(response);
        
//             const data=JSON.parse(response.body)
//             if(data.cod=="404"){
//                 console.log("City Not Found");
//             }
//             else{
//             const temp=parseInt(data.main.temp)-273;
//             console.log(data.weather[0].description+'. The temperture is '+temp+' degree out ');
//             }
            
//         });
//     });
//     }
// });




const geocoding=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoib2phczAzMiIsImEiOiJja2g1MWI4dzQwM3M4MnFvYndxOHcydmo4In0.tazjsU8eaY05SEBT_gj-kQ&limit=1';

    request((url),(error,response)=>{
        if(error)
        {
            callback('Location not found',undefined);
        }
        else{
            callback(undefined,response);
        }
    })
}

module.exports=geocoding;