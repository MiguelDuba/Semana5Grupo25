# Instrucciones de configuracion de Cypress

En la carpeta de cada integrante se puede encontrar los escenarios asignados a cada uno con la modificación correspondiente para toma de screenshots en cada paso.
Versión de Ghost: 4.41.3

## Credenciales

### Cypress KBarrera
* Usuario: admin@ghost.com
* Contraseña: Krishtian98
* Docker-Ghost: Ghost 4.41.3
* Puerto: 3001
* Escenarios: 1-5
* Para el correcto funcionamiento es necesario instalar la extensión xpath para cypress (npm install -D cypress-xpath)

### Cypress SRamirez
* Usuario: sg.ramirez940@uniandes.edu.co
* Contraseña: UniandesMisw2022
* Versión node: 12.22.1
* Ghost 4.41.3
* Puerto :2368
* Escenarios: 6-10

### Cypress SMaya
* Usuario: s.mayav@uniandes.edu.co
* Contraseña: Q*5S#9iKWaNVkhF
* Versión node: 16.14.2
* Ghost 4.41.3 (Docker)
* Puerto :2368
* Escenarios: 11-15

## Instrucciones
* Asegurarse de que la aplicación Ghost se encuentre en ejecución en la versión 4.41.3
* Ubicarse en la carpeta raiz del archivo de cypress de cada integrante del grupo
* Ejecutar el comando: cypress open
* Para ejecutar un feature, se debe seleccionar en la ventana que se abre de la herramienta Cypress
* Después de que las pruebas se han ejecutado, si se desea ver los screenshots, se debe ir a la carpeta "screenshots" ubicada en la carpeta de cypress de cada miembro
