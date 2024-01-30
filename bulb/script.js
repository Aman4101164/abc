var a= document.querySelector("h1")
a.innerHTML="abc"


var box= document.querySelector("#box")
box.innerHTML="<h1>Hi, Aman</h1>"
// a.style.color="red"
// a.style.backgroundColor="purple"

/*a.addEventListener("click", function() {
    a.innerHTML="abc"
    a.style.color="yellow"
    a.style.backgroundColor="#000"
    
})
//console.log(a);*/

var bulb= document.querySelector("#bulb")
var btn= document.querySelector("button")

var flag=0

btn.addEventListener("click", function(){
    if (flag==0) {
        bulb.style.backgroundColor="yellow"
        flag=1
    }
    else{
        bulb.style.backgroundColor="transparent"
        flag=0
    }

})