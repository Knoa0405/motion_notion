// 1. 각 종류별 리스트는 모두 CRUD 가 가능해야 한다.  
// 1-1. 각 리스트에는 해당 리스트 등록 버튼과 기능이 필요하다.  
// 1-2. 각 리스트에는 수정 버튼과 기능이 필요하다.
// 1-3. 각 리스트에는 삭제 버튼과 기능이 필요하다.  

import getListFromType, { Type } from "utils/getListFromType";
import classificationCategoryTypes from "utils/types";

// 1-4. 각 리스트에는 텍스트 등록 인풋이 있다. ( 리스트 title 넣는 부분 )
interface Item {
    parentElement : HTMLElement;
    createItem(type: string): void;
    updateItem() : void;
    deleteItem() : void;
}

class ImplItem implements Item {
    parentElement: HTMLElement;

    constructor(parentElement: HTMLElement) {
        this.parentElement = parentElement
    }

    createItem = (categoryName: string) : void => {
        const type: number = classificationCategoryTypes(categoryName);
       this.parentElement.innerHTML = getListFromType(type as Type);
        // type check 후 type 별로 다른 특성을 가진 리스트를 생성해준다.
    }

    updateItem = () => {

    }

    deleteItem = () => {

    }
}



export default ImplItem;