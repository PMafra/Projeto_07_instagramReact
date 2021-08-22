export default function Fundo (props) {
    const iconNames = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];

    return (
        <div class="fundo">
            <div class="acoes">
                <div>
                    {iconNames.map(iconName =>
                        <ion-icon name={iconName}></ion-icon>
                    )}
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={`assets/img/${props.userLike}.svg`} />
                <div class="texto">
                    Curtido por <strong>{props.userLike}</strong> e <strong>outras {props.likes} pessoas</strong>
                </div>
            </div>
        </div>
    );
}