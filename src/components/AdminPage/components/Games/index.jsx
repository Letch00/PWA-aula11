// import { useEffect, useState } from "react";
// import { Container, Row, Col } from "reactstrap";
// import Table from "../../../Table";
// import { useForm } from "react-hook-form";
// import styles from "./styles.module.scss";
// import _ from "lodash"
// const Games = () => {
//   const { register, handleSubmit } = useForm();
//   const [isError, setError] = useState(false);
//   const [isLoading, setLoading] = useState(false);
//   const [data, setData] = useState({ data: [], pagination: {} });

//   const fetchGames = () => {
//     setLoading(true);

//     fetch("/api/games", {
//       headers: { Accept: "application/json" },
//     })
//       .then((response) => response.json())
//       .then((response) => {
//         /*  ESTAVA ASSIM ANTES DE FAZER OQ PEDE NA AULA 4
//                         setData({
//                   data: response.games || [],
//                   pagination: response.pagination || {},
//                 }); */
//         setData({
//           data: response.data || [],
//           pagination: response.pagination || {},
//         });
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         setError(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchGames();
//   }, []);

//   const addGame = (formData) => {
//     const newData = {
//       date: formData.date,
//       name: formData.name,
//       image: formData.image,
//       team: {
//         visitor: formData.visitor,
//         home: formData.home,
//       },
//     };

//     fetch("/api/games", {
//       headers: { "Content-Type": "application/json" },
//       method: "POST",
//       body: JSON.stringify(newData),
//     })
//       .then((response) => {
//         if (response.ok) {
//           fetchGames();
//           alert("Pedido Efetuado com sucesso");
//         } else {
//           alert("Error ao adicionar");
//         }
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         alert(error);
//       });
//   };

//   if (isLoading) {
//     return <div>Is Loading</div>;
//   }

//   if (isError) {
//     return <div>UPPSSSS</div>;
//   }

//   return (
//     <Container>
//       <Row>
//         <Col className={styles.column}>
//           <h3>Create Game</h3>
//           <div className={styles.container}>
//             <form className={styles.form} onSubmit={handleSubmit(addGame)}>
//               <div className={styles.field}>
//                 <label className={styles.label} htmlFor="name">Name:</label>
//                 <input id="name" name="name" required="required" {...register("name")} />
//               </div>
//               <div className={styles.field}>
//                 <label className={styles.label} htmlFor="date">Date:</label>
//                 <input id="date" name="date" required="required" {...register("date")} />
//               </div>
//               <div className={styles.field}>
//                 <label className={styles.label} htmlFor="image">Image:</label>
//                 <input id="image" name="image" required="required" {...register("image")} />
//               </div>
//               <div className={styles.field}>
//                 <label className={styles.label} htmlFor="visitor">Visitor:</label>
//                 <input id="visitor" name="visitor" required="required" {...register("visitor")} />
//               </div>
//               <div className={styles.field}>
//                 <label className={styles.label} htmlFor="home">Home:</label>
//                 <input id="home" name="home" required="required" {...register("home")} />
//               </div>
//               <Row>
//                 <input className="submit" type="submit" />
//               </Row>
//             </form>
//           </div>
//         </Col>
//         <Col>
//           <Table columns={["name", "date", "team.home", "team.visitor"]} rows={data} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Games;


// NOVO DO 4

/* import { Container, Row, Col } from "reactstrap";
import Table from "../../../Table";
import { useForm } from "react-hook-form";
import styles from "./styles.module.scss"
import { useGetData } from "../../hooks/useGetData"
import { getGames } from "../../../../services/api/games"

const Games = () => {
  const { register, handleSubmit } = useForm();
  const { isError, isLoading, data } = useGetData(getGames, 0, 0);

  const addGame = (formData) => {
    fetch("/api/games", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Pedido efetuado com sucesso");
        } else {
          alert("Error ao adicionar");
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }

  if (isLoading) {
    return <div>Is isLoading</div>;
  }
  if (isError) {
    return <div>UPSSS</div>;
  }

   return (
     <Container>
       <Row>
         <Col className={styles.column}>
           <h3>Create Game</h3>
           <div className={styles.container}>
             <form className={styles.form} onSubmit={handleSubmit(addGame)}>
               <div className={styles.field}>
                 <label className={styles.label} htmlFor="name">Name:</label>
                 <input id="name" name="name" required="required" {...register("name")} />
               </div>
               <div className={styles.field}>
                 <label className={styles.label} htmlFor="date">Date:</label>
                 <input id="date" name="date" required="required" {...register("date")} />
               </div>
               <div className={styles.field}>
                 <label className={styles.label} htmlFor="image">Image:</label>
                 <input id="image" name="image" required="required" {...register("image")} />
               </div>
               <div className={styles.field}>
                 <label className={styles.label} htmlFor="visitor">Visitor:</label>
                 <input id="visitor" name="visitor" required="required" {...register("visitor")} />
               </div>
               <div className={styles.field}>
                 <label className={styles.label} htmlFor="home">Home:</label>
                 <input id="home" name="home" required="required" {...register("home")} />
               </div>
               <Row>
                 <input className="submit" type="submit" />
               </Row>
             </form>
           </div>
         </Col>
         <Col>
           <Table columns={["name", "date", "team.home", "team.visitor"]} rows={data} />
         </Col>
       </Row>
     </Container>
   );
 };

export default Games;
 */


//MAIS NOVO AINDA- O QUE ESTÁ EM CIMA FOI ANTES DE COPIAR EXATAMENTE COMO TA NOS SLIDES

import { Container, Row, Col } from "reactstrap";
import Table from "../../../Table";
import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import { useGetData } from "../../hooks/useGetData";
import { usePostData } from "../../hooks/usePostData";
import { getGames, createGame } from "../../../../services/api/games";
import { useContext, useEffect } from "react";
import { TabContext } from "../../contexts";

const Games = () => {
  const { register, handleSubmit } = useForm();
  const { isError, isLoading, data } = useGetData(getGames, 0, 0);
  const { isLoading: isLoadingPost, addData } = usePostData(createGame);
  const { setGamesCount } = useContext(TabContext);

  useEffect(() => {
    setGamesCount(data.data.length);
  }, [data, setGamesCount]);

  // ... o resto fica igual

  if (isLoading) {
    return <div>Is Loading</div>;
  }

  if (isError) {
    return <div>UPPSSSS</div>;
  }

  return (
    <Container>
      <Row>
        <Col className={styles.column}>
          <h3>Create Game</h3>
          {isLoadingPost ? (
            <div>Is Loading</div>
          ) : (
            <div className={styles.container}>
              <form className={styles.form} onSubmit={handleSubmit(addData)}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">Name:</label>
                  <input id="name" required="required" {...register("name")} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="date">Date:</label>
                  <input data-testid="date" placeholder="date" id="date" required="required" {...register("date")} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="image">Image:</label>
                  <input id="image" required="required" {...register("image")} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="visitor">Visitor:</label>
                  <input id="visitor" required="required" {...register("team.visitor")} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="home">Home:</label>
                  <input id="home" required="required" {...register("team.home")} />
                </div>
                <Row>
                  <input data-testid="submitButton" className="submit" type="submit" />
                </Row>
              </form>
            </div>
          )}
        </Col>
        <Col>
          <Table columns={["date", "name", "image", "team.visitor", "team.home"]} rows={data} />
        </Col>
      </Row>
    </Container>
  );
};

export default Games;