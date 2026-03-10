"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Play, Image as ImageIcon, Download, Code, Sparkles, Film, Key } from "lucide-react";
import { useApiKey } from "@/hooks/useApiKey";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  const { apiKey, setApiKey } = useApiKey("GEMINI_API_KEY");
  const [topic, setTopic] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const mockGenerate = async () => {
    if (!apiKey) {
      setIsSettingsOpen(true);
      return;
    }
    if (!topic) return;

    setIsGenerating(true);
    // Simulate generation delay
    await new Promise((res) => setTimeout(res, 3000));
    setIsGenerating(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white font-sans">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      {/* Header */}
      <header className="relative z-50 flex items-center justify-between p-6 glass border-b border-white/5">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-2"
        >
          <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-purple-600 shadow-lg shadow-primary/20">
            <Film className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Stopmotions
          </span>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
            <DialogTrigger>
              <Button variant="ghost" className="relative group overflow-hidden rounded-full px-4 hover:bg-white/10 hover:text-white transition-all">
                <Settings className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-500" />
                Settings
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md glass-card bg-zinc-950/80 border-white/10 text-white">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-xl font-bold">
                  <Key className="w-5 h-5 text-primary" />
                  API Configuration
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="apiKey" className="text-white/70 text-xs uppercase tracking-wider">Gemini API Key</Label>
                  <Input
                    id="apiKey"
                    type="password"
                    placeholder="AIzaSy..."
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="bg-black/50 border-white/10 text-white focus-visible:ring-primary focus-visible:border-primary placeholder:text-white/20"
                  />
                  <p className="text-xs text-white/40">
                    Your key is stored securely in your browser&apos;s local storage. This is a Bring Your Own Key (BYOK) application.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl w-full mx-auto space-y-12 text-center"
        >
          {/* Headline */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70 mb-4">
              <Sparkles className="w-3 h-3 text-primary" />
              <span>Next-Gen Stopmotion Engine</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Create stories that <br className="hidden md:block" />
              <span className="neon-text">move the world.</span>
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Harness the power of AI to generate hyper-realistic, frame-by-frame stopmotion animations instantly.
            </p>
          </motion.div>

          {/* Generator Interface: Bento Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            {/* Prompt Input Card */}
            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              className="md:col-span-2 glass-card p-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <Label className="text-white/70 text-sm font-semibold flex items-center gap-2">
                  <Code className="w-4 h-4 text-primary" /> Topic or Scenario
                </Label>
                <textarea
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g. A tiny robot trying to catch a butterfly in a neon-lit cyber city..."
                  className="w-full bg-transparent border-none text-xl md:text-3xl font-light text-white placeholder:text-white/20 resize-none outline-none min-h-[100px]"
                />
              </div>
              <div className="pt-6 mt-auto border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/40 font-mono flex items-center gap-1">
                  <div className={`w-2 h-2 rounded-full ${apiKey ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  {apiKey ? "API Ready" : "API Missing"}
                </span>
                <Button
                  onClick={mockGenerate}
                  disabled={isGenerating}
                  className="bg-primary hover:bg-primary/80 text-white rounded-full px-8 py-6 shadow-[0_0_20px_rgba(100,50,255,0.4)] hover:shadow-[0_0_30px_rgba(100,50,255,0.6)] transition-all flex items-center gap-2 text-md font-semibold overflow-hidden relative"
                >
                  <AnimatePresence mode="wait">
                    {isGenerating ? (
                      <motion.div
                        key="generating"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Generating...
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Play className="w-4 h-4 fill-current" />
                        Generate
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </div>
            </motion.div>

            {/* Quick Settings / Status Card */}
            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              className="glass-card p-6 flex flex-col gap-6"
            >
              <div className="space-y-2">
                <Label className="text-white/70 text-xs uppercase tracking-wider mb-2 block">Settings</Label>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-white/50" />
                    <span className="text-sm">Style</span>
                  </div>
                  <span className="text-xs font-mono text-primary">Cinematic</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Film className="w-4 h-4 text-white/50" />
                    <span className="text-sm">Frames</span>
                  </div>
                  <span className="text-xs font-mono text-primary">12 FPS</span>
                </div>
              </div>

              <div className="mt-auto space-y-2 pt-4 border-t border-white/10">
                <Label className="text-white/70 text-xs uppercase tracking-wider mb-2 block">Output</Label>
                <Button variant="outline" className="w-full bg-transparent border-white/20 hover:bg-white/10 hover:text-white rounded-xl">
                  <Download className="w-4 h-4 mr-2" />
                  Export Video
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
