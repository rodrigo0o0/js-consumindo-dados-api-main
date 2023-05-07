//testando arrow functions



async function consultaCep(cep){

    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try{
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`, { mode: 'no-cors' })
        console.log(consultaCep.erro);
        var consultaConvertida = await consultaCep.json();
        if(consultaConvertida.erro){
            console.log('erro ocorreu aqui');
            throw Error("CEP inválido.");
        }
        return consultaConvertida;
    }catch(erro){
        mensagemErro.innerHTML = '<p>Cep Inválido, Tente novamente.</p>';
        console.log(erro);
        return false;
    }
}


//consultaCep('88058466');

const elementoCep = document.getElementById('cep');

const elementoEndereco = document.getElementById('endereco');
const elementoBairro = document.getElementById('bairro');
const elementoCidade = document.getElementById('cidade');
const elementoEstado = document.getElementById('estado');


var testeConsulta;
elementoCep.addEventListener('focusout',async () =>{


    let cep = elementoCep.value;
    
    let resultadoConsulta = await consultaCep(cep);
    
    
    
    
    //testeConsulta = resultadoConsulta;
    
    if(resultadoConsulta){
        atualizaDadosEndereco(resultadoConsulta)

    }

});


function atualizaDadosEndereco(dados){
 


    elementoEndereco.value = dados.logradouro;
    elementoBairro.value = dados.bairro;
    elementoCidade.value = dados.localidade;
    elementoEstado.value = dados.uf;
    console.log(dados);
}
