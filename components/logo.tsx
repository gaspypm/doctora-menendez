import Image from "next/image"

export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/images/logo.png"
        alt="Logo Dra. María Fernanda Menéndez"
        width={40}
        height={40}
        className="w-full h-full object-contain"
      />
    </div>
  )
}

export function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={32}
        height={32}
        className="w-full h-full object-contain"
      />
    </div>
  )
}
