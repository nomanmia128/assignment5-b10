// console.log('uitility added');
function getInputFieldValueById(id){
    const inputDonate = document.getElementById(id).value;
    const inputNumber = parseFloat(inputDonate);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showScertionById(id){
    document.getElementById('donate-from').classList.add('hidden');
    document.getElementById('history-from').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden');
}

// section-1 start
document.getElementById('btn-donate')
.addEventListener('click', function(event){
   event.preventDefault();
//    donate btn
   const donet = getInputFieldValueById('input-doneat');
   const ttttt = getTextFieldValueById('main-amount');
   document.getElementById('input-doneat').value = '';

   if(isNaN(donet) || donet <= 0 || (donet > ttttt)){
    alert('My code is samthing rong')
    return;
   }
   else{
    alert('CONGRATS!')
   }
 
   const balance = getTextFieldValueById('section-total-amount');
   const newDonate = balance + donet;
   
   
   document.getElementById('section-total-amount').innerText = newDonate;

   const newtttt = ttttt - donet;
   document.getElementById('main-amount').innerText = newtttt;
   
//    added history
   const div = document.createElement('div');
   div.classList.add('p-5', 'border', 'rounded-xl', 'mb-2');
   div.innerHTML = `
   <h4 class="text-2xl font-bold pb-2">${newDonate} Taka is Donate for famine-2024 at Feni, Bangladesh</h4>
   <p>Date: Tue${new Date(). toLocaleString()} GMT +0600 (Bangladesh Standard Time)</p>
   `
   document.getElementById('history-contain').appendChild(div);

})
// section-1 cet

// section-2 start
document.getElementById('btn-donate2')
.addEventListener('click', function(event2){
   event2.preventDefault();
//    donate btn
   const donet2 = getInputFieldValueById('input-doneat2');
   const ttttt2 = getTextFieldValueById('main-amount');
   document.getElementById('input-doneat2').value = '';

   if(isNaN(donet2) || donet2 <= 0 || (donet2 > ttttt2)){
    alert('My code is samthing rong')
    return;
   }
   else{
    alert('CONGRATS!')
   }
 
   const balance2 = getTextFieldValueById('section-total-amount2');
   const newDonate2 = balance2 + donet2;
   
   
   document.getElementById('section-total-amount2').innerText = newDonate2;

   const newtttt2 = ttttt2 - donet2;
   document.getElementById('main-amount').innerText = newtttt2;
   
//    added history
   const div = document.createElement('div');
   div.classList.add('p-5', 'border', 'rounded-xl', 'mb-2');
   div.innerHTML = `
   <h4 class="text-2xl font-bold pb-2">${newDonate2} Taka is Donated for Flood Relief in Feni,Bangladesh</h4>
   <p>Date: Tue${new Date(). toLocaleString()} GMT +0600 (Bangladesh Standard Time)</p>
   `
   document.getElementById('history-contain').appendChild(div);

})
// section-2 ent

// section-3 start 
document.getElementById('btn-donate3')
.addEventListener('click', function(event3){
   event3.preventDefault();
//    donate btn
   const donet3 = getInputFieldValueById('input-doneat3');
   const ttttt3 = getTextFieldValueById('main-amount');
   document.getElementById('input-doneat3').value = '';

   if(isNaN(donet3) || donet3 <= 0 || (donet3 > ttttt3)){
    alert('My code is samthing rong')
    return;
   }
   else{
    alert('CONGRATS!')
   }
 
   const balance3 = getTextFieldValueById('section-total-amount3');
   const newDonate3 = balance3 + donet3;
   
   
   document.getElementById('section-total-amount3').innerText = newDonate3;

   const newtttt3 = ttttt3 - donet3;
   document.getElementById('main-amount').innerText = newtttt3;
   
//    added history
   const div = document.createElement('div');
   div.classList.add('p-5', 'border', 'rounded-xl', 'mb-2');
   div.innerHTML = `
   <h4 class="text-2xl font-bold pb-2">${newDonate3} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h4>
   <p>Date: Tue${new Date(). toLocaleString()} GMT +0600 (Bangladesh Standard Time)</p>
   `
   document.getElementById('history-contain').appendChild(div);

})
// section-3 ent




document.getElementById('donate-form-btn')
.addEventListener('click', function(){

    showScertionById('donate-from');
})

document.getElementById('history-form-btn')
.addEventListener('click', function(){

    showScertionById('history-from');
})