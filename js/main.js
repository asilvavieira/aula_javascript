function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar(){
    window.open("https://www.google.com/");
    window.location.href = "https://www.google.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}


function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual é a sua idade");
console.log(validaIdade(idade));
*/

//alert(soma(5, 10));


//var d = new Date();
//alert(d.getMonth()+1);
//alert(d.getMinutes());
//alert(d.getDay());
//alert(d.getHours());

/*
var count;
for(count=0; count <= 5; count++)
    alert(count);
*/

/*
var count = 0;
while (count < 5){
    console.log(count);
    count++
};
*/

/*
var idade = prompt("Qual é a usa idade");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}] //dicionário
console.log(frutas);
alert(frutas[1].nome);
*/

//var lista = ["maça", "pêra", "laranja"];
//lista.pop(); //remove elemento da lista
//lista.push("uva"); //adicionar elemento a lista
//console.log(lista.length); //tamanho da lista (quantidade de elementos)
//console.log(lista.reverse()); //ordem reversa da lista
//console.log(lista);
//console.log(lista.toString()); //converte a lista para strig 
//console.log(lista.join(" | "))
//alert(lista[1]);



//var nome = "Alan Vieira";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//atert(idade  + indade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLocaleLowerCase());
//alert(frase.replace("Japão", "Brasil"));
