export class Tag {
    constructor(label, type) {
        this._label = label;
        this._type = type;
    }
    get label() {
        return this._label;
    }
    get type() {
        return this._type;
    }
    get id() {
        return this._normalizeLabel(this._label);
    }
    _normalizeLabel(label) {
        label = label.toLocaleLowerCase();
        label = label.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        label = label.replace(/ /g, '');
        return label;
    }
}
