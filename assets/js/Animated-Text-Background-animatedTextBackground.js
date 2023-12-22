
const speed = 15;

const moveBackground = () => {
    let mouseXPos = (event.x / window.innerWidth)*200;
    let mouseYPos = (event.y / window.innerHeight)*200;
    document.getElementById('animatedTextHeading').style.backgroundPosition = `${mouseXPos / speed}% ${mouseYPos / speed}%`;
}

document.body.addEventListener('mousemove', moveBackground);