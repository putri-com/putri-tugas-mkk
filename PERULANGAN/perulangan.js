function hitungLuasSegitiga() {
    let alas = parseFloat(prompt("Masukkan alas segitiga:"));
    let tinggi = parseFloat(prompt("Masukkan tinggi segitiga:"));
    let luas = (alas * tinggi) / 2;
    alert("Luas Segitiga: " + luas);
}

function hitungLuasPersegiPanjang() {
    let panjang = parseFloat(prompt("Masukkan panjang persegi panjang:"));
    let lebar = parseFloat(prompt("Masukkan lebar persegi panjang:"));
    let luas = panjang * lebar;
    alert("Luas Persegi Panjang: " + luas);
}

function cekBilanganPrima() {
    let angka = parseInt(prompt("Masukkan sebuah angka:"));
    let isPrima = true;

    if (angka === 1) {
        isPrima = false;
    } else if (angka > 1) {
        for (let i = 2; i <= Math.sqrt(angka); i++) {
            if (angka % i === 0) {
                isPrima = false;
                break;
            }
        }
    }

    if (isPrima && angka > 1) {
        alert(angka + " adalah bilangan prima.");
    } else {
        alert(angka + " bukan bilangan prima.");
    }
}

function menuUtama() {
    let pilihan;
    do {
        pilihan = prompt(
            "MENU UTAMA:\n[1] Luas Segitiga\n[2] Luas Persegi Panjang\n[3] Bilangan Prima\n[4] Exit\nMasukkan pilihan No.:"
        );

        switch (pilihan) {
            case '1':
                hitungLuasSegitiga();
                break;
            case '2':
                hitungLuasPersegiPanjang();
                break;
            case '3':
                cekBilanganPrima();
                break;
            case '4':
                alert("Keluar dari program.");
                break;
            default:
                alert("Pilihan tidak valid, silakan coba lagi.");
        }
    } while (pilihan !== '4');
}

// Menjalankan menu utama
menuUtama();