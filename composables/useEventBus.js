import mitt from "mitt";

const emitter = mitt();

console.log("mitt loaded");

export const useEvent = emitter.emit;
export const useListen = emitter.on;
