const body: HTMLBodyElement = document.getElementsByTagName('body')[0];

const h1Tag: HTMLHeadingElement = body.querySelector('h1.title')!;

function handleClick(e: Event) {
    console.log(e.target);
    console.log(e);
}

h1Tag.addEventListener('click',(e) => handleClick(e))