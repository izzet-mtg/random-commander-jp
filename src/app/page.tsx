'use client';

import Image from "next/image";
import { useState, useEffect } from 'react';
import { fetchCard, Card } from '@/lib/card';

export default function Home() {
  const [card, setCard] = useState<Card | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchCard()
      .then(card => {
        setCard(card);
        console.log(card);
        setLoading(false);
      });
  }, []);

  if (isLoading || !card) return <p>Loading...</p>

  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <main className="flex flex-col items-center">
        <p>{card.colors}</p>
        <p>{card.printed_name}</p>
        <p>{card.printed_text}</p>
        <p>{card.printed_type_line}</p>
      </main>
      <footer className="flex flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
