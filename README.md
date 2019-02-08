# wasm.minimum
ConsoleA
~~~
emrun --no_browser --kill_start --kill_exit --port 8080 .
~~~

ConsoleB
~~~
emcc -s WASM=1 -s SIDE_MODULE=1 -o main.wasm main.cpp
emrun --no_server --port 8080 main.html
~~~
