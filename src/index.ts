import './tailwind.css';

import ImplItem  from "./Item";

const buttons: HTMLElement = document.querySelector('.buttons')!;
const uList: HTMLElement = document.querySelector('ul.list')!;


interface DOMEvent<T extends HTMLElement> extends MouseEvent {
    readonly target : T;
}

function handleClick(e: MouseEvent) : void {
    const event = e as DOMEvent<HTMLButtonElement>;
    const item = new ImplItem(uList);
    item.createItem(event.target.innerText);
}

buttons.addEventListener('click', (e) => handleClick(e));
