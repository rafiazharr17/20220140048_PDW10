function kirimData() {
  var nama = document.getElementById("nama").value;
  var nomor = document.getElementById("nomor").value;
  var tanggal = document.getElementById("tanggal").value;
  var lapangan = document.querySelector('input[name="lapangan"]:checked').id;
  var dari = document.getElementById("dari").value;
  var sampai = document.getElementById("sampai").value;
  var informasi = document.getElementById("informasi").value;

  alert(
    "Nama : " +
      nama +
      "\nNomor HP : " +
      nomor +
      "\nTanggal Main : " +
      tanggal +
      "\nJenis Lapangan : " +
      lapangan +
      "\nDari Jam : " +
      dari +
      " WIB" +
      "\nSampai Jam : " +
      sampai +
      " WIB" +
      "\nInformasi Tambahan : " +
      informasi
  );
}
