// kalkulator function
function tambah(a, b) {
    return a + b;
}
function kurang(a, b) {
    return a - b;
}
function kali(a, b) {
    return a * b;
}
function bagi(a, b) {
    return a / b;
}
function kalkulator() {   
    let a = parseFloat(prompt("Masukkan angka pertama:"));
    let operator = prompt("Masukkan operator (+, -, x, :):");
    let b = parseFloat(prompt("Masukkan angka kedua:"));
    // buat manggil function operasi
    let operasi = {
        "+": tambah,
        "-": kurang,
        "x": kali,
        ":": bagi
    };
    if (operasi[operator]) {
        // Memanggil function berdasarkan operator yang dimasukkan pengguna
        let hasil = operasi[operator](a, b);

        // Menampilkan hasil perhitungan
        alert("Hasil: " + hasil);
    } else {
        // Jika operator tidak valid
        alert("Operator tidak valid! Masukkan salah satu dari +, -, *, /.");
    }
}
kalkulator();