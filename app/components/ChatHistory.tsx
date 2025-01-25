import { ScrollArea } from "@/components/ui/scroll-area"

interface ChatHistoryProps {
  chatHistory: Array<{
    id: number
    query: string
  }>
}

export default function ChatHistory({ chatHistory }: ChatHistoryProps) {
  return (
    <ScrollArea className="h-[calc(100vh-100px)]">
      <h2 className="text-xl font-bold mb-4">Chat History</h2>
      <div className="space-y-2">
        {chatHistory.map((chat) => (
          <div key={chat.id} className="bg-gray-700 rounded p-2 cursor-pointer hover:bg-gray-600">
            {chat.query.length > 30 ? chat.query.substring(0, 30) + "..." : chat.query}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

