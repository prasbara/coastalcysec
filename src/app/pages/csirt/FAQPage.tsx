import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

export function FAQPage() {
  const faqs = [
    {
      category: 'Umum',
      questions: [
        {
          q: 'Apa itu CSIRT UNISSULA?',
          a: 'CSIRT UNISSULA adalah Tim Tanggap Insiden Keamanan Siber resmi Universitas Islam Sultan Agung yang bertugas menangani, merespons, dan mencegah insiden keamanan informasi untuk melindungi aset digital universitas.'
        },
        {
          q: 'Siapa yang dapat menggunakan layanan CSIRT?',
          a: 'Seluruh sivitas akademika UNISSULA termasuk mahasiswa, dosen, staf, dan karyawan. Layanan kami juga mencakup unit kerja, fakultas, dan sistem informasi universitas.'
        },
        {
          q: 'Apakah layanan CSIRT berbayar?',
          a: 'Tidak. Semua layanan CSIRT UNISSULA disediakan secara gratis sebagai bagian dari komitmen universitas dalam menjaga keamanan informasi.'
        }
      ]
    },
    {
      category: 'Pelaporan Insiden',
      questions: [
        {
          q: 'Bagaimana cara melaporkan insiden keamanan?',
          a: 'Anda dapat melaporkan melalui: (1) Form online di website CSIRT, (2) Email ke csirt@unissula.ac.id, atau (3) Telepon ke 024-6583584 ext. 1234. Untuk insiden kritis, gunakan semua channel untuk respons tercepat.'
        },
        {
          q: 'Informasi apa yang perlu disertakan saat melapor?',
          a: 'Sertakan: jenis insiden, waktu kejadian, sistem yang terpengaruh, deskripsi detail, bukti screenshot (jika ada), dan kontak Anda untuk follow-up.'
        },
        {
          q: 'Berapa lama waktu respons CSIRT?',
          a: 'Tergantung tingkat keparahan: Kritis (< 1 jam), Tinggi (< 4 jam), Sedang (< 1 hari kerja), Rendah (< 2 hari kerja). Waktu penanganan bervariasi tergantung kompleksitas.'
        },
        {
          q: 'Apakah identitas pelapor dirahasiakan?',
          a: 'Ya. Kami menjaga kerahasiaan identitas pelapor dan detail insiden sesuai kebijakan privasi universitas. Informasi hanya dibagikan kepada pihak yang memerlukan untuk penanganan.'
        }
      ]
    },
    {
      category: 'Keamanan Akun',
      questions: [
        {
          q: 'Apa yang harus dilakukan jika akun saya diretas?',
          a: 'Segera: (1) Ganti password akun, (2) Logout dari semua device, (3) Periksa aktivitas tidak biasa, (4) Laporkan ke CSIRT untuk investigasi lebih lanjut. Jangan hapus log atau email mencurigakan.'
        },
        {
          q: 'Bagaimana cara membuat password yang aman?',
          a: 'Gunakan minimal 12 karakter dengan kombinasi huruf besar-kecil, angka, dan simbol. Hindari informasi pribadi. Contoh: "Kuliah!DiUnissula2024". Aktifkan juga 2-Factor Authentication jika tersedia.'
        },
        {
          q: 'Apakah boleh menggunakan password yang sama untuk beberapa akun?',
          a: 'Tidak disarankan. Gunakan password unik untuk setiap akun. Jika satu akun diretas, akun lain tetap aman. Gunakan password manager untuk memudahkan pengelolaan.'
        }
      ]
    },
    {
      category: 'Phishing & Social Engineering',
      questions: [
        {
          q: 'Bagaimana mengenali email phishing?',
          a: 'Tanda-tanda: pengirim mencurigakan, bahasa mendesak/mengancam, link tidak sesuai, attachment tidak diminta, permintaan data sensitif. Selalu verifikasi pengirim sebelum klik link.'
        },
        {
          q: 'Apa yang harus dilakukan jika menerima email phishing?',
          a: 'Jangan klik link atau download attachment. Forward email ke csirt@unissula.ac.id untuk verifikasi. Hapus email dan blokir pengirim. Jangan balas atau berinteraksi.'
        },
        {
          q: 'Bagaimana jika saya sudah mengklik link phishing?',
          a: 'Segera: (1) Jangan masukkan data apapun, (2) Tutup browser, (3) Ganti password akun, (4) Scan antivirus, (5) Laporkan ke CSIRT dengan detail waktu dan link yang diklik.'
        }
      ]
    },
    {
      category: 'Kebijakan & Prosedur',
      questions: [
        {
          q: 'Apa SLA (Service Level Agreement) CSIRT?',
          a: 'Waktu respons awal bervariasi per tingkat keparahan (lihat halaman Layanan untuk detail). Kami berkomitmen memberikan respons profesional dan menyeluruh untuk setiap insiden.'
        },
        {
          q: 'Apakah CSIRT memberikan laporan setelah penanganan?',
          a: 'Ya. Pelapor akan menerima laporan ringkasan berisi temuan, tindakan yang diambil, dan rekomendasi pencegahan di masa depan (disesuaikan dengan tingkat keparahan insiden).'
        },
        {
          q: 'Bagaimana CSIRT menjaga kerahasiaan data?',
          a: 'Kami menerapkan prinsip confidentiality, integrity, dan availability. Data insiden hanya diakses oleh tim yang berwenang, disimpan terenkripsi, dan tidak dibagikan tanpa izin.'
        }
      ]
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions (FAQ)</h1>
          <p className="text-xl text-gray-600">
            Pertanyaan umum seputar layanan CSIRT UNISSULA
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-blue-600" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, qIdx) => (
                    <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`}>
                      <AccordionTrigger className="text-left">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardContent className="p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">Tidak Menemukan Jawaban?</h3>
            <p className="text-gray-700 mb-4">
              Jika pertanyaan Anda tidak terjawab di sini, silakan hubungi kami melalui halaman kontak 
              atau kirim email ke csirt@unissula.ac.id
            </p>
            <a
              href="/kontak"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            >
              Hubungi Kami
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
