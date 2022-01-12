class Estabelecimento {

    constructor(nome, endereco, categoria) {
        this.nome = nome;
        this.endereco = endereco;
        this.categoria = categoria;
    }

}

class Gestor {

    constructor(nome, cpf, email) {
        this.nome = nome;;
        this.cpf = cpf;
        this.email = email;
    }

}

class Camera {

    constructor(){
        var ip = 0;
        var user = 0;
        var password = 0;
        var modelo = modelo;
        var data_de_instalacao = 0;
        this.contagem = new Object();
    }


    Insert(lista) {
        var lista_string = [];
        var lista_itens = lista;

        lista_itens.forEach(element => {
            element = element.split('=');
            var dados = element[1]; //info[0].EndTime=2021-05-01 23:59:59

            var EndTime = element[0].includes('EndTime'); //True or False
            var camera = element[0].includes('camera');
            var EnteredSubtotal = element[0].includes('EnteredSubtotal');
            var ExitedSubtotal = element[0].includes('ExitedSubtotal');
            var StartTime = element[0].includes('StartTime');

            if (EndTime) {
                lista_string.push(['EndTime', dados]);
            }

            else if (camera) {
                lista_string.push(['camera',dados]);
            }

            else if (EnteredSubtotal) {
                lista_string.push(['Entered',dados]);
            }

            else if (ExitedSubtotal) {
                lista_string.push(['Exited',dados]);
            }

            else if (StartTime) {
                lista_string.push(['StartTime',dados]);
            }
        
           
        });
        this.contagem[camera] = lista_string; 
    }

    Printar() {
        var soma = 0;
        var cont = 0;
        var lista = JSON.parse(this.contagem);

        console.log(lista);

        /*for (let i of Object.values(this.contagem)) {
            lista = i;
            console.log(typeof(lista));
        }

        for (let [k,v] of Object.entries(this.contagem)) {
            for (let j in v) {
                console.log(j);
            }
        }*/
    }

    /*function printar_totais () {

    }*/

}

const { interfaces } = require("mocha");
var dado = '';
var lista = [];

const prompt = require("prompt-sync")();

var qtd_dados = prompt('Repetições de Dados: ').split('='); //Quantidade de contagem de dados

for (let i = 1; i <= parseInt(qtd_dados[1]); i++) {

    console.log('')
    var camera = prompt('Identificação da Câmera: ');
    lista.push('camera=' + camera); 

    for (let i = 0; i <= 5; i++) {
        dado = prompt('Dado: ').trim(); //lista de informações de dados
        lista.push(dado);
        
    }
}

var camera = new Camera();
camera.Insert(lista);
camera.Printar();

    
//var dois = prompt('teu: ');