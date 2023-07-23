'use client'
import Image from 'next/image'
import CallButton from './caller/CallButton'


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <CallButton />
    </main>
  )
}
