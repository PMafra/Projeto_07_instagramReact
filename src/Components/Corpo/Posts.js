import Topo from "./Topo";
import Conteudo from "./Conteudo";
import Fundo from "./Fundo";

export default function Posts () {
    return (
        <div class="posts">
            <div class="post">
                <Topo imgId="meowed"/>
                <Conteudo imgId="gato-telefone"/>
                <Fundo imgId="respondeai" likes="101.523"/>
            </div>
            <div class="post">
                <Topo imgId="barked"/>
                <Conteudo imgId="dog"/>
                <Fundo imgId="adorable_animals" likes="99.159"/>
            </div>
        </div>
    );
}