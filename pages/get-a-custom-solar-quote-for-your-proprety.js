import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

import Layout from "components/Layout";

import { questions } from "data";

const QuizCard = ({ questions, currentQuestion, handleClick }) => {
  return (
    <Box
      bg="bg-surface"
      bgColor="white"
      color="blackAlpha.800"
      boxShadow={useColorModeValue("sm", "sm-dark")}
      borderRadius="lg"
      p={{ base: "4", md: "6" }}
    >
      <Stack spacing="5">
        <Stack spacing="1">
          <Text fontSize="lg" fontWeight="medium">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </Text>
          <Text fontSize="sm" color="muted">
            {questions[currentQuestion].questionText}
          </Text>
        </Stack>
        <Stack direction={{ base: "column", md: "row" }} spacing="3">
          {questions[currentQuestion].answerOptions.map((answerOption) => (
            <Button onClick={() => handleClick(answerOption.isCorrect)}>
              {answerOption.answerText}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default function GetACustomSolarQuoteForYourProperty() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(0);

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizComplete(true);
    }
  };

  const headingLineHeightValue = useBreakpointValue({
    base: "1xl",
    lg: "69px",
  });

  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Layout showBottomPageCTA={false}>
      <Box
        as="section"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="gray.800"
        py="12"
        position="relative"
        minH="calc(100vh - 92px)"
        bgImage="/solar_roof.jpg"
        bgSize="cover"
        bgPosition="center"
        _after={{
          content: `""`,
          display: "block",
          w: "full",
          h: "full",
          bg: "blackAlpha.700",
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
          h="full"
          zIndex={1}
          position="relative"
        >
          <Center
            flexDirection="column"
            textAlign="center"
            color="white"
            h="full"
          >
            <Heading
              size="2xl"
              fontWeight="extrabold"
              lineHeight={headingLineHeightValue}
            >
              {isDesktop ? (
                <>
                  Eligible to Completely <br />
                  Eliminate Your Energy Bill?
                </>
              ) : (
                "Eligible to Completely Eliminate Your Energy Bill?"
              )}
            </Heading>
            <Text fontSize="lg" maxW={800} margin="16px auto 32px auto">
              Yep, it's possible, easy, and affordable 😳 Take the quiz to find
              out 👀 Complete the whole quiz to enter for a chance to win Cash
              💰 towards your Solar Installation, on us. "What's the catch?"
              None. Just take the quiz and find out.
            </Text>
            <QuizCard {...{ handleClick, questions, currentQuestion }} />
          </Center>
        </Box>
      </Box>
    </Layout>
  );
}
