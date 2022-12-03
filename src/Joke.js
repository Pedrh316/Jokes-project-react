import React from 'react';

export default function Joke(props){

    let [isShown, setIsShown] = React.useState(false);

    function toggleShown(){
        setIsShown((isShown) => !isShown);
    }

    return (
        <article className="joke">
            <h2 className="setup">{props.setup}</h2>
            <button onClick={toggleShown}>{isShown ? 'Hide Punchline' : 'Show Punchline' }</button>
            {isShown && <p className="punchline">{props.punchline}</p>}
        </article>
    )
}