// 3. Events Handler (onClick di HTML)
function tombol() {
    // 1. Membuat Teks (Manipulasi Element)
    const judul = document.getElementById('judul'); // Deklarasi Variabel 
    judul.innerHTML = 'CURRICULUM VITAE'; // innerHTML

    const cv = document.getElementById('cv');
    cv.innerHTML = '<table border="10" align="center"> <tr> <td> <img src="https://i.postimg.cc/qBKsDsJN/foto-dejet.jpg" alt=""> <h1>Dzakkir Latifan Makarim</h1> <h3>Web Developer</h3> <br> <nav> <a href="#tentang-saya">Tentang</a> <a href="#pengalaman-kerja">Pengalaman</a> <a href="#hubungi-saya">Kontak</a> </nav> <br> <h2 id="tentang-saya">Tentang</h2> <p>Biasa dipanggil Dzakkir, saya mahasiswa Institut Teknologi Sumatera (ITERA). Saya mengambil jurusan Teknik Informatika dan sekarang saya fokus pada Pengembangan Web dengan pengalaman kurang dari setahun.</p> <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"width="788.54" height="443" type="text/html" src="https://www.youtube.com/embed/y6mEu54IYLM?autoplay=1&fs=0&iv_load_policy=3&showinfo=1&rel=0&cc_load_policy=0&start=0&end=3&origin=http://youtubeembedcode.com"><div><small><a href="https://youtubeembedcode.com/es/">youtubeembedcode es</a></small></div><div><small><a href="https://mgacasinoutansvensklicens.se/">casino med mga licens utan spelpaus</a></small></div><div><small><a href="https://youtubeembedcode.com/en">youtubeembedcode en</a></small></div><div><small><a href="https://skattefrittcasino.com/">casino utan svensk licens skattefritt</a></small></div></iframe> <br><br> <h2 id="pengalaman-kerja">Pengalaman</h2> <table border="1"> <tr> <th rowspan="3">No</th> <th rowspan="3">Posisi</th> <th rowspan="3">Perusahaan</th> <tr> <th colspan="2">waktu</th> </tr> <tr> <th>mulai</th> <th>selesai</th> </tr> </tr> <tr> <td>1</td> <td>CEO</td> <td>Droidcode</td> <td>123</td> <td>456</td> </tr> <tr> <td>2</td> <td>CTO</td> <td>Google</td> <td>456</td> <td>789</td> </tr> </table><br> <form action="#"> <h2 id="hubungi-saya">Kontak</h2> <p> <label for="nama">Nama :</label> <input type="text" id="nama" name="nama"> </p> <p> <label for="tanya">sudahkah anda menonton video saya?</label> <br> <input type="radio" id="tanya" name="tanya">sudah <br> <input type="radio" id="tanya" name="tanya">belum <br> </p> <input type="checkbox"> ini <br> <input type="checkbox"> itu <br> <input type="checkbox"> anu <br> <button type="submit">Kirim</button> </form> </td> </tr> </table>';

    // 2. Membuat Element (Manipulasi Node)
    const div = document.createElement('p'); // Deklarasi Variabel untuk membuat elements
    const teksDiv = document.createTextNode('Terimakasih!'); // Deklarasi Variabel untuk mengisi teks

    div.appendChild(teksDiv); // Fungsi untuk memasukkan isi teks kedalam element yg telah dibuat

    const cetak = document.getElementById('body'); // Deklarasi Variabel untuk mencetak element yg telah dibuat

    cetak.appendChild(div); // Fungsi untuk mencetak element yg telah dibuat
}