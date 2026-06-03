import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image />

      <TextInput  style={styles.input}/>
      <TextInput  style={styles.input}/>

      <Button/>
      
      <Text style={{ fontSize: 32 }}>Olvidaste la clave?</Text>
      <Text style={{ fontSize: 32 }}>Crear Cuenta</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
     borderWidth: 1,              
    borderColor: '#8e5dfb',
  }
});
