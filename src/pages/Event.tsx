import { useParams } from "react-router-dom"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Sidebar from "@/components/Sidebar"
import Video from "@/components/Video"

const Event = () => {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div id="app" className="flex flex-col min-h-screen">
      <Header />
      <main role="main" className="flex flex-1">
        <Video />
        <Sidebar />
      </main>
      <Footer />
    </div>
  )
}

export default Event
