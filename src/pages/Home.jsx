// import { useEffect } from "react";
// import {Link} from 'react-router-dom'

// function Home() {
    // пропсы, стейты
    // useEffect(() => {
    //     http запрос
    // }, []);

//     return ( "home"
    // <div>
    //     {["movie1", "movie2", "movie3", "movie4"].map(movie => {
    //         return <Link key={movie} to={`${movie}`}>
    //                     {movie}
    //                 </Link>
    //         })
    //         }
    // </div>
//     )
// };

// export default Home;

import { Link } from 'react-router-dom';

function Home() {
    return (

    <div>
        {["movie5", "movie6", "movie7", "movie8"].map(movie => {
            return <Link key={movie} to={`${movie}`}>
                        {movie}
                    </Link>
            })
            }
    </div>
    )
};

export default Home;