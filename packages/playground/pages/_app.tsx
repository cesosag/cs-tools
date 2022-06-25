import type { AppProps } from 'next/app'
import { GlobalStyle } from 'styles'

const App = ({ Component, pageProps }: AppProps) => {
  return <>
		<GlobalStyle />
		<main>
			<Component {...pageProps} />
		</main>
	</>
}

export default App
