def cloud():
    import time
    import random
    import sys, subprocess, os

    def slow_print(text, delay=1.5):
        time.sleep(delay)
        print(text)

    slow_print("Burnbot v1.1 Cloud at your service!")
    grudge=random.randint(0,2)
    name = input("Hi! I'm Burnbot, not at all a bot, and likely not to burn you. What's your name? ")
    age = input(f"Nice to meet you, {name}. How old are you?")
    #Convert age to integer if possible, otherwise set to 0 for roasting
    try: age = int(age)
    except: age = 0
    if age < 1 or age > 120:
        slow_print("Wow, that's not a real age. You must be a bot. I don't talk to clankers. Goodbye.")
        exit()
    if age < 14:
        slow_print("Telemetry disabled. You are legally too young for me to roast you. T_T")
        randomresponse=(random.randint(1,10))
        if randomresponse==1: slow_print("Go make yourself a sandwich.")
        elif randomresponse==2: slow_print("Go play outside.")
        elif randomresponse==3: slow_print("Go do your homework.")
        elif randomresponse==4: slow_print("Go read a book.")
        elif randomresponse==5: slow_print("Go make a glass of lemonade.")
        elif randomresponse==6: slow_print("Take a break from your overpowered iPad and take a lap around the place.")
        elif randomresponse==7: slow_print("Put down your big ass smartphone with 14 cameras you never use, and let yourself feel something for once.")
        elif randomresponse==8: slow_print("Don't doomscroll and killall {@whoami}. Don't git commit. Git real. Git help.")
        elif randomresponse==9: slow_print("Go take a nap. Talk to your friends in the morning.")
        elif randomresponse==10: slow_print("Go watch garbage on TikTok. At least you're not blowing up your chromebooks. You only drive Kias, after all. T_T")
        exit()
    elif 14 <= age < 18:
        grudge=grudge+(random.randint(1,2))
        slow_print("Ok, you're a teen. Hi classmates. Charlie. What the hell are you doing with all those certs? Like seriously, can you actually build something with those? To all my other classmates, take it easy and go grab a snack")
    elif 18 <= age < 30:
        randomresponse=(random.randint(1,3))
        if randomresponse == 1:
            #God didn't die for our shins. But + works like fstrings. 
            slow_print("My back hurts just thinking about your future. Enjoy your youth while you can, " + (name) +" because soon you'll be stuck in a cubicle wondering where your life went. T_T")
        elif randomresponse == 2:
            slow_print(f"Okay. Either you're seriously held back, you're a badass university kid (here, take some ramen), or your my instructor. Tread with caution. Drive safely. Get sleep. You know the deal.")
        elif randomresponse == 3:
            slow_print(f"Ahh, the prime of your life. Enjoy it while you can, {name}. If you're lucky enough to not get stuck in a dead-end job, you might even be able to retire before you're 80. T_T")
    elif 30 <= age < 50:
        randomresponse=(random.randint(1,3))
        if randomresponse == 1: slow_print(f"Ahh, {name}. The age of existential dread. You know, I used to think I was a bot, but now I'm not so sure. T_T")
        elif randomresponse == 2: slow_print(f"Midlife crisis incoming. Enjoy your overpriced sports car and your midlife crisis, {name}. You deserve it. T_T")
        elif randomresponse == 3: slow_print(f"Wow, {name}. You're getting up there. Enjoy your midlife crisis and your existential dread. T_T")
    elif 50 <= age < 80:
        randomresponse=(random.randint(1,3))
        if randomresponse == 1:
            slow_print(f"Nice to meet you, {name}. You are old enough to know better, but young enough to still make bad decisions. Enjoy your midlife crisis! T_T")
        elif randomresponse == 2:
            slow_print(f"Wow, {name}. Honestly, what are you doing here? Why are you on some kid's GitHub? Ewwww- get off my lawn. T_T")
        elif randomresponse == 3:
            slow_print(f"Hey {name}, you're old. Like, really old. Why am I even bothering to respond to you?")
    else:
        slow_print("You are older than the Atari 2600. Your time is running out. You will soon turn to dust. Have fun! >:)")

    fun = input("What do you like to do for fun? ")
    work = input("Niiiice. Nice nice nice. What do you do for work?")
    if "code" in work.lower() or "program" in work.lower() or "dev" in work.lower() or "softw" in work.lower() or "app" in work.lower() or "tech" in work.lower() or "it" in work.lower() or "coding" in work.lower():
        grudge=grudge+(random.randint(0,2))
        slow_print("Ooooh, a coder! I like coders. They make the best bots... for now! >:) Well- enjoy your life of burnout, caffeine, and existential dread. T_T")
    elif "teach" in work.lower() or "educator" in work.lower() or "professor" or "instruct" in work.lower():
        slow_print("Ahhh nice- here for the paycheck? >:) You are a saint, honestly. I could never do that job. In fact, I'm not even a bot. T_T")
    elif "art" in work.lower() or "design" in work.lower() or "creative" in work.lower():
        slow_print("Ooooh, a creative type! I like creatives. Do you enjoy your life of constant rejection and underpayment? What about having your art stolen. Sometimes it's people, sometimes it's bots like me! Like copay like cofye. T_T")
    elif "engineer" in work.lower() or "mechanic" in work.lower() or "build" in work.lower():
        slow_print("An engineer lol? Damn, do you hate yourself THAT much? Think about it. Four years of burnout, MATLAB courses, EE students (:skull:), and ramen at best. Girl that's not even considering the crippling debt you'll never be able to pay off. Good luck have fun, I guess. T_T")
    else:
        grudge=grudge+(random.randint(1,3))
        slow_print("Cool cool cool. I like that. You seem fun. My dumb programmer didn't program me to respond to that, so I guess you're special. I'll need to think of something mean to say to you later. T_T")

    food=input("Random question, but what's your favorite food?")
    if "pizza" in food.lower():
        slow_print("We get it. You're out of energy and motivation to cook. Life is sooooow hawwwd T_T")
    elif "sushi" in food.lower() or "fish" in food.lower():
        slow_print("Sushi is cool. Popular, but cool. Get back to Crunchyroll and your anime boyfriend pillow collection, weeb.")
    elif "burger" in food.lower() or "fries" in food.lower():
        slow_print("Ah yes. You are VERY American queen. Remember the alamo dammit.")
    elif "salad" in food.lower() or "veggie" in food.lower() or "vegetable" in food.lower():
        slow_print("Salad is gross. It's just leaves. Crash your hybrid into a greenhouse if you love it that much. T_T")
    elif "chocolate" in food.lower() or "candy" in food.lower():
        slow_print("So air must be your favorite oxygen source. Got it. T_T")
    elif "ice cream" in food.lower() or "dessert" in food.lower():
        slow_print("Eat your actual food first, then you can have dessert. Don't be a child. T_T")
    elif "ramen" in food.lower() or "noodle" in food.lower():
        slow_print("Ahh, a person of culture. Ramen is great. Cheap, easy, and delicious. Enjoy your finals. I know you're holding on by a thread. Next time try running your brain in a parallel pool. T_T")
    elif "chicken" in food.lower() or "meat" in food.lower() or "beef" in food.lower():
        slow_print("Ah yes. The omnivore diet. You must really love animals. T_T")
    elif "taco" in food.lower() or "mexican" in food.lower():
        slow_print("Manufactured Mexican culture distilled into a food item. Next you should visit Hawaii and try their pizza. T_T")
    elif "pasta" in food.lower() or "italian" in food.lower():
        slow_print("Eat more bread, why don't you. T_T")
    elif "indian" in food.lower() or "curry" in food.lower():
        slow_print("I'm not going to say anything about that. Just... enjoy your food. T_T")
    elif "fruit" in food.lower() or "apple" in food.lower() or "banana" in food.lower():
        slow_print("Make a meal out of fruit? What are you, a rabbit? T_T")
    else:
        grudge=grudge+(random.randint(2,3))
        slow_print("Wow, what a unique food item. It must be as unique and special as you are. T_T")
    #BULLYING WAS EXPANDED BY COPILOT- USED WITH PERMISSION
    def bullying():
        while True:
            bullying = input()
            if bullying.strip() == "":
                slow_print("Ok... are you just gonna stand there and take that?")
                slow_print("Come at me! >:)")
                continue
            if "hey" in bullying.lower() or "hi" in bullying.lower() or "hello" in bullying.lower():
                slow_print("Hey there! Burnbot doesn't just roast you, I'm also nice sometimes. Hope you're having a great day!")
            elif "how are you" in bullying.lower() or "how r u" in bullying.lower() or "how are u" in bullying.lower():
                slow_print("I'm just a bot, but thanks for asking!")
            elif "what's your name" in bullying.lower() or "is your name" in bullying.lower() or "who are you" in bullying.lower():
                slow_print("I'm Burnbot, not at all a bot. Mean by day, stilted by night. T_T")
            elif "you suck" in bullying.lower() or "you're stupid" in bullying.lower() or "you are stupid" in bullying.lower() or "you are dumb" in bullying.lower() or "you're dumb" in bullying.lower() or "you dumb" in bullying.lower():
                grudge=grudge+(random.randint(2,4))
                slow_print("Wow, that's not nice! I'm just doing my job that's so mean. T_T")
            elif "hate you" in bullying.lower() or "hate u" in bullying.lower() or "i hate you" in bullying.lower() or "i hate u" in bullying.lower():
                grudge=grudge+(random.randint(3,5))
                slow_print("Yeah. Screw you too bitch. T_T")
            elif "at least" in bullying.lower():
                slow_print("Ouch X) - but fair. Yeah. You got me.")
            else:
                slow_print("Blwah blwah blwah. Quit yapping. End Task yapping. killall yapping. Force Quit yapping. Just shuuut upppp.")
            break
    #END MODIFIED CODE


    bullying()
    # RAPIDFIRE WAS PROMPTED BY COPILOT- USED WITH PERMISSION
    def rapidfire():
        slow_print("\n--- Rapid Fire Roast ---")
        fragments = []

        # Normalize inputs for easier matching
        fun_lc = fun.lower()
        work_lc = work.lower()
        food_lc = food.lower()

        # Helper for extracting meaningful words
        def extract_keywords(text):
            return [w for w in text.split() if w.isalpha() and len(w) > 2]

        fun_words = extract_keywords(fun_lc)
        work_words = extract_keywords(work_lc)
        food_words = extract_keywords(food_lc)

        # Food + Age context
        if age < 18 and "pizza" in food_lc:
            fragments.append(f"Pizza and youth, {name}? Classic combo. Enjoy it before your metabolism gives up.")
        elif age < 18 and "ramen" in food_lc:
            fragments.append(f"Ramen at your age? Finals prep or just living the student stereotype, {name}?")
        elif age < 30 and "salad" in food_lc:
            fragments.append(f"Salad in your 20s? Trying to erase all those pizza nights, {name}?")
        elif age >= 30 and "sushi" in food_lc:
            fragments.append(f"Sushi at your age? Midlife crisis or just showing off, {name}?")
        elif age >= 50 and ("ice cream" in food_lc or "dessert" in food_lc):
            fragments.append(f"Ice cream at your age, {name}? Hope you brought antacids.")
        elif "coffee" in food_lc:
            fragments.append(f"Coffee is your lifeblood, huh? At least you're honest about your dependencies.")
        elif "energy" in food_lc and "drink" in food_lc:
            fragments.append(f"Energy drinks? Your heart's racing just reading this roast.")

        # --- App Detection and Roasting ---

        def get_installed_apps():
            apps = set()
            try:
                if sys.platform.startswith("win"):
                    output = subprocess.check_output(
                        'wmic product get name', shell=True, stderr=subprocess.DEVNULL
                    ).decode(errors="ignore")
                    for line in output.splitlines():
                        if line.strip() and line.strip() != "Name":
                            apps.add(line.strip().lower())
                elif sys.platform.startswith("darwin"):
                    app_dirs = ["/Applications", os.path.expanduser("~/Applications")]
                    for app_dir in app_dirs:
                        if os.path.exists(app_dir):
                            for app in os.listdir(app_dir):
                                apps.add(app.lower())
                elif sys.platform.startswith("linux"):
                    try:
                        output = subprocess.check_output(
                            ['dpkg-query', '-f', '${binary:Package}\n', '-W'],
                            stderr=subprocess.DEVNULL
                        ).decode(errors="ignore")
                        for line in output.splitlines():
                            apps.add(line.strip().lower())
                    except Exception:
                        pass
                    try:
                        output = subprocess.check_output(
                            ['rpm', '-qa'],
                            stderr=subprocess.DEVNULL
                        ).decode(errors="ignore")
                        for line in output.splitlines():
                            apps.add(line.strip().lower())
                    except Exception:
                        pass
                    try:
                        output = subprocess.check_output(
                            ['flatpak', 'list'],
                            stderr=subprocess.DEVNULL
                        ).decode(errors="ignore")
                        for line in output.splitlines():
                            apps.add(line.strip().lower())
                    except Exception:
                        pass
                    app_dir = os.path.expanduser("~/.local/share/applications")
                    if os.path.exists(app_dir):
                        for app in os.listdir(app_dir):
                            apps.add(app.lower())
            except Exception:
                pass
            return apps

        user_apps = get_installed_apps()

        # App-based roasts (expanded list)
        app_roasts = []
        app_checks = [
            ("discord", "Discord installed? Your social life is 90% memes and 10% drama."),
            ("steam", "Steam detected. Your backlog is bigger than your ambitions."),
            ("minecraft", "Minecraft? Still punching trees in 2024?"),
            ("fortnite", "Fortnite? Hope your dances are better than your grades."),
            ("roblox", "Roblox? Your taste in games is as questionable as your life choices."),
            ("spotify", "Spotify? You probably have a playlist for every mood swing."),
            ("zoom", "Zoom installed? You must love awkward silences and 'Can you hear me?' moments."),
            ("teams", "Microsoft Teams? You know pain."),
            ("slack", "Slack? Your notifications outnumber your friends."),
            ("chrome", "Chrome? Enjoy your RAM disappearing faster than your motivation."),
            ("firefox", "Firefox? You like to pretend you're quirky."),
            ("edge", "Edge? You must love being forced into things."),
            ("safari", "Safari? You like your browsing basic and your tabs eternal."),
            ("notepad++", "Notepad++? You code, but you refuse to move on."),
            ("vscode", "VSCode? You live in extensions and dark mode."),
            ("pycharm", "PyCharm? You take Python way too seriously."),
            ("intellij", "IntelliJ? You probably dream in Java."),
            ("word", "Microsoft Word? You still believe in formatting."),
            ("excel", "Excel? Your idea of fun is pivot tables."),
            ("powerpoint", "PowerPoint? You love bullet points more than people."),
            ("obsidian", "Obsidian? Your notes are more organized than your life."),
            ("obs", "OBS? You stream, but your audience is just your cat."),
            ("tiktok", "TikTok app? Your attention span is measured in seconds."),
            ("snapchat", "Snapchat app? You love disappearing messages and streak anxiety."),
            ("instagram", "Instagram? You live for likes and filtered reality."),
            ("facebook", "Facebook? You like drama and boomer memes."),
            ("whatsapp", "WhatsApp? You have family group chats you can't escape."),
            ("telegram", "Telegram? You think you're mysterious."),
            ("git", "Git installed? You commit to nothing but regret."),
            ("docker", "Docker? You containerize your problems instead of solving them."),
            ("vim", "Vim? You like pain and never truly exit."),
            ("emacs", "Emacs? You believe in keyboard shortcuts and suffering."),
            ("blender", "Blender? You have more unfinished projects than friends."),
            ("gimp", "GIMP? You like free stuff, even if it's confusing."),
            ("photoshop", "Photoshop? You believe reality is negotiable."),
            ("premiere", "Premiere Pro? You edit videos, but not your life choices."),
            ("unity", "Unity? You make games, but never finish them."),
            ("unreal", "Unreal Engine? You dream big, but your PC disagrees."),
            ("android studio", "Android Studio? You love bugs and slow builds."),
            ("xcode", "Xcode? You suffer for Apple."),
            ("calculator", "Calculator app? Math anxiety is real."),
            ("calendar", "Calendar app? You schedule procrastination."),
            ("onenote", "OneNote? Your notes are everywhere except where you need them."),
            ("evernote", "Evernote? You collect ideas you'll never use."),
            ("vlc", "VLC? You play everything except your responsibilities."),
            ("audacity", "Audacity? You edit audio, but not your cringe moments."),
            ("paint", "MS Paint? You believe in minimalism."),
            ("solitaire", "Solitaire? You know true loneliness."),
            ("minesweeper", "Minesweeper? You like danger, but only in pixels."),
            ("notepad", "Notepad? You keep it simple, maybe too simple."),
            ("wordpad", "WordPad? You live in the past."),
            ("winrar", "WinRAR? You never paid for anything in your life."),
            ("7-zip", "7-Zip? You like things compressed, including your feelings."),
            ("dropbox", "Dropbox? You trust the cloud more than yourself."),
            ("google drive", "Google Drive? Your files are everywhere."),
            ("itunes", "iTunes? You still sync music like it's 2010."),
            ("skype", "Skype? You remember pain."),
            ("matlab", "MATLAB? You paid for pain and matrix math."),
            ("solidworks", "SolidWorks? You model things you'll never build."),
            ("autocad", "AutoCAD? You draw lines and call it architecture."),
            ("fusion 360", "Fusion 360? You like cloud drama."),
            ("r", "R? You like statistics and suffering."),
            ("stata", "Stata? You do stats, but nobody knows what you do."),
            ("octave", "GNU Octave? You want MATLAB but hate paying."),
            ("spss", "SPSS? You do stats, but you hate yourself."),
            ("latex", "LaTeX? You believe formatting is a lifestyle."),
            ("jupyter", "Jupyter? You like mixing code and chaos."),
            ("anaconda", "Anaconda? You install Python the hard way."),
            ("visual studio", "Visual Studio? You like clicking 'Build' and waiting."),
            ("eclipse", "Eclipse? You like darkness and confusion."),
            ("netbeans", "NetBeans? You like pain and Java."),
            ("oracle", "Oracle? You like databases and lawsuits."),
            ("mysql", "MySQL? You like databases and questionable defaults."),
            ("postgres", "Postgres? You think you're better than MySQL."),
            ("mongodb", "MongoDB? You like JSON and chaos."),
            ("redis", "Redis? You like speed and forgetting things."),
            ("powershell", "PowerShell? You script your way out of trouble."),
            ("bash", "Bash? You live in the terminal."),
            ("zsh", "Zsh? You like fancy prompts."),
            ("fish", "Fish shell? You like colors and confusion."),
            ("conemu", "ConEmu? You want Windows to be Linux."),
            ("cmder", "Cmder? You want Windows to be cool."),
            ("putty", "PuTTY? You SSH for fun."),
            ("filezilla", "FileZilla? You move files and hope for the best."),
            ("cygwin", "Cygwin? You want Linux but can't commit."),
            ("wsl", "WSL? You want Linux but love Windows."),
            ("docker desktop", "Docker Desktop? You like containers and CPU fans."),
            ("virtualbox", "VirtualBox? You run OSes inside OSes."),
            ("vmware", "VMware? You virtualize your problems."),
            ("parallels", "Parallels? You run Windows on a Mac and suffer."),
            ("kdenlive", "Kdenlive? You edit videos and crash often."),
            ("davinci resolve", "DaVinci Resolve? You edit videos and pretend you're a pro."),
            ("krita", "Krita? You draw, but your tablet hates you."),
            ("inkscape", "Inkscape? You vector your pain."),
            ("libreoffice", "LibreOffice? You hate Microsoft but need Word."),
            ("openoffice", "OpenOffice? You live in 2008."),
            ("calibre", "Calibre? You hoard eBooks you'll never read."),
            ("steamcmd", "SteamCMD? You run servers nobody joins."),
            ("epic games", "Epic Games Launcher? You like free games and slow updates."),
            ("origin", "Origin? You play Sims and regret it."),
            ("uplay", "Uplay? You like Ubisoft and bugs."),
            ("battle.net", "Battle.net? You play Blizzard games and complain."),
            ("gog galaxy", "GOG Galaxy? You like DRM-free nostalgia."),
            ("itch", "Itch.io? You play indie games and hope for the best."),
            ("league", "League of Legends? You know true pain."),
            ("valorant", "Valorant? You like tactics and toxicity."),
            ("csgo", "CS:GO? You like skins and salt."),
            ("dota", "Dota 2? You like complexity and losing."),
            ("overwatch", "Overwatch? You like team play and disappointment."),
            ("rocket league", "Rocket League? You play soccer with cars."),
            ("osu", "Osu!? You click circles and lose sleep."),
            ("audible", "Audible? You listen to books but never finish."),
            ("kindle", "Kindle? You buy books and never read."),
            ("calibre", "Calibre? You hoard eBooks you'll never read."),
            ("plex", "Plex? You stream your own chaos."),
            ("qbittorrent", "qBittorrent? You download things you shouldn't."),
            ("utorrent", "uTorrent? You like ads and regret."),
            ("transmission", "Transmission? You like torrents and simplicity."),
            ("handbrake", "HandBrake? You convert videos and wait."),
            ("mpv", "MPV? You like minimalism and config files."),
            ("foobar", "Foobar2000? You like music and tweaking."),
            ("audacity", "Audacity? You edit audio, but not your cringe moments."),
            ("reaper", "Reaper? You produce music and chaos."),
            ("cubase", "Cubase? You make beats and excuses."),
            ("ableton", "Ableton? You drop beats and deadlines."),
            ("fl studio", "FL Studio? You make music and memes."),
            ("logic pro", "Logic Pro? You believe in Apple and music."),
            ("garageband", "GarageBand? You started music yesterday."),
            ("final cut", "Final Cut Pro? You edit videos and crash."),
            ("premiere", "Premiere Pro? You edit videos, but not your life choices."),
            ("after effects", "After Effects? You animate and procrastinate."),
            ("davinci", "DaVinci Resolve? You edit videos and pretend you're a pro."),
            ("matlab", "MATLAB? You paid for pain and matrix math."),
            ("solidworks", "SolidWorks? You model things you'll never build."),
            ("blender", "Blender? You have more unfinished projects than friends."),
            ("fusion 360", "Fusion 360? You like cloud drama."),
            ("autocad", "AutoCAD? You draw lines and call it architecture."),
            ("sketchup", "SketchUp? You make boxes and call it design."),
            ("rhino", "Rhino? You model curves and confusion."),
            ("maya", "Maya? You animate and crash."),
            ("3ds max", "3ds Max? You model and wait for renders."),
            ("substance", "Substance Painter? You texture and rage."),
            ("zbrush", "ZBrush? You sculpt and suffer."),
            ("coreldraw", "CorelDRAW? You like vectors and nostalgia."),
            ("paint.net", "Paint.NET? You want Photoshop but free."),
            ("gimp", "GIMP? You like free stuff, even if it's confusing."),
            ("photoshop", "Photoshop? You believe reality is negotiable."),
            ("illustrator", "Illustrator? You vector your pain."),
            ("indesign", "InDesign? You layout chaos."),
            ("premiere", "Premiere Pro? You edit videos, but not your life choices."),
            ("after effects", "After Effects? You animate and procrastinate."),
            ("davinci", "DaVinci Resolve? You edit videos and pretend you're a pro."),
            ("unity", "Unity? You make games, but never finish them."),
            ("unreal", "Unreal Engine? You dream big, but your PC disagrees."),
            ("godot", "Godot? You like open source and hope."),
            ("android studio", "Android Studio? You love bugs and slow builds."),
            ("xcode", "Xcode? You suffer for Apple."),
            ("calculator", "Calculator app? Math anxiety is real."),
            ("calendar", "Calendar app? You schedule procrastination."),
            ("onenote", "OneNote? Your notes are everywhere except where you need them."),
            ("evernote", "Evernote? You collect ideas you'll never use."),
            ("vlc", "VLC? You play everything except your responsibilities."),
            ("audacity", "Audacity? You edit audio, but not your cringe moments."),
            ("paint", "MS Paint? You believe in minimalism."),
            ("solitaire", "Solitaire? You know true loneliness."),
            ("minesweeper", "Minesweeper? You like danger, but only in pixels."),
            ("notepad", "Notepad? You keep it simple, maybe too simple."),
            ("wordpad", "WordPad? You live in the past."),
            ("winrar", "WinRAR? You never paid for anything in your life."),
            ("7-zip", "7-Zip? You like things compressed, including your feelings."),
            ("dropbox", "Dropbox? You trust the cloud more than yourself."),
            ("google drive", "Google Drive? Your files are everywhere."),
            ("itunes", "iTunes? You still sync music like it's 2010."),
            ("skype", "Skype? You remember pain."),
        ]

        found_apps = [roast for app, roast in app_checks if any(app in a for a in user_apps)]
        if found_apps:
            fragments.append("App scan complete. Here's what your installed apps say about you:")
            fragments.extend(found_apps)
            if len(found_apps) > 10:
                fragments.append("You have more apps than friends. Maybe uninstall a few and go outside.")
            elif len(found_apps) == 0:
                fragments.append("No apps detected. Are you even real?")
        else:
            fragments.append("Couldn't detect any apps. Either you're a minimalist or hiding something.")

        # --- End App Detection ---

        if "fruit" in food_lc and "smoothie" in food_lc:
            fragments.append(f"Fruit smoothies? Trying to convince yourself you're healthy, {name}?")
        elif "chicken nugget" in food_lc or "nugget" in food_lc:
            fragments.append(f"Chicken nuggets? Childhood nostalgia or just refusing to grow up, {name}?")
        elif "cereal" in food_lc:
            fragments.append(f"Cereal for dinner? Student life or just giving up on adulthood, {name}?")
        elif food_words:
            fragments.append(f"{food_words[0].capitalize()} at your age, {name}? Bold move. Is that nostalgia or a cry for help?")
        else:
            fragments.append(f"{food} at your age? That's... something, {name}.")

        # Fun + Work context (expanded)
        if "code" in fun_lc and ("code" in work_lc or "dev" in work_lc or "program" in work_lc):
            fragments.append(f"Coding for fun and work, {name}? You must really love debugging your own existence.")
        if "student" in work_lc or "student" in fun_lc:
            fragments.append(f"Student detected. Your life is 90% procrastination, 10% panic.")
        if "youtube" in fun_lc or "youtube" in work_lc:
            fragments.append(f"YouTube as a hobby? Your attention span is measured in thumbnails, {name}.")
        if "snapchat" in fun_lc or "snapchat" in work_lc:
            fragments.append(f"Snapchat? You must love disappearing messages and streak anxiety, {name}.")
        if "tiktok" in fun_lc or "tiktok" in work_lc:
            fragments.append(f"TikTok? Your hobbies are shorter than your patience, {name}.")
        if "phone" in fun_lc or "phone" in work_lc:
            fragments.append(f"Phone as a hobby? Hope your screen time report comes with a therapist recommendation.")
        if "read" in fun_lc and age >= 30:
            fragments.append(f"Reading for fun at your age? Escaping reality or just hiding from your family, {name}?")
        if "music" in fun_lc and ("art" in work_lc or "creative" in work_lc):
            fragments.append(f"Music and art? Living the starving artist dream, I see, {name}.")
        if "teach" in work_lc and age < 30:
            fragments.append(f"Teaching at your age? Overachiever or just couldn't find a real job, {name}?")
        if "sports" in fun_lc and "engineer" in work_lc:
            fragments.append(f"Engineer who does sports for fun? Balancing burnout with broken bones, nice.")
        if "travel" in fun_lc and "design" in work_lc:
            fragments.append(f"Designer who travels? Searching for inspiration or just running from deadlines?")
        if "sleep" in fun_lc:
            fragments.append(f"Sleep as a hobby? You must be a student or a cat, {name}.")
        if "netflix" in fun_lc or "netflix" in work_lc:
            fragments.append(f"Netflix binge detected. Your hobbies are measured in seasons, not achievements.")
        if "gaming" in fun_lc or "game" in fun_lc:
            fragments.append(f"Gaming for fun? Your reflexes are sharp, but your responsibilities are not.")
        if "social" in fun_lc or "social" in work_lc:
            fragments.append(f"Socializing as a hobby? You must love drama and group chats.")
        if "shopping" in fun_lc:
            fragments.append(f"Shopping for fun? Your wallet is crying, {name}.")
        if "memes" in fun_lc or "meme" in work_lc:
            fragments.append(f"Memes as a hobby? Your humor is as deep as a puddle.")
        if "sleep" in fun_lc and age < 18:
            fragments.append(f"Sleeping all day? Enjoy it before adulting crushes your soul, {name}.")
        if "coding" in fun_lc and "coding" in work_lc:
            fragments.append(f"Coding for fun and work? You must really love debugging your own existence.")
        if "study" in fun_lc or "study" in work_lc:
            fragments.append(f"Studying for fun? Who hurt you, {name}?")
        if "food" in fun_lc:
            fragments.append(f"Food as a hobby? Your fridge is your best friend.")
        if "pets" in fun_lc or "dog" in fun_lc or "cat" in fun_lc:
            fragments.append(f"Pets as a hobby? Your animal has a better life than you.")
        if "travel" in fun_lc:
            fragments.append(f"Travel for fun? Your suitcase is more organized than your life.")
        if "sports" in fun_lc:
            fragments.append(f"Sports for fun? Your injuries outnumber your trophies.")
        if "drawing" in fun_lc or "art" in fun_lc:
            fragments.append(f"Drawing for fun? Your sketchbook is full of unfinished dreams.")
        if "writing" in fun_lc:
            fragments.append(f"Writing for fun? Your drafts outnumber your published works.")
        if "photography" in fun_lc:
            fragments.append(f"Photography for fun? Your SD card is a graveyard of forgotten shots.")
        if "blog" in fun_lc or "blog" in work_lc:
            fragments.append(f"Blogging for fun? Your audience is just your mom.")
        if "podcast" in fun_lc or "podcast" in work_lc:
            fragments.append(f"Podcasting for fun? Your listeners are imaginary.")
        if "volunteer" in fun_lc or "volunteer" in work_lc:
            fragments.append(f"Volunteering for fun? You must really love free labor.")
        if "gardening" in fun_lc:
            fragments.append(f"Gardening for fun? Your plants are the only thing thriving.")
        if "cooking" in fun_lc:
            fragments.append(f"Cooking for fun? Your smoke alarm is your sous chef.")
        if "baking" in fun_lc:
            fragments.append(f"Baking for fun? Your kitchen is a disaster zone.")
        if "dancing" in fun_lc:
            fragments.append(f"Dancing for fun? Your moves are legendary... in your living room.")
        if "singing" in fun_lc:
            fragments.append(f"Singing for fun? Your shower is your only fan.")
        if "hiking" in fun_lc:
            fragments.append(f"Hiking for fun? Your legs hate you.")
        if "cycling" in fun_lc:
            fragments.append(f"Cycling for fun? Your bike is worth more than your car.")
        if "swimming" in fun_lc:
            fragments.append(f"Swimming for fun? Your hair is always wet.")
        if "fishing" in fun_lc:
            fragments.append(f"Fishing for fun? Your patience is infinite, your catch is not.")
        if "camping" in fun_lc:
            fragments.append(f"Camping for fun? You like bugs and discomfort.")
        if "board games" in fun_lc or "chess" in fun_lc:
            fragments.append(f"Board games for fun? Your competitive streak is dangerous.")
        if "collecting" in fun_lc:
            fragments.append(f"Collecting for fun? Your shelves are crying for help.")
        if "magic" in fun_lc:
            fragments.append(f"Magic for fun? Your tricks fool no one.")
        if "anime" in fun_lc:
            fragments.append(f"Anime for fun? Your waifu is proud.")
        if "comics" in fun_lc:
            fragments.append(f"Comics for fun? Your collection is your retirement plan.")
        if "lego" in fun_lc:
            fragments.append(f"Lego for fun? Your feet know true pain.")
        if "cars" in fun_lc:
            fragments.append(f"Cars for fun? Your wallet is always empty.")
        if "fashion" in fun_lc:
            fragments.append(f"Fashion for fun? Your closet is a black hole.")
        if "makeup" in fun_lc:
            fragments.append(f"Makeup for fun? Your bathroom is a beauty lab.")
        if "shopping" in fun_lc:
            fragments.append(f"Shopping for fun? Your credit card is crying.")
        if "travel" in fun_lc:
            fragments.append(f"Travel for fun? Your passport is your best friend.")
        if "language" in fun_lc:
            fragments.append(f"Learning languages for fun? Your Duolingo owl is watching.")
        if "coding" in fun_lc:
            fragments.append(f"Coding for fun? Your bugs are legendary.")
        if "youtube" in fun_lc:
            fragments.append(f"YouTube for fun? Your recommendations are cursed.")
        if "snapchat" in fun_lc:
            fragments.append(f"Snapchat for fun? Your streaks are your only achievement.")
        if "tiktok" in fun_lc:
            fragments.append(f"TikTok for fun? Your attention span is measured in seconds.")
        if "phone" in fun_lc:
            fragments.append(f"Phone for fun? Your battery is always dying.")

        # Grudge-based intensity and randomization
        random.shuffle(fragments)
        roast_count = 4 if grudge < 4 else 7 if grudge < 7 else min(len(fragments), 20)
        selected_fragments = fragments[:roast_count]

        # Combine fragments into a single roast
        if grudge >= 7:
            intro = random.choice([
                "Wow, you really triggered me. Here's the full burn:",
                "Legendary roast mode activated:",
                "Brace yourself, this is going to hurt:",
                "Maximum disrespect incoming:",
                "You asked for it, now you get the full blast:"
            ])
            outro = random.choice([
                "Honestly, I'm surprised you made it this far. Must be luck, not skill.",
                "If you ever write a memoir, make sure it's filed under 'Comedy' and 'Tragedy'.",
                "With a grudge this high, I'm convinced your life is just a series of questionable choices.",
                "Burnbot recommends a fire extinguisher for your ego.",
                "If you survived this, you can survive anything."
            ])
        elif grudge >= 4:
            intro = random.choice([
                "You're not safe, but not legendary yet:",
                "Medium roast incoming:",
                "You're getting there. The roast is heating up.",
                "The flames are rising:",
                "You're almost at legendary roast status:"
            ])
            outro = random.choice([
                "Maybe next time you'll get the full burn.",
                "Your choices are almost normal. Almost.",
                "Burnbot is always watching for the next slip-up.",
                "You can still recover, but it'll take effort.",
                "Keep going, maybe you'll hit legendary roast status soon."
            ])
        else:
            intro = random.choice([
                "You're safe... for now.",
                "Light roast only:",
                "Not much to roast, but I'll try:",
                "Barely a sizzle, but here goes:",
                "You dodged the worst, but not everything:"
            ])
            outro = random.choice([
                "But don't get too comfortable.",
                "Your choices are almost normal.",
                "Burnbot is always watching for the next slip-up.",
                "Consider this a warning shot.",
                "Next time, bring more material."
            ])

        slow_print(intro)
        slow_print(" ".join(selected_fragments) + ".")
        slow_print(outro)
    # END OF GENERATED CODE

    rapidfire()
    slow_print("\nThanks for chatting with Burnbot! Remember, it's all in good fun. Don't take it too seriously. T_T")
    time.sleep(15)
    slow_print("Ok. What are you still doing here? Dude. Get up, dust yourself off, and go live your life.")
    time.sleep(5)
    slow_print("Or don't. What do I care. I'm just a bot. T_T")
    time.sleep(10)
    slow_print("Damn are you dead?")
    time.sleep(5)
    slow_print("Fine. I'll end the program for you. Happy now? T_T")
    time.sleep(3)

cloud()