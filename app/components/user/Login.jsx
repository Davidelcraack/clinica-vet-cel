// Login.jsx
import React, { useState, useContext } from 'react';
import { Alert } from 'react-native';
import FormLogin from './FormLogin';
import { UserAuthContext } from '../../context/UserAuthContext';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();
  const { logIn } = useContext(UserAuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.email || !formData.password) {
      Alert.alert('Aviso', 'Por favor ingrese todos los campos.');
      return;
    }

  const result = await logIn(formData);

  if (result) {
    Alert.alert('Éxito', 'Bienvenido al sistema.');
    router.push('/'); 
  } else {
    Alert.alert('Error', 'Hubo un problema al iniciar sesión.');
  }
  };

  return <FormLogin handleSubmit={handleSubmit} handleChange={handleChange} />;
};

export default Login;
