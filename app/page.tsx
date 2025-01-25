"use client"

import { useState } from "react"
import ModelSelector from "./components/ModelSelector"
import ChatInterface from "./components/ChatInterface"
import MetricsDisplay from "./components/MetricsDisplay"
import ModelComparisonChart from "./components/ModelComparisonChart"
import ChatHistory from "./components/ChatHistory"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { mockChatData, mockModelData } from "@/lib/mockData"

// manages landing page for users when they first enter the app
export default function Home() { 
  const [selectedModel, setSelectedModel] = useState("gpt-3.5-turbo")
  const [chatHistory, setChatHistory] = useState(mockChatData)
  const [currentQuery, setCurrentQuery] = useState("")
  const [isLeftPanelCollapsed, setIsLeftPanelCollapsed] = useState(false)
  const [isRightPanelCollapsed, setIsRightPanelCollapsed] = useState(false)
  const [isNerdMode, setIsNerdMode] = useState(false)

  // need to connect this to the LLMs !!! so it actually works !!!
  const handleSendMessage = (message: string) => {
    const newChat = {
      id: chatHistory.length + 1,
      query: message,
      responses: {
        "gpt-3.5-turbo": "This is a mock response from gpt-3.5-turbo.",
        "gpt-4": "This is a mock response from gpt-4.",
        "claude-v1": "This is a mock response from claude-v1.",
        "llama-2-70b": "This is a mock response from llama-2-70b.",
      },
    }
    setChatHistory([...chatHistory, newChat])
    setCurrentQuery("")
  }


  return (
    <div className="flex h-screen overflow-hidden bg-gray-900 text-white">
      {/* Left Panel - Chat History */}
      <div className={`bg-gray-800 p-4 transition-all duration-300 ${isLeftPanelCollapsed ? "w-16" : "w-80"}`}>
        <Button onClick={() => setIsLeftPanelCollapsed(!isLeftPanelCollapsed)} className="mb-4 w-full">
          {isLeftPanelCollapsed ? ">" : "<"}
        </Button>
        {!isLeftPanelCollapsed && <ChatHistory chatHistory={chatHistory} />}
      </div>

      {/* Main Chat Interface */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-auto p-4">
          <ChatInterface chatHistory={chatHistory} selectedModel={selectedModel} />
        </div>
        <div className="p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSendMessage(currentQuery)
            }}
            className="flex space-x-2"
          >
            <Input
              value={currentQuery}
              onChange={(e) => setCurrentQuery(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 bg-gray-700 text-white"
            />
            <Button type="submit">Send</Button>
          </form>
        </div>
      </div>

      {/* Right Panel - Model Selection and Metrics */}
      <div className={`bg-gray-800 p-4 transition-all duration-300 ${isRightPanelCollapsed ? "w-16" : "w-80"}`}>
        <Button onClick={() => setIsRightPanelCollapsed(!isRightPanelCollapsed)} className="mb-4 w-full">
          {isRightPanelCollapsed ? "<" : ">"}
        </Button>
        {!isRightPanelCollapsed && (
          <>
            <ModelSelector onSelect={setSelectedModel} selectedModel={selectedModel} />
            <MetricsDisplay data={mockModelData.filter((d) => d.model === selectedModel)} isNerdMode={isNerdMode} />
            <Button onClick={() => setIsNerdMode(!isNerdMode)} className="mt-4 w-full">
              {isNerdMode ? "Simple Mode" : "Nerd Mode"}
            </Button>
            <ModelComparisonChart data={mockModelData} />
          </>
        )}
      </div>
    </div>
  )
}

