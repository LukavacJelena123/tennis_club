import $ from 'jquery';
import axios from 'axios';

const _api = axios.create({
    baseURL: `http://localhost:3000`
});

$('#prices').click(displayModal);

function displayModal(e) {
    if (e.target.classList.contains("button")) {
        let id = e.target.parentElement.dataset.id;
        localStorage.setItem('membership id', JSON.stringify(id));
        getDetails()
    }
}

async function getDetails() {
    let id = JSON.parse(localStorage.getItem('membership id'));
    let response = await _api.get(`/membership?id=${id}`);
    let resp = await response.data;
    _renderModal(resp[0])
}

function _renderModal(resp) {
    const { category, price, description, fullDescription } = resp;
    $('#id01').append(`  
        <div class="modal-content animate">
        <div class="imgcontainer">
                <div class="container">
                <h1 class="categoryModal">${category}</h1>
                <h3 class="priceModal">price: ${price} <small>$/mth</small></h3>
                <p class="descriptionModal"><i class="far fa-arrow-alt-circle-right"></i> ${description}.</p>
                <p class="descriptionModal"><i class="far fa-arrow-alt-circle-right"></i> ${fullDescription}</p>
                <p class="descriptionModal"><i class="far fa-arrow-alt-circle-right"></i> preparation for tournaments, techniques, conditioning training.</p>
                <p class="descriptionModal"><i class="far fa-arrow-alt-circle-right"></i> Optional activities: fitness, sparing 2h, trips ...</p>

                </div>
        </div>
        </div>
`)
    $('#id01').css({ "display": "block", "width": "100%" })
}

let modal = document.getElementById('id01');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        $('#id01').html('')
    }
}

export { }