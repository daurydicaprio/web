# Plan de Desarrollo - Sitio Web Daury DiCaprio

## 📋 Resumen del Proyecto

Sitio web personal profesional para **Daury DiCaprio** enfocado en tres pilares: Finanzas, Nutrición y Salud Mental. Incluye portafolio de proyectos, servicios profesionales y sistema de contacto.

**URL de Formspree:** https://formspree.io/f/xykpraag  
**Dominio objetivo:** daurydicaprio.com (o similar)  
**Hosting:** GitHub Pages

---

## 🗂️ Estructura de Archivos

```
/
├── index.html                    # Página principal
├── politica-privacidad.html      # Política de privacidad
├── aviso-legal.html             # Términos y condiciones
├── style.css                    # Estilos principales
├── script.js                    # JavaScript y validaciones
├── plan.md                      # Este documento
└── README.md                    # Instrucciones para GitHub Pages
```

---

## 🎨 Diseño y Estilo

### Paleta de Colores
- **Primario:** `#111827` (Negro oscuro)
- **Secundario:** `#1e3a8a` (Azul marino)
- **Texto principal:** `#111827`
- **Texto secundario:** `#6b7280`
- **Fondo:** `#ffffff`
- **Bordes:** `#e5e7eb`
- **Éxito:** `#059669` (Verde)
- **Error:** `#dc2626` (Rojo)

### Tipografía
- **Fuente:** Poppins (Google Fonts)
- **Pesos:** 300, 400, 500, 600, 700

### Diseño Responsive
- Desktop: 1200px+ (container max-width)
- Tablet: 768px-900px
- Mobile: < 768px

---

## 📄 Secciones del Sitio

### 1. Header
- Logo centrado con padding superior de 50px
- Enlace al inicio

### 2. Hero
- **Título:** "¿Te interesa mejorar tus finanzas, tu salud y tu futuro?"
- **Subtitle:** "Aprende cómo mejorar tu calidad de vida. Si no ahora, ¿cuándo?"
- **Descripción:** Texto motivacional con borde azul lateral
- **Botones:** "Proyectos" (primario) y "Hola" (outline)
- **Imagen:** Foto de espacio de trabajo (Unsplash) con flip horizontal
- **Layout:** Grid 1.2fr / 0.8fr para mejor proporción

