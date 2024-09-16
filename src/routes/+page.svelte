<script>
	import logo from '$lib/img/epc_logo_full.svg';
    import iconGithub from '$lib/img/icons/github.svg';
    import iconLinkedIn from '$lib/img/icons/linkedin.svg';

</script>

<div id="content" class="flex flex-col lg:flex-row h-full w-full overflow-auto lg:overflow-hidden">
    <div class="w-full h-full lg:w-550">
        <div class="flex flex-col h-full p-4">
            <header class="mb-8">
                <img class="max-w-96" src={logo} alt="Edward Coyle Logo" />
            </header>
            <div class="mb-8">
                <h1>Welcome to SvelteKit</h1>
                <p>Visit <a class="link" href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
            </div>
            <div class="mt-auto flex mb-8 lg:mb-0">
                <img src={iconGithub} alt="Github" />
                <img src={iconLinkedIn} alt="LinkedIn" />
            </div>
        </div>
    </div>
    <main class="h-full w-full lg:w-oppo550 lg:overflow-y-auto overflow-x-hidden">
        <div class="p-4">
            <section class="m-4 h-96 w-550 bg-cardBg" id="about" aria-label="About">This is the About Me Section</section>

            <section class="m-4 h-96 w-550 bg-cardBg" id="work" aria-label="Work Experience">This is the Work Experience Section</section>

            <section class="m-4 h-96 w-550 bg-cardBg" id="projects" aria-label="Projects">This is the Projects Section</section>
        </div>
    </main>
</div>