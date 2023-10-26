const projectsData = [
    {
        Name: "Diablo IV",
        Role: "Gameplay (PC, Xbox, PlayStation)",
        LongDesc: `
        <p>
        "The endless battle between the High Heavens and the Burning Hells rages on as chaos threatens to consume Sanctuary.
        With ceaseless demons to slaughter, countless Abilities to master, nightmarish Dungeons, and Legendary loot, this vast, open world brings the promise of adventure and devastation.
        Survive and conquer darkness – or succumb to the shadows." - Diablo IV website.
        </p>
        <p>
        I transferred over to Diablo IV from Diablo II: Resurrected three months before launch. My work includes:
        <ul>
            <li>Fixed bugs for launch and season 1 to become familiar with the project.</li>
            <li>Worked closely with multiple disciplines on a team for an unannounced feature.</li>
        </ul>
        </p>
        `,
        VideoLink: "https://www.youtube-nocookie.com/embed/XV4zVqb9vWc?si=1G7Jo0_wBzAoPVvr",
        Thumbnail: "media/thumbnails/diablo4.jpg"
    },
    {
        Name: "Diablo II: Resurrected",
        Role: "Gameplay, Live Ops (PC, Xbox, PlayStation, Switch)",
        LongDesc: `
        <p>
        "A Timeless Classic, Resurrected.
        Diablo II: Resurrected is a remastered version of the quintessential action RPG Diablo II.
        Pursue the mysterious Dark Wanderer and fight the denizens of hell as you uncover the fate of the Prime Evils Diablo, Mephisto, and Baal." - Diablo II: Resurrected website.
        </p>
        <p>
        I joined D2R before launch as part of the "Online Gameplay strike team" tasked with improving the gameplay experience when playing online.
        After launch I became part of the small live ops team, developing brand new features, implementing balance changes, and fixing bugs that have haunted players for decades.
        Some highlights include:
        <ul>
            <li>Lead engineer of “Terror Zones”, Diablo II’s first new gameplay feature since 2005.</li>
            <li>Refactored the “Uber Diablo” event to be more intuitive and reach more players.</li>
            <li>Refactored how monster pathfinding is communicated between client and server, greatly reducing desyncs and rubber-banding.</li>
            <li>Became a subject matter expert of a legacy gameplay codebase and trained new engineers to use it.</li>
            <li>Worked closely with production and QA to analyze player feedback and perform testing through Public Test Realms.</li>
        </ul>
        </p>
        `,
        VideoLink: "https://www.youtube-nocookie.com/embed/DttPBtsZ5fc?si=l9y1WfnKBAinKGr-",
        Thumbnail: "media/thumbnails/diablo2.jpg"
    },
    {
        Name: "Tony Hawk's Pro Skater 1 + 2",
        Role: "Engine, Online (PC, Xbox, Playstation, Switch)",
        LongDesc: `
        <p>
        "Play the fully-remastered Tony Hawk’s Pro Skater & Tony Hawk’s Pro Skater 2 games in one epic collection, rebuilt from the ground up in incredible HD." - Tony Hawk's Pro Skater 1 + 2 website.
        </p>
        <p>
        For my first published game, I worked on the engine team focusing on performance improvments.
        After launch I assisted in a the upgrade to ninth generation consoles, working mainly on the Xbox version.
        <ul>
            <li>Integrated the Oodle compression library, reducing load times by 40%.</li>
            <li>Found and fixed performance bugs in both C++ and blueprints.</li>
            <li>Fixed engine and platform bugs for the upgrade to ninth generation Xbox consoles.</li>
        </ul>
        </p>
        `,
        VideoLink: "https://www.youtube-nocookie.com/embed/REZ4x7a48U8?si=7RKA-1_rmy-mMd4U",
        Thumbnail: "media/thumbnails/tonyhawk.jpg"
    },
    {
        Name: "Rescue+ Game Engine",
        Role: "Solo Project (PC)",
        LongDesc: `
        <p>
        After a school project where I made a custom renderer concluded, I wanted to expand my knowledge on how game engines worked,
            so I worked on the <i>Rescue+ Game Engine</i> in my free time.
        It is written in C++ utilizing DirectX 11 for rendering and the PhysX API for physics.
        </p>
        <p>
        Some of its features include:
        <ul>
            <li>GameObject/Component system for ease of implementing and reusing behaviours.</li>
            <li>GameObject parenting that updates child transforms.</li>
            <li>PhysX API including rigidBodies, colliders, raycasts and collision callbacks.</li>
            <li>Bucket-sorted rendering to minimize the memory sent to the GPU.</li>
            <li><a href="https://blog.molecular-matters.com/2015/08/24/job-system-2-0-lock-free-work-stealing-part-1-basics/" target="_blank">A Lock-free work stealing Job System.</a></li>
            <li>An async-enabled Resource Manager for loading multiple types of assets.</li>
            <li>A Input Manager for detecting keyboard and mouse input.</li>
            <li>Support for diffuse lighting or Physically Based Rendering.</li>
            <li>Transparency/blending.</li>
            <li>Shadows for directional lights.</li>
            <li>Config file (currently only supports framerate caps).</li>
        </ul>
        <a href="https://github.com/MAClavell/Cpp-DirectX-Engine" target="_blank">Check out my progress project on GitHub.</a>
        </p>
        `,
        VideoLink: "https://www.youtube.com/embed/96H2_ydlltg",
        Thumbnail: "media/thumbnails/engine.jpg"
    },
    {
        Name: "Technical Support",
        Role: "Gameplay (Web)",
        LongDesc: `
        <p>
        The robots have risen up! Artificial life has finally grown self aware and they have begun manufacturing an endless army of robot warriors. 
        Only heavy weaponry can combat these troops so the government has outfitted you with a heavy armored vehicle capable of producing turret stations so long as you have the parts. 
        Luckily you can loot parts from the robots you destroy. 
        You have been deployed to the middle of the robotic army. 
        The future of the human race is dependent on you wiping out as many of those cybernetic slaughterers as possible.
        </p>
        <p>
        This mobile tower defense game was created in Unity3D. As a gameplay programmer, my tasks included:
        <ul>
            <li>Created WebGL-optimized systems that utilize object pooling for spawning mass amounts of robots and currency.</li>
            <li>Designed and implemented AI for the robots. How they decide what target to chase, when to attack, etc.</li>
            <li>Programmed the player's "build mode" which allows for turret spawning, upgrading, and radius displaying.</li>
            <li>Balanced the game by tweaking speeds, damages, prices, and spawning rates.</li>
        </ul>
        <a href="https://joms.itch.io/technical-support" target="_blank">Play the game on Itch.io.</a> or
        <a href="https://github.com/MAClavell/Technical-Support" target="_blank">view the finished project on GitHub</a>.
        </p>
        `,
        VideoLink: "https://www.youtube.com/embed/-Inr86zhVXw",
        Thumbnail: "media/thumbnails/techsupport.jpg"
    },
    {
        Name: "Night Shift",
        Role: "Gameplay, Team Lead (Web)",
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
        Thumbnail: "media/thumbnails/night.jpg"
    },
    {
        Name: "VRn't",
        Role: "Gameplay, Team Lead, Composer, SFX Artist (Web)",
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
            <li>Lead gameplay programmer, programming player controls, enemy AI, moving and static obstacle system, and the overall gameplay logic.</li>
            <li>Composed two music tracks and created all sound effects in the game.</li>
        </ul>
        <a href="https://joms.itch.io/vrnt" target="_blank">Play in browser on Itch.io</a>
        or
        <a href="https://ldjam.com/events/ludum-dare/41/vrnt" target="_blank">view the Ludum Dare page.</a>
        </p>`,
        VideoLink: "https://www.youtube-nocookie.com/embed/guZK64FUALQ",
        Thumbnail: "media/thumbnails/vrnt.jpg"
    },
    {
        Name: "Sugarplum Summit",
        Role: "Gameplay, Team Lead (Web)",
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
        Thumbnail: "media/thumbnails/sugarplum.jpg"
    },
    {
        Name: "DIE-PARTISAN",
        Role: "Gameplay, Team Lead (PC)",
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
        Thumbnail: "media/thumbnails/diepart.jpg"
    }
]
