import axios from 'axios';
import $ from 'jquery';

const _api = axios.create({
    baseURL: `http://localhost:3000`
  });
  
async function displayCoaches(){
    let response = await _api.get(`/coaches`);
    let resp = await response.data;
    for (const card of resp) {
        _render(card)
    }
  }
function _render(card){
$('#coachesTeam').append(` 
<div class="coach">
<div class="coachImg"><img src="${card.img}" alt="${card.name} image">
    <div class="contactCoach">
        <i class="fab fa-facebook-square facebook" title="facebook"><a
                href="https://www.facebook.com/"></a></i>
        <i class="fab fa-instagram instagram" title="instagram"><a
                href="https://www.instagram.com/"></a></i>
        <i class="fab fa-twitter-square twitter" title="twitter"><a
                href="https://twitter.com/Twitter"></a></i>
    </div>
</div>
<div class="coachText">
    <h3>${card.name}</h3>
    <h5>${card.title}</h5>
    <p>${card.description}</p>
</div>
</div>`)
}

export default displayCoaches