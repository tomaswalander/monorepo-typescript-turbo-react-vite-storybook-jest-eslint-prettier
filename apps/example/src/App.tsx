import { FC, useEffect } from 'react'
import { Button } from '@repo/ui-atoms'

import './App.css'
import { Navbar } from './Navbar'
import { useAuth0 } from '@auth0/auth0-react'

export const App: FC = () => {
  const {
    isLoading,
    isAuthenticated,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
  } = useAuth0()

  useEffect(() => {
    const runner = async () => {
      const resp = await getAccessTokenSilently()
      console.log(resp)
    }
    runner()
  }, [isAuthenticated])

  if (isLoading) {
    return (
      <>
        <header>Loading!</header>
      </>
    )
  }

  if (!isAuthenticated) {
    return (
      <>
        <header>You need to login</header>
        <main>
          <Button primary={true} onClick={() => loginWithRedirect()} />
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <header>
        <h1>Welcome</h1>
      </header>
      <main>
        <Button
          primary={true}
          onClick={() => console.log('hello world')}
          label="Click me!"
        />
        <p></p>
        <Button primary={false} onClick={() => logout()} label="Log out!" />
      </main>
    </>
  )
}
