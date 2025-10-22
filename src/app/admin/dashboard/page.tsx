"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Video, 
  Calendar, 
  Eye, 
  Users,
  Settings
} from 'lucide-react';

export default function AdminDashboard() {
  const stats = {
    totalBlogs: 12,
    publishedBlogs: 8,
    totalVideos: 6,
    totalCharlas: 3,
    totalViews: 15420,
    monthlyViews: 3240,
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
          change="5 publicados"
          changeType="positive"
        />
        <StatCard
          title="Charlas Programadas"
          value={stats.totalCharlas}
          icon={Calendar}
          change="2 próximas"
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

      {/* Acciones rápidas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Acciones Rápidas</CardTitle>
            <CardDescription>Gestiona el contenido de tu sitio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button className="w-full justify-start" variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                Crear Nuevo Blog
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Video className="mr-2 h-4 w-4" />
                Subir Video
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Programar Charla
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Configuración</CardTitle>
            <CardDescription>Administra la configuración del sitio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button className="w-full justify-start" variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Gestionar Usuarios
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Configuración General
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mensaje de bienvenida */}
      <Card>
        <CardHeader>
          <CardTitle>¡Bienvenido al Panel de Administración!</CardTitle>
          <CardDescription>
            Panel de administración de Mistri&Co creado desde cero
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Este es un panel de administración simple y funcional. Desde aquí puedes gestionar 
            el contenido de tu sitio web, ver estadísticas y configurar diferentes aspectos 
            de la plataforma.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
