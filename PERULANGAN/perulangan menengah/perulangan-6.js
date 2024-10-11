function hitungHariKe(tanggal, bulan) {
    let hariKe = tanggal; // Mulai dari tanggal input
    if (bulan > 1) hariKe += 31; // Januari
    if (bulan > 2) hariKe += 28; // Februari
    if (bulan > 3) hariKe += 31; // Maret
    if (bulan > 4) hariKe += 30; // April
    if (bulan > 5) hariKe += 31; // Mei
    if (bulan > 6) hariKe += 30; // Juni
    if (bulan > 7) hariKe += 31; // Juli
    if (bulan > 8) hariKe += 31; // Agustus
    if (bulan > 9) hariKe += 30; // September
    if (bulan > 11) hariKe += 31; // November
    if (bulan > 12) hariKe += 31; // Desember
   
    

    return hariKe;
}

// Contoh penggunaan:
let tanggal = prompt("Masukkan tanggal:");
let bulan = prompt("Masukkan bulan:");
let hasil = hitungHariKe(parseInt(tanggal), parseInt(bulan));
alert("Hari ke-" + hasil);