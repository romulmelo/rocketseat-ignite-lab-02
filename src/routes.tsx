import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Home from "@/pages/Home"
import Event from "@/pages/Event"

const Router = () => {
  const getPreviousWatchingEpisode = () => {
    const watchingEpisode = localStorage.getItem("watching-episode")

    return watchingEpisode ?? "aula-01"
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/evento/episodios/react/:slug" element={<Event />} />
        <Route
          path="*"
          element={
            <Navigate
              to={`/evento/episodios/react/${getPreviousWatchingEpisode()}`}
              replace
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
