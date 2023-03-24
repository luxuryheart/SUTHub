import { useEffect, useState } from "react";

function News() {
  const [count, setCount] = useState(0);
  const clickCount = () => {
    setCount(count + 1);
  };
  const data =[{
    title: "",
    count: count
  }]

  useEffect (()=>{
    
  })
  return (
    <div class="m-3 d-flex">
      <span>
        <div class="card " style={{ width: "18rem" }}>
          <img
            src="../images/4.png"
            class="card-img-top"
            alt="1"
            onClick={clickCount}
          />
          <div class="card-body">
            <p class="card-text" onClick={clickCount}>
              {count}
            </p>
          </div>
        </div>
      </span>
      <span>
        <div class="card ml-3" style={{ width: "18rem" }}>
          <img
            src="../images/4.png"
            class="card-img-top"
            alt="1"
            onClick={clickCount}
          />
          <div class="card-body">
            <p class="card-text" onClick={clickCount}>
              {count}
            </p>
          </div>
        </div>
      </span>
    </div>
  );
}
export default News;
