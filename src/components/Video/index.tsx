import { useNavigate, useParams } from "react-router-dom"

import { gql, useQuery } from "@apollo/client"

import { DiscordLogo, FileArrowDown, Image, Lightning } from "phosphor-react"
import { DefaultUi, Player, Youtube } from "@vime/react"

import Button from "@/components/Button"
import Card from "@/components/Card"

import "@vime/core/themes/default.css"

const GET_LESSON_BY_SLUG_QUERY = gql`
  query ($slug: String) {
    lesson(where: { slug: $slug }) {
      videoId
      title
      description
      teacher {
        avatarURL
        name
        bio
      }
    }
  }
`
interface GetLessonBySlugQueryResponse {
  lesson: {
    videoId: string
    title: string
    description: string
    teacher: {
      avatarURL: string
      name: string
      bio: string
    }
  }
}

const Video = () => {
  const { slug } = useParams<{ slug: string }>()
  const { data } = useQuery<GetLessonBySlugQueryResponse>(
    GET_LESSON_BY_SLUG_QUERY,
    { variables: { slug } }
  )

  if (!data) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <div className="z-10 relative flex-1">
      <div className="bg-black">
        <div className="w-full h-full max-w-[1100px] max-h-[50vh] mx-auto aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="max-w-[1100px] p-8 mx-auto 2xl:py-8 2xl:px-0">
        <section className="flex flex-col items-start gap-16 lg:flex-row">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <img
                className="w-16 h-16 rounded-full border-2 border-blue-500 object-cover"
                src={data.lesson.teacher.avatarURL}
                alt={`Imagem de perfil de ${data.lesson.teacher.name}`}
              />
              <div className="leading-relaxed">
                <strong className="block text-2xl font-bold">
                  {data.lesson.teacher.name}
                </strong>
                <span className="block text-sm text-gray-200">
                  {data.lesson.teacher.bio}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 sm:flex-row lg:w-[initial] lg:flex-col">
            <Button
              variant="primary"
              fullWidth
              icon={<DiscordLogo size={24} />}
              as="a"
              href="https://discord.gg/hpnZuxt5"
            >
              Comunidade do Discord
            </Button>
            <Button
              variant="secondary"
              fullWidth
              icon={<Lightning size={24} />}
              as="a"
            >
              Acesse o desafio
            </Button>
          </div>
        </section>
        <section className="grid grid-cols-1 gap-8 mt-20 lg:grid-cols-2">
          <Card
            title="Material Complementar"
            icon={<FileArrowDown size={40} />}
            href="https://efficient-sloth-d85.notion.site/Material-complementar-86d4ef35af16471ebc3ae3eba1a378e5"
          >
            Acesse o material complementar para acelerar o seu desenvolvimento
          </Card>
          <Card
            title="Wallpapers Exclusivos"
            icon={<Image size={40} />}
            href="https://drive.google.com/drive/folders/1mxWnvlqmH7MbVRv2Na9xFNgCQCygM1iR?usp=sharing"
          >
            Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
            máquina
          </Card>
        </section>
      </div>
    </div>
  )
}

export default Video
