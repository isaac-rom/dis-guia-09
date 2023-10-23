import React, {useState} from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Formulario = ({ busqueda, guardarbusqueda, guardarconsulta }) => {
    const { pais } = busqueda;
    const [selectedCountry, setSelectedCountry] = useState();

    const consultarPais = () => {
        if( pais.trim() === '') {
            mostrarAlerta();
            return;
        }

        guardarconsulta(true);
    }

    const mostrarAlerta = () => {
        Alert.alert('Error', 'Debe seleccionar un país'), [{Text: 'Entendido'}]
    }
    return (
        <>
            <View>
                <View>
                    <Text style={styles.input}>País</Text>
                </View>
                <View>
                    <Picker
                        style={styles.itempais}
                        selectedValue={pais}
                        onValueChange={pais =>
                            guardarbusqueda({...busqueda, pais})
                        }    
                    >
                        <Picker.Item label="-- Seleccione un país --" value="" />
                        <Picker.Item label="Canada" value="ca" />
                        <Picker.Item label="El Salvador" value="sv" />
                        <Picker.Item label="Guatemala" value="gt" />
                        <Picker.Item label="Honduras" value="hn" />
                        <Picker.Item label="Nicaragua" value="ni" />
                        <Picker.Item label="Panama" value="pa" />
                        <Picker.Item label="Costa Rica" value="cr" />
                        <Picker.Item label="Mexico" value="mx" />
                        <Picker.Item label="Argentina" value="ar" />
                        <Picker.Item label="Estados Unidos" value="us" />
                        <Picker.Item label="Colombia" value="co" />
                        <Picker.Item label="España" value="es" />
                        <Picker.Item label="Perú" value="pe" />
                    </Picker>
                    <TouchableWithoutFeedback onPress={() => consultarPais()}>
                        <View style={styles.btnBuscar}>
                            <Text style={styles.textoBuscar}>Buscar País</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        padding: 10,
        height: 50,
        fontSize: 20,
        marginBottom: 20,
        textAlign: "center",
        color: "#000",
    },
    itempais: {
        height: 60,
        backgroundColor: "#fff",
    },
    btnBuscar: {
        marginTop: 50,
        height: 50,
        backgroundColor: "#000",
        fontSize: 20,
        marginBottom: 20,
        textAlign: "center",
    },
    textoBuscar: {
        color: "#fff",
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        fontSize: 18,
    },
});

export default Formulario;