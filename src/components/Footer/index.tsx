import Logotipo from "@/components/Logotipo"

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-2 justify-between p-8 text-gray-200 border-t border-gray-500 sm:flex-row">
      <div className="flex flex-col items-center gap-2 sm:items-start md:flex-row md:items-center md:gap-6">
        <Logotipo />
        <span>Rocketseat - Todos os direitos reservados</span>
      </div>
      <div>
        <a href="#">Políticas de privacidade</a>
      </div>
    </footer>
  )
}

export default Footer
