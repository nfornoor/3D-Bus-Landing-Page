import React from 'react';
import { X, Sparkles, Wifi, Coffee, Tv, ShieldCheck } from 'lucide-react';

export const FleetModal = ({ isOpen, onClose, onBook }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#FDFCF9] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#0D4A36]/15 text-[#1E2522] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-[#1E2522]/5 hover:bg-[#1E2522]/10 transition-colors"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#10B981] mb-1">
          <Sparkles size={14} /> The Master Fleet
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0D4A36] mb-3">Greenline Flagship Coaches</h3>
        <p className="text-sm text-[#5A6B65] mb-6">
          Custom-engineered multi-axle luxury chassis with electronically controlled air suspension and bespoke interior cabins.
        </p>

        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-2xl bg-[#F6F4EE] border border-[#0D4A36]/10 flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-40 h-28 rounded-xl overflow-hidden bg-[#0D4A36]/10 shrink-0">
              <img src="/assets/img/cabin.webp" alt="Sleeper Suite" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-extrabold text-[#0D4A36] text-base">Double-Decker Sleeper Suite</h4>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#10B981]/15 text-[#0D4A36]">VIP Tier</span>
              </div>
              <p className="text-xs text-[#5A6B65] mt-1">
                Upper deck full flat sleeper pods and lower deck business recliners. Individual climate control, blackout blinds, and personal 10.5” media hubs.
              </p>
              <div className="flex flex-wrap gap-2 mt-3 text-[11px] font-semibold text-[#0D4A36]">
                <span className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-md border border-[#0D4A36]/10"><Wifi size={10} /> Fast WiFi</span>
                <span className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-md border border-[#0D4A36]/10"><Coffee size={10} /> Hot Bar</span>
                <span className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-md border border-[#0D4A36]/10"><Tv size={10} /> 4K Stream</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#F6F4EE] border border-[#0D4A36]/10 flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-40 h-28 rounded-xl overflow-hidden bg-[#0D4A36]/10 shrink-0">
              <img src="/assets/img/highway.webp" alt="Express Cruiser" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-extrabold text-[#0D4A36] text-base">Multi-Axle Express Cruiser</h4>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#E5A93C]/15 text-[#E5A93C]">Executive</span>
              </div>
              <p className="text-xs text-[#5A6B65] mt-1">
                Custom Scania chassis with active lane-assist, radar cruise control, and ultra-smooth electronically dampened suspension.
              </p>
              <div className="flex flex-wrap gap-2 mt-3 text-[11px] font-semibold text-[#0D4A36]">
                <span className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-md border border-[#0D4A36]/10"><ShieldCheck size={10} /> 5-Star Safety</span>
                <span className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-md border border-[#0D4A36]/10">160° Recline</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => {
              onClose();
              if (onBook) onBook();
            }}
            className="flex-1 py-3 px-5 rounded-full bg-[#0D4A36] text-white font-bold text-sm shadow-lg hover:bg-[#126649] transition-all"
          >
            Book This Fleet
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-full border border-gray-300 font-semibold text-sm hover:bg-gray-100 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
