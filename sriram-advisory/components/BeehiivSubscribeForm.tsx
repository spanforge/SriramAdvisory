"use client";

import { useEffect, useRef } from "react";

const BEEHIIV_FORM_ID = "d13ffa2a-ae9e-45c3-aa30-420e8d7acd94";
const BEEHIIV_LOADER_SRC = "https://subscribe-forms.beehiiv.com/v3/loader.js";

export default function BeehiivSubscribeForm() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    mount.innerHTML = "";

    const script = document.createElement("script");
    script.async = true;
    script.src = BEEHIIV_LOADER_SRC;
    script.setAttribute("data-beehiiv-form", BEEHIIV_FORM_ID);
    mount.appendChild(script);

    return () => {
      mount.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-label="Newsletter subscription form"
      style={{ width: "100%", minHeight: 320 }}
    />
  );
}
