import './projects.css'
import "../../Global/global.css"
import "../../Global/title.css"


export default function Project() {

    return (
        <div id="projects">

            <h1 className="title"> Past Projects </h1>

            <div id="cards">
                <div className="project">
                    Personal Website
                </div>

                <div className="project">
                    The Cafe
                </div>

                <div className="project">
                    Sudoku Solver
                </div>

                <div className="project">
                    SportsCred
                </div>

                <div className="project">
                    Notes Website
                </div>
            </div>
        </div>
    )
}