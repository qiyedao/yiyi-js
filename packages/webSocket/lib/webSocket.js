class Socket {
    constructor({ url } = {}) {
        this.url = url;
        this.status = ''; // 初始化init 连接成功success 连接失败 error
    }

    /**
     * 获取websocket url
     * 该接口需要后端提供，这里为了方便前端处理
     */
    getWebSocketUrl() {
        return new Promise((resolve, reject) => {
            if (this.url) {
                resolve(this.url);
            } else {
                reject({ message: 'websocket url is undefined' });
            }
        });
    }
    setStatus(status) {
        this.status = status;
    }
    getStatus() {
        return this.status;
    }
    //是否可以进行重新生成socket对象进行连接
    isCanConnect() {
        return !this.status || this.status === 'error';
    }
    // 连接websocket
    connectWebSocket() {
        return this.getWebSocketUrl().then(url => {
            if (!this.isCanConnect()) {
                // 已有连接对象
                return '已有连接对象';
            }
            let iatWS;
            if ('WebSocket' in window) {
                iatWS = new WebSocket(url);
            } else if ('MozWebSocket' in window) {
                iatWS = new MozWebSocket(url);
            } else {
                return '浏览器不支持WebSocket';
            }
            this.webSocket = iatWS;
            this.setStatus('init');
            iatWS.onopen = e => {
                this.setStatus('success');
                if (this.onopen) {
                    this.onopen(e);
                }
            };
            iatWS.onmessage = e => {
                if (this.onmessage) {
                    this.onmessage(e);
                }
            };
            iatWS.onerror = e => {
                this.setStatus('error');
                if (this.onerror) {
                    this.onerror(e);
                }
            };
            iatWS.onclose = e => {
                this.setStatus('');
                if (this.onclose) {
                    this.onclose(e);
                }
            };

            return '浏览器支持WebSocket';
        });
    }
    // 向webSocket发送数据
    sendMessage(data) {
        return new Promise((resolve, reject) => {
            if (this.webSocket.readyState == 0) {
                reject('连接尚未建立');
            }
            if (this.webSocket.readyState == 2) {
                reject('连接正在进行关闭');
            }
            if (this.webSocket.readyState == 3) {
                reject('连接已经关闭或者连接不能打开');
            }

            if (this.webSocket.readyState === 1) {
                this.webSocket.send(data);
                resolve('数据已发送');
            }
        });
    }
    //关闭webSocket
    closeWebSocket() {
        if (this.webSocket) {
            this.webSocket.close();
        }
    }
}

export default Socket;
