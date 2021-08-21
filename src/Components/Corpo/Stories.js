import Story from "./Story";

export default function Stories () {
    const imagensStories = ["assets/img/9gag.svg", "assets/img/meowed.svg", "assets/img/barked.svg", "assets/img/nathanwpylestrangeplanet.svg", "assets/img/wawawicomics.svg", "assets/img/respondeai.svg", "assets/img/filomoderna.svg", "assets/img/memeriagourmet.svg"];
    const usuariosStories = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"];

    return (
        <div class="stories">
            {imagensStories.map(imagensStories[i] => <li>imagensStories[i]</li>}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

        
/*
<div class="story">
    <div class="imagem">
        <img src="assets/img/9gag.svg" />
    </div>
    <div class="usuario">
        9gag
    </div>
</div>
*/    