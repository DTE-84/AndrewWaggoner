import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, User, Sparkles, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface NovaChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NovaChat({ isOpen, onClose }: NovaChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "I am Nova, your Analytical Twin. How can I clarify your life science benefits today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setIsLoading(true);

    // Mock response for now, to be connected to backend later
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "I am analyzing your query against the latest industry telemetry. Based on life science benchmarks, your 401(k) matching structure is within the top 15% of biotech organizations." 
      }]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-28 right-8 z-[300] w-[400px] h-[600px] bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col backdrop-blur-xl"
        >
          {/* Header */}
          <div className="p-6 bg-white/5 border-b border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                <Bot className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm uppercase tracking-widest">Nova Engine</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-tight">System Online</span>
                </div>
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-white/5 text-slate-500 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map((msg, i) => (
              <div key={i} className={cn("flex flex-col gap-2", msg.role === "user" ? "items-end" : "items-start")}>
                <div className={cn(
                  "max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed",
                  msg.role === "user" 
                    ? "bg-amber-500 text-slate-950 font-medium rounded-tr-none" 
                    : "bg-white/5 border border-white/10 text-slate-300 rounded-tl-none"
                )}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 rounded-tl-none">
                  <Loader2 className="w-4 h-4 text-amber-400 animate-spin" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 bg-white/5 border-t border-white/5">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask Nova anything..."
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors"
              />
              <button 
                onClick={handleSend}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-amber-400 hover:text-amber-300 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
