  var imagen=document.getElementsByClassName("animal");
  var select=document.getElementById("selector");
  select.onchange=function() {
    if(select.value=="original"){
      for (var i = 0; i < imagen.length; i++) {
        imagen[i].classList.remove("sepia")
        imagen[i].classList.remove("blanco-negro")
        imagen[i].classList.remove("invertir-colores")
    }}
    else if (select.value=="sepia") {
      for (var i = 0; i < imagen.length; i++) {
        imagen[i].classList.add("sepia");
        imagen[i].classList.remove("blanco-negro")
        imagen[i].classList.remove("invertir-colores")
    }}
    else if (select.value=="blanco-negro") {
      for (var i = 0; i < imagen.length; i++) {
          imagen[i].classList.add("blanco-negro");
          imagen[i].classList.remove("sepia");
          imagen[i].classList.remove("invertir-colores")}
    }
    else if (select.value=="invertir-colores") {
      for (var i = 0; i < imagen.length; i++) {
        imagen[i].classList.remove("blanco-negro");
        imagen[i].classList.remove("sepia");
        imagen[i].classList.add("invertir-colores")}
  }
  };
