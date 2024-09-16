<script>
	import logo from '$lib/img/epc_logo_full.svg';
    import iconGithub from '$lib/img/icons/github.svg';
    import iconLinkedIn from '$lib/img/icons/linkedin.svg';
</script>

<div id="content" class="flex flex-col lg:flex-row h-full w-full overflow-auto lg:overflow-hidden">
    <div class="w-full h-full lg:w-550">
        <div class="flex flex-col h-full p-4">
            <header class="mb-8">
                <img class="max-w-128" src={logo} alt="Edward Coyle Logo" />
            </header>
            <div class="mb-8 max-w-96">
                <h2>I am a seasoned front-end developer who loves to design fun and accessible experiences</h2>

                <ul class="my-8 max-lg:hidden">
                    <li><a class="link" href="#about">About Me</a></li>
                    <li><a class="link" href="#work">Work Experience</a></li>
                    <li><a class="link" href="#projects">Past Projects</a></li>
                </ul>
            </div>
            <div class="lg:mt-auto flex mb-8 lg:mb-0">
                <a href="https://github.com/EdwardCoyle"><img src={iconGithub} alt="Github" /></a>
                <a href="https://linkedin.com/in/edwardcoylejr"><img src={iconLinkedIn} alt="LinkedIn" /></a>
            </div>
        </div>
    </div>
    <main class="h-full w-full lg:w-oppo550 lg:overflow-y-auto lg:overflow-x-hidden">
        <div class="lg:p-4">
            <section class="m-4 h-96 w-550 bg-cardBg" id="about" aria-label="About">This is the About Me Section</section>
            <section class="m-4 h-96 w-550 bg-cardBg" id="work" aria-label="Work Experience">This is the Work Experience Section</section>
            <section class="m-4 h-96 w-550 bg-cardBg" id="projects" aria-label="Projects">This is the Projects Section</section>
        </div>
    </main>
</div>