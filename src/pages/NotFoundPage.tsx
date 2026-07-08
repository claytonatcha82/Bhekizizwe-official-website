import React from 'react';
import { Link } from 'wouter';
import { HardHat } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center p-4">
      <HardHat className="w-24 h-24 text-[#F9A825] mb-8" />
      <h1 className="font-display font-bold text-6xl text-[#1B5E20] mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Under Construction</h2>
      <p className="text-gray-600 text-center max-w-md mb-8">
        The page you are looking for has been moved, deleted, or is currently being built.
      </p>
      <Link href="/" className="btn-green text-lg px-8">
        Return Home
      </Link>
    </div>
  );
}
