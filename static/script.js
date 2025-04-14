const caja = document.getElementById("caja")
const boton = document.getElementById("colorBtn")


caja.addEventListener("keydown", (e)=>{
    if (e.key === "Enter"){
        alert(`Texto ingresado: ${caja.value}` )
    }
})

const colores = [
    {fondo: "white", texto: "black" },
    {fondo: "black", texto: "white" },
    {fondo: "skyblue", texto: "red" }
];

let color_pareja = 1;

boton.addEventListener("click", () => {
    const colorActual = colores[color_pareja];

    caja.style.backgroundColor = colorActual.fondo;
    caja.style.color = colorActual.texto;

    color_pareja = (color_pareja + 1) % colores.length;
})


