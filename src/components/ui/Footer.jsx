export const Footer = () => {
  return (
    <footer className="flex p-2 bg-inmetro max-h-[15vh] h-screen w-full shadow-[0px_-4px_5px_0px_rgba(128,128,128,1)]">
      <div className="flex justify-center items-start flex-grow align__center">
        <span className="text-white">
          Todos os direitos reservados a Jolbert Sodré e ao{" "}
          <a
            className="inline underline transition duration-300 hover:text-secondary"
            target="_blank"
            href="https://www.gov.br/inmetro/pt-br"
          >
            Inmetro
          </a>.
        </span>
      </div>
    </footer>
  )
}

export default Footer;