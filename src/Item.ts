export type Type = 0 | 1 | 2 | 3

// 아이템은 아이템 이외의 기능이 주입되어 사용된다.

// 아이템의 공통 기능 - 텍스트 입력창

// 이미지 아이템 - 이미지 파일 업로드 하면, 이미지가 올라감.

// 비디오 로드시 해당 비디오의 URL 을 첨부하면 해당 영상이 자동으로 실행된다. ( 등록이 완료 되면 )
// 기능 구현 사항이 공통 기능에 포함됨
// 등록시 타이틀과 할일 목록을 입력하면 등록이 된다.
export interface Item {
    type: number;
    getItem(): string;
}
class ImplItem implements Item {
    type: Type;
    
    constructor(type: Type) {
        this.type = type;
    }

    getItem() {
        if(this.type === 0) {
            return '<h1>이미지</h1>';
        }
        if(this.type === 1) {
            return '<h1>비디오</h1>';
        }
        if(this.type === 2) {
            return '<h1>노트</h1>';
        }
        if(this.type === 3) {
            return '<h1>테스크</h1>';
        }
        return '';
    }
}

export default ImplItem;
