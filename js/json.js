const shop = {
    owner: 'Mashuk Tamim',
    address: {
        homeNo: 101,
        street: 'Mawlana Shamshul Haque Road',
        town: 'Gopalganj'
    },
    products: ['laptop', 'monitor', 'keyboard'],
    isOpen: true
}

const shopJSON = JSON.stringify(shop); //obj to JSON string
console.log(shopJSON);

const shopObj = JSON.parse(shopJSON); //JSON string to obj
console.log(shopObj);

const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log(stuInfo); 