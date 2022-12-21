import { ThemeProvider } from 'styled-components'
import Home from './pages/Home/Index'
import { defaultTheme } from './styles/themes/default'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Home/>
   </ThemeProvider>
  )
}

export default App
