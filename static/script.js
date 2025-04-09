const caja = document.getElementById("caja")
const boton = document.getElementById("colorBtn")



const colores = [
    {fondo: "white", texto: "black" },
    {fondo: "black", texto: "white" },
    {fondo: "skyblue", texto: "red" }
];


let parejaColor = 0;

caja.addEventListener("keydown", (e)=>{
    if (e.key === "Enter"){
        alert(`Texto ingresado: ${caja.value}` )
    }
})

boton.addEventListener("click", () => {
    const colorActual = colores[parejaColor];
    caja.style.backgroundColor = colorActual.fondo;
    caja.style.color = colorActual.texto;

    parejaColor = (parejaColor + 1) % colores.length;
})



// const caja = document.getElementById('caja');
// const boton = document.getElementById('colorBtn');

// const colores = [
//   { fondo: 'white', texto: 'black' },
//   { fondo: 'black', texto: 'white' },
//   { fondo: 'skyblue', texto: 'red' }
// ];

// let indiceColor = 0;

// caja.addEventListener('keydown', (e) => {
//   if (e.key === 'Enter') {
//     alert(`Texto ingresado: ${caja.value}`);
//   }
// });

// boton.addEventListener('click', () => {
//   const colorActual = colores[indiceColor];
//   caja.style.backgroundColor = colorActual.fondo;
//   caja.style.color = colorActual.texto;

//   indiceColor = (indiceColor + 1) % colores.length;
// });