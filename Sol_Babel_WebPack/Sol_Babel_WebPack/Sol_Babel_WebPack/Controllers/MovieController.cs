using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Sol_Babel_WebPack.Models;
using Sol_Babel_WebPack.Repository;
using Sol_Babel_WebPack.ViewModel;

namespace Sol_Babel_WebPack.Controllers
{
    public class MovieController : Controller
    {
        #region Declaration
        private MovieRepository movieRepository = null;
        #endregion

        #region Constructor
        public MovieController(MovieRepository movieRepository)
        {
            this.movieRepository = movieRepository;
            MovieVM = new MovieViewModel();
        }

        #endregion

        #region Property
        [BindProperty]
        public MovieViewModel MovieVM { get; set; }
        #endregion 

        #region Actions
        public async  Task<IActionResult> Index()
        {
            MovieVM.ListMovie =
                    await
                        movieRepository.GetListOfMoviesAsync()
                        as List<MovieModel>;

            MovieVM.ListMovieJson = JsonConvert.SerializeObject(MovieVM.ListMovie);


            return View(MovieVM);
        }
        #endregion
    }
}