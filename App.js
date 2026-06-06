import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const ingresar = () => {
    if (email === 'INDEURA' && password === 'a') {
      setMensaje('Bien ahí 👍');
    } else {
      setMensaje('Usuario o contraseña incorrectos, vuelva a intentar');
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>
          Login App (Castillo, Roth)
        </Text>
      </View>

      <View style={styles.formContainer}>
        <Image
          source={require('./assets/foto.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={ingresar}
        >
          <Text style={styles.buttonText}>INGRESAR</Text>
        </TouchableOpacity>

        {mensaje !== '' && (
          <Text style={styles.mensaje}>
            {mensaje}
          </Text>
        )}

        <Text style={styles.link}>¿Olvidaste la clave?</Text>
        <Text style={styles.link}>Crear Cuenta</Text>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  logo: {
    width: 180,
    height: 180,
    marginBottom: 40,
  },

  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#8e5dfb',
    borderRadius: 3,
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#8e5dfb',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 3,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  link: {
    marginTop: 10,
    fontSize: 14,
  },

  header: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: 85,
  backgroundColor: '#6a32f0',
  justifyContent: 'center',
  alignItems: 'center',
},

headerText: {
  marginTop: 40,
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},

formContainer: {
  width: '100%',
  alignItems: 'center',
  paddingHorizontal: 30,
},

mensaje: {
  marginTop: 10,
  fontSize: 14,
  fontWeight: 'bold',
  textAlign: 'center',
},
});