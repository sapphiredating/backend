import { Router } from "express";
const router = Router();

router.post("/test", (_req, res, _next) => {
  console.log("Test route hit");
  res.status(200).send();
});

interface ITestChat {
  name: string;
  last_message: string;
  last_message_read: boolean | "user sent last message";
  streak?: number;
  time_left?: string;
}

interface ITestMessage {
  sent_by: "you" | "them";
  message: string;
}

router.get("/mesagges_test_fahitza_cleo", (_req, res, _next) => {
  const test_messages: ITestMessage[] = [
    {
      sent_by: "you",
      message:
        "Hey Cleo, I saw your post about Wicked. I love that musical too! What did you think of it?",
    },
    {
      sent_by: "them",
      message: "i LOVED Wicked too!!! what was your favorite song?",
    },
  ];
  res.status(200).json(test_messages);
});

router.get("/messages_tab_test", (_req, res, _next) => {
  const test_messages_tab: ITestChat[] = [
    {
      name: "Sushmita",
      last_message: "Doing well, thanks for asking.",
      last_message_read: "user sent last message",
      streak: 1,
    },
    {
      name: "Cleo",
      last_message: "i LOVED Wicked too!!! what was your favorite song?",
      last_message_read: false,
      streak: 3,
    },
    {
      name: "Nellie",
      last_message: "you have a thing for what?",
      last_message_read: "user sent last message",
      streak: 3,
    },
    {
      name: "Merrick",
      last_message: "i'll be in arizona then too! we should totally hang out",
      last_message_read: true,
      time_left: "2 days",
    },
    {
      name: "Sophia",
      last_message: "when did you move to new york?",
      last_message_read: "user sent last message",
      time_left: ">1 hour",
    },
  ];
  res.status(200).json(test_messages_tab);
});

export default router;
