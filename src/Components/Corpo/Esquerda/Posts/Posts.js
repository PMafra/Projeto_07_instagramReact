import Topo from "./Topo";
import Conteudo from "./Conteudo";
import Fundo from "./Fundo";

export default function Posts () {
    const postsInfo = [
        {userName:"meowed", postImg:"gato-telefone", userLike:"respondeai", likes:"101.523"},
        {userName:"barked", postImg:"dog", userLike:"adorable_animals", likes:"99.159"}
    ];

    return (
        <div class="posts">
            {postsInfo.map(postInfo =>
                <div class="post">
                    <Topo userName={postInfo.userName}/>
                    <Conteudo postImg={postInfo.postImg}/>
                    <Fundo userLike={postInfo.userLike} likes={postInfo.likes}/>
                </div>
            )}
        </div>
    );
}