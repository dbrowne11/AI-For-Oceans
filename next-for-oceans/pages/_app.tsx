import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../theme/theme";
import createEmotionCache from "../src/createEmotionCache";
import DefaultLayout from "../layouts/DefaultLayout";
import "../styles/globals.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}
//NEED TO KNOW HOW TO MAKE DATASETCARD: GO TO ..\datasets\index.tsx
export default function MyApp(props: MyAppProps) {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
	} = props;
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<title>{process.env.siteTitle}</title>
				<meta
					name="viewport"
					content="initial-scale=1, width=device-width"
				/>
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<DefaultLayout>
					<Component {...pageProps} />
				</DefaultLayout>
			</ThemeProvider>
		</CacheProvider>
	);
}
