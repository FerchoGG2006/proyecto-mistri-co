"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Save, 
  Upload,
  Mail,
  Phone,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube
} from 'lucide-react';

export default function SettingsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [settings, setSettings] = useState({
    // Información general
    siteName: 'Mistri&Co',
    siteDescription: 'Consultora especializada en transformación organizacional',
    siteUrl: 'https://mistri-co.com',
    
    // Información de contacto
    email: 'contacto@mistriconsultora.com',
    phone: '+54 9 362 464-9700',
    address: 'Buenos Aires, Argentina',
    
    // Redes sociales
    facebook: '',
    twitter: '',
    linkedin: '',
    instagram: '',
    youtube: '',
    
    // SEO
    metaTitle: 'Mistri&Co - Consultora en Transformación Organizacional',
    metaDescription: 'Especialistas en desarrollo de equipos, liderazgo y transformación organizacional. Charlas, cursos y consultoría.',
    metaKeywords: 'consultoría, liderazgo, transformación organizacional, desarrollo de equipos',
    
    // Configuración del blog
    postsPerPage: '6',
    enableComments: true,
    moderateComments: true,
    
    // Configuración de charlas
    enableRegistration: true,
    requireEmailConfirmation: true,
    maxAttendeesPerCharla: '100',
    
    // Configuración de videos
    enableVideoComments: true,
    autoPlayVideos: false,
    
    // Configuración de notificaciones
    notifyNewRegistrations: true,
    notifyNewComments: true,
    notifyNewPosts: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular guardado
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // En producción, aquí harías la llamada a la API
    console.log('Guardando configuración:', settings);
    
    setIsSubmitting(false);
    alert('Configuración guardada exitosamente');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Configuración</h1>
          <p className="text-gray-600">Administra la configuración general del sitio</p>
        </div>
        <Button onClick={handleSubmit} disabled={isSubmitting}>
          <Save className="h-4 w-4 mr-2" />
          {isSubmitting ? 'Guardando...' : 'Guardar Cambios'}
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Información general */}
          <Card>
            <CardHeader>
              <CardTitle>Información General</CardTitle>
              <CardDescription>
                Configuración básica del sitio web
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="siteName">Nombre del Sitio</Label>
                <Input
                  id="siteName"
                  value={settings.siteName}
                  onChange={(e) => handleInputChange('siteName', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="siteDescription">Descripción</Label>
                <Textarea
                  id="siteDescription"
                  value={settings.siteDescription}
                  onChange={(e) => handleInputChange('siteDescription', e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="siteUrl">URL del Sitio</Label>
                <Input
                  id="siteUrl"
                  value={settings.siteUrl}
                  onChange={(e) => handleInputChange('siteUrl', e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Información de contacto */}
          <Card>
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
              <CardDescription>
                Datos de contacto que aparecen en el sitio
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={settings.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  value={settings.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Dirección</Label>
                <Input
                  id="address"
                  value={settings.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Redes sociales */}
          <Card>
            <CardHeader>
              <CardTitle>Redes Sociales</CardTitle>
              <CardDescription>
                Enlaces a las redes sociales de la empresa
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="facebook">Facebook</Label>
                <Input
                  id="facebook"
                  value={settings.facebook}
                  onChange={(e) => handleInputChange('facebook', e.target.value)}
                  placeholder="https://facebook.com/mistri-co"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter</Label>
                <Input
                  id="twitter"
                  value={settings.twitter}
                  onChange={(e) => handleInputChange('twitter', e.target.value)}
                  placeholder="https://twitter.com/mistri_co"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input
                  id="linkedin"
                  value={settings.linkedin}
                  onChange={(e) => handleInputChange('linkedin', e.target.value)}
                  placeholder="https://linkedin.com/company/mistri-co"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <Input
                  id="instagram"
                  value={settings.instagram}
                  onChange={(e) => handleInputChange('instagram', e.target.value)}
                  placeholder="https://instagram.com/mistri_co"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="youtube">YouTube</Label>
                <Input
                  id="youtube"
                  value={settings.youtube}
                  onChange={(e) => handleInputChange('youtube', e.target.value)}
                  placeholder="https://youtube.com/@mistri-co"
                />
              </div>
            </CardContent>
          </Card>

          {/* SEO */}
          <Card>
            <CardHeader>
              <CardTitle>SEO</CardTitle>
              <CardDescription>
                Configuración para motores de búsqueda
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="metaTitle">Meta Título</Label>
                <Input
                  id="metaTitle"
                  value={settings.metaTitle}
                  onChange={(e) => handleInputChange('metaTitle', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="metaDescription">Meta Descripción</Label>
                <Textarea
                  id="metaDescription"
                  value={settings.metaDescription}
                  onChange={(e) => handleInputChange('metaDescription', e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="metaKeywords">Palabras Clave</Label>
                <Input
                  id="metaKeywords"
                  value={settings.metaKeywords}
                  onChange={(e) => handleInputChange('metaKeywords', e.target.value)}
                  placeholder="consultoría, liderazgo, transformación"
                />
              </div>
            </CardContent>
          </Card>

          {/* Configuración del blog */}
          <Card>
            <CardHeader>
              <CardTitle>Configuración del Blog</CardTitle>
              <CardDescription>
                Opciones para el sistema de blog
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="postsPerPage">Posts por página</Label>
                <Input
                  id="postsPerPage"
                  type="number"
                  value={settings.postsPerPage}
                  onChange={(e) => handleInputChange('postsPerPage', e.target.value)}
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="enableComments"
                  checked={settings.enableComments}
                  onChange={(e) => handleInputChange('enableComments', e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="enableComments">Habilitar comentarios</Label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="moderateComments"
                  checked={settings.moderateComments}
                  onChange={(e) => handleInputChange('moderateComments', e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="moderateComments">Moderar comentarios</Label>
              </div>
            </CardContent>
          </Card>

          {/* Configuración de charlas */}
          <Card>
            <CardHeader>
              <CardTitle>Configuración de Charlas</CardTitle>
              <CardDescription>
                Opciones para el sistema de charlas y eventos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="enableRegistration"
                  checked={settings.enableRegistration}
                  onChange={(e) => handleInputChange('enableRegistration', e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="enableRegistration">Habilitar inscripciones</Label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="requireEmailConfirmation"
                  checked={settings.requireEmailConfirmation}
                  onChange={(e) => handleInputChange('requireEmailConfirmation', e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="requireEmailConfirmation">Confirmación por email</Label>
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxAttendeesPerCharla">Máximo asistentes por charla</Label>
                <Input
                  id="maxAttendeesPerCharla"
                  type="number"
                  value={settings.maxAttendeesPerCharla}
                  onChange={(e) => handleInputChange('maxAttendeesPerCharla', e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Configuración de videos */}
          <Card>
            <CardHeader>
              <CardTitle>Configuración de Videos</CardTitle>
              <CardDescription>
                Opciones para el sistema de videos educativos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="enableVideoComments"
                  checked={settings.enableVideoComments}
                  onChange={(e) => handleInputChange('enableVideoComments', e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="enableVideoComments">Habilitar comentarios en videos</Label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="autoPlayVideos"
                  checked={settings.autoPlayVideos}
                  onChange={(e) => handleInputChange('autoPlayVideos', e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="autoPlayVideos">Reproducción automática</Label>
              </div>
            </CardContent>
          </Card>

          {/* Notificaciones */}
          <Card>
            <CardHeader>
              <CardTitle>Notificaciones</CardTitle>
              <CardDescription>
                Configura qué notificaciones recibir
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="notifyNewRegistrations"
                  checked={settings.notifyNewRegistrations}
                  onChange={(e) => handleInputChange('notifyNewRegistrations', e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="notifyNewRegistrations">Nuevas inscripciones</Label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="notifyNewComments"
                  checked={settings.notifyNewComments}
                  onChange={(e) => handleInputChange('notifyNewComments', e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="notifyNewComments">Nuevos comentarios</Label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="notifyNewPosts"
                  checked={settings.notifyNewPosts}
                  onChange={(e) => handleInputChange('notifyNewPosts', e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="notifyNewPosts">Nuevos posts</Label>
              </div>
            </CardContent>
          </Card>
        </div>
      </form>
    </div>
  );
}
