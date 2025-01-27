/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import { getCurrentUser } from '../services/auth.service'

interface IUserProviderValues {
  user: any | null
  isLoading: boolean
  setUser: (user: any | null) => void
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

const UserContext = createContext<IUserProviderValues | undefined>(undefined)

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const handleUser = async () => {
    const user = await getCurrentUser()

    setUser(user)
    setIsLoading(false)
  }

  useEffect(() => {
    handleUser()
  }, [isLoading])

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUser must be used within the UserProvider context')
  }

  return context
}

export default UserProvider
