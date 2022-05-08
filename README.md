# Pruebas E2E Semana 5
Codigo de la herramientas de kraken y cypress
* Cypress [Instrucciones](Cypress/README.md)
* Kraken [Instrucciones](Kakren/README.md)

## Consideraciones a tener en cuenta para hacer las pruebas
* Se debe tener instalada localmente en un directorio la aplicación Ghost versión 4.41.3
* La aplicación debe estar en ejecución antes de hacer las pruebas
* Para correr la aplicación Ghost, en la terminal se debe ubicar en el directorio base de la aplicación y ejecutar el comando: ghost start

## Integrantes
* Krishtian Barrera
* * kd.barrera@uniandes.edu.co
* Sara Maya
* * s.mayav@uniandes.edu.co
* Sara Ramirez
* * sg.ramirez940@uniandes.edu.co
* Miguel Dueñas
* * m.duenasb@uniandes.edu.co
## Funcionalidades a probar
* Crear Post
* Editar Post
* Crear Pagina
* Crear Tag
* Crear Miembro
* Actualizar Pagina
* Actualizar Tag
* Actualizar Contraseña
* Actualizar Miembro
## Escenario de pruebas
### Escenario de Pruebas Archivo KBarrera 
  Versión Ghost: 4.41.3 (Docker)
  Usuario utilizado: Admin@ghost.com
  Contraseña: Krishtian98
* Escenario #1: Creación de post con contenido
* Escenario #2: Creación de post sin titulo ni contenido
* Escenario #3: Creación de tag sin nombre
* Escenario #4: Creación de tag completo
* Escenario #5: Botón Retry cuando se crea un tag con error no ejecuta

### Escenarios de Pruebas Archivo SRamirez 
  Versión Ghost: 4.41.3 
  Usuario utilizado: sg.ramirez940@uniandes.edu.co
  Contraseña: UniandesMisw2022
* *Nota: los escenarios 7 y 9 generan un resultado fallido por hallazgo de bugs en la aplicación Ghost
* Escenario #6: Editar una página
* Escenario #7: Editar una página y salir sin guardar
* Escenario #8: Cambiar contrseña con un valor de verificación de contraseña diferente al valor de nueva contraseña
* Escenario #9: Cambiar contrseña con el mismo valor de la contraseña antigua
* Escenario #10: Cambiar contraseña

### Escenarios de Pruebas Archivo SMaya
  Versión Ghost: 4.41.3 (Docker)
  Usuario utilizado: s.mayav@uniandes.edu.co
  Contraseña: Q*5S#9iKWaNVkhF
* Escenario #11: Pagina con contenido
* Escenario #12: Pagina sin contenido
* Escenario #13: Editar un tag
* Escenario #14: Editar un tag sin nombre
* Escenario #15: Corregir un tag editado

### Escenarios
* Escenario #16:
* Escenario #17:
* Escenario #18:
* Escenario #19:
* Escenario #20:

