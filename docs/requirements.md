# AC.ABALLO — Requerimientos del sitio (v1)

## 1) Objetivo del sitio
Crear una página web clara, cálida y profesional que:
- Comunique la visión de Ac.aballo: conexión, bienestar emocional y horsemanship.
- Explique programas por tipo de persona (bebés → adultos → familias → condición especial).
- Genere acciones: agendar visita / contactar / elegir programa.
- Sea simple de mantener (sitio estático en HTML/CSS/JS por ahora).

## 2) Audiencias principales (quién llega al sitio)
1) Padres/madres buscando una experiencia segura y formativa para niños (incluye bebés desde 11 meses).
2) Adolescentes y jóvenes interesados en equitación o conexión emocional.
3) Adultos buscando horsemanship, confianza, liderazgo y relación caballo–humano.
4) Familias buscando una experiencia conjunta.
5) Personas con condiciones especiales (lenguaje respetuoso, sin llamarlo terapia).

## 3) Mensajes clave (deben aparecer y repetirse con coherencia)
- “Transformando corazones a través de los caballos.”
- “Aquí no solo se aprende a montar: se aprende a sentir, regular, confiar y avanzar.”
- “El caballo como maestro, espejo y guía.”
- “Conexión antes que imposición.”
- “Somos familia. Somos manada. Somos emoción.”

## 4) Tono y estilo
- Lenguaje: Español, cálido, humano, claro (sin términos clínicos).
- Enfoque: seguridad + confianza + conexión emocional + técnica responsable.
- Evitar: marketing agresivo, promesas terapéuticas, lenguaje de “cura” o “tratamiento”.

## 5) Restricción importante (texto requerido)
Debe aparecer en Programas y/o FAQ y, si aplica, cerca de la oferta para condición especial:

> “No utilizamos el término terapia. Hablamos de sesiones de interacción y acompañamiento con caballos,
> respetando los ritmos y necesidades individuales.”

## 6) CTAs (acciones) obligatorias
- CTA principal: “Agendar una visita” (lleva a Contacto).
- CTA secundario: “Explorar programas” (lleva a Programas).
- En cada página interior: al menos un CTA para contactar/agendar.

## 7) Páginas (v1) y propósito
### index.html (Inicio)
Debe incluir:
- Hero con visión + 2 botones (Agendar / Programas).
- Bloque “Aquí no solo se aprende a montar”.
- Sección “Elige tu experiencia” (por audiencia).
- Nota “no terapia”.
- CTA final.

### pages/about.html (Quiénes somos)
Debe incluir:
- ¿Quiénes somos? (escuela + espacio emocional).
- Origen (Florida finales 2020).
- Filosofía (pilares).
- Misión, visión, valores.
- CTA a Fundadores / Contacto.

### pages/programs.html (Programas)
Debe incluir:
- Lista clara de programas/servicios.
- Secciones por programa con anclas (#clases, #horsemanship, etc.).
- Sección por audiencia (#bebes, #ninos, #adultos, #familias, #condicion).
- Nota “no terapia”.
- CTA a Contacto.

### pages/founders.html (Fundadores)
Debe incluir:
- Álvaro: trayectoria + enfoque “escuchar, entender, acompañar”.
- Luisana: guía emocional + educación consciente.
- CTA a Contacto / Programas.

### pages/contact.html (Contacto)
Debe incluir:
- Formulario (temporal) con campos: nombre, email, teléfono, interés, mensaje.
- Texto de guía para que escriban edad/objetivo/horarios.
- Nota: “Luego conectamos a email/WhatsApp/Google Forms”.

### pages/faq.html (FAQ)
Debe incluir:
- Edad mínima.
- Experiencia previa.
- Qué traer.
- Opciones sin montar.
- Aclaración “no terapia”.
- Seguridad por niveles.
- Cómo agendar.

## 8) Navegación (header) requerida
Links:
- Inicio
- Quiénes somos
- Programas
- Fundadores
- Contacto
- FAQ

## 9) Requerimientos técnicos (v1)
- Sitio estático con HTML/CSS/JS.
- Responsive (mobile-first).
- Accesibilidad básica: etiquetas aria, contraste aceptable, botones clickeables.
- JS mínimo: año automático + menú móvil.
- Sin librerías externas por ahora.

## 10) Contenido pendiente por solicitar a la escuela (lista)
- Dirección exacta / ciudad / mapa.
- Horarios de atención (si los publican).
- Teléfono / WhatsApp.
- Email oficial.
- Políticas (cancelación, puntualidad, edad, seguridad).
- Fotos: logo, hero, galería.
- Precios: público o “solo por contacto”.
- Idioma futuro: inglés (bilingüe) sí/no.

## 11) Criterios de “listo” para v1
- Todas las páginas abren sin errores.
- Navegación funciona en desktop y mobile.
- CTA lleva correctamente a Contacto/Programas.
- Se respeta el lenguaje (sin “terapia”).
- Diseño consistente y legible.
