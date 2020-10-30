const block = document.querySelectorAll('.block');

let crossArr = [];
let zeroArr = [];


let counter = 0;

let crossWin = 0;
let zerroWin = 0;

const winObject = {
  arr1: [1, 4, 7],
  arr2: [1, 2, 3],
  arr3: [2, 5, 8],
  arr4: [3, 6, 9],
  arr5: [1, 5, 9],
  arr6: [7, 5, 3],
};


const contains = (where, what) => {
  for (var i = 0; i < what.length; i++) {
    if (where.indexOf(what[i]) == -1) {
      return false;
    }
  }
  alert('You Win!');
};

const test = (event, index) => {
  if (counter % 2 == 0) {
    event.innerHTML = 'X';
    crossArr.push(index + 1);
  } else {
    event.innerHTML = '0';
    zeroArr.push(index + 1);
  }
  counter++;

};

block.forEach((item, index) => {
  item.addEventListener('click', () => {
    test(item, index);
  });
});


console.log(crossArr);
console.log(zeroArr);



// for(let i = 0; i < crossArr.length; i++){
//   for(let k =0; k < crossArr.length; k++){
//     if(crossArr[i] == arr[k]){
//       win++;
//       console.log(win);
//       if(win == 3){
//         alert('You Win!');
//       }
//     }
//   }
// }

// for(let i = 0; i < zeroArr.length; i++){
//   for(let k =0; k < arr.length; k++){
//     if(zeroArr[i] == arr[k]){
//       win++;
//       console.log(win);
//       if(win == 3){
//         alert('You Win!');
//       }
//     }
//   }
// }



// crossArr.forEach((item) => {

// });

// console.log(crossArr, zeroArr);