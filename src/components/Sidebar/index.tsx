import Lesson from "@/components/Lesson"
import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      title
      slug
      availableAt
      lessonType
    }
  }
`

interface GetLessonsQueryResponse {
  lessons: {
    id: string
    title: string
    slug: string
    availableAt: string
    lessonType: "live" | "class"
  }[]
}

const Sidebar = () => {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

  return (
    <aside className="hidden w-[348px] bg-gray-700 p-6 border-l border-gray-500 2xl:block">
      <span className="block pb-6 mb-6 2xl bold border-b border-gray-500">
        Cronograma de aulas
      </span>
      <ul className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
