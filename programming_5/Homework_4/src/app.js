// we are importing our components
import MyComponent from "./component/my-component/component";
import FileReader from "./component/file-reader/component";

// we bind our components to existing html elements, and renders tham
MyComponent.bind(document.getElementById('my-component')).render();
FileReader.bind(document.getElementById('file-reader-1')).render();
FileReader.bind(document.getElementById('file-reader-2')).render();
