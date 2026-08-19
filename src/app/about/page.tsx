// app/about/page.tsx
import Image from 'next/image';
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

const BLUR_FADE_DELAY = 0.00;

export default function AboutPage() {
  return (
    <main 
      className="flex flex-col gap-4 text-gray-800 dark:text-gray-300"
      
    >
      
      {/* Header Section */}
      <div className="flex items-center justify-between gap-4">
        <section className="prose dark:prose-invert">
          {/* UPDATED: Added font-sans, tracking-tight, and font-semibold for that perfect clean look */}
          <h2 className="font-sans text-3l sm:text-4l font-semibold tracking-tight font-sans text-gray-900 dark:text-white m-0" style={{ opacity: 1 }}>
            
            About
            
          </h2>
        </section>

       <div className="size-20 shrink-0 overflow-hidden rounded-full border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
       
       <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="w-full h-full object-cover"width={80} height={80} >
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl1} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
       </div>
      </div>
      {/* Profile Content */}
      
      <p className="font-sans text-base leading-relaxed text-gray-600 dark:text-gray-300">
        <strong>Ankit Yadav</strong> is a Computer Science graduate and aspiring Python developer from India 🇮🇳. He enjoys building practical software applications, solving programming problems, and exploring how technology can turn simple ideas into useful solutions.<em className="italic">software development</em>
      </p>

      <p className="font-sans text-base leading-relaxed text-gray-600 dark:text-gray-300">
        Ankit is passionate about <strong>software development, Python, and problem solving</strong>. He believes good software should be simple, reliable, and useful. His interests range from building Python applications and working with databases to exploring data-driven solutions and experimenting with new technologies.
      </p>

      <p className="font-sans text-base leading-relaxed text-gray-600 dark:text-gray-300">
        His work includes projects such as a <strong>Heart Disease Prediction system</strong>, a <strong>Smart Research Assistant</strong>, and a <strong>Nutrition Checker</strong>. Through these projects, he has gained hands-on experience with <strong>Python, MySQL, Pandas, NumPy, Scikit-learn, Streamlit, Tkinter, and Git/GitHub</strong>.
      </p>

      <p className="font-sans text-base leading-relaxed text-gray-600 dark:text-gray-300">
        He enjoys learning by building things from scratch, experimenting with different approaches, and improving his understanding through real projects. He also spends time practicing <strong>Data Structures and Algorithms</strong>, with 150+ problems solved on platforms such as LeetCode and CodeChef.
      </p>

      <p className="font-sans text-base leading-relaxed text-gray-600 dark:text-gray-300">
        As a fresher, Ankit is currently looking for opportunities where he can <strong>learn from experienced developers, contribute to real-world projects, and grow as a software developer</strong>. He approaches every project with curiosity, consistency, and a willingness to learn.
      </p>

      <p className="font-sans text-base leading-relaxed text-gray-600 dark:text-gray-300">
        When he is away from his laptop,Either found in<strong>the mountains</strong> or he enjoys <strong>swimming, athletics, and exploring new things</strong>. Whether he is solving a coding problem or building a new project, he is always curious about what he can learn next.
      </p>

      {/* CV Button Section */}
      <div className="mt-4 flex items-center gap-2">
        <a 
          data-slot="button" 
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size'])]:size-4 border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3" 
          href="/Ankit_Yadav_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="lucide lucide-book"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
          </svg>
          <p className="font-sans text-base leading-relaxed text-gray-600 dark:text-gray-300">
          Read my CV
          </p>
        </a>
      </div>
      
    </main>
  );
}