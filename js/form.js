var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener('click',function() {
	event.preventDefault();

var form = document.querySelector('#form-adiciona');
//extrai as informações adicionadas

var paciente = obtemPacientesFormulario(form);



//cria a tr e td do paciente. 

var pacienteTr = montaTr(paciente);

console.log(paciente);



function montaTr(paciente){
	var pacienteTr = document.createElement('tr')
	var pesoTd = document.createElement('td')
	var nomeTd = document.createElement('td')
	var alturaTd = document.createElement('td')
	var gorduraTd = document.createElement('td')
	var imcTd = document.createElement('td')

	pesoTd.textContent = peso;
	nomeTd.textContent = nome;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;
	imcTd.textContent = calculaImc(peso, altura);

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

}
	var tabela = document.querySelector('#tabela-pacientes');

	tabela.appendChild(pacienteTr);

});

function obtemPacientesFormulario (form){

	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value,)
	}

	return paciente;
}





