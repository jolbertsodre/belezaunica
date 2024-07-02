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
        <section>
          <h1 className="text-4xl/8 font-bold">
            Como Lidar com a Pressão Estética nas Redes Sociais: Estratégias
            para Proteger sua Saúde Mental e Autoestima
          </h1>
        </section>

        <section className="!mt-3.5 flex flex-row items-center justify-between text-[.75rem]">
          <span>Jolbert Sodré - 01/07/2024 às 12:21</span>

          <span>
            <strong>Tempo de leitura estimado:</strong> 5 minutos
          </span>
        </section>

        <section className="!mt-6">
          <p className="p__tag">
            Lidar com a pressão estética nas redes sociais é um{" "}
            <strong>desafio</strong>, mas existem estratégias que podem ajudar a{" "}
            <strong>minimizar</strong> seus efeitos negativos. Primeiramente, é
            importante desenvolver uma <strong>consciência</strong>{" "}
            <strong>crítica</strong> sobre o conteúdo consumido. Entender que
            muitas das imagens nas redes sociais são <strong>altamente</strong>{" "}
            <strong>editadas</strong> e não representam a{" "}
            <strong>realidade</strong> é um passo essencial. Desafiar essas
            representações pode ajudar a reduzir a sensação de inadequação.
          </p>
          <p className="p__tag">
            Outra estratégia eficaz é curar o próprio feed. Seguir perfis que
            promovem a diversidade corporal e uma visão mais realista da beleza
            pode ajudar a criar um ambiente mais positivo. Organizações como o
            movimento <strong>Body Positivity</strong> e influenciadores que
            celebram corpos de todas as formas e tamanhos são bons exemplos de
            conteúdos que podem contribuir para uma autoimagem mais{" "}
            <strong>saudável</strong>.
          </p>
          <p className="p__tag">
            O <strong>autocuidado</strong> também desempenha um papel{" "}
            <strong>crucial</strong>. Praticar atividades que promovam o{" "}
            <strong>bem-estar</strong> <strong>físico</strong> e{" "}
            <strong>mental</strong>, como exercícios regulares, meditação e
            hobbies que tragam prazer, pode ajudar a equilibrar os efeitos
            negativos das redes sociais. Além disso, estabelecer limites para o
            uso das redes sociais, como definir horários específicos para
            acessar essas plataformas, pode reduzir a exposição a conteúdos
            prejudiciais.
          </p>
          <p className="p__tag">
            <strong>Buscar</strong> <strong>apoio</strong> emocional é
            igualmente importante. Conversar com amigos, familiares ou
            profissionais de saúde mental sobre os sentimentos gerados pelas
            redes sociais pode proporcionar um alívio significativo. Terapias
            como a <strong>terapia cognitivo-comportamental (TCC)</strong> têm
            se mostrado eficazes no tratamento de problemas de autoimagem e
            autoestima.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
