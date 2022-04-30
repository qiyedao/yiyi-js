interface recorderConfig {
    sampleBits?: number;
    sampleRate?: number;
    numChannels?: number;
    compiling?: boolean;
}
export default class Recorder {
    private context;
    protected config: recorderConfig;
    private analyser;
    private size;
    private lChannelData;
    private lBuffer;
    private rBuffer;
    private PCM;
    private tempPCM;
    private currentWorker;
    private isWorker;
    private audioInput;
    protected inputSampleRate: number;
    protected inputSampleBits: number;
    protected outputSampleRate: number;
    protected oututSampleBits: number;
    private source;
    private recorder;
    private stream;
    protected littleEdian: boolean;
    protected fileSize: number;
    protected duration: number;
    private needRecord;
    onprocess: (duration: number) => void;
    onprogress: (payload: {
        duration: number;
        fileSize: number;
        vol: number;
        e: any;
        lChannelDataList: Array<Float32Array>;
        lChannelData: any;
        data: Array<DataView>;
    }) => void;
    onplay: () => void;
    onpauseplay: () => void;
    onresumeplay: () => void;
    onstopplay: () => void;
    onplayend: () => void;
    /**
     * @param {Object} options 包含以下三个参数：
     * sampleBits，采样位数，一般8,16，默认16
     * sampleRate，采样率，一般 11025、16000、22050、24000、44100、48000，默认为浏览器自带的采样率
     * numChannels，声道，1或2
     */
    constructor(options?: recorderConfig);
    protected setNewOption(options?: recorderConfig): void;
    /**
     * 开始录音
     *
     * @returns {Promise<{}>}
     * @memberof Recorder
     */
    startRecord(): Promise<{}>;
    /**
     * 暂停录音
     *
     * @memberof Recorder
     */
    pauseRecord(): void;
    /**
     * 继续录音
     *
     * @memberof Recorder
     */
    resumeRecord(): void;
    /**
     * 停止录音
     *
     */
    stopRecord(): void;
    /**
     * 销毁录音对象
     *
     */
    destroyRecord(): Promise<{}>;
    getAnalyseData(): Uint8Array;
    getData(): any;
    /**
     * 清除状态
     *
     */
    private clearRecordStatus;
    /**
     * 将二维数组转一维
     *
     * @private
     * @returns  {float32array}     音频pcm二进制数据
     * @memberof Recorder
     */
    private flat;
    /**
     * 初始化录音实例
     */
    private initRecorder;
    /**
     * 终止流（这可以让浏览器上正在录音的标志消失掉）
     * @private
     * @memberof Recorder
     */
    private stopStream;
    /**
     * close兼容方案
     * 如firefox 30 等低版本浏览器没有 close方法
     */
    private closeAudioContext;
    static initUserMedia(): void;
    /**
     * 将获取到到左右声道的Float32Array数据编码转化
     *
     * @param {Float32Array} lData  左声道数据
     * @param {Float32Array} rData  有声道数据
     * @returns DataView
     */
    private transformIntoPCM;
    static getPermission(): Promise<{}>;
    /**
     * 获取边录边转后最终的PCM
     *
     */
    protected getEncodedPCM(): DataView | null;
    /**
     * 合并多个pcm
     */
    private mergeDataView;
}
export {};
