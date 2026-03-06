# Eshn.Plugins.Preview

## License

- Eshn.Plugins.Preview is licensed under the [Apache License, Version 2.0](https://opensource.org/licenses/Apache-2.0)
- This package is add custom preview button that allows editors can open preview in new tab instead of embedded frame

## Installation

Eshn.Plugins.Preview is installed via [Optimizely nuget feed](https://nuget.optimizely.com/package/?id=Eshn.Plugins.Preview)

### Package Manager

```bash
PM > Install-Package Eshn.Plugins.Preview -Version VERSION_NUMBER
```

### .NET CLI

```bash
dotnet add package Eshn.Plugins.Preview --version VERSION_NAME
```

## Setup and configuration

Once installed you will need to add the following code to `ConfigurationServices` in your `Startup.cs` file. 

```csharp
public void ConfigureServices(IServiceCollection services) {
    // Add the default service and options.
    services.AddPreviewButton();
}

```