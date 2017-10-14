﻿using System.Reflection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace MuaythaiSportManagementSystemApi.WebSockets
{
    public static class WebSocketManagerExtensions
    {
        public static IServiceCollection AddWebSocketManager(this IServiceCollection services)
        {
            services.AddScoped<WebSocketConnectionManager>();

            foreach (var type in Assembly.GetEntryAssembly().ExportedTypes)
            {
                if (type.GetTypeInfo().BaseType == typeof(WebSocketHandler) || type.GetTypeInfo().BaseType == typeof(FightHandler))
                {
                    services.AddScoped(type);
                }
            }

            return services;
        }

        public static IApplicationBuilder MapWebSocketManager(this IApplicationBuilder app,
                                                              PathString path,
                                                              WebSocketHandler handler)
        {
            return app.Map(path, (_app) => _app.UseMiddleware<WebSocketManagerMiddleware>(handler));
        }
    }
}