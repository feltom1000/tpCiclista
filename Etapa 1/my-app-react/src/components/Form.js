import React from "react";

function Form(props) {
  const [vueltas, setVueltas] = React.useState(null);
  const [cantidadKm, setCantidadKm] = React.useState("");
  const [cantidadVueltas, setCantidadVueltas] = React.useState("");

  function cambiarNumeroDeVuelta(nuevoNumero){
        
  }

  return (
    <form>
      <p>
        <em>Ingresa la extension del circuito</em>
      </p>
      <input
        type="text"
        name="circuitoKM"
        className="form-control1"
        placeholder="Km"
        value={cantidadKm}
        onChange={(e) => {
          setCantidadKm(e.target.value);
        }}
        required
      ></input>
      <p>
        <em>Ingresa PUTO la cantidad de vueltas a ingresar</em>
      </p>
      <input
        type="text"
        className="form-control1"
        name="cantidadVueltas"
        value={cantidadVueltas}
        placeholder="Cantidad"
        onChange={(e) => {
          setCantidadVueltas(e.target.value);
          const newVueltas = []
          for(let i = 0; i < Number(e.target.value); i++){
            newVueltas.push({
                "id": i,
                "duracion": "",
                "numeroDeVuelta" : ""
            })
          }
          setVueltas(newVueltas)
        }}
        required
      ></input>

      {vueltas && vueltas.map((elemento) => {
        console.log("pepe");
        return (
          <React.Fragment>
            <p>
              <em>Ingresa el numero de la vuelta a ingresar</em>
            </p>
            <input
              type="text"
              name="NumeroVuelta"
              className="form-control1"
              placeholder="Numero de la Vuelta"
              value={elemento.numeroDeVuelta}
              onChange = {cambiarNumeroDeVuelta()}

            ></input>

            <p>
              <em>Ingresa la duracion de la vuelta</em>
            </p>
            <input
              type="text"
              name="Duracion"
              className="form-control1"
              placeholder="00:00"
              value=""
            ></input>
          </React.Fragment>
        );
      })}
    </form>
  );
}

export default Form;
