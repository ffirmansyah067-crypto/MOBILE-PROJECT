// @ts-nocheck
import React from "react";
import { View, Text, Image } from "react-native";
import { Product } from "../types/Product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <View
      style={{
        marginBottom: 12,
        padding: 12,
        borderWidth: 1,
        borderRadius: 8
      }}
    >
      <Image
        source={{ uri: product.imageUrl }}
        style={{ width: "100%", height: 150, borderRadius: 6 }}
        resizeMode="cover"
      />

      <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 8 }}>
        {product.name}
      </Text>

      <Text style={{ marginTop: 4 }}>
        Rp {product.price}
      </Text>

      {product.description ? (
        <Text style={{ marginTop: 4, color: "gray" }}>
          {product.description}
        </Text>
      ) : null}
    </View>
  );
}
