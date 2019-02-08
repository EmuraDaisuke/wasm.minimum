


#include	<cstddef>



extern "C" {
void puts(const char* p, std::size_t s);	// js function _puts(p, s)
}



void
clog(
const char* p
){
	std::size_t s = 0;
	for (; p[s]; ++s);
	puts(p, s);
}



int
main(
){
	clog("hello wasm");
	return 1;
}
