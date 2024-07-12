import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP",

  });

  return formatter.format(price);
}

export function constructMetadata({
  title = "Caseome - Custom iPhone Case",
  description = "Create Custom iPhone Case Online",
  image = '/logo-1.png',
  icons = '/favicon.ico'
  
}: {
  title?: string,
  description?: string,
  image?: string,
  icons?: string
} = {}):Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{url: image}]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@imacancer352",
    },
    icons,
    metadataBase: new URL("https://case-ome.vercel.app/")
  }
}