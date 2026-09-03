import React, { useState, useMemo } from 'react';
import { LetsScrollWorld } from './components/LetsScrollWorld';
import { BookingModal } from './components/BookingModal';
import { FleetModal } from './components/FleetModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isFleetOpen, setIsFleetOpen] = useState(false);

  const scrollConfig = useMemo(() => ({
    brand: { 
      name: 'Greenline Express', 
      href: '#' 
    },
    cta: { 
      label: 'Book Ticket', 
      href: '#book',
      onClick: () => setIsBookingOpen(true)
    },
    hint: 'scroll to travel',
    diveScroll: 1.4,
    connScroll: 1.0,
    crossfade: 0.15,
    atmosphere: true,
    sections: [
      {
        id: 'terminal',
        label: 'VIP Terminal',
        still: '/assets/img/terminal.webp',
        clip: '/assets/vid/terminal.mp4',
        accent: '#0D4A36',
        scroll: 1.5,
        linger: 0.35,
        eyebrow: 'Executive Departure',
        title: 'A calm start before the highway.',
        body: 'Private air-conditioned lounges, priority boarding, and dedicated baggage concierge before departure.',
        tags: ['Executive Lounge', 'Priority Boarding', 'Baggage Concierge']
      },
      {
        id: 'cabin',
        label: 'Sleeper Suite',
        still: '/assets/img/cabin.webp',
        clip: '/assets/vid/cabin.mp4',
        accent: '#10B981',
        scroll: 1.7,
        linger: 0.4,
        eyebrow: 'Unrivaled Comfort',
        title: 'Room to stretch, space to unwind.',
        body: 'Full-flat sleeper pods, 160° ergonomic leather recliners, personal media touchscreens, and ambient cabin lighting.',
        tags: ['Sleeper Pods', 'Personal Media Hub', 'Climate Control']
      },
      {
        id: 'highway',
        label: 'Scenic Bridge',
        still: '/assets/img/highway.webp',
        clip: '/assets/vid/highway.mp4',
        accent: '#E5A93C',
        scroll: 1.5,
        linger: 0.35,
        eyebrow: 'The Open Road',
        title: 'Gliding across cable bridges and rivers.',
        body: 'Electronically dampened air suspension delivering the quietest, smoothest cruise across the country’s modern expressways.',
        tags: ['Air Suspension', 'Express Lane', 'Advanced Radar Safety']
      },
      {
        id: 'arrival',
        label: 'City Arrival',
        still: '/assets/img/arrival.webp',
        clip: '/assets/vid/arrival.mp4',
        accent: '#0D4A36',
        scroll: 1.8,
        linger: 0.45,
        eyebrow: 'Arrive Refreshed',
        title: 'The destination is just the beginning.',
        body: 'Step out energized at the city center transit hub, greeted by our arrival concierge team and ready for your day.',
        tags: ['City Center Hub', 'Concierge Service', 'Round-the-Clock Transit'],
        cta: {
          primary: { label: 'Book Your Seat' },
          secondary: { label: 'Explore Fleet' },
          onPrimaryClick: () => setIsBookingOpen(true),
          onSecondaryClick: () => setIsFleetOpen(true)
        }
      }
    ],
    connectors: [
      '/assets/vid/conn1.mp4',
      '/assets/vid/conn2.mp4',
      null // Graceful crossfade transition into destination arrival!
    ]
  }), []);

  return (
    <div className="relative min-h-screen bg-[#F6F4EE]">
      <LetsScrollWorld config={scrollConfig} />

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />

      <FleetModal 
        isOpen={isFleetOpen} 
        onClose={() => setIsFleetOpen(false)} 
        onBook={() => {
          setIsFleetOpen(false);
          setIsBookingOpen(true);
        }}
      />
    </div>
  );
}
