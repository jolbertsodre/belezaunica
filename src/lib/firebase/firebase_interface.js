import { auth } from './firebase_options';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';

export const checkUser = async (type) => {
  try {
    const user = auth.currentUser;

    if (user == null) {
      return "";
    } else {
      if (type === "token") {
        return user.getIdToken();
      } else if (type === "email") {
        return user.email;
      } else {
        return user;
      }
    }
  } catch (err) {
    throw new Error(`${err.message}: ${err.code}`);
  }
};

export const signUp = async (email, passwd) => {
  try {
    return (await createUserWithEmailAndPassword(auth, email, passwd)).user;
  } catch (err) {
    if (err.code == 'auth/weak-password') {
      throw new Error("A senha digitada é fraca! Por favor digite uma nova senha mais forte, que tenha, ao menos, 1 (uma) letra maiúscula, 1 (um) símbolo (!@#$%&*) e 1 (um) número, além de ter um comprimento mínimo de 8 caracteres.");
    } else if (err.code == 'auth/email-already-in-use') {
      throw new Error("Já existe uma conta com esse email, faça login ou corrija o endereço de email!");
    } else {
      throw new Error(`${err.message}: ${err.code}`);
    }
  }
};

export const logIn = async (email, passwd) => {
  try {
    return (await signInWithEmailAndPassword(auth, email, passwd)).user;
  } catch (err) {
    if (err.code == 'auth/invalid-credential') {
      throw new Error("Credencias incorretas!");
    } else {
      throw new Error(`${err.message}: ${err.code}`);
    }
  }
};

export const googleSignUp = async () => {
  const provider = new GoogleAuthProvider();

  try {
    return (await signInWithPopup(auth, provider)).user;
  } catch (err) {
    if (err.code == 'auth/popup-closed-by-user') {
      throw new Error("O usuário cancelou o Pop-up, por isso o sign up/log in foi abortado!");
    } else {
      throw new Error(`${err.message}: ${err.code}`);
    }
  }
};

export const logOut = async () => {
  const user = auth.currentUser;

  if (user != null) {
    signOut(auth);
    return `O logout do ${user} foi feito com sucesso!`;
  } else {
    throw new Error("O usuário não está logado!");
  }
};