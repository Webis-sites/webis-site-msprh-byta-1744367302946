'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiFilter, FiX } from 'react-icons/fi';
import Image from 'next/image';

// Types
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

// Sample product data
const productData: Product[] = [
  {
    id: '1',
    name: 'שמפו לשיער מתולתל',
    description: 'שמפו עשיר בלחות לשיער מתולתל, מעניק ברק וגמישות',
    price: 89.90,
    category: 'שמפו',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'מרכך שיער מזין',
    description: 'מרכך עשיר בחומרים טבעיים המזינים את השיער ומעניקים לו ברק',
    price: 79.90,
    category: 'מרכך',
    image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'מסכת שיער אינטנסיבית',
    description: 'מסכה לטיפול אינטנסיבי בשיער יבש ופגום',
    price: 129.90,
    category: 'טיפוח',
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'ספריי לעיצוב שיער',
    description: 'ספריי לעיצוב השיער עם אחיזה חזקה ללא הכבדה',
    price: 69.90,
    category: 'עיצוב',
    image: 'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    name: 'שמן ארגן לשיער',
    description: 'שמן ארגן טהור להזנה עמוקה ולמראה בריא ומבריק',
    price: 109.90,
    category: 'טיפוח',
    image: 'https://images.unsplash.com/photo-1594226801341-41427b4e5c22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    name: 'שמפו לשיער צבוע',
    description: 'שמפו עדין לשיער צבוע, שומר על הצבע ומעניק ברק',
    price: 94.90,
    category: 'שמפו',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '7',
    name: 'ג׳ל לעיצוב שיער',
    description: 'ג׳ל לעיצוב השיער עם אחיזה חזקה ומראה טבעי',
    price: 59.90,
    category: 'עיצוב',
    image: 'https://images.unsplash.com/photo-1581002815498-c0e5a2717229?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '8',
    name: 'מרכך ללא שטיפה',
    description: 'מרכך ללא שטיפה להקלה על סירוק ולהגנה מפני חום',
    price: 69.90,
    category: 'מרכך',
    image: 'https://images.unsplash.com/photo-1597354984706-fac992d9306f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const ProductsSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(productData);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productData);
  const [activeCategory, setActiveCategory] = useState<string>('הכל');
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [cart, setCart] = useState<{id: string, quantity: number}[]>([]);
  
  // Get unique categories
  const categories = ['הכל', ...Array.from(new Set(products.map(product => product.category)))];

  // Filter products by category
  useEffect(() => {
    if (activeCategory === 'הכל') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === activeCategory));
    }
  }, [activeCategory, products]);

  // Add to cart function
  const addToCart = (productId: string) => {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { id: productId, quantity: 1 }]);
    }
    
    // Show notification (could be implemented)
    console.log(`מוצר נוסף לסל: ${productId}`);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <section id="products-section" dir="rtl" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-right mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">המוצרים שלנו</h2>
          <p className="text-lg text-gray-600 mb-8">
            מגוון מוצרי שיער איכותיים לטיפוח ועיצוב השיער שלך
          </p>
          
          {/* Mobile filter button */}
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="md:hidden flex items-center justify-center gap-2 bg-white rounded-full py-2 px-4 shadow-lg text-gray-700 mb-4 mr-auto"
          >
            <FiFilter />
            <span>סינון לפי קטגוריה</span>
          </button>
          
          {/* Desktop Categories */}
          <div className="hidden md:flex flex-wrap gap-3 justify-end mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`py-2 px-6 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#588C7E] text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 shadow-md hover:shadow-lg hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        {isFilterOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="absolute top-0 right-0 h-full w-3/4 bg-white shadow-xl p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">סינון לפי קטגוריה</h3>
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 rounded-full bg-gray-100"
                >
                  <FiX />
                </button>
              </div>
              
              <div className="flex flex-col gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setIsFilterOpen(false);
                    }}
                    className={`py-3 px-4 rounded-lg text-right transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-[#588C7E] text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {/* Products Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.5)'
              }}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-[#588C7E] bg-[#FFEEAD] rounded-full">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm h-12 overflow-hidden">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-[#588C7E]">₪{product.price.toFixed(2)}</span>
                  <button
                    onClick={() => addToCart(product.id)}
                    className="flex items-center gap-2 bg-[#588C7E] text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-opacity-90"
                    style={{
                      boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.8)'
                    }}
                  >
                    <FiShoppingCart />
                    <span>הוסף לסל</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-600 mb-4">לא נמצאו מוצרים בקטגוריה זו</h3>
            <button
              onClick={() => setActiveCategory('הכל')}
              className="bg-[#588C7E] text-white py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              הצג את כל המוצרים
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;