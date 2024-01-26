import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Main.css";
import "./responsive.css";
import Masonry from "react-masonry-css";

function Main() {
  let [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://plash-frontendatvinod.onrender.com/api/v1");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data in main photo phile:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="__main">
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((item) => (
          <React.Fragment key={item._id}>
            {item.fileUrl && (
              <img
                src={`https://plash-frontendatvinod.onrender.com/${item.fileUrl}`}
                alt="Uploaded"
                onError={(e) => {
                  console.error("Error loading image:", e.target.src);
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Masonry>
    </div>
  );
}

export default Main;
