import axios from 'axios';


export default class netzme {

    async getNetzme() {
        try {
            const res = await axios(`https://my-json-server.typicode.com/destri8/demo/data`);
            this.result = res
            console.log(this.result);
            
        } catch(error) {
            console.log(error);
        }
    }



}