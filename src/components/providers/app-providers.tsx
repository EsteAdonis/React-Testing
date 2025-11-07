import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseLine from '@mui/material/CssBaseline';

const theme = createTheme({
	palette: {
		mode: 'dark',
	},
})

export const AppProviders = ({children} : {children: React.ReactNode}) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseLine />
			{children}
		</ThemeProvider>
	)
}