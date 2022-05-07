var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.js
var tool_exports = {};
__export(tool_exports, {
  getExtNameList: () => getExtNameList,
  mimeType: () => mimeType
});
module.exports = __toCommonJS(tool_exports);

// src/constant.js
var mimeType = {
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  pdf: "application/pdf",
  zip: "application/x-zip-compressed",
  txt: "text/plain",
  png: "image/png",
  jpg: "image/jpeg",
  gif: "image/gif",
  mp4: "video/mp4",
  avi: "video/avi",
  mp3: "audio/mpeg",
  wav: "audio/wav"
};
var getExtNameList = () => {
  return Object.keys(mimeType);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getExtNameList,
  mimeType
});
//# sourceMappingURL=index.js.map
