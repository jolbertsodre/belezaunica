import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <header className="bg-inmetro flex flex-row items-center justify-center w-full shadow-[0px_4px_5px_0px_rgba(128,128,128,1)]">
        <div className="max-h-[10vh] h-screen flex items-center justify-between align__center">
          <section>
            <h1 className="font-bold text-3xl text-white">Beleza Única</h1>
          </section>

          <section className="block">
            <Image
              src="/inmetro-logo-horizontal.png"
              width={155.55}
              height={32}
              alt="Isologo do Inmetro"
              className="white__logo"
            />
          </section>

          <section className="flex flex-basis-auto items-center mt-[.7px] mb-[2.1px]">
            <ul className="flex flex-row pl-0 mb-0 ml-auto list-none">
              <li className="font-semibold">
                <Link
                  legacyBehavior
                  href="/account/login"
                >
                  <a
                    className="block p-2 bg-none border-none rounded-md text-center text-secondary-light no-underline transition duration-300 hover:text-white"
                    target="_blank"
                  >
                    Entrar
                  </a>
                </Link>
              </li>

              <li className="font-semibold">
                <Link
                  legacyBehavior
                  href="/account/signup"
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

      <main className="min-h-[75vh] align__center"></main>

      <Footer />
    </div>
  );
}
