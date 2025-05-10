import { Loader } from 'lucide-react'
import React from 'react'

function LoadingMaterials() {
  return (
    <div className="flex items-center justify-center gap-2 text-purple-500 py-8">
    <Loader className="h-5 w-5 animate-spin" />
    <p className="font-medium">Loading materials...</p>
  </div>
  )
}

export default LoadingMaterials