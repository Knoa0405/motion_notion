import { Type } from 'Item';
import typeJson from './types.json';

type Types = {
    [type: string] : number;
}

function classificationCategoryTypes (categoryNumber : string) : Type {
    const types: Types = typeJson;

    return types[categoryNumber] as Type;
}

export default classificationCategoryTypes;