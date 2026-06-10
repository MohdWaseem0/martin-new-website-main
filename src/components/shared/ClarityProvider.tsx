"use client"

import { useEffect } from "react"
import clarity from "@microsoft/clarity"

export default function ClarityProvider() {
  const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "r4prik9s3y"

  useEffect(() => {
    if (projectId) {
      clarity.init(projectId)
    }
  }, [projectId])

  return null
}
