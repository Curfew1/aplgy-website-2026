

const CONFIG = {
    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['😀', '👐', '🌟', '🎨', '😂'],  //  emojis
        bears: ['🧸', '🐻']                       // emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Godtar du min ursäkt?",                                    // First interaction
            yesBtn: "Nej",                                             // Text for "Yes" button
            noBtn: "Nej, fast argt!",                                               // Text for "No" button
            secretAnswer: "Ja, hur kan jag ens vara arg längre!"           // Secret hover message
        },
        second: {
        text: "Hur mycket godtar du ursäkten?",          // Second question
        startText: "Så pass!",                   // Text before percentage
        nextBtn: "Nästa!"                         // Next button text
    },
    third: {
        text: "Menar du verkligen det?",      // Final question
        yesBtn: "Självfallet, utan tvekan!",                            // Yes button text
        noBtn: "Na, dro akam"                                // No button text
      }
    },
    
    loveMessages: {
    extreme: "Bawkarooo 🚀🚀😱",  // Shows above 5000%
    high: "Mycket bra! 🌟",              // Shows above 1000%
    normal: "la hich bashtra 👍"                           // Shows above 100%
},
    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Hazar Mashallah! 🎉",
        message: "Det misstaget kommer ej upprepas igen!",
        emojis: "🎁🐩🎉🌻😃🌟😂"  // These will bounce around
    },

    
    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/de0uauubj/video/upload/v1772734910/Marziyeh_-_Kani_Kani_wecf1w.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
