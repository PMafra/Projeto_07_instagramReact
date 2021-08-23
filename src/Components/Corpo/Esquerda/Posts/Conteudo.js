const doesFileExist = (urlToFile) => {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();
     
    return xhr.status !== 404;
}

export default function Conteudo (props) {
    return (
        <div class="conteudo">
            {doesFileExist(`assets/img/${props.postImg}.svg`) ? <img src={`assets/img/${props.postImg}.svg`}/> : 
                <video autoPlay muted loop controls>
                    <source src={`assets/video/${props.postImg}.mp4`} type="video/mp4"/>
                    <source src={`assets/video/${props.postImg}.ogv`} type="video/ogv"/>
                </video>
            }
        </div>
    )
}