import Sugestao from "./Sugestao";

export default function Sugestoes () {
    const suggestionNames = ["bad.vibes.memes", "chibirdart", "razoesparaacreditar", "adorable_animals", "smallcutecats"];

    return (
        <div class="Sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestionNames.map(suggName =>
                <Sugestao userName={suggName} />  
            )}
        </div>
    )
}