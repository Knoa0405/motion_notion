import './tailwind.css';

import ImplItem  from "./Item";
import ImplList from './List';
import classificationCategoryTypes from 'utils/types';

const buttons: HTMLElement = document.querySelector('.buttons')!;
const uList: HTMLElement = document.querySelector('ul.list')!;


interface DOMEvent<T extends HTMLElement> extends MouseEvent {
    readonly target : T;
}

function handleClick(e: MouseEvent) : void {
    const event = e as DOMEvent<HTMLButtonElement>;
    const item = new ImplItem(uList);
    
    const type: number = classificationCategoryTypes(event.target.innerText);
    item.createItem(new ImplList(type));
}

buttons.addEventListener('click', (e) => handleClick(e));
