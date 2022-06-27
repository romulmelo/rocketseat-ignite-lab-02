import { CaretRight } from "phosphor-react"
import { FC, AnchorHTMLAttributes, PropsWithChildren } from "react"

type CardProps = PropsWithChildren<{
  title: string
  icon: React.ReactNode
}> &
  AnchorHTMLAttributes<HTMLAnchorElement>

const Card: FC<CardProps> = ({ children, title, icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="p-6 flex items-center gap-6 bg-gray-700 border-2 border-gray-600 rounded overflow-hidden transform-gpu transition-all ease duration-200 hover:border-green-600 hover:-translate-y-1"
    >
      <div className="h-22 min-w-16 flex items-center justify-center bg-green-600 rounded">
        {icon}
      </div>
      <div className="flex-1 leading-relaxed">
        <strong className="text-lg">{title}</strong>
        <p className="mt-2 text-sm text-gray-200">{children}</p>
      </div>
      <div className="h-full flex items-center">
        <CaretRight size={24} color="#81D8F7" />
      </div>
    </a>
  )
}

export default Card
