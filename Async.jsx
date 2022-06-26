import React, { useState } from "react";
import axios from "axios";

const Async = () => {
  const [data, setData] = useState();

  const onClick = async () => {
    try {
      const response = await axios.get( //HTTP메소드
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </>
  )
}

export default Async;