import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, ScrollView, Alert } from 'react-native';
import { UserAuthContext } from '../../context/UserAuthContext';
import { useRouter } from 'expo-router';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Modal visible={isOpen} transparent={true} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <ScrollView>
            <Text style={styles.modalTitle}>Política de Privacidad</Text>
            <Text style={styles.modalText}>
              En la Clínica Veterinaria “Ciudad Guzmán”, valoramos la privacidad de nuestros clientes y sus mascotas. Esta política de privacidad explica cómo recopilamos y utilizamos la información personal para gestionar citas eficientemente.
            </Text>
            
          </ScrollView>
          <TouchableOpacity onPress={onClose} style={styles.modalButton}>
            <Text style={styles.buttonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const Register = () => {
  const router = useRouter();
  const { signUp } = useContext(UserAuthContext);
  const [isAgreed, setIsAgreed] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    if (!formData.email || !formData.password) {
      Alert.alert('Aviso', 'Todos los campos son obligatorios.');
      return;
    }
    if (!isAgreed) {
      Alert.alert('Aviso', 'Debe aceptar la política de privacidad para continuar.');
      return;
    }

    const { error } = await signUp(formData);
    if (!error) {
      Alert.alert('Registro exitoso', 'Usuario creado con éxito.');
      router.push('/')
    } else {
      console.error('Error de registro:', error.message);
      Alert.alert('Error', `Error al intentar crear un usuario: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Crear una cuenta</Text>
        <Text style={styles.subtitle}>¡Regístrate para acceder a todos nuestros servicios!</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Correo electrónico</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese su correo electrónico"
            onChangeText={(value) => handleChange('email', value)}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese su contraseña"
            secureTextEntry
            onChangeText={(value) => handleChange('password', value)}
          />
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={() => setIsAgreed(!isAgreed)}>
            <Text style={styles.checkbox}>{isAgreed ? '☑' : '☐'}</Text>
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>
            Estoy de acuerdo con la{' '}
            <Text style={styles.link} onPress={() => setModalOpen(true)}>
              política de privacidad
            </Text>
          </Text>
        </View>
        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </TouchableOpacity>
        <View style={styles.loginRedirect}>
          <Text style={styles.loginText}>¿Ya tienes una cuenta?</Text>
          <Text style={styles.link} onPress={() => router.push('/components/user/Login')}>Iniciar sesión</Text>
        </View>
      </View>
      <PrivacyPolicyModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
    marginVertical: 10,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 5,
    marginRight: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
    fontSize: 16,
    marginLeft: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    fontSize: 18, 
  },
  checkboxLabel: {
    fontSize: 14,
    marginLeft: 8,
  },
  link: {
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
  loginRedirect: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  loginText: {
    fontSize: 14,
    marginRight: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'justify',
  },
  modalSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  modalButton: {
    backgroundColor: '#0d6efd',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Register;
