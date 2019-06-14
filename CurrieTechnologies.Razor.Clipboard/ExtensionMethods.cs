using Microsoft.Extensions.DependencyInjection;

namespace CurrieTechnologies.Razor.Clipboard
{
    public static class ExtensionMethods
    {
        public static IServiceCollection AddClipboard(this IServiceCollection services)
        {
            return services.AddScoped<ClipboardService>();
        }
    }
}
