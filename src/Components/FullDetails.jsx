import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AsiosService from "../utils/ApiService";

const FullDetails = () => {
  let param = useParams();
  let id = param.id;
  let [name, setName] = useState("");
  let [Dob, setDob] = useState("");
  let [biography, setBiography] = useState("");
  let [tiltle, setTiltle] = useState("");
  let [published, setPublished] = useState("");
  let [isbn, setIsbn] = useState("");

  const getData = async () => {
    try {
      let res = await AsiosService(`/book/${id}`);
      console.log(res.data);
      if (res.status === 200) {
        setName(res.data.author);
        setDob(res.data.authorInfo.birthDate);
        setBiography(res.data.authorInfo.biography);
        setTiltle(res.data.title);
        setPublished(res.data.publicationDate);
        setIsbn(res.data.ISBN);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="text-content">
          <p style={{ textDecoration: "underline", textAlign: "center" }}>
            <b>Author Details : </b>
          </p>
          <div className="textContent-right">
            <p>
              <b className="bold-Text">Author Name : </b>
              {name}
            </p>
            <p>
              <b className="bold-Text">Date of birth : </b>
              {Dob}{" "}
            </p>
            <p>
              <b className="bold-Text">Biography : </b>
              {biography}{" "}
            </p>
            <p>
              <b className="bold-Text">Book Title : </b>
              {tiltle}{" "}
            </p>
            <p>
              <b className="bold-Text">Publication Date : </b>
              {published}{" "}
            </p>
            <p>
              <b className="bold-Text">ISBN : </b>
              {isbn}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullDetails;
