interface dataview {
    byteLength: number;
    buffer: {
        byteLength: number;
    };
    getUint8: any;
}
/**
 * 数据合并压缩
 * 根据输入和输出的采样率压缩数据，
 * 比如输入的采样率是48k的，我们需要的是（输出）的是16k的，由于48k与16k是3倍关系，
 * 所以输入数据中每隔3取1位
 *
 * @param {float32array} data       [-1, 1]的pcm数据
 * @param {number} inputSampleRate  输入采样率
 * @param {number} outputSampleRate 输出采样率
 * @returns  {float32array}         压缩处理后的二进制数据
 */
export declare function compress(data: any, inputSampleRate: number, outputSampleRate: number): Float32Array;
/**
 * 转换到我们需要的对应格式的编码
 *
 * @param {float32array} bytes      pcm二进制数据
 * @param {number}  sampleBits      采样位数
 * @param {boolean} littleEdian     是否是小端字节序
 * @returns {dataview}              pcm二进制数据
 */
export declare function encodePCM(bytes: any, sampleBits: number, littleEdian?: boolean): DataView;
/**
 * 编码wav，一般wav格式是在pcm文件前增加44个字节的文件头，
 * 所以，此处只需要在pcm数据前增加下就行了。
 *
 * @param {DataView} bytes           pcm二进制数据
 * @param {number}  inputSampleRate  输入采样率
 * @param {number}  outputSampleRate 输出采样率
 * @param {number}  numChannels      声道数
 * @param {number}  oututSampleBits  输出采样位数
 * @param {boolean} littleEdian      是否是小端字节序
 * @returns {DataView}               wav二进制数据
 */
export declare function encodeWAV(bytes: dataview, inputSampleRate: number, outputSampleRate: number, numChannels: number, oututSampleBits: number, littleEdian?: boolean): DataView;
/**
 * 编码mp3
 * @param{any} result 左右声道数据
 * @param {number}  inputSampleRate  输入采样率
 * @param {number}  outputSampleRate 输出采样率
 * @param {number}  numChannels      声道数
 * @param {number}  oututSampleBits  输出采样位数
 * @param {boolean} littleEdian      是否是小端字节序
 */
export declare function encodeMP3(result: any, inputSampleRate: number, outputSampleRate: number, numChannels: number, oututSampleBits: number, littleEdian?: boolean): any[];
export {};
