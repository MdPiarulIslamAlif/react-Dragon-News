import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,  } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

     const [user, setUser] = useState();
     const [loading, setLoading] = useState(true);
 

     //register
     const createUser = (email,password)=>{
          setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
     }

     //sign in 
     const login = (email,password)=>{
          setLoading(true);
          return signInWithEmailAndPassword(auth, email,password);
     }
     
     //signOut

     const logOut = (auth)=>{
          setLoading(true);
          return signOut(auth);
          
     }



     //manage user
     useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth, currentUser =>{
               console.log('user in the auth state change',currentUser);
               setUser(currentUser);
               setLoading(false);
          })
          return ()=>{
               unSubscribe();
          }
     },[])

     //set the value
     const authInfo = {
       user,
       loading,
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