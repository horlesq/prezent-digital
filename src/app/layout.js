import "./globals.css";
import { Rubik } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const rubik = Rubik({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
});

export const metadata = {
    title: {
        template: "%s | Prezent Digital",
        default: "Prezent Digital",
    },
    description:
        "Your personal recipe generator. Use Artificial Intelligence to instantly create unique recipes and culinary suggestions from the ingredients you have at home.",
};

export default async function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head></head>
            <body
                className={`${rubik.className} antialiased min-h-screen flex flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100`}
            >
                <ThemeProvider>
                    <Header />

                    <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
                        <div className="max-w-6xl mx-auto w-full">
                            {children}
                        </div>
                    </main>

                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
