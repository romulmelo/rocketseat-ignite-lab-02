import { Link, useParams } from "react-router-dom"
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
  const { slug: isActiveLesson } = useParams<{ slug: string }>()
  const setWatchingEpisode = () => {
    if (slug) {
      localStorage.setItem("watching-episode", slug)
    }
  }

  return (
    <li className="group">
      <span className="block mb-2 text-gray-300 first-letter:uppercase">
        {prettyAvailableDateFormat}
      </span>
      <Link
        to={`/evento/episodios/react/${slug}`}
        className="inline-block w-full h-full"
        tabIndex={0}
      >
        <div
          className={`relative p-4 rounded transition-colors duration-200 group-hover:border-green-500 ${
            isActiveLesson === slug
              ? "bg-green-500"
              : "border-2 border-gray-500"
          }`}
          onClick={setWatchingEpisode}
        >
          {isActiveLesson === slug ? (
            <span className="absolute top-1/2 -left-1 w-3 h-3 bg-green-500 transform-gpu -translate-y-1/2 rotate-45" />
          ) : null}
          <header className="flex items-center justify-between">
            {isLessonAvailable ? (
              <span
                className={`flex items-center gap-2 font-semibold text-sm ${
                  isActiveLesson === slug ? "text-white" : "text-blue-500"
                }`}
              >
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
            <span
              className={
                "px-2 py-[2px] text-xs text-white uppercase font-bold border-2 rounded"
              }
            >
              {type === "live" ? "Ao vivo" : "Aula prática"}
            </span>
          </header>
          <strong
            className={`block pt-4 ${
              isActiveLesson === slug ? "text-white" : "text-gray-200"
            }`}
          >
            {title}
          </strong>
        </div>
      </Link>
    </li>
  )
}

export default Lesson
