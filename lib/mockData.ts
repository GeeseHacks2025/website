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
  { model: "claude-v1", metric: "cost", value: 0.0025 },
  { model: "claude-v1", metric: "time", value: 2.7 },
  { model: "claude-v1", metric: "inputTokens", value: 150 },
  { model: "claude-v1", metric: "outputTokens", value: 220 },
  { model: "claude-v1", metric: "uptime", value: 99.7 },
  { model: "claude-v1", metric: "errorRate", value: 0.08 },
  { model: "claude-v1", metric: "f1Score", value: 0.93 },
  { model: "claude-v1", metric: "latency", value: 280 },
  { model: "llama-2-70b", metric: "cost", value: 0.001 },
  { model: "llama-2-70b", metric: "time", value: 2.5 },
  { model: "llama-2-70b", metric: "inputTokens", value: 150 },
  { model: "llama-2-70b", metric: "outputTokens", value: 180 },
  { model: "llama-2-70b", metric: "uptime", value: 99.6 },
  { model: "llama-2-70b", metric: "errorRate", value: 0.12 },
  { model: "llama-2-70b", metric: "f1Score", value: 0.91 },
  { model: "llama-2-70b", metric: "latency", value: 220 },
]

export const scriptedChats = [
  {
    id: 1,
    query: "What is quantum computing?",
    responses: {
      "gpt-3.5-turbo": "Quantum computing is a type of computing that uses quantum phenomena like superposition and entanglement to perform calculations. Unlike classical computers that use bits (0 or 1), quantum computers use quantum bits or 'qubits' that can exist in multiple states simultaneously.",
      "gpt-4": "Quantum computing is an advanced computing paradigm that harnesses quantum mechanical phenomena to process information. Unlike traditional computers that use binary bits (0 or 1), quantum computers use quantum bits or 'qubits' that can exist in multiple states simultaneously through a property called superposition. This, combined with quantum entanglement, allows quantum computers to solve certain complex problems exponentially faster than classical computers.",
      "claude-v1": "Quantum computing leverages the principles of quantum mechanics to perform computations. The key difference from classical computing is the use of quantum bits (qubits) instead of regular bits. While classical bits can only be 0 or 1, qubits can exist in multiple states at once through superposition, enabling certain calculations to be performed much more efficiently.",
      "llama-2-70b": "Quantum computing is a revolutionary type of computing that uses quantum physics principles. It uses qubits instead of regular computer bits, allowing it to solve complex problems much faster than traditional computers by processing multiple possibilities simultaneously through quantum superposition."
    }
  },
  {
    id: 2,
    query: "How does machine learning differ from traditional programming?",
    responses: {
      "gpt-3.5-turbo": "In traditional programming, developers write explicit rules and instructions for the computer to follow. Machine learning, however, allows computers to learn from data and improve their performance without being explicitly programmed. The system learns patterns from examples rather than following predefined rules.",
      "gpt-4": "The key distinction between machine learning and traditional programming lies in their approach to problem-solving. Traditional programming requires developers to write explicit rules and logic for every situation. In contrast, machine learning systems learn patterns from data, developing their own rules and improving over time through experience. This makes ML particularly effective for complex tasks where writing explicit rules would be impractical or impossible.",
      "claude-v1": "Traditional programming and machine learning represent two fundamentally different approaches to software development. In traditional programming, developers manually code specific instructions and rules for every scenario. Machine learning, conversely, uses statistical techniques to enable systems to 'learn' from data, identifying patterns and making decisions without explicit programming. This allows ML systems to handle complex, dynamic situations that would be difficult to address with traditional programming.",
      "llama-2-70b": "Machine learning and traditional programming take different paths to solving problems. Traditional programming needs humans to write specific instructions for every task. Machine learning instead learns from data, finding patterns and making decisions on its own. Think of it like teaching versus programming - ML systems learn through experience rather than following fixed rules."
    }
  }
]

export const mockMetricsData = {
  "gpt-3.5-turbo": {
    "quantum-computing": {
      cost: 0.0015,
      time: 2.3,
      inputTokens: 12,
      outputTokens: 164,
    },
    "machine-learning": {
      cost: 0.0018,
      time: 2.7,
      inputTokens: 15,
      outputTokens: 187,
    }
  },
  "gpt-4": {
    "quantum-computing": {
      cost: 0.0045,
      time: 4.1,
      inputTokens: 12,
      outputTokens: 256,
    },
    "machine-learning": {
      cost: 0.0052,
      time: 4.8,
      inputTokens: 15,
      outputTokens: 298,
    }
  },
  "claude-v1": {
    "quantum-computing": {
      cost: 0.0025,
      time: 3.2,
      inputTokens: 12,
      outputTokens: 198,
    },
    "machine-learning": {
      cost: 0.0031,
      time: 3.5,
      inputTokens: 15,
      outputTokens: 245,
    }
  },
  "llama-2-70b": {
    "quantum-computing": {
      cost: 0.0012,
      time: 2.8,
      inputTokens: 12,
      outputTokens: 142,
    },
    "machine-learning": {
      cost: 0.0014,
      time: 3.1,
      inputTokens: 15,
      outputTokens: 168,
    }
  }
}

