import $ from 'jquery';

const regEx = {
    name: /^[A-ZŠĐŽĆČ][a-zšđčćž]{1,11}$/,
    email: /^[a-zšđčćž\-.]{3,}@[a-zšđčćž]{3,}.[a-zšđčćž]{2,3}$/
}

function validateForm(){
   event.preventDefault();
   const name = regEx.name.test($(`#name`).val());
   const email = regEx.email.test($(`#email`).val());
   if(!name){alert('Incorrect name')}
   else if(!email){alert('Incorrect e-mail')}
   else{alert('Thank you for your massage!')}
}

export default validateForm