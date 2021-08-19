import Topo from "./Topo";
import Conteudo from "./Conteudo";
import Fundo from "./Fundo";

export default function Post () {
    return (
        <div class="post">
            <Topo />
            <Conteudo />
            <Fundo />
        </div>
    );
}