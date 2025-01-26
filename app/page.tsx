"use client"

import { useState, useEffect } from "react"
import ModelSelector from "./components/ModelSelector"
import ChatInterface from "./components/ChatInterface"
import MetricsDisplay from "./components/MetricsDisplay"
import ModelComparisonChart from "./components/ModelComparisonChart"
import ChatHistory from "./components/ChatHistory"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { mockChatData, mockModelData, scriptedChats, mockMetricsData } from "@/lib/mockData"

export default function Home() {
  const [selectedModel, setSelectedModel] = useState("gpt-3.5-turbo")
  const [chatHistory, setChatHistory] = useState<typeof scriptedChats>([])
  const [currentQuery, setCurrentQuery] = useState("")
  const [isLeftPanelCollapsed, setIsLeftPanelCollapsed] = useState(false)
  const [isRightPanelCollapsed, setIsRightPanelCollapsed] = useState(false)
  const [isNerdMode, setIsNerdMode] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [currentScriptIndex, setCurrentScriptIndex] = useState(0)
  const [metrics, setMetrics] = useState<Array<{
    model: string
    metric: string
    value: number
  }>>([])

  const updateMetrics = (scriptIndex: number) => {
    const query = scriptIndex === 0 ? "quantum-computing" : "machine-learning"
    const newMetrics = Object.entries(mockMetricsData).flatMap(([model, data]) => [
      { model, metric: "cost", value: data[query].cost },
      { model, metric: "time", value: data[query].time },
      { model, metric: "inputTokens", value: data[query].inputTokens },
      { model, metric: "outputTokens", value: data[query].outputTokens }
    ])
    setMetrics(prev => [...prev, ...newMetrics])
  }

  const simulateTyping = async (text: string, callback: (text: string) => void) => {
    setIsTyping(true)
    let currentText = ""
    
    for (let i = 0; i < text.length; i++) {
      currentText += text[i]
      callback(currentText)
      // Random delay between 50-150ms for natural typing feel
      await new Promise(resolve => setTimeout(resolve, Math.random() * 100 + 50))
    }
    
    setIsTyping(false)
  }

  const handleSendMessage = async () => {
    if (currentScriptIndex >= scriptedChats.length) return
    
    const nextChat = scriptedChats[currentScriptIndex]
    await simulateTyping(nextChat.query, setCurrentQuery)
    
    // Simulate response time based on the selected model
    const responseTime = mockMetricsData[selectedModel as keyof typeof mockMetricsData][
      currentScriptIndex === 0 ? "quantum-computing" : "machine-learning"
    ].time * 1000 // Convert to milliseconds

    await new Promise(resolve => setTimeout(resolve, responseTime))
    
    setChatHistory(prev => [...prev, nextChat])
    updateMetrics(currentScriptIndex)
    setCurrentQuery("")
    setCurrentScriptIndex(prev => prev + 1)
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left Panel - Chat History */}
      <div className={`w-64 bg-gray-800 p-4 transition-all duration-300 ${isLeftPanelCollapsed ? "w-16" : "w-64"}`}>
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
              handleSendMessage()
            }}
            className="flex space-x-2"
          >
            <Input
              value={currentQuery}
              onChange={(e) => setCurrentQuery(e.target.value)}
              placeholder={isTyping ? "" : "Type your message here..."}
              className="flex-1 bg-gray-700 text-white"
              disabled={isTyping}
            />
            <Button type="submit" disabled={isTyping}>
              {isTyping ? "Typing..." : "Send"}
            </Button>
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
            <MetricsDisplay data={metrics} isNerdMode={isNerdMode} />
            <Button onClick={() => setIsNerdMode(!isNerdMode)} className="mt-4 w-full">
              {isNerdMode ? "Simple Mode" : "Nerd Mode"}
            </Button>
            <ModelComparisonChart data={metrics} />
          </>
        )}
      </div>
    </div>
  )
}

