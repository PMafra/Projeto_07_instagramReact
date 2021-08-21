export default function Icones () {
    const iconNames = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];

    return (
        <div class="icones">
            {iconNames.map(iconName => <ion-icon name={iconName}></ion-icon>)}
        </div>
    );
}