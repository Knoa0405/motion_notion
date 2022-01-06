const h1Tag: HTMLHeadingElement | null  = document.querySelector('h1');

function handleClick(e: Event) {
    console.log(e.target);
}

h1Tag?.addEventListener('click',(e) => handleClick(e))