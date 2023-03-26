// エラーハンドリング要必須

const TITLE = "今日のスケジュールをお知らせするよ!!";
const DECORATION = "-".repeat(TITLE.length * 2);

const todaysScheduleList = Array.from(
  document
    .querySelector(".s_user_week.normalEvent")
    .querySelectorAll(".group_week_calendar_item")
);

const message = todaysScheduleList.length
  ? `${DECORATION}\n${TITLE}\n${DECORATION}\n` +
    todaysScheduleList
      .map((schedule) => {
        let eventTime = schedule.querySelector(".listTime a").textContent;
        let eventName = schedule.querySelector(".groupWeekEventTitle a")
          .lastChild.textContent;
        return `${eventTime}: ${eventName}`;
      })
      .join("\n") +
    `\n${DECORATION}`
  : "今日は何もないみたい!!";

console.log(message);
