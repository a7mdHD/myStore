using API.Entities;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

namespace API.Data.SeedData;

public class StoreContextSeed
{
    public static async Task SeedAsync(StoreContext context)
    {
        if (await context.Products.AnyAsync()) return;

        var productsData = File.ReadAllText("../API/Data/SeedData/productsData.json");

        var products = JsonSerializer.Deserialize<List<Product>>(productsData)!;

        context.Products.AddRange(products);

        await context.SaveChangesAsync();
    }
}
