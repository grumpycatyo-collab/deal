import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Layout} from "./components";
import App from './App';
import {ChakraProvider} from '@chakra-ui/react'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ChakraProvider>
        <React.StrictMode>
            <Layout>
                <div>ffdsfkjsfhfkjdhs</div>
            {/*< App/>*/}
            </Layout>
        </React.StrictMode>
    </ChakraProvider>
);


