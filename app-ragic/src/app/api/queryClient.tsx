import { PropsWithChildren } from "react"
import { QueryClient as _QueryClient, QueryClientProvider } from "react-query"

const queryClient = new _QueryClient()

export const QueryClient = ({ children }: PropsWithChildren) => {
  return <QueryClientProvider client={queryClient} children={children} />
}
