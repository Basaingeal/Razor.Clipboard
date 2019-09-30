const namespace = "CurrieTechnologies.Razor.Clipboard";

declare const DotNet: any;

async function dispatchReadResponse(id: string, text: string): Promise<void> {
  await DotNet.invokeMethodAsync(namespace, "ReceiveReadResponse", id, text);
}

async function dispatchWriteResponse(id: string): Promise<void> {
  await DotNet.invokeMethodAsync(namespace, "ReceiveWriteResponse", id);
}

window["CurrieTechnologies"] = window["CurrieTechnologies"] || {};
window["CurrieTechnologies"]["Razor"] = window["CurrieTechnologies"]["Razor"] || {};
window["CurrieTechnologies"]["Razor"]["Clipboard"] =
  window["CurrieTechnologies"]["Razor"]["Clipboard"] || {};

window["CurrieTechnologies"]["Razor"]["Clipboard"]["ReadText"] = async (
  requestId: string
): Promise<void> => {
  const text: string = await window.navigator.clipboard.readText();
  await dispatchReadResponse(requestId, text);
};

window["CurrieTechnologies"]["Razor"]["Clipboard"]["WriteText"] = async (
  requestId: string,
  textToWrite: string
): Promise<void> => {
  await window.navigator.clipboard.writeText(textToWrite);
  await dispatchWriteResponse(requestId);
};

window["CurrieTechnologies"]["Razor"]["Clipboard"]["IsSupported"] = (): boolean =>
  !!window.navigator.clipboard &&
  !!window.navigator.clipboard.writeText &&
  !!window.navigator.clipboard.readText;
