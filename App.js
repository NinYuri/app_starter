import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { Button, FlatList } from 'react-native-web';

export default function App() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const [tareas, setTareas] = useState([]);
  const [nuevatarea, setNuevaTarea] = useState('');
  
  const Login = () => {
    if(usuario === 'Yuriana' && password === '12345') {
      Alert.alert('Has iniciado sesión correctamente.');
      setLogin(true);
    }
    else {
      Alert.alert('Datos de usuario inválidos');
    }
  };

  const Logout = () => {
    setLogin(false);
    setUsuario('');
    setPassword('');
    setTareas([]);
    setNuevaTarea('');
  };

  const Tarea = () => {
    if(nuevatarea.trim() !== '') {
      setTareas([...tareas, {id: Date.now().toString(), text: nuevatarea}]);
      setNuevaTarea('');
    }
  };

  const Eliminar = (id) => {
    setTareas(tareas.filter((tareas) => tareas.id !== id));
  };

    if(!login) {
    return (    
      <View style={styles.container}>
        <Text style = {styles.title}> Inicia Sesión </Text>
        <TextInput
          style = {styles.input}
          placeholder = 'Usuario'
          value = {usuario}
          onChangeText = {setUsuario}
        />
        <TextInput
          style = {styles.input}
          placeholder = 'Contraseña'
          secureTextEntry = {true}
          value = {password}
          onChangeText = {setPassword}
        />
        <TouchableHighlight style = {styles.boton} onPress={Login}>
          <Text style = {styles.entrar}> Entrar </Text>
        </TouchableHighlight>
      </View>
    );
  }

  return (
    <View style={styles.container}>
        <Text style = {styles.todolist}> To-Do List </Text>
    </View>
  );

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
    marginBottom: 80,
    color: '#F68DCB',
  },

  todolist: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 680,
    color: '#F68DCB'
  },

  input: {
    fontSize: 15,
    width: '80%',
    padding: 10,
    marginBottom: 20,
    color: '#4B3C48',
    borderColor: 'pink',
    borderRadius: 5,
    backgroundColor: '#FAEBF4',
  },

  boton: {
    backgroundColor: '#F68DCB',
    width: '30%',
    padding: 10,
    borderRadius: 5,
  },

  entrar: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
