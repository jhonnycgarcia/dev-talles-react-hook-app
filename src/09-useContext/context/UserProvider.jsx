import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 1,
//     name: 'John Doe',
//     email: 'johndoe@example.com',
// }

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

  return (
    <UserContext.Provider 
        value={{
            user,
            setUser
        }}
    >
        {children}
    </UserContext.Provider>
  )
}
