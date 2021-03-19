
function validar(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
  
  if ((usuario.length >=1) &&
      (dominio.length >=3) &&
      (usuario.search("@")==-1) &&
      (dominio.search("@")==-1) &&
      (usuario.search(" ")==-1) &&
      (dominio.search(" ")==-1) &&
      (dominio.search(".")!=-1) &&
      (dominio.indexOf(".") >=1)&&
      (dominio.lastIndexOf(".") < dominio.length - 1)) {
  document.getElementById("muda").innerHTML="<font color='green'>E-mail válido </font>";
  console.log("E-mail valido");
  }
  else{
  document.getElementById("muda").innerHTML="<font color='red'>E-mail inválido </font>";
  console.log("E-mail invalido");
  }
  }


// function validar(){
//     var emaiil = document.getElementById("entrada").value;
//     if(emaiil != 0 ){
//       muda.innerHTML = ("email enviado com sucesso");
//       muda.style.color="green"
//     }else if(emaiil != '@'){
//         muda.innerHTML= ("preencha o email");
//         muda.style.color="red"
        
//     }else{
//       muda.innerHTML= ("preencha o email");
//       muda.style.color="red"
//     }
// }
