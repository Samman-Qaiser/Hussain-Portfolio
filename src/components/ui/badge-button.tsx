"use client"

import React from "react"
import { SparklesIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface BadgeButtonProps {
  children: React.ReactNode
}

const BadgeButton: React.FC<BadgeButtonProps> = ({ children }) => {
  return (
    <Badge
      variant="outline"
      className="mb-3 flex items-center gap-2 cursor-pointer rounded-full border border-black/10 bg-[#BEB3FE] px-3 py-1 text-base"
    >
      <SparklesIcon className="h-4 w-4 fill-[#E5FC76] stroke-1 text-neutral-800" />
      {children}
    </Badge>
  )
}

export default BadgeButton

