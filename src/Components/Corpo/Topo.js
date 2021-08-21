export default function Topo (props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={`assets/img/${props.imgId}.svg`} />
                {props.imgId}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}