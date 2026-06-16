import { NextResponse } from "next/server";

type LeadPayload = {
  name?: unknown;
  company?: unknown;
  businessSphere?: unknown;
  leadSource?: unknown;
  automationGoal?: unknown;
  contact?: unknown;
  page?: unknown;
  createdAt?: unknown;
  website?: unknown;
  selectedPlan?: unknown;
  utm_source?: unknown;
  utm_medium?: unknown;
  utm_campaign?: unknown;
  utm_content?: unknown;
  utm_term?: unknown;
};

type UTM = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
};

type Lead = {
  name: string;
  company: string;
  businessSphere: string;
  leadSource: string;
  automationGoal: string;
  contact: string;
  page: string;
  createdAt: string;
  selectedPlan: string;
  utm: UTM;
};

const maxFieldLength = 500;
const telegramApiUrl = "https://api.telegram.org";

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON" },
      { status: 400 }
    );
  }

  if (toCleanString(payload.website)) {
    return NextResponse.json({ success: true });
  }

  const name = toCleanString(payload.name);
  const company = toCleanString(payload.company);
  const contact = toCleanString(payload.contact);

  if (name.length < 2 || company.length < 2 || contact.length < 3) {
    return NextResponse.json(
      { success: false, error: "Name, company and contact are required" },
      { status: 400 }
    );
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return NextResponse.json(
      { success: false, error: "Telegram lead delivery is not configured" },
      { status: 503 }
    );
  }

  const lead: Lead = {
    name,
    company,
    businessSphere: toCleanString(payload.businessSphere),
    leadSource: toCleanString(payload.leadSource),
    automationGoal: toCleanString(payload.automationGoal),
    contact,
    page: toCleanString(payload.page) || "landing",
    createdAt: toIsoDate(payload.createdAt),
    selectedPlan: toCleanString(payload.selectedPlan),
    utm: normalizeUtm(payload)
  };

  try {
    const response = await fetch(
      `${telegramApiUrl}/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: formatLeadMessage(lead),
          disable_web_page_preview: true
        })
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: "Telegram request failed" },
        { status: 502 }
      );
    }
  } catch {
    return NextResponse.json(
      { success: false, error: "Telegram request failed" },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}

function toCleanString(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxFieldLength);
}

function toIsoDate(value: unknown) {
  if (typeof value === "string") {
    const date = new Date(value);
    if (!Number.isNaN(date.getTime())) return date.toISOString();
  }

  return new Date().toISOString();
}

function normalizeUtm(payload: LeadPayload): UTM {
  return {
    utm_source: toCleanString(payload.utm_source),
    utm_medium: toCleanString(payload.utm_medium),
    utm_campaign: toCleanString(payload.utm_campaign),
    utm_content: toCleanString(payload.utm_content),
    utm_term: toCleanString(payload.utm_term)
  };
}

function formatLeadMessage(lead: Lead) {
  const empty = "не указано";
  const emptyUtm = "-";

  const selectedPlan = lead.selectedPlan
    ? `\nВыбранный тариф: ${lead.selectedPlan}\n`
    : "";

  return [
    "Новая заявка с сайта altrics",
    "",
    `Имя: ${lead.name}`,
    `Компания: ${lead.company}`,
    `Сфера: ${lead.businessSphere || empty}`,
    `Где приходят заявки: ${lead.leadSource || empty}`,
    `Что хочет автоматизировать: ${lead.automationGoal || empty}`,
    "",
    `Контакт: ${lead.contact}`,
    selectedPlan,
    `Страница: ${lead.page}`,
    `Дата: ${lead.createdAt}`,
    "",
    "UTM:",
    `source: ${lead.utm.utm_source || emptyUtm}`,
    `medium: ${lead.utm.utm_medium || emptyUtm}`,
    `campaign: ${lead.utm.utm_campaign || emptyUtm}`,
    `content: ${lead.utm.utm_content || emptyUtm}`,
    `term: ${lead.utm.utm_term || emptyUtm}`
  ].join("\n");
}
