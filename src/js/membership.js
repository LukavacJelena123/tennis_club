import axios from 'axios';
import $ from 'jquery';

const _api = axios.create({
    baseURL: `http://localhost:3000`
  });
  
async function display(){
    let response = await _api.get(`/membership`);
    let resp = await response.data;
    for (const card of resp) {
        _render(card)
    }
  }
function _render(card){
$('#prices').append(` 
    <div class="cardMembership" data-id=${card.id}>
    <p class="category">${card.category}</p>
    <p class="price"><sup>$</sup> <span>${card.price}</span> <small>/mth</small></p>
    <p class="description">${card.description}</p>
    <input class="button" type="button" value="Details">
    </div>`)
}

export default display