import Sugestao from "./Sugestao";

export default function Sugestoes () {
    const suggestions = [{userName:"bad.vibes.memes", situation: "Segue você"}, {userName:"chibirdart", situation: "Segue você"}, {userName:"razoesparaacreditar", situation: "Novo no Instagram"}, {userName:"adorable_animals", situation: "Segue você"}, {userName:"smallcutecats", situation: "Segue você"}];

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestions.map(sugg =>
                <Sugestao userName={sugg.userName} situation={sugg.situation}/>
            )}
        </div>
    )
}