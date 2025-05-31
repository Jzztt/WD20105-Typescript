import { z } from "zod";

// rule validate
export const ProductSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  price: z.number().min(0),
  description: z.string(),
  category: z.string().min(3, { message: "Category is required" }),
});

export type ProductSchemaType = z.infer<typeof ProductSchema>;