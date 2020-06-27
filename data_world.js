const express = require("express");
const router = express.Router();
const unirest = require("unirest");

router.get("/",function(request,response){

    var req = unirest("GET", "https://covid-19-coronavirus-statistics2.p.rapidapi.com/countriesData");

req.headers({
	"x-rapidapi-host": "covid-19-coronavirus-statistics2.p.rapidapi.com",
	"x-rapidapi-key": "e33d32ba01mshdb620fed016edf9p14a356jsn88d6f983887a",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

    var obj = res.body
    response.send(obj.result)
});
})
router.get("/:id",function(request,response){
    var state = request.params.id;
    var x;
    var modstate=state[0].toUpperCase();
    var len = state.length;
    
    for(var i = 1;i<len;i++)
    {
        if(state[i]==" "){
        modstate = modstate  + " "+state[i+1].toUpperCase()     
        i++
        }
        else{
            modstate=modstate+state[i]
        } 
    }
    console.log(modstate);
    var req = unirest("GET", "https://covid-19-coronavirus-statistics2.p.rapidapi.com/countriesData");

req.headers({
	"x-rapidapi-host": "covid-19-coronavirus-statistics2.p.rapidapi.com",
	"x-rapidapi-key": "e33d32ba01mshdb620fed016edf9p14a356jsn88d6f983887a",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

    var obj = res.body
    var arr = obj.result;
    for(var i=0;i<=214;i++)
        {
            if(arr[i].country==modstate)//214.country
            {
                console.log(arr[i]);
                
            response.send(arr[i])
            }
        }     
    });


})

module.exports = router