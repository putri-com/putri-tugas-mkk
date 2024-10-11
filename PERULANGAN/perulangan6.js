let batasAwal = parseInt(prompt("masukan batas awal: "));
let batasAkhir = parseInt(prompt("masukan batas akhir: "));
let count = 0;

for(let i = batasAwal; i <= batasAkhir; i++) {
    if (i % 2 !== 0) {
        count += i;
    }
}
alert(count);