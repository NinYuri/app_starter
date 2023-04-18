import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default function App() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  return (    
    <View style={styles.container}>
      <Text style = {styles.title}> Login </Text>
      <TextInput
        style = {styles.boxes}
        placeholder = 'Usuario'
        value = {usuario}
        onChangeText = {setUsuario}
      />
      <TextInput
        style = {styles.boxes}
        placeholder = 'Contraseña'
        secureTextEntry = {true}
        value = {password}
        onChangeText = {setPassword}
      />
      <TouchableHighlight onPress={<Login></Login>}>
        <Text style = {styles.log}> Entrar </Text>
      </TouchableHighlight>
    </View>
  );
}

function Login() {
    if(usuario === "yuriana" && password === "12345"){
      Alert.alert("Ha ingresado con éxito");
    }
    else
      Alert.alert("Acceso incorrecto");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 100,
    color: 'pink',
  },

  boxes: {
    fontSize: 20,
    fontWeight: 'normal',
  },

  log: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'pink',
  }
});
