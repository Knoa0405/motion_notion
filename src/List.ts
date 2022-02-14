export type Type = 0 | 1 | 2 | 3

// 이미지 사진 추가 버튼 + 텍스트
// 비디오 추가 버튼 + 텍스트
// ...
// ...

// DI 

export interface List {
    type: number;
    getList() : string;
}

interface TypeList<T> {
    getList(type: T) : HTMLElement;
}

class ImplList implements List {
    type: Type;
    
    constructor(type: Type, readonly list: TypeList<Type>) {
        this.type = type;
    }

    getList() {
        return this.list.getList(this.type);
    }
}

export default ImplList;
