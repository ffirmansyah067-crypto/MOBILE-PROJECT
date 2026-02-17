// @ts-nocheck
import React, { useState } from "react";
import { View, Button } from "react-native";
import { initialProducts } from "./data/products";
import { Product } from "./types/Product";
import ProductList from "./components/ProductList";
import AddProductModal from "./components/AddProductModal";

export default function App() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [visible, setVisible] = useState(false);

  const addProduct = (product: Product) => {
    setProducts(prev => [...prev, product]);
    setVisible(false);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button title="Tambah Produk" onPress={() => setVisible(true)} />

      <ProductList products={products} />

      <AddProductModal
        visible={visible}
        onClose={() => setVisible(false)}
        onSubmit={addProduct}
      />
    </View>
  );
}
