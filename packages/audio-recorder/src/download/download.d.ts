/**
 * 下载录音的wav数据
 *
 * @param {blob}   需要下载的blob数据类型
 * @param {string} [name='recorder']    重命名的名字
 */
export declare function downloadWAV(wavblob: any, name?: string): void;
/**
 * 下载录音pcm数据
 *
 * @param {blob}   需要下载的blob数据类型
 * @param {string} [name='recorder']    重命名的名字
 * @memberof Recorder
 */
export declare function downloadPCM(pcmBlob: any, name?: string): void;
export declare function download(blob: any, name: string, type: string): void;
