import {elements} from './base';

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
                <div class="progress-bar bg-success" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </td>
    </tr> 
    
    `;
    elements.netzmeResList.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = netzmes => {   
    netzmes.forEach(renderNetzme);
}