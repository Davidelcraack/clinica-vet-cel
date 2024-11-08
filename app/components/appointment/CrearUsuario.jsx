import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useRouter } from 'expo-router'; 
import { UserAuthContext } from '../../context/UserAuthContext'; 
import { supabase } from '../../helpers/supabaseClient';

const CrearUsuario = () => {
  const { user } = useContext(UserAuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    phone: '',
    email: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setError('');
    setSuccess('');

    if (!user || !user.id) {
      setError('Usuario no definido.');
      Alert.alert('Error', 'Usuario no definido.');
      return;
    }
    
    const { data, error: userError } = await supabase
      .from('users')
      .update({ ...formData })
      .eq('id', user.id); 

    if (userError) {
      setError('Error al actualizar el usuario: ' + userError.message);
      Alert.alert('Error', 'Error al actualizar el usuario: ' + userError.message);
    } else {
      setSuccess('Usuario registrado con éxito!');
      Alert.alert('Éxito', 'Usuario registrado con éxito!');
      router.push('/components/appointment/Dashboard');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.bannerContainer}>
        <Text style={styles.title}>
          Por favor completa el siguiente formulario para la verificación de su información
        </Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Registre sus datos correctamente</Text>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        {success ? <Text style={styles.successText}>{success}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={formData.name}
          onChangeText={(value) => handleChange('name', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellidos"
          value={formData.last_name}
          onChangeText={(value) => handleChange('last_name', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={formData.email}
          onChangeText={(value) => handleChange('email', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Número de teléfono"
          value={formData.phone}
          onChangeText={(value) => handleChange('phone', value)}
          keyboardType="phone-pad"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Registrar Usuario</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
  },
  bannerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004f6f',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  formContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#0d6efd',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  successText: {
    color: 'green',
    marginBottom: 10,
  },
});

export default CrearUsuario;
