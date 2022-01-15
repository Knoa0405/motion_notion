import typeJson from './types.json';

type Types = {
    [type: string] : number;
}

function classificationCategoryTypes (categoryNumber : string) : number {
    const types: Types = typeJson;

    return types[categoryNumber];
}

export default classificationCategoryTypes;