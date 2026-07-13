import Image from "next/image"
import { certificates } from "@/data/certificates"
import { Certificate } from "@/types"

function CertificateLink({
  item,
  featured = false,
}: {
  item: Certificate
  featured?: boolean
}) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className={`group flex cursor-pointer flex-col items-center text-center ${
        featured ? "rounded-lg border border-white/10 bg-[#121212] p-5 shadow-lg" : ""
      }`}
    >
      <Image
        src={item.logo}
        alt={item.title}
        width={featured ? 120 : 100}
        height={featured ? 120 : 100}
        className={`${featured ? "h-24" : "h-16"} w-auto object-contain transition group-hover:scale-105`}
      />

      <p
        className={`mt-3 font-semibold transition group-hover:text-[var(--color-accent)] ${
          featured ? "text-base" : "text-sm"
        }`}
      >
        {item.title}
      </p>

      <p className="text-xs text-slate-400">{item.issuer}</p>
      <p className="text-[10px] text-slate-500">{item.date}</p>
    </a>
  )
}

export function CertificatesSection() {
  const featuredCertificates = certificates.filter(item => item.category === "featured")
  const additionalCertificates = certificates.filter(item => item.category === "additional")

  return (
    <section className="w-full bg-[#0f0f0f] px-4 py-14 text-slate-100">
      <div className="mx-auto max-w-6xl space-y-10">
        <h3 className="text-center text-xl font-semibold">Certificates</h3>

        <div className="space-y-6">
          <h4 className="text-base font-semibold text-[#3b82f6] sm:text-lg">Featured Certifications</h4>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCertificates.map(item => (
              <CertificateLink key={item.title} item={item} featured />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-base font-semibold text-[#3b82f6] sm:text-lg">Additional Learning</h4>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            {additionalCertificates.map(item => (
              <CertificateLink key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
