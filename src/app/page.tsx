import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { Icons } from "@/components/icons";
import Image from 'next/image';

const BLUR_FADE_DELAY = 0.00;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      
       {/* --- START OF HEADER SECTION --- */}
      <section className="flex items-center w-full">
        
        {/* Left side: Avatar + Text wrapped together so they stay close */}
        <div className="flex items-center gap-4">
          
          {/* Avatar: Changed to rounded-full for a perfect circle like the image */}
          <div className="size-20 shrink-0 overflow-hidden rounded-full border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
             {/* Replace this with your actual image path */}
              <Image src="/ankit-profile.png" alt="Ankit Yadav" className="w-full h-full object-cover" width={80} height={80} /> 
          </div>

          {/* Text: Stacked column, no top margin, tightly spaced */}
          <div className="flex flex-col">
            <h2 style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>Ankit Yadav</h2>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 m-0 mt-0.5"style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
              Aspiring Python Developer & Software Enthusiast
            </p>
          </div>
          
        </div>

        {/* Right side: GitHub Icon, pushed to the far right using ml-auto (margin-left: auto) */}
        <a 
          href="https://github.com/ankgit2" 
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto flex items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <Icons.github className="size-5 shrink-0" />
        </a>

      </section>
      {/* --- END OF HEADER SECTION --- */}
      <section id="about">
        
          <h2 style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>Welcome to my portfolio</h2>
        
        
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
              
      </section>

      <section id="project">
        
          <h2 style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>Project</h2>
        
        
         <h2 style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>odo</h2>
         
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {`A bike route planning app that adapts to your needs and preferences. Generate routes with just a few clicks.`}
          </Markdown>
         
         
         <h2 style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>Power Flow Card Plus</h2>

         <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {`A power distribution card inspired by the official Energy Distribution card for Home Assistant.`}
          </Markdown>


         <h2 style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>survy</h2>
         
         <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {`An advanced survey app that allows you to create and share surveys with your friends.`}
          </Markdown>


         <h2 style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>wattguard</h2>

         <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {`An advanced survey app that allows you to create and share surveys with your friends.`}
          </Markdown>
         
              
      </section>
      
       
      
      
      
      
     
    </main>
  );
}
