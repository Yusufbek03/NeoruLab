"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  contact: z.string().min(5),
  service: z.string().min(1),
  message: z.string().min(10),
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

async function sendTelegramNotification(lead: z.infer<typeof formSchema>) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn("Telegram Bot Token or Chat ID is not configured in env variables.");
    return false;
  }

  const text = `
<b>🔔 Новая заявка на NeoruLab!</b>

👤 <b>Имя:</b> ${escapeHtml(lead.name)}
🏢 <b>Компания:</b> ${escapeHtml(lead.company || "Не указана")}
📞 <b>Контакты:</b> ${escapeHtml(lead.contact)}
💼 <b>Услуга:</b> ${escapeHtml(lead.service)}

💬 <b>Сообщение:</b>
${escapeHtml(lead.message)}
`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "HTML",
      }),
    });

    const result = await response.json();
    if (!result.ok) {
      console.error("Telegram API Error:", result);
      return false;
    }
    return true;
  } catch (error) {
    console.error("Failed to send Telegram notification:", error);
    return false;
  }
}

export async function submitLead(data: z.infer<typeof formSchema>) {
  // Simulate database delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  try {
    const validatedData = formSchema.parse(data);
    
    console.log("Backend received new lead:", validatedData);
    
    // Send to Telegram
    const tgSent = await sendTelegramNotification(validatedData);
    if (!tgSent) {
      console.warn("Could not send Telegram notification, but form submission is successful.");
    }
    
    return { success: true, message: "Заявка успешно отправлена!" };
  } catch (error) {
    console.error("Form submission error:", error);
    return { success: false, message: "Ошибка при отправке. Попробуйте позже." };
  }
}
