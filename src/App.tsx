import { useState } from 'react'
import { Canvas } from './pages/canvas'
import './common/scss/var.css'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Canvas />
      </DndProvider>
    </div>
  );
}

export default App
