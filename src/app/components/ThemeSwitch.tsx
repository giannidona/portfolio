"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Button } from "@nextui-org/react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex gap-4 my-auto">
      {theme === "dark" ? (
        <Button
          className="text-2xl"
          isIconOnly
          aria-label="light-mode"
          onClick={() => setTheme("light")}
        >
          <MdOutlineLightMode />
        </Button>
      ) : (
        <Button
          className="text-2xl"
          isIconOnly
          aria-label="dark-mode"
          onClick={() => setTheme("dark")}
        >
          <MdOutlineDarkMode />
        </Button>
      )}
    </div>
  );
}
