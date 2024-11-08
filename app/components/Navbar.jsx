import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { UserAuthContext } from '../context/UserAuthContext';
import { useRouter } from 'expo-router';

const Navbar = () => {
  const { user, logOut } = useContext(UserAuthContext);
  const [navVisible, setNavVisible] = useState(false);
  const router = useRouter();

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  const handleLogout = () => {
    logOut();
    router.push('/');
  };

  return (
    <View style={styles.navbar}>
      {/* Logo y botón de menú */}
      <View style={styles.navbarHeader}>
        <TouchableOpacity onPress={() => router.push('/')}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} />
        </TouchableOpacity>
        <Text className="text-xl font-bold tracking-tight text-white">Veterinaria Ciudad Guzman</Text>
        <TouchableOpacity onPress={toggleNav}>
          <Text style={styles.menuButton}>{navVisible ? '✖' : '☰'}</Text>
        </TouchableOpacity>
      </View>

      {/* Menú desplegable */}
      {navVisible && (
        <ScrollView style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/')}>
            <Text style={styles.menuText}>Inicio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/components/Services')}>
            <Text style={styles.menuText}>Servicios</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/components/About')}>
            <Text style={styles.menuText}>La clínica</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/components/Contact')}>
            <Text style={styles.menuText}>Contacto</Text>
          </TouchableOpacity>
          {!user ? (
            <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/login')}>
              <Text style={styles.menuText}>Iniciar sesión</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
              <Text style={styles.menuText}>Cerrar sesión</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    width: Dimensions.get('window').width, 
    backgroundColor: '#0d6efd',
    paddingTop: 30, 
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  navbarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: 40,
    width: 40,
  },
  menuButton: {
    color: 'white',
    fontSize: 24,
  },
  menu: {
    marginTop: 16,
  },
  menuItem: {
    paddingVertical: 7,
  },
  menuText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Navbar;
