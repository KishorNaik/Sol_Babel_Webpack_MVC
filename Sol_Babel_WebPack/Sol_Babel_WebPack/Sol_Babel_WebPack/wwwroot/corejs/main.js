import { movie } from "./movie";

export class main {


    onLoad() {

        let movieObj = new movie();
        movieObj.onRender();

    }

}

export function OnMainLoad() {

    let mainObj = new main();
    mainObj.onLoad();

}



