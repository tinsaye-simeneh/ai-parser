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
  MultiSelect,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import { IconCopy } from "@tabler/icons-react";

export default function CommentRemover() {
  const [inputCode, setInputCode] = useState("");
  const [cleanedCode, setCleanedCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [commentTypes, setCommentTypes] = useState(["all"]);
  const [exceptionPattern, setExceptionPattern] = useState("");

  const commentPatterns = {
    singleLine: /(\/\/.*?$|\/\/.*?(?=\n)|#.*?$|--.*?$|;.*?$|%.*?$)/gm,
    multiLine: /\/\*[\s\S]*?\*\//g,
    xml: /<!--[\s\S]*?-->/g,
  };

  const cleanCode = () => {
    let result = inputCode;
    const exceptionRegex = exceptionPattern
      ? new RegExp(exceptionPattern, "i")
      : null;

    if (commentTypes.includes("all")) {
      Object.values(commentPatterns).forEach((pattern) => {
        result = result.replace(pattern, (match) =>
          exceptionRegex && exceptionRegex.test(match) ? match : ""
        );
      });
    } else {
      if (commentTypes.includes("single-line")) {
        result = result.replace(commentPatterns.singleLine, (match) =>
          exceptionRegex && exceptionRegex.test(match) ? match : ""
        );
      }
      if (commentTypes.includes("multi-line")) {
        result = result.replace(commentPatterns.multiLine, (match) =>
          exceptionRegex && exceptionRegex.test(match) ? match : ""
        );
      }
      if (commentTypes.includes("xml")) {
        result = result.replace(commentPatterns.xml, (match) =>
          exceptionRegex && exceptionRegex.test(match) ? match : ""
        );
      }
    }

    result = result.replace(/^\s*[\r\n]/gm, "");
    setCleanedCode(result.trim());
  };

  const resetCode = () => {
    setInputCode("");
    setCleanedCode("");
    setCommentTypes(["all"]);
    setExceptionPattern("");
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cleanedCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Container size="lg" className="flex mt-5 justify-center">
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        className="w-full max-w-4xl border border-gray-200 "
      >
        <Title order={3} className="text-center mb-6">
          Code Comment Remover
        </Title>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <Textarea
              placeholder="Paste your code here..."
              label="Input Code"
              autosize
              minRows={5}
              maxRows={25}
              value={inputCode}
              onChange={(event) => setInputCode(event.currentTarget.value)}
              className="mb-4"
            />
            <MultiSelect
              label="Comment Types to Remove"
              data={[
                { value: "all", label: "All Comments" },
                {
                  value: "single-line",
                  label: "Single-line (//, #, --, ;, %)",
                },
                { value: "multi-line", label: "Multi-line (/* */)" },
                { value: "xml", label: "XML/HTML (<!-- -->)" },
              ]}
              value={commentTypes}
              onChange={setCommentTypes}
              className="mb-4"
            />
            <TextInput
              label="Exception Pattern (e.g., TODO|@author)"
              placeholder="Enter regex pattern to keep"
              value={exceptionPattern}
              onChange={(event) =>
                setExceptionPattern(event.currentTarget.value)
              }
              className="mb-4"
            />
            <div className="flex gap-4">
              <Button
                fullWidth
                onClick={cleanCode}
                className="bg-blue-500 hover:bg-blue-600"
              >
                Remove Comments
              </Button>
              <Button
                fullWidth
                variant="outline"
                onClick={resetCode}
                className="border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Reset
              </Button>
            </div>
          </div>
          {cleanedCode && (
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <Text size="sm" w={500}>
                  Cleaned Code:
                </Text>
                <Tooltip
                  label={copied ? "Copied!" : "Copy to Clipboard"}
                  position="top"
                >
                  <ActionIcon
                    onClick={copyToClipboard}
                    disabled={!cleanedCode}
                    className="text-gray-600 hover:text-blue-500"
                  >
                    <IconCopy size={18} />
                  </ActionIcon>
                </Tooltip>
              </div>
              <Paper
                shadow="xs"
                p="md"
                className="bg-gray-50 min-h-[250px] whitespace-pre-wrap"
              >
                <Text>{cleanedCode}</Text>
              </Paper>
            </div>
          )}
        </div>
      </Paper>
    </Container>
  );
}
