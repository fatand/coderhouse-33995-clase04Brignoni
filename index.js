/* DESAFIO CLASE 4 - MATIAS BRIGNONI */

/* Este script hace que desde el navegador mediante alerts se presente una tienda online donde el usuario debe responder a preguntas acerca de la compra de un producto y en funcion de su respuesta le calcula el costo total de la compra. */
function Producto(info){
    this.nombre = info.nombre;
    this.precio = info.precio;
    this.peso = info.peso;
};

let producto1 = new Producto({
    nombre: "Buzo",
    precio: 3100,
    peso: 0.400
});

let producto2 = new Producto({
    nombre: "Remera",
    precio: 1000,
    peso: 0.150
});

let producto3 = new Producto({
    nombre: "Short",
    precio: 1500,
    peso: 0.100
});

alert(`Bienvenidos a la tienda online!
        La lista de productos es:
        Producto - Precio - Peso
        ${producto1.nombre} - $ ${producto1.precio} - ${producto1.peso}kg
        ${producto2.nombre} - $ ${producto2.precio} - ${producto2.peso}kg
        ${producto3.nombre} - $ ${producto3.precio} - ${producto3.peso}kg
        
        El costo de envio es de $400/kg.`);

let comprarProducto1 = prompt(`¿Quiere comprar el producto ${producto1.nombre} a $ ${producto1.precio}? Su respuesta debe ser si o no. En caso contrario deberá ingresar nuevamente la respuesta.`).toLowerCase();

while ((comprarProducto1 != "si") && (comprarProducto1 != "no")) {
    comprarProducto1 = prompt(`Su respuesta es incorrecta. Vuelva a ingresar una respuesta para el producto ${producto1.nombre}.`);
}

let comprarProducto2 = prompt(`¿Quiere comprar el producto ${producto2.nombre} a $ ${producto2.precio}? Su respuesta debe ser si o no. En caso contrario deberá ingresar nuevamente la respuesta.`).toLowerCase();

while ((comprarProducto2 != "si") && (comprarProducto2 != "no")) {
    comprarProducto2 = prompt(`Su respuesta es incorrecta. Vuelva a ingresar una respuesta para el producto ${producto2.nombre}.`);
}

let comprarProducto3 = prompt(`¿Quiere comprar el producto ${producto3.nombre} a $ ${producto3.precio}? Su respuesta debe ser si o no. En caso contrario deberá ingresar nuevamente la respuesta.`).toLowerCase();

while ((comprarProducto3 != "si") && (comprarProducto3 != "no")) {
    comprarProducto3 = prompt(`Su respuesta es incorrecta. Vuelva a ingresar una respuesta para el producto ${producto3.nombre}.`);
}

function compra() {
    let carrito = 0;
    let peso = 0;
    if (comprarProducto1 === "si") {
        carrito = carrito + producto1.precio;
        peso = peso + producto1.peso;
    }

    if (comprarProducto2 === "si") {
        carrito = carrito + producto2.precio;
        peso = peso + producto2.peso;

    }


    if (comprarProducto3 === "si") {
        carrito = carrito + producto3.precio;
        peso = peso + producto3.peso;
    }

    let costoEnvio = peso * 400;
    let costoTotal = carrito + costoEnvio;

    if (carrito != 0) {
        alert(`Resumen de la compra
Subtotal - $ ${carrito}
Envío - $ ${costoEnvio}
--------------------------
Total - $ ${costoTotal}`);
        alert("Fin de la compra.");
    } else {
        alert("Dado que no ha agregado ningún producto a su carrito, usted no ha realizado ninguna compra. Gracias por su tiempo.")
    }

}

compra();