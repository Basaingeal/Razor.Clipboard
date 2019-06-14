# CurrieTechnologies.Blazor.Clipboard
This package provides Blazor applications with access to the browser's [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard)

## Usage
1) In your Blazor app, add the `CurrieTechnologies.Blazor.Clipboard` [NuGet package](https://www.nuget.org/packages/CurrieTechnologies.Blazor.Clipboard/)

    ```
    Install-Package CurrieTechnologies.Blazor.Clipboard
    ```

1) In your Blazor app's `Startup.cs`, register the 'ClipboardService'.

    ```
    public void ConfigureServices(IServiceCollection services)
    {
        ...
        services.AddClipboard();
        ...
    }
    ```

1) Now you can inject the ClipboardService into any Blazor page and use it like this:

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
