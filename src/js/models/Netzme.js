import axios from 'axios';


export default class netzme {

    async getNetzme() {
        try {
            const res = await axios(`https://my-json-server.typicode.com/destri8/demo/data`);
            this.result = res.data;
            console.log('netzme', this.result);   
            console.log('result', this.result);
        } catch(error) {
            console.log(error);
        }
    }

    calcAmount() {
       
        const amountTotal = this.result.reduce((prev, cur) => {
            return prev + parseInt(cur.trx_amount);
        }, 0)
        
        const totalresult = this.result.forEach((part, index) => {
            this.result[index].trx_amount = Math.ceil((parseInt(this.result[index].trx_amount) / amountTotal ) * 100);    
        })  
        console.log('trx', totalresult);
        console.log('amount', amountTotal);      
    }
}

