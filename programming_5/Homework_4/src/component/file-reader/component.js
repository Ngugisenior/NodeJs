import fs from "fs"
import Component from "../../modules/component";
import twig from "./template.twig"
import "./style.scss";

export default class FileReader extends Component{

    get viewModel(){
        // read the filename from the filename data attribute
        let filename = this.element.dataset.filename;
        let filecontent;
        // check if the file exists
        if(fs.existsSync(filename)){
            // if exists read it's content
            filecontent = fs.readFileSync(filename);
        }else{
            filecontent = 'file not found'
        }
        // and return it as the viewmodel
        return {filename, filecontent};
    }
}

FileReader.twig = twig;