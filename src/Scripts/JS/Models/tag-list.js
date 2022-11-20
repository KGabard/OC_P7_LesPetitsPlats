export class TagList {
    constructor() {
        this._list = [];
    }
    get list() {
        return this._list;
    }
    addTag(newTag) {
        let tagAlreadyExist = false;
        this._list.forEach((tag) => {
            if (tag.id === newTag.id)
                tagAlreadyExist = true;
        });
        if (!tagAlreadyExist)
            this._list.push(newTag);
    }
    removeTag(targetId) {
        this._list = this._list.filter((tag) => tag.id !== targetId);
    }
    sortByTagLabel() {
        const tagLabelsComparator = (a, b) => a.label.localeCompare(b.label);
        this._list.sort(tagLabelsComparator);
    }
}
