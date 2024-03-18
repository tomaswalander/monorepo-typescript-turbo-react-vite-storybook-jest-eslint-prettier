import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button } from '@repo/ui-atoms';
import './App.css';
import { Navbar } from './Navbar';
export const App = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx("header", { children: _jsx("h1", { children: "Welcome" }) }), _jsxs("main", { children: [_jsx(Button, { primary: true, onClick: () => console.log('hello world'), label: "Click me!" }), _jsxs("p", { children: ["Get started by editing ", _jsx("code", { children: "apps/example/src/App.tsx" })] })] })] }));
};
