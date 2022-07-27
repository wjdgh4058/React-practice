/*import { Fragment } from 'react';
import ReactDOM from 'react-dom/client';

const product = 'MacBook';
const model = 'Air';
const item = product + model;

function handleClick(){
  alert('곧 도착합니다!');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <h1>나만의 {item} 주문하기</h1>
  <button onClick={handleClick}>확인</button>
</>
);
*/


import ReactDOM from 'react-dom';

const WINS = {
  rock: 'scissor',
  scissor: 'paper',
  paper: 'rock',
};

function getResult(left, right) {
  if (WINS[left] === right) return '승리';
  else if (left === WINS[right]) return '패배';
  return '무승부';
}

function handleClick() {
  console.log('가위바위보!');
}

const me = 'rock';
const other = 'scissor';
const result = getResult(me, other);
ReactDOM.render(
  <>
    <h1>가위바위보</h1>
    <h2>{result}</h2>
    <button onClick ={handleClick}>가위</button>
    <button onClick ={handleClick}>바위</button>
    <button onClick ={handleClick}>보</button>
  </>,
  document.getElementById('root')
);
