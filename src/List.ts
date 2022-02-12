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

class ImplList implements List {
    type: number;
    
    constructor(type: number) {
        this.type = type;
    }

    getList() {
        if(this.type === 0) {
            return `<img>HELLO</img>`;
        }
        if(this.type === 1) {
            return `<video>HELLO</video>`;
        }
        if(this.type === 2) {
            return `<span>HELLO</span>`;
        }
        if(this.type === 3) {
            return `<div>HELLO</div>`;
        }
        return '';
    }
}

export default ImplList;