### 3. Prólogo
- Fondo oscuro gradiente (#1a1f2e → #0f1520)
- Poema personal filosófico
- Hashtags: #dosmilsiempre #verygoodforlife
- Icono de libro en círculo

### 4. Holentia (Filosofía)
- 4 pilares con iconos: Mente, Relaciones, Cuerpo, Finanzas
- Conectores visuales entre pilares
- Conclusión: Bienestar → Paz → Felicidad

### 5. ¿Quién soy?
- Layout split: Imagen izquierda / Texto derecha
- Descripción personal
- Lista de adjetivos

### 6. Servicios
- **6 servicios con tarjetas:**
  1. Email Profesional - $50/año
  2. Asesorías Personalizadas - $80/hora
  3. Mantenimiento Web - $150/mes *
  4. Creación VPS - $200 *
  5. Optimización Pagespeed - $400 *
  6. Sitio Web WordPress - $500 *
- Asterisco (*) indica precio variable
- Info card tipo prólogo con condiciones
- CTA: Botón "Contáctame sin compromiso"

### 7. Proyectos
- Grid de 6 tarjetas con logos
- Efecto hover: grayscale → color
- Links a proyectos activos

### 8. Contacto
- Formulario con 3 campos:
  - Nombre (2-50 caracteres, solo letras)
  - Email (máx 100 caracteres, validación regex)
  - Mensaje (10-500 caracteres, contador)
- Validación JavaScript en tiempo real
- Integración Formspree: https://formspree.io/f/xykpraag
- Links a redes sociales (X, IG, YT)

### 9. Footer
- Leyenda: "Hecho con ❤ 🇩🇴 #VERyGoodforlife"
- Links: Política de privacidad · Aviso legal

---

## 🔒 Seguridad Implementada

### Formulario de Contacto
1. **Validación HTML5:**
   - `minlength` y `maxlength` en todos los campos
   - `pattern` para nombre (solo letras y espacios)
   - `required` en todos los campos

2. **Validación JavaScript:**
   - Validación regex para email
   - Validación en tiempo real (blur e input)
   - Contador de caracteres para mensaje
   - Mensajes de error específicos
   - Estados visuales (error/valid)

3. **Anti-spam:**
   - Botón deshabilitado durante envío
   - Mensaje de "Enviando..." 
   - Prevención de doble envío

### Protección General
- Uso de HTTPS obligatorio
- Sin cookies de terceros
- Headers de seguridad (configurar en GitHub Pages)
- Formspree maneja la seguridad del backend

---

## 📱 Funcionalidades JavaScript

1. **Scroll Reveal:** Elementos aparecen al hacer scroll
2. **Efectos Hover:** Botones, tarjetas, imágenes
3. **Validación de Formulario:** Como se describe arriba
4. **Ripple Effect:** En botones (efecto visual)

---

## 🚀 Configuración GitHub Pages

### Pasos para Publicar:

1. **Crear repositorio:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/tuusuario/daurydicaprio.git
   git push -u origin main
   ```

2. **Activar GitHub Pages:**
   - Ir a Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / root
   - Guardar

3. **Dominio personalizado:**
   - Configurar DNS: CNAME apuntando a tuusuario.github.io
   - Agregar archivo CNAME con: daurydicaprio.com
   - Activar HTTPS en GitHub Pages

### Archivo CNAME
Crear archivo `CNAME` en raíz con contenido:
```
daurydicaprio.com
```

---

## 🔧 Mejoras Futuras Sugeridas

### SEO
- [ ] Agregar meta tags Open Graph
- [ ] Crear sitemap.xml
- [ ] Agregar schema.org markup
- [ ] Optimizar imágenes (WebP)
- [ ] Lazy loading para imágenes

### Accesibilidad
- [ ] Agregar skip links
- [ ] Mejorar contraste en algunos elementos
- [ ] Añadir aria-labels donde falten
- [ ] Test con lectores de pantalla

### Rendimiento
- [ ] Minificar CSS y JS
- [ ] Optimizar imágenes
- [ ] Implementar service worker
- [ ] Agregar precarga de fuentes

### Funcionalidades
- [ ] Modo oscuro/claro
- [ ] Múltiples idiomas
- [ ] Blog integrado
- [ ] Analytics (Google Analytics o Plausible)

---

## ⚠️ Notas Importantes

1. **Formspree:** El formulario está configurado con la URL https://formspree.io/f/xykpraag. Verificar que funcione correctamente tras desplegar.

2. **Enlaces de proyectos:** Algunos proyectos tienen href="#" (placeholder). Actualizar con URLs reales antes de publicar.

3. **Redes sociales:** Los links a X, Instagram y YouTube están vacíos (#). Completar con URLs reales.

4. **Imágenes externas:** Se usan imágenes de Unsplash. Considerar descargar y alojar localmente para mejor rendimiento.

5. **Zona horaria:** El sitio indica UTC-4 (Santo Domingo). Verificar que coincida con tu zona horaria actual.

---

## 📞 Información de Contacto

**Horario:** Lunes a Viernes, 9:00 AM - 4:00 PM (UTC-4)  
**Email:** A través del formulario de contacto  
**Respuesta:** 24-48 horas hábiles

---

## ✅ Checklist Pre-Lanzamiento

- [ ] Revisar todos los enlaces funcionen
- [ ] Probar formulario de contacto
- [ ] Verificar diseño responsive en móvil
- [ ] Revisar ortografía en todo el contenido
- [ ] Confirmar política de privacidad y aviso legal
- [ ] Configurar dominio personalizado
- [ ] Activar HTTPS
- [ ] Configurar Formspree (verificar email de notificación)
- [ ] Agregar a Google Search Console
- [ ] Crear redes sociales (si no existen)

---

**Versión:** 1.0  
**Fecha:** Febrero 2026  
**Autor:** Creado con asistencia de Opencode AI