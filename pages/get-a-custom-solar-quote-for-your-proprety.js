import React, { useState } from "react";
import validator from "validator";
import {
  Box,
  Button,
  Center,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  Input,
  HStack,
  FormControl,
  FormLabel,
  Select,
  useToast,
  IconButton,
  Flex,
} from "@chakra-ui/react";

import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { ImPinterest2 } from "react-icons/im";

import Layout from "components/Layout";

import { questions, states } from "data";
import { notifyWebhook } from "helpers";

const popToast = ({ toast, title, description, status = "success" }) =>
  toast({
    title,
    description,
    status,
    duration: 9000,
    isClosable: true,
  });

const QuizCard = ({ questions, currentQuestion, handleQuickAnswerClick }) => (
  <Box
    bg="bg-surface"
    bgColor="green.500"
    color="white"
    borderRadius="lg"
    p={{ base: "4", md: "6" }}
    width="100%"
    maxW="768px"
  >
    <Stack spacing="5">
      <Stack spacing="1">
        <Text fontSize="lg" fontWeight="600">
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </Text>
        <Text fontSize="sm" color="muted">
          {questions[currentQuestion].questionText}
        </Text>
      </Stack>
      <Stack
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        spacing="3"
      >
        {questions[currentQuestion].answerOptions.map((answerOption) => (
          <Button
            key={answerOption.answerText}
            bgColor="white"
            color="green.500"
            onClick={() => handleQuickAnswerClick(answerOption)}
          >
            {answerOption.answerText}
          </Button>
        ))}
      </Stack>
    </Stack>
  </Box>
);

const FormCard = ({ onFormChange, handleSubmit, formValues }) => (
  <Box
    bg="bg-surface"
    bgColor="green.500"
    color="white"
    borderRadius="lg"
    p={{ base: "4", md: "6" }}
    width="100%"
    maxW="768px"
  >
    <Stack spacing={{ base: "4", md: "6" }}>
      <HStack spacing="2">
        {[
          {
            label: "Street Address",
            name: "street_address",
            placeholder: "1234 Fancy Pants Place",
            autoComplete: "street-address",
          },
        ].map(({ name, label, placeholder, ...rest }) => (
          <FormControl mt={2} key={name} id={name}>
            <FormLabel mb={0}>{label}</FormLabel>
            <Input
              name={name}
              value={formValues[name]}
              placeholder={placeholder}
              _placeholder={{ color: "whiteAlpha.500" }}
              borderColor={!!formValues[name] ? "whiteAlpha.500" : "red.500"}
              {...{ onChange: onFormChange, ...rest }}
            />
          </FormControl>
        ))}
      </HStack>
      <Stack direction={{ base: "column", md: "row" }} spacing="2">
        {[
          {
            label: "City",
            name: "city",
            placeholder: "Mechanicsville",
            autoComplete: "",
          },
          {
            label: "State",
            name: "state",
            placeholder: "",
            type: "select",
            autoComplete: "",
          },
          {
            label: "Zipcode",
            name: "zipcode",
            placeholder: "23111",
            autoComplete: "",
          },
          {
            label: "Country",
            name: "country",
            placeholder: "U.S.A",
            autoComplete: "country",
          },
        ].map(({ name, label, placeholder, type, ...rest }) => (
          <FormControl mt={2} key={name} id={name}>
            <FormLabel mb={0}>{label}</FormLabel>
            {type === "select" && name === "state" ? (
              <Select
                name={name}
                value={formValues[name]}
                placeholder={placeholder}
                borderColor={!!formValues[name] ? "whiteAlpha.500" : "red.500"}
                {...{ onChange: onFormChange, ...rest }}
              >
                {Object.keys(states).map((state) => (
                  <option key={state} value={state}>
                    {states[state]}
                  </option>
                ))}
              </Select>
            ) : (
              <Input
                name={name}
                value={formValues[name]}
                placeholder={placeholder}
                _placeholder={{ color: "whiteAlpha.500" }}
                borderColor={!!formValues[name] ? "whiteAlpha.500" : "red.500"}
                {...{ onChange: onFormChange, ...rest }}
              />
            )}
          </FormControl>
        ))}
      </Stack>
      <Stack direction={{ base: "column", md: "row" }} spacing="4">
        {[
          {
            label: "Name",
            name: "name",
            placeholder: "Name",
            autoComplete: "name",
          },
          {
            label: "Phone",
            name: "phone",
            placeholder: "Phone",
            autoComplete: "phone",
          },
          {
            label: "Email",
            name: "email",
            placeholder: "Email",
            autoComplete: "email",
          },
        ].map(({ name, label, placeholder, ...rest }) => (
          <FormControl mt={2} key={name} id={name}>
            <FormLabel mb={0}>{label}</FormLabel>
            <Input
              name={name}
              value={formValues[name]}
              placeholder={placeholder}
              borderColor={!!formValues[name] ? "whiteAlpha.500" : "red.500"}
              _placeholder={{ color: "whiteAlpha.500" }}
              {...{ onChange: onFormChange, ...rest }}
            />
          </FormControl>
        ))}
      </Stack>
      <HStack align="center" justify="center">
        <Button
          {...{
            colorScheme: "whiteAlpha",
            onClick: handleSubmit,
          }}
        >
          Enter For Your Chance to Win!
        </Button>
      </HStack>
    </Stack>
  </Box>
);

