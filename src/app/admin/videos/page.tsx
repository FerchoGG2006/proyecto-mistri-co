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
  Play,
  Clock,
  Star,
  Tag,
  Upload
} from 'lucide-react';
import { Video } from '@/types/admin';
import Link from 'next/link';

export default function VideoManagement() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft' | 'archived'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  useEffect(() => {
    loadVideos();
  }, []);

  useEffect(() => {
    filterVideos();
  }, [videos, searchTerm, statusFilter, categoryFilter]);

  const loadVideos = async () => {
    // Simulación de datos - en producción sería una llamada a la API
    const mockVideos: Video[] = [
      {
        id: '1',
        title: 'Introducción a la Consultoría Empresarial',
        description: 'Conceptos básicos y fundamentos de la consultoría empresarial moderna',
        thumbnail: '/images/videos/thumbnail-1.jpg',
        videoUrl: 'https://youtube.com/watch?v=example1',
        duration: 15,
        category: 'Educativo',
        tags: ['consultoría', 'introducción', 'empresas'],
        publishedAt: new Date('2024-10-12'),
        updatedAt: new Date('2024-10-12'),
        status: 'published',
        views: 456,
        featured: true,
      },
      {
        id: '2',
        title: 'Marketing Digital para PYMES',
        description: 'Estrategias efectivas de marketing digital para pequeñas empresas',
        thumbnail: '/images/videos/thumbnail-2.jpg',
        videoUrl: 'https://youtube.com/watch?v=example2',
        duration: 22,
        category: 'Marketing',
        tags: ['marketing', 'digital', 'pymes'],
        publishedAt: new Date('2024-10-08'),
        updatedAt: new Date('2024-10-08'),
        status: 'published',
        views: 324,
        featured: false,
      },
      {
        id: '3',
        title: 'Análisis Financiero Avanzado',
        description: 'Técnicas profesionales para el análisis de estados financieros',
        thumbnail: '/images/videos/thumbnail-3.jpg',
        videoUrl: 'https://youtube.com/watch?v=example3',
        duration: 28,
        category: 'Finanzas',
        tags: ['finanzas', 'análisis', 'contabilidad'],
        publishedAt: new Date('2024-10-05'),
        updatedAt: new Date('2024-10-05'),
        status: 'draft',
        views: 0,
        featured: false,
      },
      {
        id: '4',
        title: 'Liderazgo en Tiempos de Crisis',
        description: 'Cómo liderar equipos durante períodos de incertidumbre',
        thumbnail: '/images/videos/thumbnail-4.jpg',
        videoUrl: 'https://youtube.com/watch?v=example4',
        duration: 18,
        category: 'Liderazgo',
        tags: ['liderazgo', 'crisis', 'equipos'],
        publishedAt: new Date('2024-09-28'),
        updatedAt: new Date('2024-09-28'),
        status: 'archived',
        views: 156,
        featured: false,
      },
    ];

    setVideos(mockVideos);
  };

  const filterVideos = () => {
    let filtered = videos;

    // Filtrar por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter(video => 
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filtrar por estado
    if (statusFilter !== 'all') {
      filtered = filtered.filter(video => video.status === statusFilter);
    }

    // Filtrar por categoría
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(video => video.category === categoryFilter);
    }

    setFilteredVideos(filtered);
  };

  const handleDelete = async (videoId: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar este video?')) {
      setVideos(videos.filter(video => video.id !== videoId));
    }
  };

  const toggleFeatured = async (videoId: string) => {
    setVideos(videos.map(video => 
      video.id === videoId 
        ? { ...video, featured: !video.featured }
        : video
    ));
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

  const categories = ['Educativo', 'Marketing', 'Finanzas', 'Liderazgo', 'Tecnología'];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Videos</h1>
          <p className="text-gray-600 mt-1">Administra tu biblioteca de videos</p>
        </div>
        <Link href="/admin/videos/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nuevo Video
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
                  placeholder="Buscar videos..."
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
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-mistri-blue-500"
              >
                <option value="all">Todas las categorías</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <Card key={video.id} className="overflow-hidden">
            <div className="relative">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Vista previa</p>
                </div>
              </div>
              {video.featured && (
                <div className="absolute top-2 right-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                </div>
              )}
            </div>
            
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-sm line-clamp-2">{video.title}</h3>
                {getStatusBadge(video.status)}
              </div>
              
              <p className="text-gray-600 text-xs mb-3 line-clamp-2">{video.description}</p>
              
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {video.duration} min
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  {video.views} vistas
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline" className="text-xs">{video.category}</Badge>
                <div className="flex gap-1">
                  {video.tags.slice(0, 2).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {video.tags.length > 2 && (
                    <span className="text-xs text-gray-500">+{video.tags.length - 2}</span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  <Link href={`/admin/videos/${video.id}`}>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => toggleFeatured(video.id)}
                    className={video.featured ? "text-yellow-600" : "text-gray-400"}
                  >
                    <Star className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleDelete(video.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="outline" size="sm">
                  <Play className="h-4 w-4 mr-1" />
                  Ver
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No se encontraron videos</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || statusFilter !== 'all' || categoryFilter !== 'all'
                ? 'Intenta ajustar los filtros de búsqueda'
                : 'Comienza creando tu primer video'
              }
            </p>
            {!searchTerm && statusFilter === 'all' && categoryFilter === 'all' && (
              <Link href="/admin/videos/new">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Crear Primer Video
                </Button>
              </Link>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
