import { NextResponse } from "next/server";

function cleanValue(value, maxLength = 800) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, maxLength);
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function isValidKazakhstanPhone(value) {
  return /^7\d{10}$/.test(normalizeKazakhstanPhone(value));
}

function normalizeKazakhstanPhone(value) {
  const digits = String(value || "").replace(/\D/g, "");

  if (/^\d{10}$/.test(digits)) {
    return `7${digits}`;
  }

  if (/^8\d{10}$/.test(digits)) {
    return `7${digits.slice(1)}`;
  }

  return digits;
}

export async function POST(request) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return NextResponse.json(
      { error: "Telegram bot token or chat id is not configured." },
      { status: 500 },
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const lead = {
    name: cleanValue(body.name, 120),
    phone: cleanValue(normalizeKazakhstanPhone(body.phone), 80),
    business: cleanValue(body.business, 80),
    message: cleanValue(body.message, 1000),
  };

  if (!lead.name || !lead.phone) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  if (!isValidKazakhstanPhone(lead.phone)) {
    return NextResponse.json({ error: "не правильно введен номер" }, { status: 400 });
  }

  const text = [
    "<b>Новая заявка с сайта Berestova accounting</b>",
    "",
    `<b>Имя:</b> ${escapeHtml(lead.name)}`,
    `<b>Телефон:</b> ${escapeHtml(lead.phone)}`,
    `<b>Формат бизнеса:</b> ${escapeHtml(lead.business || "Не указан")}`,
    `<b>Задача:</b> ${escapeHtml(lead.message || "Не указана")}`,
  ].join("\n");

  const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      disable_web_page_preview: true,
      parse_mode: "HTML",
      text,
    }),
  });

  if (!telegramResponse.ok) {
    return NextResponse.json(
      { error: "Telegram rejected the lead message." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
