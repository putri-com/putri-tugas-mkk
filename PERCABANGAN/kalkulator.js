function kalkulator() {
    // Meminta input dari pengguna
    let num1 = parseFloat(prompt("Masukkan bilangan pertama:"));
    let operator = prompt("Masukkan operator (+, -, x, :):");
    let num2 = parseFloat(prompt("Masukkan bilangan kedua:"));

    // Variabel untuk menyimpan hasil
    let result;

    // Memeriksa apakah input berupa angka
    if (isNaN(num1) || isNaN(num2)) {
        alert("Masukkan angka yang valid!");
        return;
    }

    
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === 'x') {
        result = num1 * num2;
    } else if (operator === ':') {
        if (num2 === 0) {
            alert("Pembagian dengan nol tidak diperbolehkan!");
            return;
        }
        result = num1 / num2;
    } else {
        alert("Masukkan operator yang valid (+, -, x, :)!");
        return;
    }

    // Menampilkan hasil perhitungan dengan alert
    alert("Hasil: " + result);
}

// Memanggil fungsi kalkulator
kalkulator();