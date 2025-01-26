import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const models = ["gpt-3.5-turbo", "gpt-4", "claude-v1", "llama-2-70b"]

export default function ModelSelector({
  onSelect,
  selectedModel,
}: { onSelect: (model: string) => void; selectedModel: string }) {
  return (
    <Select onValueChange={onSelect} defaultValue={selectedModel}>
      <SelectTrigger className="w-full bg-gray-700/650 text-white">
        <SelectValue placeholder="Select a model" />
      </SelectTrigger>
      <SelectContent>
        {models.map((model) => (
          <SelectItem key={model} value={model}>
            {model}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

