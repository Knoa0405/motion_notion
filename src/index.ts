import './tailwind.css';

import ImplItem  from "./Item";

const buttons: HTMLElement = document.querySelector('.buttons')!;

function handleClick(e : Event) : void {
    ImplItem({ parentElement : buttons });
}

buttons.addEventListener('click', (e) => handleClick(e));
