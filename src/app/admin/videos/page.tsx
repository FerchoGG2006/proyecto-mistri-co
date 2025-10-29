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
  Play,
  Clock,
  Tag,
  Filter,
  Star
} from 'lucide-react';
import { Video } from '@/types/admin';

// Datos de ejemplo - en producción vendrían de la base de datos
const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Liderazgo Transformacional',
    description: 'Aprende las claves del liderazgo que transforma organizaciones.',
    thumbnail: '/images/charlas/charla-1.svg',
    videoUrl: 'https://youtube.com/watch?v=ejemplo1',
    duration: 45,
    category: 'Liderazgo',
    tags: ['liderazgo', 'transformación', 'equipos'],
    publishedAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
    status: 'published',
    views: 2340,
    featured: true
  },
  {
    id: '2',
    title: 'Gestión del Cambio Organizacional',
    description: 'Estrategias para implementar cambios exitosos en tu empresa.',
    thumbnail: '/images/charlas/charla-2.svg',
    videoUrl: 'https://youtube.com/watch?v=ejemplo2',
    duration: 38,
    category: 'Consultoría',
    tags: ['cambio', 'organización', 'estrategia'],
    publishedAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
    status: 'published',
    views: 1890,
    featured: false
  },
  {
    id: '3',
    title: 'Desarrollo de Equipos de Alto Rendimiento',
    description: 'Cómo formar equipos productivos y motivados.',
    thumbnail: '/images/charlas/charla-3.svg',
    videoUrl: 'https://youtube.com/watch?v=ejemplo3',
    duration: 52,
    category: 'Recursos Humanos',
    tags: ['equipos', 'desarrollo', 'productividad'],
    publishedAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05'),
    status: 'draft',
    views: 0,
    featured: false
  }
];

export default function VideoManagementPage() {
  const [videos, setVideos] = useState<Video[]>(mockVideos);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || video.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || video.category === categoryFilter;
    
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

  const handleDeleteVideo = (videoId: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar este video?')) {
      setVideos(videos.filter(video => video.id !== videoId));
    }
  };

  const handleToggleFeatured = (videoId: string) => {
    setVideos(videos.map(video => 
      video.id === videoId 
        ? { ...video, featured: !video.featured }
        : video
    ));
  };

  const stats = {
    total: videos.length,
    published: videos.filter(v => v.status === 'published').length,
    draft: videos.filter(v => v.status === 'draft').length,
    featured: videos.filter(v => v.featured).length,
    totalViews: videos.reduce((sum, video) => sum + video.views, 0),
    totalDuration: videos.reduce((sum, video) => sum + video.duration, 0)
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Videos</h1>
          <p className="text-gray-600">Administra el contenido educativo en video</p>
        </div>
        <Link href="/admin/videos/new">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Nuevo Video
          </Button>
        </Link>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-sm text-gray-600">Total Videos</p>
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
            <div className="text-2xl font-bold text-blue-600">{stats.featured}</div>
            <p className="text-sm text-gray-600">Destacados</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-purple-600">{stats.totalViews.toLocaleString()}</div>
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
                <option value="Liderazgo">Liderazgo</option>
                <option value="Consultoría">Consultoría</option>
                <option value="Recursos Humanos">Recursos Humanos</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Videos */}
      <div className="space-y-4">
        {filteredVideos.map((video) => (
          <Card key={video.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                {/* Thumbnail */}
                <div className="relative flex-shrink-0">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-32 h-20 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white text-xs px-1 rounded">
                    {Math.floor(video.duration / 60)}:{(video.duration % 60).toString().padStart(2, '0')}
                  </div>
                </div>

                {/* Contenido */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-gray-900">{video.title}</h3>
                      {getStatusBadge(video.status)}
                      {video.featured && (
                        <Badge className="bg-yellow-100 text-yellow-800">
                          <Star className="h-3 w-3 mr-1" />
                          Destacado
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-3">{video.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {video.views} vistas
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {video.duration} min
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      {video.category}
                    </div>
                    <div className="text-xs text-gray-400">
                      {video.publishedAt.toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {video.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Acciones */}
                <div className="flex items-center gap-2 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleToggleFeatured(video.id)}
                    className={video.featured ? 'text-yellow-600' : ''}
                  >
                    <Star className="h-4 w-4" />
                  </Button>
                  <Link href={`/admin/videos/${video.id}/edit`}>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href={video.videoUrl} target="_blank">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDeleteVideo(video.id)}
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

      {filteredVideos.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-gray-500">No se encontraron videos con los filtros aplicados.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
