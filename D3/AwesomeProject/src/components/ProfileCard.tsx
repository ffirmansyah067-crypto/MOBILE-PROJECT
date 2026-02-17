// @ts-nocheck
import React from 'react';
// ... sisa kode kamu
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';

// Gunakan function biasa daripada arrow function langsung 
// untuk membantu VS Code mengenali fungsinya sebagai komponen.
export default function ProfilCard() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f0f0" />
      <View style={styles.container}>
        <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.avatar} />
        <Text style={styles.nama}>John Doe</Text>
        <Text style={styles.bio} numberOfLines={2}>Developer React Native enthusiast.</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  nama: { fontSize: 24, fontWeight: 'bold', marginBottom: 5 },
  bio: { fontSize: 16, textAlign: 'center' },
});

export default ProfilCard;