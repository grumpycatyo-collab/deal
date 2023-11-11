import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Layout} from "./components";
import {MapPage} from "./pages";
import App from './App';
import {ChakraProvider} from '@chakra-ui/react'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ChakraProvider>
        <React.StrictMode>
            <Layout>
            <MapPage/>
            </Layout>
        </React.StrictMode>
    </ChakraProvider>
);


