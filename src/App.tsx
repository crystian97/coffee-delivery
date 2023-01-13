import { ThemeProvider } from 'styled-components'
import Home from './pages/Home/Index'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Home/>
   </ThemeProvider>
  )
}

export default App
