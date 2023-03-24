import axios from "axios";

const baseURL = "https://discord.com/api/webhooks/???";

export function postDiscord() {
  axios.post(baseURL, {
    content: "Chrome拡張からのテストメッセージ"
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};