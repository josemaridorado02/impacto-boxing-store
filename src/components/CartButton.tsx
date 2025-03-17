
import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const CartButton: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleCartClick = () => {
    toast({
      title: "Carrito",
      description: cartCount > 0 
        ? `Tienes ${cartCount} productos en tu carrito` 
        : "Tu carrito está vacío",
    });
  };

  return (
    <button 
      className="relative p-2 rounded-full transition-transform transform hover:scale-105"
      onClick={handleCartClick}
      aria-label="Ver carrito"
    >
      <ShoppingBag className="w-6 h-6 text-impacto-dark" />
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-impacto-red text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </button>
  );
};

export default CartButton;
