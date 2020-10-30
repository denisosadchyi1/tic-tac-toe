import {map} from './static.js';
const wrapper = document.querySelector('.block-wrapper');

let count = 0;

const winArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

let cellsConfig = [...map];

const render = () => {
  wrapper.innerHTML = `
    ${cellsConfig.map((item) => {
      const cellContent = item.cellState ? item.cellState === 'cross' ? 'X' : '0' : '';
      return `
        <div data-cellstate="${item.cellState}" data-id="${item.id}" class="block">
        ${cellContent}
        </div>`;
    }).join('')}
  `;
};



const updateState = (id) =>{
  count++;
  if(count % 2) {
    cellsConfig[id - 1] = {cellState: 'cross', id: +id};
  } else {
    cellsConfig[id - 1] = {cellState: 'zero', id: +id};
  }
};

const isWin = (arr) => {
  return winArr.some((item1) => {
    const clearCross = arr.filter((item2) => {
      return item1.includes(item2);
    });
    if(JSON.stringify(item1) === JSON.stringify(clearCross)){
      return true;
    }
  });
};


const clearMap = () => {
  cellsConfig = [...map];
  count = 0;
  render();
};

const checkWin = () => {
    const crossArr = [];
    const zeroArr = [];
    cellsConfig.forEach((item) => {
      if(item.cellState == 'cross'){
        crossArr.push(item.id);
      }else if(item.cellState == 'zero'){
        zeroArr.push(item.id);
      }
    });
    crossArr.sort();
    zeroArr.sort();
    const isCrossWin = isWin(crossArr);
    const isZeroWin = isWin(zeroArr);
    const isEmptyMap = cellsConfig.every((item) => item.cellState);
    if(isCrossWin){
      alert('CROSS WIN!');
      clearMap();
    }
    else if(isZeroWin){
      alert('ZERO WIN!');
      clearMap();
    }
    else if(isEmptyMap && !isZeroWin && !isCrossWin){
      alert('DRAW');
      clearMap();
    }
    render();
};

wrapper.addEventListener('click', (e) =>{
  if(e.target.dataset.cellstate !== 'null') {
    return;
  }
  updateState(e.target.dataset.id);
  checkWin();
});


render();