import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

const FormLogin = ({ handleChange, handleSubmit }) => {
    const router = useRouter();
    const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
      <View style={styles.imageContainer}>
        <Image source={require('../../../assets/logo.png')} style={styles.image} />
      </View>
        <Text style={styles.title}>Iniciar sesión</Text>
        <Text style={styles.subtitle}>Bienvenido de regreso a su clínica de confianza</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Correo electrónico</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese su correo electrónico"
            onChangeText={(value) => handleChange({ target: { name: 'email', value } })}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese su contraseña"
            secureTextEntry
            onChangeText={(value) => handleChange({ target: { name: 'password', value } })}
          />
        </View>

        <TouchableOpacity style={styles.checkboxContainer} onPress={() => setIsChecked(!isChecked)}>
        <Text style={styles.checkbox}>{isChecked ? '☑' : '☐'}</Text>
        <Text style={styles.checkboxLabel}>Recordar la contraseña</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>¿No tienes una cuenta?</Text>
          <TouchableOpacity onPress={() => router.push('/components/user/Register')}>
              <Text style={styles.registerLink}>Crear cuenta</Text>
        </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    fontSize: 18,
  },
  checkboxLabel: {
    marginLeft: 5,
  },
  forgotPassword: {
    color: '#0d6efd',
    textDecorationLine: 'underline',
  },
  submitButton: {
    backgroundColor: '#0d6efd',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  registerText: {
    fontSize: 14,
  },
  registerLink: {
    color: '#0d6efd',
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default FormLogin;
