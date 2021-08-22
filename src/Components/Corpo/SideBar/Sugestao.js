export default function Sugestao (props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={`assets/img/${props.userName}.svg`} />
                <div class="texto">
                    <div class="nome">{props.userName}</div>
                    <div class="razao">{props.situation}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>  
    )
}