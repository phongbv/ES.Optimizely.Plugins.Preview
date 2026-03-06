using EPiServer.Shell.Modules;

namespace Microsoft.Extensions.DependencyInjection;

public static class PreviewButtonExtension
{
    public static IServiceCollection AddPreviewButton(this IServiceCollection services)
    {
        services.Configure<ProtectedModuleOptions>(x =>
        {
            if (!x.Items.Any(x => x.Name.Equals("PreviewButton")))
            {
                x.Items.Add(new ModuleDetails
                {
                    Name = "PreviewButton"
                });
            }
        });

        return services;
    }
}