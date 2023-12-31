import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import {NDVI, MapPage, NDRE, MCARI, Cadastral} from "./pages";
import FloatingLogo from "./components/FloatingLogo";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <ChakraProvider>
        <React.StrictMode>

            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<MapPage />} />
                        <Route path="/ndvi" element={<NDVI/>} />
                        <Route path="/ndre" element={<NDRE/>} />
                        <Route path="/mcari" element={<MCARI/>} />
                        <Route path="/cadastral" element={<Cadastral/>} />
                    </Routes>
                    <FloatingLogo />
                </Layout>
            </Router>
        </React.StrictMode>
    </ChakraProvider>
);