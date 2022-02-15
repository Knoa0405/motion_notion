import './tailwind.css';

import ImplList  from "./List";
import ImplItem, { Type } from './Item';
import classificationCategoryTypes from 'utils/types';

const buttons: HTMLElement = document.querySelector('.buttons')!;
const uList: HTMLElement = document.querySelector('ul.list')!;


interface DOMEvent<T extends HTMLElement> extends MouseEvent {
    readonly target : T;
}

function handleClick(e: MouseEvent) : void {
    const event = e as DOMEvent<HTMLButtonElement>;
    const item = new ImplItem(uList);
    
    const type: Type = classificationCategoryTypes(event.target.innerText);
    item.createItem(new ImplList(type));
}

buttons.addEventListener('click', (e) => handleClick(e));
