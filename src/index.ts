import './tailwind.css';

import ImplItem  from "./Item";

const buttons: HTMLElement = document.querySelector('.buttons')!;

interface DOMEvent<T extends HTMLElement> extends MouseEvent {
    readonly target : T;
}

function handleClick(e: MouseEvent) : void {
    const event = e as DOMEvent<HTMLButtonElement>;
    const item = new ImplItem(buttons);

    console.log(item.createItem(event.target.innerText));
}

buttons.addEventListener('click', (e) => handleClick(e));
