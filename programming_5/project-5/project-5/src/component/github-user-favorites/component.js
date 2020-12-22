import Component from "../../modules/component";
import twig from "./template.twig"

export default (class GithubUserFavorites extends Component{

    constructor(element){
        super(element);
        this.favorites = {};
    }

    get viewModel(){
        return {favorites: this.favorites}
    }

    add(user){
        console.log(this.favorites)
        this.favorites[user.login] = user;
        this.render();
    }

    onRender(){
        this.$$('user').on.click((event, target)=>{
            let login = target.dataset.login;
            delete this.favorites[login];
            this.render();
        });
    }

}).register(twig, 'github-user-favorites');