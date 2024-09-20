
function obliczCene() {
    let cena = document.querySelector('input[name="dlugosc"]:checked').value;
    document.getElementById("wynik").innerHTML = "Cena strzyżenia: " + cena;
}