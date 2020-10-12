import Component from "../../modules/component";
import twig from "./template.twig"
import "./style.scss";

export default class MyComponent extends Component{
    get viewModel(){
        return {
            name: this.element.dataset.name
        };
    }

    onRender(){
        this.element.querySelector('.hello').addEventListener('click', (event)=>{
            console.log(event)
            event.target.classList.add('clicked');
        });
    }
}

MyComponent.twig = twig;