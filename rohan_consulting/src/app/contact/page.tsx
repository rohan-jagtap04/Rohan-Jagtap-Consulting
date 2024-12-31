'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you for reaching out, ${name}!`)
    // Reset form
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section className="py-10 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
        Contact Us
      </h1>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-indigo-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}