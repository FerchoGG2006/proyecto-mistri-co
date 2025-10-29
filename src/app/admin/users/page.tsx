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
  User,
  Mail,
  Calendar,
  Shield,
  Filter
} from 'lucide-react';
import { AdminUser } from '@/types/admin';

// Datos de ejemplo - en producción vendrían de la base de datos
const mockUsers: AdminUser[] = [
  {
    id: '1',
    email: 'admin@mistri.com',
    name: 'Administrador Principal',
    role: 'admin',
    lastLogin: new Date('2024-01-15'),
    createdAt: new Date('2024-01-01')
  },
  {
    id: '2',
    email: 'editor@mistri.com',
    name: 'Editor de Contenido',
    role: 'editor',
    lastLogin: new Date('2024-01-14'),
    createdAt: new Date('2024-01-05')
  },
  {
    id: '3',
    email: 'viewer@mistri.com',
    name: 'Visualizador',
    role: 'viewer',
    lastLogin: new Date('2024-01-10'),
    createdAt: new Date('2024-01-10')
  }
];

export default function UsersManagementPage() {
  const [users, setUsers] = useState<AdminUser[]>(mockUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(false);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    
    return matchesSearch && matchesRole;
  });

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'admin':
        return <Badge className="bg-red-100 text-red-800">Administrador</Badge>;
      case 'editor':
        return <Badge className="bg-blue-100 text-blue-800">Editor</Badge>;
      case 'viewer':
        return <Badge className="bg-gray-100 text-gray-800">Visualizador</Badge>;
      default:
        return <Badge>{role}</Badge>;
    }
  };

  const getRoleDescription = (role: string) => {
    switch (role) {
      case 'admin':
        return 'Acceso completo al panel de administración';
      case 'editor':
        return 'Puede crear y editar contenido';
      case 'viewer':
        return 'Solo puede ver el contenido';
      default:
        return '';
    }
  };

  const handleDeleteUser = (userId: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  const handleRoleChange = (userId: string, newRole: string) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, role: newRole as 'admin' | 'editor' | 'viewer' }
        : user
    ));
  };

  const stats = {
    total: users.length,
    admin: users.filter(u => u.role === 'admin').length,
    editor: users.filter(u => u.role === 'editor').length,
    viewer: users.filter(u => u.role === 'viewer').length,
    active: users.filter(u => {
      const daysSinceLogin = (Date.now() - u.lastLogin.getTime()) / (1000 * 60 * 60 * 24);
      return daysSinceLogin <= 30;
    }).length
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Usuarios</h1>
          <p className="text-gray-600">Administra los usuarios del panel de administración</p>
        </div>
        <Link href="/admin/users/new">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Nuevo Usuario
          </Button>
        </Link>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-sm text-gray-600">Total Usuarios</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">{stats.admin}</div>
            <p className="text-sm text-gray-600">Administradores</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{stats.editor}</div>
            <p className="text-sm text-gray-600">Editores</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-600">{stats.viewer}</div>
            <p className="text-sm text-gray-600">Visualizadores</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">{stats.active}</div>
            <p className="text-sm text-gray-600">Activos (30 días)</p>
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
                  placeholder="Buscar usuarios..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="all">Todos los roles</option>
                <option value="admin">Administradores</option>
                <option value="editor">Editores</option>
                <option value="viewer">Visualizadores</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Usuarios */}
      <div className="space-y-4">
        {filteredUsers.map((user) => (
          <Card key={user.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                    {getRoleBadge(user.role)}
                  </div>
                  
                  <p className="text-gray-600 mb-3">{getRoleDescription(user.role)}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      {user.email}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Último acceso: {user.lastLogin.toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      Creado: {user.createdAt.toLocaleDateString()}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 ml-4">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                    className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="admin">Administrador</option>
                    <option value="editor">Editor</option>
                    <option value="viewer">Visualizador</option>
                  </select>
                  <Link href={`/admin/users/${user.id}/edit`}>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDeleteUser(user.id)}
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

      {filteredUsers.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-gray-500">No se encontraron usuarios con los filtros aplicados.</p>
          </CardContent>
        </Card>
      )}

      {/* Información sobre roles */}
      <Card>
        <CardHeader>
          <CardTitle>Información sobre Roles</CardTitle>
          <CardDescription>
            Descripción de los diferentes tipos de usuarios
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-red-600" />
                <h4 className="font-medium">Administrador</h4>
              </div>
              <p className="text-sm text-gray-600">
                Acceso completo al panel de administración. Puede gestionar usuarios, 
                configuraciones y todo el contenido.
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Edit className="h-5 w-5 text-blue-600" />
                <h4 className="font-medium">Editor</h4>
              </div>
              <p className="text-sm text-gray-600">
                Puede crear, editar y publicar contenido (blog, videos, charlas). 
                No puede gestionar usuarios ni configuraciones.
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-gray-600" />
                <h4 className="font-medium">Visualizador</h4>
              </div>
              <p className="text-sm text-gray-600">
                Solo puede ver el contenido y estadísticas. No puede crear ni editar nada.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
