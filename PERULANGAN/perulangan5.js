let batasAwal = parseInt(prompt("masukan batas awal: "));
let batasAkhir = parseInt(prompt("masukan batas akhir: "));

for(let i = batasAwal; i <= batasAkhir; i++) {
    if (i % 2 !== 0) {
        count++;
    }
}
alert(count)