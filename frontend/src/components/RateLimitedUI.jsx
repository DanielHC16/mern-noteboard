import React from 'react'

const RateLimitedUI = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-primary/10 border border-primary/30 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center p-6">
            <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <h2 className="text-xl font-semibold text-primary">Rate Limit Exceeded</h2>
                <p className="text-neutral-content">You have exceeded the rate limit for creating notes. Please try again later.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default RateLimitedUI