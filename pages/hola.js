import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'


export default function Hola() {
  const router = useRouter()
  return (
    <div>
        <a role="button" onClick={() => router.push('/')}> ir a index</a>
        <Link href="/"> ir a index link</Link>
    </div>
  )
}
