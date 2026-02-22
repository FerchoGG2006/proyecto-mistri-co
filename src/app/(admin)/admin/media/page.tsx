'use client';

import { useState, useEffect } from 'react';
import { Upload, Search, Trash2, FileText, Image as ImageIcon, Video as VideoIcon, X, Filter } from 'lucide-react';

import { useLanguage } from '@/hooks/use-language';
import { getMedia, createMedia, deleteMedia } from '../actions';

export default function MediaPage() {
    const { t } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [mediaList, setMediaList] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [uploadData, setUploadData] = useState({ name: '', url: '', type: 'image' });

    useEffect(() => {
        refreshMedia();
    }, []);

    const refreshMedia = async () => {
        setLoading(true);
        try {
            const data = await getMedia();
            setMediaList(data);
        } catch (error) {
            console.error('Error fetching media:', error);
        } finally {
            setLoading(false);
        }
    };

    const filteredMedia = mediaList.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = filterType === 'all' || item.type === filterType;
        return matchesSearch && matchesType;
    });

    const handleUpload = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createMedia(uploadData);
            setIsUploadModalOpen(false);
            setUploadData({ name: '', url: '', type: 'image' });
            refreshMedia();
        } catch (error) {
            console.error('Error uploading media:', error);
            alert('Error al registrar el medio.');
        }
    };

    const handleDelete = async (id: number) => {
        if (confirm('¿Estás seguro de eliminar este archivo?')) {
            try {
                await deleteMedia(id);
                refreshMedia();
            } catch (error) {
                console.error('Error deleting media:', error);
                alert('Error al eliminar el archivo.');
            }
        }
    };

    const getIcon = (type: string) => {
        switch (type) {
            case 'image': return <ImageIcon className="h-8 w-8 text-blue-500" />;
            case 'video': return <VideoIcon className="h-8 w-8 text-purple-500" />;
            case 'pdf': return <FileText className="h-8 w-8 text-red-500" />;
            default: return <FileText className="h-8 w-8 text-gray-500" />;
        }
    };

    return (
        <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Header */}
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex-1 min-w-0">
                        <h1 className="text-2xl font-semibold text-gray-900">Gestión de Medios</h1>
                    </div>
                    <div className="mt-4 flex md:mt-0 md:ml-4">
                        <button
                            onClick={() => setIsUploadModalOpen(true)}
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <Upload className="mr-2 h-4 w-4" />
                            Subir Archivo
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <div className="max-w-lg flex-1">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Buscar archivos..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Filter className="h-4 w-4 text-gray-400" />
                        <select
                            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                        >
                            <option value="all">Todos los tipos</option>
                            <option value="image">Imágenes</option>
                            <option value="video">Videos</option>
                            <option value="pdf">Documentos PDF</option>
                        </select>
                    </div>
                </div>

                {/* Grid */}
                <div className="mt-8">
                    {loading ? (
                        <div className="p-8 text-center text-gray-500">Cargando medios...</div>
                    ) : filteredMedia.length > 0 ? (
                        <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                            {filteredMedia.map((item) => (
                                <div key={item.id} className="group relative">
                                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 flex items-center justify-center p-4">
                                        {item.type === 'image' ? (
                                            <img
                                                src={item.url}
                                                alt={item.name}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        ) : (
                                            getIcon(item.type)
                                        )}
                                        <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="p-1 bg-red-600 text-white rounded-full hover:bg-red-700 shadow-sm"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700 font-medium truncate max-w-[150px]">
                                                {item.name}
                                            </h3>
                                            <p className="mt-1 text-xs text-gray-500 uppercase">{item.type}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
                            <FileText className="mx-auto h-12 w-12 text-gray-400" />
                            <h3 className="mt-2 text-sm font-medium text-gray-900">No hay archivos</h3>
                            <p className="mt-1 text-sm text-gray-500">Comienza subiendo un nuevo archivo multimedia.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Upload Modal */}
            {isUploadModalOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" onClick={() => setIsUploadModalOpen(false)}>
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                            <div className="absolute top-0 right-0 pt-4 pr-4">
                                <button
                                    onClick={() => setIsUploadModalOpen(false)}
                                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                        Registrar Nuevo Medio
                                    </h3>
                                    <p className="mt-1 text-xs text-gray-500">
                                        Nota: Por ahora registramos la URL del archivo alojado externamente.
                                    </p>
                                    <form onSubmit={handleUpload} className="mt-6 space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Nombre del Archivo</label>
                                            <input
                                                type="text"
                                                required
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                value={uploadData.name}
                                                onChange={(e) => setUploadData({ ...uploadData, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">URL pública</label>
                                            <input
                                                type="url"
                                                required
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                value={uploadData.url}
                                                onChange={(e) => setUploadData({ ...uploadData, url: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Tipo de Archivo</label>
                                            <select
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                value={uploadData.type}
                                                onChange={(e) => setUploadData({ ...uploadData, type: e.target.value })}
                                            >
                                                <option value="image">Imagen</option>
                                                <option value="video">Video</option>
                                                <option value="pdf">Documento PDF</option>
                                            </select>
                                        </div>
                                        <div className="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse gap-3">
                                            <button
                                                type="submit"
                                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                            >
                                                Registrar
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setIsUploadModalOpen(false)}
                                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
                                            >
                                                Cancelar
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

