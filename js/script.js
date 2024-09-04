const amd = document.querySelector("#amd");
const usd = document.querySelector("#usd");

amd.addEventListener("input" , (e)=>{
   
    const request = new XMLHttpRequest();
    setTimeout(() =>{
if(typeof(amd.value !== "number" ) && isNaN(amd.value)){
amd.value = "";
usd.value = "";
}
if(amd.value = ""){
    usd.value = ""
}
    },10);

request.open("GET", "exchange.json");

request.setRequestHeader("Content-type", "application/json; charset=UTF-8" )

request.send()

request.addEventListener("readystatechange", ()=> {
    if(request.status === 200 && request.readyState === 4){
console.log(request.status);
console.log(request.statusText);
console.log(request.readyState);
const data = JSON.parse(request.response);
usd.value = (parseFloat(amd.value)/parseFloat(data.currency.usd)).toFixed(2);}
else{
    usd.value = "Something went wrong!";
}
    });
});



