import axios from "axios";

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
        // axios.post(WEBHOOK_URL, {
        //   content: message,
        // });
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
            let [_eventTag, eventName] = Array.from(
              schedule.querySelector(".groupWeekEventTitle a").childNodes
            ).map((node) => node.textContent);
            return `${eventTime}: ${eventName}`;
          })
          .join("\n")
      : "今日は何もないみたい!!") +
    `\n${DECORATION}`;

  return message;
}
