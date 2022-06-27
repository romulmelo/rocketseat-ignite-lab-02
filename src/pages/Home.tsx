import { Link } from "react-router-dom"
import { ArrowRight } from "phosphor-react"

const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <Link className="btn btn-secondary" to="/evento">
        Acessar a plataforma
        <ArrowRight size={20} />
      </Link>
    </div>
  )
}
export default Home
