"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portalConfig } from "@/data/portalConfig";
import { Button } from "@/components/ui/Button";

interface OnboardingData {
  area: string;
  priority: string;
  goal: string;
}

export default function Onboarding({ onComplete }: { onComplete: (data: OnboardingData) => void }) {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({ area: "", priority: "", goal: "" });

  const handleSelectArea = (id: string) => {
    setSelections(prev => ({ ...prev, area: id }));
    setStep(2);
  };

  const handleSelectPriority = (id: string) => {
    setSelections(prev => ({ ...prev, priority: id }));
    setStep(3);
  };

  const handleSelectGoal = (id: string) => {
    const finalData = { ...selections, goal: id };
    setSelections(finalData);
    setStep(4);
    setTimeout(() => onComplete(finalData), 1500);
  };

  return (
    <AnimatePresence mode="wait">
      {step < 4 && (
        <motion.div
          key="onboarding"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white/80 backdrop-blur-3xl border border-white/50 shadow-2xl p-8 rounded-[2rem] max-w-2xl mx-auto text-center w-full relative z-50"
        >
          <h2 className="text-3xl font-extrabold mb-6 text-gray-900 tracking-tight">Bana Göre ÖzÜ</h2>
          <div className="min-h-[200px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                  <p className="text-lg text-gray-600 mb-6 font-medium">YKS Puan Türün Nedir?</p>
                  <div className="grid grid-cols-2 gap-4">
                    {portalConfig.onboarding.yksAreas.map((area) => (
                      <Button key={area.id} variant="outline" size="lg" onClick={() => handleSelectArea(area.id)} className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border-gray-200 text-gray-700 bg-white/50 font-semibold hover:border-ozu-red hover:text-ozu-red">
                        {area.label}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              )}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                  <p className="text-lg text-gray-600 mb-6 font-medium">Kampüste Önceliğin Ne?</p>
                  <div className="grid grid-cols-2 gap-4">
                    {portalConfig.onboarding.priorities.map((priority) => (
                      <Button key={priority.id} variant="outline" size="lg" onClick={() => handleSelectPriority(priority.id)} className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border-gray-200 text-gray-700 bg-white/50 font-semibold hover:border-blue-600 hover:text-blue-600">
                        {priority.label}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              )}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                  <p className="text-lg text-gray-600 mb-6 font-medium">Hedeflediğin Eğitim Seviyesi?</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {portalConfig.onboarding.goals.map((goal) => (
                      <Button key={goal.id} variant="outline" size="lg" onClick={() => handleSelectGoal(goal.id)} className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border-gray-200 text-gray-700 bg-white/50 font-semibold hover:border-emerald-600 hover:text-emerald-600">
                        {goal.label}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
      {step === 4 && (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center bg-white/80 backdrop-blur-3xl p-8 rounded-[2rem] shadow-2xl max-w-lg mx-auto"
        >
          <h3 className="text-3xl font-extrabold text-ozu-red mb-2 tracking-tight">Harika!</h3>
          <p className="text-gray-700 text-lg font-medium">Sana özel ÖzÜ deneyimin hazırlanıyor...</p>
          <div className="w-12 h-12 border-4 border-ozu-red border-t-transparent rounded-full animate-spin mx-auto mt-6"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
