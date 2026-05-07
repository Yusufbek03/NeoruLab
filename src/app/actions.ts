"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  contact: z.string().min(5),
  service: z.string().min(1),
  message: z.string().min(10),
});

export async function submitLead(data: z.infer<typeof formSchema>) {
  // Simulate database delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    const validatedData = formSchema.parse(data);
    
    // In a real scenario, you would save this to Supabase or send an email
    console.log("Backend received new lead:", validatedData);
    
    return { success: true, message: "Заявка успешно отправлена!" };
  } catch (error) {
    console.error("Form submission error:", error);
    return { success: false, message: "Ошибка при отправке. Попробуйте позже." };
  }
}
