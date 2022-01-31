export type Type = 0 | 1 | 2 | 3

// 이미지 사진 추가 버튼 + 텍스트
// 비디오 추가 버튼 + 텍스트
// ...
// ...
function getListFromType (type : Type) : string {
    if(type === 0) {
        return `<img>HELLO</img>`;
    }
    if(type === 1) {
        return `<video>HELLO</video>`;
    }
    if(type === 2) {
        return `<span>HELLO</span>`;
    }
    if(type === 3) {
        return `<div>HELLO</div>`;
    }
    return '';
}

export default getListFromType;