<script lang="ts">
    import { onMount } from 'svelte';
	import logo from '$lib/img/epc_logo_full.svg';

    import thumbnailIdsWeb from '$lib/img/thumbnails/ids-enterprise-wc.png';
    import thumbnailIdsOld from '$lib/img/thumbnails/ids-enterprise.png';
    import thumbnailFTLS from '$lib/img/thumbnails/ls_ipod_1.png';
    import thumbnailHurdler from '$lib/img/thumbnails/hurdler_update_full_512.png';
    import thumbnailDDan from '$lib/img/thumbnails/ddan_splash_itunes.png';
    import thumbnailTGP from '$lib/img/thumbnails/tgp_01.png';

    import logoSE from '$lib/img/logos/se.png';
    import logoInfor from '$lib/img/logos/infor.png';
    import logoOP from '$lib/img/logos/op.png';

	import ContentGrid from '../components/ContentGrid.svelte';
	import ContentGridMain from '../components/ContentGridMain.svelte';
    import ContentGridAside from '../components/ContentGridAside.svelte';

	import Pill from '../components/Pill.svelte';
	import Triangle from '../components/Triangle.svelte';
	import BulletList from '../components/BulletList.svelte';
	import BulletListItem from '../components/BulletListItem.svelte';
	import Github from '../components/icons/Github.svelte';
	import LinkedIn from '../components/icons/LinkedIn.svelte';
	import EmptyAsideImage from '../components/EmptyAsideImage.svelte';
	import PillList from '../components/PillList.svelte';
	import AccentHeader from '../components/AccentHeader.svelte';
	import ContentCard from '../components/ContentCard.svelte';
    import MobileScrollProgress from '../components/MobileScrollProgress.svelte';
    import ScrollToTopButton from '../components/ScrollToTopButton.svelte';

    const mobileBreakpoint = 1024;

    let aboutStickyTrigger: HTMLDivElement;
    let workStickyTrigger: HTMLDivElement;
    let projectsStickyTrigger: HTMLDivElement;
    let mainEl: HTMLElement;
    let homeEl: HTMLElement;
    let scrollProgress = 0;
    let showScrollToTop = false;
    let aboutHeaderStuck = false;
    let workHeaderStuck = false;
    let projectsHeaderStuck = false;

    function clamp(value: number, min: number, max: number) {
        return Math.min(Math.max(value, min), max);
    }

    function updateScrollProgress() {
        if (window.innerWidth >= mobileBreakpoint) {
            scrollProgress = 0;
            if (mainEl) {
                showScrollToTop = mainEl.scrollTop > mainEl.clientHeight * 0.3;
            }
            return;
        }

        const scrollTop = homeEl ? homeEl.scrollTop : (window.scrollY || document.documentElement.scrollTop || 0);
        const scrollHeight = homeEl ? (homeEl.scrollHeight - homeEl.clientHeight) : (document.documentElement.scrollHeight - window.innerHeight);

        scrollProgress = scrollHeight > 0 ? clamp((scrollTop / scrollHeight) * 100, 0, 100) : 0;
        showScrollToTop = scrollTop > (homeEl ? homeEl.clientHeight : window.innerHeight) * 0.3;
    }

    function scrollToTop() {
        if (window.innerWidth >= mobileBreakpoint && mainEl) {
            mainEl.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (homeEl) {
            homeEl.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    onMount(() => {
        // Scroll progress and scroll-to-top button
        let ticking = false;
        const scheduleUpdate = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                ticking = false;
                updateScrollProgress();
            });
        };
        scheduleUpdate();
        window.addEventListener('scroll', scheduleUpdate, { passive: true });
        window.addEventListener('resize', scheduleUpdate);
        mainEl?.addEventListener('scroll', scheduleUpdate, { passive: true });
        homeEl?.addEventListener('scroll', scheduleUpdate, { passive: true });

        // Sticky detection via IntersectionObserver.
        // Each sentinel sits just above the sticky header in normal flow.
        // When it scrolls out of view above the top edge, the header is stuck.
        const makeStickyObserver = (setter: (stuck: boolean) => void, root?: Element | null) =>
            new IntersectionObserver(
                ([entry]) => {
                    setter(!entry.isIntersecting && entry.boundingClientRect.top < 1);
                },
                { threshold: 0, rootMargin: '0px 0px 0px 0px', root: root ?? null }
            );

        const observers: IntersectionObserver[] = [];

        const stickyPairs: [HTMLDivElement, (v: boolean) => void][] = [
            [aboutStickyTrigger,    (v) => (aboutHeaderStuck    = v)],
            [workStickyTrigger,     (v) => (workHeaderStuck     = v)],
            [projectsStickyTrigger, (v) => (projectsHeaderStuck = v)],
        ];

        for (const [el, setter] of stickyPairs) {
            if (!el) continue;
            // viewport-based observer (mobile: homeEl scrolls, sentinels move through viewport)
            const obsViewport = makeStickyObserver(setter);
            obsViewport.observe(el);
            observers.push(obsViewport);
            // mainEl-based observer (desktop: mainEl scrolls, viewport is static)
            if (mainEl) {
                const obsMain = makeStickyObserver(setter, mainEl);
                obsMain.observe(el);
                observers.push(obsMain);
            }
        }

        return () => {
            window.removeEventListener('scroll', scheduleUpdate);
            window.removeEventListener('resize', scheduleUpdate);
            mainEl?.removeEventListener('scroll', scheduleUpdate);
            homeEl?.removeEventListener('scroll', scheduleUpdate);
            observers.forEach((o) => o.disconnect());
        };
    });

    const copyright = () => { 
        const year = new Date().getFullYear();
        return `© ${year} Edward Coyle`;
    }
