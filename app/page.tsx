import Image from "next/image";
import SiteHeader from "./site-header";

const WHATSAPP_LINK = "https://wa.me/62895363076706";

const features = [
  {
    icon: "bolt",
    title: "Pesan Cepat",
    body: "Scan QR Code, pesan dalam hitungan detik",
  },
  {
    icon: "bell",
    title: "Update Real-time",
    body: "Pesanan langsung masuk ke sistem secara otomatis",
  },
  {
    icon: "bars",
    title: "Operasional Rapi",
    body: "Terhubung ke kasir, kitchen, bar, dan operator",
  },
  {
    icon: "shield",
    title: "Tanpa Beban Staf",
    body: "Proses lebih efisien, layanan tamu semakin maksimal",
  },
];

const flow = [
  ["qr", "Tamu Pesan", "Scan QR Code"],
  ["cloud", "Pesanan Masuk", "ke Sistem"],
  ["screen", "Dikirim ke", "Kasir"],
  ["chef", "Diteruskan ke", "Kitchen / Bar"],
  ["bell", "Operator", "Siap Antar"],
];

const aboutStats = [
  ["3x", "alur lebih ringkas dari tamu ke dapur"],
  ["24/7", "pemesanan mandiri tanpa menunggu staf"],
  ["1 QR", "akses menu digital untuk setiap kamar atau meja"],
];

const aboutPoints = [
  "Tamu membuka menu dari QR Code, memilih pesanan, lalu checkout dari ponsel.",
  "Order otomatis masuk ke kasir, kitchen, bar, dan operator tanpa input ulang.",
  "Hotel bisa menjaga layanan tetap cepat meski staf sedang menangani banyak kamar.",
];

const detailItems = [
  [
    "Menu QR",
    "Tamu scan QR dari kamar atau meja lalu melihat menu digital yang sudah tersusun rapi.",
  ],
  [
    "Checkout Cepat",
    "Pesanan, pajak, metode bayar, dan total tampil jelas sebelum dikonfirmasi.",
  ],
  [
    "Order Tracking",
    "Status pesanan membantu staf tahu order baru, siap diproses, hingga siap antar.",
  ],
  [
    "Multi Area",
    "Pesanan bisa diteruskan ke kasir, kitchen, bar, dan operator sesuai kebutuhan hotel.",
  ],
];

const pricingBenefits = [
  "Scan QR Acrylic full design untuk meja/kamar",
  "Setup menu digital awal dan konfigurasi QR",
  "Pelatihan penggunaan aplikasi untuk tim operasional",
  "Alur pesanan ke kasir, kitchen, bar, dan operator",
  "Monitoring pesanan masuk secara real-time",
  "Dukungan onboarding sampai aplikasi siap digunakan",
];

const trustItems = [
  ["shield", "Aman & Terpercaya", "Sistem aman dengan backup data berkala."],
  [
    "bell",
    "Implementasi Cepat",
    "Setup dan aktivasi cepat, bisa langsung digunakan.",
  ],
  [
    "cloud",
    "Dukungan Penuh",
    "Tim support siap membantu kapan saja Anda butuh.",
  ],
  [
    "bars",
    "Bantu Tingkatkan Bisnis",
    "Operasional lebih efisien, pelayanan lebih maksimal.",
  ],
];

