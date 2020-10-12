export default class Component{

    /**
     * this is the constructor of our component
     * 
     * @param {HTMLElement} element 
     */
    constructor(element){
        // first we store the element our component working with
        this.element = element;
        // we set this component as component property of the html element
        element.component = this;
        // we set two css classes to the element, to easily identify it later
        element.classList.add('component')
        element.classList.add(this.constructor.name);
    }


    /**
     * @param {HTMLElement} element 
     */
    static bind(element){
        // we create our component
        let component = new this(element);
        // and returns it's reference
        return component;
    }

    // this getter generates our viewmodel, it should be overwritten
    get viewModel(){ return {}; }

    // this renders our content
    render(){
        // get the viewmodel
        let viewModel = this.viewModel;
        
        // make viewmodel as a promise if it was not it.
        // we will need it in the future, if the viewmodel runs and async functions
        // and the rendereing process must wait for it to finish
        if(!(viewModel instanceof Promise)) viewModel = Promise.resolve(viewModel);

        // so our viewmodel is now a promise, its okay to call it's then method
        viewModel
            .then(viewModel=>{
                // when we got the viewmodel, we replace our elements content
                // with the twig templates output rendered with the viewmoodel
                this.element.innerHTML = this.constructor.twig(this.viewModel);
                // we pass the viewModel to the next stem
                return viewModel;
            }).
            then((viewModel)=>{
                // right after it finished, we call the "onRender" method
                // and maybe it needs our viewModel, so we pass it
                this.onRender(viewModel);
            })
    }

    // this runs right after the rendering, it should be overwritten
    onRender(viewModel){}

}
