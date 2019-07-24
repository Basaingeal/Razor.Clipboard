module CurrieTechnologies.Razor.Clipboard {
  declare var DotNet: any;

  let assemblyName: string = "CurrieTechnologies.Razor.Clipboard";
  let namespace: string = "CurrieTechnologies.Razor.Clipboard";

  async function dispatchResponse(id: string, text: string): Promise<void> {
    await DotNet.invokeMethodAsync(namespace, "ReceiveResponse", id, text);
  }

  async function dispatchWriteResponse(id: string): Promise<void> {
    await DotNet.invokeMethodAsync(namespace, "ReceiveWriteResponse", id);
  }

  window["CurrieTechnologies"] = window["CurrieTechnologies"] || {};
  window["CurrieTechnologies"]["Razor"] =
    window["CurrieTechnologies"]["Razor"] || {};
  window["CurrieTechnologies"]["Razor"]["Clipboard"] =
    window["CurrieTechnologies"]["Razor"]["Clipboard"] || {};

  window["CurrieTechnologies"]["Razor"]["Clipboard"]["ReadText"] = async (
    requestId: string
  ): Promise<string> => {
    try {
      const text: string = await window.navigator.clipboard.readText();
      await dispatchResponse(requestId, text);
    } catch (e) {
      const error: Error = <Error>e;

      return error.message;
    }

    return "";
  };

  window["CurrieTechnologies"]["Razor"]["Clipboard"]["WriteText"] = async (
    requestId: string,
    textToWrite: string
  ): Promise<string> => {
    try {
      await window.navigator.clipboard.writeText(textToWrite);
      await dispatchWriteResponse(requestId);
    } catch (e) {
      const error: Error = <Error>e;

      return error.message;
    }

    return "";
  };
}
