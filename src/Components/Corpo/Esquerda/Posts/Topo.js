export default function Topo (props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={`assets/img/${props.userName}.svg`} />
                {props.userName}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}