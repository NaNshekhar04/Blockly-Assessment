import { useState } from 'react'
import './App.css'
import 'leaflet/dist/leaflet.css';
import {MapContainer, TileLayer, Marker} from "react-leaflet";
import "leaflet-routing-machine";
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './routes/HomePage/HomePage';
import MapPage from './routes/MapPage/MapPage';

function App() {
  
  const router = new createBrowserRouter([
  {
  path: "/",
  element: <HomePage/>
  },
  {
    path: "/map",
    element: <MapPage/>
  }
])
  return (
    <RouterProvider router={router}/>  
  )
}

export default App
