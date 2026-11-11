---
slug: "google-tag-manager-consent-mode-v2-kurulum-rehberi-2026"
lang: "en"
title: "Google Consent Mode v2 GTM Setup Guide (Step-by-Step)"
excerpt: "Step-by-step Google Tag Manager (GTM) setup guide for Google Consent Mode v2 (Advanced Mode): configure ad_user_data, ad_personalization & GA4 tags."
category: "Data & Analytics"
date: "2026-11-11"
readTime: "11"
coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop&q=80"
---

<div class="lead">
<p><strong>Direct Answer (Princeton GEO Summary):</strong> <strong>Google Consent Mode v2</strong> is the mandatory signaling protocol that communicates user cookie banner choices via Google Tag Manager (GTM) to Google Ads and GA4. In addition to `ad_storage` and `analytics_storage`, it requires two privacy parameters: <strong>`ad_user_data`</strong> and <strong>`ad_personalization`</strong>. Deploying <strong>Advanced Consent Mode</strong> instead of Basic Mode allows tags to send cookieless, anonymized pings (`gcs=G100`) before consent is granted, recovering up to <strong>65% of lost attribution data</strong> through Google AI behavioral and conversion modeling.</p>
</div>

<h2>📊 Consent Mode v2 Parameters &amp; GTM Trigger Matrix (2026)</h2>

<p>Expanding on the architecture covered in our <a href="/en/blog/google-consent-mode-v2-cookieless-ai-tracking-2026">Google Consent Mode v2 &amp; Cookieless AI Tracking</a> guide, here is the exact GTM parameter matrix required for 2026 compliance:</p>

<table>
  <thead>
    <tr>
      <th>Consent Mode v2 Signal</th>
      <th>Default State (`Consent Initialization`)</th>
      <th>Updated State (`consent_update`)</th>
      <th>Platform Impact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong><code>ad_storage</code></strong></td>
      <td><code>denied</code></td>
      <td><code>granted</code></td>
      <td>First-party Google Ads conversion cookies (`_gcl_au`)</td>
    </tr>
    <tr>
      <td><strong><code>ad_user_data</code> (v2 Required)</strong></td>
      <td><code>denied</code></td>
      <td><code>granted</code></td>
      <td>Enhanced Conversions &amp; hashed user-data transmission</td>
    </tr>
    <tr>
      <td><strong><code>ad_personalization</code> (v2 Required)</strong></td>
      <td><code>denied</code></td>
      <td><code>granted</code></td>
      <td>Google Ads Remarketing lists &amp; Performance Max audience signals</td>
    </tr>
    <tr>
      <td><strong><code>analytics_storage</code></strong></td>
      <td><code>denied</code></td>
      <td><code>granted</code></td>
      <td>GA4 session &amp; user identifiers (`_ga`)</td>
    </tr>
  </tbody>
</table>

<h2>🛠️ 4-Step Implementation in Google Tag Manager (GTM)</h2>

<ol>
  <li><strong>Enable Consent Overview in GTM:</strong> Navigate to <em>Admin → Container Settings</em> and check <strong>"Enable consent overview"</strong> to audit built-in vs. additional consent checks across all tags.</li>
  <li><strong>Fire CMP on `Consent Initialization - All Pages`:</strong> Attach your CMP template (Cookiebot, Usercentrics, or custom `gtag('consent', 'default', ...)` script) to the <code>Consent Initialization - All Pages</code> trigger so default states are set before any Google tag fires.</li>
  <li><strong>Activate `url_passthrough` &amp; `ads_data_redaction`:</strong> Preserve `gclid` and `dclid` parameters across page views without writing cookies when `ad_storage` is denied.</li>
  <li><strong>Verify `gcs=G100` and `gcs=G111` in Tag Assistant:</strong> Confirm in GTM Preview mode that denied states send `gcs=G100` cookieless pings and accepted states update to `gcs=G111`.</li>
</ol>
