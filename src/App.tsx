import React from 'react';
import Home from "./components/home";
import {Route, Routes} from "react-router-dom";
import PrivateRoute from "./utils/router/privateRoute";
import AuthRootComponent from "./components/auth";
import {ColorModeContext, useMode} from './theme'
import {CssBaseline, ThemeProvider} from '@mui/material'
import LayoutComponent from "./components/layout";
import WatchlistComponent from "./components/watchlist";
import NewsComponent from "./components/news";
import SettingsComponent from "./components/settings";

function App() {
    const [theme, colorMode] = useMode()
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <LayoutComponent>
                    <div className="App">
                        <Routes>
                            <Route element={<PrivateRoute/>}>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/watchlist" element={<WatchlistComponent />}/>
                                <Route path="/news" element={<NewsComponent />}/>
                                <Route path="/settings" element={<SettingsComponent />}/>
                            </Route>
                            <Route path="login" element={<AuthRootComponent/>}/>
                            <Route path="register" element={<AuthRootComponent/>}/>
                        </Routes>
                    </div>
                </LayoutComponent>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
