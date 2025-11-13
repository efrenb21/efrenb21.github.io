function init(){
//add your javascrip between these two lines of code
  var button = document.getElementById("entrybutton");
  var input = document.getElementById("entryinput");
  var output = document.getElementById("textoutput");

  button.addEventListener("click", function() {
    
    alert("Efren Bahena: " + input.value);

    
    output.innerHTML = input.value;
  });
}







window.addEventListener('load', init);


