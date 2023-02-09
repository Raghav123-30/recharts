import { useState, useEffect } from "react";

const ApiInteraction = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const getData  = () => {
      fetch("/api/trays", {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data.data);
          console.log(data.message);
        });
    };
    getData();
  }, []);
  return <div></div>;
};

export default ApiInteraction;
