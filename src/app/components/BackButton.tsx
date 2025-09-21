'use client'
import { useRouter } from "next/navigation"

const BackButton = () => {
  const router = useRouter()
  return (
        <button
              onClick={() => router.back()}
              className="btn btn-warning"
            >
              Go Back
            </button>
  )
}

export default BackButton