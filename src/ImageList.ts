import ImplList from "List";

interface ImageList {
    url : string;
    setUrl(url : string) : void;
}

class ImplImageList  extends ImplList implements ImageList {
    url : string = '';

    constructor(type: number) {
        super(type);
    }

    setUrl(url : string) {
        this.url = url;
    }
}

export default ImplImageList;