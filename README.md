# Meli Frontend Challenge

## Instalación

Dentro del directorio > client

`npm install`

Dentro del directorio > server

`npm install`

## Ejecución

Para levantar la aplicación es necesario ejecutar los siguientes comandos:

Server -> Por el puerto 400
`npm start`

Client -> Por el puerto 300
`npm start`

# Overview

Stack:
El Frontend está desarrollado con React y Sass para los estilos.
El Backend consiste en un sencillo servidor en Node utilizando Express.

## Backend

El backend cuenta con un controlador que se encarga de asignar las busquedas o el detalle de los peductos, este asu vez llama a un helper que se encarga de realizar el llamado al API mediante axios.

El Helper a su vez se encarga de dos cosas, realizar el llamado al api dependiendo de el tipo de busqueda, si es por palabra searchByName, si es por detalle de producto itemById, de alli tambien se desprende procesar la respuesta y armar el objeto en el formato solicitado. Y por ultimo una pequeño llamado asincrono para armar el breadcrumb.

## Frontend

El frontend tiene dos componentes principales: item e itemDetail, item se encarga de mostrar los resultados obtenidos , es el quien se encarga de mostrar el producto, su nombre el precio, etc.

El itemDetail como bien indica sera el producto con sus caracteristicas, lo que hara es pasar a una vita nueva y mostrar el detalle del id seleccionado.

ItemList se encargara de ser el intermediario entre el api (llamado al backend desde el front) y el front para procesar u obtener respuesta.

Tambien hay modulos transversales, como el header, el main layout o el breadcrumb que se comparten entre las dos vistas (search, and search detail)
