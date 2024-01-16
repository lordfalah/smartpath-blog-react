export const validateDate = (date_start) => {
  const currentDate = new Date(); // Mendapatkan tanggal saat ini
  const startDate = new Date(date_start);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = startDate.toLocaleDateString("id-ID", options);
  let date = null;

  if (startDate < currentDate) {
    return {
      check: true,
      date,
    };
    // Lakukan sesuatu jika tanggal sudah lewat
  } else {
    return {
      check: false,
      date: formattedDate,
    };
    // Lakukan sesuatu jika tanggal belum lewat
  }
};

export function persingkatTeks(teks, panjangMaksimal) {
  if (teks.length > panjangMaksimal) {
    return teks.substring(0, panjangMaksimal) + "...";
  }
  return teks;
}