function Icon({
  name,
  className = "h-8 w-8",
}: {
  name: string;
  className?: string;
}) {
  const stroke = "currentColor";

  if (name === "bolt") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <path d="M13.8 2 4 13h6.7L9.9 22 20 10.6h-6.8L13.8 2Z" />
      </svg>
    );
  }

  if (name === "bell") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M6.8 10.4a5.2 5.2 0 0 1 10.4 0v4.2l1.8 2.2H5l1.8-2.2v-4.2Z"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 19a2.2 2.2 0 0 0 4 0"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 3v2"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "bars") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <rect x="4" y="12" width="4" height="8" rx="1.2" />
        <rect x="10" y="8" width="4" height="12" rx="1.2" />
        <rect x="16" y="4" width="4" height="16" rx="1.2" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M12 3 19 6v5.7c0 4.2-2.7 7.2-7 9.3-4.3-2.1-7-5.1-7-9.3V6l7-3Z"
          stroke={stroke}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="m9 12 2 2 4-4"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "qr") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm11 1h2v2h-2v-2Zm4 0h1v5h-5v-1h4v-4Zm-7-3h2v2h-2v-2Zm0 5h2v3h-2v-3Z"
          stroke={stroke}
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "cloud") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M8 18H6.8A4.8 4.8 0 1 1 8 8.6a6 6 0 0 1 11.2 2.8A3.5 3.5 0 0 1 18.5 18H16"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 13v8m0 0-3-3m3 3 3-3"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "screen") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <rect
          x="4"
          y="5"
          width="16"
          height="11"
          rx="1.5"
          stroke={stroke}
          strokeWidth="2"
        />
        <path
          d="M9 20h6m-3-4v4"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "chef") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M7.5 10.4A3 3 0 1 1 10 5.5a3.3 3.3 0 0 1 6.1 0 3 3 0 1 1 .4 5.9v7.1h-9v-8.1Z"
          stroke={stroke}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 15h6"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <path d="M12.04 2a9.86 9.86 0 0 0-8.46 14.94L2.2 22l5.18-1.36A9.94 9.94 0 1 0 12.04 2Zm0 1.8a8.12 8.12 0 1 1-3.96 15.2l-.36-.2-3.08.8.82-3-.24-.38a8.07 8.07 0 0 1 6.82-12.42Zm-3.5 3.9c-.18 0-.48.06-.74.34-.26.28-.98.96-.98 2.34 0 1.38 1 2.72 1.14 2.9.14.18 1.94 3.1 4.82 4.22 2.38.94 2.86.76 3.38.72.52-.04 1.66-.68 1.9-1.34.24-.66.24-1.22.16-1.34-.08-.12-.26-.2-.56-.34-.3-.14-1.66-.82-1.94-.92-.26-.1-.46-.14-.66.14-.18.28-.76.92-.92 1.1-.18.2-.34.22-.64.08-.3-.14-1.24-.46-2.36-1.46-.88-.78-1.46-1.74-1.64-2.04-.16-.28-.02-.44.12-.58.14-.14.3-.34.44-.5.14-.18.18-.3.28-.5.1-.2.04-.38-.02-.52-.08-.14-.66-1.58-.9-2.16-.24-.56-.48-.48-.66-.5h-.56Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="4.5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="2" />
        <circle cx="16.8" cy="7.2" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <rect
          x="4"
          y="6"
          width="16"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="m5 8 7 5 7-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return null;
}

