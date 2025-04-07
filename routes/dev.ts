import { Router } from "express";
import { readFileSync } from "fs";

function fileToBlob(path: string, mimeType: string): Blob {
  const fileBuffer = readFileSync(path);
  return new Blob([fileBuffer], { type: mimeType });
}

const router = Router();

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
  profileImage: Blob;
  cards: MatchCard[];
}

const potentialMatches: PotentialMatch[] = [
  {
    id: 1,
    name: "Sushmita",
    tagline: "Cat Lover | Foodie | Dog Lover",
    profileImage: fileToBlob("assets/images/Sushmita.png", "image/png"),
    cards: [
      {
        id: "1",
        title: "You and Sushmita...",
        content:
          "have similar relationship foundations in honesty, romance, and humor. Her desire to try new foods and travel to far away places compliments your passion for trying something new everyday! You are both obsessed with dogs!",
      },
      {
        id: "2",
        additionalImage: fileToBlob(
          "assets/images/photo1.jpeg",
          "image/jpeg"
        ),
      },
      {
        id: "3",
        title: "My feral Saturday night includes...",
        content: "Drinking and calling out at a jale bar!",
      },
      {
        id: "4",
        additionalImage: fileToBlob(
          "assets/images/photo4.jpeg",
          "image/jpeg"
        ),
      },
      {
        id: "5",
        title: "My favorite song right now is...",
        content: "Bubble Gum by Clairo",
      },
      {
        id: "6",
        additionalImage: fileToBlob(
          "assets/images/photo3.jpeg",
          "image/jpeg"
        ),
      },
    ],
  },
];

router.get("/potential-matches", (req, res) => {
  res.json(potentialMatches);
});

export default router;
