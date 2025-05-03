abstract class BaseClass {
    constructor(protected name: string) {
        this.name = name;
        this.print();
    }

    abstract print (): void;

    redo (): void {
        this.print();
    }
}

class SubClass extends BaseClass {
    print (): void {
        console.log(this.name);
    }
}

const myInstance = new SubClass("Eish");
myInstance.redo();
