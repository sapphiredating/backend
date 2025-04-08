import { Router } from "express";
import { readFileSync } from "fs";

function fileToBlob(path: string, mimeType: string): Blob {
  const fileBuffer = readFileSync(path);
  return new Blob([fileBuffer], { type: mimeType });
}

const router = Router();

/* GET home page. */
router.get("/secret_page", function (req, res, next) {
  res.send("You found the secret page");
});

interface MatchCard {
  id: string;
  title?: string;
  content?: string;
  additionalImage?: Blob;
}

interface PotentialMatch {
  id: number;
  name: string;
  tagline: string;
  //   profileImage: Blob;
  cards: MatchCard[];
}

const potentialMatches: PotentialMatch[] = [
  {
    id: 1,
    name: "Sushmita",
    tagline: "Cat Lover | Foodie | Dog Lover",
    // profileImage: fileToBlob("assets/images/Sushmita.png", "image/png"),
    cards: [
      {
        id: "1",
        title: "You and Sushmita...",
        content:
          "have similar relationship foundations in honesty, romance, and humor. Her desire to try new foods and travel to far away places compliments your passion for trying something new everyday! You are both obsessed with dogs!",
      },
      {
        id: "2",
        // additionalImage: fileToBlob(
        //   "assets/images/photo1.jpeg",
        //   "image/jpeg"
        // ),
      },
      {
        id: "3",
        title: "My feral Saturday night includes...",
        content: "Drinking and calling out at a jale bar!",
      },
      {
        id: "4",
        // additionalImage: fileToBlob(
        //   "assets/images/photo4.jpeg",
        //   "image/jpeg"
        // ),
      },
      {
        id: "5",
        title: "My favorite song right now is...",
        content: "Bubble Gum by Clairo",
      },
      {
        id: "6",
        // additionalImage: fileToBlob(
        //   "assets/images/photo3.jpeg",
        //   "image/jpeg"
        // ),
      },
    ],
  },
];

router.get("/potential-matches", (req, res) => {
  res.json(potentialMatches);
});

interface MessageItem {
  id: string;
  name: string;
  snippet: string;
  streak?: number; // e.g., 3
  timeLeft?: number; // number of hours left (e.g., 1 means 1 hour left, 30 means 30 hours left)
  yourMove?: boolean; // true if it's your turn to reply
  avatar?: string; // optional avatar image URL
}

const MESSAGES: MessageItem[] = [
  {
    id: "1",
    name: "Sushmita",
    snippet: "Doing well, thanks for asking.",
    streak: 1,
    yourMove: false,
  },
  {
    id: "2",
    name: "Cleo",
    snippet: "I LOVED Wicked too!!! what was your favorite song?",
    streak: 3,
    yourMove: true,
  },
  {
    id: "3",
    name: "Nellie",
    snippet: "you have a thing for what?",
    streak: 3,
    yourMove: false,
  },
  {
    id: "4",
    name: "Merrick",
    snippet: "I'll be in Arizona then too! we should totally hang out",
    streak: 2,
    yourMove: true,
  },
  {
    id: "5",
    name: "Sophia",
    snippet: "when did you move to new york?",
    streak: 4,
    yourMove: false,
    timeLeft: 1, // 1 hour left
  },
  {
    id: "6",
    name: "Alex",
    snippet: "Just checking in!",
    streak: 5,
    yourMove: true,
    timeLeft: 30, // 30 hours left (will display as "1 day left")
  },
];

router.get("/messages", (req, res) => {
  res.json(MESSAGES);
});

export default router;
