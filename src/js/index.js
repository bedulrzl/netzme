import Netzme from './models/Netzme';
import * as netzmeView from './views/netzmeView';
import {elements} from './views/base';


const state = {};


const controlNetzme = async () => {

    state.netzme = new Netzme();

    try {
        await state.netzme.getNetzme();

        netzmeView.renderResults(state.netzme.result);
        console.log(state.netzme.result);
    } catch(error) {
        console.log(error);
    }

   
}

elements.netzmeButton.addEventListener('click', e => {
    e.preventDefault();
    controlNetzme();
})