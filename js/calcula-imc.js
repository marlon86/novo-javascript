var titulo = document.querySelector('.titulo');
titulo.textContent = 'Maria Maluca';

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {

	var paciente = pacientes[i];
	var tdPeso = paciente.querySelector('.info-peso'); 
	var peso = tdPeso.textContent;
	var tdAltura = paciente.querySelector('.info-altura');
	var altura = tdAltura.textContent;
	var imc = peso / (altura * altura); 
	var tdImc = paciente.querySelector('.info-imc');
	var pesoEhValido = true;
	var alturaEhValida = true; 

	if (peso < 0 || peso > 400) {
		tdImc.textContent = 'Imc com valor impossivel'; 
		tdPeso.textContent = 'O peso com valor: '+peso +' é impossivel';
		pesoEhValido = false;
		paciente.classList.add('paciente-invalido');
	}
	if (altura < 0 || altura > 2.5) {
		tdImc.textContent = 'imc com valor impossivel';
		tdAltura.textContent ='A altura com o valor: ' + altura + ' é impossivel'; 
		alturaEhValida = false;
		
		paciente.classList.add('paciente-invalido');
	}
	if (pesoEhValido && alturaEhValida) {
		tdImc.textContent = imc;
	}
}
function calculaImc(peso,altura) {
	var imc = 0;
	imc = peso / (altura * altura);

	return imc.toFixed(2);
}

