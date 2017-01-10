using System;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using SchoolCalendarSystem.server.Core;
using SchoolCalendarSystem.server.Core.Interfaces;
using SchoolCalendarSystem.server.Core.Interfaces.Services;
using SchoolCalendarSystem.server.Core.Model;
using SchoolCalendarSystem.server.Core.Services;

namespace SchoolCalendarSystem
{
    public class Startup
    {
        public IConfigurationRoot Configuration { get; }

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                 .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json")
                .AddEnvironmentVariables();

            Configuration = builder.Build();
        }

        public void ConfigureServices(IServiceCollection services)
        {
           services.AddDbContext<AppDbContext>(
                options =>
                {
                    options.UseSqlite(Configuration.GetConnectionString("DefaultConnection"));
                });

            services.AddMvc()
                   .AddJsonOptions(options => options.SerializerSettings.ReferenceLoopHandling
                       = Newtonsoft.Json.ReferenceLoopHandling.Ignore)
                   .AddJsonOptions(
                       option => option.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver());

            services.AddCors(options =>
                                options.AddPolicy("AllowAll", p => p.AllowAnyOrigin()
                                                                    .AllowAnyMethod()
                                                                    .AllowAnyHeader()
                                                                    .WithMethods("POST", "GET")));
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddTransient<IAccountServie, AccountService>();
            services.AddTransient<IAppoitmentService, AppointmentService>();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();
            app.UseDefaultFiles(GetDefaultFileOptions());
            app.UseCors("AllowAll");
            app.UseStaticFiles();
            app.UseMvc();

            if (env.IsDevelopment())
            {
    
                // SetupDatabse(app);
                // SeedData(app);
            }
        }

        private DefaultFilesOptions GetDefaultFileOptions()
        {
            DefaultFilesOptions options = new DefaultFilesOptions();
            options.DefaultFileNames.Clear();
            options.DefaultFileNames.Add("App.html");
            return options;
        }

        private void SetupDatabse(IApplicationBuilder app)
        {
            var dbContext = app.ApplicationServices.GetRequiredService<AppDbContext>();
           // dbContext.Database.EnsureDeleted();
           // dbContext.Database.EnsureCreated();
        }

        private void SeedData(IApplicationBuilder app)
        {
            var dbContext = app.ApplicationServices.GetRequiredService<AppDbContext>();
            dbContext.Users.Add(new User { Username = "saad@gmail.com", Password = "saad" });
            dbContext.SaveChanges();

            var savesUser = dbContext.Users.SingleOrDefault(u => u.Username == "saad@gmail.com" && u.Password == "saad");
            dbContext.Appointments.Add(new Appointment
            {
                Description = "Some Appointment",
                StartDateTime = DateTime.Now,
                EndDateTime = DateTime.Now.AddDays(1),
                User = savesUser
            });
            dbContext.SaveChanges();
        }
    }
}
