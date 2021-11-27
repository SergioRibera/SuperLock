import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DefaultTheme } from './Screens/DefaultTheme';

ReactDOM.render(
    <React.StrictMode>
        <DefaultTheme options={{ showHours: true, showMinutes: true, showSeconds: false, showDate: true, showAmPm: false }} />
    </React.StrictMode>,
    document.getElementById('root')
);
