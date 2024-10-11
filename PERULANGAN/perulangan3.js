// soal no 3
let batasAwal = parseInt(prompt("masukan batas awal: "));
let batasAkhir = parseInt(prompt("masukan batas akhir: "));

for(let i = batasAwal; i <= batasAkhir; i++) {
    if (i % 2 !== 0) {
        alert(i);
    }
}
