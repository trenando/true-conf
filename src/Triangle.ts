import { GettingP, GettingS } from "./Interfaces";

export default class Triangle implements GettingS, GettingP {
    public a: number = 0;
    public b: number = 0;
    public c: number = 0;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public getS() {
        const halfPerimetr = (this.a + this.b + this.c) / 2;
        return Math.sqrt(halfPerimetr * (halfPerimetr - this.a) * (halfPerimetr - this.b) * (halfPerimetr - this.c))
    }

    public getP() {
        return this.a + this.b + this.c;
    }

}