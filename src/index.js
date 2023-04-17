import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import "css/style.scss";
import Router from "Router";
const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(<Router/>);
