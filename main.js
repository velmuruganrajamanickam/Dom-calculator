let output=document.getElementById("result");
function display(num){
    output.value +=num;
}
function Calculate(){
    try{
        output.value=eval(output.value);
    }
    catch(err){
        alert("Invalid");
    }

}
function Clear(){
    output.value= "";
}
function del(){
    output.value=output.value.slice(0,-1);
}



let val = document.getElementById("result");
console.log(val);
val.addEventListener("keydown", function(event){

  if(event.key === "1"||
     event.key === "2"||
     event.key === "3"||
     event.key === "4"||
     event.key === "5"||
     event.key === "6"||
     event.key === "7"||
     event.key === "8"||
     event.key === "9"||
     event.key === "0"){
    
  }

  else if(event.key === "Delete"){
     clr(event.key);
  }

  else if(event.key ==="Backspace"){
     del(event.key);
  }
    
  else{
    alert("Please Enter the Number");
    event.preventDefault();
  }
})