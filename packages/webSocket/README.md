## 安装依赖

npm install yiyi-socket

## 导入依赖

```js
import Socket from 'yiyi-socket';

const socket = new Socket({ url: 'ws://localhost:8080' });

const handleClick = () => {
    socket.connectWebSocket().then(res => {
        console.log('connect', res);
    });
    socket.onopen = function (e) {
        console.log('onOpen', e);
    };
    socket.onmessage = function (e) {
        console.log('onmessage', e.data, JSON.parse(e.data));
    };
    socket.onclose = function (e) {
        console.log('onclose', e);
    };
    socket.onerror = function (e) {
        console.log('onerror', e);
    };
};
const handleSend = () => {
    socket.sendMessage(new Date().getTime()).then(res => {
        console.log('sendMessage', res);
    });
};
const handleClose = () => {
    socket.closeWebSocket();
};
```
