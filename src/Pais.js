import React, {useEffect, useState} from "react";
import { Text, View, StyleSheet ,Image} from "react-native";
import { Card } from "react-native-elements";

const Pais = ({ resultado,busqueda }) => {
    console.log(busqueda);
    const [info, setInfo] = useState([]);
    const [nombre, setNombre] = useState();
    const [capital, setCapital] = useState();
    const [region, setRegion] = useState();
    const [area, setArea] = useState();
    const [lengua, setLengua] = useState([]);

    useEffect(() => {
        setInfo(resultado);
        lengua.length = 0;
        Object.values(resultado).map((e) => {
            setNombre(e.nome.abreviado);
            setCapital(e.governo.capital.nome);
            setRegion(e.localizacao.regiao.nome);
            setArea(e.area.total);
            Object.values(e.linguas).map((l) => {
                lengua.push(l.nome);
            });
        });
    });
    const imgRoute = (busqueda.pais == '' ? require('./img/null.png'): require(`./img/${busqueda.pais}.png`)) ;
    
    return (
        <Card>
            <Card.Title>{ nombre }</Card.Title>
            <Card.Divider/>
            <Card.Image
                style={{ padding: 0 ,height:200 }}
                source={imgRoute} 
            /> 
            
            <View style={{ justifyContent: "center" }}>
                <Text>Capital: { capital }</Text>
                <Text>Región: { region } </Text>
                <Text>Lengua: { lengua.toString() }</Text>
                <Text>Area km2: { area }</Text>
            </View>
        </Card>
    );
};

export default Pais;