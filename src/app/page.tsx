"use client";
import { Title, Textarea, Button, Text, Container, Paper } from "@mantine/core";
import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [cleanedText, setCleanedText] = useState("");

  const cleanText = () => {
    const lines = inputText.split("\n");

    const cleanedLines = lines.map((line) =>
      line.replace(/#+/g, "").replace(/\*\*/g, "").trimEnd()
    );

    const result = cleanedLines.join("\n");

    setCleanedText(result);
  };

  return (
    <Container
      size="sm"
      className="min-h-screen flex items-center justify-center"
    >
      <Paper shadow="md" p="xl" radius="md" className="w-full max-w-md">
        <Title order={2} className="text-center mb-6">
          AI Text Parser
        </Title>

        <Textarea
          placeholder="Paste your AI-generated text here..."
          label="Input Text"
          minRows={4}
          value={inputText}
          onChange={(event) => setInputText(event.currentTarget.value)}
          className="mb-4"
        />

        <Button
          fullWidth
          onClick={cleanText}
          className="mb-4 bg-blue-500 hover:bg-blue-600"
        >
          Clean Text
        </Button>

        {cleanedText && (
          <div>
            <Text size="sm" w={500} className="mb-2">
              Cleaned Output:
            </Text>
            <Paper
              shadow="xs"
              p="md"
              className="bg-gray-50 min-h-[100px] whitespace-pre-wrap"
            >
              <Text>{cleanedText}</Text>
            </Paper>
          </div>
        )}
      </Paper>
    </Container>
  );
}
