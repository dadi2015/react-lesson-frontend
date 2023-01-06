import React from 'react';
import Home from "./pages/home";
import {Route, Routes} from "react-router-dom";
import PrivateRoute from "./utils/router/privateRoute";
import AuthRootComponent from "./pages/auth";
import {ColorModeContext, useMode} from './theme'
import {CssBaseline, ThemeProvider} from '@mui/material'
import LayoutComponent from "./components/layout";
import WatchlistComponent from "./pages/watchlist";
import NewsComponent from "./pages/news";
import SettingsComponent from "./pages/settings";

function App() {
    const [theme, colorMode] = useMode()
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                    <div className="App">
                        <Routes>
                            <Route element={<LayoutComponent />}>
                                <Route element={<PrivateRoute/>}>
                                    <Route path="/" element={<Home/>}/>
                                    <Route path="/watchlist" element={<WatchlistComponent />}/>
                                    <Route path="/news" element={<NewsComponent />}/>
                                    <Route path="/settings" element={<SettingsComponent />}/>
                                </Route>
                                <Route path="login" element={<AuthRootComponent/>}/>
                                <Route path="register" element={<AuthRootComponent/>}/>
                            </Route>
                        </Routes>
                    </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
