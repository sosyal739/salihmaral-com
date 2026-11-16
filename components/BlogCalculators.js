'use client'

import { useState } from 'react'
import { Calculator, ArrowUpRight, Sparkles } from 'lucide-react'

function formatMoney(amount, currency) {
  if (currency === 'TRY') {
    return `${Math.round(amount).toLocaleString('tr-TR')} TL`
  }
  return `$${Math.round(amount).toLocaleString('en-US')}`
}

export function AgencyCommissionCalculator({ lang = 'tr' }) {
  const isEn = lang === 'en'
  const currency = isEn ? 'USD' : 'TRY'

  const [monthlySpend, setMonthlySpend] = useState(isEn ? 5000 : 100000)
  const [commissionRate, setCommissionRate] = useState(15)
  const [fixedFee, setFixedFee] = useState(isEn ? 590 : 12500)

  const monthlyCommission = (monthlySpend * commissionRate) / 100
  const annualCommission = monthlyCommission * 12
  const annualFixed = fixedFee * 12
  const annualDiff = annualCommission - annualFixed
  const extraAdMonths = monthlySpend > 0 ? Math.max(0, annualDiff / monthlySpend) : 0

  return (
    <div className="my-8 rounded-2xl border border-blue-200 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/50 p-6 md:p-7 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-[#4285F4] text-white flex items-center justify-center shadow-sm">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#4285F4]">
              {isEn ? 'Interactive Cost Calculator' : 'İnteraktif Maliyet Hesaplayıcı'}
            </p>
            <h2 className="text-lg md:text-xl font-extrabold text-slate-900 m-0">
              {isEn
                ? 'Fixed-Fee vs. % Commission Annual Cost'
                : 'Sabit Ücret mi, % Komisyon mu? Yıllık Tasarruf Hesabı'}
            </h2>
          </div>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-blue-200 text-slate-700">
          2026 Google Ads
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mb-6">
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <div className="flex justify-between text-xs font-bold text-slate-600 mb-2">
            <span>{isEn ? 'Monthly Ad Spend' : 'Aylık Reklam Bütçesi'}</span>
            <span className="text-[#4285F4]">{formatMoney(monthlySpend, currency)}</span>
          </div>
          <input
            type="range"
            min={isEn ? 1000 : 25000}
            max={isEn ? 30000 : 500000}
            step={isEn ? 500 : 5000}
            value={monthlySpend}
            onChange={(e) => setMonthlySpend(Number(e.target.value))}
            className="w-full accent-[#4285F4]"
            aria-label={isEn ? 'Monthly Ad Spend' : 'Aylık Reklam Bütçesi'}
          />
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <div className="flex justify-between text-xs font-bold text-slate-600 mb-2">
            <span>{isEn ? 'Agency Commission Rate' : 'Ajans Komisyon Oranı'}</span>
            <span className="text-rose-600">%{commissionRate}</span>
          </div>
          <input
            type="range"
            min={8}
            max={25}
            step={1}
            value={commissionRate}
            onChange={(e) => setCommissionRate(Number(e.target.value))}
            className="w-full accent-rose-600"
            aria-label={isEn ? 'Commission Rate' : 'Ajans Komisyon Oranı'}
          />
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <div className="flex justify-between text-xs font-bold text-slate-600 mb-2">
            <span>{isEn ? 'Fixed Monthly Retainer' : 'Sabit Aylık Ajans Ücreti'}</span>
            <span className="text-emerald-600">{formatMoney(fixedFee, currency)}</span>
          </div>
          <input
            type="range"
            min={isEn ? 350 : 7500}
            max={isEn ? 2500 : 35000}
            step={isEn ? 50 : 500}
            value={fixedFee}
            onChange={(e) => setFixedFee(Number(e.target.value))}
            className="w-full accent-emerald-600"
            aria-label={isEn ? 'Fixed Monthly Fee' : 'Sabit Aylık Ücret'}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mb-5">
        <div className="rounded-xl bg-white p-4 border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 mb-1">
            {isEn ? '12-Month Commission Fee' : '12 Aylık Komisyon Maliyeti'}
          </p>
          <p className="text-xl font-extrabold text-rose-600">{formatMoney(annualCommission, currency)}</p>
        </div>

        <div className="rounded-xl bg-white p-4 border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 mb-1">
            {isEn ? '12-Month Fixed Retainer' : '12 Aylık Sabit Ücret'}
          </p>
          <p className="text-xl font-extrabold text-slate-900">{formatMoney(annualFixed, currency)}</p>
        </div>

        <div className="rounded-xl bg-emerald-600 text-white p-4 shadow-sm">
          <p className="text-xs font-semibold text-emerald-100 mb-1">
            {annualDiff >= 0
              ? isEn
                ? 'Annual Budget Saved'
                : 'Yıllık Cebinizde Kalan Bütçe'
              : isEn
                ? 'Break-Even Difference'
                : 'Yıllık Maliyet Farkı'}
          </p>
          <p className="text-xl font-extrabold">
            {annualDiff >= 0
              ? `${formatMoney(annualDiff, currency)}`
              : formatMoney(Math.abs(annualDiff), currency)}
          </p>
          {annualDiff > 0 && (
            <p className="text-[11px] text-emerald-100 mt-1">
              {isEn
                ? `Equal to ~${extraAdMonths.toFixed(1)} extra months of ad spend`
                : `~${extraAdMonths.toFixed(1)} aylık ek Google Ads bütçesine denk`}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-blue-200/70">
        <p className="text-xs text-slate-600 m-0">
          {isEn
            ? 'Transparent flat-fee management removes the conflict of interest on budget scaling.'
            : 'Sabit ücret modelinde ajans bütçeyi şişirmek için değil, ROAS ve dönüşüm maliyetini iyileştirmek için çalışır.'}
        </p>
        <a
          href={isEn ? '/en#contact' : '/#contact'}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#4285F4] text-white text-xs font-bold hover:bg-[#3367d6] transition-colors no-underline"
        >
          <span>{isEn ? 'Get Fixed-Fee Audit' : 'Sabit Fiyat Teklifi Al'}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  )
}

export function YouTubeViewsCalculator({ lang = 'tr' }) {
  const isEn = lang === 'en'
  const currency = isEn ? 'USD' : 'TRY'

  const formats = isEn
    ? [
        { id: 'instream', label: 'In-Stream Music Video & Brand', minCpv: 0.015, maxCpv: 0.032 },
        { id: 'infeed', label: 'YouTube Shorts & In-Feed Growth', minCpv: 0.02, maxCpv: 0.045 },
        { id: 'b2b', label: 'High-Intent Export / Commercial', minCpv: 0.035, maxCpv: 0.07 },
      ]
    : [
        { id: 'instream', label: 'In-Stream Klip & Video Reklamı', minCpv: 0.12, maxCpv: 0.24 },
        { id: 'infeed', label: 'YouTube Shorts & In-Feed Abone', minCpv: 0.18, maxCpv: 0.34 },
        { id: 'b2b', label: 'Hedefli İhracat / Ticari Reklam', minCpv: 0.35, maxCpv: 0.65 },
      ]

  const [budget, setBudget] = useState(isEn ? 1000 : 15000)
  const [formatId, setFormatId] = useState('instream')

  const activeFormat = formats.find((f) => f.id === formatId) || formats[0]
  const minViews = Math.round(budget / activeFormat.maxCpv)
  const maxViews = Math.round(budget / activeFormat.minCpv)
  const estSubLow = Math.round(minViews * 0.008)
  const estSubHigh = Math.round(maxViews * 0.018)

  return (
    <div className="my-8 rounded-2xl border border-rose-200 bg-gradient-to-br from-slate-50 via-rose-50/40 to-amber-50/40 p-6 md:p-7 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shadow-sm">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-rose-600">
              {isEn ? 'YouTube Ads Reach Simulator' : 'YouTube Ads İzlenme & CPV Simülatörü'}
            </p>
            <h2 className="text-lg md:text-xl font-extrabold text-slate-900 m-0">
              {isEn
                ? 'Estimated Official Google Ads Views Calculator'
                : 'Bütçeye Göre Tahmini Gerçek İzlenme & Abone Hesabı'}
            </h2>
          </div>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-rose-200 text-slate-700">
          100% Google Ads
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {formats.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFormatId(f.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors border ${
              formatId === f.id
                ? 'bg-rose-600 text-white border-rose-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl p-4 border border-slate-200 mb-5">
        <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
          <span>{isEn ? 'Google Ads Campaign Budget' : 'Google Ads Kampanya Bütçesi'}</span>
          <span className="text-rose-600">{formatMoney(budget, currency)}</span>
        </div>
        <input
          type="range"
          min={isEn ? 200 : 3000}
          max={isEn ? 10000 : 150000}
          step={isEn ? 100 : 1000}
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="w-full accent-rose-600"
          aria-label={isEn ? 'YouTube Ads Budget' : 'YouTube Reklam Bütçesi'}
        />
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mb-5">
        <div className="rounded-xl bg-white p-4 border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 mb-1">
            {isEn ? 'Estimated Organic Views' : 'Tahmini Reklam İzlenmesi'}
          </p>
          <p className="text-lg md:text-xl font-extrabold text-slate-900">
            {minViews.toLocaleString(isEn ? 'en-US' : 'tr-TR')} – {maxViews.toLocaleString(isEn ? 'en-US' : 'tr-TR')}
          </p>
        </div>

        <div className="rounded-xl bg-white p-4 border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 mb-1">
            {isEn ? 'Typical CPV Benchmark' : 'Ortalama CPV (İzlenme Başı)'}
          </p>
          <p className="text-lg md:text-xl font-extrabold text-rose-600">
            {isEn
              ? `$${activeFormat.minCpv.toFixed(3)} – $${activeFormat.maxCpv.toFixed(3)}`
              : `${activeFormat.minCpv.toFixed(2)} TL – ${activeFormat.maxCpv.toFixed(2)} TL`}
          </p>
        </div>

        <div className="rounded-xl bg-slate-900 text-white p-4">
          <p className="text-xs font-semibold text-slate-300 mb-1">
            {isEn ? 'Est. Subscriber Potential' : 'Tahmini Abone Potansiyeli'}
          </p>
          <p className="text-lg md:text-xl font-extrabold">
            +{estSubLow.toLocaleString(isEn ? 'en-US' : 'tr-TR')} – +{estSubHigh.toLocaleString(isEn ? 'en-US' : 'tr-TR')}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-rose-200/70">
        <p className="text-[11px] text-slate-600 m-0">
          {isEn
            ? 'Indicative benchmark range; actual CPV depends on country targeting, thumbnail CTR, and hook retention.'
            : 'Sektörel referans aralığıdır; gerçek CPV hedef ülke, video ilk 5 saniye tutunma oranı ve nişe göre değişir.'}
        </p>
        <div className="flex flex-wrap gap-2">
          <a
            href={isEn ? '/en/services/youtube-ads' : '/tr/hizmetler/youtube-ads'}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold hover:bg-rose-700 transition-colors no-underline"
          >
            <span>{isEn ? 'YouTube Ads Service' : 'YouTube Ads Paketleri'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={isEn ? 'https://medyapr.com/en' : 'https://medyapr.com/tr'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-rose-200 text-slate-800 text-xs font-bold hover:bg-rose-50 transition-colors no-underline"
          >
            <span>MedyaPR</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
