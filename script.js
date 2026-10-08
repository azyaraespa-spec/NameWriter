// ==================================== version 1 =====================================
let myName = 'Zahra Abdulcreem';

let index = 5;

function writeText() {
    document.querySelector('h1').textContent = myName.slice(0,index);

    index++

    if(index > myName.length) {
        index = 2;
    }
}

setInterval(() => {

    writeText();
    
}, 100);

// ==================================== version 2 =====================================

// let myName = 'Zahra Abdulcreem';
// let index = 0;
// let isDeleting = false;

// function writeText() {
//     const h1 = document.querySelector('h1');

//     if (!isDeleting) {
//         // يكتب حرف حرف
//         h1.textContent = myName.slice(0, index);
//         index++;
        
//         if (index > myName.length) {
//             isDeleting = true; // يبدأ يمسح
//         }
//     } else {
//         // يمسح حرف حرف
//         h1.textContent = myName.slice(0, index);
//         index--;

//         if (index < 0) {
//             isDeleting = false; // يرجع يكتب من جديد
//             index = 0;
//         }
//     }
// }

// setInterval(writeText, 120);

// ==================================== version 3 =====================================

// let myName = 'Zahra Abdulcreem';
// let index = 0;
// let isDeleting = false;

// function writeText() {
//     const h1 = document.querySelector('h1');

//     // كتابة أو مسح الحروف
//     if (!isDeleting) {
//         h1.textContent = myName.slice(0, index) + "|";
//         index++;

//         if (index > myName.length) {
//             isDeleting = true;
//         }
//     } else {
//         h1.textContent = myName.slice(0, index) + "|";
//         index--;

//         if (index < 0) {
//             isDeleting = false;
//             index = 0;
//         }
//     }
// }

// setInterval(writeText, 120);