export default class Player {
    /**
     * play record
     * @static
     * @param {ArrayBuffer} arraybuffer
     * @memberof Player
     */
    static play(arraybuffer: any): Promise<{}>;
    /**
     * 暂停播放录音
     * @memberof Player
     */
    static pausePlay(): void;
    /**
     * 恢复播放录音
     * @memberof Player
     */
    static resumePlay(): Promise<{}>;
    /**
     * 停止播放
     * @memberof Player
     */
    static stopPlay(): void;
    static destroyPlay(): void;
    static getAnalyseData(): Uint8Array;
    /**
     * 增加录音播放完成的事件绑定
     *
     * @static
     * @param {*} [fn=function() {}]
     * @memberof Player
     */
    static addPlayEnd(fn?: any): void;
    static getPlayTime(): number;
}
