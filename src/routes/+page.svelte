<script>
	import logo from '$lib/img/epc_logo_full.svg';
    import iconGithub from '$lib/img/icons/github.svg';
    import iconLinkedIn from '$lib/img/icons/linkedin.svg';

    import thumbnailIdsWeb from '$lib/img/thumbnails/ids-enterprise-wc.png';
    import thumbnailIdsOld from '$lib/img/thumbnails/ids-enterprise.png';

	import Pill from '../components/Pill.svelte';
	import Triangle from '../components/Triangle.svelte';
</script>

<div id="content" class="flex flex-col lg:flex-row h-full w-full overflow-auto lg:overflow-hidden">
    <div class="w-full h-full lg:w-550">
        <div class="flex flex-col h-full p-8">
            <header class="mb-8">
                <h1>
                    <img class="max-w-32r lg:max-w-32r" src={logo} alt="Edward Coyle. Developer. Designer. Animator." />
                </h1>
            </header>
            <div class="mb-8 max-w-96">
                <p class="tagline">I am a seasoned front-end developer who loves to design fun and accessible experiences</p>
            </div>
            <ul class="mb-8 max-lg:hidden">
                <li class="flex flex-row gap-2 items-center"><Triangle></Triangle><a class="link" href="#about">About Me</a></li>
                <li class="flex flex-row gap-2 items-center"><Triangle></Triangle><a class="link" href="#work">Work Experience</a></li>
                <li class="flex flex-row gap-2 items-center"><Triangle></Triangle><a class="link" href="#projects">Past Projects</a></li>
            </ul>
            <div class="lg:mt-auto flex mb-8 lg:mb-0">
                <a href="https://github.com/EdwardCoyle"><img src={iconGithub} alt="Github" /></a>
                <a href="https://linkedin.com/in/edwardcoylejr"><img src={iconLinkedIn} alt="LinkedIn" /></a>
            </div>
        </div>
    </div>
    <main class="h-full w-full lg:w-oppo550 lg:overflow-y-auto lg:overflow-x-hidden">
        <div class="lg:p-8">
            <!-- About -->
            <section class="m-4 p-4 min-h-96 max-w-640 lg:w-640 bg-cardBg" id="about" aria-label="About">
                <h2 class="mb-8">About Me</h2>
                <p class="mb-8 text-md">I've been interested in tech ever since I was young, back when I first started playing with the <a href="https://en.wikibooks.org/wiki/ZZT-OOP/Introduction">ZZT OOP language</a> on my parents' i386 DOS/Windows machine.  Ever since then, I've loved tinkering with programming languages and pixel art tools, making my best attempts at creating something nifty.</p>
                <p class="mb-8 text-md">These days, I'm a Senior Software Engineer responsible for the <a href="https://design.infor.com/">Infor Design System</a>, where I was responsible for bringing a significant amount of their design system to life as TypeScript-based Web Components used by all the company's application teams.</p>
                <p class="mb-8 text-md">My overall professional experience ranges from enterprise-level application development, to motion graphic design and video-editing/post-production, to character animation. I attended The Art Institute of Philadelphia for my bachelor's degree in Media Arts & Animation, specializing in 3D Animation. I've also worked on some side projects involving programming and art direction for <a href="https://thegamespage.com">iOS and Windows games</a>! I've been fortunate to have many interesting opportunities during my short career.</p>
                <p class="mb-8 text-md">I'm always interested in new opportunities to be creative.  I'd love to learn more about yours.  Please <a href="/contact">contact me</a> if you think we'd work well together!</p>
            </section>

            <!-- Work Experience -->
            <section class="m-4 p-4 min-h-96 max-w-640 lg:w-640 bg-cardBg" id="work" aria-label="Work Experience">
                <h2 class="mb-8">Work Experience</h2>
                <div class="grid group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <!-- Schneider -->
                    <div class="dates z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                        Jan 2024 - present
                    </div>
                    <div class="details z-10 sm:col-span-6">
                        <h3>Schneider Electric</h3>
                        <h4>Angular Software Engineer</h4>
                        <p class="text-sm py-4">
                            Built front end for data aggregation tool aiding customers in ESG data collection.
                            Educated team on Angular app development using module/native federation.
                            Advocated for improved front end standards
                        </p>
                        <ul class="tag-list mt-2 flex flex-wrap">
                            <Pill>TypeScript</Pill>
                            <Pill>Angular 17+</Pill>
                            <Pill>Azure</Pill>
                            <Pill>TailwindCSS</Pill>
                            <Pill>Figma</Pill>
                            <Pill>JIRA</Pill>
                        </ul>
                    </div>

                    <!-- Infor -->
                    <div class="dates z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                        Aug 2014 - Jan 2024
                    </div>
                    <div class="details z-10 sm:col-span-6">
                        <h3>Infor, Inc.</h3>
                        <h4>Senior Software Engineer @ Infor Design System (IDS)</h4>
                        <p class="text-sm py-4">
                            Played a key role in developing and delivering two significant revisions of Infor’s enterprise UI components, empowering application engineers to prototype more efficiently.
                            Led maintenance, roadmap planning, and specification definition for design system assets, contributing to a cohesive and user-friendly product experience.
                            Developed framework-agnostic Web Components and integrated them into major front-end frameworks.
                        </p>
                        <ul class="tag-list mt-2 flex flex-wrap">
                            <Pill>TypeScript</Pill>
                            <Pill>Web Components</Pill>
                            <Pill>SASS</Pill>
                            <Pill>Angular 17+</Pill>
                            <Pill>React</Pill>
                            <Pill>Sveltekit</Pill>
                            <Pill>Figma</Pill>
                        </ul>
                    </div>

                    <!-- Connexin -->
                    <div class="dates z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                        Jun 2010 - Aug 2014
                    </div>
                    <div class="details z-10 sm:col-span-6">
                        <h3>Connexin Software, Inc.</h3>
                        <h4>Software Developer @ UX Team</h4>
                        <p class="text-sm py-4">
                            Collaborated on the design process for SaaS-based electronic health record software, including architecture, graphics, and prototypes.
                            Implemented customer-specific themes for the Office Practicum patient portal,  enhancing user experience and branding consistency.
                            Resolved issues related to the accurate display of patient health records, ensuring data integrity and usability.
                        </p>
                        <ul class="tag-list mt-2 flex flex-wrap">
                            <Pill>JavaScript</Pill>
                            <Pill>jQuery</Pill>
                            <Pill>Node.js</Pill>
                            <Pill>Backbone/Marionette</Pill>
                            <Pill>Java</Pill>
                            <Pill>Adobe CS</Pill>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Past Projects -->
            <section class="m-4 p-4 min-h-96 max-w-640 lg:w-640 bg-cardBg" id="projects" aria-label="Projects">
                <h2 class="mb-8">Past Projects</h2>

                <div class="grid group relatived pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                    <!-- IDS Web Components -->
                    <div class="dates z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                        <img src={thumbnailIdsWeb} alt="Thumbnail for IDS Web Components">
                    </div>
                    <div class="details z-10 sm:col-span-6">
                        <h3>Web Component Library</h3>
                        <h4>Infor Design System</h4>
                        <p class="text-sm py-4">I contributed to the architecture powering the new Web Component library, as well as the components themselves, utilized by modern Infor applications. I'm also one of the gatekeepers that helps accept/build new features based on posted Github issues. The live examples below include some components I've been responsible for building and maintaining.</p>
                        <ul>
                            <li class="project-link text-sm flex flex-row gap-2 items-center">
                                <Triangle></Triangle>
                                <a class="link" title="Live Examples (Main Page)" href="https://main.wc.design.infor.com">Live Examples (Main Page)</a> 
                            </li>
                            <li class="project-link text-sm flex flex-row gap-2 items-center">
                                <Triangle></Triangle>
                                <a class="link" title="Live Example - IDS Popup Menu Component" href="https://main.wc.design.infor.com/ids-popup-menu">Live Example - IDS Popup Menu Component</a>
                            </li>
                            <li class="project-link text-sm flex flex-row gap-2 items-center">
                                <Triangle></Triangle>
                                <a class="link" title="Live Example - IDS Module Nav Component" href="https://main.wc.design.infor.com/ids-module-nav">Live Example - IDS Module Nav Component</a>
                            </li>
                            <li class="project-link text-sm flex flex-row gap-2 items-center">
                                <Triangle></Triangle>
                                <a class="link" title="Live Example - IDS Toolbar Component" href="https://main.wc.design.infor.com/ids-toolbar">Live Example - IDS Toolbar Component</a>
                            </li>
                            <li class="project-link text-sm flex flex-row gap-2 items-center">
                                <Triangle></Triangle>
                                <a class="link" title="Github Repo" href="https://github.com/infor-design/enterprise-wc">Github Repo</a>
                            </li>
                            <li class="project-link text-sm flex flex-row gap-2 items-center">
                                <Triangle></Triangle>
                                <a class="link" title="Github Repo (Front-end Framework Examples)" href="https://github.com/infor-design/enterprise-wc-examples">Github Repo (Front-end Framework Examples)</a>
                            </li>
                        </ul>
                        
                        <ul class="tag-list mt-2 flex flex-wrap">
                            <Pill>TypeScript</Pill>
                            <Pill>Web Components</Pill>
                            <Pill>SASS</Pill>
                            <Pill>Node.js</Pill>
                        </ul>
                    </div>

                    <!-- Old IDS -->
                    <div class="dates z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                        <img class="border-1" src={thumbnailIdsOld} alt="Thumbnail for IDS Web Components">
                    </div>
                    <div class="details z-10 sm:col-span-6">
                        <h3>jQuery Component Library</h3>
                        <h4>Infor Design System</h4>
                        <p class="text-sm py-4">I built from scratch many of the jQuery components used in legacy Infor applications. I've also maintained the components for the duration of my time at Infor, and helped bring this particular library from closed to open-source on Github. The live examples below include some components I've been responsible for building and maintaining.</p>
                        <ul>
                            <li class="project-link text-sm flex flex-row gap-2 items-center">
                                <Triangle></Triangle>
                                <a class="link" title="Official Documenation" href="https://design.infor.com/">Official Documentation</a> 
                            </li>
                            <li class="project-link text-sm flex flex-row gap-2 items-center">
                                <Triangle></Triangle>
                                <a class="link" title="Live Example - Main Page" href="https://main-enterprise.demo.design.infor.com/">Live Examples - Main Page</a>
                            </li>
                            <li class="project-link text-sm flex flex-row gap-2 items-center">
                                <Triangle></Triangle>
                                <a class="link" title="Live Example - App Menu Component" href="https://main-enterprise.demo.design.infor.com/components/applicationmenu/example-personalized-roles.html">Live Example - App Menu Component</a>
                            </li>
                            <li class="project-link text-sm flex flex-row gap-2 items-center">
                                <Triangle></Triangle>
                                <a class="link" title="Live Example - Header Component" href="https://main-enterprise.demo.design.infor.com/components/header/example-flex-toolbar.html">Live Example - Header Component</a>
                            </li>
                            <li class="project-link text-sm flex flex-row gap-2 items-center">
                                <Triangle></Triangle>
                                <a class="link" title="Github Repo (Enterprise Components)" href="https://github.com/infor-design/enterprise">Github Repo (Enterprise Components)</a>
                            </li>
                            <li class="project-link text-sm flex flex-row gap-2 items-center">
                                <Triangle></Triangle>
                                <a class="link" title="Github Repo (Front-end Framework Examples)" href="https://github.com/infor-design/enterprise-ng">Github Repo (Angular Components)</a>
                            </li>
                        </ul>
                        
                        <ul class="tag-list mt-2 flex flex-wrap">
                            <Pill>JavaScript</Pill>
                            <Pill>jQuery</Pill>
                            <Pill>SASS</Pill>
                            <Pill>Node.js</Pill>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </main>
</div>