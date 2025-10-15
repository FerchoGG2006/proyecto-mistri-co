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
  Users, 
  Calendar,
  MapPin,
  Clock,
  DollarSign,
  Tag,
  Eye
} from 'lucide-react';
import { Charla } from '@/types/admin';
import Link from 'next/link';

export default function CharlaManagement() {
  const [charlas, setCharlas] = useState<Charla[]>([]);
  const [filteredCharlas, setFilteredCharlas] = useState<Charla[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'scheduled' | 'completed' | 'cancelled'>('all');
  const [typeFilter, setTypeFilter] = useState<'all' | 'presencial' | 'virtual'>('all');

  useEffect(() => {
    loadCharlas();
  }, []);

  useEffect(() => {
    filterCharlas();
  }, [charlas, searchTerm, statusFilter, typeFilter]);

  const loadCharlas = async () => {
    // Simulación de datos - en producción sería una llamada a la API
    const mockCharlas: Charla[] = [
      {
        id: '1',
        title: 'Workshop: Transformación Digital',
        description: 'Taller práctico sobre transformación digital para empresas',
        speaker: 'Dr. María González',
        speakerBio: 'Experta en transformación digital con 15 años de experiencia',
        speakerImage: '/images/speakers/maria-gonzalez.jpg',
        date: new Date('2024-10-25'),
        time: '18:00',
        duration: 120,
        location: 'Centro de Convenciones Buenos Aires',
        isVirtual: false,
        maxAttendees: 50,
        currentAttendees: 32,
        status: 'scheduled',
        registrationOpen: true,
        price: 5000,
        currency: 'ARS',
        tags: ['transformación digital', 'workshop', 'empresas'],
        createdAt: new Date('2024-10-01'),
        updatedAt: new Date('2024-10-01'),
      },
      {
        id: '2',
        title: 'Marketing Digital para PYMES',
        description: 'Estrategias efectivas de marketing digital para pequeñas empresas',
        speaker: 'Lic. Carlos Rodríguez',
        speakerBio: 'Especialista en marketing digital y crecimiento empresarial',
        date: new Date('2024-11-02'),
        time: '19:00',
        duration: 90,
        location: 'Virtual',
        isVirtual: true,
        virtualLink: 'https://zoom.us/j/123456789',
        maxAttendees: 100,
        currentAttendees: 67,
        status: 'scheduled',
        registrationOpen: true,
        price: 0,
        currency: 'ARS',
        tags: ['marketing', 'digital', 'pymes'],
        createdAt: new Date('2024-10-05'),
        updatedAt: new Date('2024-10-05'),
      },
      {
        id: '3',
        title: 'Análisis Financiero Avanzado',
        description: 'Técnicas profesionales para el análisis de estados financieros',
        speaker: 'CPA Ana Martínez',
        speakerBio: 'Contadora Pública especializada en análisis financiero',
        date: new Date('2024-09-15'),
        time: '18:30',
        duration: 120,
        location: 'Universidad de Buenos Aires',
        isVirtual: false,
        maxAttendees: 40,
        currentAttendees: 40,
        status: 'completed',
        registrationOpen: false,
        price: 3000,
        currency: 'ARS',
        tags: ['finanzas', 'análisis', 'contabilidad'],
        createdAt: new Date('2024-08-20'),
        updatedAt: new Date('2024-09-15'),
      },
      {
        id: '4',
        title: 'Liderazgo en Tiempos de Crisis',
        description: 'Cómo liderar equipos durante períodos de incertidumbre',
        speaker: 'Mg. Roberto Silva',
        speakerBio: 'Master en Administración de Empresas y experto en liderazgo',
        date: new Date('2024-08-30'),
        time: '18:00',
        duration: 90,
        location: 'Centro Empresarial Palermo',
        isVirtual: false,
        maxAttendees: 30,
        currentAttendees: 0,
        status: 'cancelled',
        registrationOpen: false,
        price: 4000,
        currency: 'ARS',
        tags: ['liderazgo', 'crisis', 'equipos'],
        createdAt: new Date('2024-07-15'),
        updatedAt: new Date('2024-08-25'),
      },
    ];

    setCharlas(mockCharlas);
  };

  const filterCharlas = () => {
    let filtered = charlas;

    // Filtrar por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter(charla => 
        charla.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        charla.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        charla.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
        charla.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filtrar por estado
    if (statusFilter !== 'all') {
      filtered = filtered.filter(charla => charla.status === statusFilter);
    }

    // Filtrar por tipo
    if (typeFilter !== 'all') {
      filtered = filtered.filter(charla => 
        typeFilter === 'virtual' ? charla.isVirtual : !charla.isVirtual
      );
    }

    setFilteredCharlas(filtered);
  };

  const handleDelete = async (charlaId: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar esta charla?')) {
      setCharlas(charlas.filter(charla => charla.id !== charlaId));
    }
  };

  const toggleRegistration = async (charlaId: string) => {
    setCharlas(charlas.map(charla => 
      charla.id === charlaId 
        ? { ...charla, registrationOpen: !charla.registrationOpen }
        : charla
    ));
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'scheduled':
        return <Badge className="bg-blue-100 text-blue-800">Programada</Badge>;
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">Completada</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800">Cancelada</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const formatCurrency = (amount: number, currency: string) => {
    if (amount === 0) return 'Gratis';
    return `${currency === 'ARS' ? '$' : '$'} ${amount.toLocaleString()}`;
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Charlas</h1>
          <p className="text-gray-600 mt-1">Administra tus eventos y charlas</p>
        </div>
        <Link href="/admin/charlas/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nueva Charla
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
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-mistri-blue-500"
              >
                <option value="all">Todos los estados</option>
                <option value="scheduled">Programadas</option>
                <option value="completed">Completadas</option>
                <option value="cancelled">Canceladas</option>
              </select>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-mistri-blue-500"
              >
                <option value="all">Todos los tipos</option>
                <option value="presencial">Presencial</option>
                <option value="virtual">Virtual</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de charlas */}
      <div className="grid gap-6">
        {filteredCharlas.map((charla) => (
          <Card key={charla.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{charla.title}</h3>
                    {getStatusBadge(charla.status)}
                    {charla.isVirtual ? (
                      <Badge variant="outline" className="text-blue-600">Virtual</Badge>
                    ) : (
                      <Badge variant="outline" className="text-green-600">Presencial</Badge>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-3">{charla.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="font-medium">{charla.speaker}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span>{charla.date.toLocaleDateString()} - {charla.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span>{charla.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span>{charla.duration} minutos</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span>{charla.currentAttendees}/{charla.maxAttendees} asistentes</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="h-4 w-4 text-gray-400" />
                      <span className="font-medium">{formatCurrency(charla.price, charla.currency)}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="h-4 w-4 text-gray-400" />
                    <div className="flex gap-1">
                      {charla.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={charla.registrationOpen ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {charla.registrationOpen ? 'Inscripciones Abiertas' : 'Inscripciones Cerradas'}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center gap-2 ml-4">
                  <Link href={`/admin/charlas/${charla.id}`}>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => toggleRegistration(charla.id)}
                    className={charla.registrationOpen ? "text-green-600" : "text-gray-600"}
                  >
                    <Users className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDelete(charla.id)}
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
          <CardContent className="p-12 text-center">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No se encontraron charlas</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || statusFilter !== 'all' || typeFilter !== 'all'
                ? 'Intenta ajustar los filtros de búsqueda'
                : 'Comienza creando tu primera charla'
              }
            </p>
            {!searchTerm && statusFilter === 'all' && typeFilter === 'all' && (
              <Link href="/admin/charlas/new">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Crear Primera Charla
                </Button>
              </Link>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
