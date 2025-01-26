import { useState } from "react";
import Header from "./components/texts/Header";
import {
  Stack,
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Grid,
} from "@chakra-ui/react";
import generateCaption from "./data/captionGenerator";
import DownloadButton from "./components/buttons/DownloadButton";
import { FancyButton } from "./components/buttons/FancyButton";
import downloadMeme from "./components/DownloadMeme";
import MemeDisplay from "./components/MemeDisplay";
import "./App.css";

export default function CallToActionWithVideo() {
  const [image, setImage] = useState<string | null>(null);
  const [caption, setCaption] = useState("");

  const handleGenerateCaption = () => {
    setCaption(generateCaption());
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      className="app"
    >
      <Stack
        gap={{ base: 8, md: 10 }}
        px={{ base: 4, md: 8 }}
        py={{ base: 20, md: 28 }}
        minH={"80vh"}
        direction={{ base: "column", lg: "row" }}
        borderRadius="2xl" // Rounded corners
        boxShadow="8px 8px 16px #d1d9e6, -8px -8px 16px #555555"
        transition="0.5s" // Smooth transition
        _hover={{
          boxShadow: "8px 8px 16px #aa473d, -8px -8px 16px #aa473d", // Softer shadow on hover
        }}
      >
        <Box
          position={"relative"}
          rounded={"2xl"}
          width={"500px"}
          overflow={"hidden"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDir={"column"}
          gap={4}
        >
          {!image ? (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="2px dashed gray"
              borderRadius="md"
              p={4}
            >
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
                id="file-upload"
              />
              <label htmlFor="file-upload">
                <Box
                  as="span"
                  display="inline-block"
                  p={2}
                  bg="gray.200"
                  borderRadius="md"
                  cursor="pointer"
                >
                  Click here to upload image
                </Box>
              </label>
            </Box>
          ) : (
            <>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              ></Box>
              <Box display="flex" alignItems="center" justifyContent="center">
                <MemeDisplay image={image} caption={caption} />
              </Box>
            </>
          )}
          <Box pos={"absolute"} bottom={0}>
            <FancyButton onClick={handleGenerateCaption}>
              Generate Caption
            </FancyButton>
          </Box>
        </Box>
        <Stack position={"relative"} flex={1} gap={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={"5xl"}
            textAlign={"center"}
          >
            <Header>memecraft</Header>
            <br />
            <Text as={"span"} color={"#ccc"}>
              Play With Your Images
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "xl" }} color={"white"}>
            Upload an image and generate a random caption and craft your meme.
          </Text>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            gap={4}
            alignSelf={"flex-end"}
            justifySelf={"flex-end"}
            // bg={"yellow"}
            pos={"absolute"}
            bottom={0}
            p={4}
            borderRadius={"md"}
          >
            <Textarea
              bg={"white"}
              maxLines={5}
              minBlockSize={3}
              width={"350px"}
              maxHeight={"100px"}
              placeholder="Caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
            <Grid
              display={image ? "grid" : "none"}
              templateColumns="repeat(2, 1fr)"
              gap="6"
            >
              <Box width={"300px"}>
                <DownloadButton onClick={downloadMeme}>
                  Download Meme
                </DownloadButton>
              </Box>

              <Box w={"250px"} position="relative">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  position="absolute"
                  top="0"
                  left="0"
                  opacity="0"
                  w="full"
                  h="full"
                  cursor="pointer"
                  zIndex="10"
                />
                <FancyButton>Change Image</FancyButton>
              </Box>
            </Grid>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
