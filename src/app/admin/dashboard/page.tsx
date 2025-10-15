"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Video, 
  Calendar, 
  Eye, 
  TrendingUp, 
  Users,
  Plus,
  Edit,
  Trash2,
  Clock
} from 'lucide-react';
import { AdminStats, BlogPost, Video, Charla } from '@/types/admin';
import Link from 'next/link';

export default function AdminDashboard() {
  const [stats, setStats] = useState<AdminStats>({
    totalBlogs: 0,
    publishedBlogs: 0,
    draftBlogs: 0,
    totalVideos: 0,
    publishedVideos: 0,
    totalCharlas: 0,
    upcomingCharlas: 0,
    totalViews: 0,
    monthlyViews: 0,
  });

  const [recentBlogs, setRecentBlogs] = useState<BlogPost[]>([]);
  const [recentVideos, setRecentVideos] = useState<Video[]>([]);
  const [upcomingCharlas, setUpcomingCharlas] = useState<Charla[]>([]);

  useEffect(() => {
    // Simular carga de datos
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    // Simulación de datos - en producción sería una llamada a la API
    setStats({
      totalBlogs: 12,
      publishedBlogs: 8,
      draftBlogs: 4,
      totalVideos: 6,
      publishedVideos: 5,
      totalCharlas: 3,
      upcomingCharlas: 2,
      totalViews: 15420,
      monthlyViews: 3240,
    });

    setRecentBlogs([
      {
        id: '1',
        title: 'Optimización de Procesos Empresariales',
        slug: 'optimizacion-procesos-empresariales',
        excerpt: 'Guía completa para mejorar la eficiencia operativa',
        content: '',
        author: 'Admin',
        publishedAt: new Date('2024-10-15'),
        updatedAt: new Date('2024-10-15'),
        status: 'published',
        tags: ['procesos', 'eficiencia'],
        category: 'Consultoría',
        readTime: 8,
        views: 245,
      },
      {
        id: '2',
        title: 'Marketing Digital para PYMES',
        slug: 'marketing-digital-pymes',
        excerpt: 'Estrategias efectivas para pequeñas empresas',
        content: '',
        author: 'Admin',
        publishedAt: new Date('2024-10-10'),
        updatedAt: new Date('2024-10-10'),
        status: 'published',
        tags: ['marketing', 'pymes'],
        category: 'Marketing',
        readTime: 12,
        views: 189,
      },
    ]);

    setRecentVideos([
      {
        id: '1',
        title: 'Introducción a la Consultoría Empresarial',
        description: 'Conceptos básicos de consultoría',
        thumbnail: '/images/videos/thumbnail-1.jpg',
        videoUrl: 'https://youtube.com/watch?v=example',
        duration: 15,
        category: 'Educativo',
        tags: ['consultoría', 'introducción'],
        publishedAt: new Date('2024-10-12'),
        updatedAt: new Date('2024-10-12'),
        status: 'published',
        views: 456,
        featured: true,
      },
    ]);

    setUpcomingCharlas([
      {
        id: '1',
        title: 'Workshop: Transformación Digital',
        description: 'Taller práctico sobre transformación digital',
        speaker: 'Dr. María González',
        speakerBio: 'Experta en transformación digital con 15 años de experiencia',
        date: new Date('2024-10-25'),
        time: '18:00',
        duration: 120,
        location: 'Centro de Convenciones',
        isVirtual: false,
        maxAttendees: 50,
        currentAttendees: 32,
        status: 'scheduled',
        registrationOpen: true,
        price: 5000,
        currency: 'ARS',
        tags: ['transformación digital', 'workshop'],
        createdAt: new Date('2024-10-01'),
        updatedAt: new Date('2024-10-01'),
      },
    ]);
  };

  const StatCard = ({ title, value, icon: Icon, change, changeType }: {
    title: string;
    value: string | number;
    icon: React.ElementType;
    change?: string;
    changeType?: 'positive' | 'negative' | 'neutral';
  }) => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className={`text-xs ${
            changeType === 'positive' ? 'text-green-600' : 
            changeType === 'negative' ? 'text-red-600' : 
            'text-gray-600'
          }`}>
            {change}
          </p>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Última actualización: {new Date().toLocaleString()}
        </div>
      </div>

      {/* Estadísticas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Blogs"
          value={stats.totalBlogs}
          icon={FileText}
          change={`${stats.publishedBlogs} publicados`}
          changeType="positive"
        />
        <StatCard
          title="Total Videos"
          value={stats.totalVideos}
          icon={Video}
          change={`${stats.publishedVideos} publicados`}
          changeType="positive"
        />
        <StatCard
          title="Charlas Programadas"
          value={stats.upcomingCharlas}
          icon={Calendar}
          change={`${stats.totalCharlas} total`}
          changeType="neutral"
        />
        <StatCard
          title="Vistas Totales"
          value={stats.totalViews.toLocaleString()}
          icon={Eye}
          change={`+${stats.monthlyViews} este mes`}
          changeType="positive"
        />
      </div>

      {/* Contenido reciente */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Blogs recientes */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Blogs Recientes</CardTitle>
              <CardDescription>Últimos artículos publicados</CardDescription>
            </div>
            <Link href="/admin/blog">
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Blog
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBlogs.map((blog) => (
                <div key={blog.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{blog.title}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant={blog.status === 'published' ? 'default' : 'secondary'}>
                        {blog.status === 'published' ? 'Publicado' : 'Borrador'}
                      </Badge>
                      <span className="text-xs text-gray-500">{blog.views} vistas</span>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Videos recientes */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Videos Recientes</CardTitle>
              <CardDescription>Últimos videos subidos</CardDescription>
            </div>
            <Link href="/admin/videos">
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Video
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentVideos.map((video) => (
                <div key={video.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{video.title}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant={video.status === 'published' ? 'default' : 'secondary'}>
                        {video.status === 'published' ? 'Publicado' : 'Borrador'}
                      </Badge>
                      <span className="text-xs text-gray-500">{video.views} vistas</span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {video.duration} min
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charlas próximas */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Charlas Próximas</CardTitle>
            <CardDescription>Eventos programados</CardDescription>
          </div>
          <Link href="/admin/charlas">
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Nueva Charla
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingCharlas.map((charla) => (
              <div key={charla.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">{charla.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{charla.speaker}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-xs text-gray-500">
                      📅 {charla.date.toLocaleDateString()} - {charla.time}
                    </span>
                    <span className="text-xs text-gray-500">
                      📍 {charla.location}
                    </span>
                    <span className="text-xs text-gray-500">
                      👥 {charla.currentAttendees}/{charla.maxAttendees}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Badge variant={charla.registrationOpen ? 'default' : 'secondary'}>
                    {charla.registrationOpen ? 'Abierto' : 'Cerrado'}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
