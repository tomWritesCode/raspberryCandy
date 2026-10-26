// raspberryCandy — JavaScript styling test
import { useState } from "react";

const API_URL = "https://api.example.com/v1";
const MAX_RETRIES = 3;
const pattern = /^[a-z0-9]+$/gi;

class CandyStore {
  constructor(name) {
    this.name = name;
    this.items = [];
  }

  // method with template literal + ternary
  addItem(item, price = 0) {
    const label = `${item}: $${price.toFixed(2)}`;
    this.items.push({ item, price, label });
    return price > 0 ? label : "free";
  }

  async fetchStock() {
    try {
      const res = await fetch(`${API_URL}/stock`);
      return await res.json();
    } catch (err) {
      console.error("stock failed", err);
      return null;
    }
  }
}

export default function makeStore() {
  const store = new CandyStore("raspberry");
  store.addItem("gummy", 1.5);
  return store;
}
