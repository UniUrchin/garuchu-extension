import axios from "axios";

const baseURL = "https://discord.com/api/webhooks/???";

export async function postMessage() {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting
    .executeScript({
      target: { tabId: tab.id },
      func: getMessage,
    })
    .then((injectionResults) => {
      for (const { result: message } of injectionResults) {
        console.log(message);
        axios.post(baseURL, {
          content: message,
        });
      }
    });
}

function getMessage() {
  const TITLE = "今日のスケジュールをお知らせするよ!!";
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
            let eventName = schedule.querySelector(".groupWeekEventTitle a")
              .lastChild.textContent;
            return `${eventTime}: ${eventName}`;
          })
          .join("\n")
      : "今日は何もないみたい!!") +
    `\n${DECORATION}`;

  return message;
}
