# CurrieTechnologies.Razor.Clipboard

This package provides Blazor applications with access to the browser's [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard)

## This package is for Blazor Server Apps and Blazor WebAssembly Apps. [CurrieTechnologies.Blazor.Clipboard](https://github.com/Basaingeal/Blazor.Clipboard) is now deprecated.

## Usage

1) In your Blazor app, add the `CurrieTechnologies.Razor.Clipboard` [NuGet package](https://www.nuget.org/packages/CurrieTechnologies.Razor.Clipboard/)

    ```sh
    Install-Package CurrieTechnologies.Razor.Clipboard
    ```

2) In your Blazor app's `Startup.cs`, register the 'ClipboardService'.

    ```cs
    public void ConfigureServices(IServiceCollection services)
    {
        ...
        services.AddClipboard();
        ...
    }
    ```

3) Add this script tag in  your root html file (Likely _Host.cshtml for Blazor Server Apps or index.html for Blazor WebAssembly Apps), right under the framework script tag. (i.e `<script src="_framework/blazor.server.js"></script>` for Blazor Server Apps or `<script src="_framework/blazor.webassembly.js"></script>` for Blazor WebAssembly Apps)

    ```html
    <script src="_content/CurrieTechnologies.Razor.Clipboard/clipboard.min.js"></script>
    ```

4) Now you can inject the ClipboardService into any Blazor page and use it like this:

    ```razor
    @using CurrieTechnologies.Razor.Clipboard
    @inject ClipboardService clipboard

    <input @bind="textValue" />
    <button @onclick="(async e => await clipboard.WriteTextAsync(textValue))">Copy To Clipboard</button>
    <button @onclick="(async e => textValue = await clipboard.ReadTextAsync())">Paste From Clipboard</button>

    @code
    {
        string textValue = string.Empty;
    }
    ```

## Compatibility

| Chrome | Edge | Edge Chromium | Firefox | IE | Opera | Safari |
|:------:|:----:|:-------------:|:-------:|:--:|:-----:|:------:|
| ✔️ 63+ | ❌ | ✔️ | ❌* | ❌ | ✔️ 53+ | ❔ |

*\* Firefox does support the clipboard API, but in a very restricted way that Blazor doesn't support.*
