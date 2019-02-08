# wasm.minimum
ConsoleA（簡易サーバーを起動）
~~~
cd ビルド＆実行ディレクトリ
emrun --no_browser --kill_start --kill_exit --port 8080 .
「Ctrl + z」で終了
~~~

ConsoleB（ビルド＆実行）
~~~
em++ -s WASM=1 -s SIDE_MODULE=1 -o main.wasm main.cpp
emrun --no_server --port 8080 main.html
~~~
