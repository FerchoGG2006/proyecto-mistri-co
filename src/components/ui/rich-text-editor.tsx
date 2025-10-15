'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Bold, 
  Italic, 
  Underline, 
  List, 
  ListOrdered, 
  Quote, 
  Link, 
  Image, 
  Code,
  Eye,
  Edit,
  Save,
  Undo,
  Redo
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface RichTextEditorProps {
  content: string
  onChange: (content: string) => void
  placeholder?: string
  className?: string
}

export function RichTextEditor({ 
  content, 
  onChange, 
  placeholder = "Escribe tu contenido aquí...",
  className 
}: RichTextEditorProps) {
  const [isPreview, setIsPreview] = useState(false)
  const editorRef = useRef<HTMLDivElement>(null)
  const [history, setHistory] = useState<string[]>([content])
  const [historyIndex, setHistoryIndex] = useState(0)

  useEffect(() => {
    if (editorRef.current && !isPreview) {
      editorRef.current.innerHTML = content
    }
  }, [content, isPreview])

  const updateContent = (newContent: string) => {
    onChange(newContent)
    const newHistory = history.slice(0, historyIndex + 1)
    newHistory.push(newContent)
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
  }

  const executeCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value)
    if (editorRef.current) {
      updateContent(editorRef.current.innerHTML)
    }
  }

  const handleInput = () => {
    if (editorRef.current) {
      updateContent(editorRef.current.innerHTML)
    }
  }

  const undo = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1
      setHistoryIndex(newIndex)
      onChange(history[newIndex])
      if (editorRef.current) {
        editorRef.current.innerHTML = history[newIndex]
      }
    }
  }

  const redo = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1
      setHistoryIndex(newIndex)
      onChange(history[newIndex])
      if (editorRef.current) {
        editorRef.current.innerHTML = history[newIndex]
      }
    }
  }

  const insertLink = () => {
    const url = prompt('Ingresa la URL:')
    if (url) {
      executeCommand('createLink', url)
    }
  }

  const insertImage = () => {
    const url = prompt('Ingresa la URL de la imagen:')
    if (url) {
      executeCommand('insertImage', url)
    }
  }

  const formatButtons = [
    { icon: Bold, command: 'bold', title: 'Negrita' },
    { icon: Italic, command: 'italic', title: 'Cursiva' },
    { icon: Underline, command: 'underline', title: 'Subrayado' },
    { icon: Code, command: 'code', title: 'Código' },
    { icon: List, command: 'insertUnorderedList', title: 'Lista' },
    { icon: ListOrdered, command: 'insertOrderedList', title: 'Lista numerada' },
    { icon: Quote, command: 'formatBlock', value: 'blockquote', title: 'Cita' },
  ]

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Editor de Contenido</CardTitle>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={undo}
              disabled={historyIndex === 0}
            >
              <Undo className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={redo}
              disabled={historyIndex === history.length - 1}
            >
              <Redo className="h-4 w-4" />
            </Button>
            <Button
              variant={isPreview ? "default" : "outline"}
              size="sm"
              onClick={() => setIsPreview(!isPreview)}
            >
              {isPreview ? <Edit className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
              {isPreview ? 'Editar' : 'Vista previa'}
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <Tabs value={isPreview ? "preview" : "edit"} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="edit" onClick={() => setIsPreview(false)}>
              <Edit className="h-4 w-4 mr-2" />
              Editor
            </TabsTrigger>
            <TabsTrigger value="preview" onClick={() => setIsPreview(true)}>
              <Eye className="h-4 w-4 mr-2" />
              Vista previa
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="edit" className="mt-4">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-2 p-3 border border-gray-200 rounded-t-lg bg-gray-50">
              {formatButtons.map((button) => (
                <Button
                  key={button.command}
                  variant="ghost"
                  size="sm"
                  onClick={() => executeCommand(button.command, button.value)}
                  title={button.title}
                  className="h-8 w-8 p-0"
                >
                  <button.icon className="h-4 w-4" />
                </Button>
              ))}
              <div className="w-px h-6 bg-gray-300 mx-1" />
              <Button
                variant="ghost"
                size="sm"
                onClick={insertLink}
                title="Insertar enlace"
                className="h-8 w-8 p-0"
              >
                <Link className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={insertImage}
                title="Insertar imagen"
                className="h-8 w-8 p-0"
              >
                <Image className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Editor */}
            <div
              ref={editorRef}
              contentEditable
              onInput={handleInput}
              className="min-h-[400px] p-4 border border-gray-200 border-t-0 rounded-b-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
              style={{ whiteSpace: 'pre-wrap' }}
              data-placeholder={placeholder}
            />
          </TabsContent>
          
          <TabsContent value="preview" className="mt-4">
            <div className="min-h-[400px] p-4 border border-gray-200 rounded-lg bg-white">
              {content ? (
                <div 
                  className="prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              ) : (
                <p className="text-gray-500 italic">{placeholder}</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
