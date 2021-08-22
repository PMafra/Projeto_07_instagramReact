export default function Stories () {
    const storiesImgsNames = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"];
    
    return (
        <div class="stories">
            {storiesImgsNames.map(imgName =>
                <div class="story">
                    <div class="imagem">
                        <img src={`assets/img/${imgName}.svg`} />
                    </div>
                    <div class="usuario">
                        {imgName}
                    </div>
                </div>
            )}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}