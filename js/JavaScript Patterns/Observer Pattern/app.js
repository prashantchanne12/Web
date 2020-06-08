class EvenetObeservers {
    constructor() {
        this.observers = [];
    }

    subscribe(f) {
        this.observers.push(f);
        console.log(`You are subscribed to ${f.name}`);
    }

    unsubscribe(f) {
        this.observers = this.observers.filter(function (item) {
            if (item.name != f.name) {
                return item;
            }
        });
        console.log(`You are Unsubscribed to ${f.name}`);

    }

    fire() {
        this.observers.forEach(elements => {
            console.log(elements);
        });
    }
}

const click = new EvenetObeservers();

// event listerners

document.querySelector('.sub-ms').addEventListener('click', function () {
    click.subscribe(data1);
});
document.querySelector('.unsub-ms').addEventListener('click', function () {
    click.unsubscribe(data1);
});

document.querySelector('.fire').addEventListener('click', function () {
    click.fire();
});

data1 = {
    name: 'Hotstar',
    cost: 379
}
data2 = {
    name: 'NetFlix',
    cost: 799
}