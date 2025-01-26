import { ScrollArea } from "@/components/ui/scroll-area"

interface ChatHistoryProps {
  chatHistory: Array<{
    id: number
    query: string
  }>
}

export default function ChatHistory({ chatHistory }: ChatHistoryProps) {
  // // something we should check for when we have chat history for different chats, right now chathistory is just all queries history
  // if (chatHistory.length === 0) {
  //   return <div>No chat history available.</div>
  // }

  // for now, have an example of first messages from different chats
  const firstMessages: { id: number, query: string }[] = [
    chatHistory[0],
    { id: 1, query: "Automatically categorize and resolve 80% of customer support tickets. Escalate high-risk financial disputes (e.g., fraud claims) to human agents." },
    { id: 2, query: "Analyze all contracts for GDPR compliance. Flag ambiguous clauses (e.g., data retention periods) for human lawyers." },
    { id: 3, query: "Auto-approve safe product listings. Escalate listings with potential counterfeits (e.g., ‘Rolex watch $50’) to moderators." }
  ]

  return (
    <ScrollArea className="h-[calc(100vh-100px)]">
      <h2 className="text-xl font-bold mb-4">Chat History</h2>
      <div className="space-y-2">
        {/* For now, map first messages examples*/}
        {firstMessages.map((message) => (
          <div key={message.id} className="bg-gray-700/700 rounded p-2 cursor-pointer hover:bg-blue-900">
            {message.query.length > 30 ? message.query.substring(0, 30) + "..." : message.query}
          </div>
        )
        )} 
      </div>
    </ScrollArea>
  )
}