</script>

<div bind:this={homeEl} id="home" class="flex h-full w-full flex-col overflow-x-hidden overflow-y-auto lg:flex-row lg:overflow-hidden">
    <div class="h-full w-full lg:w-550">
        <div class="flex h-full max-w-550 lg:max-w-none flex-col p-8 mx-auto lg:mx-0">
            <header class="mb-8">
                <h1>
                    <a href="#home">
                        <img class="header-logo" src={logo} alt="Edward Coyle. Developer. Designer. Animator." />
                    </a>
                </h1>
            </header>
            <div class="mb-8 max-w-32r text-center lg:text-start">
                <p class="tagline">I am a seasoned front-end developer who loves designing fun and accessible experiences</p>
            </div>
            <ul class="mb-8 max-lg:hidden">
                <li class="flex flex-row items-center gap-2"><Triangle></Triangle><a class="link" href="#about">About Me</a></li>
                <li class="flex flex-row items-center gap-2"><Triangle></Triangle><a class="link" href="#work">Work Experience</a></li>
                <li class="flex flex-row items-center gap-2"><Triangle></Triangle><a class="link" href="#projects">Past Projects</a></li>
            </ul>
            <div class="mb-8 flex gap-2 lg:mb-0 lg:mt-auto justify-center lg:justify-normal">
                <a class="link" href="https://github.com/EdwardCoyle"><Github /></a>
                <a class="link" href="https://linkedin.com/in/edwardcoylejr"><LinkedIn /></a>
            </div>
        </div>
    </div>
    <main bind:this={mainEl} class="scroll-smooth h-full w-full lg:w-oppo550 lg:overflow-x-hidden lg:overflow-y-auto">
        <MobileScrollProgress progress={scrollProgress} />

        <div class="content-area-container relative md:mx-auto lg:mx-0 md:max-w-680 lg:max-w-none">
            <div class="absolute top-4 z-50 h-0 overflow-visible flex justify-end pr-4 lg:pr-8 max-w-680">
                <ScrollToTopButton visible={showScrollToTop} on:click={scrollToTop} />
            </div>

            <!-- About -->
            <section id="about" aria-label="About" class="scroll-mt-0">
                <div bind:this={aboutStickyTrigger} class="h-px -mb-px" aria-hidden="true"></div>
                <div class:is-stuck={aboutHeaderStuck} class="mobile-sticky-header">
                    <div class="mobile-sticky-header-blur" aria-hidden="true"></div>
                    <AccentHeader>About Me</AccentHeader>
                </div>
                <ContentCard>
                    <p class="mb-8 text-md">My interest in tech started early, writing little experiments in the <a class="link" href="https://en.wikibooks.org/wiki/ZZT-OOP/Introduction">ZZT OOP language</a> on my parents' i386 DOS/Windows machine. Since then, I've been drawn to the space where code and visuals overlap, spending plenty of time tinkering with programming languages, pixel art tools, and whatever else looked interesting enough to turn into something real.</p>
                    <p class="mb-8 text-md">Today, I’m a Software Engineer focused on building user experiences that feel polished, expressive, and practical. Most recently, I worked on the <a class="link" href="https://design.infor.com/">Infor Design System</a>, helping turn a large portion of the system into TypeScript-based Web Components used across the company’s application teams.</p>
                    <p class="mb-8 text-md">My background spans enterprise application development, motion graphics, video editing and post-production, and character animation. I earned a bachelor’s degree in Media Arts &amp; Animation from The Art Institute of Philadelphia, with a focus in 3D Animation. Along the way, I’ve also worked on side projects involving programming and art direction for <a class="link" href="https://thegamespage.com">iOS and Windows games</a>, which has given my career a mix of technical depth and creative range.</p>
                    <p class="mb-8 text-md">I’m always interested in opportunities to make thoughtful, creative work with good people. If that sounds like your kind of project, <a class="link" href="mailto:edcoyle86@gmail.com">get in touch</a>.</p>
                </ContentCard>
            </section>

            <!-- Work Experience -->
            <section id="work" aria-label="Work Experience" class="scroll-mt-0">
                <div bind:this={workStickyTrigger} class="h-px -mb-px" aria-hidden="true"></div>
                <div class:is-stuck={workHeaderStuck} class="mobile-sticky-header">
                    <div class="mobile-sticky-header-blur" aria-hidden="true"></div>
                    <AccentHeader>Work Experience</AccentHeader>
                </div>
                <!-- Schneider -->
                <ContentCard>
                    <ContentGrid>      
                        <ContentGridAside>
                            <img class="max-h-20 max-w-20 w-full h-full" src={logoSE} alt="Schneider Electric Logo" />
                            <span>Jan 2024 - present</span>
                        </ContentGridAside>  
                        <ContentGridMain>
                            <h3 id="work-schneider" class="font-bold">Schneider Electric</h3>
                            <h4>Angular Software Engineer @ SE Advisory Services</h4>
                            <p class="text-sm py-4">
                                Responsible for standing up and maintaining several UI layers for the Resource Advisor Plus (RA+) platform.
                                Led an initiative to overhaul application UIs from legacy components and AI-generated prototypes to the modern QSB Design System.
                                Built front ends for data aggregation tool aiding customers in ESG data collection.
                                Educated team on Angular app development using module/native federation.
                                Advocated for improved front end standards.
                            </p>
                            <PillList>
                                <Pill>TypeScript</Pill>
                                <Pill>Angular 17+</Pill>
                                <Pill>Azure</Pill>
                                <Pill>TailwindCSS</Pill>
                                <Pill>Figma</Pill>
                                <Pill>JIRA</Pill>
                            </PillList>
                        </ContentGridMain>
                    </ContentGrid>
                </ContentCard>
                <ContentCard>
                    <ContentGrid>   
                    <!-- Infor -->
                    <ContentGridAside>
                        <img class="max-h-20 max-w-20 w-full h-full" src={logoInfor} alt="Infor Logo" />
                        <span>Aug 2014 - Jan 2024</span>
                    </ContentGridAside>
                    <ContentGridMain>
                        <h3 id="work-infor" class="font-bold">Infor, Inc.</h3>
                        <h4>Senior Software Engineer @ Infor Design System (IDS)</h4>
                        <p class="text-sm py-4">
                            Played a key role in developing and delivering two significant revisions of Infor’s enterprise UI components, empowering application engineers to prototype more efficiently.
                            Led maintenance, roadmap planning, and specification definition for design system assets, contributing to a cohesive and user-friendly product experience.
                            Developed framework-agnostic Web Components and integrated them into major front-end frameworks.
                        </p>
                        <PillList>
                            <Pill>TypeScript</Pill>
                            <Pill>Web Components</Pill>
                            <Pill>SASS</Pill>
                            <Pill>Angular 17+</Pill>
                            <Pill>React</Pill>
                            <Pill>Sveltekit</Pill>
                            <Pill>Figma</Pill>
                        </PillList>
                    </ContentGridMain>
                </ContentGrid>
            </ContentCard>
            <ContentCard>
                <ContentGrid>  
                    <!-- Connexin -->
                    <ContentGridAside>
                        <img class="max-h-20 max-w-20 w-full h-full" src={logoOP} alt="OP Logo" />
                        <span>Jun 2010 - Aug 2014</span>
                    </ContentGridAside>
                    <ContentGridMain>
                        <h3 id="work-connexin" class="font-bold">Connexin Software, Inc.</h3>
                        <h4>Software Developer @ Office Practicum UX Team</h4>
                        <p class="text-sm py-4">
                            Collaborated on the design process for SaaS-based electronic health record software, including architecture, graphics, and prototypes.
                            Implemented customer-specific themes for the Office Practicum patient portal,  enhancing user experience and branding consistency.
                            Resolved issues related to the accurate display of patient health records, ensuring data integrity and usability.
                        </p>
                        <PillList>
                            <Pill>JavaScript</Pill>
                            <Pill>jQuery</Pill>
                            <Pill>Node.js</Pill>
                            <Pill>Backbone/Marionette</Pill>
                            <Pill>Java</Pill>
                            <Pill>Adobe CS</Pill>
                        </PillList>
                    </ContentGridMain>
                </ContentGrid>
            </ContentCard>
            </section>

            <!-- Past Projects -->
            <section id="projects" aria-label="Projects" class="scroll-mt-0">
                <div bind:this={projectsStickyTrigger} class="h-px -mb-px" aria-hidden="true"></div>
                <div class:is-stuck={projectsHeaderStuck} class="mobile-sticky-header">
                    <div class="mobile-sticky-header-blur" aria-hidden="true"></div>
                    <AccentHeader>Past Projects</AccentHeader>
                </div>
                <ContentCard>
                    <ContentGrid>
                        <!-- OP Patient Portal -->
                        <ContentGridAside>
                            <EmptyAsideImage>No Screenshot</EmptyAsideImage>
                        </ContentGridAside>
                        <ContentGridMain>
                            <h3 id="project-this-website" class="font-bold">This Website!</h3>
                            <p class="text-sm py-4">
                                I built this website with love... and also <a href="https://kit.svelte.dev/" class="link">Sveltekit</a> and <a href="https://tailwindcss.com/" class="link">Tailwind CSS</a>. 
                            </p>
                            <BulletList>
                                <BulletListItem>
                                    <a class="link" title="Github Repo" href="https://github.com/EdwardCoyle/EdCoyle.dev">Github Repo</a>
                                </BulletListItem>
                            </BulletList>
                            <PillList>
                                <Pill>Sveltekit</Pill>
                                <Pill>TailwindCSS</Pill>
                                <Pill>Node.js</Pill>
                            </PillList>
                        </ContentGridMain>
                    </ContentGrid>
                </ContentCard>

                <ContentCard>
                    <ContentGrid>
                        <!-- IDS Web Components -->
                        <ContentGridAside>
                            <img src={thumbnailIdsWeb} alt="Thumbnail for IDS Web Components">
                        </ContentGridAside>
                        <ContentGridMain>
                            <h3 id="project-ids-wc" class="font-bold">Web Component Library</h3>
                            <h4>Infor Design System</h4>
                            <p class="text-sm py-4">I contributed to the architecture and components that make up Infor's Web Component library, utilized by their modern web applications. I also help accept/build new features based on posted Github issues. Below are some live examples of the component library in action.</p>
                            <BulletList>
                                <BulletListItem>
                                    <a class="link" title="Live Examples (Main Page)" href="https://edcoyle.dev/projects/ids-wc/">Live Examples (Main Page)</a> 
                                </BulletListItem>
                                <BulletListItem>
                                    <a class="link" title="Live Example - IDS Popup Menu Component" href="https://edcoyle.dev/projects/ids-wc/ids-popup-menu/shortcut-keys.html">Live Example - IDS Popup Menu Component</a>
                                </BulletListItem>
                                <BulletListItem>
                                    <a class="link" title="Live Example - IDS Module Nav Component" href="https://edcoyle.dev/projects/ids-wc/ids-module-nav/example.html">Live Example - IDS Module Nav Component</a>
                                </BulletListItem>
                                <BulletListItem>
                                    <a class="link" title="Live Example - IDS Toolbar Component" href="https://edcoyle.dev/projects/ids-wc/ids-toolbar/example.html">Live Example - IDS Toolbar Component</a>
                                </BulletListItem>
                                <BulletListItem>
                                    <a class="link" title="Github Repo" href="https://github.com/EdwardCoyle/enterprise-wc">Github Repo (Fork)</a>
                                </BulletListItem>
                                <BulletListItem>
                                    <a class="link" title="Github Repo (Front-end Framework Examples)" href="https://github.com/EdwardCoyle/enterprise-wc-examples">Github Repo (Fork)</a>
                                </BulletListItem>
                            </BulletList>
                            
                            <PillList>
                                <Pill>TypeScript</Pill>
                                <Pill>Web Components</Pill>
                                <Pill>SASS</Pill>
                                <Pill>Node.js</Pill>
                            </PillList>
                        </ContentGridMain>
                    </ContentGrid>
                </ContentCard>

                <ContentCard>
                    <ContentGrid>
                        <!-- Old IDS -->
                        <ContentGridAside>
                            <img class="border-1" src={thumbnailIdsOld} alt="Thumbnail for IDS Web Components">
                        </ContentGridAside>
                        <ContentGridMain>
                            <h3 id="project-ids-ep" class="font-bold">jQuery Component Library</h3>
                            <h4>Infor Design System</h4>
                            <p class="text-sm py-4">I built from scratch and maintained many of the jQuery components used in legacy Infor web applications. I also had the opportunity to bring this particular library from closed to open-source on Github. The library includes a variety of components that were essential for legacy applications.</p>
                            <BulletList>
                                <BulletListItem>
                                    <a class="link" title="Github Repo (Enterprise Components)" href="https://github.com/EdwardCoyle/enterprise">Enterprise Components Github Repo (Fork)</a>
                                </BulletListItem>
                                <BulletListItem>
                                    <a class="link" title="Github Repo (Front-end Framework Examples)" href="https://github.com/EdwardCoyle/enterprise-ng">Angular Components Github Repo (Fork)</a>
                                </BulletListItem>
                            </BulletList>
                            
                            <PillList>
                                <Pill>JavaScript</Pill>
                                <Pill>jQuery</Pill>
                                <Pill>SASS</Pill>
                                <Pill>Node.js</Pill>
                            </PillList>
                        </ContentGridMain>
                    </ContentGrid>
                </ContentCard>

                <ContentCard>
                    <ContentGrid>
                        <!-- OP Patient Portal -->
                        <ContentGridAside>
                            <EmptyAsideImage>No Screenshot</EmptyAsideImage>
                        </ContentGridAside>
                        <ContentGridMain>
                            <h3 id="project-op-patient-portal" class="font-bold">Office Practicum Patient Portal</h3>
                            <h4>Connexin Software</h4>
                            <p class="text-sm py-4">
                                I worked on customer-facing portions of the OP Patient Portal between 2010 and 2014.  This included writing HTML/JS/CSS front-ends, and sometimes working on the Java/Liferay/Tomcat backend, for many custom-branded patient portals delivered to Pediatrician clients.
                            </p>
                            <BulletList>
                                <BulletListItem>
                                    <a class="link" href="https://www.officepracticum.com/ehr/operational-strength/secure-patient-portal">Product Information</a>
                                </BulletListItem>
                            </BulletList>
                        </ContentGridMain>
                    </ContentGrid>
                </ContentCard>

                <ContentCard>
                    <ContentGrid>
                        <!-- Find The Lucky Spot -->
                        <ContentGridAside>
                            <img class="border-1 max-h-60" src={thumbnailFTLS} alt="Thumbnail for Find The Lucky Spot">
                        </ContentGridAside>
                        <ContentGridMain>
                            <h3 id="project-lucky-spot" class="font-bold">Find The Lucky Spot (iOS)</h3>
                            <h4>The Games Page</h4>
                            <p class="text-sm py-4">
                                I worked on pixel art, hand-drawn images, and other art assets for this iOS game, originally released on iOS in 2012 and on the web in 2009 from <a href="https://thegamespage.com">The Games Page</a>.
                            </p>
                            <BulletList>
                                <BulletListItem>
                                    <a class="link" href="https://www.thegamespage.com/classic/games/?game=luckyspot">Product Information on The Games Page</a>
                                </BulletListItem>
                            </BulletList>
                        </ContentGridMain>
                    </ContentGrid>
                </ContentCard>

                <ContentCard>
                    <ContentGrid>
                        <!-- Diver Dan -->
                        <ContentGridAside>
                            <img class="border-1 max-h-60" src={thumbnailDDan} alt="Thumbnail for Diver Dan">
                        </ContentGridAside>
                        <ContentGridMain>
                            <h3 id="project-diver-dan" class="font-bold">Diver Dan (iOS)</h3>
                            <h4>The Games Page</h4>
                            <p class="text-sm py-4">
                                I worked on pixel art and hand-drawn images for this iOS game, originally released on iOS in 2017 and on the web in 2009 from <a href="https://thegamespage.com">The Games Page</a>.
                            </p>
                            <BulletList>
                                <BulletListItem>
                                    <a class="link" href="https://apps.apple.com/us/app/diver-dan-touch-dive/id1255006579">Apple App Store Link</a>
                                </BulletListItem>
                                <BulletListItem>
                                    <a class="link" href="https://www.thegamespage.com/classic/games/?game=diver_dan">Product Information on The Games Page</a>
                                </BulletListItem>
                            </BulletList>
                        </ContentGridMain>
                    </ContentGrid>
                </ContentCard>

                <ContentCard>
                    <ContentGrid>
                        <!-- Hurdler -->
                        <ContentGridAside>
                            <img class="border-1 max-h-60" src={thumbnailHurdler} alt="Thumbnail for Hurdler">
                        </ContentGridAside>
                        <ContentGridMain>
                            <h3 id="project-hurdler" class="font-bold">Hurdler (iOS)</h3>
                            <h4>The Games Page</h4>
                            <p class="text-sm py-4">
                                I worked on pixel art and hand-drawn images for this iOS game, originally released on iOS in 2011 and on Windows Desktop in 2003 from <a href="https://thegamespage.com">The Games Page</a>.
                            </p>
                            <BulletList>
                                <BulletListItem><a class="link" href="https://apps.apple.com/us/app/hurdler/id305496720">Apple App Store Link</a></BulletListItem>
                                <BulletListItem><a class="link" href="https://www.thegamespage.com/classic/games/?game=hurdler">Product Information on The Games Page</a></BulletListItem>
                            </BulletList>
                        </ContentGridMain>
                    </ContentGrid>
                </ContentCard>

                <ContentCard>
                    <ContentGrid>
                        <!-- TGP -->
                        <ContentGridAside>
                            <img class="border-1 max-h-60" src={thumbnailTGP} alt="Thumbnail for TGP">
                        </ContentGridAside>
                        <ContentGridMain>
                            <h3 id="project-tgp" class="font-bold">The Games Page</h3>
                            <p class="text-sm py-4">
                                I've been involved with The Games Page organization since its inception in 2000.  I was originally responsible for pixel art and some game graphics, but eventually became the webmaster.  I managed our PHPBB, built several iterations of the website in PHP, Wordpress, etc, and helped stand up infrastructure for handling score submissions.  The current iteration of the website is less complex and serves as a landing page for downloading our legacy games, but I still do the hosting and general management of the site.
                            </p>
                            <BulletList>
                                <BulletListItem><a class="link" href="https://www.thegamespage.com">Current Website</a></BulletListItem>
                                <BulletListItem><a class="link" href="https://github.com/TheGamesPage">Github Organization</a></BulletListItem>
                            </BulletList>
                        </ContentGridMain>
                    </ContentGrid>
                </ContentCard>
            </section>

            <section id="copyright" aria-label="Copyright" class="pb-4 lg:pb-0">
                <AccentHeader footer>{ copyright() }</AccentHeader>    
            </section>
        </div>
    </main>
</div>