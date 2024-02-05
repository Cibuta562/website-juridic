import "./heading.css"
import heading from "../assets/heading.jpg"

function Heading() {
    return(
        <div className="heading-cont">
           <img className="img-heading" src={heading }/>
        </div>
    )
}

export default Heading