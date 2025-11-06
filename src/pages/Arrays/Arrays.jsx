import { Link } from "react-router-dom"

function Arrays() {
  return (
    <div>
      <Link to="/animals"><button>Animals</button></Link>
      <Link to="/months"><button>Months</button></Link>
      <Link to="/words"><button>Words</button></Link>
    </div>
  )
}
export default Arrays