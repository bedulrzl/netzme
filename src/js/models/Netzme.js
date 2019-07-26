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

        console.log('totalresult', totalresult);
        console.log('trx', this.trx_amount);
 
        console.log('amount', amountTotal);
      
  
    }

  
    

}


/*
const msgTotal = this.result.reduce((prev, cur) => {
    return prev + parseInt(cur.trx_amount);
  }, 0);
  
console.log('Total Messages:', msgTotal);


   totalAmount(){
        const totalTrx = this.result.reduce((prev, cur) => {
            return prev + parseInt(cur.trx_amount);
        }, 0);
        console.log('totaltrx', totalTrx);

        const totalTrx_amount = (3000 / totalTrx ) * 100;
        console.log(totalTrx_amount);
    }

*/
