import { useState } from "react";

function Months() {
  const [months, setMonths] = useState(["March", "Jan", "Feb", "Dec"]);

  return (
    <div>
      { months.map((word) => <div>{word}</div>)}
      { months.length > 0 && 
        <div>
          <p>There are {months.length} months</p>
          <button onClick={() => setMonths([])}>Empty the array</button>
        </div>
      }
      { months.length == 0 && 
          <div>
            <div>There are no months.</div>
            <button onClick={() => setMonths(["March", "Jan", "Feb", "Dec"])}>
              Reset the array
            </button>
          </div>
      }
    </div>
  )
}
export default Months