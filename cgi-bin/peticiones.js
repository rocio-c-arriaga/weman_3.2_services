const svr = require('http');
const url = require('url');
const fibo = require('./fibonacci.js');


//Aquí hay que jalar los 'require' adicionales que puedan hacer falta como FileSystem, etc.
const express = ("express");
const host = '127.0.0.1';
const puerto = '8080';

const servidor = svr.createServer((pet, resp) => {
	let respuesta = '';
	resp.setHeader('Content-Type', 'text/plain');
	if (pet.method == 'GET') {
		respuesta = fibo.doFibonacci(42).toString();
		console.log(respuesta);
		console.log("Una petición");
		console.log(fibo.doFibonacci(10));
		resp.statusCode = 200;
	} else if (pet.method == 'POST') {
		respuesta = procesaPost(pet);
		resp.statusCode = 200;
	} else {
		resp.statusCode = 404;
	}
	resp.end(respuesta);
});

servidor.listen(puerto, host, () => {
	console.log('La aplicación está corriendo en: ' + host + ':' + puerto);
});

function procesaGet(peticion) {
	//Aquí necesitan analizar la URL de la petición, ver qué botón se presionó y actuar en consecuencia.
	var palabra = url.parse(peticion.url, true);
		console.log(palabra);
		console.log(peticion.url);
	var palíndromo = palabra.query.palabra;
		return invertirTexto (palíndromo);

}

function procesaPost(peticion) {
	//Igualmente, aquí hay que obtener el valor que venga en la URL...

	return str == str.split('').reverse().join('');
	

	console.log(peticion);
	console.log(peticion.body);

}


