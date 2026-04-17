let inputs = JSON.parse(localStorage.getItem('registro')) || [];
const tablaBody = document.getElementById("miTabla");

function mostrar_datos (event) {
        event.preventDefault();
    alert('Guardar?')
    let input1 = document.getElementById('input1').value.trim();
    let input2 = document.getElementById('input2').value.trim();
    let input3 = document.getElementById('input3').value.trim();
   


  
   
    let datos = {
       input1 : input1,
       input2 : input2,
      input3 : input3,
    
    }
   
      inputs.push(datos);
        localStorage.setItem('registro', JSON.stringify(inputs));
        agregarFilaATabla(datos);
}

 
function agregarFilaATabla(conf) {
    const tablaBody = document.getElementById('miTabla');
    if (!tablaBody) return;

    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${conf.input1}</td>
        <td>${conf.input2}</td>
        <td>${conf.input3}</td>
    `;
    tablaBody.appendChild(fila);
}

function ocultar(){
  document.getElementById('tb').style.display = 'none';
}

function mostrar2() {
   document.getElementById('tb').style.display = 'block';
}

inputs.forEach(agregarFilaATabla);

const form = document.getElementById('FORM1');
if (form) {
    form.addEventListener('submit', mostrar_datos);
}

