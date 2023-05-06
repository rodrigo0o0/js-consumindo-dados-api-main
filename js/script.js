

function consultaCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
        console.log(response.ok);
        if(response.ok){
            console.log(response.status);
        }else if(response.status == 500){
            throw new Error(500);
        }}
    )
    .then(r => {
        if(r.erro){
            console.log('pegou erro');
            throw Error(404);
        }else{
            console.log(r);
    
        }
    })
    .catch(erro => {
        erro = erro.toString().replace('Error: ', '');
        console.log(erro);

    }).finally(mensagem => console.log("finalizou"));
    
}



consultaCep('88058466');
//consultaCep('88058466');