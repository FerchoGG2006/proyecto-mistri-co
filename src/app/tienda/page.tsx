'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShoppingCart, Star, Search, Filter } from 'lucide-react';
import { toast } from 'sonner';

export default function StorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "Plataforma E-commerce Pro",
      description: "Solución completa para tiendas online con panel de administración avanzado",
      price: 2499,
      originalPrice: 2999,
      category: "software",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      rating: 4.9,
      reviews: 127,
      badge: "Más Vendido"
    },
    {
      id: 2,
      name: "Sistema CRM Empresarial",
      description: "Gestiona clientes, ventas y marketing desde una plataforma unificada",
      price: 1899,
      category: "software",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      rating: 4.8,
      reviews: 89,
      badge: "Nuevo"
    },
    {
      id: 3,
      name: "Consultoría Digital 360°",
      description: "Análisis completo y roadmap de transformación digital personalizado",
      price: 899,
      category: "consultoria",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      rating: 5.0,
      reviews: 45,
      badge: "Premium"
    },
    {
      id: 4,
      name: "App Móvil Híbrida",
      description: "Desarrollo de aplicación móvil multiplataforma con backend incluido",
      price: 3299,
      category: "desarrollo",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
      rating: 4.7,
      reviews: 93,
    },
    {
      id: 5,
      name: "Dashboard Analytics Pro",
      description: "Visualización de datos en tiempo real con métricas personalizables",
      price: 1299,
      originalPrice: 1599,
      category: "software",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
      rating: 4.6,
      reviews: 156,
      badge: "Oferta"
    },
    {
      id: 6,
      name: "Auditoría de Seguridad",
      description: "Evaluación completa de vulnerabilidades y plan de mejoras",
      price: 699,
      category: "seguridad",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      rating: 4.9,
      reviews: 72,
    }
  ];

  const categories = [
    { value: 'all', label: 'Todos los Productos' },
    { value: 'software', label: 'Software' },
    { value: 'consultoria', label: 'Consultoría' },
    { value: 'desarrollo', label: 'Desarrollo' },
    { value: 'seguridad', label: 'Seguridad' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (productId: number, productName: string) => {
    setCartItems(prev => [...prev, productId]);
    toast.success(`${productName} agregado al carrito`);
  };

  const getBadgeColor = (badge: string | undefined) => {
    switch (badge) {
      case 'Más Vendido': return 'bg-blue-600';
      case 'Nuevo': return 'bg-green-600';
      case 'Premium': return 'bg-purple-600';
      case 'Oferta': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            🛒 Nuestra Tienda
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Productos y Servicios
            <span className="block text-lime-400">Digitales Premium</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Descubre nuestra colección de soluciones digitales diseñadas para impulsar tu negocio hacia el éxito.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full md:w-80"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-60">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm text-gray-600">
              {filteredProducts.length} productos encontrados
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {product.badge && (
                    <Badge className={`absolute top-2 left-2 ${getBadgeColor(product.badge)} text-white`}>
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      {product.rating} ({product.reviews})
                    </div>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-blue-600">
                        ${product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => addToCart(product.id, product.name)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Agregar al Carrito
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg">No se encontraron productos que coincidan con tu búsqueda.</div>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                Limpiar Filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-lime-400 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¡No te Pierdas Nuestras Ofertas!
          </h2>
          <p className="text-lg text-gray-800 mb-6">
            Suscríbete y recibe notificaciones de nuevos productos y descuentos exclusivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Tu email aquí" 
              className="flex-1"
            />
            <Button className="bg-gray-900 text-white hover:bg-gray-800">
              Suscribirse
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}