function BrandMark() {
  return (
    <Image
      src="/archana-logo.png"
      alt=""
      width={48}
      height={60}
      className="h-10 w-10 object-contain sm:h-12 sm:w-12"
      priority
    />
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7eb] text-[#1d120b]">
      <SiteHeader />

      <section className="relative min-h-[760px] px-5 pb-5 pt-24 sm:px-8 sm:pb-6 sm:pt-28 lg:min-h-[860px] lg:px-14">
        <Image
          src="/hero.png"
          alt="Tamu hotel memesan layanan kamar melalui ponsel"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 z-0 hidden object-cover object-center sm:block lg:object-contain lg:object-right-top"
        />
        <div className="absolute inset-0 z-10 bg-[#fff8ed] sm:hidden" />
        <div className="absolute inset-0 z-10 hidden bg-[linear-gradient(90deg,#fff8ed_0%,rgba(255,248,237,.9)_25%,rgba(255,248,237,.46)_48%,rgba(255,248,237,0)_78%)] sm:block" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-44 bg-gradient-to-t from-[#fff7eb] via-[#fff7eb]/80 to-transparent" />

        <div className="relative z-20 mx-auto flex min-h-[calc(760px-7rem)] max-w-[1500px] flex-col lg:min-h-[calc(860px-7rem)]">
          <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1fr_.92fr] lg:py-14">
            <div className="animate-fade-up max-w-3xl">
              <div className="mb-8 inline-flex max-w-full items-center gap-3 rounded-full bg-white/55 py-2 pl-2 pr-5 text-sm font-bold text-[#f26d00] shadow-[0_14px_45px_rgba(110,67,20,.08)] backdrop-blur sm:text-base">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#ff8a00]">
                  <Icon name="bolt" className="h-6 w-6" />
                </span>
                Smart Order untuk Hotel Modern
              </div>

              <h1 className="max-w-[720px] text-4xl font-black leading-[1.1] tracking-normal sm:text-6xl lg:text-7xl">
                Upgrade room service hotel dengan{" "}
                <span className="text-[#ff7900]">smart order</span> yang cepat.
              </h1>

              <p className="mt-6 max-w-[610px] text-base font-medium leading-8 text-[#51483f] sm:mt-7 sm:text-xl sm:leading-9">
                Archana App membantu tamu pesan menu dari kamar atau meja lewat
                QR Code. Pesanan langsung masuk ke kasir, kitchen, bar, dan
                operator sehingga operasional lebih rapi tanpa menambah beban
                staf.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={WHATSAPP_LINK}
                  className="inline-flex h-14 w-full items-center justify-center gap-4 rounded-full bg-[#ff7900] px-6 text-base font-bold text-white shadow-[0_16px_35px_rgba(255,121,0,.25)] transition hover:bg-[#f26d00] sm:w-auto sm:px-8 sm:text-lg"
                >
                  Coba Gratis Sekarang
                  <span className="text-3xl leading-none">-&gt;</span>
                </a>
                <a
                  href="/archana-smart-order.pdf"
                  download
                  className="hidden h-14 items-center justify-center gap-4 rounded-full px-2 text-lg font-extrabold text-[#1d120b] lg:inline-flex"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/75 text-[#1d120b] shadow-[0_12px_30px_rgba(92,55,20,.1)]">
                    <span className="ml-1 h-0 w-0 border-y-[8px] border-l-[12px] border-y-transparent border-l-current" />
                  </span>
                  <span className="underline decoration-2 underline-offset-4">
                    Lihat Cara Kerja
                  </span>
                </a>
              </div>

              <div className="animate-soft-float relative mt-8 overflow-hidden rounded-[8px] sm:hidden">
                <Image
                  src="/mobile-hero-v2.png"
                  alt="Staf Archana App menggunakan tablet untuk menerima pesanan QR"
                  width={608}
                  height={760}
                  sizes="100vw"
                  className="h-auto w-full object-contain"
                  priority
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#fff8ed] via-[#fff8ed]/66 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#fff8ed] via-[#fff8ed]/42 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#fff8ed] via-[#fff8ed]/42 to-transparent" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-16 bg-gradient-to-tr from-[#fff8ed] via-[#fff8ed]/58 to-transparent" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-16 bg-gradient-to-tl from-[#fff8ed] via-[#fff8ed]/58 to-transparent" />
              </div>

              <div className="mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {features.map((feature) => (
                  <article
                    key={feature.title}
                    className="animate-fade-up min-h-28 rounded-[8px] bg-white/68 p-4 shadow-[0_20px_45px_rgba(106,63,17,.09)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/82 sm:min-h-44 sm:p-5"
                  >
                    <Icon
                      name={feature.icon}
                      className="mb-3 h-9 w-9 text-[#f7a000] sm:mb-4 sm:h-10 sm:w-10"
                    />
                    <h2 className="text-sm font-black leading-5 sm:text-base">
                      {feature.title}
                    </h2>
                    <p className="mt-2 hidden text-sm font-medium leading-6 text-[#4f463e] sm:block">
                      {feature.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="hidden min-h-[610px] lg:block" />
          </div>

          <div className="relative mx-auto mb-3 hidden w-full max-w-5xl grid-cols-1 gap-4 rounded-[8px] bg-white/78 p-4 shadow-[0_18px_55px_rgba(84,48,13,.1)] backdrop-blur lg:grid lg:grid-cols-5">
            {flow.map(([icon, title, subtitle], index) => (
              <div
                key={title}
                className="relative flex items-center gap-4 px-3 py-3"
              >
                <Icon
                  name={icon}
                  className="h-10 w-10 shrink-0 text-[#f7a000]"
                />
                <div>
                  <h3 className="text-sm font-black">{title}</h3>
                  <p className="text-sm font-medium text-[#54483f]">
                    {subtitle}
                  </p>
                </div>
                {index < flow.length - 1 ? (
                  <span className="absolute -right-2 hidden text-2xl font-bold text-[#ff7900] lg:block">
                    --&gt;
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative min-h-[780px] overflow-hidden bg-[#fff7eb] px-5 py-16 sm:min-h-[820px] sm:px-8 sm:py-20 lg:px-14 lg:py-24"
      >
        <Image
          src="/about-hero.png"
          alt="Staf hotel menggunakan tablet untuk mengelola pesanan Archana App"
          fill
          sizes="100vw"
          className="absolute inset-0 object-cover object-[38%_top] sm:object-top"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,247,235,.74)_0%,rgba(255,247,235,.72)_100%)] sm:bg-[linear-gradient(90deg,rgba(255,247,235,0)_0%,rgba(255,247,235,.08)_40%,rgba(255,247,235,.48)_62%,rgba(255,247,235,.74)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#fff7eb] via-[#fff7eb]/38 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#fff7eb] via-[#fff7eb]/34 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1500px] items-center justify-end sm:min-h-[660px]">
          <div className="animate-fade-up w-full max-w-2xl rounded-[8px] bg-white/38 p-4 backdrop-blur-[2px] sm:bg-transparent sm:p-0 sm:backdrop-blur-none">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/70 py-2 pl-2 pr-5 text-base font-bold text-[#f26d00] shadow-[0_14px_45px_rgba(110,67,20,.08)] backdrop-blur">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#ff8a00]">
                <Icon name="screen" className="h-6 w-6" />
              </span>
              Tentang Archana App
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-normal text-[#1d120b] sm:text-5xl lg:text-6xl">
              Operasional hotel lebih ringan, layanan tamu tetap terasa cepat.
            </h2>

            <p className="mt-6 text-base font-medium leading-8 text-[#51483f] sm:text-xl sm:leading-9">
              Archana App membantu tim hotel menerima pesanan dari kamar atau
              meja lewat QR Code. Pesanan langsung diteruskan ke bagian yang
              tepat, sehingga staf bisa fokus menyiapkan dan mengantar pesanan
              tanpa bolak-balik mencatat manual.
            </p>

            <div className="mt-8 space-y-4">
              {aboutPoints.map((point) => (
                <div
                  key={point}
                  className="flex gap-4 rounded-[8px] bg-white/68 p-4 shadow-[0_18px_45px_rgba(106,63,17,.07)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/82"
                >
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ff7900] text-sm font-black text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path
                        d="m6 12 4 4 8-8"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="text-sm font-semibold leading-7 text-[#3f352d] sm:text-base">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {aboutStats.map(([value, label]) => (
                <div
                  key={value}
                  className="rounded-[8px] border border-[#f7c982]/70 bg-white/62 p-5 shadow-[0_14px_32px_rgba(106,63,17,.06)] backdrop-blur"
                >
                  <p className="text-3xl font-black text-[#ff7900]">{value}</p>
                  <p className="mt-2 text-sm font-bold leading-6 text-[#55483f]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="detail"
        className="relative overflow-hidden bg-[#fff7eb] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1500px] items-center gap-8 lg:grid-cols-[.82fr_1.18fr]">
          <div className="animate-fade-up w-full max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/70 py-2 pl-2 pr-5 text-base font-bold text-[#f26d00] shadow-[0_14px_45px_rgba(110,67,20,.08)] backdrop-blur">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#ff8a00]">
                <Icon name="bars" className="h-6 w-6" />
              </span>
              Detail Aplikasi
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-normal text-[#1d120b] sm:text-5xl lg:text-6xl">
              Semua langkah pemesanan dibuat jelas dari menu sampai order
              selesai.
            </h2>

            <p className="mt-6 text-base font-medium leading-8 text-[#51483f] sm:text-xl sm:leading-9">
              Archana App menghubungkan pengalaman tamu dan kebutuhan
              operasional hotel dalam satu alur. Menu tampil menarik untuk tamu,
              checkout mudah dipahami, dan setiap pesanan langsung terbaca oleh
              tim yang bertugas.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {detailItems.map(([title, body]) => (
                <article
                  key={title}
                  className="rounded-[8px] bg-white/68 p-5 shadow-[0_18px_45px_rgba(106,63,17,.07)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/82"
                >
                  <h3 className="text-lg font-black text-[#1d120b]">{title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-[#55483f]">
                    {body}
                  </p>
                </article>
              ))}
            </div>

            <a
              href="#pricing"
              className="mt-9 inline-flex h-14 w-full items-center justify-center gap-4 rounded-full bg-[#ff7900] px-6 text-base font-bold text-white shadow-[0_16px_35px_rgba(255,121,0,.25)] transition hover:bg-[#f26d00] sm:w-auto sm:px-8 sm:text-lg"
            >
              Lihat Paket Archana
              <span className="text-3xl leading-none">-&gt;</span>
            </a>
          </div>

          <div className="animate-soft-float relative overflow-hidden lg:-mr-20">
            <Image
              src="/detail-app.png"
              alt="Detail fitur Archana App dengan tampilan menu, checkout, dan status pesanan"
              width={1080}
              height={1080}
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="relative mx-auto h-auto w-full max-w-[720px] object-contain lg:ml-auto lg:max-w-[980px]"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-[#fff7eb] to-transparent sm:w-28" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-[#fff7eb] to-transparent sm:w-16" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#fff7eb] to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#fff7eb] to-transparent" />
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="relative overflow-hidden bg-[#fff7eb] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="grid items-center gap-8 lg:grid-cols-[.9fr_1fr_.95fr]">
            <div className="animate-fade-up max-w-xl">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/70 py-2 pl-2 pr-5 text-base font-bold text-[#f26d00] shadow-[0_14px_45px_rgba(110,67,20,.08)] backdrop-blur">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#ff8a00]">
                  <Icon name="shield" className="h-6 w-6" />
                </span>
                Pricing Archana App
              </div>

              <h2 className="text-3xl font-black leading-tight tracking-normal text-[#1d120b] sm:text-5xl">
                Mulai smart order hotel tanpa ribet dari hari pertama.
              </h2>

              <p className="mt-6 text-base font-medium leading-8 text-[#51483f] sm:text-lg sm:leading-9">
                Paket Archana App dibuat sederhana: satu biaya setup untuk
                menyiapkan sistem, QR, dan pelatihan tim. Setelah aktif, biaya
                operasional mengikuti transaksi yang berhasil masuk lewat
                aplikasi.
              </p>

              <div className="mt-8 rounded-[8px] border border-[#f7c982]/70 bg-white/62 p-6 shadow-[0_18px_45px_rgba(106,63,17,.07)] backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[.14em] text-[#ff7900]">
                  Biaya transaksi
                </p>
                <div className="mt-3 flex flex-wrap items-end gap-2">
                  <span className="text-3xl font-black text-[#1d120b] sm:text-4xl">
                    Rp1.000
                  </span>
                  <span className="pb-2 text-base font-bold text-[#6b5b4d]">
                    / transaksi
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#55483f]">
                  Cocok untuk hotel yang ingin biaya berjalan tetap ringan dan
                  mudah dihitung.
                </p>
              </div>
            </div>

            <article className="animate-fade-up relative rounded-[8px] border border-white/80 bg-white/78 p-5 shadow-[0_28px_70px_rgba(106,63,17,.14)] backdrop-blur transition duration-300 hover:-translate-y-1 sm:p-7">
              <div className="mb-5 inline-flex rounded-full bg-[#fff1d6] px-4 py-2 text-sm font-black text-[#ff7900] sm:absolute sm:right-6 sm:top-6 sm:mb-0">
                Paket Awal
              </div>
              <p className="text-base font-black text-[#ff7900]">
                Setup Archana App
              </p>
              <div className="mt-4 flex flex-wrap items-end gap-2">
                <span className="text-4xl font-black tracking-normal text-[#1d120b] sm:text-5xl">
                  Rp1.000.000
                </span>
              </div>
              <p className="mt-5 text-base font-semibold leading-7 text-[#55483f]">
                Sekali bayar untuk aktivasi sistem, penyiapan QR, onboarding,
                dan pelatihan penggunaan aplikasi untuk tim hotel.
              </p>

              <div className="mt-7 space-y-3">
                {pricingBenefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ff7900] text-white">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          d="m6 12 4 4 8-8"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p className="text-sm font-bold leading-6 text-[#3f352d]">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP_LINK}
                className="mt-8 inline-flex h-14 w-full items-center justify-center gap-4 rounded-full bg-[#ff7900] px-6 text-base font-bold text-white shadow-[0_16px_35px_rgba(255,121,0,.25)] transition hover:bg-[#f26d00] sm:px-8 sm:text-lg"
              >
                Mulai Konsultasi
              </a>
            </article>

            <div className="animate-soft-float relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[8px] lg:max-w-none">
              <Image
                src="/pricing-acrylic.png"
                alt="Scan QR Acrylic full design untuk Archana App"
                width={1024}
                height={1536}
                sizes="(min-width: 1024px) 31vw, 100vw"
                className="h-auto w-full object-contain"
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#fff7eb] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#fff7eb] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#fff7eb] to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#fff7eb] to-transparent" />
            </div>
          </div>

          <div className="mt-12 grid gap-4 rounded-[8px] bg-white/78 p-4 shadow-[0_18px_55px_rgba(84,48,13,.1)] backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map(([icon, title, body], index) => (
              <div
                key={title}
                className={`flex items-center gap-4 px-4 py-3 ${
                  index > 0 ? "lg:border-l lg:border-[#f1d9b7]" : ""
                }`}
              >
                <Icon
                  name={icon}
                  className="h-11 w-11 shrink-0 text-[#ff8a00]"
                />
                <div>
                  <h3 className="text-sm font-black text-[#1d120b]">{title}</h3>
                  <p className="mt-1 text-xs font-semibold leading-5 text-[#55483f]">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#1d120b] px-5 py-12 text-white sm:px-8 lg:px-14">
        <div className="mx-auto grid max-w-[1500px] gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-4"
              aria-label="Archana App home"
            >
              <BrandMark />
              <span className="text-xl font-extrabold tracking-normal sm:text-2xl">
                Archana App
              </span>
            </a>
            <p className="mt-5 max-w-xl text-base font-medium leading-7 text-white/72">
              Smart order untuk hotel modern: bantu tamu pesan lebih cepat, dan
              bantu tim operasional bekerja lebih rapi dari satu sistem.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <a
              href="https://wa.me/62895363076706"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#ff7900]"
              aria-label="Hubungi Archana App via WhatsApp"
            >
              <Icon name="whatsapp" className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/archana.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#ff7900]"
              aria-label="Kunjungi Instagram Archana Tech"
            >
              <Icon name="instagram" className="h-6 w-6" />
            </a>
            <a
              href="mailto:archanaaditama@gmail.com"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#ff7900]"
              aria-label="Kirim email ke Archana App"
            >
              <Icon name="mail" className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-[1500px] flex-col gap-3 border-t border-white/12 pt-6 text-sm font-semibold text-white/52 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Archana App. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="/terms"
              className="transition hover:text-white/80"
            >
              Syarat &amp; Ketentuan
            </a>
            <span className="text-white/24">|</span>
            <p>Built for hotel, villa, and hospitality operations.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
