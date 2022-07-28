import { GettingD, GettingP, GettingS } from "./Interfaces";

export default class Circle implements GettingS, GettingP, GettingD {
    public radius: number = 0;
    constructor(radius: number) {
        this.radius = radius;
    }

    public getS() {
        return Math.PI * this.radius * this.radius;
    }

    public getP() {
        return 2 * Math.PI * this.radius;
    }

    public getD() {
        return this.radius * 2
    }
}