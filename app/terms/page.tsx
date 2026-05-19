import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Syarat & Ketentuan - Archana App",
  description:
    "Syarat dan Ketentuan penggunaan layanan Archana App - Smart Order untuk Hotel.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fff7eb] text-[#1d120b]">
      {/* Header */}
      <header className="border-b border-[#f1d9b7] bg-[#fff8ed]/90 px-5 py-5 backdrop-blur sm:px-8 lg:px-14">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Kembali ke halaman utama"
          >
            <Image
              src="/archana-logo.png"
              alt=""
              width={48}
              height={60}
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-extrabold tracking-normal">
              Archana App
            </span>
          </Link>
          <Link
            href="/"
            className="rounded-full bg-[#ff7900] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#f26d00]"
          >
            Kembali
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
        <h1 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
          Syarat &amp; Ketentuan
        </h1>
        <p className="mt-4 text-base font-medium text-[#51483f]">
          Terakhir diperbarui: 19 Mei 2025
        </p>

        <div className="mt-10 space-y-10 text-base leading-8 text-[#3f352d]">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-black text-[#1d120b]">
              1. Ketentuan Penggunaan
            </h2>
            <p className="mt-3">
              Archana App ditawarkan kepada Anda, pengguna, dengan syarat
              penerimaan Anda terhadap syarat, ketentuan, dan pemberitahuan yang
              tercantum di sini serta syarat dan ketentuan tambahan, perjanjian,
              dan pemberitahuan yang mungkin berlaku untuk setiap halaman atau
              bagian dari Layanan.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-black text-[#1d120b]">
              2. Gambaran Umum
            </h2>
            <p className="mt-3">
              Penggunaan Anda atas Layanan ini merupakan persetujuan Anda
              terhadap semua syarat, ketentuan, dan pemberitahuan. Harap baca
              dengan seksama. Dengan menggunakan Layanan ini, Anda menyetujui
              Syarat dan Ketentuan ini, serta syarat, pedoman, atau aturan lain
              yang berlaku untuk setiap bagian dari Layanan ini, tanpa batasan
              atau pengecualian. Jika Anda tidak menyetujui Syarat dan Ketentuan
              ini, Anda harus segera berhenti menggunakan Layanan dan
              menghentikan segala penggunaan informasi atau produk dari Layanan
              ini.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-black text-[#1d120b]">
              3. Modifikasi Layanan dan Syarat &amp; Ketentuan
            </h2>
            <p className="mt-3">
              Archana App berhak untuk mengubah, memodifikasi, memperbarui, atau
              menghentikan syarat, ketentuan, dan pemberitahuan yang mengatur
              Layanan ini, termasuk tautan, konten, informasi, harga, dan materi
              lain yang ditawarkan melalui Layanan ini kapan saja dan dari waktu
              ke waktu tanpa pemberitahuan atau kewajiban lebih lanjut kepada
              Anda kecuali sebagaimana ditentukan di dalamnya. Kami berhak
              menyesuaikan harga dari waktu ke waktu. Jika karena suatu alasan
              terjadi kesalahan harga, Archana App berhak menolak pesanan.
              Dengan terus menggunakan Layanan setelah modifikasi, perubahan,
              atau pembaruan tersebut, Anda setuju untuk terikat oleh modifikasi,
              perubahan, atau pembaruan tersebut.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-black text-[#1d120b]">
              4. Hak Kekayaan Intelektual
            </h2>
            <p className="mt-3">
              Layanan ini dimiliki dan dioperasikan oleh Archana App. Kecuali
              dinyatakan lain, semua materi pada Layanan ini, termasuk merek
              dagang, merek layanan, dan logo adalah milik Archana App dan
              dilindungi oleh undang-undang hak cipta Indonesia dan di seluruh
              dunia oleh undang-undang hak cipta yang berlaku. Tidak ada materi
              yang dipublikasikan oleh Archana App pada Layanan ini, baik
              seluruhnya maupun sebagian, boleh disalin, direproduksi,
              dimodifikasi, diterbitkan ulang, diunggah, diposting,
              ditransmisikan, atau didistribusikan dalam bentuk apa pun atau
              dengan cara apa pun tanpa izin tertulis sebelumnya dari Archana
              App.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-black text-[#1d120b]">
              5. Pendaftaran Akun
            </h2>
            <p className="mt-3">
              Anda perlu mendaftar pada Layanan ini untuk menggunakan layanan
              dengan memasukkan username dan password Anda. Anda akan mendapatkan
              manfaat seperti notifikasi, pembaruan, dan penawaran khusus dengan
              mendaftar. Anda akan diminta untuk memberikan informasi yang akurat
              dan terkini pada semua formulir pendaftaran di Layanan ini. Anda
              bertanggung jawab sepenuhnya untuk menjaga kerahasiaan username dan
              password yang Anda pilih atau yang dipilih oleh administrator web
              Anda atas nama Anda, untuk mengakses Layanan ini serta segala
              aktivitas yang terjadi di bawah username/password Anda. Anda tidak
              akan menyalahgunakan atau membagikan username atau password Anda,
              menyalahartikan identitas Anda atau afiliasi Anda dengan suatu
              entitas, meniru orang atau entitas lain, atau menyalahartikan asal
              Materi apa pun yang Anda akses melalui Layanan ini.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-black text-[#1d120b]">
              6. Komunikasi Elektronik
            </h2>
            <p className="mt-3">
              Anda setuju bahwa Archana App dapat mengirimkan email elektronik
              kepada Anda untuk tujuan memberi tahu Anda tentang perubahan atau
              penambahan pada Layanan ini, tentang produk atau layanan Archana
              App, atau untuk tujuan lain yang kami anggap sesuai. Jika Anda
              ingin berhenti berlangganan dari newsletter kami, silakan klik
              &quot;Berhenti Berlangganan&quot; di halaman akun Anda.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-black text-[#1d120b]">
              7. Deskripsi Layanan
            </h2>
            <p className="mt-3">
              Kami selalu berusaha menampilkan informasi dan tampilan produk yang
              muncul di Layanan seakurat mungkin. Namun, kami tidak dapat
              menjamin bahwa tampilan monitor Anda akan menampilkan warna secara
              akurat karena warna aktual yang Anda lihat bergantung pada kualitas
              monitor Anda.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-black text-[#1d120b]">
              8. Pembayaran dan Transaksi
            </h2>
            <p className="mt-3">
              Semua transaksi pembayaran pada Archana App diproses melalui
              payment gateway Midtrans (PT Midtrans). Dengan menggunakan layanan
              pembayaran, Anda juga menyetujui syarat dan ketentuan yang berlaku
              dari Midtrans. Biaya transaksi sebesar Rp1.000 per transaksi
              berlaku untuk setiap pesanan yang berhasil diproses melalui
              aplikasi. Biaya setup sebesar Rp1.000.000 (sekali bayar) mencakup
              aktivasi sistem, penyiapan QR, onboarding, dan pelatihan tim.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-black text-[#1d120b]">
              9. Kebijakan Pengembalian Dana
            </h2>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                Pengembalian dana hanya berlaku jika layanan belum diaktivasi
                dalam waktu 14 hari setelah pembayaran.
              </li>
              <li>
                Setelah sistem diaktivasi dan QR Code dikirimkan, biaya setup
                tidak dapat dikembalikan.
              </li>
              <li>
                Biaya transaksi per pesanan tidak dapat dikembalikan karena
                bersifat usage-based.
              </li>
              <li>
                Permintaan pengembalian dana harus diajukan melalui email atau
                WhatsApp resmi Archana App.
              </li>
            </ul>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-black text-[#1d120b]">
              10. Kebijakan Privasi
            </h2>
            <p className="mt-3">
              Informasi Anda aman bersama kami. Archana App memahami bahwa
              masalah privasi sangat penting bagi pelanggan kami. Anda dapat
              yakin bahwa informasi apa pun yang Anda kirimkan kepada kami tidak
              akan disalahgunakan, disalahgunakan, atau dijual kepada pihak
              ketiga mana pun. Kami hanya menggunakan informasi pribadi Anda
              untuk memproses pesanan Anda dan meningkatkan kualitas layanan
              kami.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-black text-[#1d120b]">
              11. Keamanan Data
            </h2>
            <p className="mt-3">
              Archana App akan mengambil semua langkah yang wajar untuk mencegah
              pelanggaran keamanan dalam interaksi servernya dengan Anda dan
              pelanggaran keamanan dalam interaksi dengan sumber daya atau
              pengguna di luar firewall apa pun yang mungkin dibangun ke dalam
              server Archana App. Data transaksi dienkripsi dan diproses sesuai
              standar keamanan PCI-DSS melalui Midtrans.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-black text-[#1d120b]">
              12. Ganti Rugi
            </h2>
            <p className="mt-3">
              Anda setuju untuk mengganti rugi, membela, dan membebaskan Archana
              App dari dan terhadap setiap dan semua klaim pihak ketiga,
              kewajiban, kerusakan, kerugian, atau biaya (termasuk biaya
              pengacara yang wajar dan biaya) yang timbul dari, berdasarkan, atau
              sehubungan dengan akses dan/atau penggunaan Anda atas Layanan ini.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-xl font-black text-[#1d120b]">
              13. Penafian (Disclaimer)
            </h2>
            <p className="mt-3">
              Archana App tidak bertanggung jawab atas keakuratan, ketepatan
              waktu, atau konten Materi yang disediakan pada Layanan ini. Anda
              tidak boleh berasumsi bahwa Materi pada Layanan ini terus
              diperbarui atau mengandung informasi terkini. Archana App tidak
              bertanggung jawab untuk menyediakan konten atau materi dari Layanan
              yang telah kedaluwarsa atau telah dihapus.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-xl font-black text-[#1d120b]">
              14. Batasan Tanggung Jawab
            </h2>
            <p className="mt-3">
              Dalam keadaan apa pun Archana App tidak bertanggung jawab atas
              kerusakan tidak langsung, insidental, khusus, konsekuensial, atau
              hukuman, termasuk tanpa batasan, kehilangan keuntungan, data,
              penggunaan, goodwill, atau kerugian tidak berwujud lainnya, yang
              diakibatkan oleh penggunaan atau ketidakmampuan menggunakan
              Layanan.
            </p>
          </section>

          {/* 15 */}
          <section>
            <h2 className="text-xl font-black text-[#1d120b]">
              15. Hukum yang Berlaku
            </h2>
            <p className="mt-3">
              Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan
              hukum yang berlaku di Republik Indonesia.
            </p>
          </section>

          {/* 16 */}
          <section>
            <h2 className="text-xl font-black text-[#1d120b]">
              16. Pertanyaan dan Masukan
            </h2>
            <p className="mt-3">
              Kami menyambut pertanyaan, komentar, dan kekhawatiran Anda tentang
              privasi atau informasi apa pun yang dikumpulkan dari Anda atau
              tentang Anda. Silakan kirimkan kepada kami masukan apa pun yang
              berkaitan dengan privasi, atau masalah lainnya melalui:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:archanaaditama@gmail.com"
                  className="font-bold text-[#ff7900] underline"
                >
                  archanaaditama@gmail.com
                </a>
              </li>
              <li>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/62895363076706"
                  className="font-bold text-[#ff7900] underline"
                >
                  +62 895-3630-76706
                </a>
              </li>
              <li>
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/archana.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#ff7900] underline"
                >
                  @archana.tech
                </a>
              </li>
            </ul>
          </section>

          {/* Legal Notice */}
          <section className="rounded-[8px] border border-[#f7c982]/70 bg-white/62 p-6">
            <p className="text-sm font-black uppercase tracking-[.14em] text-[#ff7900]">
              Pemberitahuan Hukum
            </p>
            <p className="mt-3 text-sm font-semibold leading-7 text-[#55483f]">
              Archana App adalah produk dari Archana Tech.
              <br />
              Pembayaran diproses oleh Midtrans (PT Midtrans).
              <br />© 2025 Archana App. Hak Cipta Dilindungi.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
