import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface MetricData {
  model: string
  metric: string
  value: number
}

interface MetricsDisplayProps {
  data: MetricData[]
  isNerdMode: boolean
}

export default function MetricsDisplay({ data, isNerdMode }: MetricsDisplayProps) {
  const getMetricValue = (metric: string) => {
    const item = data.find((d) => d.metric === metric)
    return item ? item.value : 0
  }

  const basicMetrics = [
    { name: "Cost", value: getMetricValue("cost"), format: (v: number) => `$${v.toFixed(4)}` },
    { name: "Time", value: getMetricValue("time"), format: (v: number) => `${v.toFixed(2)}s` },
    { name: "Input Tokens", value: getMetricValue("inputTokens"), format: (v: number) => v },
    { name: "Output Tokens", value: getMetricValue("outputTokens"), format: (v: number) => v },
  ]

  const nerdMetrics = [
    { name: "Uptime", value: getMetricValue("uptime"), format: (v: number) => `${v}%` },
    { name: "Error Rate", value: getMetricValue("errorRate"), format: (v: number) => `${v}%` },
    { name: "F1 Score", value: getMetricValue("f1Score"), format: (v: number) => v.toFixed(2) },
    { name: "Latency", value: getMetricValue("latency"), format: (v: number) => `${v}ms` },
  ]

  const metricsToShow = isNerdMode ? [...basicMetrics, ...nerdMetrics] : basicMetrics

  return (
    <div className="grid grid-cols-2 gap-4 mt-4 text-white">
      {metricsToShow.map((metric) => (
        <Card key={metric.name} className="bg-gray-700/700 text-white">
          <CardHeader>
            <CardTitle className="text-sm">{metric.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold">{metric.format(metric.value)}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

