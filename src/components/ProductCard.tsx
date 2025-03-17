
import React, { useState } from 'react';
import { type Product } from '@/data/products';
import { ShoppingBag, Star } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : undefined);
  const [selectedWeight, setSelectedWeight] = useState(product.weights ? product.weights[0] : undefined);

  const handleAddToCart = () => {
    toast({
      title: "¡Producto añadido!",
      description: `${product.name} (${selectedColor}) ha sido añadido a tu carrito.`,
    });
  };

  return (
    <div className="product-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div 
        className={`relative h-64 overflow-hidden ${!isImageLoaded ? 'image-loading' : ''}`}
      >
        {product.featured && (
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-impacto-yellow text-impacto-dark text-xs font-bold px-3 py-1 rounded-full flex items-center">
              <Star className="w-3 h-3 mr-1" fill="currentColor" /> Destacado
            </span>
          </div>
        )}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsImageLoaded(true)}
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <span className="text-xs uppercase font-medium text-gray-500">
            {product.category === 'gloves' ? 'Guantes' : 'Ropa'}
          </span>
          <h3 className="text-xl font-bold text-impacto-dark">{product.name}</h3>
          <p className="text-impacto-red font-bold mt-1">{product.price.toFixed(2)} €</p>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>
        
        <div className="space-y-4">
          {/* Color selection */}
          <div>
            <span className="text-xs font-medium">Color:</span>
            <div className="flex space-x-2 mt-1">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded-full border ${
                    selectedColor === color ? 'ring-2 ring-impacto-red ring-offset-2' : 'border-gray-300'
                  }`}
                  style={{ 
                    backgroundColor: 
                      color === 'Red' ? '#E63946' : 
                      color === 'Black' ? '#212529' :
                      color === 'White' ? '#F1FAEE' :
                      color === 'Gold' ? '#FFD700' :
                      color === 'Blue' ? '#457B9D' :
                      color === 'Gray' ? '#6C757D' :
                      color === 'Red/Gold' ? '#E63946' :
                      color === 'Black/Red' ? '#212529' :
                      color === 'White/Red' ? '#F1FAEE' :
                      color
                  }}
                  title={color}
                  aria-label={`Color: ${color}`}
                />
              ))}
            </div>
          </div>
          
          {/* Size selection for apparel */}
          {product.sizes && (
            <div>
              <span className="text-xs font-medium">Talla:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 text-xs font-medium rounded-md border ${
                      selectedSize === size 
                        ? 'bg-impacto-dark text-white' 
                        : 'bg-white text-impacto-dark hover:bg-gray-100'
                    }`}
                    aria-label={`Size: ${size}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Weight selection for gloves */}
          {product.weights && (
            <div>
              <span className="text-xs font-medium">Peso:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {product.weights.map((weight) => (
                  <button
                    key={weight}
                    onClick={() => setSelectedWeight(weight)}
                    className={`px-3 py-1 text-xs font-medium rounded-md border ${
                      selectedWeight === weight 
                        ? 'bg-impacto-dark text-white' 
                        : 'bg-white text-impacto-dark hover:bg-gray-100'
                    }`}
                    aria-label={`Weight: ${weight}`}
                  >
                    {weight}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-impacto-red text-white rounded-lg flex items-center justify-center font-medium transition-colors hover:bg-impacto-red/90 btn-hover-effect"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
