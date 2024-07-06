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
                    href="/"
                  >
                    <a
                      className="block py-2 px-5 bg-none border-none rounded-md text-center text-secondary-light no-underline transition duration-300 hover:text-white"
                      target="_blank"
                    >
                      Home
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
        <section className="!mb-5 !mt-4">
          <h1 className="text-2xl/8 font-semibold">Artigos mais recentes:</h1>
        </section>

        <section className="!mb-4">
          <ul className="w-full flex flex-col h-max-[2rem] h-screen">
            <li>
              <a
                href="/noticias/o-que-e-a-pressao-estetica-nas-redes-sociais"
                className="anchor__news__style"
                target="_blank"
              >
                <div className="!mr-4 max-w-[71.68px] w-full max-h-[64px] h-screen">
                  <Image
                    src="/inmetro-logo-vertical.png"
                    width={71.68}
                    height={64}
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
                className="anchor__news__style"
              >
                <div className="!mr-4 max-w-[71.68px] w-full max-h-[64px] h-screen">
                  <Image
                    src="/inmetro-logo-vertical.png"
                    width={71.68}
                    height={64}
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
                className="anchor__news__style"
                target="_blank"
              >
                <div className="!mr-4 max-w-[71.68px] w-full max-h-[64px] h-screen">
                  <Image
                    src="/inmetro-logo-vertical.png"
                    width={71.68}
                    height={64}
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
                className="anchor__news__style border-b-2"
                target="_blank"
              >
                <div className="!mr-4 max-w-[71.68px] w-full max-h-[64px] h-screen">
                  <Image
                    src="/inmetro-logo-vertical.png"
                    width={71.68}
                    height={64}
                    alt="Isologo do Inmetro"
                  />
                </div>
                Superando a Pressão Estética nas Redes Sociais: Mantendo uma
                Mentalidade Saudável e Positiva
              </a>
            </li>
          </ul>
        </section>

        {<ToastContainer containerId={"standard"} />}
      </main>

      <Footer />
    </div>
  );
}
