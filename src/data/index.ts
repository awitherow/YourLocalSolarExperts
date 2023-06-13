import { getArticles, getLatestArticles, getCategories, getPopularCategories } from "./blog";
import { getProducts } from "./products";
import { getCities } from "./locations";

export const questions = [
  {
    id: "awareness",
    questionText: "Coal Plants Nationwide are being forced to shut down due to Federal Legislation as of March 2023",
    answerOptions: [
      { answerText: "True", isCorrect: true },
      { answerText: "False", isCorrect: false },
    ],
  },
  {
    id: "plan",
    questionText:
      "You have a energy backup plan for pending rolling blackouts, utility price hikes and energy rental from high cost states (increased probabilities after March 2023)",
    answerOptions: [
      { answerText: "True", isCorrect: false },
      { answerText: "False", isCorrect: true },
    ],
  },
  {
    id: "upgrades",
    questionText:
      "You have already made energy efficiency upgrades to your house like LED Lights, Smart Thermostats, etc.",
    answerOptions: [
      { answerText: "True", isCorrect: false },
      { answerText: "False", isCorrect: true },
    ],
  },
  {
    id: "homeowner",
    questionText: "You are the homeowner, or are in good relationship with homeowners that you rent from.",
    answerOptions: [
      { answerText: "True", isCorrect: true },
      { answerText: "False", isCorrect: false },
    ],
  },
  {
    id: "avg_bill",
    questionText: "What's your average utility bill cost look like?",
    answerOptions: [
      { answerText: "$50+", isCorrect: false },
      { answerText: "$100+", isCorrect: true },
      { answerText: "$200+", isCorrect: true },
      { answerText: "$300+", isCorrect: true },
      { answerText: "More! 😵", isCorrect: true },
    ],
  },
  {
    id: "credit",
    questionText: "Is your Credit Score above 650?",
    answerOptions: [
      { answerText: "True", isCorrect: true },
      { answerText: "False", isCorrect: false },
    ],
  },
  {
    id: "income",
    questionText: "Is your combined taxable household income above $40,000?",
    answerOptions: [
      { answerText: "True", isCorrect: true },
      { answerText: "False", isCorrect: false },
    ],
  },
  {
    id: "residence",
    questionText: "What type of home do you live in?",
    answerOptions: [
      { answerText: "Single Family", isCorrect: true },
      { answerText: "Multi Family", isCorrect: false },
      { answerText: "Condo", isCorrect: false },
      { answerText: "Trailer", isCorrect: false },
      { answerText: "Other", isCorrect: false },
    ],
  },
  {
    id: "ready",
    questionText: "How soon would you like to Own your Energy and Stop Renting from a Monopoly?",
    answerOptions: [
      { answerText: "Right Now!", isCorrect: true },
      { answerText: "This Month", isCorrect: true },
      { answerText: "This Year", isCorrect: false },
      { answerText: "Need Info", isCorrect: false },
    ],
  },
];

export const posts = [
  {
    id: "1",
    title: "How to Save 26% With the Federal Tax Credit in 2022",
    excerpt:
      "The Federal Tax Credit is going away more and more each year. As of right now in 2022, it's set at 26%. For any taxpayer, anything you do to upgrade to renewable energy can be included! This means your solar installation, any light ugprades, smart thermostats, insulation, reroofing, batteries, generators and more can be included. This Tax Credit might go away at the end of the year, in 2023, because it must go up for renewable. There's a chance that it'll either end, or go down to 20%. Don't wait around to claim this tax credit. Save yourself from getting price gouged by your Utility provider and claim your Tax Credit with Your Local Solar Experts.",
    image: "/_tmp/tax_return.jpg",
    tags: [
      { label: "Taxes", color: "blue" },
      { label: "Savings", color: "green" },
    ],
    publishedAt: "July 21, 2022",
    author: {
      name: "Austin Witherow",
      avatarUrl: "/_tmp/savant.png",
    },
  },
  {
    id: "2",
    title: "Are Solar Panels Actually Worth It?",
    excerpt:
      "Are solar panels actually worth it? It's one of the most common questions I get, ahd the answer is a resounding YES! Not only are solar panels going to help you completely eliminate or massively offset your energy bill, but you'll build tens of thousands of dollars in equity in your home with your installation!",
    image: "/_tmp/scales.jpg",
    tags: [
      { label: "Investment", color: "green" },
      { label: "Equity", color: "green" },
    ],
    publishedAt: "July 21, 2022",
    author: {
      name: "Austin Witherow",
      avatarUrl: "/_tmp/savant.png",
    },
  },
  {
    id: "3",
    title: "What are SRECs and How Can I Earn Them?",
    excerpt:
      "Have you heard of Solar Renewable Energy Credits? It's a really awesome benefit that comes with solar installations in certain states. One of the states that offers SRECs is Virginia! An SREC is sort of like an options contract, for your energy. You're allowed to sell the credit at any time, for cash, in a fluctuating market. Wait till the time is right, and reduce your solar bill by up to $100/year!",
    image: "/_tmp/chart_rising.jpg",
    tags: [{ label: "Investment", color: "green" }],
    publishedAt: "July 21, 2022",
    author: {
      name: "Austin Witherow",
      avatarUrl: "/_tmp/savant.png",
    },
  },
  {
    id: "4",
    title: "Lock In Your 1-1 Net Meter Rate!",
    excerpt:
      "Unfortunately, some states like Hawai'i, California and Nevada have either eliminated Net Metering entirely, or drastically reduced the rate at which you get the energy you share with the grid back when you need it. Luckily in states like Virgnia, you can stil claim the 1-1 tier. Meaning in the summer when you produce electricity like crazy, you'll get credited back that energy when you need it, 1-1, in the winter!",
    image: "/_tmp/handshake.jpg",
    tags: [{ label: "Know Your Rights", color: "blue" }],
    publishedAt: "July 21, 2022",
    author: {
      name: "Austin Witherow",
      avatarUrl: "/_tmp/savant.png",
    },
  },
];

export { getCities, getArticles, getLatestArticles, getCategories, getPopularCategories, getProducts };
