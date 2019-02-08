


function dummy(){}

var attr = {
	env: {
		memory: new WebAssembly.Memory({
			initial: 256,
			maximum: 256,
		}),
		table: new WebAssembly.Table({
			initial: 10,
			maximum: 10,
			element: 'anyfunc',
		}),
		
		__memory_base: 1024,
		__table_base: 0,
		enlargeMemory: dummy,
		getTotalMemory: dummy,
		abortStackOverflow: dummy,
		abortOnCannotGrowMemory: dummy,
		nullFunc_ii: dummy,
		nullFunc_iiii: dummy,
		___lock: dummy,
		___setErrNo: dummy,
		___syscall140: dummy,
		___syscall146: dummy,
		___syscall54: dummy,
		___syscall6: dummy,
		___unlock: dummy,
		_emscripten_memcpy_big: dummy,
		DYNAMICTOP_PTR: 0,//6496,
		tempDoublePtr: 0,//6736,
		
		_puts: (p, s) => {
			const array = new Uint8Array(attr.env.memory.buffer, p, s)
			const text = String.fromCodePoint(...array)
//			console.log(text)
			document.write(text + "<br>")
		},
	},
	global: {
		NaN: NaN,
		Infinity: Infinity
	},
};

WebAssembly.instantiateStreaming(fetch('main.wasm'), attr).then(obj => {
	console.log(obj.instance.exports._main());	// cpp function main()
});
