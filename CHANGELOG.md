# v1.4.0

## Dependencies

### Multi-targetting enabled

Blazor dependencies are now dependant on which version of .NET is being used in the application.

#### .NETCoreApp 3.1

- `Microsoft.AspNetCore.Components` (>= `3.1.0` && < `5.0.0`)
- `Microsoft.AspNetCore.Components.Web` (>= `3.1.0` && < `5.0.0`)

#### .NETStandard 2.0

- `Microsoft.AspNetCore.Components` (>= `3.1.0` && < `5.0.0`)
- `Microsoft.AspNetCore.Components.Web` (>= `3.1.0` && < `5.0.0`)

#### net5.0

- `Microsoft.AspNetCore.Components` (>= `5.0.0` && < `6.0.0`)
- `Microsoft.AspNetCore.Components.Web` (>= `5.0.0` && < `6.0.0`)

## Preview .NET 6 support

.NET 6 is enabled as a framework target.
Currently this will use preview versions of the Blazor component libraries.
These will be upgraded to non-preview when .NET 6 becomes generally available.
