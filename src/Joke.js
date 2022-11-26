
export default function Joke(props){
    return (
        <article className="joke">
            <h2 className="setup">{props.setup}</h2>
            <p className="punchline">{props.punchline}</p>
        </article>
    )
}