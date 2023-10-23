import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import Formulario from "./src/Formulario";
import Pais from "./src/Pais";

export default function App() {
  const [busqueda, guardarBusqueda] = useState({ pais: "" });
  const [consultar, guardarConsulta] = useState(false);
  const [resultado, guardarResultado] = useState({});
  useEffect( () => {
    const { pais } = busqueda;
    const consultarPais = async () => {
      if (consultar) {
        const url = `https://servicodados.ibge.gov.br/api/v1/paises/${pais}`

        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();

          guardarResultado(resultado);
          guardarConsulta(false);
        } catch ( error ) {
          mostrarAlerta();
        }
      }
    }

    consultarPais();
 }, [consultar]);

 const mostrarAlerta = () => {
  Alert.alert('Error', 'No hay resultado intenta con otra ciudad o país'), [{ Text: 'Ok'}];
 };

  return (
    <View style={styles.app}>
      <View style={styles.contenido}>
        <Formulario 
        busqueda={busqueda} 
        guardarbusqueda={guardarBusqueda}
        guardarconsulta={guardarConsulta} />
        <Pais busqueda={busqueda} resultado={resultado}/>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'rgb(71,149,212)',
    justifyContent: "center",
  },
  contenido: {
    margin: '2.5%',
  }
});