import { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Table from "../../../Table";
import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import { UsersContext } from "../../../../contexts/UsersProvider";
import { usePostData } from "../../hooks/usePostData";
import { useGetData } from "../../hooks/useGetData";
import { getUsers, createUser } from "../../../../services/api/users";
import { TabContext } from "../../contexts";

const Users = () => {
  const { register, handleSubmit } = useForm();
  const { setUsers } = useContext(UsersContext)
  const { isError, isLoading, data, load } = useGetData(getUsers, 0, 0)
  const { isLoading: isLoadingPost, addData } = usePostData(createUser)
  const { setClicksCount, countClicks } = useContext(TabContext);

  useEffect(() => {
    setUsers(data.data);
  }, [data, setUsers]);

/*   const fetchUsers = () => {
    setLoading(true);

    fetch("/api/users", {
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json())
      .then((response) => {
        setData({
          data: response.data || [],
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
  }; */


  const addUser = (formData) => {
    const newData = {
      ...formData,
      role: { name: "user", scope: "notMember" },
    };

    fetch("/api/users", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newData),
    })
      .then((response) => {
        if (response.ok) {
          load();
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

  const handleClick = () => {
    setClicksCount(countClicks + 1);
  };

  return (
    <Container>
      <Row>
        <Col className={styles.column}>
          <h3>Create User</h3>
          <button onClick={handleClick}>Nº Clickes: {countClicks}</button>
          <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit(addUser)}>
              <div className={styles.field}>
                <label className={styles.label} for="name">
                  Name:
                </label>
                <input
                  id="name"
                  type="name"
                  name="name"
                  required="required"
                  {...register("name")}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} for="password">
                  Password:
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  required="required"
                  {...register("password")}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} for="email">
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required="required"
                  {...register("email")}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} for="age">
                  Age :
                </label>
                <input id="age" name="age" type="number" {...register("age")} />
              </div>
              <div className={styles.field}>
                <label className={styles.label} for="address">
                  Address :
                </label>
                <input
                  id="address"
                  name="address"
                  required="required"
                  {...register("address")}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} for="country">
                  Country :
                </label>
                <input
                  id="country"
                  name="country"
                  required="required"
                  {...register("country")}
                />
              </div>
              <Row>
                <input className="submit" type="submit" />
              </Row>
            </form>
          </div>
        </Col>
        <Col>
          <Table columns={["name", "email", "age", "country"]} rows={data} />
        </Col>
      </Row>
    </Container>


  );
};

export default Users;
