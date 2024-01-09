import { szenvedoMondatok } from "./angol";
class Model {
    #cim;
    #sugo;
    #hossz;
    constructor() {
        this.#cim = szenvedoMondatok[0];
        this.#sugo = szenvedoMondatok[1];
        this.#hossz = szenvedoMondatok.length - 2;
    }
    kovElem() {

    }
    aktMondat(index) {
        const aktmondat = szenvedoMondatok[index].mondat;
        const ujmondat = aktmondat.split(" ");
        for (let index = 0; index < ujmondat.length; index++) {
            if (ujmondat[index]==="_") {
                ujmondat[index]=szenvedoMondatok[index].valasztas;
            }
        }
        return ujmondat;
    }
    getcim() {
        return this.#cim;
    }
    getsugo() {
        return this.#sugo;
    }
    gethossz() {
        return this.#hossz;
    }
}
export default Model;