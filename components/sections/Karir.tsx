export default function Karir() {
  return (
    // Atribut id="karir" ini sangat penting untuk target scroll
    <section id="karir" className="w-full py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Bergabung Bersama Kami
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Temukan peluang karir terbaik dan kembangkan potensimu bersama tim profesional kami.
          </p>
        </div>
        
        {/* Contoh Card Lowongan */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-800">Cleaning Supervisor</h3>
            <p className="text-sm text-blue-500 font-medium mt-1 mb-4">Full-time • Surabaya</p>
            <p className="text-gray-600 mb-6">Memimpin dan memastikan standar operasional kebersihan di area klien berjalan dengan sempurna.</p>
            <button className="bg-blue-50 text-blue-800 px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors">
              Lamar Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}