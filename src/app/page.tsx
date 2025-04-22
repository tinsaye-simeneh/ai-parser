"use client";
import {
  Title,
  Textarea,
  Button,
  Text,
  Container,
  Paper,
  ActionIcon,
  Tooltip,
} from "@mantine/core";
import { useState } from "react";
import { IconCopy } from "@tabler/icons-react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [cleanedText, setCleanedText] = useState("");
  const [copied, setCopied] = useState(false);

  const cleanText = () => {
    const lines = inputText.split("\n");
    const cleanedLines = lines.map((line) =>
      line.replace(/#+/g, "").replace(/\*\*/g, "").trimEnd()
    );
    const result = cleanedLines.join("\n");
    setCleanedText(result);
  };

  const resetText = () => {
    setInputText("");
    setCleanedText("");
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cleanedText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Container
      size="lg"
      className="min-h-screen flex items-center justify-center"
    >
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        className={`bg-white w-full transition-all duration-300 ${
          cleanedText ? "max-w-full" : "max-w-xl"
        }`}
      >
        <Title order={2} className="text-center mb-6">
          AI Text Parser
        </Title>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <Textarea
              placeholder="Paste your AI-generated text here..."
              label="Input Text"
              autosize
              minRows={5}
              maxRows={20}
              value={inputText}
              onChange={(event) => setInputText(event.currentTarget.value)}
              className="mb-4"
            />
            <div className="flex gap-4">
              <Button
                fullWidth
                onClick={cleanText}
                className="bg-blue-500 hover:bg-blue-600"
              >
                Clean Text
              </Button>
              <Button
                fullWidth
                variant="outline"
                onClick={resetText}
                className="border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Reset
              </Button>
            </div>
          </div>
          {cleanedText && (
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <Text size="sm" w={500}>
                  Cleaned Output:
                </Text>
                <Tooltip
                  label={copied ? "Copied!" : "Copy to Clipboard"}
                  position="top"
                >
                  <ActionIcon
                    onClick={copyToClipboard}
                    disabled={!cleanedText}
                    className="text-gray-600 hover:text-blue-500"
                  >
                    <IconCopy size={18} />
                  </ActionIcon>
                </Tooltip>
              </div>
              <Paper
                shadow="xs"
                p="md"
                className="bg-gray-50 min-h-[250px] whitespace-pre-wrap border border-gray-300"
              >
                <Text className="max-h-[500px] overflow-auto">
                  {cleanedText}
                </Text>
              </Paper>
            </div>
          )}
        </div>
      </Paper>
    </Container>
  );
}
