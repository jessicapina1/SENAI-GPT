function demoFilter () {
    const numeros = [1, 2, 3, 4, 5, 6]; //Array ==lista

    let numerosFiltrados = numeros.filter (numerosFiltrados => numero > 2); // numero pode ser qualquer nome
    
    console.log (numerosFiltrados);

    

}

function demoFind() {

    let produtos = [{
        id: "1",
        nome: "Teclado",
        preco: 100

    },
    {
        id: "2",
        nome: "Mouse",
        preco: 50
    },
    {
        id: "3",
        nome: "Monitor",
        preco: 700

    }];

    let produtoCaro = produtos.find(produto => produto.preco == 700);

    console.log(produtoCaro);

}

