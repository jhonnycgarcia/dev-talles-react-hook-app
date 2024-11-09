import { UserContext } from "./UserContext"

const user = {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
}

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider 
        value={{
            hola: 'Hola Mundo',
            user,
        }}
    >
        {children}
    </UserContext.Provider>
  )
}
