import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const cache = new InMemoryCache()
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache,
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider attribute='class' defaultTheme='light'>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}
