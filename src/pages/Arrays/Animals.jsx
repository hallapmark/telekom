import { useState } from "react"

function Animals() {
  const [animals, setAnimals] = useState(["pigs", "goats", "sheep"]);

  return (
    <div>
      { animals.map((word) => <div>{word}</div>)}
      { animals.length > 0 && 
        <div>
          <p>There are {animals.length} animals</p>
          <button onClick={() => setAnimals([])}>Empty the array</button>
        </div>
      }
      { animals.length == 0 && 
          <div>
            <div>There are no animals.</div>
            <button onClick={() => setAnimals(["spray", "elite", "exuberant", "destruction", "present"])}>
              Reset the array
            </button>
          </div>
      }
    </div>
  )
}
export default Animals