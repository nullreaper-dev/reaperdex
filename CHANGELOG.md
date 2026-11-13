# Reaperdex – Changelog

## 1.9.3 – Continue Watching fix
- **Fixed:** *Fix “1s left”* made Crunchyroll treat every fixed episode as watched just now, so old shows jumped to the front of Continue Watching and Reaperdex showed today as their date. Real watch dates are now kept, and Continue Watching is put back in order automatically afterwards.
- **New:** Export ▾ → **Fix Continue Watching order** – if old shows jumped to the front of Crunchyroll’s Continue Watching, one click puts it back in the order you really watched.

## 1.9.2 – Menu fix
- **Fixed:** long menus like Export ▾ now scroll instead of running off the bottom of the screen (so *Fix “1s left”* is reachable on smaller screens).

## 1.9.1 – Fix “1s left”
- **New:** Export ▾ → **Fix “1s left” on Crunchyroll** – episodes marked by older versions (before 1.9.0) were saved 2 seconds short, so Crunchyroll and the phone app showed “1s left”. One click finds them, shows you how many, and saves them as fully played. Nothing else is touched.

## 1.9.0 – Crunchylists and more
**New**
- **Crunchylists** – add any show (or every show you've selected – e.g. *Select all shown* on a filter) to a Crunchylist or make a new list in one go; manage and delete your lists; copy a list into Plan to watch
- **Sort by First watched** – your library in the order you started each show
- **Copy titles** of selected shows
- **Paused reminder** on cards – how long it's been and when a show will count as Dropped
- **On this day** in Insights – what you watched on today's date in earlier years
- **Drop a show yourself** (✕ Drop / ↺ Undrop in the show panel)
- **Mark up to here (⤒)** on any episode, and **Undo** right after marking

**Better**
- Search ignores punctuation and word order – "re zero" finds Re:ZERO, "spy family" finds SPY x FAMILY
- Search waits until you pause typing, so big libraries stay smooth
- A–Z sorts naturally (Season 2 before Season 10) and ignores "The"
- Shows with the same progress, hours or time left keep a steady order
- Specials are labelled "SP1" instead of "ESP1"

**Fixed**
- Marked episodes no longer show "1s left" on Crunchyroll – they're saved as fully played
- Marking no longer re-sends episodes Crunchyroll already has as watched (in any language), so they stay out of "Continue Watching"
- Episodes without a known length (long specials, some movies) are marked with their real length
- Marking a whole show is faster (3 episodes at a time)
- Marking an old show no longer makes it jump to the top as "watched just now"

## 1.8.2 – Fixes
- **Fixed:** "Mark complete" no longer undoes itself after a refresh – long specials inside a season (like Attack on Titan's Final Chapters) now count for their show instead of becoming separate movie cards
- **Fixed:** episodes Reaperdex only counted as watched (because you watched a later one) are now sent to Crunchyroll when you mark a show or season, so your phone shows them too – seasons like that get a **Sync to Crunchyroll** button
- **Fixed:** "First anime" no longer changes when you mark an old show as watched – Reaperdex now remembers the earliest date it has ever seen

## 1.8.1 – Fixes
- **Fixed:** fully watched shows (every season 100%) now show **Completed** – a few episodes Crunchyroll keeps under their own IDs (often dub copies) no longer hold them on Watching
- **Fixed:** season numbers no longer skip – movies (like JJK 0 or Mugen Train) don't take a number, so it's S1, S2, S3 instead of S1, S2, S4
- **Fixed:** the Library check now lists shows with episodes it couldn't match to a season ("N eps not matched")
- **Fixed:** a dub that's still coming out is no longer counted as an extra season (it could wrongly say "New season out")
- **Fixed:** a season that's only announced (no episodes yet) no longer makes a show say "New season out"

## 1.8.0 – Phone layout
- **Phone layout** – Reaperdex now feels like an app on your phone: compact top bar, bottom navigation (Library, Insights, Share, Profile), two-column cards, full-screen show panels and swipeable filters
- Windows open as **bottom sheets** on phones, with easy-to-tap buttons
- **Fixed:** after choosing your Crunchyroll avatar, the "getting a copy" notice now clears by itself – no reload needed
- **Fixed:** a small empty bar could peek out at the bottom of the screen
- **Official sources** – Settings → Shortcuts & about (and the README) now show where the official Reaperdex is published, so you can tell if a copy has been tampered with
- **Security:** spreadsheet exports (CSV, Excel, Google Sheets copy) can no longer contain hidden formulas from show titles or imports
- **Security:** Excel export is now built in – Reaperdex no longer loads any outside code
- **Security:** backup files, friend codes and imports are strictly checked – a tampered file can no longer break the app
- **Security:** the shareable web page only uses safe https links and pictures

## 1.7.4
- Safety snapshots list has more room and no repeated version numbers
- The "Ten Thousand" title is now called **5K Club** – it's for 5,000 episodes

## 1.7.3
- **Safer backup restore** – pictures and settings from backup files are checked, so a tampered backup can't inject anything
- Small internal tidy-up – no changes to how anything works

## 1.7.2
- **Share window fits your screen** – the card shrinks to fit and the buttons stay visible
- **Crunchyroll avatar on share cards, automatically** – fetched through Crunchyroll's image server; if you'd already picked it, it fixes itself next time you open Reaperdex

## 1.7.1
- **Crunchyroll avatar on share cards** – Reaperdex fetches a copy it's allowed to use and retries on its own; if Crunchyroll still blocks it, your profile explains the one-step fix

## 1.7.0 – Profiles
- **Profiles** – your own picture (or your Crunchyroll avatar in one click) and a banner, shown on your library and share cards
- **Titles** – 35 to earn from Common to Mythic, including secret ones; pick which one shows next to your name
- **Frames** around your picture, unlocked by milestones – Ember, Silver, Sakura, Flame, Gold, Aurora, Reaper and the Mythic Void
- **Top 5** – pin your favourite anime to your profile and ID card
- **Anime ID card** – shareable card with your picture, title, stats and Top 5 (Share → Anime ID card)
- **Custom theme** – your own colours, colours taken from your picture, and shareable theme codes (`RDX-…`)
- Optional: show your picture in Crunchyroll's menus too (only on your computer)
- **Faster updates** – episodes you just watched show up within seconds of leaving the player
- **Safety snapshots** – a daily copy of your marks, ratings, notes, profile and settings, restorable in Settings
- **Complete backups** – now include Plan to watch, languages, profile, Top 5 and your theme
- **Retry queue** – Crunchyroll updates that fail during an outage are sent again automatically
- **Big libraries load faster** – cards are drawn as you scroll, and the 600-card limit is gone

## 1.6.3
- **Fixed: rewatches in another language count again** – only copies saved together (bulk “mark as watched”, or within one episode’s length) count once
- **Fixed: dateless movies** are counted again and get a date instead of “NaN”
- **Fixed: “First anime”** uses your truly first episode again

## 1.6.2
- **Undo any watched episode (↺)** – sets it back to not watched in the tracker *and* on Crunchyroll, including episodes that were marked in the wrong language
- **Fixed: totals dropping after 1.6.0** – the dub-duplicate fix could merge *different* episodes; now only true language versions of the same episode are merged
- **Fixed: “NaN year ago” cards** – guessed movie-length items are no longer counted as watched
- **Fixed: Refresh in Airing soon wiping countdowns** when AniList hiccups
- **Airing soon** can be collapsed (remembered), switched between **Week** and **List**, and the list shows everything coming up

## 1.6.1
- **Fixed: marking watched picks the right language** – Crunchyroll tracks every dub as its own episode, so Reaperdex now detects the language you watch each show in (e.g. English dub) and marks that version
- **Language picker** in the confirm box if you want a different one – remembered per show

## 1.6.0
- **Fixed: episodes counted once per language** – Crunchyroll gives every dub its own episode ID, so shows with lots of dubs (e.g. Tokyo Ghoul) showed 10× the real hours. Each episode now counts once
- **Fixed: “Most in one day” / “Biggest binge”** ignore episodes marked watched in bulk (dozens saved within seconds)
- **Fixed: marking episodes watched on Crunchyroll** – Reaperdex now learns the exact format from Crunchyroll's own player, tries every known format, and tells you why if Crunchyroll refuses
- **Redesigned themes** with their own backgrounds, glows and textures: Sunset, Cyberpunk, Sakura, Ocean, Midnight – plus new **Aurora** and **Reaper**
- **Theme picker** with live previews
- **Plan to watch** – unstarted shows on your Crunchyroll watchlist get their own cards; add any show from Find a missing show
- **More like this** – recommendations based on your favourites and top-rated shows
- **Airing countdowns** (opt-in) – "E9 airs in 2d 4h" on cards and an *Airing this week* calendar

## 1.5.2
- Added links to the GitHub page (source code, bug reports) in the script header and the About screen

## 1.5.1
- **Hide the whole Library check box** – it shrinks to one slim line (status, verified count, “need a look” link, progress while running) and remembers your choice
- **Faster “Needs a look” filter** on big libraries (worked out once, not per show)
- **Backups include “Looks right” choices**

## 1.5.0
- **"Needs a look" can be hidden/shown** – collapses to one line and remembers your choice
- **"✓ Looks right"** on each item – stops flagging shows you really only sampled
- **"Show all in the list"** – filters the library to everything that needs a look, so you can use Select to sort them in one go

## 1.4.3
- The floating button now says **Reaperdex**, matching the rest of the app

## 1.4.2
- **New name: Reaperdex – anime tracker for Crunchyroll** (so it isn't mistaken for an official Crunchyroll product)
- **Movies are no longer counted as episodes.** Anything 60 minutes or longer gets its own movie card and counts towards Movies, including movies Crunchyroll files inside a show (e.g. Mugen Train) or lists as a one-episode "series" (e.g. Infinity Castle). The cut-off can be changed in Settings.
- **Card buttons** (Didn't watch / Complete) no longer squash onto two lines
- **Share card renamed to "Anime Recap"** ("Wrapped" is a Spotify trademark)
- **Licence changed to GPL-3.0-or-later with attribution terms** – see NOTICE.md
- About section with credits added (Settings → Shortcuts & about)

## 1.4.1
- Tidied the stylesheet: removed a duplicate menu rule (no visible change)

## 1.4.0
- **Fixed: shows stuck on "1 episode" / only an "SP" season** (Black Clover, Demon Slayer and many others). Crunchyroll returns each season in your preferred audio (often the English dub); the tracker was throwing those seasons away and keeping only the specials. Every season and arc now shows up.
- **Fixed:** long shows whose seasons are all numbered "1" no longer collapse into one season
- **Safety net:** a show is never marked Completed if some of its watched episodes don't match a season – it goes to "Needs a look" instead
- **Library check** – automatically compares every show with Crunchyroll's saved progress after a full scan, with a live progress bar and a "Needs a look" list (Fix / Didn't watch buttons)
- Also checks your **watchlist and Crunchylists** for shows your history forgot
- **Find a missing show** shows exactly what it found, with a one-click **Copy diagnosis**
- Uses where Crunchyroll says you're **up to** when it has no per-episode progress
- **Share cards follow your theme** colours
- **Generated artwork** for shows without a picture
- New icon

## 1.3.0
- **Find a missing show** – search Crunchyroll and pull your saved progress for any show the history list lost (e.g. Black Clover, Demon Slayer)
- **Deep scan** – asks Crunchyroll for your progress on every unfinished show + your watchlist and fills in what history missed
- **Full rescans check your watchlist** – shows you follow but that aren't in your history are found automatically
- **MyAnimeList / AniList export** – MAL XML (imported by both sites), one entry per season, with a review screen to untick wrong matches
- **Safer debug info** – no account ids, tokens, emails or watch dates
- **Narrow windows** – Library / Insights tabs stay visible; header wraps cleanly

## 1.2.0
- **Themes** – Crunchy, Neon, Sakura, Ocean and Midnight
- **Watch goals** – weekly, monthly or yearly target (episodes or hours) with a progress ring
- **Tags** – label shows (Rewatch, Recommend, Masterpiece…) and filter by them
- **Favourites** – heart the anime you love, with a Favourites filter
- **"What should I watch?"** – random pick from your backlog (favours favourites, high ratings and short ones)
- **Activity calendar** – every day of the last 12 months at a glance
- **Year Recap** – share cards for all time or any single year
- **Compare with a friend** – swap codes to see stats side by side, shared anime and recommendations
- **Merge** – tell the tracker two cards are the same anime (and split them again)
- **Keyboard shortcuts** – `/` search, `L` library, `I` insights, `S` share, `R` random, `M` select, `V` view, `?` help
- **List view** – compact table for big libraries
- **Desktop notifications** when a new episode drops (opt-in)
- **Anime personality** – Night Owl, Binger, Completionist, Streaker…
- **Share page** – download your whole list as a web page to send to a mate
- **"Almost done" filter** – shows you're 1–3 episodes from finishing
- **Fixed:** big shows (Slime, Demon Slayer, Black Clover…) missing or showing only extras
- **Fixed:** removed episodes now get placed in the right season
- **Fixed:** the same anime split into several 1-episode cards (dubs / re-releases are merged automatically)

## 1.1.0
- **Didn't watch** – remove shows you never really watched from your list and stats (restore from Hidden)
- **Other services** – Netflix import (official viewing-activity CSV), CSV import, manual add for Disney+ / Prime Video / anything
- **Insights tab** – monthly chart, when-you-watch heatmap, streaks, biggest binge, top genres, by service
- **Continue Watching** row with one-click play-next-episode
- **New episode alerts** for shows you're keeping up with
- **Time left** on every show, total backlog and finish estimate at your pace
- **Ratings (1–10) and notes**
- **Multi-select** – mark several shows complete or didn't watch at once
- **Genre filter**
- **Year medals** are clickable – see everything you watched that year
- **Settings** – dropped-after days, credits %, auto-sync interval, default episode length
- **Backup & restore** your tracker data

## 1.0.0
- Full history tracker with episode-by-episode season checking and the credits rule
- Mark episodes / seasons / shows watched (syncs to Crunchyroll), removed shows completable in the tracker
- Auto-sync from other devices, quick refresh, full rescan
- Days of anime, first anime, yearly medals and milestone badges
- Share card, Google Sheets / CSV / Excel exports
