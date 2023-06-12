import { useState, useEffect } from "react";
import axios from "axios";
import "./FetchData.css";

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://fakestoreapi.com/products");
      setData(result.data.slice(0, 10));
      console.log(result.data);
    };
    fetchData();
  }, []);

  return (
    <ul
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        boxSizing: "border-box",
      }}
    >
      {data.map((item) => (
        <li
          key={item.id}
          style={{
            position: "relative",
            backgroundSize: "cover",
            backgroundImage: `url(${item.image})`,
            width: "300px",
            height: "300px",
            backgroundPosition: "50% 50%",
            borderRadius: "2rem",
            padding: "10px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              position: "absolute",
              inset: "0px",
              textAlign: "left",
              borderRadius: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "0px 10px 30px 10px",
            }}
            className="overlay-transition"
          >
            <a
              style={{
                width: "100%",
                color: "white",
              }}
            >
              {item.title}
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FetchData;
