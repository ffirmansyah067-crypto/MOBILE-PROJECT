import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';

const App = () => {
  // 1. Menggunakan State (Belajar Hook useState)
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Penghitung Klik</Text>
        
        {/* Menampilkan nilai count */}
        <Text style={styles.number}>{count}</Text>

        <View style={styles.buttonContainer}>
          {/* Tombol Kurang */}
          <TouchableOpacity 
            style={[styles.button, styles.btnRed]} 
            onPress={() => setCount(count - 1)}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          {/* Tombol Tambah */}
          <TouchableOpacity 
            style={[styles.button, styles.btnGreen]} 
            onPress={() => setCount(count + 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Tombol Reset */}
        <TouchableOpacity 
          style={styles.resetButton} 
          onPress={() => setCount(0)}
        >
          <Text style={{color: '#666'}}>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// 2. Styling (Mirip CSS tapi dalam bentuk Objek)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 40,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 5, // Efek bayangan di Android
  },
  title: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  number: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnRed: { backgroundColor: '#e74c3c' },
  btnGreen: { backgroundColor: '#2ecc71' },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  resetButton: {
    marginTop: 30,
  }
});

export default App;