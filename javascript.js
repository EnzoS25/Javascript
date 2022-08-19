class material {
            constructor(id, textura, precio, tamaño) {
            this.id = id
            this.textura = textura
            this.precio = precio
            this.tamaño = tamaño
            }
    }
    class bacha {
            constructor(num, modelo, valor, clase){
            this.num = num
            this.modelo = modelo
            this.valor = valor
            this.clase = clase
    }
}

const boton = document.getElementsByClassName("btn")
function textBtn() {
    for (let btn of boton) {
        console.log(btn.innerText)
    }
}

const materiales = []
const bachas = []
const carrito = []

function agregarMateriales() {
    materiales.push(new material(1, "MARMOL", 10000, "pequeño"))
    materiales.push(new material(2, "Granito", 15000, "mediano"))
    materiales.push(new material(3, "Cuarzo", 20000, "grande"))
}
function agregarBachas() {
    bachas.push(new bacha(1, "Circular", 8000, "chico"))
    bachas.push(new bacha(2, "Rectangular", 10000, "medio" ))
    bachas.push(new bacha(3, "Cuadrada", 12000, "grand"))
}

agregarMateriales();
agregarBachas();


function listaMateriales() {
    const listaMateriales = document.getElementById("listaMateriales")
    materiales.forEach(material => {
        listaMateriales.innerHTML += `
            <li>TEXTURA: ${material.textura} PRECIO: ${material.precio} TAMAÑO: ${material.tamaño}</li>`
    })
}

function listaBachas() {
    const listaBachas = document.getElementById("listaBachas")
    bachas.forEach(bacha => {
        listaBachas.innerHTML += `
            <li>MODELO: ${bacha.modelo} VALOR: ${bacha.valor} CLASE: ${bacha.clase}</li>
            
        
        `
    })
}

listaMateriales();
listaBachas();

alert("Bienvenido a Marmoleria Sabatino")
pedido = prompt("Que material desea adquirir, le dejamos una lista a continuacion: \nMarmol \nGranito \nCuarzo").toUpperCase()

let buscar = materiales.filter(el => el.textura.includes(pedido))
        
alert("Buena eleccion, el material es excelente a continuacion te diremos el precio")
        
alert(`El precio a pagar es de: ${buscar.precio} `)

alert("Excelente, material elejido, tambien tenemos bachas. A continuación vas a poder elejir si queres alguna!")
let pedidoBacha = prompt("Elegí el modelo de bacha que prefieras").toUpperCase()
let buscarPedidoBacha = bachas.find(bachas => bachas.modelo == pedidoBacha)
if (buscarPedidoBacha == undefined) {
        console.log("Lo sentimos, no contamos con ese Modelo!")
                            }
else {
        console.log(buscarPedidoBacha)
    }