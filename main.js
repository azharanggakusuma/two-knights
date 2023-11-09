/**
 * Menghitung banyaknya cara dua kuda dapat ditempatkan pada papan catur kxk
 * sehingga mereka tidak saling menyerang.
 * @param {number} n - Ukuran papan catur.
 * @returns {number[]} - Array berisi banyaknya cara untuk setiap k.
**/

function countWaysToPlaceKnights(n) {
  const ways = [];

  for (let k = 1; k <= n; k++) {
    // TODO: Perhitungan cara penempatan kuda pada papan catur berukuran kxk
    if (k === 1) {
      ways.push(0);
    } else if (k === 2) {
      ways.push(6);
    } else {
      ways.push(k ** 4 - 2 * k ** 3 + 5 * k ** 2 + 4 * k);
    }
  }

  return ways;
}

// Dokumentasi Kode:
// - Fungsi countWaysToPlaceKnights menerima parameter n yang merupakan ukuran papan catur.
// - Menggunakan array 'ways' untuk menyimpan banyaknya cara penempatan kuda pada setiap ukuran papan.
// - Melakukan iterasi untuk setiap ukuran papan catur dari 1 hingga n.
// - Pada setiap iterasi, dilakukan perhitungan banyaknya cara penempatan kuda sesuai pola yang diberikan.
// - Hasil perhitungan dimasukkan ke dalam array 'ways'.
// - Fungsi mengembalikan array 'ways' sebagai output.

// Penggunaan:
const n = 8;
const output = countWaysToPlaceKnights(n);
console.log(output);