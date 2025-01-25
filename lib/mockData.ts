export const mockChatData = [
  {
    id: 1,
    query: "Explain the concept of machine learning in simple terms.",
    responses: {
      "gpt-3.5-turbo":
        "Machine learning is like teaching a computer to learn from examples, much like how humans learn from experience. Instead of programming specific instructions for every task, we provide the computer with data and let it figure out patterns and make decisions on its own.",
      "gpt-4":
        "Machine learning is a subset of artificial intelligence that enables computers to improve their performance on a task through experience. Imagine teaching a child to recognize different animals. You show them pictures and tell them what each animal is. Over time, the child learns to identify animals they've never seen before based on similarities to the ones they know. Machine learning works similarly, but with computers and data instead of children and pictures.",
      "claude-v1":
        "Machine learning is a method of teaching computers to perform tasks without explicitly programming them. It's based on the idea that systems can learn from data, identify patterns, and make decisions with minimal human intervention. Think of it as training a pet: you don't tell it exactly what to do in every situation, but you provide examples and rewards that help it learn the desired behavior over time.",
      "llama-2-70b":
        "Machine learning is a way to make computers smarter by showing them lots of examples. Instead of telling the computer exactly what to do, we give it data and let it figure out the rules on its own. It's like teaching a dog new tricks by rewarding good behavior, except with numbers and algorithms instead of treats!",
    },
  },
  // Add more mock chat data as needed
]

export const mockModelData = [
  { model: "gpt-3.5-turbo", metric: "cost", value: 0.0015 },
  { model: "gpt-3.5-turbo", metric: "time", value: 2.3 },
  { model: "gpt-3.5-turbo", metric: "inputTokens", value: 150 },
  { model: "gpt-3.5-turbo", metric: "outputTokens", value: 200 },
  { model: "gpt-3.5-turbo", metric: "uptime", value: 99.9 },
  { model: "gpt-3.5-turbo", metric: "errorRate", value: 0.1 },
  { model: "gpt-3.5-turbo", metric: "f1Score", value: 0.92 },
  { model: "gpt-3.5-turbo", metric: "latency", value: 250 },
  { model: "gpt-4", metric: "cost", value: 0.0045 },
  { model: "gpt-4", metric: "time", value: 3.1 },
  { model: "gpt-4", metric: "inputTokens", value: 150 },
  { model: "gpt-4", metric: "outputTokens", value: 250 },
  { model: "gpt-4", metric: "uptime", value: 99.8 },
  { model: "gpt-4", metric: "errorRate", value: 0.05 },
  { model: "gpt-4", metric: "f1Score", value: 0.95 },
  { model: "gpt-4", metric: "latency", value: 300 },
  { model: "o1-mini", metric: "cost", value: 0.0025 },
  { model: "o1-mini", metric: "time", value: 2.7 },
  { model: "o1-mini", metric: "inputTokens", value: 150 },
  { model: "o1-mini", metric: "outputTokens", value: 220 },
  { model: "o1-mini", metric: "uptime", value: 99.7 },
  { model: "o1-mini", metric: "errorRate", value: 0.08 },
  { model: "o1-mini", metric: "f1Score", value: 0.93 },
  { model: "o1-mini", metric: "latency", value: 280 },
  // { model: "claude-v1", metric: "cost", value: 0.0025 },
  // { model: "claude-v1", metric: "time", value: 2.7 },
  // { model: "claude-v1", metric: "inputTokens", value: 150 },
  // { model: "claude-v1", metric: "outputTokens", value: 220 },
  // { model: "claude-v1", metric: "uptime", value: 99.7 },
  // { model: "claude-v1", metric: "errorRate", value: 0.08 },
  // { model: "claude-v1", metric: "f1Score", value: 0.93 },
  // { model: "claude-v1", metric: "latency", value: 280 },
  // { model: "llama-2-70b", metric: "cost", value: 0.001 },
  // { model: "llama-2-70b", metric: "time", value: 2.5 },
  // { model: "llama-2-70b", metric: "inputTokens", value: 150 },
  // { model: "llama-2-70b", metric: "outputTokens", value: 180 },
  // { model: "llama-2-70b", metric: "uptime", value: 99.6 },
  // { model: "llama-2-70b", metric: "errorRate", value: 0.12 },
  // { model: "llama-2-70b", metric: "f1Score", value: 0.91 },
  // { model: "llama-2-70b", metric: "latency", value: 220 },
]

