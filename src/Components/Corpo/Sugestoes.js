// import Sugestao from "./Sugestao";

export default function Sugestoes () {
    const suggestionNames = ["bad.vibes.memes", "chibirdart", "razoesparaacreditar", "adorable_animals", "smallcutecats"];

    return (
        <div class="Sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestionNames.map(value =>
                <div class="sugestao">
                    <div class="usuario">
                        <img src={`assets/img/${value}.svg`} />
                        <div class="texto">
                            <div class="nome">{value}</div>
                            <div class="razao">{value === "razoesparaacreditar" ? "Novo no Instagram" : "Segue você"}</div>
                        </div>
                    </div>
            
                    <div class="seguir">Seguir</div>
                </div>    
            )}


            

        </div>
    )
}

{/* <Sugestao />
<Sugestao />
<Sugestao />
<Sugestao />
<Sugestao /> */}