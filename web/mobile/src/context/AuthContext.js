import {createContext, useContext, useState} from 'react'
const AuthContext = createContext({});

//Context é uma forma de definir variaveis e funcoes de forma global
//englobndo todo o app
//ou seja eu tenho acesso a variavel user e setUser de qualquer lugar do meu app
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{
      user,
      setUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

export const useAuthContext = () => {
  return useContext(AuthContext);
};