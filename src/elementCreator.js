import load from "./assests/png/Imgur.gif"

export default function LoadingScreen() {
    const element = document.createElement('div');
    element.style.position = 'absolute';
    element.style.height = '100vh';
    element.style.width = '100vw';
    element.style.backgroundColor = 'aliceblue';
    element.style.color = 'black';
    element.style.display = 'flex';
    element.style.justifyContent = 'center';
    element.style.alignItems = 'center';

    const img = new Image()

    img.style.height = "20vh";

    img.src = load

    element.appendChild(img);
    // element.textContent = 'Loading';

    return element

}