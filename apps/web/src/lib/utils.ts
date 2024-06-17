import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const useGlobalTheme = (h: number, s: number, l: number) => {
  const globalTheme = `
   @layer base {
    :root {
      --background: ${h} 0% 100%;
      --foreground: ${h} 84% 4.9%;

      --card: ${h} 0% 100%;
      --card-foreground: ${h} 84% 4.9%;

      --popover: ${h} 0% 100%;
      --popover-foreground: ${h} 84% 4.9%;

      --primary: ${h} 47.4% 11.2%;
      --primary-foreground: ${h} 40% 98%;

      --secondary: ${h} 40% 96.1%;
      --secondary-foreground: ${h} 47.4% 11.2%;

      --muted: ${h} 40% 96.1%;
      --muted-foreground: ${h} 16.3% 46.9%;

      --accent: ${h} 40% 96.1%;
      --accent-foreground: ${h} 47.4% 11.2%;

      --destructive: 0 84.2% 60.2%;
      --destructive-foreground: ${h} 40% 98%;

      --border: ${h} 31.8% 91.4%;
      --input: ${h} 31.8% 91.4%;
      --ring: ${h} 84% 4.9%;

      --radius: 0.5rem;
    }

    .dark {
      --background: ${h} 84% 4.9%;
      --foreground: ${h} 40% 98%;

      --card: ${h} 84% 4.9%;
      --card-foreground: ${h} 40% 98%;

      --popover: ${h} 84% 4.9%;
      --popover-foreground: ${h} 40% 98%;

      --primary: ${h} 40% 98%;
      --primary-foreground: ${h} 47.4% 11.2%;

      --secondary: ${h} 32.6% 17.5%;
      --secondary-foreground: ${h} 40% 98%;

      --muted: ${h} 32.6% 17.5%;
      --muted-foreground: ${h} 20.2% 65.1%;

      --accent: ${h} 32.6% 17.5%;
      --accent-foreground: ${h} 40% 98%;

      --destructive: 0 62.8% 30.6%;
      --destructive-foreground: ${h} 40% 98%;

      --border: ${h} 32.6% 17.5%;
      --input: ${h} 32.6% 17.5%;
      --ring: ${h} 26.8% 83.9%;
    }
  }
   `;

  const colors = `
   {"theme":"violet","radius":0.5,"saturationRange":[0],"lightnessRange":[100],"colors":{"light":{"background":{"h":${h},"s":0,"l":100},"foreground":{"h":${h},"s":0,"l":10},"primary":{"h":${h},"s":86,"l":47},"secondary":{"h":${h},"s":10,"l":90},"border":{"h":${h},"s":20,"l":82},"input":{"h":${h},"s":20,"l":50},"card":{"h":${h},"s":0,"l":100},"cardForeground":{"h":${h},"s":0,"l":15},"muted":{"h":105,"s":10,"l":95},"mutedForeground":{"h":${h},"s":0,"l":40},"accent":{"h":105,"s":10,"l":90},"accentForeground":{"h":${h},"s":0,"l":15},"ring":{"h":${h},"s":86,"l":47},"popover":{"h":${h},"s":0,"l":100},"popoverForeground":{"h":${h},"s":95,"l":10},"destructive":{"h":0,"s":50,"l":50},"destructiveForeground":{"h":${h},"s":0,"l":100}},"dark":{"background":{"h":${h},"s":10,"l":10},"foreground":{"h":${h},"s":0,"l":100},"primary":{"h":${h},"s":86,"l":47},"secondary":{"h":${h},"s":10,"l":20},"border":{"h":${h},"s":20,"l":50},"input":{"h":${h},"s":20,"l":50},"card":{"h":${h},"s":0,"l":10},"cardForeground":{"h":${h},"s":0,"l":100},"muted":{"h":105,"s":10,"l":25},"mutedForeground":{"h":${h},"s":0,"l":65},"accent":{"h":105,"s":10,"l":25},"accentForeground":{"h":${h},"s":0,"l":95},"ring":{"h":${h},"s":86,"l":47},"popover":{"h":${h},"s":10,"l":5},"popoverForeground":{"h":${h},"s":0,"l":100},"destructive":{"h":0,"s":50,"l":50},"destructiveForeground":{"h":${h},"s":0,"l":100}}}}
   `;

  return globalTheme;
};
