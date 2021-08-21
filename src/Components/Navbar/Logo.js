export default function Logo (props) {
    return (
        <div class="logo">
            <ion-icon name={props.text}></ion-icon>
            <div class="separador"></div>
            <img src={props.url} />
        </div>
    );
}