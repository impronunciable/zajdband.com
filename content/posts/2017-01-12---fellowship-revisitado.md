---
id: 230
title: Fellowship revisitado
date: 2017-01-12T13:50:42-05:00
author: Dan
template: post
draft: false
guid: https://zajdband.com/?p=230
slug: /fellowship-revisitado/
image: /wp-content/uploads/2017/01/ONlogotype_wide2.png
category: Fellowship
tags:
  - Coral
  - opennews
---

Siendo mañana mi último día como [Knight-Mozilla OpenNews Fellow](https://opennews.org/blog/introducing-2016-fellows/) siento la necesidad de hacer un repaso por estos últimos 10 meses para documentar aquello que hice, lo que dejé por la mitad y algunas cosas que me gustarían hacer en el futuro. Una aclaración importante es que si bien voy a hablar más que nada de proyectos, lo más importante que me llevo de este proceso es la gente que conocí, las experiencias que pude vivir y el aprendizaje que conlleva. Sin más introducción, esto es lo que estuve haciendo durante el año pasado:

## The Coral Project

La organización que me tocó para colaborar durante mi Fellowship es [The Coral Project](https://coralproject.net), un proyecto de Mozilla Foundation en colaboración con el New York Times y el Washington Post creado para generar software de código abierto, investigación y herramientas para mejorar la conversación online alrededor del mundo del periodismo. Apenas llegué al Coral me encontré no solo con un equipo super diverso y proactivo sino también con un grupo humano genial, haciendo más simple y agradable mi trabajo.

Lo genial (y también un poco aterrador) del encare del fellowship tanto desde OpenNews como el Coral Project es de total libertad frente a mi trabajo. Ellos creyeron que podía hacer cosas interesantes y creativas y me dieron las herramientas y el tiempo para que pueda desarrollarlas. Si bien tuve mucho tiempo para experimentar con ideas, algunas fructiferas y otras que no funcionaron, mi trabajo principal con el proyecto fue en el desarrollo del core de las herramientas Open Source que se ofrecen a medios de todo tamaño para mejorar sus comunidades.

### Trust

[<img class="aligncenter wp-image-232" src="https://zajdband.com/wp-content/uploads/2017/01/trust_screenshot-1024x579.png" alt="trust_screenshot" width="802" height="454" srcset="https://zajdband.com/wp-content/uploads/2017/01/trust_screenshot-1024x579.png 1024w, https://zajdband.com/wp-content/uploads/2017/01/trust_screenshot-300x170.png 300w, https://zajdband.com/wp-content/uploads/2017/01/trust_screenshot-768x435.png 768w, https://zajdband.com/wp-content/uploads/2017/01/trust_screenshot.png 1200w, https://zajdband.com/wp-content/uploads/2017/01/trust_screenshot-800x453.png 800w, https://zajdband.com/wp-content/uploads/2017/01/trust_screenshot-35x20.png 35w" sizes="(max-width: 802px) 100vw, 802px" />](https://zajdband.com/wp-content/uploads/2017/01/trust_screenshot.png)

[Trust](https://coralproject.net/products/trust.html) es una herramienta que permite, mediante la aplicación de filtros, entender mejor el comportamiento de comentadores en un sitio. La idea principal es que mediante la generación de listas de usuarios, filtrada según variables customizables, se pueden detectar patrones de comportamiento y engagement. Una vez identificadas las variables que nos interesan de un grupo de comentadores podemos crear una lista y tomar acciones, por ejemplo una vez que un lector entra o sale de ella.

Si bien ya se había comenzado con el desarrollo de Trust cuando empecé mi Fellowship, participé fuertemente del desarrollo de la herramienta, [especialmente desde el Front End](https://github.com/coralproject/cay/graphs/contributors). Tanto en Trust como en los subsiguientes proyectos en el Coral, usamos React y Redux para el Front End y Go, node.js y MongoDB en el Back End.

### Ask

[<img class="aligncenter size-large wp-image-233" src="https://zajdband.com/wp-content/uploads/2017/01/asking-1024x565.gif" alt="asking" width="1024" height="565" srcset="https://zajdband.com/wp-content/uploads/2017/01/asking-1024x565.gif 1024w, https://zajdband.com/wp-content/uploads/2017/01/asking-300x166.gif 300w, https://zajdband.com/wp-content/uploads/2017/01/asking-768x424.gif 768w, https://zajdband.com/wp-content/uploads/2017/01/asking-800x442.gif 800w, https://zajdband.com/wp-content/uploads/2017/01/asking-35x19.gif 35w" sizes="(max-width: 1024px) 100vw, 1024px" />](https://zajdband.com/wp-content/uploads/2017/01/asking.gif)

El primer proyecto en el que pude participar desde el comienzo fue [Ask](https://coralproject.net/products/ask.html). Como su nombre lo índica, la idea de este producto es permitir hacerle preguntas a la audiencia, manejar las respuestas y embeber las mejores para mostrar de nuevo en el sitio.

Como el Coral es un proyecto muy ambicioso, no se puede perder el tiempo. Como sabíamos que tanto para Ask como para otros proyectos íbamos a necesitar embeber widgets en sitios de terceros, a la semana de empezar el Fellowship, me puse a investigar buenas prácticas y nuevas ideas a la hora de crear embebibles y como resultado salió [un blogpost](https://zajdband.com/exploring-new-techniques-building-composable-widgets-for-the-web/), una pila de ideas gracias a los insights de [Ted Han](https://twitter.com/knowtheory) y mi acercamiento a [Preact](http://preactjs.com), un framework que me dio muchas satisfacciones durante el año (sí, un framework puede dar satisfacciones) y que terminé usando tanto en Ask como en proyectos personales. Así también conocí a [Jason](https://twitter.com/_developit) que es una gran inspiración respecto a como llevar un proyecto abierto.

Como yo había estado jugando con embeds fue natural trabajar con ese aspecto de Ask. Así trabajamos principalmente con [Pablo Cuadrado](https://twitter.com/pablocubico) en el [engine de embeds](https://github.com/coralproject/elkhorn), con resultados más que satisfactorios. De hecho todavía no sabemos bien como pero los embeds de ask muchas veces cargan más rápido que los sitios que lo hostean ?. Además de trabajar con los embeds, pasé un buen tiempo con el Front End de Ask, que convive con el de Trust y se llama [Cay](https://github.com/coralproject/cay).

Ask se encuentra en Beta y ya tuvimos experiencias de colaboraciones con medios, por ejemplo durante las elecciones en Estados Unidos.

### Talk

El último proyecto grande del año para el Coral Project y posiblemente el más esperado es [Talk](https://coralproject.net/products/talk.html). Así como Ask está dirigido a la comunicación unidireccional desde la audiencia hacia el medio, talk es una conversación. Es nuestra aproximación a la sección de comentarios de un sitio, pero lo que queremos es hacer un software configurable para que la caja de comentarios abajo de tu sitio deje de serlo y sea algo más apropiado para cada audiencia.

Talk se encuentra en pleno desarrollo y se espera una beta muy pronto. En este proyecto también trabajé en la programación del core pero así como en Ask, pude enfocarme, al menos por un tiempo, en un aspecto que me interesa en especial: La moderación. Desarrollé el sistema de moderación que luego fue integrado con el resto del admin de comentarios. Los temas que más me interesaron encarar fueron por un lado los tipos de input de usuario, donde jugué con reconocimiento y síntesis de voz, shortcuts y gestos touch y por otro lado la posibilidad de utilizar la aplicación en contextos donde el usuario se encuentra offline o con conectividad restringida. Así es como llegué a la comunidad [Offline first](http://offlinefirst.org/), de la que voy a hablar más adelante y al desarrollo de Progressive Web Apps.

Como todo lo que hacemos en el Coral, Talk es Open Source y el código está [disponible en GitHub](https://github.com/coralproject/talk).

### Front End alternativo para Ask

[<img class="aligncenter size-large wp-image-239" src="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.48.56-PM-1024x556.png" alt="Screen Shot 2017-01-12 at 12.48.56 PM" width="1024" height="556" srcset="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.48.56-PM-1024x556.png 1024w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.48.56-PM-300x163.png 300w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.48.56-PM-768x417.png 768w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.48.56-PM-800x434.png 800w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.48.56-PM-35x19.png 35w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.48.56-PM.png 1440w" sizes="(max-width: 1024px) 100vw, 1024px" />](https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.48.56-PM.png)

Cuando pensamos Ask, una de las metas desde la arquitectura fue la de separar el Front End del Back End y también por otro lado de la generación de los widgets (formularios y galerías). Uno de los efectos de esa decisión es la posibilidad de crear visualizaciones de datos y f0rmas de generar formularios sin usar la herramienta que hicimos desde el Coral Project.

Queriendo mostrar lo que es posible utilizando la API de Ask y también aplicando algunos trucos que aprendí haciendo la parte de Natural Language Processing de [GuriVR](https://gurivr.com), hice un [generador de formularios alternativo](https://impronunciable.github.io/askme/) que en vez de utilizar el típico drag & drop de widgets, intenta conversar con el periodista para hacerlo reflexionar sobre las preguntas y el tipo de input que va a ofrecer a los usuarios. [El código](https://github.com/impronunciable/askme) se encuentra en GitHub y hablé un poco sobre las inferencias de tipo de input en [un post para Source](https://source.opennews.org/en-US/articles/low-budget-natural-language-processing/).



### Ask WordPress Plugin

[<img class="aligncenter size-large wp-image-237" src="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-11.57.13-AM-1024x498.png" alt="Screen Shot 2017-01-12 at 11.57.13 AM" width="1024" height="498" srcset="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-11.57.13-AM-1024x498.png 1024w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-11.57.13-AM-300x146.png 300w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-11.57.13-AM-768x373.png 768w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-11.57.13-AM-800x389.png 800w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-11.57.13-AM-35x17.png 35w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-11.57.13-AM.png 1440w" sizes="(max-width: 1024px) 100vw, 1024px" />](https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-11.57.13-AM.png)



WordPress esa gran parte de la vida de los medios online y es por eso que crear integraciones para nuestros productos es una prioridad grande. Construí esta integración para embeber formularios y galerías de Ask así como administrarlos desde el admin de WordPress. El plugin y código van a estar disponible muy pronto.

### Ask bot

[<img class="aligncenter size-full wp-image-238" src="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.02.06-PM.png" alt="Screen Shot 2017-01-12 at 12.02.06 PM" width="711" height="300" srcset="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.02.06-PM.png 711w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.02.06-PM-300x127.png 300w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.02.06-PM-35x15.png 35w" sizes="(max-width: 711px) 100vw, 711px" />](https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.02.06-PM.png)



A raíz de una conversación con la gente de BuzzFeed Labs, hablando de su [BuzzBot](https://github.com/buzzfeed-openlab/buzzbot), se me ocurrió hacer un Ask Bot que, configurado apuntando a una instancia de Ask, conversa con usuarios que lo requieren para completar las encuestas del medio.

El código está en [GitHub](https://github.com/impronunciable/askbot) y estoy más que dispuesto a ayudar a implementarlo para cualquier usuario de Ask ?.

### Coral Native

[<img class="aligncenter wp-image-240" src="https://zajdband.com/wp-content/uploads/2017/01/quick.gif" alt="quick" width="292" height="553" />](https://zajdband.com/wp-content/uploads/2017/01/quick.gif)



Durante la primera "Coral Week" en el Washington Post, me tomé algunas horas para prototipar una aplicación nativa para el celular para administrar Trust, el primer producto del Coral Project, usando React Native además de agregar algunas pruebas de concepto para la moderación en Talk. Por ejemplo este gif muestra "Quick moderation" que permite la moderación de comentarios, usando las APIs de nuestros productos para moderar comentarios al estilo tinder.

Maté a este proyecto luego de esa semana porque no estaba alineado con el foco del Coral en ese momento y había otras prioridades por delante, sin embargo fue divertido y una buena prueba de concepto de lo que se puede hacer sin modificar el core del código del proyecto. La otra cosa que muestra este proyecto es la libertad con la que me pude mover en el Coral para experimentar gracias al apoyo de todo el equipo, especialmente de [Andrew](https://twitter.com/losowsky) y [David](https://twitter.com/daviderwin).

### Muddy

[<img class="aligncenter size-full wp-image-242" src="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.29.13-PM.png" alt="Screen Shot 2017-01-12 at 1.29.13 PM" width="597" height="448" srcset="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.29.13-PM.png 597w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.29.13-PM-300x225.png 300w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.29.13-PM-35x26.png 35w" sizes="(max-width: 597px) 100vw, 597px" />](https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.29.13-PM.png)

Como mencioné anteriormente, una de mis inquietudes a la hora de trabajar con Talk está relacionada con la moderación de comentarios. Antes de arrancar el proyecto formalmente tuve un tiempo para poder investigar y prototipar una aplicación de moderación de comentarios. Si bien esta aplicación no salió a la luz, varios de estos conceptos fueron incorporados en la interface de moderación de comentarios de Talk.

El nombre en clave de este prototipo es Muddy (en homenaje a Muddy Waters) y es lo que se conoce como una Progressive Web Application. La idea es hacer una aplicación de moderación que puedan usar no solo moderadores sino también periodistas con algo de tiempo, por ejemplo viajando en subte o en un avión. Como expliqué anteriormente tuve 2 metas principales a la hora de desarrollarla:

  * Que funcione bajo circunstancias de mala o nula conectividad
  * Que permita distintos tipos de input para emitir acciones de moderación para hacer eficiente el trabajo bajo diversos escenarios

Para lograr que funcione en "modo offline" utilicé nuevas tecnologías del navegador, haciendo una Progressive Web Application, que puede cachear recursos y sincronizar cuando el usuario vuelve a estar online. Respecto a los tipos de input trabajé con Speech Recognition, Atajos del teclado y gestos touch. También combiné esto con lo hecho en "Coral Native" añadiendo un "modo swipe" con tarjetas al estilo Tinder para hacer la moderación más amigable.

Durante mi [charla](https://www.acamica.com/charlas/45/un-electrizante-viaje-a-las-progressive-web-applications) sobre Progressive Web Apps en BAFrontend hablé un poco sobre el desarrollo de esta aplicación.

## Proyectos personales y otros experimentos

### GuriVR

[<img class="aligncenter size-large wp-image-246" src="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.53.17-PM-1024x559.png" alt="Screen Shot 2017-01-12 at 1.53.17 PM" width="1024" height="559" srcset="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.53.17-PM-1024x559.png 1024w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.53.17-PM-300x164.png 300w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.53.17-PM-768x419.png 768w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.53.17-PM-800x437.png 800w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.53.17-PM-35x19.png 35w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.53.17-PM.png 1440w" sizes="(max-width: 1024px) 100vw, 1024px" />](https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.53.17-PM.png)

Si hay un proyecto que identifica my fellowship, entonces es este. [GuriVR](https://gurivr.com) nació de una pregunta que me hice en MozFest 2015 después de ver geniales proyectos de Realidad Virtual: ¿Cuanto podemos simplificar el proceso de prototipado de experiencias de VR?. ¿Podemos hacerlo tan simple que un periodista (o cualquier humano que no sea programador gráfico) pueda hacer VR?. Esta pregunta se transformó en un par de prototipos para luego ser un [editor online](https://gurivr.com) de Realidad Virtual utilizando lenguaje natural como input en inglés y español, un [bot de Twitter](https://twitter.com/guri_vr) que toma tweets y los transforma a VR, un [bot de Slack](https://github.com/OpenNewsLabs/guri-slack) y muchas cosas más.

Si bien [escribí](http://gurivr.com/guide) [extensivamente](https://source.opennews.org/en-US/articles/virtual-reality-rest-us/) sobre el aspecto técnico, hay una parte fundamental de este proyecto y que está atado al espíritu del Fellowship es que fue desarrollado según mi nivel de interés durante el año, y como pueden ver en el siguiente gráfico mi interés es muy fluctuante

[<img class="aligncenter size-full wp-image-248" src="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.55.12-PM.png" alt="Screen Shot 2017-01-12 at 1.55.12 PM" width="998" height="277" srcset="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.55.12-PM.png 998w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.55.12-PM-300x83.png 300w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.55.12-PM-768x213.png 768w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.55.12-PM-800x222.png 800w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.55.12-PM-35x10.png 35w" sizes="(max-width: 998px) 100vw, 998px" />](https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.55.12-PM.png)

Además de estar atado a mi interés (y el de otra gente usandolo) este proyecto me sirvió para probar ideas que fui teniendo durante el año, es por eso que si bien fui aportando tiempo durante el año, hay 2 noches claves donde escribí las partes claves del proyecto:

La primera fue la noche de [Hacks/Hackers New York de Marzo](https://www.meetup.com/hacks-hackers-nyc/events/229647574/), yo venía con la idea de hacer VR simple para todos pero no venía con una certeza de como implementarlo. Durante esa Meetup, [Sisi Wei](https://twitter.com/sisiwei) de ProPublica mostró como traducen sus artículos a diferentes lenguajes usando Google Docs y estructurando las traducciones con [ArchieML](http://archieml.org/). Esa misma noche, luego de hacerle algunas preguntas al respecto a [Mike Tigas](https://twitter.com/mtigas), le puse un nombre al proyecto y empecé con la primera versión. Escribí tu historia en Google Docs, agregale anotaciones de ArchieML y obtené tu pieza de VR:



[<img class="aligncenter wp-image-249 size-full" src="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-2.08.32-PM.png" alt="Screen Shot 2017-01-12 at 2.08.32 PM" width="645" height="662" srcset="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-2.08.32-PM.png 645w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-2.08.32-PM-292x300.png 292w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-2.08.32-PM-35x35.png 35w" sizes="(max-width: 645px) 100vw, 645px" />](https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-2.08.32-PM.png)



La segunda noche fue la anterior a presentar Guri en la clase de [Miguel Paz](https://twitter.com/miguelpaz) en CUNY J-School. Si bien ya tenia este proyecto que tomaba un Google Docs anotado y devolvía una escena de Realidad Virtual, sentía que había una curva de aprendizaje muy grande para gente no acostumbrada a estructurar data (y también quería impresionar a los estudiantes). Entonces esa misma noche me puse a escribir un parser que tome lenguaje natural del mismo Google Docs (en vez de las anotaciones de ArchieML) y lo transforma en la experiencia de VR. El código que escribí esa noche (y un poco de la madrugada siguiente) es prácticamente lo que es hoy en día [la parte de NLP](https://github.com/OpenNewsLabs/guri-vr/blob/master/client/shared/nlp.js) en GuriVR.com.

Así como esas 2 noches cambiaron fuertemente el rumbo del proyecto basado en nuevas ideas que se me ocurrieron, hay muchas más noches, y muchos días que fueron agregando cada feature de Guri tal como existe hoy en día. Ese espíritu hands-on, que viene transmitida desde OpenNews ayudó a que pueda desarrollar mi creatividad y mis intereses en este producto que hoy en día tiene diversas aplicaciones.

Como extra, Guri me acercó a la comunidad de [A-Frame](https://aframe.io), el Framework desarrollado por Mozilla para hacer Realidad Virtual, y a sus creadores que fueron de gran ayuda durante todo el proceso y con quienes pude interactuar durante el año.

### Next.js

[<img class="aligncenter size-full wp-image-251" src="https://zajdband.com/wp-content/uploads/2017/01/next.png" alt="next" width="224" height="144" srcset="https://zajdband.com/wp-content/uploads/2017/01/next.png 224w, https://zajdband.com/wp-content/uploads/2017/01/next-35x23.png 35w" sizes="(max-width: 224px) 100vw, 224px" />](https://zajdband.com/wp-content/uploads/2017/01/next.png)



[Guillermo](https://twitter.com/rauchg) me mostró los conceptos principales de este Framework de Front End Universal, basado en React hace varios meses. Por eso después de pasar horas configurando un simple proyecto nuevo le pregunté si tenían planes de terminar de implementarlo. Así es como empecé a contribuir con [Next](https://github.com/zeit/next.js).

Este es uno de esos proyectos que disfruto a la hora de contribuir porque aprendo mucho del genial equipo de [Zeit](https://zeit.co) y a la vez me beneficio como usuario, un win-win.

### Isopo

[<img class="aligncenter size-full wp-image-252" src="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.03.34-PM.png" alt="Screen Shot 2017-01-12 at 3.03.34 PM" width="631" height="289" srcset="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.03.34-PM.png 631w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.03.34-PM-300x137.png 300w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.03.34-PM-35x16.png 35w" sizes="(max-width: 631px) 100vw, 631px" />](https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.03.34-PM.png)

Luego de que [Martín](https://twitter.com/tincho_for_ever) me mostrara la app de Inception para Android, durante la semana de trabajo con los fellows en Buenos Aires se me ocurrió hacer [Isopo](https://impronunciable.github.io/isopo/), una versión con tecnologías web y con filtros manejables por el usuario. La idea es que para hacer Realidad Aumentada no hace falta usar la cámara, sino que simplemente podemos escuchar lo que entra por el micrófono, aplicarle filtros y devolverlo a nuestros oidos, modificando nuestra percepción de la realidad.

### StoryTeller

[<img class="aligncenter size-large wp-image-253" src="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.07.10-PM-1024x532.png" alt="Screen Shot 2017-01-12 at 3.07.10 PM" width="1024" height="532" srcset="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.07.10-PM-1024x532.png 1024w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.07.10-PM-300x156.png 300w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.07.10-PM-768x399.png 768w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.07.10-PM-800x415.png 800w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.07.10-PM-35x18.png 35w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.07.10-PM.png 1437w" sizes="(max-width: 1024px) 100vw, 1024px" />](https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.07.10-PM.png)

[StoryTeller](https://zajdband.com/storyteller/vr.html) es un experimento que utiliza tecnologías de reconocimiento de voz para interactuar con WebVR y posibilitar la exploración en Realidad Virtual utilizando la voz.

Si bien este proyecto no fue terminado, ayudó al desarrollo de otras características de [GuriVR](https://gurivr.com) y como ejemplo de las posibilidades que tenemos a explorar en el ámbito de VR.



### A-Frame Chartbuilder component

[<img class="aligncenter size-full wp-image-254" src="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.11.01-PM.png" alt="Screen Shot 2017-01-12 at 3.11.01 PM" width="721" height="339" srcset="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.11.01-PM.png 721w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.11.01-PM-300x141.png 300w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.11.01-PM-35x16.png 35w" sizes="(max-width: 721px) 100vw, 721px" />](https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.11.01-PM.png)

Experimentando con visualización de datos en 3d, creé este componente para [A-Frame](https://github.com/impronunciable/aframe-chartbuilder-component) que toma gráficos generados con [ChartBuilder](https://quartz.github.io/Chartbuilder/) y los dibuja en un entorno de WebVR. Este experimento muestra la interoperatibilidad entre el mundo de WebVR y otras librerías populares de la web como en este caso d3js.



### Filmación 360 en Coachella

[<img class="aligncenter size-large wp-image-256" src="https://zajdband.com/wp-content/uploads/2017/01/IMG_20160423_190623-1024x768.jpg" alt="IMG_20160423_190623" width="1024" height="768" srcset="https://zajdband.com/wp-content/uploads/2017/01/IMG_20160423_190623-1024x768.jpg 1024w, https://zajdband.com/wp-content/uploads/2017/01/IMG_20160423_190623-300x225.jpg 300w, https://zajdband.com/wp-content/uploads/2017/01/IMG_20160423_190623-768x576.jpg 768w, https://zajdband.com/wp-content/uploads/2017/01/IMG_20160423_190623-800x600.jpg 800w, https://zajdband.com/wp-content/uploads/2017/01/IMG_20160423_190623-35x26.jpg 35w" sizes="(max-width: 1024px) 100vw, 1024px" />](https://zajdband.com/wp-content/uploads/2017/01/IMG_20160423_190623.jpg)

Estaba trabajando con WebVR y mucho video 360 pero nunca había filmado en mi vida, entonces cuando [Miguel](https://twitter.com/miguelpaz) me dijo que tenía un alumno que estaba interesado en filmar con su nueva cámara me junté inmediatamente.

Joseph me contó que se iba a Coachella a grabar 360 así que me conseguí un pase de prensa y nos fuimos a filmar al festival. Esta fue una de las experiencias que no podría haber tenido en otro momento y que me ayudó a entender mucho más a los productores de contenido con los que trabajé.



## Bla Bla Bla | Charlas

### WebVR y GuriVR

[<img class="aligncenter size-large wp-image-255" src="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.21.40-PM-1024x510.png" alt="Screen Shot 2017-01-12 at 3.21.40 PM" width="1024" height="510" srcset="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.21.40-PM-1024x510.png 1024w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.21.40-PM-300x149.png 300w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.21.40-PM-768x383.png 768w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.21.40-PM-800x399.png 800w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.21.40-PM-35x17.png 35w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.21.40-PM.png 1425w" sizes="(max-width: 1024px) 100vw, 1024px" />](https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.21.40-PM.png)

  * [SRCCON](http://schedule.srccon.org/#_session-webvr)
  * [MozFest](https://app.mozillafestival.org/#_session-568)
  * [Buenos](https://www.youtube.com/watch?v=r1d8Mc4pJSM)[Aires](https://www.youtube.com/watch?v=r1d8Mc4pJSM), [Miami](http://www.fiumediainnovationlab.com/mediaparty/) y [Africa](https://mediapartyafrica2016.sched.com/event/8aLK/creating-your-first-virtual-reality-experience-with-gurivr-and-a-frame) Media parties

### Offline-First y Progressive Web Applications

[<img class="aligncenter size-large wp-image-257" src="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.36.56-PM-1024x578.png" alt="Screen Shot 2017-01-12 at 3.36.56 PM" width="1024" height="578" srcset="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.36.56-PM-1024x578.png 1024w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.36.56-PM-300x169.png 300w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.36.56-PM-768x433.png 768w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.36.56-PM-800x451.png 800w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.36.56-PM-35x20.png 35w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.36.56-PM.png 1439w" sizes="(max-width: 1024px) 100vw, 1024px" />](https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.36.56-PM.png)

  * [Encryption and](https://mediapartyafrica2016.sched.com/event/8YYq/encryption-and-offline-access-for-your-site)[offline access for your site](https://mediapartyafrica2016.sched.com/event/8YYq/encryption-and-offline-access-for-your-site) @ Africa Media Party
  * [Progressive Web Apps](https://www.acamica.com/charlas/45/un-electrizante-viaje-a-las-progressive-web-applications) @ BAFrontend
  * Offline-First Panel @ SXSW 2017

## Artículos

  * [Virtual Reality for the rest of us](https://source.opennews.org/en-US/articles/virtual-reality-rest-us/)
  * [Enabling Offline First Experiences on the Web with Service Workers](https://medium.com/offline-camp/enabling-offline-first-experiences-on-the-web-with-service-workers-e4bc8c773dae#.2wk7eulgn)
  * [Universal Rendering with Preact](https://zajdband.com/universal-rendering-with-preact/)
  * [Exploring new techniques on building composable widgets for the web](https://zajdband.com/exploring-new-techniques-building-composable-widgets-for-the-web/)
  * [Low-Budget Natural Language Processing](https://source.opennews.org/en-US/articles/low-budget-natural-language-processing/)
  * [Introduction to Preact and Webpack screencast](https://www.youtube.com/watch?v=nZqTzjl2DwE)  

## Fellow-Fellows

[<img class="aligncenter size-full wp-image-260" src="https://zajdband.com/wp-content/uploads/2017/01/2016fellows-3.jpg" alt="2016fellows-3" width="1000" height="668" srcset="https://zajdband.com/wp-content/uploads/2017/01/2016fellows-3.jpg 1000w, https://zajdband.com/wp-content/uploads/2017/01/2016fellows-3-300x200.jpg 300w, https://zajdband.com/wp-content/uploads/2017/01/2016fellows-3-768x513.jpg 768w, https://zajdband.com/wp-content/uploads/2017/01/2016fellows-3-800x534.jpg 800w, https://zajdband.com/wp-content/uploads/2017/01/2016fellows-3-35x23.jpg 35w" sizes="(max-width: 1000px) 100vw, 1000px" />](https://zajdband.com/wp-content/uploads/2017/01/2016fellows-3.jpg)  
Pasé grandes momentos con mis Fellow OpenNews Fellows y, como ellos destacan, tuve el honor de introducirlos al mundo de los alfajores



[<img class="aligncenter wp-image-258" src="https://zajdband.com/wp-content/uploads/2017/01/alfajor-819x1024.jpg" alt="alfajor" width="275" height="344" srcset="https://zajdband.com/wp-content/uploads/2017/01/alfajor-819x1024.jpg 819w, https://zajdband.com/wp-content/uploads/2017/01/alfajor-240x300.jpg 240w, https://zajdband.com/wp-content/uploads/2017/01/alfajor-768x960.jpg 768w, https://zajdband.com/wp-content/uploads/2017/01/alfajor-800x1000.jpg 800w, https://zajdband.com/wp-content/uploads/2017/01/alfajor-28x35.jpg 28w, https://zajdband.com/wp-content/uploads/2017/01/alfajor.jpg 1080w" sizes="(max-width: 275px) 100vw, 275px" />](https://zajdband.com/wp-content/uploads/2017/01/alfajor.jpg)



## Hasta pronto!

Termina una etapa y comienza otra. Prontamente volveré a contar acerca de mis (por ahora inciertas) aventuras futuras.

Hasta la próxima ?