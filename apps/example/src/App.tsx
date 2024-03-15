import { FC } from 'react'
import { Button } from '@repo/ui-atoms'

import './App.css'
import { Navbar } from './Navbar'

export const App: FC = () => {
  return (
    <>
      <Navbar />
      <header>
        <h1>Welcome to Example</h1>
      </header>
      <main>
        <Button
          primary={true}
          onClick={() => console.log('hello world')}
          label="Click me!"
        />
        <p>
          Get started by editing <code>apps/example/src/App.tsx</code>
        </p>
      </main>
    </>
  )
}
