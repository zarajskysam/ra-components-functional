export class Item {
    constructor(entity) {
        Object.assign(this, {
            brand: 'brand',
            title: 'title',
            description: '',
            descriptionFull: '',
            price: 0,
            currency: '',
        }, entity);
    }
}