---
description: "La pandemia nos privó de muchas cosas pero también trae nuevas oportunidades. Desde hace un poco más de un mes tuve la oportunidad de sumarme a una serie de dinámicas o ejericios organizados por la Escuela Relacional. Siendo Relacional una escuela de Dirección de Arte y yo un programador sin background en lo visual me interesó el desafío doble que tengo por delante."
socialImage: "/photo.jpg"
title: 'Relaciodan #1: A través del algoritmo'
date: "2020-06-02T16:23:35-05:00"
template: "post"
draft: false
slug: /relaciodan-1-a-traves-del-algoritmo/
author: Dan
layout: post
category: relaciodan
tags:
  - relaciodan
  - tensorflow
---

La pandemia nos privó de muchas cosas pero también trae nuevas oportunidades.
Desde hace un poco más de un mes tuve la oportunidad de sumarme a una serie de
dinámicas o ejericios organizados por la [Escuela Relacional](https://www.instagram.com/escuela.relacional/).
Siendo Relacional una escuela de Dirección de Arte y yo un programador sin background en lo visual
me interesó el desafío doble que tengo por delante.

La idea detrás de la serie de artículos que empiezan con este es contar como los encaro
desde mi perspectiva como programador, haciendo especial hincapié en el aspecto técnico
de la resolución de cada dinámica.

Cada ejercicio finaliza con una mesa de trabajo donde se dialoga sobre lo trabajado que
por motivos varios van a quedar por fuera de esta serie.

## La primera dinámica: el registro

### La previa

Para empezar, nos pidieron que entreguemos un registro propio que conste de:

- Nombre
- Una foto nuestra
- Cuenta de instagram
- Mapa (así, bien libre)

Por ejemplo, esta fue mi entrega:

- Dan Zajdband
- [@danzajdband](https://instagram.com/danzajdband)
- Buenos Aires

<img src="https://zajdband.com/photo.jpg" alt="Foto" width="200" />

### El registro del otro

Para la primera dinámica se nos envió un documento con el registro de todos los
participantes (más de 40 personas) y nos pidieron que hagamos un registro de 10 de ellas.

Para esta consigna decidí aplicar algoritmos computacionales similares a los
utilizados por las redes sociales para comprender el contenido que publicamos
cotidianamente en ellas y así ayudar a identificar la disonancia entre nuestra
fantasía respecto a lo que realmente las máquinas logran captar.

### La elección de los registros

La primera decisión que tomé fue que yo no iba a elegir las personas a registrar sino que lo iba
a hacer la computadora. Para esto creé un archivo plano `usuarios.txt` con una cuenta de instagram por línea
y corrí el siguiente comando en la terminal para que se genere un nuevo archivo con 10 cuentas al azar:

`$ cat usuarios.txt | sort -R | head -n10 > elegidos.txt`

Una vez obtenidos los 10 elegidos (y sin mirar el resultado para no hacer trampa) pasé a la primera técnica
para hacer mis registros asistidos por computadora.

### Técnica 1

> Sin que yo pueda verlo, un algoritmo descarga una imagen de una cuenta de instagram,
  la observa y genera una descripción corta de la misma.

>  Luego de recolectar las frases, sin haberlas yo visto y sin saber de quienes son
  hago un dibujo de cada descripción. Finalmente presento la descripción automática
  junto al dibujo y la imagen original.

#### El día que tu AI lo entienda...

El primer paso fue entonces seleccionar una imagen al azar de cada una de las cuentas de Instagram
de estas personas. Para esto usé [InstaLoader](https://instaloader.github.io/) que nos permite
descargar media y metadata de cuentas de instagram desde un CLI. A partir de esta herramienta generé el siguiente
script:

```bash
ITER=0
for INSTAGRAM in $(cat elegidos.txt)
do
ITER=$(expr $ITER + 1)
echo "Starting ${ITER}"
PROFILE_DIR="instagram/${INSTAGRAM}"
instaloader ${INSTAGRAM} --dirname-pattern="${PROFILE_DIR}" --post-filter="date_utc >= datetime(2019, 4, 30)" --no-captions --no-videos > /dev/null
done
```

El script de bash itera sobre la lista de elegidos y ejecuta `instaloader` por cada uno de ellos trayendo fotos del último año.
Decidí esto para no traer un registro demasiado antiguo y porque mucha gente tiene una actividad agitada en la red.
Las imagenes de cada usuario van a parar a la carpeta `instagram/elusuario`. Una vez que descargué todo esto me avoqué a la tarea que más intriga me daba, la de extraer descripciónes de las imágenes.

Después de probar muchos proyectos, pelearme con pytorch, tensorflow y otros, me decidí por usar [IM2TXT](https://github.com/jmrf/im2txt-demo)
que es una implementación del modelo propuesto en el paper [Show and Tell: Lessons learned from the 2015 MSCOCO Image Captioning Challenge](http://arxiv.org/abs/1609.06647).

Luego de instalar dependencias y el modelo pre-entrenado, armé un script que:

- Por cada usuario de la lista de `elegidos`:
  - Elige una imagen al azar de la carpeta de imágenes descargadas.
  - Copia la imagen original a otra carpeta para poder más tarde producir la entrega (sin verla en el momento)
  - Corre el modelo de captioning (descripción) de la imagen elegida.
  - Escupe la descripción en un archivo de descripciones.

El script me quedó así:

```bash
CHECKPOINT_PATH="model/train"
VOCAB_FILE="data/mscoco/word_counts.txt"

mkdir pics

ITER=0
for INSTAGRAM in $(cat elegidos.txt)
do

ITER=$(expr $ITER + 1)

echo "Starting ${ITER}"

PROFILE_DIR="instagram/${INSTAGRAM}"

IMAGE=$(ls -1 $PROFILE_DIR | sort -R | head -n1)

cp "${PROFILE_DIR}/${IMAGE}" "pics/${ITER}"

cd im2txt
bazel build -c opt //im2txt:run_inference > /dev/null
cd ..


echo "${ITER}\n" >> descripciones.txt
bazel-bin/im2txt/run_inference \
  --checkpoint_path=${CHECKPOINT_PATH} \
  --vocab_file=${VOCAB_FILE} \
  --input_files="${PROFILE_DIR}/${IMAGE}" \
  | head -n2 | grep "0)" >> descripciones.txt 

done
```

#### A dibujar

Abriendo el archivo `descripciones.txt` leí las 3 descripciones que infirió el modelo sobre las imágenes que vio
hice un dibujo (con mi técnica super pulida) imaginando las situaciones a través del texto.

El resultado para las 3 personas que fueron pasadas por esta técnica son las siguientes:

![](/oskritzel.png)

![](/masabeu.png)

![](/lapoll.png)


### Técnica 2

>  Elijo manualmente 9 imágenes consecutivas de una cuenta de instagram y genero una descripción corta.
  Luego paso las mismas imágenes
  por un algoritmo que retorna descripciones automáticas de estas.
  
>  Presento en cada retrato las 9 imágenes junto a las descripciones manuales y
  automáticas.

Para esta segunda técnica usé un script muy similar al de la técnica anterior:

- Elijo las siguientes 3 cuentas de instagram de los `elegidos` y por cada una:
  - Selecciono 9 imágenes al azar.
  - Las paso por el modelo de captioning automático.


Por otro lado, entré a la carpeta de imágenes seleccionadas por el script y escribí yo descripciones
para esas imágenes.

Lo interesante de esta técnica es primero ver como el algoritmo tiene su propio bias y encuentra
cosas muy distintas a las que nosotros vemos. En conversaciones posteriores me comentó mucha gente
como se quedaban buscando elementos de la descripción del algoritmo en las imágenes.

El resultado para les 3 afortunades fue el siguiente:

![](/romi_alvarez.png)
![](/diamante.carbon.png)
![](/nicopereiro.png)

### Técnica 3

> Elijo una imagen al azar de una cuenta de instagram y obtengo descripciones cortas automáticas de cada una de ellas a través de un algoritmo.

> Luego paso otro algoritmo que dada una frase corta genera un texto ampliado.

> En cada caso presento la imagen original, la descripción autogenerada y el texto ampliado.

#### Tengo miedo nene!

Como podemos imaginar, las primeras etapas de esta técnica son similares a las anteriores. Con un script elijo imágenes
de cuentas de Instagram y las paso por el algoritmo de descripción automática.

La variante en este caso es que, como en este caso no importaba que yo accediera a pasos intermedios, pude usar un servicio online
simple y poderoso para producir el texto largo a partir de la descripción. Para eso me apoyé en [Talk to Transformer](https://talktotransformer.com/)
que usa el modelo `GPT-2` para completar textos a partir de un comienzo. Entonces agarré los textos generados por `im2txt`
y los pasé por este sitio y los resultados, como pueden ver a continuación son super interesantes:

![](/brunotortolano.png)
![](/anitabagg.png)
![](/gabo.pic.png)
![](/danzajdband.png)

### No tan rápido

Esta fue simplemente la primera entrega de esta serie de ejercicios que estamos haciendo en la
[Escuela Relacional](https://instagram.com/escuela.relacional) ❤️. Mis agradecimientos a
la gente hermosa que la compone y me permite ser parte de esto.