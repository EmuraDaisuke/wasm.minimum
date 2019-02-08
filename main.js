


function stdout(text){
	document.write(text + "<br>");
}

function stderr(text){
	console.log(text);
}

function abortStackOverflow(){
	stderr("abortStackOverflow");
}

function puts(p, s){
	var array = new Uint8Array(attr.env.memory.buffer, p, s);
	var text = String.fromCodePoint(...array);
	stdout(text);
}



var attr = {
	env: {
		memory: new WebAssembly.Memory({
			initial: 256,
			maximum: 256,
		}),
		table: new WebAssembly.Table({
			initial: 8,
			maximum: 8,
			element: 'anyfunc',
		}),
		
		__memory_base: 1024,
		__table_base: 0,
		tempDoublePtr: 0,
		DYNAMICTOP_PTR: 0,
		abortStackOverflow: abortStackOverflow,
		
		_puts: puts,
	},
	global: {
		NaN: NaN,
		Infinity: Infinity
	},
};

WebAssembly.instantiateStreaming(fetch('main.wasm'), attr).then(obj => {
	stdout(obj.instance.exports._main());	// cpp function main()
});
