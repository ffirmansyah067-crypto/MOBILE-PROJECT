// @ts-nocheck
import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  Button,
  Alert
} from "react-native";
import { Product } from "../types/Product";

interface Props {
  visible: boolean;
  onClose: () => void;
  onSubmit: (product: Product) => void;
}

export default function AddProductModal({ visible, onClose, onSubmit }: Props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const isValidUrl = (url: string) => {
    return url.startsWith("http://") || url.startsWith("https://");
  };

  const handleSubmit = () => {
    if (!name.trim()) {
      Alert.alert("Error", "Nama produk wajib diisi");
      return;
    }

    if (!price.trim() || isNaN(Number(price))) {
      Alert.alert("Error", "Harga harus berupa angka");
      return;
    }

    if (!imageUrl.trim() || !isValidUrl(imageUrl)) {
      Alert.alert("Error", "URL gambar tidak valid");
      return;
    }

    const newProduct: Product = {
      id: Date.now().toString(),
      name,
      price: Number(price),
      imageUrl,
      description
    };

    onSubmit(newProduct);

    // reset form (penting!)
    setName("");
    setPrice("");
    setImageUrl("");
    setDescription("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={{ flex: 1, padding: 16, justifyContent: "center" }}>

        <Text>Nama Produk</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Masukkan nama"
          style={{ borderWidth: 1, marginBottom: 8 }}
        />

        <Text>Harga</Text>
        <TextInput
          value={price}
          onChangeText={setPrice}
          placeholder="Masukkan harga"
          keyboardType="numeric"
          style={{ borderWidth: 1, marginBottom: 8 }}
        />

        <Text>URL Gambar</Text>
        <TextInput
          value={imageUrl}
          onChangeText={setImageUrl}
          placeholder="https://..."
          style={{ borderWidth: 1, marginBottom: 8 }}
        />

        <Text>Deskripsi (opsional)</Text>
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Deskripsi produk"
          style={{ borderWidth: 1, marginBottom: 16 }}
        />

        <Button title="Submit" onPress={handleSubmit} />
        <View style={{ height: 8 }} />
        <Button title="Tutup" onPress={onClose} />

      </View>
    </Modal>
  );
}
