import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";

import SplashIntro from "./screens/splash-screen/SplashIntro";
import Onboarding1 from "./screens/splash-screen/Onboarding1";
import Onboarding2 from "./screens/splash-screen/Onboarding2";
import Onboarding3 from "./screens/splash-screen/Onboarding3";
import Onboarding4 from "./screens/splash-screen/Onboarding4";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [step, setStep] = useState("splash");
  // splash | onboarding1 | onboarding2 | onboarding3 | onboarding4 | auth

  useEffect(() => {
    const prepare = async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));
      await SplashScreen.hideAsync();
      setAppReady(true);
    };

    prepare();
  }, []);

  if (!appReady) return null;

  if (step === "splash")
    return <SplashIntro onFinish={() => setStep("onboarding1")} />;

  if (step === "onboarding1")
    return <Onboarding1 onNext={() => setStep("onboarding2")} />;

  if (step === "onboarding2")
    return (
      <Onboarding2
        onNext={() => setStep("onboarding3")}
        onBack={() => setStep("onboarding1")}
      />
    );

  if (step === "onboarding3")
    return (
      <Onboarding3
        onNext={() => setStep("onboarding4")}
        onBack={() => setStep("onboarding2")}
      />
    );

  if (step === "onboarding4")
    return <Onboarding4 onFinish={() => setStep("auth")} />;

  return null; // nanti auth/login
}