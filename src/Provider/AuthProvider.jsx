import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,  } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

     const [user, setUser] = useState();
 

     //register
     const createUser = (email,password)=>{
       return createUserWithEmailAndPassword(auth, email, password);
     }

     //sign in 
     const login = (email,password)=>{
          return signInWithEmailAndPassword(auth, email,password);
     }
     
     //signOut

     const logOut = (auth)=>{
          return signOut(auth);
     }



     //manage user
     useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth, currentUser =>{
               console.log('user in the auth state change',currentUser);
               setUser(currentUser);
          })
          return ()=>{
               unSubscribe();
          }
     },[])

     //set the value
     const authInfo = {
       user,
       createUser,
       login,
       logOut,
     };

     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;