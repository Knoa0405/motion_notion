// 각 리스트별로 다른 기능들이 있다.
// 공통된 기능들은 하나의 클래스로 두고
// 각각의 기능들을 클래스 선언 호출시에 DI 구조로 넣어주면 되지 않을까?
// 각각의 기능들에 대한 클래스 작성이 필요하다.
// 이미지 클래스, 영상 클래스, 테스크 클래스

interface ImageList {
    url : string;
    setUrl(url : string) : void;
}
class ImplImageList implements ImageList {
    url : string = '';

    setUrl(url : string) {
        this.url = url;
    }
}

export default ImplImageList;