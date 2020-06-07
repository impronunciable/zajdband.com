---
description: "La primera parte de la consigna, elegir un objeto que nos represente, puede parecer una pregunta de entrevista de trabajo
cual `Qué animal serías?`. Sin embargo, tomarnos un tiempo para pensar en esto puede ayudarnos a entender un poco más
sobre nosotros mismos."
socialImage: "/photo.jpg"
title: 'Relaciodan #2: La frambuesa parlanchina'
date: "2020-06-06T16:23:35-05:00"
template: "post"
draft: false
slug: /relaciodan-2-la-frambuesa-parlanchina/
author: Dan
layout: post
category: relaciodan
tags:
  - relaciodan
  - raspberry pi
  - tensorflow
---

Esta es la segunda entrega de una serie de dinámicas de la [Escuela Relacional](https://instagram.com/escuela.relacional) en las que
estoy participando. Ya está disponible [el primer artículo](https://zajdband.com/relaciodan-1-a-traves-del-algoritmo/).

## Parte I: Identidad

La primera parte de la consigna, elegir un objeto que nos represente, puede parecer una pregunta de entrevista de trabajo
cual "Qué animal serías?". Sin embargo, tomarnos un tiempo para pensar en esto puede ayudarnos a entender un poco más
sobre nosotros mismos.

Después de pensarlo largamente y con ayuda de [Ana](https://twitter.com/anamisbernal) decidí ir por un objeto que pasa
la mayor parte del tiempo en un cajón, más precisamente en el que denominamos __el cajón de la tecnología__.

![Raspi](/raspi.jpg)

El objeto en cuestión es una denominada __Raspberry PI__. La [Raspi](https://www.raspberrypi.org/) (para los amigos), es una computadora muy chiquita
en tamaño y muy barata (unos 30 dólares) que fue inventada en el Reino Unido para enseñar informática en las escuelas.

Por qué elegí este objeto? no porque me considere a mi mismo como una máquina ni mucho menos sino porque la Raspberry PI
es usada mayoritariamente para experimentar y eso es lo que más me gusta hacer con la tecnología. Es muy simple convertir
la Raspi en una consola de videojuegos, un centro multimedia, un servidor de aplicaciones web o lo que se nos ocurra.
Esto me vino muy bien para la segunda parte de la dinámica.

## Parte II: Repetición

Luego de seleccionar el objeto se nos pidió que realicemos al menos 30 registros del objeto en distintos momentos. Acá
es donde mi vagancia y falta de tiempo me vinieron al pelo y donde voy a empezar a mostrarles codiguito, no se preocupen.

El concepto fue el siguiente:

>> En vez de repetir el registro del objeto desde mi perspectiva intenté que el objeto interactúe con la gente y así
armar el registro de repeticiones.

### La receta

Para realizar la interacción entre mis compañeros y mi objeto se me ocurrió lo siguiente:

- Levantar un sitio web que corra en la Raspberry.
- Al entrar al sitio el objeto cuenta cosas de si mismo, muestra interacciones pasadas e invita a participar en el registro colectivo.
- Si la persona accede se realiza el registro y se guarda en la memoria del objeto.

### Abriendo el corazón (de la red de mi casa)

Lo primero que hice fue **quemar** una imagen de [Raspbian](https://www.raspberrypi.org/downloads/raspberry-pi-os/) que es una
distribución de Linux para Raspberry en una tarjeta SD y configurar el wifi con la red de mi casa para poder acceder sin
conectarla a un monitor y teclado (ya dije que soy vago).

Una vez conectada la Raspberry a la corriente con un cable para cargar el celu me conecté por SSH a mi objeto elegido y me aboqué
a instalar todo para correr mi servidorcito web. Para eso me puse a instalar:

- __nginx__: Para servir los requests.
- __Certbot__: Maneja los certificados SSL.
- __node.js__: Para el backend.
- __Cliente de [noip](https://www.noip.com/)__: Para rutear los DNS hacia la IP del router de mi casa que no es estática.

Una vez configurado todo este ambiente (me pueden [escribir](https://twitter.com/impronunciable) si necesitan una mano haciendo esto)
y emocionado porque los pedidos a mi página entraban directo a la maquinita que tenía a mi lado me puse a armar el sitio propiamente dicho.

### La experiencia de humano

Como dije antes, la idea era que la gente que entrara al sitio se llevara un poco del objeto y dejara su sensación registrada.
Por eso cuando se entraba al sitio (que ya no anda porque no da tener la raspi corriendo todo el día y mi router expuesto al COVID-19)
se veía algo así:

![Sitio en la Raspi](/raspi-site.jpg)

En la introducción el objeto se presenta no solo contando su historia sino con 2 datos de su presente. Por un lado
cuenta hace cuanto está despierto y por otro su temperatura actual.

Como comenté usé node.js para este ejercicio. Para obtener el tiempo de vigilia usé `process.uptime()` que retorna
la cantidad de segundos desde que el proceso se despertó. Para mostrar algo más natural que una cantidad en segundos
usé `date-fns` para que me de el tiempo relativo. Para la temperatura usé el módulo `pi-temperature` que creo no
requiere mucha explicación. Fue interesante recibir comentarios sobre la "alta temperatura" de la Raspi, creo que esto
ayudó a darle un carácter subjetivo al objeto.

Después de la selfie se muestra un listado de registros. Como se puede ver, cada registro cuenta con 2 datos: La localización
relative de la persona que entró al sitio respecto a la ubicación de casa y por otro lado el estado __emocional__ de la persona
capturado por el objeto.

Más abajo aparece la súplica de colaboración para participar del registro. Vamos a ver como se capturaron los registros que es lo que
probablemente te interese ahora.

### Atrápalos ya!

Al clickear en el botón se registraban 2 datapoints: Distancia y emoción.

#### Calculando la distancia

Para esto usé al querido objeto `navigator.geolocation`. El código para esto es bien simple:

```javascript
navigator.geolocation.getCurrentPosition(function(position) {
  const posicion = { lat: position.coords.latitude, lon: position.coords.longitude };
});
```

Como no me interesaba por privacidad ni por objetivo del ejercicio guardar la ubicación real de la persona sino la distancia a mi casa,
el servidor simplemente guardaba la distancia ente mi ubicación y ese punto. Usé el módulo `geo-distance` por vago pero una distancia
euclideana bastaba. Lo bueno de este módulo es que tiene funcionces que escupen el resultado en lenguaje natural.

```javascript
const Distance = require('geo-distance');
function getDistance(position) {
  const dis = Distance.between(home, position).human_readable().toString();
  return `Desde ${dis} de mi casa`;
}
```

#### Algo en tu cara me fascina

Como dijo Elvis Crespo algo en tu cara me da vida, será tu sonrisa? Esa es la pregunta que quería que se haga la Raspi
y no quería correr un algoritmo muy pesado en el server.

Lo que hice fue usar [Face API](https://github.com/justadudewhohacks/face-api.js) un modelo para [Tensorflow JS](https://www.tensorflow.org/js)
que nos permite ejecutar modelos de DeepLearning en el navegador 🤯.

Cuando la persona clickeaba en el botón, además de pedir permiso de geolocation también pedía permiso de acceso a la webcam
y usaba el algoritmo mirando la imagen hasta identificar una emoción.

El flujo para identificar la emoción en la cara del registrado es algo como esto (hay un poco más de código que metí para evitar
race conditions pero no viene al caso):

```javascript
  // Pido acceso al video y empiezo a "leer" las imágenes
  const videoElement = document.createElement('video');
  document.body.appendChild(videoElement);

  return navigator.mediaDevices.getUserMedia({ video: { facingMode:'user' } })
  .then(capture => {
    videoElement.srcObject = capture;
    videoElement.play();
  });

  // Cargo los modelos
  Promise.all([
    faceapi.nets.faceExpressionNet.loadFromUri('/models'),
    faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
  ]).then(detectFaces);

  // Detecto emociones
  function detectarEmocion() {
    // Cada 1 segundo tomo una foto
    const inter = setInterval(() => {
      faceapi.detectSingleFace(videoElement).withFaceExpressions()
      .then(res => {
        // Ordeno las expresiones por nivel de confianza del algoritmo y elijo la primera
        const [emocion, confianza] = Object.entries(res.expressions).sort((a, b) => b[1] - a[1])[0];
        // Si la confianza es más del 50% la envío y dejo de detectar
        if (confianza >= 0.5) {
          clearInterval(inter);
          sendData(emocion, confianza);
        }
      });
    }, 1000);
  }
```

Una vez enviada la información al servidor, en vez de hablar de porcentaje de confianza lo pongo en términos más naturales
y hago la traducción al español con una función simple:

```javascript
var expressions = {
  neutral: 'tranquile',
  happy: 'alegre', 
  sad: 'triste',
  angry: 'enojade', 
  fearful: 'miedose',
  disgusted: 'a disgusto',
  surprised: 'sorprendido'

}

function getExpression (exp) {
  var adj = 'un poco'
  if (exp.value > 0.75) adj = 'bastante'
  if (exp.value > 0.9) adj = 'demasiado' 
  return `${adj} ${expressions[exp.name] || 'tranquilo'}`
}
```

Luego se guardan los datos en la base (un archivo JSON) para que el próximo
participante pueda leer los últimos 5 y así también armar mi base de datos de
repeticiones no tan repetidas.

### No tan rápido

Esta fue la segunda entrega de esta serie de ejercicios que estamos haciendo en la
[Escuela Relacional](https://instagram.com/escuela.relacional) ❤️. Mis agradecimientos a
la gente hermosa que la compone y me permite ser parte de esto.
