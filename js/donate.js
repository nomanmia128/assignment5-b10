// console.log('clicked donate btn');

document.getElementById('btn-donate')
.addEventListener('click', function(event){
   event.preventDefault();

//    donate btn
   const donet = getInputFieldValueById('input-doneat');

//    main amount
// const totalAmounnt = getInputFieldValueById('main-amount');

   const balance = getTextFieldValueById('section-total-amount');
   const newDonate = balance + donet;

   const ttttt = getTextFieldValueById('main-amount');
   const newtttt = ttttt - newDonate;

   document.getElementById('section-total-amount').innerText = newDonate;
   document.getElementById('main-amount').innerText = newtttt;

//    if(inputValue <=0 || isNaN(inputValue) || (inputValue > balance)){
//     alert('My code is samthing rong')
//    }

//    added history
   const div = document.createElement('div');
   div.classList.add('p-5', 'border', 'rounded-xl', 'mb-2');
   div.innerHTML = `
   <h4 class="text-2xl font-bold pb-2">${newDonate} Taka is Donate for famine-2024 at Feni, Bangladesh</h4>
   <p>Date: Tue${new Date(). toLocaleString()} GMT +0600 (Bangladesh Standard Time)</p>
   `
   document.getElementById('history-contain').appendChild(div);

})

// // section-2
// ElementById('btn-donate2')
// .addEventListener('click', function(event){
//    event.preventDefault();

// //    donate btn
//    const donet2 = getInputFieldValueByIdd('input-doneat2');

// //    main amount
// // const totalAmounnt = getInputFieldValueById('main-amount');

//    const balance2 = getTextFieldValueByIdd('section-total-amount2');
//    const newDonate2 = balance2 + donet2;

// //    const ttttt2 = getTextFieldValueByIdd('main-amount');
// //    const newtttt2 = ttttt2 - newDonate2;

//    document.getElementById('section-total-amount2').innerText = newDonate2;
// //    document.getElementById('main-amount').innerText = newtttt2;
// })