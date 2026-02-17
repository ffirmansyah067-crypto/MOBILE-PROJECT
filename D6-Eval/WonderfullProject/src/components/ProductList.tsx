// @ts-nocheck
import React from "react";
import { FlatList } from "react-native";
import { Product } from "../types/Product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductCard product={item} />}
    />
  );
}
