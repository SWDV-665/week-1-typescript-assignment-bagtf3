class Grocery {
    name: string;
    quantity: number;

    constructor(name:string, quantity: number) {
        this.name = name;
        this.quantity = quantity;
    }

    render(container: HTMLUListElement) {
     const li = document.createElement("li");

     const p = document.createElement("p");
     p.innerText = `${this.name} : ${this.quantity}`;
     
     li.append(p)
     container.append(li)

    }
}

function showGroceries() {
    const ul = document.querySelector('ul');
    ul.innerText = "";

    let milk = new Grocery('Milk', 1)
    let bread = new Grocery('Bread', 2)
    let eggs = new Grocery('Eggs', 12)

    let groceryArray = [milk, bread, eggs]

    for (let entry of groceryArray) {
        entry.render(ul)
    }
}