const EMPTY_CONTACT = {
  name: "",
  phone: "",
  anon: "",
};

const ReferralCard = ({
  referrals,
  setReferrals,
  handleReferralUpload,
  onReferralChange,
  removeReferral,
}) => (
  <Box
    bg="bg-surface"
    bgColor="green.500"
    color="white"
    borderRadius="lg"
    p={{ base: "4", md: "6" }}
    width="100%"
    maxW="768px"
  >
    <Stack spacing="5">
      <Stack spacing="1">
        <Text fontSize="lg" fontWeight="medium">
          Earn $250 - $500 Per Lead Close!
        </Text>
        <Text fontSize="sm" color="muted">
          Whether you want me to get in touch with them anonymously, or with you
          permission, you let us know.
        </Text>
      </Stack>
      <Stack direction="column">
        {referrals.map((referral, i) => (
          <Box
            key={i}
            bg="bg-surface"
            bgColor="whiteAlpha.900"
            color="blackAlpha.700"
            borderRadius="lg"
            p={{ base: "2", md: "4" }}
          >
            {[
              {
                label: "Name",
                name: "name",
                placeholder: "Referrals Name",
              },
              {
                label: "Phone",
                name: "phone",
                placeholder: "Phone Number",
              },
              {
                label: "How Should We Contact Them?",
                name: "anon",
                placeholder: "",
                type: "select",
              },
            ].map(({ name, label, placeholder, type, ...rest }) => (
              <FormControl mt={2} key={name} id={name}>
                <FormLabel mb={0}>{label}</FormLabel>
                {type === "select" ? (
                  <Select
                    name={name}
                    value={referral[name]}
                    placeholder={placeholder}
                    borderColor={
                      !!referral[name] ? "blackAlpha.500" : "red.500"
                    }
                    {...{
                      onChange: (e) => onReferralChange(i, e),
                      ...rest,
                    }}
                  >
                    {[
                      {
                        value: "",
                        label: "",
                      },
                      {
                        value: "anonymous",
                        label: "Don&apos;t Mention Me To Them",
                      },
                      {
                        value: "wait_to_confirm",
                        label: "Let Me Reach Out First",
                      },
                      {
                        value: "go_ahead",
                        label: "Tell Them I Sent You!",
                      },
                    ].map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </Select>
                ) : (
                  <Input
                    name={name}
                    value={referral[name]}
                    placeholder={placeholder}
                    _placeholder={{ color: "blackAlpha.500" }}
                    borderColor={
                      !!referral[name] ? "blackAlpha.500" : "red.500"
                    }
                    {...{
                      onChange: (e) => onReferralChange(i, e),
                      ...rest,
                    }}
                  />
                )}
              </FormControl>
            ))}
            <Flex justify="end" mt={2}>
              <Button
                colorScheme="red"
                size="xs"
                onClick={() => removeReferral(i)}
              >
                Delete
              </Button>
            </Flex>
          </Box>
        ))}
      </Stack>

      <Stack
        direction={{ base: "column", md: "row" }}
        spacing="3"
        justify="space-between"
      >
        <Button
          bgColor="white"
          color="green.500"
          onClick={() => setReferrals([...referrals, EMPTY_CONTACT])}
        >
          Add Row
        </Button>
        <Button
          bgColor="white"
          color="green.500"
          onClick={handleReferralUpload}
        >
          Upload Referrals
        </Button>
      </Stack>
    </Stack>
  </Box>
);

export default function GetACustomSolarQuoteForYourProperty() {
  const toast = useToast();
  // VETTING QUIZ
  const [answers, setAnswers] = useState({
    awareness: null,
    plan: null,
    upgrades: null,
    homeowner: null,
    avg_bill: null,
    credit: null,
    income: null,
    ready: null,
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuickAnswerClick = ({ answerText, isCorrect }) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    setAnswers({ ...answers, [questions[currentQuestion].id]: answerText });

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizComplete(true);
    }
  };

  // FORM SUBMISSION

  const DEFAULT_FORM_STATE =
    process.env.NODE_ENV === "development"
      ? {
          street_address: "1071 Old Church Road",
          city: "Mechanicsville",
          state: "VA",
          zipcode: "23111",
          country: "U.S.A",
          name: "Austin Witherow",
          phone: "+18042442395",
          email: "austin@buildleansaas.com",
        }
      : {
          street_address: "",
          city: "",
          state: "",
          zipcode: "",
          country: "",
          name: "",
          phone: "",
          email: "",
        };

  const [formComplete, setFormComplete] = useState(false);
  const [formValues, setFormValues] = useState(DEFAULT_FORM_STATE);

  const onFormChange = (e) =>
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async () => {
    const empties = Object.values(formValues).filter((entry) => !!length);

    if (empties.length)
      return popToast({
        toast,
        title: "Form Error",
        description: "All fields are required, please complete the form :)",
        status: "error",
      });

    if (!validator.isEmail(formValues.email))
      return popToast({
        toast,
        title: "Form Error",
        description: "Please format your email like test@domain.com",
        status: "error",
      });

    if (!validator.isMobilePhone(formValues.phone))
      return popToast({
        toast,
        title: "Form Error",
        description: "Please format your phone number like +18044043941",
        status: "error",
      });

    console.log("form input passed, storing to database");

    try {
      const webhookResponse = notifyWebhook(
        "https://hooks.zapier.com/hooks/catch/10963345/bgncw28/",
        { ...formValues, ...answers }
      );

      if (!String(webhookResponse.status).includes(40)) {
        const messages = [
          {
            toast,
            title: "Success",
            description:
              "You&apos;re now entered in the raffle to get up to 6 months off your installation!",
            status: "success",
          },
          {
            toast,
            title: "Success",
            description:
              "We&apos;ll send you an email to finalize the process to get you free proposal!",
            status: "success",
          },
        ].forEach((props) => popToast(props));

        setFormComplete(true);
      }
    } catch (e) {
      console.error(e);
      popToast({
        toast,
        title: "Error",
        description: e.message,
        status: "error",
      });
    }
  };

  // REFERRALS
  const [referrals, setReferrals] = useState([EMPTY_CONTACT]);
  const [referralsComplete, setReferralsComplete] = useState(false);

  const removeReferral = (removeIndex) =>
    setReferrals([...referrals.filter((_, index) => index !== removeIndex)]);
  const onReferralChange = (i, e) => {
    const localReferrals = referrals;
    const prevRef = localReferrals[i];
    localReferrals[i] = {
      ...prevRef,
      [e.target.name]: e.target.value,
    };
    setReferrals([...localReferrals]);
  };

  const handleReferralUpload = async () => {
    const filledRefs = referrals.filter(({ phone, name }) => !!phone && !!name);
    const errored = filledRefs.filter(({ phone, name }) => {
      if (!name) return true;
      if (!validator.isMobilePhone(phone)) return true;
    });

    if (errored.length) {
      return popToast({
        toast,
        title: "Referral Error",
        description:
          "Please name sure that all names and phone numbers are properly filled on all entries",
        status: "error",
      });
    } else {
      const createWebhookAttempt = (body) =>
        new Promise(async (resolve, reject) => {
          const webhookResponse = await notifyWebhook(
            "https://hooks.zapier.com/hooks/catch/10963345/bg7w3a5/",
            {
              ...body,
              referral: formValues.name,
            }
          );

          if (!String(webhookResponse.status).includes(40)) {
            resolve(true);
          } else {
            reject(false);
          }
        });

      try {
        await Promise.all(
          referrals.map((referral) => createWebhookAttempt(referral))
        ).then();
        popToast({
          toast,
          title: "Success",
          description: "Referrals submitted!",
          status: "success",
        });

        setReferralsComplete(true);
      } catch (e) {
        console.error(e);
        popToast({
          toast,
          title: "Error",
          description: e.message,
          status: "error",
        });
      }
    }
  };

  // STYLES
  const headingLineHeightValue = useBreakpointValue({
    base: "1xl",
    lg: "69px",
  });

  const isDesktop = useBreakpointValue({ base: false, lg: true });

  // INTERACTIVE DISPLAY
  const candidateRank = () => {
    if (score === questions.length) return "Perfect";
    if (score >= questions.length * 0.9) return "Awesome";
    if (score >= questions.length * 0.8) return "Great";
    if (score >= questions.length * 0.7) return "Good";
    return "Potential";
  };

  const candidateQuizResponse = () => {
    if (score === questions.length)
      return "It&apos;s literally a match made in heaven 🤩";

    if (score >= questions.length * 0.9)
      return "Wow your stats are great, we&apos;d love to work with you! 😄";
    if (score >= questions.length * 0.8)
      return "Your quiz results are really good! 😲";
    if (score >= questions.length * 0.7) return "Things are looking good!✨";

    return "You&apos;re definitely a potential candidate 🎖";
  };

  const renderWizardStep = () => {
    // new user
    if (!quizComplete && !formComplete && !referralsComplete) {
      return (
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
            Yep, it&apos;s possible, easy, and affordable 😳 Take the quiz to
            find out 👀 Complete the whole quiz to enter for a chance to win
            Cash 💰 towards your Solar Installation, on us. &quot;What&apos;s
            the catch?&quot; None. Just take the quiz and find out.
          </Text>
          <QuizCard
            {...{ handleQuickAnswerClick, questions, currentQuestion }}
          />
        </Center>
      );
    }

    if (quizComplete && !formComplete && !referralsComplete) {
      return (
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
            You&apos;re a {candidateRank()} Candidate for Solar!
          </Heading>
          <Text fontSize="lg" maxW={800} margin="16px auto 32px auto">
            {candidateQuizResponse()} Complete the quiz to get a free Solar
            Proposal for your Property 🏡 and a chance to win 6 Months of Solar,
            FREE! 💰
          </Text>
          <FormCard {...{ onFormChange, handleSubmit, formValues }} />
        </Center>
      );
    }

    if (quizComplete && formComplete && !referralsComplete) {
      return (
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
            A Chance at $500 💰?
          </Heading>
          <Text fontSize="lg" maxW={800} margin="16px auto 32px auto">
            We don&apos;t tell everyone this, only those who take the time to
            work with us. You can earn anywhere between $150 and $1,000 cold,
            hard cash delivered to your door step by us. We can do this daily,
            weekly, monthly, yearly. It&apos;s your choice, and all depends on
            how many people you refer to us. All you have to do is refer us
            leads. When we complete a solar installation on their property,
            you&apos;ll get a nice fat cash commission for having referred them
            to us. Simple as that. Sound good? Put in some people below that we
            can reach out to with your permission.
          </Text>
          <ReferralCard
            {...{
              referrals,
              setReferrals,
              handleReferralUpload,
              onReferralChange,
              removeReferral,
            }}
          />
        </Center>
      );
    }

    if (quizComplete && formComplete && referralsComplete) {
      return (
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
            You Made It! Congratulations.
          </Heading>
          <Text fontSize="lg" maxW={800} margin="16px auto 32px auto">
            Were really excited to get started on this journey together with
            you. Make sure to give us a follow to stay connected!
          </Text>
          <Flex wrap="wrap">
            {[
              {
                Icon: AiOutlineFacebook,
                link: "https://www.facebook.com/YourLocalSolarExperts",
              },
              {
                Icon: AiOutlineInstagram,
                link: "https://www.instagram.com/thelocalsolarexperts/",
              },
              {
                Icon: ImPinterest2,
                link: "https://www.pinterest.com/yourlocalsolarexperts/",
              },
              {
                Icon: AiOutlineTwitter,
                link: "https://twitter.com/SolarSavants",
              },
            ].map(({ Icon, link }) => (
              <IconButton
                key={link}
                as="a"
                size="lg"
                href={link}
                target="__blank"
                rel="noopener"
                icon={<Icon size={32} />}
                variant="transparent"
                _hover={{
                  color: "green.300",
                }}
              />
            ))}
          </Flex>
        </Center>
      );
    }
  };

  // DEV UTILS

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
  };
  const skipQuiz = () => setQuizComplete(true);
  const skipForm = () => setFormComplete(true);
  const skipReferrals = () => setReferralsComplete(true);

  return (
    <>
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
            {renderWizardStep()}
          </Box>
        </Box>
      </Layout>
      {process.env.NODE_ENV === "development" && (
        <HStack width="100%" spacing={1} justify="end" p={2}>
          <Button size="xs" onClick={resetQuiz}>
            Reset Quiz
          </Button>
          <Button size="xs" onClick={skipQuiz}>
            Skip Quiz
          </Button>
          <Button size="xs" onClick={skipForm}>
            Skip Form
          </Button>
          <Button size="xs" onClick={skipReferrals}>
            Skip Referrals
          </Button>
        </HStack>
      )}
    </>
  );
}
