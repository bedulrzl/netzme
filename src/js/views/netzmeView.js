import {elements} from './base';


export const clearResults = () => {
    elements.netzmeResList.innerHTML = '';
}


/*
export const msgTotal = res.reduce((prev, cur) => {
    return prev + parseInt(cur.trx_amount);
  }, 0);
  
console.log('Total Messages:', msgTotal);
*/

// const totalAmount = (title) => {
//     const red = title.reduce((acc, cur) => {
//         let currentAmount = parseInt(cur.trx_amount.slice(1))
//          return acc + parseInt(cur);
//     }, 0)
//     return red;
// }

export const totalAmount = (title) => {
    const newAmount = [];
        title.reduce((acc, cur) => {
            if (acc + cur.trx_amount <= 3 ) {
                newAmount.push(cur);
            }
            return acc + cur.trx_amount;
        }, 0);
        return `${newTitle.join('')} ...`;
  
}

const renderNetzme = netzme => {

    const markup = `
    <tr id="">     
        <td>${netzme.fullname}</td>
        <td>
            <img src="${netzme.photo}" alt="photo"></<img>
        </td>
        <td>${netzme.trx_count}</td>
        <td>
            <div class="progress">
                <div class="progress-bar bg-success" role="progressbar" style="width:${netzme.trx_amount}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </td>
    </tr> 
    
    `;
    elements.netzmeResList.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = netzmes => {   
    netzmes.forEach(renderNetzme);
}