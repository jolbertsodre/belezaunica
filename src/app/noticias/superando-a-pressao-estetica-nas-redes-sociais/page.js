"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import Comments from "@/components/ui/Comments";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Notify from "@/components/ui/toast";
import { usePathname } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  const [token, setToken] = useState("");

  useEffect(() => {
    const tkn = window.localStorage.getItem("token");
    if (tkn) setToken(tkn);
  });

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4144/api/jwt-token/revoke",
        { headers: { Authorization: `Bearer ${token}` } }
      );

      window.localStorage.removeItem("token");

      Notify("success", 4000, "standard", response.data.success);

      setTimeout(router.push("/conta/entrar"), 6000);
    } catch (err) {
      Notify("error", 6000, "standard", err);
    }
  };

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

          <section className="flex flex-basis-auto items-center mt-[.7px] mb-[2.1px] max-w-[321px] w-full">
            {token ? (
              <ul className="flex flex-row pl-0 mb-0 ml-auto list-none">
                <li className="font-semibold">
                  <Link
                    legacyBehavior
                    href="/noticias"
                  >
                    <a
                      className="block py-2 px-5 bg-none border-none rounded-md text-center text-secondary-light no-underline transition duration-300 hover:text-white"
                      target="_blank"
                    >
                      Notícias
                    </a>
                  </Link>
                </li>

                <li className="font-semibold">
                  <button
                    onClick={handleLogout}
                    className="inline-block py-1.5 px-3 text-center text-inmetro bg-white border border-white rounded-md no-underline transition duration-500 hover:bg-secondary-dark hover:border-secondary-dark hover:text-white"
                    target="_blank"
                  >
                    Sair
                  </button>
                </li>
              </ul>
            ) : (
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
            )}
          </section>
        </div>
      </header>

      <main className="min-h-[85vh] main__align">
        <section>
          <h1 className="text-4xl/8 font-bold">
            Superando a Pressão Estética nas Redes Sociais: Mantendo uma
            Mentalidade Saudável e Positiva
          </h1>
        </section>

        <section>
          <section className="!mt-3.5 flex flex-row items-center justify-between text-[.75rem]">
            <span>Jolbert Sodré - 01/07/2024 às 12:32</span>

            <span>
              <strong>Tempo de leitura estimado:</strong> 5 minutos
            </span>
          </section>
        </section>

        <section className="!mt-6">
          <p className="p__tag">
            Depois de lidar com a pressão estética nas redes sociais, é{" "}
            <strong>essencial</strong> continuar cultivando uma mentalidade
            saudável e positiva. A jornada para a aceitação pessoal e a
            autoestima é contínua e requer atenção <strong>constante</strong>.
          </p>
          <p className="p__tag">
            Uma das maneiras de manter essa mentalidade é praticar a
            autocompaixão. Tratar-se com a mesma gentileza e compreensão que se
            ofereceria a um amigo pode <strong>reduzir</strong> os efeitos
            negativos da comparação e da pressão estética. Lembrar-se de que{" "}
            <strong>todos</strong> têm imperfeições e que estas não definem o
            valor pessoal é fundamental.
          </p>
          <p className="p__tag">
            Adotar hábitos <strong>saudáveis</strong> de uso das redes sociais
            também pode fazer uma grande diferença. Definir{" "}
            <strong>limites</strong> claros, como períodos sem uso das redes
            sociais ou dias de <strong>"detox digital"</strong>, pode ajudar a
            manter uma perspectiva equilibrada. Estudos mostram que reduzir o
            tempo gasto nas redes sociais pode diminuir os sintomas de ansiedade
            e depressão.
          </p>
          <p className="p__tag">
            Manter-se <strong>informado</strong> e <strong>atualizado</strong>{" "}
            sobre as questões relacionadas à pressão estética também pode ser
            benéfico. Ler artigos, assistir a documentários e participar de
            discussões sobre o tema pode reforçar a compreensão de que a beleza
            é <strong>subjetiva</strong> e que os padrões impostos são muitas
            vezes <strong>irreais</strong>.
          </p>
          <p className="p__tag">
            Finalmente, é <strong>crucial</strong> lembrar que o processo de
            aceitação e autoconfiança <strong>leva tempo</strong>. Celebrar
            pequenas vitórias, como sentir-se bem em relação à própria aparência
            em um dia específico, pode reforçar uma mentalidade positiva. Buscar
            continuamente formas de se conectar com a própria identidade e valor
            além da aparência física é um passo <strong>essencial</strong> para
            superar de vez a pressão estética nas redes sociais.
          </p>
        </section>

        <Comments
          token={token}
          pathname={pathname.substring(pathname.lastIndexOf("/") + 1)}
        />

        <ToastContainer containerId={"standard"} />
      </main>

      <Footer />
    </div>
  );
}
