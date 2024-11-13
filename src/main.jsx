//import react into the bundle
import React from 'react'
import {createRoot} from 'react-dom/client'  
import './index.css'
import Layout from './js/layout'


const root = createRoot(document.querySelector("#root"))

root.render(<Layout/>)
