import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import Navbar from './Navbar';

const screenWidth = Dimensions.get('window').width;

const Services = () => {
  return (
    <>
      <Navbar />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Servicios Veterinarios</Text>
          <Text style={styles.subtitle}>
            Especializados en el cuidado y bienestar de perros y gatos.
          </Text>
          <View style={styles.cardsContainer}>
            <ServiceCard
              title="Consulta General"
              description="Evaluación completa del estado de salud de tu mascota con opciones de seguimiento personalizado."
              image={require('../../assets/services/consulta.png')}
            />
            <ServiceCard
              title="Vacunación"
              description="Programas de vacunación esenciales para proteger a tus perros y gatos contra enfermedades."
              image={require('../../assets/services/vacunacion.png')}
            />
            <ServiceCard
              title="Desparasitación"
              description="Tratamientos efectivos para mantener a tus mascotas libres de parásitos internos y externos."
              image={require('../../assets/services/desparacitacion.png')}
            />
            <ServiceCard
              title="Control de Pulgas y Garrapatas"
              description="Soluciones avanzadas para proteger a tus mascotas de pulgas, garrapatas y otros parásitos."
              image={require('../../assets/services/pulgas.png')}
            />
            <ServiceCard
              title="Limpieza Dental"
              description="Servicios de higiene oral para prevenir enfermedades dentales y mantener la salud bucal de tus mascotas."
              image={require('../../assets/services/dental.png')}
            />
            <ServiceCard
              title="Esterilizaciones"
              description="Procedimientos seguros y eficaces para ayudar a controlar la población de mascotas y mejorar su salud a largo plazo."
              image={require('../../assets/services/esterilizacion.png')}
            />
            <ServiceCard
              title="Cremación"
              description="Servicios de cremación respetuosos para despedirte de tu mascota con dignidad."
              image={require('../../assets/services/cremacion.png')}
            />
            <ServiceCard
              title="Certificado de Salud"
              description="Certificados de salud necesarios para viajes y otros requisitos legales o personales."
              image={require('../../assets/services/certificados.png')}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const ServiceCard = ({ title, description, image }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.cardImage} />
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDescription}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#E0F7FA',
    paddingVertical: 20,
  },
  mainContainer: {
    alignItems: 'center',
    maxWidth: screenWidth - 40,
    width: '100%',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#004f6f',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: '600',
    color: '#4A5568',
    textAlign: 'center',
    marginBottom: 20,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
    width: screenWidth * 0.4,
    marginBottom: 20,
    alignItems: 'center',
    padding: 10,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2B6CB0',
    marginBottom: 5,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 14,
    color: '#4A5568',
    textAlign: 'center',
  },
});

export default Services;
