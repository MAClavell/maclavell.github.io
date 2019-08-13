const tabs = [
    {
        Name: "Desktop",
        Projects: [
            {
                Name: "Snake on the Water",
                ShortDesc: "A nautical recreation of <i>Snake</i> in a custom-built C++ game engine.",
                LongDesc:
                `<p>
                <i>Snake on the Water</i> is an in-progress recreation of the classic snake game with a twist and unique graphical effects. 
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
                VideoLink: "",
                Thumbnail: ""
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
                Thumbnail: ""
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
                VideoLink: "",
                Thumbnail: ""
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
                VideoLink: "https://www.youtube.com/embed/guZK64FUALQ",
                Thumbnail: ""
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
                VideoLink: "https://www.youtube.com/embed/_ol4agUfcPw",
                Thumbnail: ""
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
                VideoLink: "",
                Thumbnail: ""
            }
        ]
    },
    {
        Name: "Web/Mobile",
        Projects: [ 
            {
                Name: "Pokémon GO Battle Helper",
                ShortDesc: "Web tab web tab",
                LongDesc: "",
                VideoLink: "",
                Thumbnail: ""
            },
            {
                Name: "Just Visuals and Beats",
                ShortDesc: "Web tab web tab",
                LongDesc: "",
                VideoLink: "",
                Thumbnail: ""
            },
            {
                Name: "RPG Shopper",
                ShortDesc: "Web tab web tab",
                LongDesc: "",
                VideoLink: "",
                Thumbnail: ""
            },
            {
                Name: "Just Shapes and Leaps",
                ShortDesc: "Web tab web tab",
                LongDesc: "",
                VideoLink: "",
                Thumbnail: ""
            }
        ]
    }
]