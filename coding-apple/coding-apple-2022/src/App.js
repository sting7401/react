import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

    let post = '강남 우동 맛집';
    let [postName, postNameChange] = useState(['코드 추천', '남자 코드 추천', '여자 코드 추천']);
    let [numberCheck, numberCheckChange] = useState(0);

    function clickNumber() {
        numberCheckChange(numberCheck += 1)
    }

    function titleChange() {
        let copyPostName = [...postName];
        copyPostName[0] = '여자 코드 추천1';
        console.log(copyPostName === postName)
        postNameChange(copyPostName)
    }

    function sortName() {
        let copySort = [...postName];
        copySort.sort((a,b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1);
        postNameChange(copySort)
    }
    
    return (
        <div className="App">
            <div className='black-nav'>
                <h4 style={{color: 'red', fontSize: '26px'}}>{post}</h4>
            </div>

            <button type="button" onClick={sortName}>가나다순정렬 </button>
            <button type='button' onClick={ titleChange }></button>
            <div className='list'>
                <h4>{ postName[0] } <button type='button' onClick={ clickNumber }>🤳</button> {numberCheck}</h4>
                <p>1월</p>
            </div>
            <div className='list'>
                <h4>{ postName[1] }</h4>
                <p>1월</p>
            </div>
            <div className='list'>
                <h4>{ postName[2] }</h4>
                <p>1월</p>
            </div>

            <LiComponent></LiComponent>

            <ModalComponent></ModalComponent>
        </div>
    );
}

function LiComponent()  {
    return(
        <div className='list'>
            <h4></h4>
            <p>1월</p>
            
        </div>
    )
}


function ModalComponent()  {
    return(
        <>
            <div className='modal'>
                <p>modal</p>
                <p>modal text</p>
            </div>
        </>
    )
}

export default App;
