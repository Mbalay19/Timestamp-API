# 🕐 Timestamp Microservice

**FreeCodeCamp Backend Development and APIs Certification Project**

Un microservicio que convierte fechas entre diferentes formatos: timestamps Unix y cadenas UTC.

## 🚀 Demo en Vivo

- **URL del proyecto:** `https://tu-proyecto.herokuapp.com` (actualizar con tu URL)
- **Código fuente:** [GitHub Repository](https://github.com/Mbalay19/timestamp-microservice)

## 📋 Funcionalidades

✅ Convierte timestamps Unix a fechas UTC  
✅ Convierte cadenas de fecha a timestamps Unix  
✅ Maneja fechas inválidas con mensajes de error  
✅ Devuelve fecha actual cuando no se proporciona parámetro  
✅ API REST con respuestas JSON  
✅ Interfaz web para testing  

## 🛠️ Tecnologías Utilizadas

- **Backend:** Node.js, Express.js
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Herramientas:** dotenv, CORS
- **Despliegue:** Heroku/Railway/Render

## 📡 Uso de la API

### Endpoint Principal

```
GET /api/:date?
```

### Parámetros Válidos

| Tipo | Ejemplo | Descripción |
|------|---------|-------------|
| Vacío | `/api/` | Devuelve fecha actual |
| Unix Timestamp | `/api/1451001600000` | Milisegundos desde epoch |
| Cadena de Fecha | `/api/2015-12-25` | Formato parseable por `new Date()` |

### Respuestas

**✅ Fecha válida:**
```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

**❌ Fecha inválida:**
```json
{
  "error": "Invalid Date"
}
```

## 🧪 Ejemplos de Uso

```bash
# Fecha actual
curl https://tu-proyecto.herokuapp.com/api/

# Timestamp Unix
curl https://tu-proyecto.herokuapp.com/api/1451001600000

# Cadena de fecha
curl https://tu-proyecto.herokuapp.com/api/2015-12-25

# Fecha inválida
curl https://tu-proyecto.herokuapp.com/api/invalid-date
```

## 🏃‍♂️ Instalación y Ejecución

### Prerrequisitos
- Node.js (v14 o superior)
- npm

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Mbalay19/timestamp-microservice.git
   cd timestamp-microservice
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   # Editar .env con tus valores
   ```

4. **Ejecutar el servidor**
   ```bash
   # Producción
   npm start
   
   # Desarrollo (con auto-recarga)
   npm run dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📁 Estructura del Proyecto

```
timestamp-microservice/
├── server.js          # Servidor principal Express
├── package.json       # Dependencias y scripts
├── .env.example       # Variables de entorno ejemplo
├── .gitignore         # Archivos ignorados por Git
├── views/
│   └── index.html     # Interfaz web de prueba
├── public/            # Archivos estáticos (opcional)
└── README.md          # Documentación
```

## 🔧 Variables de Entorno

Crea un archivo `.env` basado en `.env.example`:

```env
PORT=3000
NODE_ENV=development
```

## 🧪 Testing

El proyecto incluye una interfaz web interactiva para probar la API:

1. Visita `http://localhost:3000`
2. Usa los botones de prueba para diferentes casos
3. Verifica las respuestas JSON en tiempo real

## 🚀 Despliegue

### Heroku

```bash
# Instalar Heroku CLI
# Crear app
heroku create tu-timestamp-microservice

# Configurar variables
heroku config:set NODE_ENV=production

# Desplegar
git push heroku main
```

### Railway

```bash
# Conectar con Railway
railway login
railway init
railway up
```

## ✅ Cumplimiento de Requisitos FCC

- [x] ✅ Proporciona proyecto propio (no URL de ejemplo)
- [x] ✅ `/api/:date?` con fecha válida devuelve JSON con clave `unix`
- [x] ✅ `/api/:date?` con fecha válida devuelve JSON con clave `utc`
- [x] ✅ `/api/1451001600000` devuelve el formato correcto
- [x] ✅ Maneja fechas parseables por `new Date(date_string)`
- [x] ✅ Fechas inválidas devuelven `{error: "Invalid Date"}`
- [x] ✅ Parámetro vacío devuelve fecha actual con clave `unix`
- [x] ✅ Parámetro vacío devuelve fecha actual con clave `utc`

## 🎨 Características del Diseño

- 🎨 **Paleta de colores:** Azul-celeste profesional
- 🔤 **Tipografía:** JetBrains Mono (monospace)
- 📱 **Responsive:** Adaptable a dispositivos móviles
- ✨ **Interactivo:** Efectos hover y animaciones suaves
- 🔍 **Testing integrado:** Interfaz para probar API

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.

## 👨‍💻 Autor

**Mathias Balay**
- GitHub: [Mbalay19](https://github.com/Mbalay19)
- FreeCodeCamp: [Tu perfil FCC](https://www.freecodecamp.org/TU_USUARIO)

## 🏆 Proyecto FreeCodeCamp

Este proyecto forma parte del currículum **"Backend Development and APIs"** de FreeCodeCamp.

**Certificación:** [APIs and Microservices](https://www.freecodecamp.org/learn/back-end-development-and-apis/)

---

⭐ **¡Dale una estrella si este proyecto te ayudó!** ⭐
