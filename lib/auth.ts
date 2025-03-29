import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth();

export const signup = async (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    return user
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorCode, errorMessage)
    return error
  });
}
