import React from 'react';
import ReactDOM from 'react-dom';
import Joke from './Joke';
import Navbar from './Navbar';
import './css/style.css';
import './css/Jokes.css';

function Jokes(){
    return (
        <div>
            <Navbar/>
            <section className="jokes">
                <Joke setup="Qual é o único continente que tem problemas no estômago?" punchline="ásia"/>
                <Joke setup="Qual é a tecla favorita do astronalta?" punchline="espaço"/>
                <Joke setup="O que o motorista disse quando parou o ônibus?" punchline="a que ponto chegamos?"/>
                <Joke setup="Qual é o contrário de volatil?" punchline="vem cá sobrinho"/>
                <Joke setup="Por que a idosa não tem relógio?" punchline="por que ela é senhora"/>
            </section>
        </div>
    )
}

ReactDOM.render(<Jokes/>, document.getElementById('root'));