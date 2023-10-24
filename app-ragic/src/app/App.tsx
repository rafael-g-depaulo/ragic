import { QueryClient } from "./api/queryClient"
import { Router } from "./routes"
import { GlobalStyles } from "./styles/globalStyles"

function App() {
  return (
    <QueryClient>
      <GlobalStyles />
      <Router />
    </QueryClient>
  )
}

export default App
