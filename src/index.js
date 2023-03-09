import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from "./styles/globalStyle";
import Routes from './routes';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
<>
    <Routes />
    <GlobalStyle/>
</>
);
    
