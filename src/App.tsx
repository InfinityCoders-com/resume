import React from 'react'
import { Header } from './components/Headers'
import { Resume } from './modules/Resume/containers/Resume'
import { TMode } from './modules/type'
import { AppLayout } from './style/styled'

function App() {
  const [mode, setMode] = React.useState<TMode>('edit')
  return (
    // <AppLayout className="App">
    <>
      <Header mode={mode} setMode={setMode} />
      <Resume />
    </>
    // </AppLayout>
  )
}

export default App
