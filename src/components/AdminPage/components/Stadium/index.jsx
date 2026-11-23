// ta a dar erro sendo que so troquei as variaveis do game pra stadiums
import { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Table from "../../../Table";
import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";

const Stadiums = () => {
  const { register, handleSubmit } = useForm();
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({ data: [], pagination: {} });

  const fetchStadiums = () => {
    setLoading(true);

    fetch("/api/stadiums", {
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json())
      .then((response) => {
        setData({
          data: response.stadiums || [],
          pagination: response.pagination || {},
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchStadiums();
  }, []);

  const addStadium = (formData) => {
    const newData = {
      name: formData.name,
      image: formData.image
    };

    fetch("/api/stadia", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newData),
    })
      .then((response) => {
        if (response.ok) {
          fetchStadiums();
          alert("Pedido Efetuado com sucesso");
        } else {
          alert("Error ao adicionar");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(error);
      });
  };

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
          <h3>Create Stadium</h3>
          <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit(addStadium)}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">Name:</label>
                <input id="name" name="name" required="required" {...register("name")} />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="image">Image:</label>
                <input id="image" name="image" required="required" {...register("image")} />
              </div>
              <Row>
                <input className="submit" type="submit" />
              </Row>
            </form>
          </div>
        </Col>
        <Col>
          <Table columns={["name","image"]} rows={data} />
        </Col>
      </Row>
    </Container>
  );
};

export default Stadiums;