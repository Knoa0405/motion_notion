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
            return `<img>이미지</img>`;
        }
        if(this.type === 1) {
            return `<video>비디오</video>`;
        }
        if(this.type === 2) {
            return `<span>테스크</span>`;
        }
        if(this.type === 3) {
            return `<div>할일</div>`;
        }
        return '';
    }
}

export default ImplList;
