import axios from "axios";
import { scheduler } from "timers/promises";

export async function postMessage() {
  const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL;

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting
    .executeScript({
      target: { tabId: tab.id },
      func: getMessage,
    })
    .then((injectionResults) => {
      for (const { result: message } of injectionResults) {
        axios.post(WEBHOOK_URL, {
          content: message,
        });
      }
    });
}

function getMessage(): string {
  const TITLE = process.env.NEXT_PUBLIC_TITLE;
  const DECORATION = "-".repeat(TITLE.length * 2);

  const todaysScheduleList = Array.from(
    document
      .querySelector(".s_user_week.normalEvent")
      .querySelectorAll(".group_week_calendar_item")
  );

  const message =
    `${DECORATION}\n${TITLE}\n${DECORATION}\n` +
    (todaysScheduleList.length
      ? todaysScheduleList
          .map((schedule) => {
            let eventTime = schedule.querySelector(".listTime a").textContent;
            // TODO: 最後にimgが入る例を確認したので、lastChildは使えない
            let eventName = schedule.querySelector(".groupWeekEventTitle a")
              .lastChild.textContent;
            return `${eventTime}: ${eventName}`;
          })
          .join("\n")
      : "今日は何もないみたい!!") +
    `\n${DECORATION}`;

  return message;
}
