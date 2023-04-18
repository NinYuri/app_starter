import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const Login = () => {
    if(usuario == 'yuriana' && password == '12345')
      Alert.alert("Ha ingresado con éxito");
    else
      Alert.alert("Acceso incorrecto");
  };

  return (    
    <View style={styles.container}>
      <Text style = {styles.title}> Login </Text>
      <TextInput
        style = {styles.input}
        placeholder = 'Usuario'
        value = {usuario}
        onChangeText = {setUsuario}
    />
      <StatusBar style="auto" />
    </View>
  );
}

function Profile() {
  return (
    <img
      src="https://i.pinimg.com/564x/0d/8c/53/0d8c53b9c201c46f5da4ab9b9e4c86cb.jpg"
      alt="Yuriana Ibarra"
    />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
