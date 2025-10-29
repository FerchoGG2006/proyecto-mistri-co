"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MediaLibrary } from '@/components/ui/media-library';
import { RichTextEditor } from '@/components/ui/rich-text-editor';
import { 
  Upload, 
  Image as ImageIcon, 
  Video, 
  FileText,
  Settings,
  BarChart3
} from 'lucide-react';

export default function MediaPage() {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [showEditor, setShowEditor] = useState(false);

  const handleFileSelect = (file: any) => {
    setSelectedFile(file);
    setShowEditor(true);
  };

  const handleFileInsert = (file: any) => {
    // Aquí podrías insertar el archivo en un editor activo
    console.log('Insertar archivo:', file);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Biblioteca de Medios</h1>
          <p className="text-gray-600">Gestiona imágenes, videos y documentos</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Configuración
          </Button>
          <Button variant="outline">
            <BarChart3 className="h-4 w-4 mr-2" />
            Estadísticas
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Biblioteca de Medios */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Archivos Multimedia</CardTitle>
              <CardDescription>
                Sube y organiza tus archivos multimedia
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MediaLibrary
                onSelect={handleFileSelect}
                onInsert={handleFileInsert}
              />
            </CardContent>
          </Card>
        </div>

        {/* Panel de Información */}
        <div className="space-y-6">
          {/* Estadísticas Rápidas */}
          <Card>
            <CardHeader>
              <CardTitle>Estadísticas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-blue-500" />
                  <span className="text-sm">Imágenes</span>
                </div>
                <span className="font-semibold">24</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-red-500" />
                  <span className="text-sm">Videos</span>
                </div>
                <span className="font-semibold">8</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-gray-500" />
                  <span className="text-sm">Documentos</span>
                </div>
                <span className="font-semibold">12</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Total</span>
                  <span className="font-semibold">44 archivos</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Uso de Almacenamiento */}
          <Card>
            <CardHeader>
              <CardTitle>Almacenamiento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Usado</span>
                  <span>2.4 GB</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Disponible</span>
                  <span>1.6 GB</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Acciones Rápidas */}
          <Card>
            <CardHeader>
              <CardTitle>Acciones Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full justify-start" variant="outline">
                <Upload className="h-4 w-4 mr-2" />
                Subir Archivos
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <ImageIcon className="h-4 w-4 mr-2" />
                Optimizar Imágenes
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Generar Reporte
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Modal de Editor */}
      {showEditor && selectedFile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold">Editor de Contenido</h2>
              <Button
                variant="outline"
                onClick={() => setShowEditor(false)}
              >
                Cerrar
              </Button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Vista Previa</h3>
                  {selectedFile.type === 'image' ? (
                    <img
                      src={selectedFile.url}
                      alt={selectedFile.alt}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Video className="h-16 w-16 text-gray-400" />
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Información del Archivo</h3>
                  <div className="space-y-2 text-sm">
                    <div><strong>Nombre:</strong> {selectedFile.name}</div>
                    <div><strong>Tipo:</strong> {selectedFile.type}</div>
                    <div><strong>Tamaño:</strong> {selectedFile.size} bytes</div>
                    <div><strong>Subido:</strong> {selectedFile.uploadedAt.toLocaleDateString()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
