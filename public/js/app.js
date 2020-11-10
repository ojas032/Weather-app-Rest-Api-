function det(cls){
    return document.querySelector(cls);
}


function getdata(address){
    fetch('http://localhost:3000/weather?address='+encodeURIComponent(address)).then((response)=>{
        response.json().then((data)=>{
          if(data.error){
              console.log('Unable to find the location')
          } 
          else{
              det('.dt_1').textContent=data.weather;
             
              det('.dt_2').textContent=data.temp+' Degree Celsius';
              
              det('.dt_3').textContent=data.location;
              
          }
        })
    })
    
    }

console.log("Client side javascript is loaded");
var address="";
document.querySelector('.search').addEventListener('click',()=>{
address=document.querySelector("#input").value;
console.log(address);
getdata(address);
event.preventDefault();
})






