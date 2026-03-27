'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage(data.message || 'You\'re in! Check your inbox.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-grow px-4 py-3 rounded-lg bg-dark-4 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-light transition-colors"
      />
      <button type="submit" disabled={status === 'loading'} className="btn-primary whitespace-nowrap">
        {status === 'loading' ? 'Joining...' : 'Join Free'}
      </button>
      {status !== 'idle' && (
        <p className={`text-sm mt-2 sm:mt-0 sm:self-center ${status === 'success' ? 'text-primary-light' : 'text-red-400'}`}>
          {message}
        </p>
      )}
    </form>
  );
}
