import * as $ from "jquery";

let movieCardTemplate = Symbol("movieCardTemplate");

export class movie {
    // private Method
    [movieCardTemplate](movieData) {
        return `
               <div class="col-lg-4 col-xl-4 col-md-4 col-sm-4">
                    <div class="card m-3">
                        <img class="card-img-top" src="${movieData.Url}" alt="Card image cap">
                         <div style="background-color:black; height:40px">
                            <center>
                                <h5 class="card-title" style="color:white;line-height:40px">${movieData.Title}</h5>
                            </center>

                        </div>

                        <div class="card-body">
                            <p class="card-text">
                                ${movieData.Details}
                            </p>

                        </div>
                    </div>
                </div>
            `;
    }

    // public Method
    onRender() {
        //get Movie List Json
        let _movieListJson = JSON.stringify($("#movieList").data("movielist"));
        console.log(_movieListJson);

        // remove Hidden Input  Data.
        $("#movieList").attr("data-movielist", "");

        // parse Json
        let _movieList = JSON.parse(_movieListJson);
        console.log(_movieList);

        // make Card Template

        for (var _movieData of _movieList) {
            $("#divMovieRow")
                .append(this[movieCardTemplate](_movieData));
        }
    }
}