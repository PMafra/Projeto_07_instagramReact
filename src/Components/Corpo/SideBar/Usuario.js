export default function Usuario (props) {
    return (
        <div class="usuario">
            <img src={`assets/img/${props.userName}.svg`} />
            <div class="texto">
              <strong>{props.userName}</strong>
              {props.userSurname}
            </div>
        </div>
    );
}