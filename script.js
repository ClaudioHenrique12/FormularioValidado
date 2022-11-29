function enviar() {
    let nom = document.getElementById('nom').value;
    let tel = document.getElementById('tel').value;
    let sex = document.getElementById('sex').value;
    let ema = document.getElementById('ema').value;
    let cpf = document.getElementById('cpf').value;
    let est = document.getElementById('est').value;
    let cid = document.getElementById('cid').value;
    let rua = document.getElementById('rua').value;
    let bai = document.getElementById('bai').value;
    let cep = document.getElementById('cep').value;



    let dat = document.getElementById('dat').value;
    let dataa = dat;
    let datb = dataa.split('-').reverse().join('/');


var dataAtual = new Date();
    
    var data_nascimento = new Date(document.getElementById('dat').value);

    var anos = dataAtual.getFullYear() - data_nascimento.getFullYear();

    if(dataAtual.getMonth() != data_nascimento.getMonth())
    {
        if(dataAtual.getMonth() < data_nascimento.getMonth())
        {
            anos--;
        }
    }
    else
    {
        if(dataAtual.getDate() < data_nascimento.getDate())
        {
            anos--;
        }
    }


    if( nom == "" || tel == "" || datb == "" || ema == "" || cpf == "" || cid == "" || rua == "" || bai == "" || cep== ""){

        alert("Erro. Preencha todos os campos corretamente");
    }

    else if (tel.length < 11 || ema.length < 5 || cpf.length < 11 || rua.length < 3 || bai.length < 3 || cep.length < 8){
        alert("Erro. Número de Caracteres Inválido");
    }

    else {
        alert("Nome: "+nom + "\n"
         + "Telefone: "+tel +"\n"
          + "Sexo: "+sex + "\n"
          + "Data de Nascimento: "+datb + "\n"
          + "Sua idade: "+anos + "\n"
          + "Email: "+ema + "\n"
          + "CPF: "+cpf + "\n"
          + "Estado: "+est + "\n"
          + "Cidade: "+cid + "\n"
          + "Rua: "+rua + "\n"
          + "Bairro: "+bai + "\n"
          + "Cep: "+cep);
    }


}
