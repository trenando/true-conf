import { GettingS, GettingP } from "./Interfaces"

export default class Rectangle implements GettingS, GettingP {
    public a: number = 0;
    public b: number = 0;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    public getS() {
        return this.a * this.b;
    }

    public getP() {
        return 2 * (this.a + this.b);
    }
}