import { capitalizeFirstLetter, normalizeString, } from '../Utils/js-functions.js';
export class Tag {
    constructor(label, type) {
        this._label = capitalizeFirstLetter(label);
        this._type = type;
    }
    get label() {
        return this._label;
    }
    get type() {
        return this._type;
    }
    get id() {
        return normalizeString(this._label);
    }
}
