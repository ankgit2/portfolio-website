// app/contact/page.tsx

export default function ContactPage() {
  return (
    <main className="container mx-auto max-w-3xl px-6 py-16 text-gray-900 dark:text-gray-100">
      
      {/* Header section */}
      <section className="space-y-4 mb-10">
        <h2 className="text-3l sm:text-2xl font-extrabold tracking-tight m-0">
          Let's work together.
        </h2>
        <p className="text-l sm:text-2l text-gray-600 dark:text-gray-400">
          I&apos;m always open to chat.<br/>
          Let's talk about what we can build together.
        </p>
      </section>

      {/* Email Link */}
      <a 
        href="mailto:ankprof21@gmail.com" 
        className="inline-block text-2l sm:text-2xl font-bold text-gray-900 dark:text-white underline decoration-orange-300 dark:decoration-orange-400 underline-offset-[6px] hover:decoration-orange-400 dark:hover:decoration-orange-400 transition-all mb-8"
      >
        ankprof21@gmail.com
      </a>

      {/* Social Buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
        <a 
          href="https://www.linkedin.com/in/yank21/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center justify-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 bg-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 text-gray-600 dark:text-gray-400">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
          </svg>
          LinkedIn
        </a>
        
        <a 
          href="https://github.com/ankgit2" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center justify-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 bg-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 text-gray-600 dark:text-gray-400">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
          </svg>
          GitHub
        </a>

        <a 
          href="https://www.instagram.com/xix.ankit_/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center justify-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 bg-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 text-gray-600 dark:text-gray-400">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
          </svg>
          Instagram
        </a>
      </div>

      {/* Form Card */}
      <section className="relative overflow-hidden rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-gray-50/40 dark:bg-gray-900/20 p-5 sm:p-6 shadow-sm backdrop-blur-sm">
        
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-orange-500/10 blur-3xl"></div>
        
        <header className="mb-6 flex items-baseline justify-between gap-4 relative z-10">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Send me a message</h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">Replies in 1-2 days</span>
        </header>

        <form className="flex flex-col gap-4 relative z-10">
          <div className="grid gap-4 sm:grid-cols-2">
            
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-medium tracking-wide text-gray-500 dark:text-gray-400">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Jane Doe" 
                className="flex w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-gray-800/40 px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-600"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-medium tracking-wide text-gray-500 dark:text-gray-400">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="jane@example.com" 
                className="flex w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-gray-800/40 px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-600"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-medium tracking-wide text-gray-500 dark:text-gray-400">Message</label>
            <textarea 
              id="message" 
              rows={4} 
              placeholder="Hi Ankit, I'd love to chat about..." 
              className="flex w-full min-h-[8rem] resize-y rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-gray-800/40 px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-600"
            ></textarea>
          </div>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              I'll reply directly to your email.
            </p>
            
            {/* The static Send Button */}
            <button 
                 type="submit" 
                 // ADDED: whitespace-nowrap prevents the arrow from dropping to the next line
                 className="inline-flex h-10 w-full sm:w-auto whitespace-nowrap items-center justify-center gap-3 rounded-full bg-zinc-900 pl-1 pr-4 text-sm font-medium text-white transition-transform hover:scale-[1.02] dark:bg-white dark:text-zinc-900 shadow-sm"
>
                 <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                         <line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                 </div>
                 Send message &rarr;
            </button>
          </div>
        </form>
      </section>

      {/* Footer Section */}
      <section className="mt-10 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <span>Based in Delhi, India</span>
         <span>&middot;</span>
        <a 
          href="/Ankit_Yadav_CV.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-gray-900 dark:text-orange-500 hover:underline"
        >
          Download CV (PDF) 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </a>
      </section>

    </main>
  );
}