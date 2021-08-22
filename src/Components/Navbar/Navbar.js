export default function Navbar () {
    const instaLogoText = "logo-instagram";
    const instaLogoUrl = "assets/img/logo.png";
    const iconNames = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];

    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <ion-icon name={instaLogoText}></ion-icon>
                    <div class="separador"></div>
                    <img src={instaLogoUrl} />
                </div>
                <div class="logo-mobile">
                    <ion-icon name={instaLogoText}></ion-icon>
                </div>
                <div class="instagram-mobile">
                    <img src={instaLogoUrl} />
                </div>
                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
                <div class="icones">
                    {iconNames.map(iconName => <ion-icon name={iconName}></ion-icon>)}
                </div>
                <div class="icones-mobile">
                    <ion-icon name={iconNames[0]}></ion-icon>
                </div>
            </div>
        </div>
    );
}