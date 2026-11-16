import Link from 'next/link'
import HtmlShell from '@/components/HtmlShell'

export default function NotFound() {
  return (
    <HtmlShell lang="tr">
      <main className="min-h-[75vh] flex flex-col items-center justify-center px-6 text-center bg-white">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#4285F4]/10 text-[#4285F4] mb-4">
          404 · Sayfa Bulunamadı
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4">
          Aradığınız sayfa taşındı veya mevcut değil
        </h1>
        <p className="text-slate-600 max-w-lg mb-8">
          Google Ads, Meta Ads, YouTube reklam yönetimi ve teknik SEO rehberlerimize ana sayfadan veya blog merkezimizden ulaşabilirsiniz.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-[#4285F4] text-white font-semibold hover:bg-[#3367d6] transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 rounded-xl border border-slate-300 text-slate-800 font-semibold hover:bg-slate-50 transition-colors"
          >
            Blog Rehberleri
          </Link>
        </div>
      </main>
    </HtmlShell>
  )
}
