import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: 'Umum',
      questions: [
        {
          question: 'Apa yang dimaksud dengan konsultasi keamanan siber?',
          answer: 'Konsultasi keamanan siber adalah layanan profesional yang membantu organisasi mengidentifikasi, menilai, dan menangani risiko keamanan informasi. Kami memberikan expertise, guidance, dan rekomendasi untuk meningkatkan posture keamanan organisasi Anda.',
        },
        {
          question: 'Siapa yang membutuhkan konsultasi keamanan siber?',
          answer: 'Semua organisasi yang mengelola data dan sistem informasi dapat mendapat manfaat dari konsultasi keamanan siber, mulai dari UMKM, institusi pendidikan, hingga enterprise. Terutama organisasi yang menghadapi peningkatan ancaman siber atau perlu memenuhi requirement compliance tertentu.',
        },
        {
          question: 'Apa perbedaan konsultasi dengan penetration testing?',
          answer: 'Konsultasi keamanan berfokus pada evaluasi holistik terhadap people, process, dan technology, serta memberikan strategic guidance. Penetration testing adalah technical assessment spesifik untuk mengidentifikasi kerentanan sistem. Konsultasi kami dapat mencakup rekomendasi untuk penetration testing sebagai bagian dari program keamanan komprehensif.',
        },
      ],
    },
    {
      category: 'Proses Kerja',
      questions: [
        {
          question: 'Berapa lama durasi konsultasi?',
          answer: 'Durasi konsultasi bervariasi tergantung scope dan kompleksitas: Basic Assessment (2-3 minggu), Standard Consultation (4-6 minggu), Advanced Consultancy (8-12 minggu). Kami akan menyesuaikan timeline dengan kebutuhan spesifik organisasi Anda.',
        },
        {
          question: 'Bagaimana proses dimulai?',
          answer: 'Proses dimulai dengan initial consultation untuk memahami kebutuhan Anda, dilanjutkan dengan proposal scope dan timeline. Setelah agreement, kami akan melakukan kick-off meeting dan memulai fase assessment sesuai metodologi kami.',
        },
        {
          question: 'Apa saja deliverable yang akan kami terima?',
          answer: 'Deliverable standar meliputi: comprehensive assessment report, executive summary, risk assessment matrix, prioritized recommendations, implementation roadmap, dan presentation slides. Deliverable spesifik dapat disesuaikan dengan paket yang dipilih.',
        },
        {
          question: 'Apakah konsultasi dilakukan on-site atau remote?',
          answer: 'Kami menyediakan kedua opsi. Model hybrid (kombinasi on-site dan remote) seringkali paling efektif, dengan on-site visits untuk interview dan key assessment activities, serta remote untuk document review dan reporting.',
        },
      ],
    },
    {
      category: 'Kerahasiaan & Keamanan Data',
      questions: [
        {
          question: 'Bagaimana kerahasiaan data kami dijamin?',
          answer: 'Kami memiliki komitmen penuh terhadap confidentiality. Semua konsultan menandatangani Non-Disclosure Agreement (NDA), data dikelola dengan strict access control, dan semua informasi sensitif dihapus setelah project selesai sesuai agreement.',
        },
        {
          question: 'Apakah data organisasi kami akan disimpan?',
          answer: 'Data hanya disimpan selama durasi project dan retention period yang disepakati. Semua data sensitif akan dihapus secara permanen setelah periode tersebut, kecuali dokumentasi yang diperlukan untuk compliance (dengan persetujuan klien).',
        },
        {
          question: 'Siapa saja yang akan memiliki akses ke informasi kami?',
          answer: 'Hanya tim konsultan yang ditugaskan untuk project Anda yang memiliki akses. Kami menerapkan prinsip need-to-know dan least privilege. Senior consultant melakukan review untuk quality assurance.',
        },
      ],
    },
    {
      category: 'Hasil & Tindak Lanjut',
      questions: [
        {
          question: 'Apa yang terjadi setelah laporan diserahkan?',
          answer: 'Kami akan melakukan presentation session untuk menjelaskan temuan dan rekomendasi. Tersedia juga Q&A session dan clarification meeting. Untuk paket tertentu, kami menyediakan post-consultation support selama periode tertentu.',
        },
        {
          question: 'Apakah tim kami akan dibantu dalam implementasi?',
          answer: 'Untuk paket Advanced, kami menyediakan pendampingan implementasi fase awal. Untuk paket lain, implementasi support dapat ditambahkan sebagai extended service. Kami juga dapat memberikan guidance melalui workshop atau konsultasi follow-up.',
        },
        {
          question: 'Bagaimana mengukur keberhasilan konsultasi?',
          answer: 'Success metrics dapat berupa: penutupan gap yang teridentifikasi, implementasi rekomendasi prioritas, compliance achievement, peningkatan security maturity level, atau pengurangan risiko sesuai target yang disepakati di awal project.',
        },
      ],
    },
    {
      category: 'Biaya & Administratif',
      questions: [
        {
          question: 'Bagaimana struktur biaya konsultasi?',
          answer: 'Biaya ditentukan berdasarkan scope, durasi, dan kompleksitas project. Kami menyediakan paket standar dengan harga fixed, atau dapat menyusun proposal customized sesuai kebutuhan. Detail biaya akan dijelaskan dalam proposal setelah initial consultation.',
        },
        {
          question: 'Apakah ada biaya tersembunyi?',
          answer: 'Tidak. Semua biaya akan dijelaskan secara transparan dalam proposal. Jika ada additional scope yang muncul di tengah project, akan dikomunikasikan dan disepakati terlebih dahulu sebelum dieksekusi.',
        },
        {
          question: 'Apakah tersedia paket untuk organisasi dengan budget terbatas?',
          answer: 'Ya, paket Basic Assessment dirancang untuk organisasi dengan budget terbatas namun tetap mendapatkan assessment yang berkualitas. Kami juga dapat mendiskusikan opsi phased approach atau fokus pada area prioritas.',
        },
      ],
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Jawaban untuk pertanyaan umum tentang layanan konsultasi kami
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.questions.map((faq, faqIndex) => {
                  const globalIndex = sectionIndex * 100 + faqIndex;
                  const isOpen = openIndex === globalIndex;
                  
                  return (
                    <div
                      key={faqIndex}
                      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-8">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform ${
                            isOpen ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Masih Ada Pertanyaan?
          </h2>
          <p className="text-blue-100 mb-6">
            Tim kami siap menjawab pertanyaan spesifik Anda
          </p>
          <a
            href="/kontak"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
}
