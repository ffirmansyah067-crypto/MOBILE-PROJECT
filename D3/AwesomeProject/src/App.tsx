// @ts-nocheck
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ProfileCard from './components/ProfileCard'; // pastikan path sesuai lokasi file
import LoginForm from './components/LoginForm';
import HeroSection from './components/HeroSection';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileCard />
      <HeroSection />
      <LoginForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // warna background app
    justifyContent: 'center',
    alignItems: 'center',
  },
});
