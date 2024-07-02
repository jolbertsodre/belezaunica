"use client";

import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { googleSignUp, logIn } from "@/lib/firebase/firebase_interface";
import { ToastContainer } from "react-toastify";
import Notify from "@/components/ui/toast";

export default function Home() {
  const router = useRouter();

  const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const isValid = EMAIL_REGEX.test(email) && PASSWORD_REGEX.test(password);
    setFormValid(isValid);
  }, [email, password]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      await logIn(email, password).then((user) => {
        Notify(
          "success",
          5500,
          `Você entrou com sucesso foi na conta com email o ${user.email}!`
        );
        setTimeout(() => {
          router.push("/");
        }, 6000);
      });
    } catch (e) {
      Notify("error", e.message);
    }
  };

  const onSubmitGoogle = async (event) => {
    event.preventDefault();

    try {
      await googleSignUp().then((user) => {
        Notify(
          "success",
          5500,
          `Você entrou com sucesso através do Google com o email o ${user.email}!`
        );
        setTimeout(() => {
          router.push("/");
        }, 6000);
      });
    } catch (e) {
      Notify("error", e.message);
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

          <section className="flex flex-basis-auto items-center mt-[.7px] mb-[2.1px] max-w-[192px] w-full">
            <ul className="flex flex-row pl-0 mb-0 ml-auto list-none">
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

      <main className="min-h-[85vh] align__center !py-6">
        <h1 className="font-bold text-5xl/8 text-inmetro">Entrar</h1>

        <p className="!mt-5 !mb-3 font-medium text-lg text-secondary-light">
          Utilize seu email e senha para entrar!
        </p>

        <form>
          <div className="relative !mb-4">
            <input
              onChange={handleEmailChange}
              value={email}
              autoComplete="email"
              type="email"
              placeholder="exemplo@gmail.com"
              className="input__class block w-full bg-clip-padding text-inmetro font-normal text-base leading-tight min-h-[calc(3.5rem_+_2px)] h-[calc(3.5rem_+_2px)] border px-3 py-4 rounded-md border-solid transition[colors, shadow] duration-150 ease-in-out"
            />
            <label className="label__input label__class transition[opacity, transform] duration-300 ease-in-out">
              Email
            </label>
          </div>

          <div className="relative !mb-4">
            <input
              onChange={handlePasswordChange}
              value={password}
              type="password"
              placeholder="********"
              maxLength={32}
              autoComplete="password"
              className="input__class block w-full bg-clip-padding text-inmetro font-normal text-base leading-tight min-h-[calc(3.5rem_+_2px)] h-[calc(3.5rem_+_2px)] border px-3 py-4 rounded-md border-solid transition[colors, shadow] duration-150 ease-in-out"
            />
            <label className="label__input label__class transition[opacity, transform] duration-300 ease-in-out">
              Senha
            </label>
          </div>

          <div>
            <button
              disabled={!formValid}
              onClick={onSubmit}
              className="flex flex-row flex-nowrap gap-1.5 items-center text-xl font-normal leading-normal text-center no-underline align-middle cursor-pointer select-none border bg-secondary text-white px-4 py-2 rounded-lg border-solid border-secondary hover:border-inmetro hover:bg-inmetro disabled:cursor-none disabled:pointer-events-none disabled:text-white disabled:bg-secondary-light disabled:border-secondary-light transition-[colors, shadow] duration-[400ms] ease-in-out"
            >
              Entrar
            </button>
          </div>

          <div className="flex flex-row gap-1.5 items-center max-w-[100px] w-full my-3">
            <div className="bg-divider w-[50px] h-[2px] rounded-[100%_0_0_100%]"></div>
            <span className="font-medium">OU</span>
            <div className="bg-divider w-[50px] h-[2px] rounded-[0_100%_100%_0]"></div>
          </div>

          <div className="block items-center !mb-4">
            <button
              onClick={onSubmitGoogle}
              className="flex flex-row flex-nowrap gap-1.5 items-center text-xl font-normal leading-normal text-center no-underline align-middle cursor-pointer select-none border bg-transparent text-secondary-light px-4 py-2 rounded-lg border-solid border-secondary-light hover:border-inmetro hover:text-inmetro transition[colors, shadow] duration-[350ms] ease-in-out"
            >
              Entrar com Google
              <div className="flex items-center">
                <Image
                  src="/google_logo.svg"
                  width={24}
                  height={24}
                  alt="Logo do Google"
                />
              </div>
            </button>
          </div>
        </form>

        {<ToastContainer containerId={"standard"} />}
      </main>

      <Footer />
    </div>
  );
}
