<p align="center"><img src="icon-512.png" width="120" alt="Reaperdex icon"></p>

<h1 align="center">Reaperdex</h1>
<p align="center"><b>A free anime tracker for Crunchyroll</b> – your whole history, season by season, right on crunchyroll.com.<br>
100% in your browser. No account, no server.</p>

<p align="center">
  <a href="https://greasyfork.org/en/scripts/604749-reaperdex-anime-tracker-for-crunchyroll"><b>⬇ Install from Greasy Fork</b></a> ·
  <a href="reaperdex-demo.mp4">▶ Watch the 30-second demo</a> ·
  <a href="CHANGELOG.md">Changelog</a>
</p>

![Library](1-library.jpg)

## Features
- **Every show checked episode by episode, season by season** – ✓ watched, partly watched, skipped. Credits-only leftovers count as watched.
- **Smart statuses** – Watching, New season out, Completed, Dropped, Almost done, New episodes.
- **Finds what Crunchyroll's history forgot** – an automatic *Library check* compares every show (plus your watchlist and Crunchylists) with Crunchyroll's saved progress; *Find a missing show* pulls any show on demand.
- **Dub & sub merged**, movies split into their own cards.
- **Mark episodes, seasons or whole shows watched** – syncs back to Crunchyroll.
- **Auto-sync** from your phone or TV.
- **Other services** – Netflix import, Disney+ / Prime Video manual add. One combined list.
- **Insights** – days of anime, streaks, activity calendar, when you watch, top genres, anime personality.
- **Awards** – yearly medals, milestone badges, watch goals.
- **Ratings, notes, tags, favourites**, "What should I watch?", compare with a friend.
- **Anime Recap** share cards (all time or any year) and a shareable web page of your list.
- **Exports** – MyAnimeList / AniList XML, Google Sheets, Excel, CSV, backup & restore.
- **5 themes** – Crunchy, Neon, Sakura, Ocean, Midnight.

| Show panel | Insights | Anime Recap |
|---|---|---|
| ![Show panel](2-show-panel.jpg) | ![Insights](3-insights.jpg) | ![Anime Recap](4-anime-recap.jpg) |

## Install
1. Install a userscript manager: [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/).
2. Install Reaperdex from **[Greasy Fork](https://greasyfork.org/en/scripts/604749-reaperdex-anime-tracker-for-crunchyroll)** (or open [`reaperdex.user.js`](reaperdex.user.js) → **Raw**).
3. Open **crunchyroll.com** while logged in and click the **Reaperdex** button (bottom right).

## Privacy – what the code talks to
| Where | Why |
|---|---|
| `www.crunchyroll.com` (its own API, with your existing login) | history, seasons, episodes, saved progress, watchlist, marking episodes watched |
| `graphql.anilist.co` – **only when you use the MAL/AniList export** | looks up MyAnimeList IDs by show title (titles only) |
| `cdn.jsdelivr.net/npm/xlsx@0.18.5` | loaded by your userscript manager via `@require`, used only for the Excel download |

Nothing else. No analytics, no servers of our own. Data is stored in IndexedDB on crunchyroll.com – use **Export → Backup** to keep a copy.

## Bugs & ideas
Open an [issue](https://github.com/nullreaper-dev/reaperdex/issues) and paste **Export → Copy debug info** (it contains no account ids, tokens or watch dates).

## Licence
**GPL-3.0-or-later** © 2026 [nullreaper](https://greasyfork.org/en/users/1661483-nullreaper), with attribution terms – see [NOTICE.md](NOTICE.md).
Forks are welcome, but must keep the credit "Reaperdex by nullreaper", be marked as modified, and use their own name.

*Reaperdex is an independent project and is not affiliated with Crunchyroll, Netflix, Disney+, Amazon, MyAnimeList or AniList.*
