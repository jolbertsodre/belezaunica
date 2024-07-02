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
            Conscientização sobre a Pressão Estética nas Redes Sociais:
            Identificando os Sinais e Tomando Medidas Preventivas
          </h1>
        </section>

        <section className="!mt-3.5 flex flex-row items-center justify-between text-[.75rem]">
          <span>Jolbert Sodré - 01/07/2024 às 12:01</span>

          <span>
            <strong>Tempo de leitura estimado:</strong> 5 minutos
          </span>
        </section>

        <section className="!mt-6">
          <p className="p__tag">
            Muitas pessoas podem estar sofrendo com a pressão estética nas redes
            sociais <strong>sem se darem conta</strong>. É{" "}
            <strong>crucial</strong> reconhecer os sinais e compreender como
            essa pressão pode estar afetando a vida diária. Sentimentos de{" "}
            <strong>inadequação</strong>, <strong>obsessão</strong> com a
            aparência e <strong>comparações</strong> <strong>constantes</strong>{" "}
            com os outros são indicadores comuns de que a{" "}
            <strong>pressão</strong> <strong>estética</strong> pode estar
            impactando negativamente.
          </p>
          <p className="p__tag">
            Um estudo publicado no{" "}
            <strong>Journal of Youth and Adolescence</strong> revelou que
            adolescentes que passam mais tempo nas redes sociais têm{" "}
            <strong>maior</strong> <strong>probabilidade</strong> de
            experimentar sintomas de <strong>depressão</strong> e{" "}
            <strong>ansiedade</strong> relacionados à <strong>aparência</strong>
            . Esses sintomas podem incluir <strong>preocupação</strong>{" "}
            <strong>excessiva</strong> com o peso, aparência e{" "}
            <strong>comparação</strong> com influenciadores ou amigos.
          </p>
          <p className="p__tag">
            Para lidar com esses sentimentos, é fundamental desenvolver uma
            abordagem <strong>consciente</strong> e <strong>crítica</strong>.{" "}
            <strong>Analisar</strong> o próprio comportamento nas redes sociais
            e reconhecer <strong>padrões</strong> <strong>prejudiciais</strong>{" "}
            pode ser o primeiro passo. Perguntar-se: "
            <strong>Por que estou seguindo este perfil?"</strong> ou{" "}
            <strong>"Como me sinto depois de ver essas postagens?"</strong> pode
            ajudar a identificar conteúdos que não são benéficos.
          </p>
          <p className="p__tag">
            <strong>Educar-se</strong> sobre os efeitos da pressão estética e
            compartilhar esse conhecimento com amigos e familiares também pode
            aumentar a conscientização. Discussões abertas sobre a influência
            das redes sociais podem criar um ambiente de apoio mútuo, onde todos
            se sentem mais <strong>confortáveis</strong> para expressar suas
            preocupações.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
