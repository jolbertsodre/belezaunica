"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Notify from "@/components/ui/toast";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [token, setToken] = useState("");

  useEffect(() => {
    const tkn = window.localStorage.getItem("token");
    if (tkn) setToken(tkn);
  });

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "https://belezaunica.vercel.app/api/jwt-token/revoke",
        { headers: { Authorization: `Bearer ${token}` } }
      );

      window.localStorage.removeItem("token");

      Notify("success", 4000, "standard", response.data.success);

      setTimeout(router.push("/conta/entrar"), 6000);
    } catch (err) {
      Notify("error", 6000, "standard", err.response.data.error);
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
                  <Link
                    legacyBehavior
                    href="/conta/entrar"
                  >
                    <a
                      className="inline-block py-1.5 px-7 text-center text-white bg-secondary-dark border border-secondary-dark rounded-md no-underline transition duration-500 hover:bg-white hover:border-white hover:text-inmetro"
                      target="_blank"
                    >
                      Entrar
                    </a>
                  </Link>
                </li>

                <li className="font-semibold !ml-2.5">
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
        <section className="!mt-4">
          <h1 className="text-[2.5rem]/8 font-bold !mb-6">
            Bem-vindo ao ao Beleza Única!
          </h1>
        </section>

        <section className="!mt-10">
          <p className="p__tag">
            As redes sociais se tornaram uma parte integral das nossas vidas,
            oferecendo uma maneira fácil de se conectar com amigos, familiares e
            o mundo ao nosso redor. No entanto, essas plataformas também têm um
            lado sombrio: a pressão estética.
          </p>

          <p className="p__tag">
            A pressão estética nas redes sociais refere-se às expectativas e
            imposições de padrões de beleza irreais que podem impactar
            profundamente nossa autoimagem e saúde mental. Nas redes sociais,
            somos constantemente bombardeados com imagens de corpos perfeitos e
            vidas aparentemente ideais, o que pode criar uma sensação de
            inadequação e insatisfação com nossa própria aparência.
          </p>

          <p className="p__tag">
            Estudos mostram que a exposição contínua a essas imagens pode levar
            a problemas de saúde mental, como ansiedade, depressão e distúrbios
            alimentares. As redes sociais, como Instagram, Facebook e TikTok,
            são ambientes onde a comparação constante é incentivada, e os
            algoritmos dessas plataformas frequentemente promovem conteúdos que
            reforçam padrões de beleza inatingíveis.
          </p>

          <p className="p__tag">
            Nosso site foi criado com o objetivo de informar, conscientizar e
            ajudar você a entender e enfrentar a pressão estética nas redes
            sociais. Aqui, você encontrará artigos abrangentes que exploram
            diferentes aspectos desse fenômeno, desde uma introdução ao tema até
            estratégias para lidar com a pressão e manter uma mentalidade
            saudável.
          </p>

          <p className="p__tag">
            Esperamos que, ao ler nossos artigos, você possa desenvolver uma
            visão mais crítica sobre o conteúdo consumido nas redes sociais e
            encontrar maneiras de proteger sua saúde mental e bem-estar.
            Junte-se a nós nesta jornada de conscientização e empoderamento.
          </p>

          <p className="p__tag">
            Explorar esses temas é essencial para reconhecer os sinais de que a
            pressão estética pode estar afetando sua vida e descobrir como lidar
            com ela de maneira eficaz. Nossa missão é proporcionar um espaço
            seguro e informativo para que todos possam aprender e crescer
            juntos.
          </p>
        </section>

        <section className="!my-5">
          <h1 className="text-2xl/8 font-semibold">
            Alguns artigos interessantes:
          </h1>
        </section>

        <section className="!mb-4">
          <ul className="grid grid-cols-2 gap-4">
            <li>
              <a
                href="/noticias/o-que-e-a-pressao-estetica-nas-redes-sociais"
                className="anchor__style"
                target="_blank"
              >
                <div className="!mb-3">
                  <Image
                    className="white__logo"
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
                href="/noticias/conscientizacao-sobre-a-pressao-estetica-nas-redes-sociais"
                className="anchor__style"
              >
                <div className="!mb-3">
                  <Image
                    className="white__logo"
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
                href="/noticias/como-lidar-com-a-pressao-estetica-nas-redes-sociais"
                className="anchor__style"
                target="_blank"
              >
                <div className="!mb-3">
                  <Image
                    className="white__logo"
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
                href="/noticias/superando-a-pressao-estetica-nas-redes-sociais"
                className="anchor__style"
                target="_blank"
              >
                <div className="!mb-3">
                  <Image
                    className="white__logo"
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
        </section>

        <section className="!mt-7 !mb-3 flex justify-center">
          <button>
            <Link
              legacyBehavior
              href="/noticias"
            >
              <a
                className="inline-block py-2 px-5 text-lg font-semibold text-center text-white bg-secondary border border-secondary rounded-md no-underline transition duration-500 hover:bg-secondary-dark hover:border-secondary-dark hover:text-white"
                target="_blank"
              >
                Ver mais artigos...
              </a>
            </Link>
          </button>
        </section>

        {<ToastContainer containerId={"standard"} />}
      </main>

      <Footer />
    </div>
  );
}
