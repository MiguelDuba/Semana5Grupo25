# Pruebas regresión semana 6

En las herramientas Vypress y Kraken se ejecutarán las pruebas para tomar los screenshots. Posteriormente se utilizará la herramienta Resemble.js para la comparación de los screenshots generados.
Para las pruebas de regresión se usarán las siguientes versiónes de la aplicación Ghost

* Versión Ghost 4.41.3: puero 2368
* Versión Ghost 3.41.9: puero 3002

## Consideraciones a tener en cuenta para hacer las pruebas
* Para tener dos versiones de ghost que puedan ser ejecutadas simultáneamente se debe instalar docker en su sistema operativo (https://docs.docker.com/engine/install/)
* Una vez se tenga docker instalado, en una terminal se debe ejecutar el siguiente comando para la versión 3.41.9 de Ghost: 
* * `docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_3.41.9 ghost:3.41.9`
* * Después se puede abrir la aplicación Ghost v3.41.9 usando la url http://localhost:3002/ghost
* Para la versión 4.41.3 se puede ejecutar el mismo paso anterior pero manteniendo el puerto 2368 en lugar del puerto 3002
* Asegurarse de que la aplicación está en ejecución antes de hacer las pruebas en ambos puertos para su respectiva versión

## Escenarios de pruebas seleccionados

Se seleccionan 5 escenarios, los cuales serán ejecutados en cypress y kraken para las pruebas de regresión

* Escenario #1: Creación de post con contenido
* Escenario #7: Editar una página y salir sin guardar
* Escenario #8: Cambiar contrseña con un valor de verificación de contraseña diferente al valor de nueva contraseña
* Escenario #13: Editar un tag
* Escenario #17: Regresar evitando guardar un post editado




