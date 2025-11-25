import { Category } from "../models/categoryModel";

export const categorySeeder = async () => {
  try {
    const exists = await Category.findOne();
    if (exists) {
      console.log("📘 Categories already seeded");
      return;
    }

    const categories = [
      { name: "Vegetables", description: "All types of fresh vegetables" },
      { name: "Fruits", description: "Fresh and seasonal fruits" },
      { name: "Seeds", description: "Seeds for planting" },
      { name: "Fertilizer", description: "Agriculture fertilizers" },
      { name: "Tools", description: "Farming tools and equipment" },
    ];

    await Category.insertMany(categories);

    console.log("✅ Category seeding completed");
  } catch (error) {
    console.error("❌ Category seeding failed:", error);
  }
};
