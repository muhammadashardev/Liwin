import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('liwin_cart');
      return saved ? JSON.parse(saved) : [
        {
          id: 'lw-01',
          name: 'LIWIN Prémium Rostos Kenyérkeverék',
          price: 2490,
          quantity: 2,
          image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&auto=format&fit=crop&q=80',
          weight: '500g'
        }
      ];
    } catch {
      return [];
    }
  });

  const [toast, setToast] = useState(null);
  const [coupon, setCoupon] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('liwin_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        weight: product.weight,
        quantity
      }];
    });
    showToast(`"${product.name}" hozzáadva a kosárhoz!`);
  };

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    showToast('Termék eltávolítva a kosárból', 'info');
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyCoupon = (code) => {
    if (code.trim().toUpperCase() === 'LIWIN10') {
      setCoupon({ code: 'LIWIN10', discountPercent: 10 });
      showToast('Kupon aktiválva: -10% kedvezmény!');
      return true;
    }
    showToast('Érvénytelen kuponkód (Próbáld: LIWIN10)', 'error');
    return false;
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = coupon ? Math.round((subtotal * coupon.discountPercent) / 100) : 0;
  const shippingThreshold = 15000;
  const freeShipping = subtotal >= shippingThreshold;
  const shippingFee = cart.length === 0 ? 0 : freeShipping ? 0 : 1490;
  const totalPrice = Math.max(0, subtotal - discountAmount + shippingFee);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItems,
        subtotal,
        discountAmount,
        coupon,
        applyCoupon,
        freeShipping,
        shippingFee,
        shippingThreshold,
        totalPrice,
        toast,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
