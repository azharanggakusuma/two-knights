# Coding Challenge SMK Dev & Eudeka #10829


## Deskripsi

Pada submission kali ini, disediakan sebuah kode JavaScript yang memuat fungsi `countWaysToPlaceKnights` yang menghitung jumlah cara dua kuda dapat ditempatkan pada papan catur berukuran kxk sehingga keduanya tidak saling menyerang.

## Kode

```
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
```

## Cara Kerja

Mengikuti Coding Challenge dari SMK Dev dan Eudeka memiliki beberapa tujuan yang ingin dicapai:

1. Fungsi ini menerima parameter berupa bilangan bulat `n` yang menandakan ukuran papan catur.

2. Menggunakan array `ways` untuk menyimpan jumlah cara menempatkan kuda pada setiap ukuran `k`.

3. Melakukan iterasi dari 1 hingga `n` dan menghitung jumlah cara berdasarkan pola yang diberikan.

4. Hasil perhitungan disimpan dalam array `ways`.

5. Fungsi mengembalikan array `ways` sebagai output.


## Dokumentasi Kode

1. Fungsi `countWaysToPlaceKnights` menerima parameter `n` yang merupakan ukuran papan catur.

2. Menggunakan array `ways` untuk menyimpan jumlah cara menempatkan kuda pada setiap ukuran papan catur.

3. Melakukan iterasi untuk setiap ukuran papan catur dari 1 hingga `n`.

4. Pada setiap iterasi, dilakukan perhitungan jumlah cara menempatkan kuda sesuai pola yang diberikan.

5. Hasil perhitungan dimasukkan ke dalam array `ways`.

6. Fungsi mengembalikan array `ways` sebagai output.

## Penggunaan

```
const n = 8;
const output = countWaysToPlaceKnights(n);
console.log(output);
```

## Output

Output berupa array yang berisi jumlah cara menempatkan kuda untuk setiap ukuran k pada papan catur.

```
[0, 6, 84, 224, 520, 1068, 1988, 3424]
```

## Tujuan Mengikuti Coding Challenge

Mengikuti Coding Challenge dari SMK Dev dan Eudeka memiliki beberapa tujuan yang ingin dicapai:

1. **Pengembangan Keterampilan**: Tujuan utama adalah meningkatkan kemampuan pemrograman dan pemahaman tentang manipulasi array dan logika dalam pemrograman.

2. **Praktek dan Pembelajaran**: Melalui implementasi kode, peserta dapat mempraktekkan pengetahuan yang telah dipelajari dan belajar hal-hal baru dalam situasi nyata.

3. **Kolaborasi dan Komunitas**: Coding Challenge juga mempromosikan kolaborasi dengan peserta lain, berbagi pengetahuan, dan membangun komunitas yang solid dalam dunia pemrograman.

4. **Evaluasi dan Pengembangan**: Tugas-tugas yang dinilai memberikan kesempatan kepada peserta untuk menerima umpan balik dan memahami area di mana mereka dapat mengembangkan keterampilan mereka.


## Akhir Kata

Untuk informasi lebih lanjut atau jika Anda memiliki pertanyaan, Anda juga dapat menghubungi saya melalui tautan dibawah ini. Jangan ragu untuk berbagi tanggapan atau saran Anda!

<div>
    <a href="https://azharangga.my.id" target="blank"><img src="https://img.shields.io/badge/Website-https://azharangga.my.id-green?" /></a>
    <a href="https://linkedin.com/azharangga-kusuma-9a30911a0/" target="blank"><img src="https://img.shields.io/badge/Azharangga_Kusuma-30302f?style=flat&logo=linkedin" /></a>
    <a href="https://instagram.com/azharangga_kusuma/" target="blank"><img src="https://img.shields.io/badge/azharangga_kusuma-30302f?style=flat&logo=instagram" /></a>
</div>