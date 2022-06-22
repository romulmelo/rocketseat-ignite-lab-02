import { FC, PropsWithChildren } from "react"
import { format, isPast } from "date-fns"
import { ptBR } from "date-fns/locale"
import { CheckCircle, Lock } from "phosphor-react"

export type LessonProps = PropsWithChildren<{
  title?: string
  slug?: string
  availableAt: Date
  type?: "live" | "class"
}> &
  React.HTMLAttributes<HTMLLIElement>

const Lesson: FC<LessonProps> = ({ title, slug, availableAt, type }) => {
  const isLessonAvailable = isPast(availableAt)
  const prettyAvailableDateFormat = format(
    availableAt,
    "EEE' • 'd' de 'MMM' • 'k'h'mm",
    {
      locale: ptBR
    }
  )

  return (
    <li>
      <span className="block mb-2 text-gray-300 first-letter:uppercase">
        {prettyAvailableDateFormat}
      </span>
      <a href={slug} className="inline-block w-full h-full" tabIndex={0}>
        <div className={"p-4 border rounded border-gray-500"}>
          <header className="flex items-center justify-between">
            {isLessonAvailable ? (
              <span className="flex items-center gap-2 font-semibold text-sm text-blue-500">
                <CheckCircle
                  size={20}
                  alt="Icone de check dentro de um círculo"
                />
                Conteúdo liberado
              </span>
            ) : (
              <span className="flex items-center gap-2 font-semibold text-sm text-orange-500">
                <Lock size={20} alt="Icone de cadeado trancado" />
                Em breve
              </span>
            )}
            <span className="px-2 py-[2px] text-xs text-white uppercase font-bold border-2 border-green-500 rounded">
              {type === "live" ? "Ao vivo" : "Aula prática"}
            </span>
          </header>
          <strong className="block pt-4 text-gray-200">{title}</strong>
        </div>
      </a>
    </li>
  )
}

export default Lesson
