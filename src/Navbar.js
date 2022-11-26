import './css/navbar.css';
import Joke from './Joke';

export default function Navbar(){
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li>
                    <h1 className="logo">Jokes!</h1>
                </li>
                <li className="jokes-dropper">
                    <h3>See all jokes by dropdown</h3>
                    <ul className="jokes-dropdown">
                        <li>
                            <Joke setup="Qual é o único continente que tem problemas no estômago?" punchline="ásia"/>
                        </li>
                        <li>
                            <Joke setup="Qual é a tecla favorita do astronalta?" punchline="espaço"/>            
                        </li>
                        <li>
                            <Joke setup="O que o motorista disse quando parou o ônibus?" punchline="a que ponto chegamos?"/>
                        </li>
                        <li>                            
                            <Joke setup="Qual é o contrário de volatil?" punchline="vem cá sobrinho"/>                            
                        </li>
                        <li>
                            <Joke setup="Por que a idosa não tem relógio?" punchline="por que ela é senhora"/>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}