/// <reference types="node" />
import Recorder from "./recorder/recorder";
interface recorderConfig {
    sampleBits?: number;
    sampleRate?: number;
    numChannels?: number;
    compiling?: boolean;
}
declare class Index extends Recorder {
    private isrecording;
    private ispause;
    private isplaying;
    onplay: () => void;
    onpauseplay: () => void;
    onresumeplay: () => void;
    onstopplay: () => void;
    onplayend: () => void;
    interval: NodeJS.Timer;
    /**
     * @param {Object} options 包含以下三个参数：
     * sampleBits，采样位数，一般8,16，默认16
     * sampleRate，采样率，一般 11025、16000、22050、24000、44100、48000，默认为浏览器自带的采样率
     * numChannels，声道，1或2
     */
    constructor(options?: recorderConfig);
    /**
     * 重新修改配置
     *
     * @param {recorderConfig} [options={}]
     * @memberof Recorder
     */
    setOption(options?: recorderConfig): void;
    /**
     * Start the recording
     */
    start(): Promise<{}>;
    /**
     * Pause the recording
     */
    pause(): void;
    /**
     * 继续录音
     */
    resume(): void;
    /**
     * 停止录音
     *
     * @memberof Recorder
     */
    stop(): void;
    /**
     * 播放录音
     */
    play(): void;
    /**
     * 获取已经播放了多长时间
     */
    getPlayTime(): number;
    /**
     * 暂停播放录音
     *
     * @memberof Recorder
     */
    pausePlay(): void;
    /**
     * 恢复播放录音
     *
     * @memberof Recorder
     */
    resumePlay(): void;
    /**
     * 停止播放
     *
     * @memberof Recorder
     */
    stopPlay(): void;
    destroy(): Promise<{}>;
    /**
     * 获取当前已经录音的PCM音频数据
     *
     * @returns[DataView]
     * @memberof Recorder
     */
    /**
     * 获取余下的新数据，不包括 getNextData 前一次获取的数据
     *
     * @returns [DataView]
     * @memberof Recorder
     */
    /**
     * 获取当前录音的波形数据，
     * 调取频率由外部控制。
     *
     * @memberof Recorder
     */
    getRecordAnalyseData(): any;
    /**
     * 获取录音播放时的波形数据，
     *
     * @memberof Recorder
     */
    getPlayAnalyseData(): any;
    getPCM(): any;
    /**
     * 获取PCM格式的blob数据
     *
     * @returns { blob }  PCM格式的blob数据
     * @memberof Recorder
     */
    getPCMBlob(): any;
    /**
     * 下载录音pcm数据
     *
     * @param {string} [name='recorder']    重命名的名字
     * @memberof Recorder
     */
    downloadPCM(name?: string): void;
    /**
     * 获取WAV编码的二进制数据(dataview)
     *
     * @returns {dataview}  WAV编码的二进制数据
     * @memberof Recorder
     */
    getWAV(): any;
    /**
     * 获取WAV音频的blob数据
     *
     * @returns { blob }    wav格式blob数据
     * @memberof Recorder
     */
    getWAVBlob(): any;
    /**
     * 下载录音的wav数据
     *
     * @param {string} [name='recorder']    重命名的名字
     * @memberof Recorder
     */
    downloadWAV(name?: string): void;
    /**
     * 获取MP3编码的二进制数据(dataview)
     *
     * @returns {dataview}  WAV编码的二进制数据
     * @memberof Recorder
     */
    getMP3(): any;
    /**
     * 获取WAV音频的blob数据
     *
     * @returns { blob }  MP3格式blob数据
     * @memberof Recorder
     */
    getMP3Blob(): any;
    /**
     * 下载录音的mp3数据
     *
     * @param {string} [name='recorder']    重命名的名字
     * @memberof Recorder
     */
    downloadMP3(name?: string): void;
    /**
     * 通用的下载接口
     */
    download(blob: any, name: string, type: string): void;
    /**
     * 获取左和右声道的数据
     *
     * @returns [DataView]
     */
    getChannelData(): any;
}
export default Index;
