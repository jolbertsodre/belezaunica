export const Footer = () => {
  return (
    <footer className="flex p-2 bg-[#EEE] max-h-[15vh] h-screen w-full">
      <div className="flex justify-center items-start flex-grow align__center">
        <span className="text-[#0007]">
          Todos os direitos reservados a Jolbert Sodré e ao{" "}
          <a
            className="inline underline text-[#0007] transition duration-300 hover:text-[#000]"
            target="_blank"
            href="https://www.gov.br/inmetro/pt-br"
          >
            Inmetro
          </a>{" "}
        </span>
      </div>
    </footer>
  )
}

export default Footer;