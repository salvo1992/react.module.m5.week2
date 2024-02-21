import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const getBookComment = async () => {
  const [bookComments, setBookComents] = useState([]);
  console.log(bookComments);
  try {
    const resp = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments"
    );
    const data = resp.json();
    setBookComents(data);
  } catch (e) {
    console.error(e);
  }
};

useEffect(() => {
  getBookComment();
}, []);

class AddComment extends React.Component {
  state = {
    formData: {
      nome: "",
      email: "",
    },
  };

  componentDidMount() {
    // Esegui una richiesta GET per recuperare i dati da visualizzare nel form
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch("https://example.com/api/dati");
      if (!response.ok) {
        throw new Error("Errore durante la richiesta.");
      }
      const data = await response.json();
      // Aggiorna lo stato con i dati ottenuti dalla richiesta GET
      this.setState({ formData: data });
    } catch (error) {
      console.error(
        "Si è verificato un errore durante il recupero dei dati:",
        error
      );
      // Gestisci gli errori qui, ad esempio mostrando un messaggio all'utente
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault(); // Evita il comportamento predefinito del form (ad esempio, il ricaricamento della pagina)

    // Recupera i valori dai campi del form
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmYzVhYzczMjBjNjAwMThiOGYwMWUiLCJpYXQiOjE3MDgyNjI5ODcsImV4cCI6MTcwOTQ3MjU4N30.JWmY6aKAGXjMK6AU1PEkDn0M1ZPUa7JRTtZhIjakg2o";

    try {
      // Esegui la richiesta fetch utilizzando async/await
      const response = await fetch("https://example.com/api/endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Errore durante la richiesta.");
      }

      const responseData = await response.json();
      console.log("Risposta dalla fetch:", responseData);
      // Puoi fare qualcosa con la risposta qui, ad esempio aggiornare lo stato del componente

      // Ora aggiorna i dati nel form chiamando fetchData() nuovamente
      this.fetchData();
    } catch (error) {
      console.error("Si è verificato un errore durante la fetch:", error);
      // Gestisci gli errori qui, ad esempio mostrando un messaggio all'utente
    }
  };

  render() {
    const { formData } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nome:
          <input type="text" name="nome" value={formData.nome} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} />
        </label>
        <button type="submit">Invia</button>
      </form>
    );
  }
}

// const getBookComment = async () => {
//   const [bookComments, setBookComents] = useState([]);
//   console.log(bookComments);
//   try {
//     const resp = await fetch(
//       "https://striveschool-api.herokuapp.com/api/comments"
//     );
//     const data = resp.json();
//     setBookComents(data);
//   } catch (e) {
//     console.error(e);
//   }
// };

// useEffect(() => {
//   getBookComment();
// }, []);
// const AddComment = () => {
//   const [comments, setComments] = useState([]);
//   console.log(comments);
//   const token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmYzVhYzczMjBjNjAwMThiOGYwMWUiLCJpYXQiOjE3MDgyNjI5ODcsImV4cCI6MTcwOTQ3MjU4N30.JWmY6aKAGXjMK6AU1PEkDn0M1ZPUa7JRTtZhIjakg2o";

//   const postPubblic = async () => {
//     try {
//       const resp = await fetch(
//         "https://striveschool-api.herokuapp.com/api/comments",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({}),
//         }
//       );

//       if (resp.ok) {
//         // Se la richiesta è andata a buon fine, puoi gestire la risposta qui
//         const data = await resp.json();
//         console.log("Commento aggiunto con successo:", data);
//         // Aggiorna lo stato dei commenti se necessario
//         setComments(data);
//       } else {
//         // Altrimenti, gestisci l'errore
//         throw new Error("Errore durante l'aggiunta del commento");
//       }
//     } catch (e) {
//       console.log("Si è verificato un errore:", e.message);
//     }
//   };

//   useEffect(() => {
//     postPubblic();
//   }, []);

export default AddComment;