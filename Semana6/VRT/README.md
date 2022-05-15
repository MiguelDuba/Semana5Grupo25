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

## Cypress

* Nombre de usuario: Sara *IMPORTANTE!: Cuando se cree el usuario en ghost en ambas versiones para las pruebas en cypress, debe tener este nombre de usuario para evitar errores en las pruebas del feature contraseña
* Usuario: sg.ramirez940@uniandes.edu.co
* Contraseña: UniandesMisw2022
* Versión node: 12.22.1
* Ir a la carpeta "VRT-cypress" donde se ubica el código para las pruebas de regresión en cypress
* Antes de ejecutar las pruebas, se debe ir a la carpeta "screenshots" dentro de la "carpeta cypress-escenarios" y verificar que no haya ningún screenshot
* Para ejecutar las pruebas en la terminal se debe ir a la carpeta VRT-cypress" y luego ubicarse en la carpeta "cypress-escenarios" y desde esta ubicación ejecutar el comando `cypress open`. Esto abrirá una ventana de la herramienta con los features. Se debe ejecutar cada archivo solamente una vez, para evitar tener duplicados en los screenshots. 
* Se puede verificar la toma de screenshots abriendo la carpeta "screenshots" mencionada anteriormente.
* Para comparar las imágenes generadas en cypress, en la terminal desde la carpeta "VRT-cypress" ubicarse en la carpeta "resemble" y ejecutar el comando `node index.js`. Esto generará un reporte que compara las imágenes.
* Una vez haya terminado la ejecución, se puede entrar a la carpeta "results" dentro de la carpeta "resemble" y ahí encontrará un archivo llamado "reporte.html" el cual puede abrir con un navegador como Chrome para visualizar el reporte.


## Escenarios de pruebas seleccionados

Se seleccionan 5 escenarios, los cuales serán ejecutados en cypress y kraken para las pruebas de regresión

* NOTA: Se verifica con las pruebas, que hubo una regresión que se presenta en el escenario 7, el cual falla por un bug en la versión 4.41.3 y funciona adecuadamente en la versión 3.41.9

* Escenario #1: Creación de post con contenido
* Escenario #7: Editar una página y salir sin guardar
* Escenario #8: Cambiar contrseña con un valor de verificación de contraseña diferente al valor de nueva contraseña
* Escenario #13: Editar un tag
* Escenario #17: Regresar evitando guardar un post editado




