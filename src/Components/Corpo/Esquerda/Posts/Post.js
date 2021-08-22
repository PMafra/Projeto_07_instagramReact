import Topo from "./Topo";
import Conteudo from "./Conteudo";
import Fundo from "./Fundo";

export default function Post (props) {
    return (
        <div class="post">
            <Topo userName={props.userName}/>
            <Conteudo postImg={props.postImg}/>
            <Fundo userLike={props.userLike} likes={props.likes}/>
        </div>
    )
}