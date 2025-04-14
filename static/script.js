const caja = document.getElementById("caja")
const boton = document.getElementById("colorBtn")



const colores = [
    {fondo: "white", texto: "black" },
    {fondo: "black", texto: "white" },
    {fondo: "skyblue", texto: "red" }
];


let color_pareja = 0;

caja.addEventListener("keydown", (e)=>{
    if (e.key === "Enter"){
        alert(`Texto ingresado: ${caja.value}` )
    }
})

boton.addEventListener("click", () => {
    const colorActual = colores[color_pareja];
    caja.style.backgroundColor = colorActual.fondo;
    caja.style.color = colorActual.texto;

    color_pareja = (color_pareja + 1) % colores.length;
})


