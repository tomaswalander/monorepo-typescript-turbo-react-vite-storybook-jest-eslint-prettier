import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as navbar from './Navbar.module.css';
export const Navbar = () => {
    return (_jsx("nav", { className: navbar.navbarContainer, children: _jsxs("div", { className: navbar.inner, children: [_jsxs("ul", { className: navbar.mainMenu, children: [_jsx("li", { children: "Home" }), _jsx("li", { children: "About" }), _jsx("li", { children: "Contact" })] }), _jsx("div", { className: navbar.userMenu, children: _jsx("p", { children: "Tomas Walander" }) })] }) }));
};
