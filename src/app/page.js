import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <header className="bg-inmetro flex flex-row items-center justify-center w-full shadow-[0px_4px_5px_0px_rgba(128,128,128,1)]">
        <div className="max-h-[7vh] h-screen flex items-center justify-between align__center">
          <section>
            <Link
              legacyBehavior
              href="/"
            >
              <a>
                <h1 className="font-bold text-3xl text-white">Beleza Única</h1>
              </a>
            </Link>
          </section>

          <section className="block">
            <Link
              legacyBehavior
              href="https://www.gov.br/inmetro/pt-br"
            >
              <a target="_blank">
                <Image
                  src="/inmetro-logo-horizontal.png"
                  width={155.55}
                  height={32}
                  alt="Isologo do Inmetro"
                  className="white__logo"
                />
              </a>
            </Link>
          </section>

          <section className="flex flex-basis-auto items-center mt-[.7px] mb-[2.1px] max-w-[192px] w-full">
            <ul className="flex flex-row pl-0 mb-0 ml-auto list-none">
              <li className="font-semibold">
                <Link
                  legacyBehavior
                  href="/conta/entrar"
                >
                  <a
                    className="block py-2 px-5 bg-none border-none rounded-md text-center text-secondary-light no-underline transition duration-300 hover:text-white"
                    target="_blank"
                  >
                    Entrar
                  </a>
                </Link>
              </li>

              <li className="font-semibold">
                <Link
                  legacyBehavior
                  href="/conta/criar-conta"
                >
                  <a
                    className="inline-block py-1.5 px-3 text-center text-inmetro bg-white border border-white rounded-md no-underline transition duration-500 hover:bg-secondary-dark hover:border-secondary-dark hover:text-white"
                    target="_blank"
                  >
                    Criar conta
                  </a>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </header>

      <main className="min-h-[85vh] main__align">
        <h1 className="text-3xl/8 font-bold !mb-6">
          Algumas notícias interessantes:
        </h1>

        <ul className="grid grid-cols-2 gap-4">
          <li>
            <a
              legacyBehavior
              href="/noticias/o-que-e-a-pressao-estetica-nas-redes-sociais"
              className="anchor__style"
              target="_blank"
            >
              <div className="!mb-3">
                <Image
                  src="/inmetro-logo-horizontal.png"
                  width={97.22}
                  height={20}
                  alt="Isologo do Inmetro"
                />
              </div>
              Introdução à Pressão Estética nas Redes Sociais: Compreendendo o
              Impacto das Redes Sociais na Autoimagem
            </a>
          </li>

          <li>
            <a
              legacyBehavior
              href="/noticias/conscientizacao-sobre-a-pressao-estetica-nas-redes-sociais"
              className="anchor__style"
            >
              <div className="!mb-3">
                <Image
                  src="/inmetro-logo-horizontal.png"
                  width={97.22}
                  height={20}
                  alt="Isologo do Inmetro"
                />
              </div>
              Conscientização sobre a Pressão Estética nas Redes Sociais:
              Identificando os Sinais e Tomando Medidas Preventivas
            </a>
          </li>

          <li>
            <a
              legacyBehavior
              href="/noticias/como-lidar-com-a-pressao-estetica-nas-redes-sociais"
              className="anchor__style"
              target="_blank"
            >
              <div className="!mb-3">
                <Image
                  src="/inmetro-logo-horizontal.png"
                  width={97.22}
                  height={20}
                  alt="Isologo do Inmetro"
                />
              </div>
              Como Lidar com a Pressão Estética nas Redes Sociais: Estratégias
              para Proteger sua Saúde Mental e Autoestima
            </a>
          </li>

          <li>
            <a
              legacyBehavior
              href="/noticias/superando-a-pressao-estetica-nas-redes-sociais"
              className="anchor__style"
              target="_blank"
            >
              <div className="!mb-3">
                <Image
                  src="/inmetro-logo-horizontal.png"
                  width={97.22}
                  height={20}
                  alt="Isologo do Inmetro"
                />
              </div>
              Superando a Pressão Estética nas Redes Sociais: Mantendo uma
              Mentalidade Saudável e Positiva
            </a>
          </li>
        </ul>
      </main>

      <Footer />
    </div>
  );
}
