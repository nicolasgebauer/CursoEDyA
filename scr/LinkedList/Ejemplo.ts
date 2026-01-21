
export class Node {
    value: number;
    next: Node | null;
    
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }

}

export class LinkedList {
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
