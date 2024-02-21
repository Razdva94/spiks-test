import React from 'react';
import ReactDOM from 'react-dom/client';
import AppEnter from './app/AppEnter';
import { StyledEngineProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './store';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import './index.css';

const theme = createTheme({
	components: {
		MuiCheckbox: {
			styleOverrides: {
				root: {
					'&.Mui-checked': {
						color: '#85D62D',
						backgrounColor: 'white',
					},
					'& .MuiSvgIcon-root': { fontSize: 24 },
					color: '#959595',
				},
			},
		},
	},
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<StyledEngineProvider injectFirst>
					<AppEnter />
				</StyledEngineProvider>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
);
