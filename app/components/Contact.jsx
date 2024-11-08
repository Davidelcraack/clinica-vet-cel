import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, ScrollView } from 'react-native';
import Navbar from './Navbar';

const Contact = () => {
    const handlePhoneCall = () => {
        const phoneNumber = '+523171291534';
        const phoneUrl = `tel:${phoneNumber}`;
        Linking.openURL(phoneUrl).catch((err) => console.error('Error al abrir la aplicación de teléfono:', err));
      };
    

  const handleEmail = () => {
    const email = 'info@clinicaveterinariaguzman.com';
    const subject = 'Agendar una cita';
    const emailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    Linking.openURL(emailUrl).catch((err) => console.error('Error al abrir la aplicación de correo:', err));
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Text style={styles.heading}>Información de Contacto</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.description}>
              Si tienes alguna pregunta o necesitas asistencia, no dudes en ponerte en contacto con nosotros:
            </Text>
            <TouchableOpacity onPress={handlePhoneCall} style={styles.touchable}>
              <Text style={styles.label}>Teléfono</Text>
              <Text style={styles.link}>+52 3171291534</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleEmail} style={styles.touchable}>
              <Text style={styles.label}>Correo Electrónico</Text>
              <Text style={styles.link}>info@clinicaveterinariaguzman.com</Text>
            </TouchableOpacity>
            <Text style={styles.schedule}>
              Estamos disponibles de lunes a viernes, de 10:00 am a 2:00 pm y de 5:00 pm a 8:00 pm.{"\n"}
              Los sábados de 10:00 am a 2:00 pm.{"\n"}
              Los domingos cerrado.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    padding: 20,
    width: '100%',
    maxWidth: 400,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2B6CB0',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    color: '#4A5568',
    marginBottom: 20,
    textAlign: 'center',
  },
  touchable: {
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2B6CB0',
  },
  link: {
    fontSize: 16,
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
  schedule: {
    fontSize: 14,
    color: '#4A5568',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Contact;
