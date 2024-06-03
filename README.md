# Ejercicio integrador

## Objetivos
* Agregar nuevas funciones de dominio
* Codificar test unitarios en paralelo a la implementación
* Modificar la interfaz de usuario usando las nuevas funciones

### Aspectos a tener en cuenta 

* Los comentarios `// TODO` deben ser reemplazados por código para implementar las nuevas funciones.
* Si necesita realizar supuestos para la implementación, agregue comentarios para explicarlos.
* Los test unitarios se deben codificar en los archivos correspondientes `*.test.js`.
* La cobertura de los test unitarios debe alcanzar 100 % de sentencias y ramas.

### Parte A

1. En la clase `Book` agegar el campo `words` que representa el número de palabras del libro. El campo no es obligatorio y debe ser un número. Implementar las funciones `getWords()` y `setWords()` validando que el parámetro recibido es un número. Modificar la función `toString()` agregando el valor del campo.
Codificar los test unitarios para las nuevas funciones, incluyendo casos de error.

2. En la clase `Book` implementar la función `wordsPerPage()` que retorna el promedio de palabras por página del libro. Codificar test unitarios para la función `wordsPerPage()`.

### Parte B

3. En la clase `Library` implementar la función `totalWords()` que suma el total de palabras de los libros de la biblioteca.
Codificar test unitarios para la función `totalWords()`.

### Parte C

4. Agregar elementos a la intefaz de usuario para usar las nuevas funciones.
    * Campo 'Palabras' en el panel 'Nuevo libro'.
    * Mostrar 'Palabras totales' en el panel 'Biblioteca'.



