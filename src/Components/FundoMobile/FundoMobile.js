export default function FundoMobile () {
    const iconNames = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"];

    return (
        <div class="fundo-mobile">
            {iconNames.map(iconName => <ion-icon name={iconName}></ion-icon>)}
        </div>
    );
}