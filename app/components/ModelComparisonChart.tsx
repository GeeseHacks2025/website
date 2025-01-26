"use client"

import { useEffect, useRef } from "react"
import vegaEmbed from "vega-embed"

const spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: { name: "table" },
  mark: "bar",
  encoding: {
    x: { field: "model", type: "nominal", axis: { labelAngle: -45 } },
    y: { field: "value", type: "quantitative" },
    color: { field: "model", type: "nominal" },
    column: { field: "metric", type: "nominal" },
  },
  width: 100,
  height: 150,
  config: {
    view: { stroke: null },
    axis: { domainColor: "#cccccc", tickColor: "#cccccc" },
    style: { "guide-label": { fill: "#cccccc" }, "guide-title": { fill: "#cccccc" } },
  },
}

interface ModelComparisonChartProps {
  data: Array<{ model: string; metric: string; value: number }>
}

export default function ModelComparisonChart({ data }: ModelComparisonChartProps) {
  const chartRef = useRef<HTMLDivElement>(null)

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2 text-white">Model Comparison</h2>
      <img src="barchart.svg" alt="Comparing LLMs using metrics" height="200" width="300"/>
    </div>
  )
}

