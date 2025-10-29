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
  MapPin,
  Users,
  Clock,
  DollarSign,
  Filter
} from 'lucide-react';
import { Charla } from '@/types/admin';

// Datos de ejemplo - en producción vendrían de la base de datos
const mockCharlas: Charla[] = [
  {
    id: '1',
    title: 'Liderazgo en la Era Digital',
    description: 'Cómo adaptar el liderazgo tradicional a los desafíos del mundo digital.',
    speaker: 'Carlos Mistri',
    speakerBio: 'Consultor especializado en transformación organizacional con más de 15 años de experiencia.',
    speakerImage: '/images/speakers/carlos-mistri.jpg',
    date: new Date('2024-02-15'),
    time: '18:00',
    duration: 90,
    location: 'Centro de Convenciones Buenos Aires',
    isVirtual: false,
    maxAttendees: 100,
    currentAttendees: 45,
    status: 'scheduled',
    registrationOpen: true,
    price: 0,
    currency: 'ARS',
    tags: ['liderazgo', 'digital', 'transformación'],
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  },
  {
    id: '2',
    title: 'Gestión del Cambio Organizacional',
    description: 'Estrategias prácticas para implementar cambios exitosos en tu organización.',
    speaker: 'María González',
    speakerBio: 'Especialista en desarrollo organizacional y gestión del cambio.',
    speakerImage: '/images/speakers/maria-gonzalez.jpg',
    date: new Date('2024-02-20'),
    time: '19:00',
    duration: 120,
    location: 'Online',
    isVirtual: true,
    virtualLink: 'https://meet.google.com/ejemplo',
    maxAttendees: 200,
    currentAttendees: 78,
    status: 'scheduled',
    registrationOpen: true,
    price: 0,
    currency: 'ARS',
    tags: ['cambio', 'organización', 'estrategia'],
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-12')
  },
  {
    id: '3',
    title: 'Desarrollo de Equipos de Alto Rendimiento',
    description: 'Técnicas para formar y mantener equipos productivos y motivados.',
    speaker: 'Ana Rodríguez',
    speakerBio: 'Coach ejecutiva y consultora en desarrollo de equipos.',
    speakerImage: '/images/speakers/ana-rodriguez.jpg',
    date: new Date('2024-01-25'),
    time: '17:30',
    duration: 90,
    location: 'Hotel Sheraton',
    isVirtual: false,
    maxAttendees: 80,
    currentAttendees: 80,
    status: 'completed',
    registrationOpen: false,
    price: 0,
    currency: 'ARS',
    tags: ['equipos', 'desarrollo', 'productividad'],
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-25')
  }
];

export default function CharlasManagementPage() {
  const [charlas, setCharlas] = useState<Charla[]>(mockCharlas);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  const filteredCharlas = charlas.filter(charla => {
    const matchesSearch = charla.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         charla.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         charla.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || charla.status === statusFilter;
    const matchesType = typeFilter === 'all' || 
                       (typeFilter === 'virtual' && charla.isVirtual) ||
                       (typeFilter === 'presencial' && !charla.isVirtual);
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'scheduled':
        return <Badge className="bg-blue-100 text-blue-800">Programada</Badge>;
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">Completada</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800">Cancelada</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const handleDeleteCharla = (charlaId: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar esta charla?')) {
      setCharlas(charlas.filter(charla => charla.id !== charlaId));
    }
  };

  const handleToggleRegistration = (charlaId: string) => {
    setCharlas(charlas.map(charla => 
      charla.id === charlaId 
        ? { ...charla, registrationOpen: !charla.registrationOpen }
        : charla
    ));
  };

  const stats = {
    total: charlas.length,
    scheduled: charlas.filter(c => c.status === 'scheduled').length,
    completed: charlas.filter(c => c.status === 'completed').length,
    virtual: charlas.filter(c => c.isVirtual).length,
    presencial: charlas.filter(c => !c.isVirtual).length,
    totalAttendees: charlas.reduce((sum, charla) => sum + charla.currentAttendees, 0),
    upcoming: charlas.filter(c => c.status === 'scheduled' && c.date > new Date()).length
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Charlas</h1>
          <p className="text-gray-600">Administra eventos, conferencias y charlas</p>
        </div>
        <Link href="/admin/charlas/new">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Nueva Charla
          </Button>
        </Link>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-sm text-gray-600">Total Charlas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{stats.scheduled}</div>
            <p className="text-sm text-gray-600">Programadas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
            <p className="text-sm text-gray-600">Completadas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-purple-600">{stats.virtual}</div>
            <p className="text-sm text-gray-600">Virtuales</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-orange-600">{stats.presencial}</div>
            <p className="text-sm text-gray-600">Presenciales</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-indigo-600">{stats.totalAttendees}</div>
            <p className="text-sm text-gray-600">Asistentes</p>
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
                  placeholder="Buscar charlas..."
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
                <option value="scheduled">Programadas</option>
                <option value="completed">Completadas</option>
                <option value="cancelled">Canceladas</option>
              </select>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="all">Todos los tipos</option>
                <option value="virtual">Virtuales</option>
                <option value="presencial">Presenciales</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Charlas */}
      <div className="space-y-4">
        {filteredCharlas.map((charla) => (
          <Card key={charla.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{charla.title}</h3>
                    {getStatusBadge(charla.status)}
                    {charla.isVirtual ? (
                      <Badge variant="outline" className="text-blue-600">Virtual</Badge>
                    ) : (
                      <Badge variant="outline" className="text-green-600">Presencial</Badge>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-3">{charla.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {charla.speaker}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {charla.date.toLocaleDateString()} {charla.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {charla.duration} min
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {charla.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {charla.currentAttendees}/{charla.maxAttendees} asistentes
                    </div>
                    {charla.price > 0 && (
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        ${charla.price} {charla.currency}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {charla.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleToggleRegistration(charla.id)}
                    className={charla.registrationOpen ? 'text-green-600' : 'text-gray-500'}
                  >
                    {charla.registrationOpen ? 'Cerrar Inscripciones' : 'Abrir Inscripciones'}
                  </Button>
                  <Link href={`/admin/charlas/${charla.id}/edit`}>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href={charla.isVirtual ? charla.virtualLink || '#' : `/charlas/${charla.id}`} target="_blank">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDeleteCharla(charla.id)}
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

      {filteredCharlas.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-gray-500">No se encontraron charlas con los filtros aplicados.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
