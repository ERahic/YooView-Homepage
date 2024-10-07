"use client" // Client component due to API's required for youtube video display and information
import React from "react"
import ReactDOM from "react-dom/client"
import "./globals.css"
import App from "next/app"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)