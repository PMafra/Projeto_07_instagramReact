export default function Conteudo (props) {
    return (
        <div class="conteudo">
            <img src={`assets/img/${props.imgId}.svg`} />
        </div>
    );
}