// we are importing our components
import "./app.scss";
import "./component/*/component.js";
import "./component/*/style.scss";
import registry from "./modules/component-registry";

// When the document loads, it calls the registry's listen method.
document.addEventListener('DOMContentLoaded', () => registry.listen())


// Create an empty menubar
var menu = new nw.Menu({type: 'menubar'});

// on mac we add builtin menus
menu.createMacBuiltin('GITHUB SEARCH')

// Create a submenu as the 2nd level menu
var submenu = new nw.Menu();
submenu.append(new nw.MenuItem({label: 'Load'}));
submenu.append(new nw.MenuItem({label: 'Save'}));

// Create and append the 1st level menu to the menubar
menu.append(new nw.MenuItem({label: 'Favorites', submenu: submenu}));

// Assign it to `window.menu` to get the menu displayed
nw.Window.get().menu = menu;