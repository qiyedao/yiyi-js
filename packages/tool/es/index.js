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
export {
  getExtNameList,
  mimeType
};
//# sourceMappingURL=index.js.map
