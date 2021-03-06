import Netzme from './models/Netzme';
import * as netzmeView from './views/netzmeView';
import {elements} from './views/base';



const state = {};


const controlNetzme = async () => {

    state.netzme = new Netzme();

    netzmeView.clearResults();

    try {
        await state.netzme.getNetzme();

        state.netzme.calcAmount();

        netzmeView.renderResults(state.netzme.result);
        console.log('index',state.netzme.result);
    } catch(error) {
        console.log(error);
    }

   
}

elements.netzmeButton.addEventListener('click', e => {
    controlNetzme();
})