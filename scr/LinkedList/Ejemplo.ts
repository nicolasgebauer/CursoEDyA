
class Node {
    value: number;
    next: Node | null;
    
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }

}

class LinkedList {
    head: Node | null;

    constructor() {
        this.head = null;
    }

    append(value: number): void {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    delete(value: number): void {
        if (this.head === null) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }  
    }

    print(): void {
        let current = this.head;
        const values: number[] = [];
        while (current !== null) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(", "));
    }
}

// Ejemplo de uso
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
console.log("Lista después de agregar elementos:");
list.print(); // Output: 10 , 20 , 30
list.delete(20);
console.log("Lista después de eliminar el elemento 20:");
list.print(); // Output: 10 , 30
list.delete(10);
console.log("Lista después de eliminar el elemento 10:");
list.print(); // Output: 30
list.delete(30);
console.log("Lista después de eliminar el elemento 30:");
list.print(); // Output: (lista vacía)