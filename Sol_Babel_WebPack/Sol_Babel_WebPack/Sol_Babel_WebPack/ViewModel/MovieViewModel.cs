using Sol_Babel_WebPack.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sol_Babel_WebPack.ViewModel
{
    public class MovieViewModel
    {
        public List<MovieModel> ListMovie { get; set; }

        public String ListMovieJson { get; set; }
    }
}
