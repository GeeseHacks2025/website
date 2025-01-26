import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatInterfaceProps {
  chatHistory: Array<{
    id: number;
    query: string;
    responses: {
      [key: string]: string;
    };
  }>;
  selectedModel: string;
}

export default function ChatInterface({ chatHistory, selectedModel }: ChatInterfaceProps) {
  return (
    <ScrollArea className="h-full w-full p-4">
      <div className="space-y-4">
        {chatHistory.map((chat) => (
          <div key={chat.id} className="space-y-2">
            {/* User Query (Align Right) */}
            <div className="flex justify-end">
              <div style={{backgroundColour: "#00B0D8"}}
              className="bg-blue-900 text-white rounded-lg p-3 max-w-sm text-sm">
                {chat.query}
              </div>
            </div>

            {/* Model Response (Align Left) */}
            <div className="flex justify-start">
              <div className="bg-gray-700 text-white rounded-lg p-3 max-w-sm text-sm">
                {chat.responses[selectedModel]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

