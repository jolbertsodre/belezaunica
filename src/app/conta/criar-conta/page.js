"use client";

import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { googleSignUp, signUp } from "@/lib/firebase/firebase_interface";
import { ToastContainer, toast } from "react-toastify";
import Notify from "@/components/ui/toast";

export default function Home() {
  const router = useRouter();

  const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_\.]{2,19}$/;
  const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formValid, setFormValid] = useState(false);

  const [clickedUsername, setClickedUsername] = useState();
  const [clickedPassword, setClickedPassword] = useState();

  useEffect(() => {
    const isValid =
      USERNAME_REGEX.test(username) &&
      EMAIL_REGEX.test(email) &&
      PASSWORD_REGEX.test(password);
    setFormValid(isValid);
  }, [username, email, password]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setTimeout(() => {
      toast.dismiss({ containerId: "username" });
    }, 1000);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setTimeout(() => {
      toast.dismiss({ containerId: "password" });
    }, 1000);
  };

  const handleClickUsername = () => {
    if (!clickedUsername) {
      Notify(
        "warn",
        6500,
        "username",
        "O seu nome de usuário deve conter somente letras, números, underline (_) e hífen (-), além disso, ele deve conter no máximo 20 caracteres e começar com uma letra!"
      );
      setClickedUsername(true);
    }
  };

  const handleClickPassword = () => {
    if (!clickedPassword) {
      Notify(
        "warn",
        6500,
        "password",
        "Por favor digite uma senha forte, que tenha, ao menos, 1 (uma) letra maiúscula, 1 (um) símbolo (!@#$%&*) e 1 (um) número, além de ter um comprimento mínimo de 8 caracteres."
      );
      setClickedPassword(true);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      await signUp(email, password).then((user) => {
        Notify(
          "success",
          5500,
          `Com criada com sucesso! Bem-vindo(a) ${user.email}!`
        );
        console.log(user);
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
          `Conta criado com sucesso com o Google! Bem-vindo(a) ${user.email}!`
        );
        console.log(user);
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
                  href="/conta/entrar"
                >
                  <a
                    className="inline-block py-1.5 px-3 text-center text-inmetro bg-white border border-white rounded-md no-underline transition duration-500 hover:bg-secondary-dark hover:border-secondary-dark hover:text-white"
                    target="_blank"
                  >
                    Entrar
                  </a>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </header>

      <main className="min-h-[85vh] align__center !py-6">
        <h1 className="font-bold text-5xl/8 text-inmetro">Criar conta</h1>

        <p className="!mt-5 font-medium text-lg text-secondary-light">
          Crie sua conta e nome de usuário com seu email e senha!
        </p>

        <p className="!mb-3 font-medium text-lg text-secondary-light">
          Ao criar sua conta você garante acesso a todas as funcionalidades do
          nosso website informativo!
        </p>

        <form>
          <div className="relative !mb-4">
            <input
              onClick={handleClickUsername}
              onChange={handleUsernameChange}
              value={username}
              type="text"
              maxLength={20}
              autoComplete="username"
              placeholder="nomeUsuario"
              className="input__class block w-full bg-clip-padding text-inmetro font-normal text-base leading-tight min-h-[calc(3.5rem_+_2px)] h-[calc(3.5rem_+_2px)] border px-3 py-4 rounded-md border-solid transition[colors, shadow] duration-150 ease-in-out"
            />
            <label className="label__input label__class transition[opacity, transform] duration-300 ease-in-out">
              Nome de usuário
            </label>
          </div>

          <div className="relative !mb-4">
            <input
              onChange={handleEmailChange}
              value={email}
              type="email"
              autoComplete="email"
              placeholder="exemplo@gmail.com"
              className="input__class block w-full bg-clip-padding text-inmetro font-normal text-base leading-tight min-h-[calc(3.5rem_+_2px)] h-[calc(3.5rem_+_2px)] border px-3 py-4 rounded-md border-solid transition[colors, shadow] duration-150 ease-in-out"
            />
            <label className="label__input label__class transition[opacity, transform] duration-300 ease-in-out">
              Email
            </label>
          </div>

          <div className="relative !mb-4">
            <input
              onClick={handleClickPassword}
              onChange={handlePasswordChange}
              value={password}
              type="password"
              placeholder="********"
              autoComplete="password"
              maxLength={32}
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
              className="flex flex-row flex-nowrap gap-1.5 items-center text-xl font-normal leading-normal text-center no-underline align-middle cursor-pointer select-none border bg-secondary text-white px-4 py-2 rounded-lg border-solid border-secondary hover:border-inmetro hover:bg-inmetro disabled:cursor-none disabled:pointer-events-none disabled:text-white disabled:bg-secondary-light disabled:opacity-[0.65] disabled:border-secondary-light transition-[colors, shadow] duration-[400ms] ease-in-out"
            >
              Criar conta
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
              Criar conta com Google
              <div className="flex items-center">
                <Image
                  src="/google_logo.svg"
                  width={24}
                  height={24}
                  alt="Logo do Google"
                />
              </div>
            </button>
            <span className="block !mt-3.5 font-medium text-[.75rem] text-inmetro">
              <strong>Observação:</strong> Ao criar a conta através do Google
              seu nome de usuário será definido <strong>automaticamente</strong>{" "}
              baseado no seu email do Google
            </span>
            <span className="block !mt-1 font-medium text-[.75rem] text-inmetro">
              <strong>Exemplo:</strong> Se seu email for{" "}
              <strong>
                <em>exemplo.bom123@gmail.com</em>
              </strong>
              , seu nome de usuário será{" "}
              <strong>
                <em>exemplo.bom123</em>
              </strong>
            </span>
          </div>
        </form>

        <ToastContainer containerId={"username"} />
        <ToastContainer containerId={"password"} />
        <ToastContainer containerId={"standard"} />
      </main>

      <Footer />
    </div>
  );
}
