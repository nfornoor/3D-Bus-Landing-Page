import React, { useState } from 'react';
import { X, Calendar, MapPin, Users, ShieldCheck, CheckCircle2, Bus } from 'lucide-react';

export const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [fromCity, setFromCity] = useState('Dhaka (Panthapath VIP Lounge)');
  const [toCity, setToCity] = useState("Cox's Bazar (Kolatoli Beach Lounge)");
  const [date, setDate] = useState('2026-09-10');
  const [seatClass, setSeatClass] = useState('sleeper');
  const [passengers, setPassengers] = useState(2);
  const [booked, setBooked] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#FDFCF9] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#0D4A36]/15 text-[#1E2522]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-[#1E2522]/5 hover:bg-[#1E2522]/10 transition-colors"
        >
          <X size={18} />
        </button>

        {!booked ? (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#0D4A36] text-white flex items-center justify-center shadow-lg shadow-[#0D4A36]/20">
                <Bus size={20} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#10B981]">Express Reservation</span>
                <h3 className="text-2xl font-extrabold text-[#0D4A36]">Book Your Journey</h3>
              </div>
            </div>

            <p className="text-sm text-[#5A6B65] mb-6">
              Reserve your VIP sleeper or first-class recliner with complimentary lounge access.
            </p>

            <form onSubmit={handleBooking} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#5A6B65] mb-1 flex items-center gap-1">
                    <MapPin size={12} className="text-[#0D4A36]" /> From
                  </label>
                  <select
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#0D4A36] outline-none"
                  >
                    <option>Dhaka (Panthapath VIP)</option>
                    <option>Dhaka (Rajarbagh Terminal)</option>
                    <option>Chittagong (Dampara)</option>
                    <option>Sylhet (Subhanighat)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#5A6B65] mb-1 flex items-center gap-1">
                    <MapPin size={12} className="text-[#10B981]" /> Destination
                  </label>
                  <select
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#0D4A36] outline-none"
                  >
                    <option>Cox's Bazar (Kolatoli Beach)</option>
                    <option>Chittagong (GEC Circle)</option>
                    <option>Sylhet (Grand Sylhet Resort)</option>
                    <option>Benapole Express Way</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#5A6B65] mb-1 flex items-center gap-1">
                    <Calendar size={12} className="text-[#0D4A36]" /> Travel Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#0D4A36] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#5A6B65] mb-1 flex items-center gap-1">
                    <Users size={12} className="text-[#0D4A36]" /> Passengers
                  </label>
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(Number(e.target.value))}
                    className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#0D4A36] outline-none"
                  >
                    <option value={1}>1 Passenger</option>
                    <option value={2}>2 Passengers</option>
                    <option value={3}>3 Passengers</option>
                    <option value={4}>4+ Family Suite</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#5A6B65] mb-1.5">Coach Class</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSeatClass('sleeper')}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      seatClass === 'sleeper'
                        ? 'border-[#0D4A36] bg-[#0D4A36]/5 ring-2 ring-[#0D4A36]'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-bold text-sm text-[#0D4A36]">Double-Decker Sleeper</div>
                    <div className="text-xs text-[#5A6B65]">Private pods & recliners</div>
                    <div className="text-xs font-extrabold text-[#E5A93C] mt-1">৳ 2,400 / seat</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSeatClass('executive')}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      seatClass === 'executive'
                        ? 'border-[#0D4A36] bg-[#0D4A36]/5 ring-2 ring-[#0D4A36]'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-bold text-sm text-[#0D4A36]">First-Class Recliner</div>
                    <div className="text-xs text-[#5A6B65]">160° ergonomic seating</div>
                    <div className="text-xs font-extrabold text-[#E5A93C] mt-1">৳ 1,950 / seat</div>
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#0D4A36] text-white font-bold text-sm shadow-xl shadow-[#0D4A36]/30 hover:bg-[#126649] transition-all hover:-translate-y-0.5"
                >
                  Confirm & Lock Seats
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-[#5A6B65] pt-1">
                <ShieldCheck size={14} className="text-[#10B981]" />
                <span>Instant confirmation • Flexible cancellation up to 4 hrs before</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-2xl font-extrabold text-[#0D4A36]">Booking Confirmed!</h3>
            <p className="text-sm text-[#5A6B65] mt-2 max-w-sm mx-auto">
              Your seats on the <strong>{seatClass === 'sleeper' ? 'Double-Decker Sleeper' : 'First-Class Recliner'}</strong> from {fromCity} to {toCity} have been reserved.
            </p>
            <div className="bg-[#F6F4EE] rounded-2xl p-4 my-6 text-left text-xs space-y-1.5 border border-[#0D4A36]/10">
              <div className="flex justify-between">
                <span className="text-[#5A6B65]">Reference:</span>
                <span className="font-mono font-bold text-[#0D4A36]">GL-2026-9842</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5A6B65]">Departure Date:</span>
                <span className="font-bold">{date} • 10:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5A6B65]">Lounge Access:</span>
                <span className="font-bold text-[#10B981]">Included (Open from 8:00 PM)</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-full py-3 rounded-full bg-[#0D4A36] text-white font-bold text-sm hover:bg-[#126649] transition-all"
            >
              Back to Experience
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
