function calcularFechas() {
    let fecha = document.getElementById("fechaSiembra").value;
    let siembra = new Date(fecha);

    let riego = new Date(siembra);
    riego.setDate(riego.getDate() + 3);

    let fertilizante = new Date(siembra);
    fertilizante.setDate(fertilizante.getDate() + 7);

    document.getElementById("resultado").innerText =
        "🌧 Riego: " + riego.toDateString() +
        " | 🌿 Fertilizante: " + fertilizante.toDateString();
}

function calcularGanancia() {
    let inversion = document.getElementById("inversion").value;
    let venta = document.getElementById("venta").value;

    let ganancia = venta - inversion;

    document.getElementById("ganancia").innerText =
        "Ganancia: $" + ganancia;
}

function buscarInsumos() {
    let lista = document.getElementById("lugares");

    lista.innerHTML = `
        <li>AgroCampo</li>
        <li>Fertilizantes del Valle</li>
        <li>Insumos Agrícolas La Finca</li>
    `;
}