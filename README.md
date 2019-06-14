# CurrieTechnologies.Razor.Clipboard
This package provides Blazor applications with access to the browser's [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard)

## This package is for Server-side Blazor only. For Client-side Blazor use [CurrieTechnologies.Blazor.Clipboard](https://github.com/Basaingeal/Blazor.Clipboard)

## Usage
1) In your Blazor app, add the `CurrieTechnologies.Razor.Clipboard` [NuGet package](https://www.nuget.org/packages/CurrieTechnologies.Razor.Clipboard/)

    ```
    Install-Package CurrieTechnologies.Razor.Clipboard
    ```

2) In your Blazor app's `Startup.cs`, register the 'ClipboardService'.

    ```
    public void ConfigureServices(IServiceCollection services)
    {
        ...
        services.AddClipboard();
        ...
    }
    ```
3) Add this script tag in  your root html file (Likely _Host.cshtml), right under the `<script src="_framework/blazor.server.js"></script>` tag.
    ```html
    <script src="_content/currietechnologiesclipboard/clipboard.js"></script>
    ```

4) Now you can inject the ClipboardService into any Blazor page and use it like this:

    ```
    @using CurrieTechnologies.Blazor.Clipboard
    @inject ClipboardService clipboard
    
    <input @bind="@textValue" />
    <button @onclick="@(async e => await clipboard.WriteTextAsync(textValue))">Copy To Clipboard</button>
    <button @onclick="@(async e => textValue = await clipboard.ReadTextAsync())">Paste From Clipboard</button>

    @code
    {
        string textValue = string.Empty;
    }
    ```
