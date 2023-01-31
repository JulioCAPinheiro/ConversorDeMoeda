function ConversorDeMoeda() {
    // Declrando o nome do usuário
    var nomeDoUsuario = "Júlio"
    //Declarando Valor do Dolar
    var MoedaEmDolar = 50;
    //Cotação Atual
    var MoedaEmReal = 5.12;

    // Aqui coloquei os valores das moedas que irão ser Convertidas
    var ConverteMoedas = MoedaEmReal * MoedaEmDolar;

    alert("Olá " + nomeDoUsuario + " a sua moeda está no valor de: " + "R$ " + ConverteMoedas);

}

function ConverteCriptmoeda() {
    // Declrando o nome do usuário/Comprador
    var nomeDoUsuario = "Júlio"
    // Valor atual do Ethereum
    var CriptoEtherum = 8006.85;
    var NumeroDeEtherum = 2;
    //MOoeda de Cambio
    var MoedaEmDolar = 5.12;

    // Declarando a formula de compra

    var compraEtherum = ((CriptoEtherum * NumeroDeEtherum) / MoedaEmDolar);

    alert("Olá " + nomeDoUsuario + " A compra de seues Ehereum foi de :" + "R$ " + compraEtherum);
}

function AnosLuz() {

    // De Km em anos luz
    var kmEmAnosLuz = 9.5 * Math.pow(10, 12);
    var Km = 1;
    // Anos luz
    var ly = kmEmAnosLuz * Km;

    alert(ly);

}

function Temperatura() {
    //Declarando os calculos das variaveis
    var C = 0;
    var F = 32;
    var K = 273

    var Celsius_Para_Kelvin = C + 273;
    var Kelvin_Para_Celsius = K - 273;
    var Fahrenheit_Para_Celcius = Math.round((F - 32)) / 1.8;
    var Celsius_Para_Fahrenheit = Math.round((C * 1.8)) + 32;

    alert(Celsius_Para_Kelvin);
    alert(Kelvin_Para_Celsius);
    alert(Fahrenheit_Para_Celcius);
    alert(Celsius_Para_Fahrenheit);

}

//Temperatura();

//AnosLuz();

//ConverteCriptmoeda();

//ConversorDeMoeda();