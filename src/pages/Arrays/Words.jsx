import { useState } from "react";

function Words() {
  const [words, setWords] = useState(["spray", "elite", "exuberant", "destruction", "present"]);
  
  return (
    <div>
      {words.map((word) => <div>{word}</div>)}
      { words.length > 0 && 
        <div>
          <p>There are {words.length} words</p>
          <button onClick={() => setWords([])}>Empty the array</button>
        </div>
      }
      { words.length == 0 && 
          <div>
            <div>There are no words.</div>
            <button onClick={() => setWords(["spray", "elite", "exuberant", "destruction", "present"])}>
              Reset the array
            </button>
          </div>
      }
    </div>
  )
}
export default Words