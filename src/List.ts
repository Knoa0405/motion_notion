const buttons: HTMLElement = document.querySelector('.buttons')!;

function handleClick(e : Event) : void {
    console.log(e.target);
}

buttons.addEventListener('click', (e) => handleClick(e));