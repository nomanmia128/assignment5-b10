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

   const donateInput = getInputFieldValueById('input-doneat');
   const acountValue = getTextFieldValueById('account-balance');
   document.getElementById('input-doneat').value = '';

   if(isNaN(donateInput) || donateInput <= 0 || (donateInput > acountValue)){
    alert('Invalid Donation Amount')
    return;
   }
   else{
      document.getElementById('my_modal_1').showModal()
   }
 
   const balance = getTextFieldValueById('current-amount');
   const newDonate = balance + donateInput;
   document.getElementById('current-amount').innerText = newDonate;

   const updateBalance = acountValue - donateInput;
   document.getElementById('account-balance').innerText = updateBalance;
   
//    added history
   const div = document.createElement('div');
   div.classList.add('p-5', 'border', 'rounded-xl', 'mb-2');
   div.innerHTML = `
   <h4 class="lg:text-2xl font-bold pb-2">${donateInput} Taka is Donate for famine-2024 at Feni, Bangladesh</h4>
   <p>Date: Tue${new Date(). toLocaleString()} GMT +0600 (Bangladesh Standard Time)</p>
   `
   document.getElementById('history-contain').appendChild(div);

})
// card-1 end

// card-2 start
document.getElementById('btn-donate2')
.addEventListener('click', function(event2){
   event2.preventDefault();

   const donateInput2 = getInputFieldValueById('input-doneat2');
   const acountValue2 = getTextFieldValueById('account-balance');
   document.getElementById('input-doneat2').value = '';

   if(isNaN(donateInput2) || donateInput2 <= 0 || (donateInput2 > acountValue2)){
    alert('Invalid Donation Amount')
    return;
   }
   else{
      document.getElementById('my_modal_1').showModal()
   }
 
   const balance2 = getTextFieldValueById('current-amount2');
   const newDonate2 = balance2 + donateInput2;
   
   
   document.getElementById('current-amount2').innerText = newDonate2;

   const updateBalance2 = acountValue2 - donateInput2;
   document.getElementById('account-balance').innerText = updateBalance2;
   
//    added history
   const div = document.createElement('div');
   div.classList.add('p-5', 'border', 'rounded-xl', 'mb-2');
   div.innerHTML = `
   <h4 class="text-2xl font-bold pb-2">${donateInput2} Taka is Donated for Flood Relief in Feni,Bangladesh</h4>
   <p>Date: Tue${new Date(). toLocaleString()} GMT +0600 (Bangladesh Standard Time)</p>
   `
   document.getElementById('history-contain').appendChild(div);

})
// card-2 end

// card-3 start 
document.getElementById('btn-donate3')
.addEventListener('click', function(event3){
   event3.preventDefault();

   const donateInput3 = getInputFieldValueById('input-doneat3');
   const acountValue3 = getTextFieldValueById('account-balance');
   document.getElementById('input-doneat3').value = '';

   if(isNaN(donateInput3) || donateInput3 <= 0 || (donateInput3 > acountValue3)){
    alert('Invalid Donation Amount')
    return;
   }
   else{
      document.getElementById('my_modal_1').showModal()
   }
 
   const balance3 = getTextFieldValueById('current-amount3');
   const newDonate3 = balance3 + donateInput3;
   
   
   document.getElementById('current-amount3').innerText = newDonate3;

   const updateBalance3 = acountValue3 - donateInput3;
   document.getElementById('account-balance').innerText = updateBalance3;
   
//    added history
   const div = document.createElement('div');
   div.classList.add('p-5', 'border', 'rounded-xl', 'mb-2');
   div.innerHTML = `
   <h4 class="text-2xl font-bold pb-2">${donateInput3} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h4>
   <p>Date: Tue${new Date(). toLocaleString()} GMT +0600 (Bangladesh Standard Time)</p>
   `
   document.getElementById('history-contain').appendChild(div);

})
// card-3 end




document.getElementById('donate-form-btn')
.addEventListener('click', function(){

    showScertionById('donate-from');
})

document.getElementById('history-form-btn')
.addEventListener('click', function(){

    showScertionById('history-from');
})


const donatttButn = document.getElementById('donate-form-btn');
const historyyButn = document.getElementById('history-form-btn');

function activBton(btnToActiv){
  donatttButn.classList.remove('active');
  historyyButn.classList.remove('active');

  btnToActiv.classList.add('active');
}

donatttButn.addEventListener('click', function(){
   activBton(donatttButn);
})

historyyButn.addEventListener('click', function(){
   activBton(historyyButn);
})