//js formJS v0.1

function validarFormulario () {

	//coloque aqui os IDs dos campos que são necessários para validacao
	var _campos = new Array("_name","_email","_mensagem");

	//funcao para facilitar a busca por elementos
	var el = new Function("elementoId","return document.getElementById(elementoId).value");
	var totalItensValidados = _campos.length;

	for (var i = 0; i < _campos.length; i++) 
	{
		if(el(_campos[i]) == "")
		{
			totalItensValidados--;
		}
	};
	
	//verifica se algum campo esta
	if(totalItensValidados==_campos.length) 
	{
		validaCadastro();
	}
	else
	{
		console.log("finalize todos os campos!");
		return false;
	}

	//funcao que continuara a validacao caso tenha preenchido corretamente todo o cadastro
	function validaCadastro () {
		alert("fim");
	}
}