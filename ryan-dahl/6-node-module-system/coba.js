function cetakNama(nama) {
  return `Hi, nama saya ${nama}.`
}

const PI = 3.14;

const mahasiswa = {
  nama : "Andi Saputra",
  umur : 20,
  cetakMhs(){
    return `Hallo, nama saya ${this.nama} dan saya ${this.umur} tahun.`;
  }
}

class Orang{
  constructor(){
    console.log("Objek orang telah dibuat!!");
  }
}

//jika satu persatu
// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//   cetakNama : cetakNama,
//   PI : PI,
//   mahasiswa : mahasiswa,
//   Orang : Orang,
// }

module.exports = {
  cetakNama, PI, mahasiswa, Orang,
}

