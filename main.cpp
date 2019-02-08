


#include	<cstddef>



//#define	WASM_EXPORT	__attribute__((visibility("default")))



extern "C" {
void puts(const char* p, std::size_t s);	//js function _puts(p, s)
}



void
clog(
const char* p
){
	std::size_t s = 0;
	for (; p[s]; ++s);
	puts(p, s);
}



//WASM_EXPORT
int
main(
){
	clog("hello");
	clog("test");
	return 1;
}
