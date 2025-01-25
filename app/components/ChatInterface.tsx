import { ScrollArea } from "@/components/ui/scroll-area"

interface ChatInterfaceProps {
  chatHistory: Array<{
    id: number
    query: string
    responses: {
      [key: string]: string
    }
  }>
  selectedModel: string
}

export default function ChatInterface({ chatHistory, selectedModel }: ChatInterfaceProps) {
  return (
    <ScrollArea className="h-full">
      <div className="space-y-4">
        {chatHistory.map((chat) => (
          <div key={chat.id} className="bg-gray-800 rounded-lg p-4">
            <div className="font-bold mb-2">{chat.query}</div>
            <div className="bg-gray-700 rounded p-2">{chat.responses[selectedModel]}</div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

