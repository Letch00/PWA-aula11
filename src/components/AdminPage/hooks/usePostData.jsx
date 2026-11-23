/* ANTES DO EX8b DA FICHA 6
import { useState } from "react";
import { createGame } from "../../../services/api/games";
import { createUser } from "../../../services/api/users";

const services = { games: createGame, users: createUser };

export const usePostData = (name) => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [ date, setData] = useState({});
  
  const addData = (formData) => {
    setLoading(true);

   return services[name](formData)
      .then((response) => {
        if (response.ok) {
          alert("Pedido Efetuado com sucesso");
        } else {
          alert("Error ao adicionar");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { isLoading, isError, addData };
}; */

import { useState } from "react";
import { createGame } from "../../../services/api/games";
import { createUser } from "../../../services/api/users";

export const usePostData = (service) => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const addData = (payload) => {
    setLoading(true)
    service(payload)
      .then((response) => {
        if(response.ok){
          setData(response.json());
          alert("Pedido efetuado com sucesso");
        } else {
          alert("Error ao adicionar")
        }
      })
      .catch((error)=>{
        console.error("Error: ", error);
        setError(error)
        alert(error);
      })
      .finally(()=>{
        setLoading(false);
      });
  };

  return{
    data,
    isError,
    isLoading,
    addData: addData
  }
}