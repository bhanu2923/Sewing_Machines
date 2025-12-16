import { ShoppingCart, Heart, Star, ChevronRight } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useFavorites } from '../../contexts/FavoritesContext';
import { Link } from 'react-router-dom';

export default function ProductsSection() {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  
  const products = [
    {
      id: 1,
      name: 'Usha Janome Dream Stitch',
      price: 15999,
      originalPrice: 19999,
      rating: 4.5,
      image: 'https://res.cloudinary.com/durbtkhbz/image/upload/v1765429607/usha_k7slud.jpg',
      discount: 20,
      category: 'Domestic',
      features: ['32 Stitch Patterns', '4-Step Buttonhole', 'Free Arm']
    },
    {
      id: 2,
      name: 'Singer Heavy Duty 4452',
      price: 28999,
      originalPrice: 35999,
      rating: 4.8,
      image: 'https://res.cloudinary.com/durbtkhbz/image/upload/v1765429607/usha_k7slud.jpg',
      discount: 20,
      category: 'Heavy Duty',
      features: ['110 Stitches', 'Heavy Metal Frame', 'LED Lighting']
    },
    {
      id: 3,
      name: 'Brother GS 3700',
      price: 17990,
      originalPrice: 21990,
      rating: 4.6,
      image: 'https://res.cloudinary.com/durbtkhbz/image/upload/v1765429607/usha_k7slud.jpg',
      discount: 18,
      category: 'Beginner',
      features: ['37 Stitch Patterns', 'Auto Needle Threader', 'Free Arm']
    },
    {
      id: 4,
      name: 'Janome HD3000',
      price: 34999,
      originalPrice: 41999,
      rating: 4.9,
      image: 'https://res.cloudinary.com/durbtkhbz/image/upload/v1765429607/usha_k7slud.jpg',
      discount: 17,
      category: 'Professional',
      features: ['18 Stitches', 'Aluminum Body', 'Jam Proof Bobbin']
    },
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-[#c54513] bg-[#fde8e1] rounded-full mb-4">
            OUR COLLECTION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Sewing Machines
          </h2>
          <div className="w-20 h-1 bg-[#c54513] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium selection of high-quality sewing machines for every skill level
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link 
              to={`/products/${product.id}`}
              key={product.id} 
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 block"
            >
              <div className="relative h-56 bg-gray-50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x300?text=Sewing+Machine';
                  }}
                />
                
                <div className="absolute top-3 left-3 flex flex-col space-y-2">
                  <span className="inline-block bg-[#c54513] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {product.discount}% OFF
                  </span>
                  <span className="inline-block bg-white text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                    {product.category}
                  </span>
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavorite(product);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.stopPropagation();
                      toggleFavorite(product);
                    }
                  }}
                  className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
                    isFavorite(product.id) 
                      ? 'text-red-500 bg-white/90' 
                      : 'text-gray-400 bg-white/80 hover:bg-white'
                  }`}
                  title={isFavorite(product.id) ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <Heart 
                    size={20} 
                    className={isFavorite(product.id) ? 'fill-current' : ''} 
                  />
                </button>
              </div>

              <div className="p-5">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-200'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">
                    ({product.rating})
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 h-14">
                  {product.name}
                </h3>

                <ul className="mb-4 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#c54513] rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-gray-900">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="ml-2 text-sm text-gray-500 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    addToCart(product, 1);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.stopPropagation();
                      addToCart(product, 1);
                    }
                  }}
                      className="p-2.5 bg-[#c54513] text-white rounded-full hover:bg-[#a5380e] transition-colors"
                      title="Add to cart"
                    >
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#c54513] hover:bg-[#a43a10] transition-colors shadow-sm"
          >
            View All Products
            <ChevronRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
