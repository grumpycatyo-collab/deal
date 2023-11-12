import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import {NDVI, MapPage} from "./pages";

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
                    </Routes>
                </Layout>
            </Router>
        </React.StrictMode>
    </ChakraProvider>
);