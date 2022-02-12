// 1. 각 종류별 리스트는 모두 CRUD 가 가능해야 한다.
// 1-1. 각 리스트에는 해당 리스트 등록 버튼과 기능이 필요하다.  
// 1-2. 각 리스트에는 수정 버튼과 기능이 필요하다.
// 1-3. 각 리스트에는 삭제 버튼과 기능이 필요하다.  

import ImplList from "./List";
import classificationCategoryTypes from "utils/types";

// 1-4. 각 리스트에는 텍스트 등록 인풋이 있다. ( 리스트 title 넣는 부분 )
interface Item {
    parentElement : HTMLElement;
    createItem(implList: ImplList): void;
    updateItem() : void;
    deleteItem() : void;
}

class ImplItem implements Item {
    parentElement: HTMLElement;

    constructor(parentElement: HTMLElement) {
        this.parentElement = parentElement
    }
    // 아이템 생성시
    // 1. 이미지 - 이미지 파일 업로드, url 삽입
    // 2. 비디오 - 비디오 url 삽입
    // 3. 테스크 - 할일 목록
    createItem = (implList: ImplList) : void => {
       this.parentElement.innerHTML = implList.getList();
        // type check 후 type 별로 다른 특성을 가진 리스트를 생성해준다.
    }

    updateItem = () => {

    }

    deleteItem = () => {

    }
}



export default ImplItem;