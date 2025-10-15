"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye, 
  Calendar,
  User,
  Clock,
  Tag
} from 'lucide-react';
import { BlogPost } from '@/types/admin';
import Link from 'next/link';

export default function BlogManagement() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft' | 'archived'>('all');

  useEffect(() => {
    loadBlogs();
  }, []);

  useEffect(() => {
    filterBlogs();
  }, [blogs, searchTerm, statusFilter]);

  const loadBlogs = async () => {
    // Simulación de datos - en producción sería una llamada a la API
    const mockBlogs: BlogPost[] = [
      {
        id: '1',
        title: 'Optimización de Procesos Empresariales',
        slug: 'optimizacion-procesos-empresariales',
        excerpt: 'Guía completa para mejorar la eficiencia operativa en tu empresa',
        content: '',
        author: 'Admin',
        publishedAt: new Date('2024-10-15'),
        updatedAt: new Date('2024-10-15'),
        status: 'published',
        tags: ['procesos', 'eficiencia', 'empresas'],
        category: 'Consultoría',
        readTime: 8,
        views: 245,
      },
      {
        id: '2',
        title: 'Marketing Digital para PYMES',
        slug: 'marketing-digital-pymes',
        excerpt: 'Estrategias efectivas para pequeñas y medianas empresas',
        content: '',
        author: 'Admin',
        publishedAt: new Date('2024-10-10'),
        updatedAt: new Date('2024-10-10'),
        status: 'published',
        tags: ['marketing', 'pymes', 'digital'],
        category: 'Marketing',
        readTime: 12,
        views: 189,
      },
      {
        id: '3',
        title: 'Análisis Financiero Avanzado',
        slug: 'analisis-financiero-avanzado',
        excerpt: 'Técnicas profesionales para el análisis de estados financieros',
        content: '',
        author: 'Admin',
        publishedAt: new Date('2024-10-05'),
        updatedAt: new Date('2024-10-05'),
        status: 'draft',
        tags: ['finanzas', 'análisis', 'contabilidad'],
        category: 'Finanzas',
        readTime: 15,
        views: 0,
      },
      {
        id: '4',
        title: 'Liderazgo en Tiempos de Crisis',
        slug: 'liderazgo-tiempos-crisis',
        excerpt: 'Cómo liderar equipos durante períodos de incertidumbre',
        content: '',
        author: 'Admin',
        publishedAt: new Date('2024-09-28'),
        updatedAt: new Date('2024-09-28'),
        status: 'archived',
        tags: ['liderazgo', 'crisis', 'equipos'],
        category: 'Liderazgo',
        readTime: 10,
        views: 156,
      },
    ];

    setBlogs(mockBlogs);
  };

  const filterBlogs = () => {
    let filtered = blogs;

    // Filtrar por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filtrar por estado
    if (statusFilter !== 'all') {
      filtered = filtered.filter(blog => blog.status === statusFilter);
    }

    setFilteredBlogs(filtered);
  };

  const handleDelete = async (blogId: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar este blog?')) {
      setBlogs(blogs.filter(blog => blog.id !== blogId));
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <Badge className="bg-green-100 text-green-800">Publicado</Badge>;
      case 'draft':
        return <Badge className="bg-yellow-100 text-yellow-800">Borrador</Badge>;
      case 'archived':
        return <Badge className="bg-gray-100 text-gray-800">Archivado</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Blogs</h1>
          <p className="text-gray-600 mt-1">Administra tus artículos y contenido</p>
        </div>
        <Link href="/admin/blog/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nuevo Blog
          </Button>
        </Link>
      </div>

      {/* Filtros y búsqueda */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar blogs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-mistri-blue-500"
              >
                <option value="all">Todos los estados</option>
                <option value="published">Publicados</option>
                <option value="draft">Borradores</option>
                <option value="archived">Archivados</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de blogs */}
      <div className="grid gap-4">
        {filteredBlogs.map((blog) => (
          <Card key={blog.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{blog.title}</h3>
                    {getStatusBadge(blog.status)}
                  </div>
                  
                  <p className="text-gray-600 mb-3">{blog.excerpt}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {blog.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {blog.publishedAt.toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {blog.readTime} min lectura
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {blog.views} vistas
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="h-4 w-4 text-gray-400" />
                    <div className="flex gap-1">
                      {blog.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Badge variant="outline">{blog.category}</Badge>
                </div>

                <div className="flex items-center gap-2 ml-4">
                  <Link href={`/admin/blog/${blog.id}`}>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDelete(blog.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No se encontraron blogs</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || statusFilter !== 'all' 
                ? 'Intenta ajustar los filtros de búsqueda'
                : 'Comienza creando tu primer blog'
              }
            </p>
            {!searchTerm && statusFilter === 'all' && (
              <Link href="/admin/blog/new">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Crear Primer Blog
                </Button>
              </Link>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
