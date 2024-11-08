import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import Navbar from './Navbar';
import { FontAwesome, MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';

const About = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Banner */}
        <View style={styles.bannerContainer}>
          <Image source={require('../../assets/banner.jpg')} style={styles.bannerImage} />
          <Text style={styles.heading}>Nosotros</Text>
        </View>

        {/* Historia */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Historia</Text>
          <Text style={styles.sectionText}>Trabajando por más de 8 años</Text>
          <Text style={styles.sectionParagraph}>
            La Clínica Veterinaria Ciudad Guzmán ha brindado atención veterinaria compasiva y de calidad en Ciudad Guzmán y las comunidades aledañas desde 2014. Cada año, nuestro equipo veterinario asiste a más de 150 horas de educación continua para brindar a sus animales la atención médica y quirúrgica más actualizada.
          </Text>
          <Text style={styles.sectionParagraph}>
            La Clínica Veterinaria Ciudad Guzmán es única en el sentido de que brindamos atención médica a múltiples especies en el área de Zapotlán el Grande en Jalisco.
          </Text>
          <Text style={styles.sectionParagraph}>
            Nuestros veterinarios se especializan en el cuidado de perros y gatos. Brindamos servicios que incluyen, entre otros: atención preventiva, cirugía, odontología, diagnóstico de laboratorio, radiografías y ultrasonido. Los servicios para animales grandes incluyen, entre otros: consulta general, vacunación, desparasitación, control de pulgas y garrapatas, limpieza dental, esterilizaciones, entre otros.
          </Text>
          <Image source={require('../../assets/history.png')} style={styles.image} />
        </View>

        {/* Misión */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Misión</Text>
          <Text style={styles.sectionParagraph}>
            Nuestra misión en la Clínica Veterinaria Ciudad Guzmán es ofrecer atención médica de la más alta calidad y compasión hacia cada animal que cruza nuestras puertas. Nos comprometemos a mejorar la salud y el bienestar de las mascotas y otros animales a través de avanzados tratamientos veterinarios, educación continua y un servicio al cliente excepcional.
          </Text>
        </View>

        {/* Visión */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Visión</Text>
          <Text style={styles.sectionParagraph}>
            La Clinica Veterinaria Ciudad Guzman trabaja para ser el proveedor de cuidado de mascotas más confiable y respetado en nuestra comunidad al brindar la mejor atención médica posible a cada paciente y brindar un servicio excepcional a cada paciente y dueño de mascota.
          </Text>
          <Image source={require('../../assets/vision.png')} style={styles.image} />
        </View>

        {/* Valores Fundamentales */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Valores Fundamentales</Text>
          <Text style={styles.sectionParagraph}>
            Nuestros valores nos definen como empresa y guían cada aspecto de nuestra práctica en la Clínica Veterinaria Ciudad Guzmán. Estos principios son la base sobre la cual construimos nuestras relaciones con los clientes, tratamos a cada paciente y tomamos decisiones importantes tanto en el cuidado médico como en la administración de nuestro negocio.
          </Text>
          <View style={styles.valuesContainer}>
            <View style={styles.valueItem}>
              <Ionicons name="people" size={40} color="#000" style={styles.icon} />
              <Text style={styles.valueText}>Integridad</Text>
            </View>
            <View style={styles.valueItem}>
              <FontAwesome name="heart" size={40} color="red" style={styles.icon} />
              <Text style={styles.valueText}>Tratamiento Especial</Text>
            </View>
            <View style={styles.valueItem}>
              <MaterialIcons name="check-circle" size={40} color="green" style={styles.icon} />
              <Text style={styles.valueText}>Eficiencia</Text>
            </View>
            <View style={styles.valueItem}>
              <Feather name="trending-up" size={40} color="blue" style={styles.icon} />
              <Text style={styles.valueText}>Crecimiento</Text>
            </View>
            <View style={styles.valueItem}>
              <FontAwesome name="star" size={40} color="yellow" style={styles.icon} />
              <Text style={styles.valueText}>Excelencia</Text>
            </View>
            <View style={styles.valueItem}>
              <Ionicons name="people" size={40} color="#444" style={styles.icon} />
              <Text style={styles.valueText}>Compañerismo</Text>
            </View>
          </View>
        </View>

        {/* Ubicación */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Ubicación</Text>
          <Text style={styles.sectionParagraph}>
            Visítanos en nuestra ubicación en:{' '}
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL('https://www.google.com.mx/maps/place/Veterinaria+Ciudad+Guzm%C3%A1n/@19.6966859,-103.4677601,17z/data=!4m10!1m2!2m1!1sclinica+veterinaria+ciudad+guzman!3m6!1s0x842f87614601f353:0xb5089a3df6476ce5!8m2!3d19.694682!4d-103.464128!15sCiFjbGluaWNhIHZldGVyaW5hcmlhIGNpdWRhZCBndXptYW6SAQx2ZXRlcmluYXJpYW7gAQA!16s%2Fg%2F11v6xyss6l?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D')}
            >
              Calle Gral. Ramón Corona Madrigal 467-A, Cd Guzmán Centro, 49000 Cdad. Guzmán, Jal.
            </Text>
          </Text>
          <Image source={require('../../assets/ubicacion.png')} style={styles.image} />
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
  scrollContainer: {
    paddingBottom: 20,
  },
  bannerContainer: {
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#004f6f',
    textAlign: 'center',
    marginTop: 10,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2B6CB0',
    marginBottom: 10,
    textAlign: 'center',
  },
  sectionParagraph: {
    fontSize: 14,
    color: '#4A5568',
    marginBottom: 10,
    textAlign: 'justify',
  },
  valuesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  valueItem: {
    alignItems: 'center',
    width: '45%',
    marginBottom: 20,
  },
  icon: {
    marginBottom: 8,
  },
  valueText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  link: {
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
});

export default About;
