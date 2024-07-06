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
            Introdução à Pressão Estética nas Redes Sociais: Compreendendo o
            Impacto das Redes Sociais na Autoimagem
          </h1>
        </section>

        <section className="!mt-3.5 flex flex-row items-center justify-between text-[.75rem]">
          <span>Jolbert Sodré - 01/07/2024 às 11:48</span>

          <span>
            <strong>Tempo de leitura estimado:</strong> 5 minutos
          </span>
        </section>

        <section className="!mt-6">
          <p className="p__tag">
            A <strong>pressão estética</strong> é um fenômeno social que se
            refere à expectativa e <strong>imposição</strong> de padrões de
            beleza pela sociedade. Com o advento das redes sociais, essa pressão
            tornou-se ainda mais intensa e onipresente, afetando milhões de
            pessoas diariamente. As redes sociais, como Instagram, Facebook e
            TikTok, são plataformas onde imagens de corpos perfeitos e vidas
            aparentemente ideais são exibidas constantemente. Esse bombardeio de
            imagens cria uma sensação de inadequação e insatisfação com a
            própria aparência.
          </p>

          <p className="p__tag">
            Diversos estudos têm mostrado que a exposição contínua a essas
            imagens pode levar a problemas de saúde mental, como ansiedade,
            depressão e distúrbios alimentares. Uma pesquisa realizada pela{" "}
            <strong>Royal Society for Public Health</strong>, no Reino Unido,
            revelou que o Instagram é a rede social mais prejudicial para a
            saúde mental dos jovens, contribuindo para sentimentos de
            inadequação e baixa autoestima.
          </p>

          <p className="p__tag">
            O funcionamento das redes sociais é um fator crucial nessa dinâmica.
            Algoritmos são <strong>projetados</strong> para maximizar o
            engajamento, mostrando repetidamente conteúdos que obtêm mais
            curtidas e comentários. Isso significa que imagens de pessoas com
            corpos considerados perfeitos são mais visíveis, perpetuando padrões
            de beleza irreais. Além disso, a edição de fotos e o uso de filtros
            contribuem para a distorção da realidade, apresentando uma versão
            idealizada e muitas vezes <strong>inatingível</strong> da beleza.
          </p>

          <p className="p__tag">
            Os efeitos dessa pressão estética são <strong>vastos</strong> e{" "}
            <strong>profundos</strong>. Indivíduos podem sentir-se compelidos a
            fazer dietas extremas, recorrer a procedimentos estéticos invasivos
            e gastar grandes quantias de dinheiro em produtos de beleza. A{" "}
            <strong>constante comparação</strong> com os outros nas redes
            sociais pode levar a uma percepção distorcida do próprio corpo,
            afetando negativamente a autoimagem e a saúde mental.
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
