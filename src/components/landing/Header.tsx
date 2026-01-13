<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
    /* --- ESTILOS CSS --- */
    :root {
        --header-bg: #ffffff;
        --header-text: #1a1a1a;
        --accent-color: #0071e3; /* Azul estilo tech/premium */
        --border-color: #e5e5e5;
        --transition-speed: 0.3s;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        padding-top: 70px; /* Espacio para que el header fixed no tape contenido */
    }

    /* Contenedor Principal del Header */
    .site-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 70px;
        background-color: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px); /* Efecto vidrio esmerilado */
        border-bottom: 1px solid var(--border-color);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all var(--transition-speed) ease;
    }

    .header-container {
        width: 100%;
        max-width: 1200px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    /* Logo */
    .logo {
        font-size: 24px;
        font-weight: 700;
        color: var(--header-text);
        text-decoration: none;
        letter-spacing: -0.5px;
        z-index: 1001;
    }

    /* Navegación Desktop */
    .desktop-nav ul {
        display
