import { useEffect, useState } from "react";

const CommentArea = () => {
  const [comments, setComments] = useState([]);
  console.log(comments);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmYzVhYzczMjBjNjAwMThiOGYwMWUiLCJpYXQiOjE3MDgyNjI5ODcsImV4cCI6MTcwOTQ3MjU4N30.JWmY6aKAGXjMK6AU1PEkDn0M1ZPUa7JRTtZhIjakg2o";
  const option = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const getComments = async () => {
    try {
      const resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/books/comments/`
      );
      const data = resp.json();
      setComments(data);
      console.log(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const addComment =async () =>{
try{
const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/",
{
    ...option,
    method: "POST",
    
}

)
}catch(e){
    console.log(e)
}
  }

  useEffect(() => {
    getComments();
  }, []);
  return <></>;
};

export default CommentArea;