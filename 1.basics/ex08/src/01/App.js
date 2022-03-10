import React from 'react';

const App = function() {
    return (
        <div>
            <h2>App01</h2>
            <p>JSX Tutorials - 특징1 : HTML과 차이점</p>
            {/*
                1. 속성은 Camel Case
            */}
            <input type = 'text' maxLength='10' />
            {/*
                2. Element는 꼭 닫는다.
                오류) <br>, <hr>, <input type='text'>, <img src = ''>
            */}
            <br />
            <hr />
            <img scr = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fko.wikipedia.org%2Fwiki%2F%25EB%25A6%25AC%25EC%2595%25A1%25ED%258A%25B8_(%25EC%259B%25B9_%25ED%2594%2584%25EB%25A0%2588%25EC%259E%2584%25EC%259B%258C%25ED%2581%25AC)&psig=AOvVaw3sgI5Sqdd5ksbcwoozFuTK&ust=1646962359828000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCNiZhoazuvYCFQAAAAAdAAAAABAD' />
            {/*
                3. 속성 이름은 DOM API 기반이다. (HTML Tag 기반 X)
                <div id='box' class='box'>...</div>
                document.getElementById('box').className = 'box';
            */}
            <div id='box' className='box'>
                box 입니다.    
            </div>
        </div>
    ); 
}

export default App;