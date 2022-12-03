import React from 'react';
import ReactDOM from 'react-dom';
import Joke from './Joke';
import Navbar from './Navbar';
import './css/style.css';
import './css/Jokes.css';

let jokesData = [
    {
        setup:"Qual é o único continente que tem problemas no estômago?",
        punchline:"ásia",
        isShown:false
    },
    {
        setup:"Qual é a tecla favorita do astronalta?",
        punchline:"espaço",
        isShown:true
    },
    {
        setup:"O que o motorista disse quando parou o ônibus?",
        punchline:"a que ponto chegamos?",
        isShown:true
    },
    {
        setup:"Qual é o contrário de volatil?",
        punchline:"vem cá sobrinho",
        isShown:false
    },
    {
        setup:"Por que a idosa não tem relógio?",
        punchline:"por que ela é senhora",
        isShown:false
    }
]

function Jokes(){

    let allJokes = jokesData.map(joke => <Joke {...joke}/>)

    return (
        <div>
            <Navbar/>
            <section className="jokes">
                {allJokes}
            </section>
        </div>
    )
}

ReactDOM.render(<Jokes/>, document.getElementById('root'));