import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { UserAuthContext } from '../context/UserAuthContext';
import Navbar from './Navbar';

export default function Main() {
  const { user } = useContext(UserAuthContext);
  const router = useRouter();

  const handleClick = () => {
    if (user) {
      user.name ? router.push('/components/appointment/Dashboard') : router.push('/components/appointment/CrearUsuario');
    } else {
      router.push('/components/user/Login');
    }
   return false;
  };

  return (
    <>
    <Navbar />
    <ImageBackground 
      source={require('../../assets/hero.jpg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.title}>SERVICIOS VETERINARIOS CIUDAD GUZMAN</Text>
        <Text style={styles.subtitle}>
          &ldquo;Donde el amor por los animales se encuentra con la excelencia en el cuidado veterinario.&rdquo;
        </Text>
        <TouchableOpacity onPress={handleClick} style={styles.button}>
          <Text style={styles.buttonText}>AGENDAR UNA CITA</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente para el texto
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0d6efd',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});