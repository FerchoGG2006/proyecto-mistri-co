"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye, 
  Calendar,
  User,
  Tag,
  Filter
} from 'lucide-react';
import { BlogPost } from '@/types/admin';

// Datos de ejemplo - en producción vendrían de la base de datos
const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Transformación Digital en las Empresas',
    slug: 'transformacion-digital-empresas',
    excerpt: 'Cómo las empresas pueden adaptarse a la era digital y mejorar sus procesos.',
    content: 'Contenido completo del artículo...',
    featuredImage: '/images/blog/blog-1.svg',
    author: 'María González',
    publishedAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
    status: 'published',
    tags: ['transformación digital', 'empresas', 'tecnología'],
    category: 'Consultoría',
    readTime: 5,
    views: 1250
  },
  {
    id: '2',
    title: 'Liderazgo en Tiempos de Crisis',
    slug: 'liderazgo-tiempos-crisis',
    excerpt: 'Estrategias para liderar equipos durante períodos de incertidumbre.',
    content: 'Contenido completo del artículo...',
    featuredImage: '/images/blog/blog-2.svg',
    author: 'Carlos Mistri',
    publishedAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
    status: 'published',
    tags: ['liderazgo', 'crisis', 'equipos'],
    category: 'Liderazgo',
    readTime: 7,
    views: 980
  },
  {
    id: '3',
    title: 'Desarrollo de Equipos de Alto Rendimiento',
    slug: 'desarrollo-equipos-alto-rendimiento',
    excerpt: 'Técnicas para formar y mantener equipos productivos y motivados.',
    content: 'Contenido completo del artículo...',
    featuredImage: '/images/blog/blog-3.svg',
    author: 'Ana Rodríguez',
    publishedAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05'),
    status: 'draft',
    tags: ['equipos', 'desarrollo', 'productividad'],
    category: 'Recursos Humanos',
    readTime: 6,
    views: 0
  }
];

export default function BlogManagementPage() {
  const [posts, setPosts] = useState<BlogPost[]>(mockBlogPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || post.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || post.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <Badge className="bg-green-100 text-green-800">Publicado</Badge>;
      case 'draft':
        return <Badge className="bg-yellow-100 text-yellow-800">Borrador</Badge>;
      case 'archived':
        return <Badge className="bg-gray-100 text-gray-800">Archivado</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const handleDeletePost = (postId: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar este post?')) {
      setPosts(posts.filter(post => post.id !== postId));
    }
  };

  const stats = {
    total: posts.length,
    published: posts.filter(p => p.status === 'published').length,
    draft: posts.filter(p => p.status === 'draft').length,
    totalViews: posts.reduce((sum, post) => sum + post.views, 0)
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Blog</h1>
          <p className="text-gray-600">Administra los artículos y contenido del blog</p>
        </div>
        <Link href="/admin/blog/new">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Nuevo Post
          </Button>
        </Link>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-sm text-gray-600">Total Posts</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">{stats.published}</div>
            <p className="text-sm text-gray-600">Publicados</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-600">{stats.draft}</div>
            <p className="text-sm text-gray-600">Borradores</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{stats.totalViews.toLocaleString()}</div>
            <p className="text-sm text-gray-600">Vistas Totales</p>
          </CardContent>
        </Card>
      </div>

      {/* Filtros */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="all">Todos los estados</option>
                <option value="published">Publicados</option>
                <option value="draft">Borradores</option>
                <option value="archived">Archivados</option>
              </select>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="all">Todas las categorías</option>
                <option value="Consultoría">Consultoría</option>
                <option value="Liderazgo">Liderazgo</option>
                <option value="Recursos Humanos">Recursos Humanos</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Posts */}
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                    {getStatusBadge(post.status)}
                  </div>
                  
                  <p className="text-gray-600 mb-3">{post.excerpt}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.publishedAt.toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {post.views} vistas
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 ml-4">
                  <Link href={`/admin/blog/${post.id}/edit`}>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href={`/blog/${post.slug}`} target="_blank">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDeletePost(post.id)}
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

      {filteredPosts.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-gray-500">No se encontraron posts con los filtros aplicados.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
