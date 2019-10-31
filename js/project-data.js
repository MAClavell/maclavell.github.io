const tabs = [
    {
        Name: "Desktop",
        Projects: [
            {
                Name: "C++ Game Engine",
                ShortDesc: "An on-going personal project to create a game engine in C++.",
                LongDesc: `
                <p>
                Once <i>Snake on the Water</i> concluded, I wanted to expand my knowledge on how game engines worked,
                 so I've been working on this untitled engine in my free time.
                It is created in C++ utilizing DirectX for rendering and PhysX for physics.
                </p>
                <p>
                Some of it's features include:
                <ul>
                    <li>An optimized rendering system that reduces the amount of data sent to the GPU by organizing GameObjects by their material and mesh.</li>
                    <li>A component system akin to Unity3D, where developers can add multiple components to a base GameObject.</li>
                    <li>An integrated rigidbody physics world utilizing NVIDIA PhysX 4.1.</li>
                    <li><a href="https://blog.molecular-matters.com/2015/08/24/job-system-2-0-lock-free-work-stealing-part-1-basics/" target="_blank">A lock-free, work stealing job system</a></li>
                    <li>GameObject parenting</li>
                    <li>Support for PBR and direct lighting.</li>
                    <li>Shadow mapping for directional lights.</li>
                    <li>Transparency and blending</li>
                </ul>
                <a href="https://github.com/MAClavell/Cpp-DirectX-Engine" target="_blank">Check out my progress project on GitHub.</a>
                </p>
                `,
                VideoLink: "",
                Thumbnail: "media/thumbnails/engine.png"
            },
            {
                Name: "Snake on the Water",
                ShortDesc: "A nautical recreation of <i>Snake</i> in a custom-built C++ game engine.",
                LongDesc:
                `<p>
                <i>Snake on the Water</i> is a recreation of the classic snake game with a twist and unique graphical effects. 
                Play as your local friendly rescue boat and save the innocent swimmers from the dangerous waters.
                </p>
                <p>
                <i>Snake on the Water</i> was developed with a custom C++ game engine titled the <i>Rescue Engine</i>, utilizing DirectX. 
                My tasks included:
                <ul>
                    <li>
                    Lead developer behind the <i>Rescue Engine</i>, creating an rendering system that prioritizes optimization, an entity system 
                    for streamlined gameplay creation, support for direct or PBR lighting, transparency blending support, and many more engine features.
                    </li>
                    <li>
                    Lead gameplay programmer, creating the boat movement and swimmer following behavior, gameplay logic, buoyancy logic, a zoomable tracking camera,
                    and many other small polishes to make the gameplay feel good.
                    </li>
                </ul>
                <a href="https://github.com/MAClavell/Snake-on-the-Water" target="_blank">View the finished project on GitHub.</a>
                </p>`,
                VideoLink: "https://www.youtube-nocookie.com/embed/XmcqrdMxTLA",
                Thumbnail: "media/thumbnails/snake.png"
            },
            {
                Name: "Knight Move 3D",
                ShortDesc: "A 3D recreation of the retro Famicom/NES game <i>Knight Move</i> in C++, with an added feature.",
                LongDesc: 
                `<p>
                Knight Move 3D is a recreation of the Famicom/NES game Knight Move. Move around a chess board as the Knight piece collecting hearts, 
                but watch out for the nefarious Rooks who seek to knock you out of the game.
                Just be sure to not fall through!

                </p>
                <p>
                The game is created using Simplex, a C++ based engine made by a professor at the Rochester Institute of Technology.
                My list of tasks included:
                <ul>
                    <li>Created the underlying system that controls the game board. This allowed access to each node for easy placement
                        for all entities.
                    </li>
                    <li>Created gameplay logic and systems for pickup placement/collection, entity collision, score calculation, and UI.</li>
                    <li>Programmed various polish effects: heart traversal, tile falling/regenerating, tile color changes, etc.</li>
                </ul>
                <a href="https://github.com/MAClavell/Knight-Move-3D" target="_blank">View the finished project on GitHub.</a>
                </p>`,
                VideoLink: "https://www.youtube-nocookie.com/embed/7Ao0NrOcGY0",
                Thumbnail: "media/thumbnails/knight.png"
            },
            {
                Name: "Night Shift",
                ShortDesc: "Help a poor old janitor with his nightly duties, while remaining hidden.",
                LongDesc: `
                <p>
                Night Shift is a game revolving around a cute little shadow monster that wishes to help an elderly janitor complete his nightly duties.
                The creature has good intentions, but they’d better be careful. The old man is frail and scares easily...
                </p>
                <p>
                This short puzzle game was created in Unity3D. My most important tasks included:
                <ul>
                    <li>Created a AI system for the Old Man. He prioritzes his own goals, but they can be manipulated by player actions.
                    <a href="https://github.com/MAClavell/Night-Shift-Old-Man-AI" target="_blank">View a more in depth description on my GitHub.</a></li>
                    <li>Created a script system for the level and used it to script out the puzzle.</li>
                    <li>Implemented instruction text on interactible objects and thought bubbles on the Old Man to help guide the player.</li>
                    <li>Programmed player controls and light sizzling (when player is in a light).</li>
                </ul>
                <a href="https://joms.itch.io/night-shift" target="_blank">Play the game on Itch.io.</a>
                </p>
                `,
                VideoLink: "https://www.youtube-nocookie.com/embed/e4N5cy8rdtc",
                Thumbnail: "media/thumbnails/night.png"
            },
            {
                Name: "Stellar Standoff",
                ShortDesc: "Mine, shoot, shield, and reflect in this hectic eight player standoff.",
                LongDesc: `
                <p>
                You and up to eight other spacefarers have landed on a recently discovered asteroid that is filled with valuable resources. 
                Of course, you want them only for yourself, and it seems everyone else has the same idea.
                Fire missiles and shield your base in order to be the last space-man standing on this bountiful asteroid.
                </p>
                <p>
                This game was created as an experimental mix between analog and digital games in Unity3D. 
                The players take turns passing a mobile device around to select their actions, then gather around as it all plays out. 
                My list of tasks was less on the programming side for once (we all need breaks!) and included:
                <ul>
                    <li>Created sound effects.</li>
                    <li>Composed a background music track that varies based on the gameplay.</li>
                    <li>Programmed custom audio system for streamlined audio functionality and music manipulation based on the game's state.</li>
                </ul>
                <a href="https://joms.itch.io/stellar-standoff" target="_blank">Download from Itch.io.</a>
                </p>`,
                VideoLink: "https://www.youtube-nocookie.com/embed/DgspRnFU7oI",
                Thumbnail: "media/thumbnails/stellar.png"
            },
            {
                Name: "VRn't",
                ShortDesc: "WARNING! INCOMPATIBLE GENRES: VR and Your Living Room.",
                LongDesc: `
                <p>
                Welcome to the virtual world of VRn’t, where the lines between the real and the fantastic are blurred, if only slightly. 
                You control a humble gamer with a heart of gold and an expensive VR rig. Help him defeat ninjas in the digital dojo, 
                and PLEASE mind the furniture.
                </p>
                <p>
                Created in Unity3D and ranked #17 in Humor out of 2000+ entries,
                this 2D brawler was created for the 72 hour gamejam Ludum Dare #41 and its theme of "combine 2 incompatible genres".
                The game has you split your attention between two realities.
                Defend yourself from endless waves of bloodthirsty ninjas while also trying
                to keep your living room intact (or not!).
                </p>
                <p>
                My tasks included: 
                <ul>
                    <li>Lead gameplay programmer, programming player controls, enemy AI, moving and unmoving obstacle system, and the overall gameplay logic.</li>
                    <li>Composed two music tracks and created all sound effects in the game.</li>
                </ul>
                <a href="https://joms.itch.io/vrnt" target="_blank">Play in browser on Itch.io</a>
                or
                <a href="https://ldjam.com/events/ludum-dare/41/vrnt" target="_blank">view the Ludum Dare page.</a>
                </p>`,
                VideoLink: "https://www.youtube-nocookie.com/embed/guZK64FUALQ",
                Thumbnail: "media/thumbnails/vrnt.png"
            },
            {
                Name: "Sugarplum Summit",
                ShortDesc: "Fly to the top of the Christmas tree battling fiendish ornaments and freeing innocent(?) angels along the way.",
                LongDesc: `
                <p> 
                Fly to the top of the Christmas Tree in <i>Sugarplum Summit</i>! This Christmas themed SHMUP was created for Ludum Dare 40's theme of "The more you have, the worse it is".
                Free Christmas angels from their ornamental cages. They will help you make haste of your mission, but be wary of their allegiances.
                </p>
                <p>
                The team for <i>Sugarplum Summit</i> consisted of three people. My role was team lead and sole programmer. The game was submitted for the "Jam" so we had 72 hours to create it. I also spent an additional 15 hours updating the game to a PostJam version.
                My responsibilities included:
                </p>
                <ul>
                    <li>Sole gameplay programmer, implementing player movement, angel following, enemy AI and wave system, boss scripting, particle effects,
                    and all other gameplay logic.</li>
                    <li>Designed three main enemy behaviours, a boss, and generally balanced the game based on player feedback.</li>
                    <li>Created milestones for my team mates and I to stay on track and effectively budget our time.</li>
                    <li>Recorded sound effects for actions in the game.</li>
                </ul>
                <a href="https://joms.itch.io/sugarplum-summit" target="_blank">Play in browser on Itch.io</a>, 
                <a href="https://ldjam.com/events/ludum-dare/40/sugarplum-summit" target="_blank">view the Ludum Dare page</a>, or
				<a href="https://github.com/MAClavell/Sugarplum-Summit/tree/master/LD40" target="_blank">view the finished project on GitHub</a>.
                </p>`,
                VideoLink: "https://www.youtube-nocookie.com/embed/_ol4agUfcPw",
                Thumbnail: "media/thumbnails/sugarplum.png"
            },
            {
                Name: "DIE-PARTISAN",
                ShortDesc: "Battle your way through Heaven in this devilishly fun top-down shooter",
                LongDesc: `
                <p><i>DIE-PARTISAN</i> is a 2D twin stick shooter created in the c# Monogame engine.
                The game focuses on Lucifer as he fights his way through infinite, randomly stitched together levels, battling mysterious rogue angels bent
                on the destruction of Heaven and Hell.
                </p>
                <p>
                The development of <i>DIE-PARTISAN</i> was over the course of four months in early 2017.
                During this time I acted as project leader and gameplay programmer while developing with the rest of the team.
                My major tasks included:
                </p>
                <ul>
                    <li>Programmed player movement and customiziable control system.</li>
                    <li>Created a weapon system for easy implementation of new guns.</li>
                    <li>Developed a method for tile textures to be procedurally bitmapped onto the map, allowing us to paint maps with our development tool 
                    and have the game place the textures.</li>
                    <li>Created the rotating and targeting AI for turret enemies.</li>
                    <li>Used multithreading to create optimizations in various aspects of the game.</li>
                    <li>Various other tasks including UI development, gameplay/state logic, and class architecture.</li>
                </ul>
                
                <p>
                <a href="https://joms.itch.io/die-partisan" target="_blank">Game available on Itch.io</a>.
                <br>
                <a href="https://github.com/MAClavell/DIE-PARTISAN/tree/master/GDAPSIIGame" target="_blank">The full project and documentation is available on GitHub</a>.
                </p>`,
                VideoLink: "https://www.youtube-nocookie.com/embed/eoYctvoglOQ?rel=0",
                Thumbnail: "media/thumbnails/diepart.png"
            }
        ]
    },
    {
        Name: "Web/Mobile",
        Projects: [ 
            {
                Name: "Pokémon GO Battle Helper",
                ShortDesc: "Easily find the best Pokémon types to use in a battle.",
                LongDesc: `
                <p>
                Remembering what types are the most effective against Pokémon is already hard in the main games, and then Pokémon Go adds weather boosting to the equation as well.
                Ay ay ay! <i>Pokémon GO Battle Helper</i> is a tool mostly created for myself in lieu of google and overly complicated battle simulators.
                In just two clicks and a Pokémon name, you can see which types would be the most effective against your opponent. No hassle, no extra parameters.
                </p>
                <p>
                The webapp uses JavaScript, CSS, and Vue.js to route between specific views, creating a streamlined process that is insanely simple and intended for the more
                casual Pokémon GO player who can't remember each and every Pokémon's types.
                The app features:
                <ul>
                    <li>Three ways to get the weather at your location (GPS, Zipcode, and manual selection).</li>
                    <li>Autofill for every Pokémon in Pokémon GO, so searching can be easy as a few keystrokes.</li>
                    <li>Remembers your current weather for up to an hour, in case you close out of the page.</li>
                    <li>Support for desktop and mobile browsers.</li>
                </ul>
                <a href="https://people.rit.edu/mac9406/330/projects/PoGo_Type_Helper/" target="_blank">Try it out here!</a>	
                </p>
                `,
                VideoLink: "",
                Thumbnail: "media/thumbnails/pokemon.png"
            },
            {
                Name: "Just Visuals and Beats",
                ShortDesc: "An audio/visual experience based on the popular game.",
                LongDesc: `
                <p>
                <i>Just Visuals and Beats</i> is an audio visualizer in style of <a href="http://www.justshapesandbeats.com/" target="_blank"><i>Just Shapes and Beats</i></a>.
				Customize the scene and bop along to your favorite songs from the game. See what unique effects occur for each of the three songs!
				</p>
				<p>
				The visualizer was created entirely in Javascript Canvas, WebAudio and CSS.
				</p>
				<p>
				<a href="https://people.rit.edu/mac9406/330/projects/Audio%20Visualizer/" target="_blank">Experience in Chrome or Firefox.</a>						
                </p>`,
                VideoLink: "",
                Thumbnail: "media/thumbnails/justVisuals.png"
            },
            {
                Name: "RPG Shopper",
                ShortDesc: "A mobile tabletop GM tool for custom shops.",
                LongDesc: `
                <p><i>RPG Shopper</i> aims to help GameMasters of any tabletop RPG with the management of shops and major items and upgrades. 
                With this tool, GMs are be able to create and customize their own in game shops with various types of modules. 
				</p>
                <p>The app is currently in development using Unity3D and undergoing playtesting to get player feedback. 
                The engine's framework and canvas system streamlines the dev process, and the modular script based system fits well with the design
				of customizable shops.
				</p>`,
                VideoLink: "https://www.youtube-nocookie.com/embed/F2I8aqIWjbg",
                Thumbnail: "media/thumbnails/rpg.png"
            },
            {
                Name: "Just Shapes and Leaps",
                ShortDesc: "An endless 2D runner through a geometric world.",
                LongDesc: `
                <p>
				<i>Just Shapes and Leaps</i> is an endless 2D runner created entirely using the DOM.
				Press any key to jump as the terrain gets harder and harder to navigate. How far can you go?
				</p>
				<p>
				This game was created entirely using base Javascript and the Document Object Model for one of my classes.
				I programmed and created the art for the game myself using the visual style from 
                <a href="http://www.justshapesandbeats.com/" target="_blank"><i>Just Shapes and Beats</i></a>.
                </p>
                <p>
				<a href="https://people.rit.edu/mac9406/230/project2/index.html" target="_blank">Play in browser here.</a>						
				</p>`,
                VideoLink: "",
                Thumbnail: "media/thumbnails/justLeaps.png"
            }
        ]
    }
]