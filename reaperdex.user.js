// ==UserScript==
// @name         Reaperdex – anime tracker for Crunchyroll
// @namespace    nullreaper
// @author       nullreaper
// @homepageURL  https://github.com/nullreaper-dev/reaperdex
// @supportURL   https://github.com/nullreaper-dev/reaperdex/issues
// @license      GPL-3.0-or-later
// @version      1.9.1
// @copyright    2026, nullreaper (https://greasyfork.org/en/users/1661483-nullreaper)
// @description  Your whole anime history as a slick tracker: Crunchyroll synced automatically (episode by episode), plus Netflix, Disney+ and Prime. Mark things watched, insights, awards, ratings, and a share card for your mates.
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAATDElEQVR42t2beZRcVZ3HP797X629pNNJN0SQ9UjYkpjE8TDDDCDjxnEBkSCujB5EBgQFRCKMdHrAEUZHB49yDggygookCApCQKOEVRYDIYGEJQKJIStJp9Pdtb337m/+eK+qXlVXNyEkuFSfd96rV9X17vf723/3XmEnXtrXZwDDMcDz64W/5OugKcpiAJz097vd9hxVFb23z1PlLwv4tYXjqeoOj3GHvqjz51s5+eSw9v5XF+9PGB6GyP6E2o2q0Ip7Z+Jz8/3qhWlxr+l/mz9vvi8yAOYl1Fshn79oVXLMnHyyE9CdJkD7+gzz+lUE1flf6yHrPoWaOYRuJpl0Fmuin1DqR/UnVVrcIzGcxNC0aZgN75O/P8b3Qgdlv4KYp4BfUPRvlLP711UxjGcaMrbK9xmRfqcg3H7hl4ELyWb2oBJCOQAlRFVrknkt8A1SThLSDCq+1wyeVt8z1WtBxJJKgedBubIF1e/wxz9/S665xtf5c6ycvCDcYQKq/6A3nr03E9p+TC59LCMV8MMAMIgRFKlL8E2Q/ChzGPXd6p/DGo9cDorlPzBc+Yyc37+q2YzHJKAm+ZvOO4j29D2kU/sxVPJRPESkUSp/NeAb3ztVlIBcLoUfbqBYOk7O7V+qc+ZYWdCoCWZ0eOtX/eUFb6Et9Rus3Y/txQAk9TcDXgERQUyKQinAmD3JZu/RKy89UBYsCOMQPpoABeGwFQJ9Qqg3kUnvy0g5wBiv5cP+WsFHGUFMhPEoVwI8rxcx8/XKszOsWCGa0Pw6G/PnGzl5QchthbOZkD+KoZKPGK/BAf2tgKdhnB6Fkk9bfha6x1xZsCBk/nzT4ANUVRCBW+d2Q/g81nbhh4CYv1nwjeFZMUZRSmh5qnypf201PEZMLJ5nBRRxn6Y9100ldH9H4KMboTpyuTya+nxS+xs14JavPko29Q5KvgOxfyfgq/ccnidU/OcY9Kcxrz9EwGhfnxER5bYL90WYQTkQVMzfFXinoBgqAYiZysT0wSIo2ieGY2JHGAbTyGbSKCHsjiSHNx+8xuDrzw9JZ4QKbwdgHtUQB+AdgLWgqrVB7QR4rYGS+E01xsqbD1418ZlGv68AeiAA69eLV6vnlYm1QcjrB68K6jQqDP0KGviIl0ZsClEQUQQTO53dDZ5G8E7rBDgHQRhhnTJF63mAc+xwYdNK8g6cE/xSmbCtG7fP4VRMltLgIL4f4FRwTlEHutvBJ2zfuRh8PMjQRfeqet9UCSQeqrQ2hdZqrwphxSdI5cl/+N8xbZ24ke2Unryf0pMPYAvbSbd1YEUwKIgkCpFdDL6q/hrjcS4mIy6dQ0frjoTTJs9fvRjf4VUJ9ksltGcfTFsnuBDT1kn+nz9I+8fPRfefTmFwiHKhQKDgnIs1YleDpw7eaQxYoyMIIAijYxQBjkhFNEGENp/H8PaxlgVBiEvlEvYXqaA3eU86T/gc+RNOw+/spTAwQKUcEKpERGhsFg3PYOfBVyVeVffQ1YEHIfhBCxMIqvahERtiYhPQFk2MSIWr/kGJHGAYOkxUjdW/I/VokHnb4aT3P5jiH++n9Ni92IFB0h0deBZEFUOUj9WIHZXbt/DsNXWnyeHFkq/6gSoJJmjQgDoBLoi/GIIxCbs31LxcFXSCCI0HUH2muBYtuCoqdYjnkT/iWDKHzKTwwN0Un3mClBHS+TZUFKPUo0XSF2nCR2kytrsYeMIWXZKAMFb/MMImdgwNcA7CIPoHbRp4Uvo1NUyouSYJGa8DaWrPshMm0vHBj1OZ9k6K991FYc2LpHM5UpksBofU/poBNx1Vc01Kvmb78XUQ1jVAgoiI0SYQREcYRnhF69KXuPnZcJiERKh72fGbsLHnMdWMifS+B5L+zNkUn3iE0oOLCAa2km5vx7Meoi7SBZFoOA1kJ0E3H65OQPIIQpAwMvcxCQgCIkM2cUEYA8XEGiGJTCn2E841OssdasgnskURcrOOIHPwNAoPLKK45GG8cCQOm5FZQEwCTYmNJkA3Sz4ME1EgBi5jOsEAAj82A02Ab3GuklDlwVHPsnRHGWgyM+cw+Tba33c8/vTZFBbdReH5Z0inM6RyOaw6xCWUs6butPD6Olr6ztUJaKkBrgKBjYiQqBquk2Cje7VzTIK4WhiMDn39BDSbhSqpKXsz4dOnU1r+JKVFdxFsWEe6rR3P8zBOEQVTy76aw16zFjSRYrReILU2AR+MjUNhTELt2iU0QepEVAmoas/OvprCZnbaTDJTD6Vw3+8p3f87vG3bSbdHZoGLQqc4HQ2+FgGaQ6GCiXOdGgFLliTygNgJuqrNJ03BNZpA8trF8ToIG/LsN0REbBaSztD2nuPIvH02xbtup7TkMdLpNCnPw6hGMqlpQHMITPoHEu8ZIw8IvIgEbGxoseQb/ICM1oIqAdUwuqteph42vZ5eOk49jfL0mZRvvB4plEhZD1VFVMcAXM1qZXSUaJkJuthrSjU3TobBFpKvZosaT1r6wa7RgLH8gwvJzJwNhQL+tVdj2zuQ2Dk2AKyVvoliqCFnMGMkQjV2EjlAPejWTaGqAeoSNbeJfIhzu3HuOz5bS1jx4+dpPTS6RNNDNZ4f0MY5SZW6D1jcQECChIbOSKK5UNMKVzeFpAYEfkOpuctwhyFiLXgexWVPMXz9j8im0mj1WdUZ4lpKTKPka0JilJNu7Ac4He3Fq1KuHposJLXuBNU1OUF948idA2MQa/EHBtg6/2bKv7mHvAjiWbRQRI1FrYd4qSh6NVSzkqh0E8VTSxNoKHO1fsYk8n6pg65pRTUKmDiCuF2xHCU6jEGdY+vCuxi44QZ4ZS0de+1N2157kevtgXwblEqw+VXCdRtgaBCTySLZXGNDRKWxwmypAS6Rz4skVKdVk4RGUqqMh+6N5QGqqHORuoswvPRJNv/oOspLltA9eza9Z54J06ZT8lKsHRmhWKmQSaXoaW8j5xw8/QzceTfh0yuxuRx4qYSPkKaOVysNUGlsKNK0OKGmHRovTtCE3bmdS4VrluaQWN3Lr7zCqzf9lJG7F5Lu6ODgK64gfOcR/HLxA9z61YtZ+vgSNm/cRKVSIZVKMbm3h2mzZnLCnBM5oe9iMkuXE171Q+zgUKQl1fpf6w2c1hqgtenlps6qtlitkWDTxYTsTCrsIocqxuBKJV79xQK23/ErzMaNTJg+gz0u/Qb3P/sCFx7zXh5/5DFEDNlcFi+VwoihXKmw+uXVPLfyWebf8BNmzprJZd+5gvdf9V3Ced/ErlwFHR0RCS1MwLQMM83LUlQa42jStrS5c/z61B0TJVeD99/Hy186i6Gf/Jh8sUDXzJns8d3v8YObb+W9Rx7L0iefYlJPDxMndZPJZrHWgoC1lkwmw8Tubib39rLy2ef48LHv54prrsN++zLCgw+C4ZHYQTKOE3RNragk+ObWtSadlSTOO0aCuhAxFhGhuOoFNt/wf5Qff5RsNkuueyLWWCZe+l9cdf2NfPH0LzBpUi/GGIIgaLV8L5rYCkMMQr4tj7TlmXv+VwC48PJLCE89G1sogvVGjc80XKqMlvwo8DL680SuNC4BcZIlxhIMDrLh6qtYe8GXcU88xoSJXXR0dJAaGmbiWefw0Asvcd4ZX2TSpN4awPFeVoQRF+BCRyUM6Zzcy3+cP5eFjzyK/eoXCYeLMcZxneCOgKf1te5gWAMGFt7JwM9/ChvX09HVRaa9DU8Er1LGO+RQKkf8Excc+S7E8zDGvCZ4T4SBsMK/5Hu46q3/yNagyGmvPMaqfJavnXUuRy19hPys6bhlKzETuhsarabl7MzrBR+bjpBoXVXtPAwjp2oMI8uWsvqCL7Plym+THdlOV08P+ZRHVoSMl8KUy6Q+9GHu+d19PPbwI3R2dtbAyziSHwoDpmY6uXm/o5ma7eQfJ+zDqV374XIZVix/mttuvwM56YOExcqoX/JGTVEls94dAC/Uz0YMOjISAQ4VPEGspbJxA5t/dgOFexeREaGrZzJpBE/AE4sVg3EO19YOM2ay4Ly5iLE1+zYIIYpF4pVw1O6XnaPTppi/71FMTuUohxWMOhYPbyKDEKZS/OJn8/nU9ddiuidE9QNjZoLUM7txwTdOjAhRSeplc5T+9CxueBjT3k44MsK2hXcwcOt87OA2Oru6SFtLCsEzgofBiCBioFLB23Mvysay9LE/ks1lcXFWOex8OmyK4TAgYww2lqJDCXD8dJ+jOCTfTTkok7EZzljzEHcPraMnlaWUy7L8iafYHvh07rMPrFoLtmUeMI4THAu8q0cMo4qXSmO3DbDl0rmYvfeluOIZ/DWraWvvIDN5EikFzxg8iTr/9T+D+iH09LJpaJjNGzeRSqUwwJAL+Fz3gXxlzxk8PLSOs9Y+TihKRiybgxLXvfUI/nXCPpT8AtlUnm+uf4Krt75Ar5clcA7P89i6ZQvrtg3QOaUXVr4MqfQ4TrA5b34t8AoSm4BFyeZyVP78Mv6q58mkMrT1TMZq5Kg8YzBIJPValzeenQ8VyeUolMtUymXEGAJVOkyKy/acwcRUnv0nT6XNeHxyzUNsC8rM23MG/zb5YEpBgWwqx01bnufrG5bR42UJYvMREfyKT7FUgnyu3u2qETClXeNsbnDcdbtjgK/avyB4IogoNp8nk2+DuIFpjWAwcRslnu5oWv8rIlAskUunSaXTVHwfzxiGw4CFQ+v4xKSDKFYKnNB9IN8Pyiwe2UTflJlUghJZL8uD21/h9LWP0mlTuEQ2qqp4nkc2k4FiudrTGIxsa72YxKzNi3ElJ6NNYGzwDRFABCuRiqeBtBjSxuCJwUq8gLMZfDV/sB5sepXejnYm9/bg+z4KZI3l82sf5datfyKXylPxi3x20kH8eJ8jCUOftE2xqriNU9Y8GGuhJCa2hCAImDi5myldE+GVzVFG6OyLALRPUQPHVHPApykFQbw6TF8PeLTaHYzU28ZEWCMYMbG9G0RbgI/rCvEyhOvXk1Vl+uxZlIpFJHZ4aTGc+uc/cOe2l0h7WSrOJ3ABxli2BWVOfvk+tgRlcsbiEipsjKFULHHojGl0pTK4l9dajChOlgLQu0KN9MdL4r/1yxdRluPZaMX16wDfSITUfIJows6V1uCrRZi16PZhWP4MHz3lJFwYIhKFP49Iq05Z/SCLBteQ9nJ48SLWT69+kGWlQSbYdM3u6wQIvl/mI6ecBCtfdDIwJFj5ExsqKxSEBQviqqDvaCuCgtyM9QQVbcjrdxB8PYQ2fz4O+MQ6HpvNobf/mg+87z3MnD2L4aFhPBtJ1SPSpE+ueYjfDq5mo/M5Z+2j3Dm0jsleBl9dE3jDyEiBqVOnctKJH4GbFzrJ5gG5RZZc43N0n63NdasiIqiec8oemMrzIO2Esbd6Q+Blx8BX74khHBjEXnoJi8pljjvyXXRNnow6h8brByoaZWudNs2rQZl24zWofdX2rbVs3rSBW+75NSe+5QANzpinXlenT6VyiPz22peUPiPES2WjLTFzrHzv5xsJuZxMxoAGO5IE7TLwVS1oayf87g949+xZfOM7/82rm9djjMEag0NJiZASw1DotwRvjMFay6ZN67h43iWc+O73EPR/P/Q6uwwhV8pvr31J58yxQr9rSLEVhDlzDBMnGjJbHiKd/gdKlQARr64FuxF8lWCxMFIgfNuB2G9fxuX/8798/SsXkWnL09bWFu3SiTNETcR6YwwiQqFQYGR4iIv6LuayeV8nOO+K0Fu6ypLPrET8dzB7Son+/tpITUM79NBDVa65xkfNxwjCjXgpj1CCNw18ta+Yb8OuXEV4/iXMPeML3LboTg48YH82b9rE4LZt+BU/mhGKp9B832dw2yCbN21k773ews133MplX5sbgV/ynKUtP0hQniO/vqbQYk1aU+UabyvRM49/OzZ7N9buQdn3UfGiFZG7EXyyCrUeDI0QTuzCnnM6hWlTWXDnQm67+RaefnIZW1/dgu/7pFIeXd3dHDrjcI6fcyIfO/5DdD63RsPLrw3s5u0p2vPbGCl+QO794cOttsy03jRVJeG0Ew4ik7mRdPqdlCoQaoBiaoX9bgGfuGcsVHzCkRJ25jQ44Tg47CC2uYANg9solkpkMxn2mNBFt03Bsy85bvmNc48+5Zm2CeCZ5RRGPiW/v25ZK/Djb5urkjBnTprJ5iKQc/FSnQSOaDMFYa02VRndHapNQ2lTb1EaFz69VpMlnoR1I0XCoo/pnoB9694wpTfK7QtlWLdJ3Op11gwMQzYH6XQB9PusHfxPWfaTkbHA79DGyeqmQz3zE/ui+llCPopyOF569HLaBgm28Bn6Gmo/VgqusXNEonq+HEQTsWE8cWstGAHPexaxt1EoXy+Lrn7hDW2cbI4OVQa1r8+w/oXDcDodNQeg2k2Y+B1HU+8t4SuSW2ZdU9HlzPjbZGult0lMnRtQBhD7IpjlbOt6Wu7rD6oazIIFr7l19nXtGNejj/b4K3/p0X2e0md26ebpURrR1yew2MAxb2y0i3ch8t4VujMS/3/fNZVKwTXkoAAAAABJRU5ErkJggg==
// @match        https://www.crunchyroll.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

/*  OFFICIAL SOURCES – Reaperdex is only published by nullreaper at:
 *    https://greasyfork.org/en/scripts/604749-reaperdex-anime-tracker-for-crunchyroll
 *    https://github.com/nullreaper-dev/reaperdex
 *  A copy from anywhere else may have been modified. Forks must use their own name (see NOTICE.md). */

/*  Reaperdex – anime tracker for Crunchyroll
 *  Copyright (C) 2026 nullreaper – https://greasyfork.org/en/users/1661483-nullreaper
 *
 *  This program is free software: you can redistribute it and/or modify it under the terms of the
 *  GNU General Public License as published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version. It is distributed WITHOUT ANY WARRANTY; see
 *  <https://www.gnu.org/licenses/gpl-3.0.html> for details.
 *
 *  Additional terms (GPL-3.0 section 7):
 *   (b) You must keep the author attribution "Reaperdex by nullreaper" in this header, in the app's
 *       header and About screen, and on generated share images.
 *   (c) Modified versions must be clearly marked as modified, must not be presented as the original,
 *       and must not claim to be made by nullreaper.
 *   (e) No rights are granted to use the name "Reaperdex" or the Reaperdex icon for modified versions.
 *
 *  Not affiliated with, endorsed by or sponsored by Crunchyroll, Sony, Netflix, Disney, Amazon,
 *  MyAnimeList or AniList. All trademarks belong to their owners.
 */

/*  No outside code: Reaperdex loads no libraries – the Excel download is built in.
 *
 *  Privacy: everything is stored in your browser (IndexedDB on crunchyroll.com). The script only talks to
 *  Crunchyroll's own API using your existing login. The exceptions are the optional MyAnimeList/AniList
 *  export and the optional airing countdowns, which send show TITLES (nothing else) to AniList's public API.
 */

/*  CHANGELOG
 *  1.9.1 – Fix “1s left”: one click saves episodes marked by older versions as fully played.
 *  1.9.0 – Crunchylists; First-watched sort, Copy titles, Paused reminder, On this day, Drop a show yourself; Mark up to here, Undo; smarter/smoother search, natural A–Z, steady sorts, SP labels; marking fixes (0s left, no re-sends, real lengths, faster).
 *  1.8.3 – Marking no longer re-sends episodes Crunchyroll already has as watched (they stay out of Continue Watching).
 *  1.8.2 – Fixed: long specials inside a season (e.g. AoT Final Chapters) count for their show, so Mark complete sticks; First anime keeps the earliest date ever seen.
 *  1.8.1 – Fixed: fully watched shows now show Completed, season numbers no longer skip, Library check flags unmatched episodes.
 *  1.8.0 – Phone layout, avatar notice fix, official-sources notice, security hardening (formula-safe exports, built-in Excel, strict file checks).
 *  1.7.4 – Snapshot list spacing, 5K Club title name.
 *  1.7.3 – Safer backup restore, internal tidy-up.
 *  1.7.2 – Crunchyroll avatar on share cards automatically (via Crunchyroll's image server).
 *  1.7.1 – Crunchyroll avatar on share cards, clearer fallback.
 *  1.7.0 – Profiles (picture, banner, titles, frames, Top 5, ID card), custom themes + codes, instant updates, snapshots, retry queue, faster grid.
 *  1.6.3 – Rewatches in another language count again; dateless movies restored; first anime fixed.
 *  1.6.2 – Undo (↺) for any watched episode, also on Crunchyroll.
 *  1.6.1 – Marks episodes in the language you watch the show in (with a picker).
 *  1.6.0 – Mark-watched fix, dub double-counting fix, redesigned themes (+Aurora, Reaper), Plan to watch, More like this, airing countdowns.
 *  1.5.2 – GitHub homepage + bug-report links.
 *  1.5.1 – Collapsible Library check, faster needs-a-look filter, lookOk in backups.
 *  1.5.0 – Collapsible “Needs a look”, “Looks right” dismiss, needs-a-look filter.
 *  1.4.3 – Floating button renamed to Reaperdex.
 *  1.4.2 – Renamed Reaperdex, movies split from episodes, card button fix, Anime Recap, GPL-3.0 licence.
 *  1.4.1 – Stylesheet tidy-up (duplicate menu rule removed).
 *  1.4.0 – Season-merging fix for long shows, automatic Library check (watchlist + Crunchylists), themed share
 *          cards, generated artwork, diagnosis for Find a missing show.
 *  1.3.0 – Find a missing show + Deep scan (uses Crunchyroll's saved progress), MyAnimeList / AniList XML export, safer debug info, header works on narrow windows.
 *  1.2.0 – Themes, watch goals, tags, favourites, random pick, activity calendar, Year Recap cards,
 *          compare with a friend, manual merge, keyboard shortcuts, list view, desktop notifications,
 *          anime personality, shareable web page, "Almost done" filter.
 *  1.1.0 – "Didn't watch" to remove shows, Netflix import + manual add for Disney+/Prime/others,
 *          Insights tab, Continue Watching with play-next, new-episode alerts, time left + backlog,
 *          ratings & notes, multi-select, genre filter, year drill-down, settings, backup & restore.
 *  1.0.0 – Tracker with full history, episode-by-episode seasons, credits rule, mark watched
 *          (syncs to Crunchyroll), auto-sync, awards, days of anime, share card, exports.
 */

(function () {
  'use strict';

  const VERSION = '1.9.1';
  const CHANGELOG = [
    { v: '1.9.1', items: [
      'New: Export ▾ → “Fix “1s left” on Crunchyroll” – episodes marked by older versions (before 1.9.0) are saved as fully played, so Crunchyroll and your phone stop showing “1s left”',
    ] },
    { v: '1.9.0', items: [
      'New: Crunchylists – add any show (or every show you’ve selected, e.g. “Select all shown” on a filter) to a Crunchylist, or make a new list in one go',
      'New: Manage Crunchylists – see your lists, delete them, or copy a list’s shows into your Plan to watch',
      'New: “Mark up to here” (⤒) on any episode – marks it and every earlier episode of that season',
      'New: Undo right after marking – one tap puts the episodes back to not watched (also on Crunchyroll)',
      'New: sort by “First watched” – your library in the order you started each show',
      'New: “Copy titles” for selected shows – paste the list anywhere',
      'New: “Paused” reminder on cards – shows how long it’s been and when a show will count as Dropped',
      'New: “On this day” in Insights – what you watched on today’s date in earlier years',
      'New: drop a show yourself (✕ Drop / ↺ Undrop in the show panel) – no need to wait 180 days',
      'Better: search ignores punctuation and word order – “re zero” finds Re:ZERO, “spy family” finds SPY x FAMILY',
      'Better: search waits until you pause typing, so big libraries stay smooth',
      'Better: A–Z sorts naturally (Season 2 before Season 10) and ignores “The”',
      'Better: shows with the same progress, hours or time left keep a steady order (last watched first)',
      'Fixed: specials are labelled “SP1” instead of “ESP1”',
      'Fixed: marked episodes no longer show “1s left” on Crunchyroll – they’re saved as fully played',
      'Fixed: episodes without a known length (long specials, some movies) are marked with their real length instead of a 24-minute guess',
      'Faster: marking a whole show sends 3 episodes at a time',
      'Fixed: marking an old show as watched no longer makes it jump to the top as “watched just now”',
    ] },
    { v: '1.8.3', items: [
      'Fixed: marking a show or season as watched no longer re-sends episodes Crunchyroll already has as watched (in any language) – so they don’t pop back into Crunchyroll’s “Continue Watching”',
    ] },
    { v: '1.8.2', items: [
      'Fixed: “Mark complete” no longer undoes itself after a refresh – long specials inside a season (like Attack on Titan’s Final Chapters) now count for their show instead of becoming separate movie cards',
      'Fixed: episodes Reaperdex only counted as watched (because you watched a later one) are now sent to Crunchyroll when you mark a show or season – so your phone shows them too. Seasons like that get a “Sync to Crunchyroll” button',
      'Fixed: “First anime” no longer changes when you mark an old show as watched – Crunchyroll only keeps the latest date per episode, so Reaperdex now remembers the earliest date it has ever seen',
    ] },
    { v: '1.8.1', items: [
      'Fixed: fully watched shows (every season 100%) now show Completed – a few episodes Crunchyroll keeps under their own IDs (often dub copies) no longer hold them on Watching',
      'Fixed: season numbers no longer skip – movies (like JJK 0 or Mugen Train) don’t take a number, so it’s S1, S2, S3 instead of S1, S2, S4',
      'Fixed: the Library check now lists shows with episodes it couldn’t match to a season (“N eps not matched”), so you can take a look',
      'Fixed: a dub that’s still coming out is no longer counted as an extra season (it could wrongly say “New season out”)',
      'Fixed: a season that’s only announced (no episodes yet) no longer makes a show say “New season out”',
    ] },
    { v: '1.8.0', items: [
      'Phone layout – Reaperdex now feels like an app on your phone: compact top bar, bottom navigation (Library, Insights, Share, Profile), two-column cards, full-screen show panels and swipeable filters',
      'Windows open as bottom sheets on phones, with easy-to-tap buttons',
      'Fixed: after choosing your Crunchyroll avatar, the “getting a copy” notice now clears by itself – no reload needed',
      'Fixed: a small empty bar could peek out at the bottom of the screen',
      'Settings → Shortcuts & about now shows where the official Reaperdex is published, so you can tell if a copy has been tampered with',
      'Security: spreadsheet exports (CSV, Excel, Google Sheets copy) can no longer contain hidden formulas from show titles or imports',
      'Security: Excel export is now built in – Reaperdex no longer loads any outside code',
      'Security: backup files, friend codes and imports are strictly checked – a tampered file can no longer break the app',
      'Security: the shareable web page only uses safe https links and pictures',
    ] },
    { v: '1.7.4', items: [
      'Safety snapshots list has more room and no repeated version numbers',
      'The “Ten Thousand” title is now called “5K Club” – it’s for 5,000 episodes',
    ] },
    { v: '1.7.3', items: [
      'Security: pictures and settings restored from backup files are checked, so a tampered backup can’t inject anything',
      'Small internal tidy-up – no changes to how anything works',
    ] },
    { v: '1.7.2', items: [
      'Your Crunchyroll avatar now shows on share and ID cards automatically – fetched through Crunchyroll’s image server, nothing to do',
      'Already picked it? It fixes itself the next time you open Reaperdex',
      'The Share window fits your screen – the buttons are never cut off',
    ] },
    { v: '1.7.1', items: [
      'Your Crunchyroll avatar now shows on share and ID cards where possible – Reaperdex fetches a copy it’s allowed to use, and retries on its own',
      'If Crunchyroll still blocks it, your profile explains the one-step fix',
    ] },
    { v: '1.7.0', items: [
      'Profiles – your own picture (or your Crunchyroll avatar in one click) and a banner, shown on your library and share cards',
      'Titles – 35 to earn, from Common to Mythic, including secret ones. Pick which one shows next to your name',
      'Frames around your picture, unlocked by milestones – Ember, Silver, Sakura, Flame, Gold, Aurora, Reaper and the Mythic Void',
      'Top 5 – pin your favourite anime to your profile and ID card',
      'Anime ID card – a shareable card with your picture, title, stats and Top 5 (Share → Anime ID card)',
      'Custom theme – pick your own colours, take them from your picture, and share them as a theme code (RDX-…)',
      'Optional: show your picture in Crunchyroll’s menus too (only on your computer)',
      'Faster: episodes you just watched show up within seconds of leaving the player',
      'Safety snapshots – a daily copy of your marks, ratings, notes, profile and settings you can restore in Settings',
      'Backups now include everything: Plan to watch, languages, profile, Top 5 and your theme',
      'Crunchyroll updates that fail (offline, server hiccup) are retried automatically on the next sync',
      'Big libraries load faster – cards are drawn as you scroll, and every show is reachable (no 600-card limit)',
    ] },
    { v: '1.6.3', items: [
      'Fixed: watching an episode again in another language counts again (it’s a real rewatch) – only copies saved together, like bulk “mark as watched”, count once',
      'Fixed: movies Crunchyroll gave no date for are counted again and show a date instead of “NaN”',
      'Fixed: “First anime” uses your truly first episode again',
    ] },
    { v: '1.6.2', items: [
      'Undo any watched episode (↺) – sets it back to not watched in the tracker and on Crunchyroll, including episodes marked in the wrong language',
      'Fixed: 1.6.0 could merge different episodes when it removed dub duplicates, making totals drop – now only true language versions of the same episode are merged',
      'Fixed: cards showing “NaN year ago” – guessed movie-length items are no longer counted as watched',
      'Fixed: Refresh in Airing soon could wipe countdowns if AniList hiccuped – it keeps what it had',
      'Airing soon: collapse it (remembered), switch between Week and List, and the list shows everything coming up – not just 7 days',
    ] },
    { v: '1.6.1', items: [
      'Fixed: marking watched now picks the right language – Crunchyroll tracks every dub as a separate episode, so Reaperdex detects the language you watch each show in (e.g. English dub) and marks that one',
      'You can change the language in the confirm box; your choice is remembered per show',
    ] },
    { v: '1.6.0', items: [
      'Fixed: hours and Insights counted the same episode once per language (dub/sub), so shows with many dubs looked 10× longer – now counted once',
      'Fixed: “Most in one day” and “Biggest binge” ignore episodes marked watched in bulk',
      'Fixed: marking episodes watched now works with Crunchyroll – Reaperdex learns the exact format from Crunchyroll’s own player and tries every known format, and tells you why if Crunchyroll refuses',
      'Brand-new themes with their own backgrounds, glows and textures: Sunset, Cyberpunk, Sakura, Ocean, Midnight – plus new Aurora and Reaper',
      'Theme picker with live previews',
      'Plan to watch – shows on your Crunchyroll watchlist you haven’t started get their own cards; add any show from Find a missing show',
      'More like this – recommendations based on your favourites and top-rated shows, using Crunchyroll’s own suggestions',
      'Airing countdowns (opt-in) – “E9 airs in 2d 4h” on cards and an Airing this week calendar',
    ] },
    { v: '1.5.2', items: ['Added links to the GitHub page (source code, bug reports)'] },
    { v: '1.5.1', items: [
      'Hide the whole Library check box – it shrinks to one slim line and remembers your choice',
      'The “Needs a look” filter is much faster on big libraries',
      'Backups now include your “Looks right” choices',
    ] },
    { v: '1.5.0', items: [
      '“Needs a look” can be hidden and shown – it remembers your choice',
      '“Looks right” button – tell Reaperdex a show is fine (e.g. you really only tried episode 1) and it stops flagging it',
      '“Show all in the list” – filter the library to every show that needs a look, then use Select to sort them in one go',
    ] },
    { v: '1.4.3', items: ['The floating button now says Reaperdex, matching the rest of the app'] },
    { v: '1.4.2', items: [
      'New name: Reaperdex – anime tracker for Crunchyroll',
      'Movies (60 min or longer) are now movie cards and no longer counted as episodes – including movies Crunchyroll files inside a show',
      'Card buttons (Didn’t watch / Complete) no longer squash onto two lines',
      'Share card renamed to Anime Recap',
      'Now licensed GPL-3.0 with an attribution requirement – free to modify, not to pass off as your own',
    ] },
    { v: '1.4.1', items: ['Tidied the menu styles (no visible change)'] },
    { v: '1.4.0', items: [
      'Fixed: long shows (Black Clover, Demon Slayer, Naruto…) collapsing into one season – every season and arc now shows up',
      'Library check – automatically checks every show against Crunchyroll’s saved progress, with a live progress bar and a “Needs a look” list',
      'Also checks your Crunchyroll watchlist and Crunchylists for shows your history forgot',
      'Find a missing show now shows exactly what it found, plus a one-click “Copy diagnosis”',
      'Uses where Crunchyroll says you’re up to when it has no per-episode progress',
      'Share cards follow your theme colours',
      'Generated artwork for shows without a picture',
    ] },
    { v: '1.3.0', items: [
      'Find a missing show – search Crunchyroll and pull your real progress for any show your history lost (e.g. Black Clover, Demon Slayer)',
      'Deep scan – asks Crunchyroll for your progress on every show + your watchlist, and fills in what the history list missed',
      'Full rescans now also check every show on your Crunchyroll watchlist',
      'MyAnimeList / AniList export – a MAL XML file both sites import, with a review screen to check every match',
      'Debug info no longer includes dates or anything account-related, so it’s safe to share',
      'Library / Insights tabs stay visible on narrow and split-screen windows',
    ] },
    { v: '1.2.0', items: [
      'Themes – Crunchy, Neon, Sakura, Ocean and Midnight',
      'Watch goals – set a weekly, monthly or yearly target and track it with a progress ring',
      'Tags – label shows (Rewatch, Recommend, Masterpiece…) and filter by them',
      'Favourites – heart the anime you love',
      '“What should I watch?” – a random pick from your backlog',
      'Activity calendar – every day of the last year at a glance',
      'Year Recap – make a share card for any single year',
      'Compare with a friend – swap codes and see shared anime and recommendations',
      'Merge – tell the tracker two cards are the same anime',
      'Keyboard shortcuts – press ? to see them',
      'List view – a compact table for big libraries',
      'Desktop notifications when a new episode drops',
      'Your anime personality – Night Owl, Binger, Completionist…',
      'Share page – download your whole list as a web page to send to a mate',
      '“Almost done” filter – shows you’re 1–3 episodes from finishing',
      'Fixed: big shows (Slime, Demon Slayer, Black Clover…) missing, removed episodes not placed in seasons, the same anime split into several cards',
    ] },
    { v: '1.1.0', items: [
      'Didn’t watch – remove shows you never watched from your list and stats (restore any time from Hidden)',
      'Netflix import + add Disney+, Prime Video or anything else – one combined list',
      'Insights tab – monthly chart, when you watch, streaks, biggest binge, top genres',
      'Continue Watching row with one-click “play next episode”',
      'New episode alerts for shows you’re keeping up with',
      'Time left on every show, plus your total backlog and finish estimate',
      'Rate shows 1–10 and keep notes',
      'Select several shows at once – mark complete or didn’t watch in one go',
      'Genre filter',
      'Click a year medal to see everything you watched that year',
      'Settings – dropped after X days, credits %, auto-sync, default episode length',
      'Backup & restore your tracker data',
    ] },
    { v: '1.0.0', items: ['Full tracker: history, seasons episode by episode, mark watched, auto-sync, awards, share card, exports'] },
  ];
  const API = 'https://www.crunchyroll.com';
  const LOCALE = 'en-US';
  const PAGE_SIZE = 100;
  const DAY = 86400000;
  const S = { airing: false, airOpen: true, airView: 'week', checkOpen: true, lookOpen: true, movieMin: 60, dropDays: 180, donePct: 85, syncMin: 10, epMin: 24, theme: 'crunchy', layout: 'grid', goal: 0, goalUnit: 'episodes', goalPeriod: 'week', notify: false };     // user settings (Settings panel)
  const EXTRA_SEASON = /\b(specials?|ova|oad|recaps?|compilation|picture drama)\b/i;
  const SERVICES = {
    crunchyroll: { label: 'Crunchyroll', short: 'CR', color: '#ff8a1f' },
    netflix: { label: 'Netflix', short: 'NETFLIX', color: '#e50914' },
    disney: { label: 'Disney+', short: 'DISNEY+', color: '#3d7bff' },
    prime: { label: 'Prime Video', short: 'PRIME', color: '#1fb2ff' },
    other: { label: 'Other', short: 'OTHER', color: '#9ca3af' },
  };

  // ================================================================
  // 1. Borrow the login token the site already uses
  // ================================================================
  let token = null;
  const livePH = new Map();   // progress Crunchyroll's player just saved (content id → seconds), so the tracker updates instantly
  let phLearned = null;   // the exact way Crunchyroll's own player saves progress (learned while you watch)
  const learnPH = (url, method, body) => {
    try {
      if (!url || !/\/playheads/.test(String(url)) || /^get$/i.test(method || 'GET')) return;
      const u = new URL(String(url), location.href);
      let b = null;
      if (typeof body === 'string') { try { b = JSON.parse(body); } catch (_) { b = null; } }
      phLearned = { path: u.pathname + u.search, method: String(method).toUpperCase(), body: b, at: Date.now() };
      if (b && b.content_id && b.playhead >= 0) livePH.set(String(b.content_id), { ph: +b.playhead, at: Date.now() });
    } catch (_) {}
  };
  const grab = (v) => { if (v && /^Bearer\s+/i.test(v)) token = v; };
  const origFetch = window.fetch;
  window.fetch = function (input, init) {
    try {
      const h = init && init.headers;
      if (h) {
        if (h instanceof Headers) grab(h.get('authorization'));
        else if (Array.isArray(h)) h.forEach(([k, v]) => String(k).toLowerCase() === 'authorization' && grab(v));
        else for (const k in h) if (k.toLowerCase() === 'authorization') grab(h[k]);
      }
      if (input instanceof Request) grab(input.headers.get('authorization'));
      learnPH(typeof input === 'string' || input instanceof URL ? String(input) : input && input.url, (init && init.method) || (input && input.method) || 'GET', init && init.body);
    } catch (_) {}
    return origFetch.apply(this, arguments);
  };
  const origOpen = XMLHttpRequest.prototype.open, origSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function (m, u) { this._nrM = m; this._nrU = u; return origOpen.apply(this, arguments); };
  XMLHttpRequest.prototype.send = function (b) { try { learnPH(this._nrU, this._nrM, b); } catch (_) {} return origSend.apply(this, arguments); };
  const origSetHeader = XMLHttpRequest.prototype.setRequestHeader;
  XMLHttpRequest.prototype.setRequestHeader = function (k, v) {
    if (String(k).toLowerCase() === 'authorization') grab(v);
    return origSetHeader.apply(this, arguments);
  };

  // ================================================================
  // 2. Storage (IndexedDB)
  // ================================================================
  const store = (() => {
    let dbp;
    const db = () => dbp || (dbp = new Promise((res, rej) => {
      const r = indexedDB.open('nrcx', 1);
      r.onupgradeneeded = () => r.result.createObjectStore('kv');
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    }));
    return {
      async get(k) {
        try { const d = await db(); return await new Promise((res) => { const q = d.transaction('kv').objectStore('kv').get(k); q.onsuccess = () => res(q.result); q.onerror = () => res(undefined); }); }
        catch (_) { return undefined; }
      },
      async set(k, v) {
        try { const d = await db(); await new Promise((res) => { const t = d.transaction('kv', 'readwrite'); t.objectStore('kv').put(v, k); t.oncomplete = res; t.onerror = res; }); }
        catch (_) {}
      },
    };
  })();

  // ================================================================
  // 3. Crunchyroll API
  // ================================================================
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  async function waitForToken(ms = 15000) {
    const t0 = Date.now();
    while (!token && Date.now() - t0 < ms) await sleep(250);
    return token;
  }
  const rel = (u) => { if (!u) return null; try { const x = new URL(u, API); return x.pathname + x.search; } catch (_) { return null; } };

  async function api(path, retry = 2, opts = {}) {
    const res = await origFetch.call(window, API + path, {
      method: opts.method || 'GET', body: opts.body, credentials: 'include',
      headers: { authorization: token, accept: 'application/json', ...(opts.body ? { 'content-type': 'application/json' } : {}) },
    });
    if (res.status === 401 && retry) {
      const old = token, t0 = Date.now();
      while (token === old && Date.now() - t0 < 8000) await sleep(300);
      return api(path, retry - 1, opts);
    }
    if ((res.status === 429 || res.status >= 500) && retry) { await sleep(2500); return api(path, retry - 1, opts); }
    if (!res.ok) { const err = new Error(`Crunchyroll said ${res.status}`); err.status = res.status; throw err; }
    const txt = await res.text();
    return txt ? JSON.parse(txt) : {};
  }
  async function pool(list, n, fn) {
    const q = list.slice();
    await Promise.all(Array.from({ length: n }, async () => { while (q.length) { await fn(q.shift()); await sleep(90); } }));
  }

  async function fetchHistory(acc, say, known) {
    const all = [], seen = new Set();
    let page = 1, pages = 0, url = `/content/v2/${acc}/watch-history?page_size=${PAGE_SIZE}&locale=${LOCALE}`;
    while (url && page <= 3000) {
      let j = null, err = null;
      for (let a = 0; a < 4 && !j; a++) {
        try { j = await api(url, 1); }
        catch (e) { err = e; if (a < 3) await sleep(1200 * 2 ** a); }
      }
      if (!j) { if (!all.length) throw err; break; }
      pages++;
      const items = j.data || j.items || [];
      let fresh = 0, changed = 0;
      for (const it of items) {
        const id = idOf(it), k = id + '|' + (it.date_played || '');
        if (seen.has(k)) continue;
        seen.add(k); all.push(it); fresh++;
        if (known) { const c = known.get(id); if (!c || c.date !== (it.date_played || '') || c.ph !== (it.playhead || 0)) changed++; }
      }
      say(known ? `Syncing… ${all.length} recent episodes checked` : `Reading your whole history… ${all.length.toLocaleString()} episodes (page ${pages})`);
      if (!items.length || !fresh) break;
      if (known && !changed) break;
      page++;
      const next = rel(j.meta && j.meta.next_page) || rel(j.next_page) ||
        rel(j.links && j.links.next && j.links.next.href) || rel(j.__links__ && j.__links__.next && j.__links__.next.href);
      url = next || `/content/v2/${acc}/watch-history?page_size=${PAGE_SIZE}&page=${page}&locale=${LOCALE}`;
      await sleep(150);
    }
    return { items: all, pages };
  }

  async function fetchObjects(ids, say, label) {
    const out = {}, batches = [];
    for (let i = 0; i < ids.length; i += 50) batches.push(ids.slice(i, i + 50));
    let done = 0, fails = 0;
    const get = async (b) => {
      if (fails > 25) { done += b.length; return; }
      try {
        const j = await api(`/content/v2/cms/objects/${b.join(',')}?locale=${LOCALE}`);
        for (const o of j.data || []) if (o && o.id) out[o.id] = o;
        done += b.length;
      } catch (e) {
        if (b.length > 1 && e.status && e.status < 500) { const m = Math.ceil(b.length / 2); await get(b.slice(0, m)); await get(b.slice(m)); }
        else { if (!e.status || e.status >= 500) fails++; done += b.length; }   // a single removed item (404) is fine – keep going
      }
      if (say) say(`${label}… ${Math.min(done, ids.length).toLocaleString()}/${ids.length.toLocaleString()}`);
    };
    await pool(batches, 3, get);
    return out;
  }

  function slimSeasons(list) {
    // Crunchyroll returns each season in your preferred audio (often the English dub), and lists every audio
    // version in `versions`. Group the versions of the same season together and keep ONE per group –
    // never drop a season just because the copy we got isn't the Japanese original.
    const seqOf = (s) => s.season_sequence_number ?? s.season_number ?? 0;
    const groupOf = new Map(), groups = [];
    for (const s of list) {
      const ids = [s.id, ...(s.versions || []).map((v) => v.guid)].filter(Boolean);
      let g = ids.map((id) => groupOf.get(id)).find(Boolean);
      if (!g) { g = { members: [] }; groups.push(g); }
      g.members.push(s);
      ids.forEach((id) => groupOf.set(id, g));
    }
    const isOrig = (s) => (s.versions || []).some((v) => v.guid === s.id && v.original) || /ja-JP/i.test(s.audio_locale || '');
    let reps = groups.map((g) => ({ rep: g.members.find(isOrig) || g.members[0], g }));
    // seasons that come as separate entries without version links (e.g. "Season 1 (English Dub)") – fold them together too
    const byKey = new Map();
    for (const r of reps) {
      const k = seqOf(r.rep) + '|' + cleanTitle(r.rep.title || '') + '|' + (r.rep.number_of_episodes || 0);
      const ex = byKey.get(k);
      if (ex) { ex.g.members.push(...r.g.members); if (!isOrig(ex.rep) && isOrig(r.rep)) ex.rep = r.rep; } else byKey.set(k, r);
    }
    // a dub that's still coming out has fewer episodes than the original, so the key above misses it –
    // fold any entry titled as a dub into the season with the same number and name
    const DUB = /\b(dub|dubbed)\b/i;
    for (const [k, r] of [...byKey]) {
      if (!DUB.test(r.rep.title || '')) continue;
      const home = [...byKey.values()].find((o) => o !== r && !DUB.test(o.rep.title || '') && seqOf(o.rep) === seqOf(r.rep) && cleanTitle(o.rep.title || '') === cleanTitle(r.rep.title || ''));
      if (home) { home.g.members.push(...r.g.members); byKey.delete(k); }
    }
    reps = [...byKey.values()].map((r, i) => ({ ...r, i })).sort((a, b) => seqOf(a.rep) - seqOf(b.rep) || (a.rep.season_number ?? 0) - (b.rep.season_number ?? 0) || a.i - b.i);
    const alias = {};
    for (const r of reps) for (const m of r.g.members) { alias[m.id] = r.rep.id; (m.versions || []).forEach((v) => { alias[v.guid] = r.rep.id; }); }
    return { seasons: reps.map(({ rep: s }) => ({ id: s.id, t: (s.title || `Season ${s.season_number}`).replace(/\s*\((english|spanish|portuguese|french|german|italian|hindi|castilian)[^)]*dub\)/i, ''), n: s.number_of_episodes || 0, x: EXTRA_SEASON.test(s.title || '') })), alias };
  }


  async function fetchSeasons(ids, say, force) {
    const cache = (await store.get('seasons5')) || {}, out = {}, todo = [];
    for (const id of ids) { const c = cache[id]; if (c && !force && Date.now() - c.at < 7 * DAY) out[id] = c.s; else todo.push(id); }
    let n = 0;
    await pool(todo, 4, async (id) => {
      try { const j = await api(`/content/v2/cms/series/${id}/seasons?locale=${LOCALE}`); out[id] = slimSeasons(j.data || []); cache[id] = { at: Date.now(), s: out[id] }; }
      catch (_) { out[id] = cache[id] ? cache[id].s : null; }
      if (say) say(`Checking your shows for new seasons… ${++n}/${todo.length}`);
    });
    if (todo.length) await store.set('seasons5', cache);
    return out;
  }

  async function fetchEpisodeLists(ids, latest, say, force) {
    const cache = (await store.get('episodes3')) || {}, out = {}, todo = [];
    for (const id of ids) {
      const c = cache[id], maxAge = latest.has(id) ? (force ? 0 : DAY / 2) : 30 * DAY;
      if (c && Date.now() - c.at < maxAge) out[id] = c.e; else todo.push(id);
    }
    let n = 0;
    await pool(todo, 4, async (id) => {
      const before = cache[id] && cache[id].e;
      try {
        const j = await api(`/content/v2/cms/seasons/${id}/episodes?locale=${LOCALE}`);
        const list = (j.data || []).slice().sort((a, b) => (a.sequence_number ?? 0) - (b.sequence_number ?? 0));
        out[id] = list.map((x) => {
          const ids = [], al = [];
          for (const [vid, lang] of [[x.id, x.audio_locale], ...(x.versions || []).map((v) => [v.guid, v.audio_locale])]) if (vid && !ids.includes(vid)) { ids.push(vid); al.push(lang || ''); }
          return { ids, al, l: String(x.episode || x.episode_number || x.sequence_number || ''), t: x.title || '', d: Math.round((x.duration_ms || 0) / 1000) };
        });
        if (before && out[id].length > before.length) state.epAdds[id] = out[id].length - before.length;   // new episodes came out
        cache[id] = { at: Date.now(), e: out[id] };
      } catch (_) { out[id] = before || null; }
      if (say) say(`Checking every season episode by episode… ${++n}/${todo.length}`);
    });
    if (todo.length) await store.set('episodes3', cache);
    return out;
  }

  const genresOf = (o) => {
    const m = o.series_metadata || o.movie_listing_metadata || {};
    const raw = m.tenant_categories || m.genres || o.categories || [];
    return (Array.isArray(raw) ? raw : []).map((x) => (typeof x === 'string' ? x : x.title || x.localization?.title || x.id || '')).filter(Boolean);
  };
  async function fetchShowInfo(ids, say, force) {
    const cache = (await store.get('shows3')) || {}, out = {}, todo = [];
    for (const id of ids) { const c = cache[id]; if (c && !force && Date.now() - c.at < 30 * DAY && 'g' in c) out[id] = c; else todo.push(id); }
    if (todo.length) {
      const objs = await fetchObjects(todo, say, 'Getting show names, artwork and genres');
      for (const id of todo) {
        const o = objs[id];
        if (o) cache[id] = out[id] = { at: Date.now(), t: o.title || '', img: imgOf(o, 'poster_wide') || imgOf(o, 'thumbnail'), type: o.type || '', g: genresOf(o) };
        else if (cache[id]) out[id] = cache[id];
      }
      await store.set('shows3', cache);
    }
    return out;
  }

  // Crunchyroll's saved progress for specific episodes – works even when the watch-history list lost them
  async function playheadOwner() {
    if (state.phOwner) return state.phOwner;
    const owners = [state.acc];
    try { const mp = await api('/accounts/v1/me/multiprofile', 0); const p = (mp.profiles || []).find((x) => x.is_selected) || (mp.profiles || [])[0]; if (p && p.profile_id) owners.push(p.profile_id); } catch (_) {}
    state.phOwners = owners;
    return (state.phOwner = owners[0]);
  }
  const phList = (j) => (Array.isArray(j) ? j : Array.isArray(j.data) ? j.data : j.data && typeof j.data === 'object' ? Object.entries(j.data).map(([k, v]) => ({ content_id: k, ...v })) : []);
  async function fetchPlayheads(ids, say) {
    const out = {}, batches = [];
    for (let i = 0; i < ids.length; i += 40) batches.push(ids.slice(i, i + 40));
    let n = 0;
    await playheadOwner();
    state.debug.playheads = state.debug.playheads || { calls: 0, ok: 0, fails: 0 };
    await pool(batches, 3, async (b) => {
      for (const owner of [state.phOwner, ...(state.phOwners || []).filter((o) => o !== state.phOwner)]) {
        try {
          const j = await api(`/content/v2/${owner}/playheads?content_ids=${b.join(',')}&locale=${LOCALE}`);
          state.debug.playheads.calls++; state.debug.playheads.ok++;
          if (!state.debug.playheads.sample) state.debug.playheads.sample = JSON.stringify(j).slice(0, 400);
          for (const p of phList(j)) if (p && (p.content_id || p.id)) out[p.content_id || p.id] = p;
          state.phOwner = owner;
          break;
        } catch (e) { state.debug.playheads.calls++; state.debug.playheads.fails++; state.debug.playheads.lastError = e.status || String(e.message); }
      }
      n += b.length;
      if (say) say(`Checking your progress on Crunchyroll… ${Math.min(n, ids.length).toLocaleString()}/${ids.length.toLocaleString()} episodes`);
    });
    return out;
  }
  async function crSearch(q) {
    const j = await api(`/content/v2/discover/search?q=${encodeURIComponent(q)}&n=12&type=series&locale=${LOCALE}`);
    const groups = Array.isArray(j.data) ? j.data : [];
    return groups.flatMap((g) => g.items || (g.id ? [g] : [])).filter((x) => x && x.id && (!x.type || /series/.test(x.type)))
      .map((x) => ({ id: x.id, t: x.title, img: imgOf(x, 'poster_wide') || imgOf(x, 'poster_tall'), g: genresOf(x) }));
  }
  // Where Crunchyroll thinks you're up to in a show (used when it has no per-episode progress)
  async function fetchUpNext(sid) {
    for (const path of [`/content/v2/discover/up_next/${sid}?locale=${LOCALE}`, `/content/v2/discover/${state.acc}/up_next/${sid}?locale=${LOCALE}`]) {
      try { const j = await api(path, 0); const it = (j.data || [])[0]; if (it) return it; } catch (_) {}
    }
    return null;
  }
  async function fetchCrunchylists() {
    try {
      const j = await api(`/content/v2/${state.acc}/custom-lists?locale=${LOCALE}`, 0);
      const ids = [];
      for (const l of j.data || []) {
        try { const k = await api(`/content/v2/${state.acc}/custom-lists/${l.list_id || l.id}?locale=${LOCALE}`, 0);
          for (const it of k.data || []) { const p = it.panel || it; const sid = (p.episode_metadata && p.episode_metadata.series_id) || (/series/.test(p.type || '') ? p.id : ''); if (sid) ids.push(sid); } } catch (_) {}
      }
      return ids;
    } catch (_) { return []; }
  }
  async function fetchWatchlist() {
    try {
      const j = await api(`/content/v2/discover/${state.acc}/watchlist?order=desc&n=1000&locale=${LOCALE}`, 1);
      const out = new Map();
      for (const it of j.data || []) {
        const p = it.panel || it, em = p.episode_metadata || {};
        const sid = em.series_id || (/series/.test(p.type || '') ? p.id : '');
        if (sid && !out.has(sid)) out.set(sid, { sid, t: em.series_title || p.title || '', img: imgOf(p, 'poster_wide') || imgOf(p, 'thumbnail'), g: genresOf(p) });
      }
      state.watchlist = [...out.values()];
      store.set('watchlist3', state.watchlist);
      return [...out.keys()];
    } catch (_) { return []; }
  }
  // Crunchyroll's own "More like this"
  async function fetchSimilar(sid) {
    try {
      const j = await api(`/content/v2/discover/similar_to/${sid}?n=14&locale=${LOCALE}`, 0);
      return (j.data || []).map((it) => it.panel || it).filter((p) => p && p.id && /series|movie_listing/.test(p.type || 'series'))
        .map((p) => ({ sid: p.id, t: p.title, img: imgOf(p, 'poster_wide') || imgOf(p, 'thumbnail'), g: genresOf(p) }));
    } catch (_) { return null; }
  }
  // Airing countdowns (opt-in): asks AniList when the next episode of a season comes out – titles only
  async function fetchAiring(queries, say, force) {
    const cache = (await store.get('airing3')) || {}, out = {}, todo = [];
    for (const q of queries) { if (!force && cache[q] && Date.now() - cache[q].at < 6 * 3600000 && !(cache[q].m && cache[q].m.at < Date.now())) out[q] = cache[q].m; else todo.push(q); }
    for (let i = 0; i < todo.length; i += 12) {
      const chunk = todo.slice(i, i + 12), vars = {};
      const parts = chunk.map((q, k) => { vars['s' + k] = q; return `a${k}: Page(perPage: 1) { media(search: $s${k}, type: ANIME, sort: [SEARCH_MATCH, START_DATE_DESC]) { id status episodes title { romaji english } nextAiringEpisode { airingAt episode } } }`; });
      const query = `query(${chunk.map((_, k) => `$s${k}: String`).join(', ')}) { ${parts.join(' ')} }`;
      let j = null;
      try {
        const r = await origFetch.call(window, 'https://graphql.anilist.co', { method: 'POST', headers: { 'content-type': 'application/json', accept: 'application/json' }, body: JSON.stringify({ query, variables: vars }) });
        if (r.status === 429) { await sleep(30000); i -= 12; continue; }
        j = await r.json();
      } catch (_) { break; }
      if (!j || !j.data) continue;          // AniList hiccup: leave these as unknown (keeps the old countdowns)
      chunk.forEach((q, k) => {
        if (!j.data['a' + k]) return;
        const m = j.data['a' + k].media && j.data['a' + k].media[0];
        const v = m && m.status === 'RELEASING' && m.nextAiringEpisode ? { at: m.nextAiringEpisode.airingAt * 1000, ep: m.nextAiringEpisode.episode, t: m.title.english || m.title.romaji } : null;
        out[q] = v; cache[q] = { at: Date.now(), m: v };
      });
      if (say) say(Math.min(i + 12, todo.length), todo.length);
      await sleep(700);
    }
    await store.set('airing3', cache);
    return out;
  }

  // Tell Crunchyroll an episode is finished. Uses the exact request format Crunchyroll's own player was seen
  // using (if you've played anything this session), otherwise tries the known formats and remembers what works.
  async function crMarkWatched(id, seconds, at) {
    const ph = at != null ? at : Math.max(1, Math.ceil(seconds || S.epMin * 60));   // the full length – "length − 2 s" showed as “1s left” on Crunchyroll
    if (phLearned && !state.phLearned) { state.phLearned = phLearned; store.set('phlearn3', phLearned); }
    const L = state.phLearned;
    await playheadOwner();
    const tries = [];
    if (state.phGood) tries.push(state.phGood);
    if (L) tries.push({ path: L.path, method: L.method, body: L.body });
    for (const o of [...new Set([state.phOwner, ...(state.phOwners || []), state.acc])].filter(Boolean))
      for (const q of [`?preferred_audio_language=ja-JP&locale=${LOCALE}`, `?locale=${LOCALE}`]) tries.push({ path: `/content/v2/${o}/playheads${q}`, method: 'POST', body: null });
    const errs = [];
    for (const t of tries) {
      const body = { ...(t.body || {}), content_id: id, playhead: ph };
      try {
        await api(t.path, 1, { method: t.method || 'POST', body: JSON.stringify(body) });
        state.phGood = { path: t.path, method: t.method || 'POST', body: t.body };
        return;
      } catch (e) { errs.push(e.status || e.message); }
    }
    const err = new Error(`Crunchyroll said ${[...new Set(errs)].join(' / ')}`);
    err.retry = errs.every((e) => typeof e !== 'number' || e >= 500 || e === 429);   // only outages are worth retrying
    (state.debug.markErrors = state.debug.markErrors || []).push({ errs: [...new Set(errs)], learned: !!L });
    throw err;
  }
  // Set an episode back to "not watched": remove it from your watch history, and if Crunchyroll still
  // remembers the progress, move it back to the start
  async function crUnwatch(id) {
    await playheadOwner();
    const owners = [...new Set([state.phOwner, ...(state.phOwners || []), state.acc])].filter(Boolean);
    let removed = false;
    for (const o of owners) {
      try { await api(`/content/v2/${o}/watch-history/${id}?locale=${LOCALE}`, 1, { method: 'DELETE' }); removed = true; break; } catch (_) {}
    }
    let still = !removed;
    for (const o of owners) {
      try { const j = await api(`/content/v2/${o}/playheads?content_ids=${id}&locale=${LOCALE}`, 1); still = (j.data || []).some((p) => p.content_id === id && (p.fully_watched || p.playhead > 30)); break; } catch (_) {}
    }
    if (still) { await crMarkWatched(id, 0, 0); return true; }
    return removed;
  }

  // ================================================================
  // 4. Data model
  // ================================================================
  const idOf = (it) => (it.panel && it.panel.id) || it.id || it.content_id || '';
  const hasMeta = (p) => !!(p && (p.episode_metadata || p.movie_listing_metadata || p.movie_metadata));
  function imgOf(p, key) {
    try {
      const t = p.images && p.images[key];
      const arr = Array.isArray(t[0]) ? t[0] : t;
      const pick = arr.find((x) => x.width >= 480) || arr[arr.length - 1];
      return pick.source || '';
    } catch (_) { return ''; }
  }
  function toRows(items) {
    return items.map((it) => {
      const p = hasMeta(it.panel) ? it.panel : it._obj || it.panel || {};
      const ep = p.episode_metadata || {}, mv = p.movie_listing_metadata || p.movie_metadata || {};
      const realDur = ep.duration_ms || mv.duration_ms || p.duration_ms || 0, ph = it.playhead || 0;
      const dur = realDur || (mv.movie_listing_title ? 6000000 : S.epMin * 60000);
      return {
        id: idOf(it), date: it.date_played || '', ph,
        series: ep.series_title || mv.movie_listing_title || '',
        sid: ep.series_id || mv.movie_listing_id || it._seriesId || (it.parent_type !== 'season' && it.parent_id) || p.id || idOf(it),
        seasonId: ep.season_id || it._seasonId || '', season: ep.season_title || '',
        sNo: ep.season_number ?? '', epNo: ep.episode ?? ep.episode_number ?? '', seq: ep.sequence_number ?? ep.episode_number ?? '',
        title: p.title || '', movie: /movie/i.test(p.type || '') && !p.episode_metadata,
        durMin: Math.round(dur / 60000), est: !realDur, pos: Math.round(ph / 60),
        pct: Math.min(100, Math.round((ph * 100000) / dur)) || (it.fully_watched ? 100 : 0), cr: !!it.fully_watched,
        known: hasMeta(p), thumb: imgOf(p, 'thumbnail'),
      };
    });
  }
  async function enrich(items, say) {
    const bare = items.filter((it) => !hasMeta(it.panel));
    const strip = (o) => JSON.parse(JSON.stringify(o, (k, v) => (k === 'images' ? '[images]' : v)));
    state.debug.bareBefore = (state.debug.bareBefore || 0) + bare.length;
    if (!state.debug.sampleBare && bare.length) state.debug.sampleBare = bare.slice(0, 3).map(strip);
    if (!state.debug.sampleFull) state.debug.sampleFull = strip(items.find((it) => hasMeta(it.panel)) || null);
    if (bare.length) {
      const objs = await fetchObjects([...new Set(bare.map(idOf).filter(Boolean))], say, 'Looking up episodes with missing details');
      for (const it of bare) if (objs[idOf(it)]) it._obj = objs[idOf(it)];
      // still unknown: look up the parent (season or show) so the episode lands in the right show + season
      const still = bare.filter((it) => !it._obj && it.parent_id);
      if (still.length) {
        const par = await fetchObjects([...new Set(still.map((it) => it.parent_id))], say, 'Finding the shows for removed episodes');
        for (const it of still) {
          const o = par[it.parent_id]; if (!o) continue;
          if (/season/i.test(o.type || '')) { it._seasonId = o.id; it._seriesId = o.series_id || (o.season_metadata || {}).series_id || ''; }
          else if (/series/i.test(o.type || '')) it._seriesId = o.id;
        }
      }
      state.debug.bareAfter = bare.filter((it) => !it._obj).length;
      state.debug.bareNoShow = bare.filter((it) => !it._obj && !it._seriesId && it.parent_type === 'season').length;
    }
    return items;
  }

  const STATUS = {
    watching:    { label: 'Watching',       color: '#ff8a1f' },
    newseason:   { label: 'New season out', color: '#2ee07c' },
    completed:   { label: 'Completed',      color: '#b490ff' },
    dropped:     { label: 'Dropped',        color: '#ff5470' },
    unavailable: { label: 'Removed',        color: '#7c7f8a' },
    plan:        { label: 'Plan to watch',  color: '#60a5fa' },
  };
  const WATCHED = new Set(['done', 'credit', 'marked']);
  const toSend = (e) => e && (!WATCHED.has(e.st) || e.st === 'credit');   // 'credit' = only assumed here – Crunchyroll (and your phone) doesn't know yet
  const tkey = (t) => norm(t).replace(/[^a-z0-9]/g, '');

  // one anime can have several Crunchyroll ids (dubs, re-releases) – put them together by title
  const cleanTitle = (t) => tkey(String(t || '')
    .replace(/\(([^)]*\b(dub|dubbed|sub|subbed|uncut|english|spanish|español|portuguese|português|french|français|german|deutsch|italian|italiano|russian|arabic|hindi|tamil|telugu|castilian|latin)\b[^)]*)\)/gi, '')
    .replace(/\b(english|spanish|portuguese|french|german|italian|hindi|castilian) dub\b/gi, ''));
  function canonicalIds(rows, shows) {
    const title = {}, cnt = {};
    for (const r of rows) { cnt[r.sid] = (cnt[r.sid] || 0) + 1; if (!title[r.sid]) title[r.sid] = r.series || (shows[r.sid] || {}).t || ''; }
    const best = {}, canon = {};
    for (const sid of Object.keys(cnt)) { const k = cleanTitle(title[sid]); if (!k) continue; if (!best[k] || cnt[sid] > cnt[best[k]]) best[k] = sid; }
    for (const sid of Object.keys(cnt)) { const k = cleanTitle(title[sid]); canon[sid] = (k && best[k]) || sid; }
    for (const sid of Object.keys(canon)) { let c = canon[sid], hops = 0; while (state.merges[c] && hops++ < 10) c = state.merges[c]; canon[sid] = c; }
    return canon;
  }
  function mergedInfo(sids, seasons) {
    const infos = sids.map((id) => seasons[id]).filter((x) => x && x.seasons.length);
    if (infos.length <= 1) return infos[0] || seasons[sids[0]];
    const seen = new Set(), list = [], alias = {};
    for (const inf of infos) {
      Object.assign(alias, inf.alias);
      for (const x of inf.seasons) if (!seen.has(x.id) && !(x.id in alias && alias[x.id] !== x.id && seen.has(alias[x.id]))) { seen.add(x.id); list.push(x); }
    }
    return { seasons: list, alias };
  }

  // history rows + episodes found through Crunchyroll's saved progress (deep scan / find a missing show)
  function allCrRows() {
    const have = new Set(state.rows.map((r) => r.id));
    return [...state.rows, ...Object.values(state.phRows || {}).filter((r) => !have.has(r.id))];
  }
  function buildSeries() {
    const rows = (state._cr = allCrRows()), { seasons, eps: epLists, shows, marks } = state;
    // "mark as watched" in bulk saves dozens of episodes within seconds – flag those (real watching can't)
    { const t = rows.filter((r) => r.date).map((r) => [new Date(r.date).getTime(), r]).sort((a, b) => a[0] - b[0]);
      for (const r of rows) r.bulk = false;
      for (let i = 0; i < t.length;) { let j = i; while (j + 1 < t.length && t[j + 1][0] - t[j][0] < 90000) j++; if (j - i + 1 >= 4) for (let k = i; k <= j; k++) t[k][1].bulk = true; i = j + 1; } }
    // items Crunchyroll gave no date for (worked out from "up next"): use the latest date we know for that show
    { const lastBy = {}; for (const r of rows) if (r.date && (!lastBy[r.sid] || r.date > lastBy[r.sid])) lastBy[r.sid] = r.date;
      for (const r of rows) if (!r.date && lastBy[r.sid]) { r.date = lastBy[r.sid]; r.dateGuess = true; } }
    // anything 60+ minutes is a movie: give it its own movie card (Crunchyroll often files movies inside a show)…
    // …except a long special that sits in a normal TV season (e.g. Attack on Titan's Final Chapters): it stays with
    // its show, otherwise the show can never reach 100% and "Mark complete" seems to undo itself after a refresh
    const movieSec = (S.movieMin || 60) * 60, tvEp = new Set();
    for (const L of Object.values(epLists || {})) if (L && L.some((ep) => ep.d && ep.d < movieSec)) L.forEach((ep) => ep.ids.forEach((id) => tvEp.add(id)));
    for (const r of rows) {
      const long = !r.est && r.durMin >= (S.movieMin || 60) && !tvEp.has(r.id);
      if (long && !r.mvFrom && !String(r.sid).startsWith('mv:')) {
        r.mvFrom = { sid: r.sid, series: r.series, movie: r.movie };
        r.sid = 'mv:' + r.id; r.movie = true;
        const t = (r.title || '').trim(), generic = !t || /^(episode|movie|film|part)?\s*\d*$/i.test(t);
        r.series = generic ? r.season || r.series : r.series && norm(r.series).includes(norm(t)) ? r.series : t;
      } else if (!long && r.mvFrom) { r.sid = r.mvFrom.sid; r.series = r.mvFrom.series; r.movie = r.mvFrom.movie; delete r.mvFrom; }
    }
    const canon = canonicalIds(rows, shows), members = {};
    const map = new Map();
    for (const r of rows) {
      if (r.est) r.durMin = r.movie ? r.durMin : S.epMin;
      r.dup = false;
      r._sid = canon[r.sid] || r.sid;
      (members[r._sid] = members[r._sid] || new Set()).add(r.sid);
      let s = map.get(r._sid);
      if (!s) { s = { sid: r._sid, eps: [], last: '', first: '', title: '', movie: false, known: false }; map.set(r._sid, s); }
      s.eps.push(r);
      if (r.series && !s.title) s.title = r.series;
      if (r.movie) s.movie = true;
      if (r.known) s.known = true;
      if (!s.last || r.date > s.last) { s.last = r.date; s.lastEp = r; }
      if (!s.first || r.date < s.first) { s.first = r.date; s.firstEp = r; }
      if (r.date && !r.bulk && (!s.lastReal || r.date > s.lastReal)) s.lastReal = r.date;
    }
    noteFirst(rows);
    // marking a whole show at once isn't watching it: keep "last watched" on when you really watched (if known)
    for (const s of map.values()) if (s.lastReal && s.lastReal < s.last) s.last = s.lastReal;
    const now = Date.now(), out = [];
    const byDays = (d) => (d <= S.dropDays ? 'watching' : 'dropped');
    for (const s of map.values()) {
      const ids = [s.sid, ...[...(members[s.sid] || [])].filter((x) => x !== s.sid)];
      const info = mergedInfo(ids, seasons), show = shows[s.sid] || shows[ids.find((x) => shows[x])] || {};
      const title = (shows[s.sid] || {}).t || s.eps.map((e) => e.series).filter(Boolean).sort((a, b) => a.length - b.length)[0] || show.t || '';
      const days = (now - new Date(s.last).getTime()) / DAY;
      const meta = state.meta[s.sid] || {};
      const base = { sid: s.sid, svc: 'crunchyroll', title: title || 'Unavailable title', movie: s.movie, last: s.last, first: s.first, days, count: s.eps.length,
        thumb: show.img || s.lastEp.thumb || (s.eps.find((e) => e.thumb) || {}).thumb || '', genres: show.g || [],
        years: new Set(s.eps.map((e) => e.date && new Date(e.date).getFullYear()).filter(Boolean)),
        rating: meta.r || 0, note: meta.n || '', fav: !!meta.fav, tags: meta.tags || [], members: ids,
        others: [], hidden: !!state.hidden[s.sid], fresh: state.newEps[s.sid] || null, eps: s.eps, left: 0,
        url: s.movie ? `https://www.crunchyroll.com/watch/${s.lastEp.id}` : `https://www.crunchyroll.com/series/${s.sid}` };
      const minutesOf = (list) => list.reduce((a, e) => a + (e.dup ? 0 : e.done ? e.durMin : e.durMin * Math.min(1, e.pct / 100)), 0);

      if (!s.known && !title) {
        s.eps.forEach((e) => { e.done = e.cr || e.pct >= S.donePct; e.min = e.done ? e.durMin : e.durMin * e.pct / 100; });
        out.push({ ...base, status: 'unavailable', seasons: [], req: [], total: 0, done: s.eps.filter((e) => e.done).length, lastEp: s.lastEp, mid: null, minutes: minutesOf(s.eps), noSeasons: true });
        continue;
      }
      if (s.movie) {
        s.eps.forEach((e) => { e.done = e.cr || e.pct >= S.donePct || !!marks[e.id]; e.min = e.done ? e.durMin : e.durMin * e.pct / 100; });
        const ok = s.eps.some((e) => e.done);
        out.push({ ...base, status: ok ? 'completed' : byDays(days), seasons: [], req: [], total: 1, done: ok ? 1 : 0, lastEp: s.lastEp, mid: ok ? null : s.lastEp,
          minutes: minutesOf(s.eps), left: ok ? 0 : s.lastEp.durMin * (1 - s.lastEp.pct / 100) });
        continue;
      }

      const ss = info && info.seasons.length ? info.seasons : [];
      const canonOf = (e) => (info && info.alias[e.seasonId]) || e.seasonId;
      const where = new Map();
      ss.forEach((x, si) => { (epLists[x.id] || []).forEach((ep, ei) => ep.ids.forEach((id) => where.set(id, [si, ei]))); });
      for (const e of s.eps) {
        let w = where.get(e.id);
        e._exact = !!w;
        if (!w) {
          const si = ss.findIndex((x) => x.id === canonOf(e));
          if (si >= 0) { const L = epLists[ss[si].id]; w = [si, L ? L.findIndex((ep) => ep.l === String(e.epNo)) : -1]; }
          else w = [-1, -1];
        }
        e._si = w[0]; e._ei = w[1];
        e._ord = (w[0] + 1) * 100000 + (w[1] >= 0 ? w[1] : Number(e.seq) || Number(e.epNo) || 0);
      }
      let laterOrd = -Infinity;
      for (const e of s.eps.slice().sort((a, b) => b._ord - a._ord)) {
        e.done = e.cr || e.pct >= S.donePct || laterOrd > e._ord;
        e.how = e.cr || e.pct >= S.donePct ? 'done' : e.done ? 'credit' : 'partial';
        e.min = e.done ? e.durMin : e.durMin * Math.min(1, e.pct / 100);
        if (e.pct > 0 || e.cr) laterOrd = Math.max(laterOrd, e._ord);
      }
      // the same episode in other languages has its own ID. Watching it again in another language is a real rewatch
      // and counts – but copies saved together (bulk "mark as watched", or within one episode's length) count once
      const slot = new Map();
      for (const e of s.eps) {
        const k = e._si < 0 ? null : e._ei >= 0 ? `${e._si}:${e._ei}` : e.epNo !== '' && e.epNo != null ? `${e._si}:n${e.epNo}` : null;
        if (k) (slot.get(k) || slot.set(k, []).get(k)).push(e);
      }
      for (const list of slot.values()) {
        if (list.length < 2) continue;
        list.sort((a, b) => (b.done - a.done) || (b.pct - a.pct) || String(a.date).localeCompare(String(b.date)));
        const kept = [list[0]];
        for (const e of list.slice(1)) {
          const t = new Date(e.date).getTime();
          const copy = !e.date || kept.some((k) => (e.bulk && k.bulk) || Math.abs(new Date(k.date).getTime() - t) < (k.durMin || S.epMin) * 60000);
          if (copy) e.dup = true; else kept.push(e);
        }
      }
      let markedMinutes = 0, seasonsOut;
      if (ss.length) {
        seasonsOut = ss.map((x, si) => {
          const L = epLists[x.id], mine = s.eps.filter((e) => e._si === si);
          const byIdx = new Map(), loose = [];
          for (const e of mine) {
            if (e._ei < 0) { loose.push(e); continue; }
            const p = byIdx.get(e._ei);
            if (!p || (e.done && !p.done) || e.pct > p.pct) byIdx.set(e._ei, e);
          }
          let list = null, w, left;
          if (L) {
            list = L.map((ep, i) => {
              const r = byIdx.get(i), mk = !!marks[ep.ids[0]];
              const st = r && r.done ? r.how : mk ? 'marked' : r ? 'partial' : 'none';
              if (st === 'marked') markedMinutes += (ep.d || S.epMin * 60) / 60;
              return { id: ep.ids[0], ids: ep.ids, show: s.sid, season: x.id, l: ep.l, t: ep.t, d: ep.d, st, pct: r ? r.pct : 0, mk };
            });
            w = Math.min(list.length, list.filter((e) => WATCHED.has(e.st)).length + loose.filter((e) => e.done).length);
            left = list.filter((e) => !WATCHED.has(e.st)).reduce((a, e) => a + ((e.d || S.epMin * 60) / 60) * (1 - e.pct / 100), 0);
          } else { w = mine.filter((e) => e.done).length; if (x.n) w = Math.min(w, x.n); left = Math.max(0, x.n - w) * S.epMin; }
          const n = L ? L.length : x.n;
          const mv = !!L && L.length > 0 && L.every((ep) => ep.d >= (S.movieMin || 60) * 60);   // a "season" that's really movies
          const started = mine.length > 0 || (!!list && list.some((e) => e.mk));
          const complete = n > 0 ? w >= n : mine.length > 0 && mine.every((e) => e.done);
          const hi = list ? list.reduce((m, e, i) => (WATCHED.has(e.st) ? i : m), -1) : -1;
          const gaps = list ? list.filter((e, i) => i < hi && !WATCHED.has(e.st)).map((e) => e.l) : [];
          const nx = list ? list.find((e, i) => i > hi && !WATCHED.has(e.st)) || list.find((e) => !WATCHED.has(e.st)) : null;
          return { id: x.id, t: x.t, extra: x.x || mv, mv, n, w, started, complete, gaps, next: nx ? nx.l : null, nextEp: nx || null, list, left: complete ? 0 : left };
        });
      } else {
        const d = s.eps.filter((e) => e.done).length;
        seasonsOut = [{ id: '', t: title, extra: false, n: 0, w: d, started: true, complete: !!state.showMarks[s.sid], gaps: [], next: null, list: null, left: 0, unknownTotal: true }];
      }
      const first = seasonsOut.findIndex((x) => x.started);
      const notOut = (x) => !x.started && !!x.list && x.list.length === 0;   // announced, no episodes yet
      const req = seasonsOut.slice(Math.max(0, first)).filter((x) => (!x.extra || x.started) && !notOut(x));
      let lastStarted = -1;
      req.forEach((x, i) => { if (x.started) lastStarted = i; });
      let status, newSeason = null;
      if (!ss.length) status = state.showMarks[s.sid] ? 'completed' : byDays(days);
      else if (req.every((x) => x.complete)) status = 'completed';
      else if (req.slice(0, lastStarted + 1).every((x) => x.complete)) { status = 'newseason'; newSeason = req[lastStarted + 1]; }
      else status = byDays(days);
      // watched episodes that fit no season – counted so the Library check can list them
      const unplaced = ss.length ? s.eps.filter((e) => e._si < 0).length : 0;
      // (they no longer stop a fully watched show from being Completed – often they're dub copies with their own IDs.
      //  The Library check lists them as "N eps not matched" so they can be reviewed.)
      const current = req.find((x) => x.started && !x.complete) || null;
      const mid = !s.lastEp.done && s.lastEp.pct > 0 ? s.lastEp : null;
      out.push({ ...base, status, seasons: seasonsOut, req, newSeason, current, mid, lastEp: s.lastEp,
        nextEp: current ? current.nextEp : newSeason && newSeason.list ? newSeason.list[0] : null,
        total: req.reduce((a, x) => a + x.n, 0), done: req.reduce((a, x) => a + x.w, 0), left: req.reduce((a, x) => a + (x.left || 0), 0),
        seasonsDone: seasonsOut.filter((x) => x.complete && !x.extra).length, seasonsTotal: seasonsOut.filter((x) => !x.extra && !notOut(x)).length,
        minutes: minutesOf(s.eps) + markedMinutes, noSeasons: !ss.length, unplaced, manual: !ss.length && !!state.showMarks[s.sid] });
    }

    // ---- other services (Netflix, Disney+, Prime, …) ----
    const byTitle = new Map(out.map((s) => [tkey(s.title), s]));
    state.extRows = [];
    for (const x of state.external) {
      const eps = x.eps || [], count = Math.max(x.count || 0, eps.length), epMin = x.epMin || (x.movie ? 100 : S.epMin);
      const minutes = count * epMin;
      const dates = eps.map((e) => e.date).filter(Boolean).sort();
      const last = dates[dates.length - 1] || x.date || new Date(x.at || now).toISOString(), firstD = dates[0] || last;
      const match = byTitle.get(tkey(x.title));
      const sid = match ? match.sid : 'ext:' + x.id;
      if (dates.length) eps.forEach((e) => e.date && state.extRows.push({ date: e.date, sid, min: epMin, done: true, ext: true, movie: !!x.movie }));
      else for (let i = 0; i < count; i++) state.extRows.push({ date: last, sid, min: epMin, done: true, ext: true, movie: !!x.movie });
      if (match) {
        match.others.push({ svc: x.svc, count, minutes, id: x.id });
        match.minutes += minutes;
        match.years = new Set([...match.years, ...dates.map((d) => new Date(d).getFullYear())]);
        continue;
      }
      const days = (now - new Date(last).getTime()) / DAY, meta = state.meta[sid] || {};
      const status = x.status || (x.total && count >= x.total ? 'completed' : days <= 30 ? 'watching' : 'completed');
      out.push({ sid, extId: x.id, ext: true, svc: x.svc, title: x.title, movie: !!x.movie, status, total: x.total || 0, done: count, count,
        last, first: firstD, days, minutes, thumb: '', url: '', seasons: [], req: [], eps: [], extList: eps, genres: [], others: [],
        left: x.total && status !== 'completed' ? Math.max(0, x.total - count) * epMin : 0,
        years: new Set((dates.length ? dates : [last]).map((d) => new Date(d).getFullYear())),
        rating: meta.r || 0, note: meta.n || '', fav: !!meta.fav, tags: meta.tags || [], members: [sid], hidden: !!state.hidden[sid], fresh: null, epMin });
    }
    // ---- Plan to watch: shows on your Crunchyroll watchlist (or added by you) that you haven't started ----
    const have = new Set(out.flatMap((s) => s.members || [s.sid])), haveT = new Set(out.map((s) => tkey(s.title)));
    const plans = [...(state.watchlist || []).map((w) => ({ ...w, src: 'watchlist' })), ...Object.entries(state.plan || {}).map(([sid, p]) => ({ sid, ...p, src: 'you' }))];
    const seenPlan = new Set();
    for (const p of plans) {
      if (!p.sid || have.has(p.sid) || seenPlan.has(p.sid) || haveT.has(tkey(p.t || ''))) continue;
      seenPlan.add(p.sid);
      const show = shows[p.sid] || {}, meta = state.meta[p.sid] || {};
      out.push({ sid: p.sid, plan: true, planSrc: p.src, svc: 'crunchyroll', title: p.t || show.t || 'Untitled', movie: false, status: 'plan', total: 0, done: 0, count: 0,
        last: '', first: '', days: 0, minutes: 0, left: 0, thumb: p.img || show.img || '', genres: p.g || show.g || [], seasons: [], req: [], eps: [], others: [],
        years: new Set(), rating: meta.r || 0, note: meta.n || '', fav: !!meta.fav, tags: meta.tags || [], members: [p.sid], hidden: !!state.hidden[p.sid], fresh: null,
        url: `https://www.crunchyroll.com/series/${p.sid}` });
    }
    // airing countdowns
    for (const s of out) s.airing = (state.airing || {})[s.sid] || null;
    // shows you dropped yourself (✕ Drop) – a show you finish anyway still counts as Completed
    for (const s of out) if ((state.meta[s.sid] || {}).drop && s.status !== 'completed' && s.status !== 'unavailable') { s.status = 'dropped'; s.droppedByYou = true; }
    state.series = out;
    state.lookIds = null;
    state.byId = new Map(out.map((s) => [s.sid, s]));
    computeTotals();
  }

  function allRows() {
    const hidden = state.hidden;
    return [...(state._cr || state.rows).filter((r) => !r.dup).map((r) => (r._sid && r._sid !== r.sid ? { ...r, sid: r._sid } : r)).filter((r) => !hidden[r.sid]), ...state.extRows.filter((r) => !hidden[r.sid])];
  }
  function computeTotals() {
    const all = state.series.filter((s) => !s.hidden && !s.plan), shows = all.filter((s) => !s.movie && s.status !== 'unavailable');
    const R = allRows();
    const minutes = all.reduce((a, s) => a + s.minutes, 0);
    const years = {};
    for (const r of R) {
      if (!r.date) continue;
      const y = new Date(r.date).getFullYear();
      const Y = years[y] || (years[y] = { y, eps: 0, min: 0, shows: {} });
      Y.eps++; Y.min += r.min || 0;
      Y.shows[r.sid] = (Y.shows[r.sid] || 0) + (r.min || 0);
    }
    const yearList = Object.values(years).sort((a, b) => a.y - b.y).map((Y, i) => {
      const top = Object.entries(Y.shows).sort((a, b) => b[1] - a[1])[0];
      return { y: Y.y, n: i + 1, eps: Y.eps, hours: Math.round(Y.min / 60), top: top ? (state.byId.get(top[0]) || {}).title : '' };
    });
    let firstRow = [...(state._cr || []).filter((r) => !r.dateGuess && !state.hidden[r._sid || r.sid]), ...state.extRows].reduce((m, r) => (r.date && (!m || r.date < m.date) ? r : m), null);
    const fb = Object.entries(state.firstBy || {}).filter(([k]) => !state.hidden[k]).reduce((m, [k, v]) => (!m || v.d < m.date ? { date: v.d, _sid: k, sid: k, series: v.t } : m), null);
    if (fb && (!firstRow || fb.date < firstRow.date)) firstRow = fb;   // earliest date ever seen, even if Crunchyroll has since overwritten it
    const recent = R.filter((r) => r.date && Date.now() - new Date(r.date).getTime() < 30 * DAY).reduce((a, r) => a + (r.min || 0), 0);
    const backlogShows = all.filter((s) => s.status === 'watching' || s.status === 'newseason');
    state.totals = {
      minutes, days: minutes / 1440, hours: Math.round(minutes / 60),
      history: (state._cr || state.rows).filter((r) => !r.movie).length, watched: R.filter((r) => r.done && !r.movie).length,
      completed: shows.filter((s) => s.status === 'completed').length,
      seasons: shows.reduce((a, s) => a + (s.seasonsDone || (s.ext && s.status === 'completed' ? 1 : 0)), 0),
      watching: shows.filter((s) => s.status === 'watching').length,
      newseason: shows.filter((s) => s.status === 'newseason').length,
      dropped: shows.filter((s) => s.status === 'dropped').length,
      movies: all.filter((s) => s.movie && s.status === 'completed').length,
      years: yearList,
      first: firstRow ? { date: firstRow.date, title: (state.byId.get(firstRow._sid || firstRow.sid) || {}).title || firstRow.series || '', ep: firstRow } : null,
      top: all.filter((s) => s.status !== 'unavailable').slice().sort((a, b) => b.minutes - a.minutes).slice(0, 5),
      backlog: backlogShows.reduce((a, s) => a + (s.left || 0), 0), pace: recent / 30,
      services: Object.keys(SERVICES).map((k) => ({ k, n: all.filter((s) => s.svc === k || (s.others || []).some((o) => o.svc === k)).length })).filter((x) => x.n),
      hiddenCount: state.series.filter((s) => s.hidden).length,
    };
  }

  function insights() {
    const R = allRows().filter((r) => r.date), now = new Date();
    const months = [];
    for (let i = 23; i >= 0; i--) { const d = new Date(now.getFullYear(), now.getMonth() - i, 1); months.push({ k: `${d.getFullYear()}-${d.getMonth()}`, d, min: 0, eps: 0 }); }
    const mIdx = new Map(months.map((m, i) => [m.k, i]));
    const heat = Array.from({ length: 7 }, () => new Array(24).fill(0));
    const bulk = new Set(R.filter((r) => r.bulk));   // bulk "mark as watched" isn't real watching – left out of day records
    const days = new Map(), binge = new Map();
    for (const r of R) {
      const d = new Date(r.date), mk = `${d.getFullYear()}-${d.getMonth()}`;
      if (mIdx.has(mk)) { const m = months[mIdx.get(mk)]; m.min += r.min || 0; m.eps++; }
      if (!r.ext && !bulk.has(r)) heat[(d.getDay() + 6) % 7][d.getHours()]++;
      const dk = `${d.getFullYear()}-${p2(d.getMonth() + 1)}-${p2(d.getDate())}`;
      const D = days.get(dk) || { k: dk, eps: 0, min: 0 }; days.set(dk, D);
      if (bulk.has(r)) continue;
      D.eps++; D.min += r.min || 0;
      const bk = dk + '|' + r.sid; binge.set(bk, (binge.get(bk) || 0) + 1);
    }
    const keys = [...days.keys()].sort();
    let best = 0, run = 0, prev = null;
    for (const k of keys) { const t = new Date(k + 'T12:00:00').getTime(); run = prev && Math.round((t - prev) / DAY) === 1 ? run + 1 : 1; best = Math.max(best, run); prev = t; }
    let cur = 0;
    { const set = new Set(keys); const d = new Date(); const key = (x) => `${x.getFullYear()}-${p2(x.getMonth() + 1)}-${p2(x.getDate())}`;
      if (!set.has(key(d))) d.setDate(d.getDate() - 1);
      while (set.has(key(d))) { cur++; d.setDate(d.getDate() - 1); } }
    const bigDay = [...days.values()].filter((d) => d.eps).sort((a, b) => b.min - a.min)[0] || null;
    const bb = [...binge.entries()].sort((a, b) => b[1] - a[1])[0];
    const genres = {};
    for (const s of state.series) if (!s.hidden) for (const g of s.genres || []) genres[g] = (genres[g] || 0) + s.minutes;
    const svc = {};
    for (const r of R) { const s = state.byId.get(r.sid); const k = r.ext ? ((s && s.svc !== 'crunchyroll' ? s.svc : (s && s.others[0] || {}).svc) || 'other') : 'crunchyroll'; svc[k] = (svc[k] || 0) + (r.min || 0); }
    return {
      months, heat, best, cur, activeDays: days.size, bigDay, bulk: bulk.size,
      binge: bb ? { n: bb[1], date: bb[0].split('|')[0], title: (state.byId.get(bb[0].split('|')[1]) || {}).title || '' } : null,
      genres: Object.entries(genres).sort((a, b) => b[1] - a[1]).slice(0, 10),
      svc: Object.entries(svc).sort((a, b) => b[1] - a[1]),
      avgDay: keys.length ? R.reduce((a, r) => a + (r.min || 0), 0) / Math.max(1, (Date.now() - new Date(keys[0]).getTime()) / DAY) : 0,
    };
  }

  // ================================================================
  // 5. State, loading, syncing
  // ================================================================
  const state = { lang: {}, markAs: {}, series: [], rows: [], phRows: {}, verified: {}, check: { running: false, done: 0, total: 0, found: 0, at: 0 }, extRows: [], seasons: {}, eps: {}, shows: {}, marks: {}, showMarks: {}, hidden: {}, meta: {}, external: [], newEps: {}, merges: {}, friend: null,
    epAdds: {}, retried: {}, at: 0, acc: null, created: null, name: '', seenVer: null,
    view: 'library', filter: 'all', genre: '', year: null, q: '', sort: 'recent', selecting: false, sel: new Set(),
    busy: false, debug: {}, totals: null, byId: new Map(), open: null, prefsLoaded: false };

  async function loadPrefs() {
    if (state.prefsLoaded) return;
    Object.assign(S, (await store.get('settings3')) || {});
    state.marks = (await store.get('marks3')) || {};
    state.showMarks = (await store.get('showmarks3')) || {};
    state.hidden = (await store.get('hidden3')) || {};
    state.meta = (await store.get('meta3')) || {};
    state.external = (await store.get('external3')) || [];
    state.newEps = (await store.get('neweps3')) || {};
    state.merges = (await store.get('merges3')) || {};
    state.phRows = (await store.get('phrows3')) || {};
    state.markAs = (await store.get('markas3')) || {};
    state.firstBy = (await store.get('first3')) || null;
    state.queue = (await store.get('queue3')) || [];
    state.watchlist = (await store.get('watchlist3')) || [];
    state.plan = (await store.get('plan3')) || {};
    state.phLearned = (await store.get('phlearn3')) || null;
    state.airing = (await store.get('airingmap3')) || {};
    state.verified = (await store.get('verified3')) || {};
    state.lookOk = (await store.get('lookok3')) || {};
    state.check = { ...state.check, ...((await store.get('check3')) || {}), running: false };
    state.seenVer = (await store.get('seenver3')) || null;
    await loadProfile();
    state.lang = (await store.get('lang3')) || {};
    state.prefsLoaded = true;
  }
  const savePrefs = () => Promise.all([
    store.set('settings3', { ...S }), store.set('marks3', state.marks), store.set('markas3', state.markAs), store.set('showmarks3', state.showMarks), store.set('hidden3', state.hidden),
    store.set('meta3', state.meta), store.set('external3', state.external), store.set('neweps3', state.newEps), store.set('merges3', state.merges), store.set('lookok3', state.lookOk || {}), store.set('plan3', state.plan || {})]);

  async function loadCache() {
    await loadPrefs();
    const c = await store.get('history3');
    if (c && c.rows) {
      Object.assign(state, { rows: c.rows, at: c.at, acc: c.acc, created: c.created, name: c.name || '', pages: c.pages, needFull: (c.schema || 1) < 2 });
      state.seasons = Object.fromEntries(Object.entries((await store.get('seasons5')) || {}).map(([k, v]) => [k, v.s]));
      state.eps = Object.fromEntries(Object.entries((await store.get('episodes3')) || {}).map(([k, v]) => [k, v.e]));
      state.lang = (await store.get('lang3')) || {};
      state.shows = (await store.get('shows3')) || {};
    }
    if (!state.firstBy) { state.firstBy = {}; const old = await store.get('history'); if (old && Array.isArray(old.rows)) noteFirst(old.rows); }   // seed from the pre-1.6 copy
    if (!state.rows.length && !state.external.length) return false;
    buildSeries();
    return !!state.rows.length;
  }
  // the earliest date ever seen per show. Crunchyroll keeps only the LATEST date per episode, so marking an old show
  // as watched again would otherwise wipe out when you really watched it (and change your "First anime")
  function noteFirst(rows) {
    const F = state.firstBy || (state.firstBy = {}); let ch = false;
    for (const r of rows) {
      if (!r || !r.date || r.dateGuess || r.inferred || r.bulk) continue;
      const k = r._sid || r.sid; if (!k) continue;
      if (!F[k] || r.date < F[k].d) { F[k] = { d: r.date, t: r.series || r.title || '' }; ch = true; }
    }
    if (ch) store.set('first3', F);
  }
  async function saveHistory() {
    await store.set('history3', { v: VERSION, schema: 2, at: state.at, acc: state.acc, created: state.created, name: state.name, pages: state.pages,
      rows: state.rows.map(({ done, how, min, _si, _ei, _ord, ...r }) => r) });
  }
  // progress the Crunchyroll player saved while you watched – applied instantly, before Crunchyroll's history catches up
  function applyLive() {
    if (!livePH.size) return false;
    const byId = new Map(state.rows.map((r) => [r.id, r])); let n = 0;
    for (const [id, v] of livePH) {
      if (Date.now() - v.at > DAY) { livePH.delete(id); continue; }
      const r = byId.get(id) || (state.phRows || {})[id]; if (!r) continue;
      const t = new Date(r.date).getTime() || 0; if (v.at <= t && r.ph >= v.ph) continue;
      const durS = (r.durMin || S.epMin) * 60;
      r.ph = Math.max(r.ph || 0, v.ph); r.pos = Math.round(r.ph / 60); r.pct = Math.min(100, Math.round((r.ph * 100) / durS));
      if (r.pct >= S.donePct) r.cr = true;
      r.date = new Date(v.at).toISOString(); n++;
    }
    return n > 0;
  }
  function refresh() { buildSeries(); render(); if (state.open) openDrawer(state.open, true); }

  async function load(mode) {
    if (state.busy) return;
    state.busy = true;
    state.epAdds = {};
    const quiet = mode === 'quiet';
    const say = (t) => { if (quiet) { setSyncLabel('Syncing…', true); return; } setSyncLabel(t, true); if (!state.series.length && ui.grid) ui.grid.replaceChildren(loader(t)); };
    try {
      await loadPrefs();
      say('Waiting for your login…');
      if (!(await waitForToken())) throw new Error("Couldn't find your login. Make sure you're signed in, then reload (F5).");
      const me = await api('/accounts/v1/me');
      if (!me.account_id) throw new Error("Couldn't read your account.");
      state.acc = me.account_id; state.created = me.created || state.created;
      if (!state.name) { try { const p = await api('/accounts/v1/me/profile', 0); state.name = p.profile_name || p.username || ''; } catch (_) {} }

      const full = mode === 'full' || !state.rows.length;
      let rows;
      if (full) {
        state.debug = { version: VERSION };
        const { items, pages } = await fetchHistory(state.acc, say, null);
        state.pages = pages;
        rows = toRows(await enrich(items, say));
      } else {
        const known = new Map(state.rows.map((r) => [r.id, { date: r.date, ph: r.ph }]));
        const { items } = await fetchHistory(state.acc, say, known);
        const fresh = toRows(await enrich(items, say));
        const freshIds = new Set(fresh.map((r) => r.id));
        rows = [...fresh, ...state.rows.filter((r) => !freshIds.has(r.id))];
        // show what you just watched straight away – the slower season checks carry on in the background
        if (fresh.length && fresh.every((r) => r.movie || state.seasons[r.sid])) {
          state.rows = rows; applyLive(); buildSeries(); render(); if (state.open) openDrawer(state.open, true);
          setSyncLabel('Checking seasons…', true);
        }
      }
      const before = new Map(state.rows.map((r) => [r.id, r.ph]));
      const changed = state.rows.length ? rows.filter((r) => before.get(r.id) !== r.ph).length : 0;

      const sids = [...new Set(rows.map((r) => r.sid).filter(Boolean))];
      const movieIds = new Set(rows.filter((r) => r.movie).map((r) => r.sid));
      state.shows = await fetchShowInfo(sids, quiet ? null : say, mode === 'full');
      state.seasons = await fetchSeasons(sids.filter((id) => !movieIds.has(id)), quiet ? null : say, mode === 'full');
      const started = new Set(), latest = new Set();
      for (const r of rows) {
        const info = state.seasons[r.sid];
        if (!info || !info.seasons.length) continue;
        const c = info.alias[r.seasonId] || r.seasonId;
        if (info.seasons.some((x) => x.id === c)) started.add(c);
        if (!state.hidden[r.sid] && r.date && Date.now() - new Date(r.date).getTime() < 45 * DAY) latest.add(info.seasons[info.seasons.length - 1].id);   // only shows you're into right now
      }
      // episodes we couldn't place in a season: get every season of that show and match them by episode id
      for (const sid of new Set(rows.filter((r) => !r.seasonId && !r.movie).map((r) => r.sid))) {
        const info = state.seasons[sid];
        if (info) info.seasons.forEach((x) => started.add(x.id));
      }
      state.eps = { ...state.eps, ...(await fetchEpisodeLists([...started], latest, quiet ? null : say, mode === 'full')) };

      const watchedIds = new Set(rows.filter((r) => r.cr || r.pct >= S.donePct).map((r) => r.id));
      for (const id of Object.keys(state.marks)) if (watchedIds.has(id)) delete state.marks[id];

      state.rows = rows; state.at = Date.now();
      // shows on your watchlist that the history list doesn't have: ask Crunchyroll for your progress
      const wl = await fetchWatchlist();
      if (full) {
        const inHist = new Set(rows.map((r) => r.sid));
        const missing = wl.filter((id) => !inHist.has(id));
        if (missing.length) await deepScan(missing, say);
      }
      buildSeries();
      if (full) setTimeout(() => checkLibrary(true), 1500);
      if (S.airing) setTimeout(() => refreshAiring(), 2500);
      // new episode alerts: a season you'd caught up on got more episodes
      const alerts = [];
      for (const s of state.series) {
        if (s.hidden || s.status === 'dropped') continue;
        for (const x of s.seasons || []) {
          const n = state.epAdds[x.id];
          if (n && x.started) { state.newEps[s.sid] = { t: x.t, n: (state.newEps[s.sid] && state.newEps[s.sid].t === x.t ? state.newEps[s.sid].n : 0) + n, at: Date.now() }; alerts.push(s.title); }
        }
      }
      for (const [sid, v] of Object.entries(state.newEps)) {
        const s = state.byId.get(sid);
        if (!s || Date.now() - v.at > 14 * DAY || (s.current == null && s.status !== 'watching')) delete state.newEps[sid];
      }
      buildSeries();
      await savePrefs();
      Object.assign(state.debug, { history: rows.length, pages: state.pages, shows: state.series.length,
        unavailable: state.series.filter((s) => s.status === 'unavailable').length });
      await saveHistory();
      render(); if (state.open) openDrawer(state.open, true);
      if (alerts.length) toast(`New episodes: ${alerts.slice(0, 3).join(', ')}${alerts.length > 3 ? ` +${alerts.length - 3} more` : ''}`, 'ok');
      if (alerts.length) notifyNew(alerts);
      if (full) { state.needFull = false; toast(`Read all ${plural(rows.length, 'episode')} of your history`, 'ok'); }
      else if (changed && quiet) toast(`Picked up ${plural(changed, 'episode')} you watched elsewhere`, 'ok');
      else if (changed) toast(`Synced · ${plural(changed, 'update')} since last time`, 'ok');
      else if (!quiet && !alerts.length) toast('Up to date', 'ok');
      setBadge(quiet ? changed + alerts.length : 0);
      snapshot('Automatic daily snapshot');
      if ((state.queue || []).length) retryQueue();
    } catch (e) {
      console.error('[CR History Export]', e);
      if (!quiet) { toast('Error: ' + e.message, 'bad'); if (!state.series.length && ui.grid) ui.grid.replaceChildren(h('div', { class: 'cx-empty' }, 'Error: ' + e.message)); }
    } finally { state.busy = false; setSyncLabel(); }
  }

  // Ask Crunchyroll how far you got in every episode of these shows – catches anything the history list lost
  async function deepScan(sids, say) {
    sids = [...new Set(sids)].filter((x) => x && !String(x).startsWith('ext:'));
    if (!sids.length) return 0;
    Object.assign(state.shows, await fetchShowInfo(sids, say, false));
    const seasons = await fetchSeasons(sids, say, false);
    for (const [k, v] of Object.entries(seasons)) if (v) state.seasons[k] = v;
    const sIds = sids.flatMap((sid) => (seasons[sid] ? seasons[sid].seasons.map((x) => x.id) : []));
    Object.assign(state.eps, await fetchEpisodeLists(sIds, new Set(), say, false));
    const have = new Set(state.rows.map((r) => r.id)), meta = new Map();
    for (const sid of sids) {
      const info = seasons[sid]; if (!info) continue;
      info.seasons.forEach((x, si) => (state.eps[x.id] || []).forEach((ep) => {
        if (ep.ids.some((id) => have.has(id))) return;               // already in your history
        ep.ids.forEach((id) => meta.set(id, { sid, x, si, ep }));
      }));
    }
    const ph = await fetchPlayheads([...meta.keys()], say);
    let added = 0;
    const seenEp = new Set();
    // shows where Crunchyroll gave no per-episode progress: use where it says you're up to
    const hit = new Set(Object.keys(ph).map((id) => meta.get(id) && meta.get(id).sid).filter(Boolean));
    for (const sid of sids) {
      if (hit.has(sid) || !seasons[sid]) continue;
      const un = await fetchUpNext(sid);
      if (!un || un.never_watched) continue;
      const pid = (un.panel || un).id;
      const order = [];
      seasons[sid].seasons.forEach((x, si) => (state.eps[x.id] || []).forEach((ep) => order.push({ x, si, ep })));
      const at = order.findIndex((o) => o.ep.ids.includes(pid));
      if (at < 0) continue;
      order.slice(0, at).forEach((o) => { if (!o.ep.ids.some((i) => have.has(i))) ph[o.ep.ids[0]] = { content_id: o.ep.ids[0], playhead: o.ep.d || S.epMin * 60, fully_watched: true, inferred: true }; });
      if (un.playhead > 0) ph[pid] = { content_id: pid, playhead: un.playhead, fully_watched: !!un.fully_watched };
      (state.debug.upNext = state.debug.upNext || {})[sid] = at;
    }
    for (const [id, p] of Object.entries(ph)) {
      if (!(p.playhead > 0) && !p.fully_watched) continue;
      const m = meta.get(id); if (!m) continue;
      const key = m.ep.ids[0]; if (seenEp.has(key)) continue; seenEp.add(key);
      const durS = m.ep.d || S.epMin * 60, prev = state.phRows[id];
      state.phRows[id] = { id, date: p.last_modified || p.date_played || (prev && prev.date) || '', ph: p.playhead || 0, inferred: !!p.inferred,
        series: (state.shows[m.sid] || {}).t || '', sid: m.sid, seasonId: m.x.id, season: m.x.t, sNo: m.si + 1, epNo: m.ep.l, seq: m.ep.l,
        title: m.ep.t, movie: false, durMin: Math.round(durS / 60), est: !m.ep.d, pos: Math.round((p.playhead || 0) / 60),
        pct: Math.min(100, Math.round(((p.playhead || 0) * 100) / durS)) || (p.fully_watched ? 100 : 0), cr: !!p.fully_watched, known: true, thumb: '', src: 'playhead' };
      if (!prev) added++;
    }
    await store.set('phrows3', state.phRows);
    state.debug.deepScan = { shows: sids.length, episodesChecked: meta.size, found: added };
    state.lastDiag = sids.slice(0, 5).map((sid) => ({ sid, title: (state.shows[sid] || {}).t || '', seasons: (seasons[sid] ? seasons[sid].seasons : []).map((x) => ({ t: x.t, n: x.n, list: (state.eps[x.id] || []).length })),
      historyEpisodes: state.rows.filter((r) => r.sid === sid).length, found: Object.values(state.phRows).filter((r) => r.sid === sid).length, upNextIndex: state.debug.upNext && state.debug.upNext[sid] }));
    state.lastDiag.playheads = state.debug.playheads;
    const now = Date.now(); for (const sid of sids) state.verified[sid] = now;
    await store.set('verified3', state.verified);
    return added;
  }

  // ---- Library check: verify every show against Crunchyroll's saved progress, in the background ----
  async function checkLibrary(force) {
    if (state.check.running || !state.rows.length) return;
    state.check = { ...state.check, running: true, done: 0, found: 0 };
    renderCheck();
    try {
      await waitForToken();
      if (!state.acc) { const me = await api('/accounts/v1/me'); state.acc = me.account_id; }
      const extra = [...(await fetchWatchlist()), ...(await fetchCrunchylists())];
      const all = [...new Set([...state.series.filter((s) => !s.ext && !s.movie && s.status !== 'completed').flatMap((s) => s.members || [s.sid]), ...extra])]
        .filter((sid) => force || !state.verified[sid] || Date.now() - state.verified[sid] > 7 * DAY);
      state.check.total = all.length;
      for (let i = 0; i < all.length; i += 8) {
        const chunk = all.slice(i, i + 8);
        state.check.found += await deepScan(chunk, null);
        state.check.done = Math.min(all.length, i + 8);
        buildSeries(); renderCheck();
        if (ui.overlay && ui.overlay.classList.contains('open') && state.view === 'library' && i % 40 === 0) renderGrid();
      }
      state.check.at = Date.now();
      if (state.check.found) toast(`Library check found ${plural(state.check.found, 'episode')} your history was missing`, 'ok');
    } catch (e) { console.error('[CR History Export] check', e); }
    finally {
      state.check.running = false;
      await store.set('check3', { at: state.check.at, found: state.check.found, total: state.check.total, done: state.check.done });
      buildSeries(); render();
    }
  }
  async function runDeep() {
    if (state.busy) return toast('Already syncing – try again in a moment', 'info');
    state.busy = true;
    const t = toast('Deep scan: getting your watchlist…', 'info', true), say = (m) => { setSyncLabel(m, true); t.set(m); };
    try {
      await waitForToken();
      if (!state.acc) { const me = await api('/accounts/v1/me'); state.acc = me.account_id; }
      const wl = await fetchWatchlist();
      const todo = state.series.filter((s) => !s.ext && !s.movie && s.status !== 'completed').flatMap((s) => s.members || [s.sid]);
      const n = await deepScan([...wl, ...todo], say);
      t.close(); buildSeries(); render();
      toast(n ? `Deep scan found ${plural(n, 'episode')} your history was missing` : 'Deep scan done – nothing was missing', 'ok');
    } catch (e) { t.close(); toast('Error: ' + e.message, 'bad'); }
    finally { state.busy = false; setSyncLabel(); }
  }

  // ---- Airing countdowns ----
  const airQuery = (s) => { const real = (s.seasons || []).filter((x) => !x.extra && !x.unknownTotal); return (real.length ? real[real.length - 1].t : s.title).replace(/\s*\((english|spanish|portuguese|french|german|italian|hindi|castilian)[^)]*\)/i, ''); };
  async function refreshAiring(force) {
    if (!S.airing) return;
    const cand = state.series.filter((s) => !s.hidden && !s.movie && !s.ext && (s.plan || s.status === 'watching' || s.status === 'newseason' || (s.status === 'completed' && Date.now() - new Date(s.last).getTime() < 120 * DAY)));
    if (!cand.length) return;
    const q = new Map(cand.map((s) => [s.sid, airQuery(s)]));
    const res = await fetchAiring([...new Set(q.values())], null, force), old = state.airing || {};
    state.airing = {};
    for (const [sid, k] of q) {
      const v = k in res ? res[k] : old[sid];          // lookup failed → keep what we had
      if (v && v.at > Date.now()) state.airing[sid] = v;
    }
    await store.set('airingmap3', state.airing);
    buildSeries(); render();
  }
  // ---- Plan to watch (your own list, on top of the Crunchyroll watchlist) ----
  async function addPlan(item) {
    state.plan = state.plan || {};
    state.plan[item.sid] = { t: item.t, img: item.img || '', g: item.g || [], at: Date.now() };
    delete state.hidden[item.sid];
    await savePrefs(); refresh();
    toast(`Added ${item.t} to Plan to watch`, 'ok');
  }
  async function removePlan(sid) {
    if (state.plan && state.plan[sid]) delete state.plan[sid]; else state.hidden[sid] = Date.now();
    await savePrefs(); refresh(); closeDrawer();
    toast('Removed from Plan to watch', 'info');
  }

  async function ensureLists(seasonIds) {
    const missing = seasonIds.filter((id) => id && !state.eps[id]);
    if (!missing.length) return;
    Object.assign(state.eps, await fetchEpisodeLists(missing, new Set(), null, false));
    buildSeries();
  }
  async function retrySeasons(sid) {
    if (state.retried[sid] || String(sid).startsWith('ext:')) return false;
    state.retried[sid] = 1;
    const r = await fetchSeasons([sid], null, true);
    if (!r[sid] || !r[sid].seasons.length) return false;
    state.seasons[sid] = r[sid];
    await ensureLists(r[sid].seasons.map((x) => x.id));
    buildSeries();
    return true;
  }

  // ================================================================
  // 6. Actions: mark watched, didn't watch, ratings
  // ================================================================
  async function pushToCrunchyroll(list) {
    if (!list.length) return;
    // skip what Crunchyroll already has as watched (in any language): re-sending it would make Crunchyroll treat it as
    // just played and put it back in "Continue Watching"
    let skipped = 0;
    try {
      const idsOf = (e) => [...new Set([e.cid || e.id, ...(e.ids || [])].filter(Boolean))];
      const ph = await fetchPlayheads([...new Set(list.flatMap(idsOf))]);
      const seen = (e) => idsOf(e).some((id) => { const p = ph[id]; return p && (p.fully_watched || (e.d > 0 && p.playhead >= e.d * 0.85)); });
      const before = list.length; list = list.filter((e) => !seen(e)); skipped = before - list.length;
    } catch (_) {}
    if (!list.length) return toast(skipped ? `✓ Already watched on Crunchyroll – nothing to send` : 'Nothing to send', 'ok');
    // real lengths: an unknown length used to be guessed as 24 min (a long special then showed "35 min left")
    const lenOf = new Map();
    for (const L of Object.values(state.eps || {})) for (const ep of L || []) if (ep.d) ep.ids.forEach((id) => lenOf.set(id, ep.d));
    for (const e of list) if (!e.d) e.d = lenOf.get(e.cid || e.id) || lenOf.get(e.id) || 0;
    const unknown = [...new Set(list.filter((e) => !e.d).map((e) => e.cid || e.id))];
    for (let i = 0; i < unknown.length; i += 40) {
      try {
        const j = await api(`/content/v2/cms/objects/${unknown.slice(i, i + 40).join(',')}?locale=${LOCALE}`);
        for (const o of j.data || []) {
          const ms = (o.episode_metadata || {}).duration_ms || (o.movie_metadata || {}).duration_ms || o.duration_ms;
          if (ms) list.forEach((e) => { if ((e.cid || e.id) === o.id) e.d = Math.round(ms / 1000); });
        }
      } catch (_) {}
    }
    let fails = 0, done = 0, lastErr = '';
    const sent = [];
    const t = toast(`Updating Crunchyroll… 0/${list.length}`, 'info', true);
    await pool(list, 3, async (e) => {   // 3 at a time – a whole show used to take a long while
      try { await crMarkWatched(e.cid || e.id, e.d); sent.push(e); } catch (err) { fails++; lastErr = err.message; if (err.retry) await enqueue('mark', e.cid || e.id, e.d); }
      t.set(`Updating Crunchyroll… ${++done}/${list.length}`);
      await sleep(100);
    });
    t.close();
    const undo = sent.length ? { label: 'Undo', fn: () => undoMarks(sent) } : null;
    if (fails === list.length && (state.queue || []).length) toast(`Saved in the tracker. Crunchyroll didn't answer (${lastErr}) – Reaperdex will send it again automatically on the next sync.`, 'info');
    else if (fails === list.length) toast(`Saved in the tracker, but Crunchyroll didn't accept it (${lastErr}). Play any episode for a few seconds, then try again – Reaperdex learns Crunchyroll's format from the player.`, 'bad');
    else if (fails) toast(`Marked ${list.length - fails}/${list.length} on Crunchyroll · all saved in the tracker`, 'ok', false, undo);
    else toast(`✓ ${plural(list.length, 'episode')} marked watched on Crunchyroll${skipped ? ` · ${skipped} already watched there, left alone` : ''}`, 'ok', false, undo);
  }
  // ================================================================
  // Crunchylists – Crunchyroll's own lists (10 lists, 100 shows each)
  // ================================================================
  const clBase = () => `/content/v2/${state.acc}/custom-lists`;
  async function clLists() {
    if (!state.acc) { const me = await api('/accounts/v1/me'); state.acc = me.account_id; }
    const j = await api(`${clBase()}?locale=${LOCALE}`);
    return { lists: (j.data || []).map((l) => ({ id: l.list_id, t: l.title || 'Untitled', n: l.total || 0 })), max: (j.meta && j.meta.max_private) || 10 };
  }
  async function clItems(id) {
    const out = [];
    for (let p = 1; p <= 3; p++) { const j = await api(`${clBase()}/${id}?locale=${LOCALE}&page=${p}&page_size=100`); out.push(...(j.data || [])); if (!j.meta || !j.meta.next_page) break; }
    return out;
  }
  const clOk = (s) => s && !s.ext && !s.hidden && s.sid && !String(s.sid).startsWith('mv:');
  async function addToCrunchylist(sids) {
    const shows = sids.map((id) => state.byId.get(id)).filter(clOk);
    if (!shows.length) return toast('Only Crunchyroll shows can go in a Crunchylist', 'bad');
    let info;
    try { info = await clLists(); } catch (e) { return toast(`Couldn’t load your Crunchylists (${e.message})`, 'bad'); }
    modal('', (close) => {
      const name = h('input', { class: 'cx-input', placeholder: 'New list name…', maxlength: '50', style: 'flex:1' });
      const go = async (id, title) => { close(); await fillCrunchylist(id, title, shows); };
      return [h('h3', {}, `Add ${shows.length === 1 ? shows[0].title : plural(shows.length, 'show')} to a Crunchylist`),
        h('p', {}, `Crunchyroll allows ${info.max} lists with up to 100 shows each.`),
        ...info.lists.map((l) => h('button', { class: 'cx-btn', style: 'display:flex;width:100%;margin:4px 0;justify-content:space-between', onclick: () => go(l.id, l.t) }, h('span', {}, `☰ ${l.t}`), h('em', {}, `${l.n}/100`))),
        info.lists.length < info.max
          ? h('div', { style: 'display:flex;gap:8px;margin-top:10px' }, name, h('button', { class: 'cx-btn primary', onclick: async () => {
              const t = name.value.trim(); if (!t) return name.focus();
              close();
              try { const j = await api(`${clBase()}?locale=${LOCALE}`, 1, { method: 'POST', body: JSON.stringify({ title: t }) }); const id = ((j.data || [])[0] || j).list_id; if (!id) throw new Error('no list id'); await fillCrunchylist(id, t, shows); }
              catch (e) { toast(`Crunchyroll didn’t create the list (${e.message})`, 'bad'); }
            } }, '+ New list'))
          : h('p', {}, 'You have the most lists Crunchyroll allows – delete one in Manage first.'),
        h('div', { class: 'cx-modal-act' }, h('button', { class: 'cx-btn', onclick: () => { close(); manageCrunchylists(); } }, 'Manage Crunchylists'), h('button', { class: 'cx-btn', onclick: close }, 'Cancel'))];
    });
  }
  async function fillCrunchylist(id, title, shows) {
    let have = new Set();
    try { have = new Set((await clItems(id)).map((x) => x.id)); } catch (_) {}
    const todo = shows.filter((s) => !have.has(s.sid)), list = todo.slice(0, Math.max(0, 100 - have.size));
    const t = toast(`Adding to “${title}”… 0/${list.length}`, 'info', true);
    let ok = 0, fail = 0;
    for (const s of list) {
      try { await api(`${clBase()}/${id}?locale=${LOCALE}`, 1, { method: 'POST', body: JSON.stringify({ content_id: s.sid }) }); ok++; } catch (_) { fail++; }
      t.set(`Adding to “${title}”… ${ok + fail}/${list.length}`); await sleep(120);
    }
    t.close();
    const already = shows.length - todo.length, over = todo.length - list.length;
    toast(`✓ ${plural(ok, 'show')} added to “${title}”${already ? ` · ${already} already in it` : ''}${over ? ` · ${over} didn’t fit (100 max)` : ''}${fail ? ` · ${fail} failed` : ''}`, fail && !ok ? 'bad' : 'ok');
  }
  async function manageCrunchylists() {
    let info;
    try { info = await clLists(); } catch (e) { return toast(`Couldn’t load your Crunchylists (${e.message})`, 'bad'); }
    modal('', (close) => [h('h3', {}, 'Your Crunchylists'),
      h('p', {}, info.lists.length ? `${info.lists.length} of ${info.max} lists.` : 'No Crunchylists yet – press Select, pick shows (or “Select all shown” on any filter), then “☰ Add to Crunchylist”.'),
      ...info.lists.map((l) => h('div', { style: 'display:flex;gap:8px;align-items:center;margin:6px 0' },
        h('span', { style: 'flex:1' }, `☰ ${l.t} · ${l.n}/100`),
        h('button', { class: 'cx-btn xs', title: 'Copy this list’s shows into your Plan to watch', onclick: () => { close(); importCrunchylist(l.id, l.t); } }, '→ Plan to watch'),
        h('button', { class: 'cx-btn xs', onclick: async () => {
          if (!(await confirmModal(`Delete “${l.t}”?`, 'The list is deleted on Crunchyroll. Your shows and progress are not touched.', 'Delete list'))) return;
          try { await api(`${clBase()}/${l.id}?locale=${LOCALE}`, 1, { method: 'DELETE' }); toast(`Deleted “${l.t}”`, 'info'); } catch (e) { toast(`Crunchyroll didn’t delete it (${e.message})`, 'bad'); }
        } }, 'Delete'))),
      h('div', { class: 'cx-modal-act' }, h('button', { class: 'cx-btn', onclick: close }, 'Close'))]);
  }
  async function importCrunchylist(id, title) {
    let items;
    try { items = await clItems(id); } catch (e) { return toast(`Couldn’t read “${title}” (${e.message})`, 'bad'); }
    state.plan = state.plan || {};
    let n = 0;
    for (const it of items) {
      const p = it.panel || {}, sid = it.id || p.id, have = state.byId.get(sid);
      if (!sid || state.plan[sid] || (have && !have.plan)) continue;   // already planned, or already started
      state.plan[sid] = { t: String(p.title || '').slice(0, 200), img: imgOf(p, 'poster_tall') || imgOf(p, 'thumbnail') || '', g: [], at: Date.now() };
      delete state.hidden[sid]; n++;
    }
    await savePrefs(); refresh();
    toast(n ? `✓ ${plural(n, 'show')} from “${title}” added to Plan to watch` : `Nothing new – you’ve already started or planned everything in “${title}”`, 'ok');
  }
  // Fix "1s left": versions before 1.9.0 saved marked episodes 2 seconds short of the end, so Crunchyroll
  // (and the phone app) show "1s left". Find those and save them as fully played. Nothing else is touched.
  async function fixShortMarks() {
    if (!state.acc) { const me = await api('/accounts/v1/me'); state.acc = me.account_id; }
    const lenOf = new Map(), nameOf = new Map();
    for (const L of Object.values(state.eps || {})) for (const ep of L || []) for (const id of ep.ids || []) { if (ep.d) lenOf.set(id, ep.d); }
    for (const r of allRows()) if (r.id && !nameOf.has(r.id)) nameOf.set(r.id, r.series || r.title || '');
    const ids = [...new Set([...lenOf.keys(), ...state.rows.map((r) => r.id).filter(Boolean)])];
    if (!ids.length) return toast('Nothing to check yet – let Reaperdex finish syncing first', 'info');
    const t = toast('Looking for “1s left” episodes…', 'info', true);
    let ph;
    try { ph = await fetchPlayheads(ids, (m) => t.set(m)); } catch (e) { t.close(); return toast(`Couldn’t read your progress (${e.message})`, 'bad'); }
    // episodes with no known length (movies, odd specials): ask Crunchyroll, but only for ones close to the end
    const unknown = Object.values(ph).filter((p) => p.playhead > 60 && !lenOf.has(p.content_id || p.id)).map((p) => p.content_id || p.id);
    for (let i = 0; i < unknown.length; i += 40) {
      try {
        const j = await api(`/content/v2/cms/objects/${unknown.slice(i, i + 40).join(',')}?locale=${LOCALE}`);
        for (const o of j.data || []) { const ms = (o.episode_metadata || {}).duration_ms || (o.movie_metadata || {}).duration_ms || o.duration_ms; if (ms) lenOf.set(o.id, Math.round(ms / 1000)); }
      } catch (_) {}
    }
    const todo = [];
    for (const p of Object.values(ph)) {
      const id = p.content_id || p.id, d = lenOf.get(id);
      const short = d > 0 && p.playhead > 0 && p.playhead < d && d - p.playhead <= 5;              // "1s left"
      const guessed = d > 0 && [24, S.epMin].some((m) => p.playhead === m * 60 - 2) && p.playhead < d;  // old 24-min guess on a longer episode
      if (id && (short || guessed)) todo.push({ id, d });
    }
    t.close();
    if (!todo.length) return toast('✓ No “1s left” episodes found – everything is fully played', 'ok');
    const shows = [...new Set(todo.map((x) => nameOf.get(x.id)).filter(Boolean))];
    const ok = await confirmModal(`Fix ${plural(todo.length, 'episode')}?`,
      `These were marked by an older Reaperdex and show “1s left” (or a few minutes left) on Crunchyroll. They’ll be saved as fully played. Crunchyroll may briefly list a show in Continue Watching.`,
      'Fix them', shows.length ? h('p', { style: 'opacity:.8;font-size:13px' }, shows.slice(0, 8).join(', ') + (shows.length > 8 ? ` +${shows.length - 8} more` : '')) : null);
    if (!ok) return;
    const t2 = toast(`Fixing… 0/${todo.length}`, 'info', true);
    let done = 0, fails = 0;
    await pool(todo, 3, async (x) => {
      try { await crMarkWatched(x.id, x.d); } catch (_) { fails++; }
      t2.set(`Fixing… ${++done}/${todo.length}`);
      await sleep(100);
    });
    t2.close();
    toast(fails ? `Fixed ${todo.length - fails}/${todo.length} · ${fails} failed – try again later` : `✓ ${plural(todo.length, 'episode')} fixed – no more “1s left”`, fails ? 'bad' : 'ok');
  }
  // Undo straight after marking: back to "not watched" in the tracker and on Crunchyroll
  async function undoMarks(list) {
    const t = toast(`Undoing… 0/${list.length}`, 'info', true);
    let n = 0, fails = 0;
    for (const e of list) {
      delete state.marks[e.id]; delete state.markAs[e.id];
      try { if (!(await crUnwatch(e.cid || e.id))) fails++; } catch (_) { fails++; }
      t.set(`Undoing… ${++n}/${list.length}`);
    }
    const gone = new Set(list.map((e) => e.cid || e.id));
    state.rows = state.rows.filter((r) => !gone.has(r.id));
    await saveHistory(); await savePrefs(); refresh(); t.close();
    toast(fails ? `Undone in the tracker · ${fails} not undone on Crunchyroll` : `↺ Undone – ${plural(list.length, 'episode')} back to not watched`, fails ? 'bad' : 'ok');
  }
  // ---- which language to mark in: Crunchyroll keeps every dub as its own episode
  const LANG_NAMES = { 'ja-JP': 'Japanese', 'en-US': 'English', 'en-IN': 'English (India)', 'es-419': 'Spanish (Latin America)', 'es-ES': 'Spanish (Spain)', 'es-LA': 'Spanish (Latin America)',
    'pt-BR': 'Portuguese (Brazil)', 'pt-PT': 'Portuguese (Portugal)', 'fr-FR': 'French', 'de-DE': 'German', 'it-IT': 'Italian', 'ru-RU': 'Russian', 'ar-SA': 'Arabic', 'ar-ME': 'Arabic',
    'hi-IN': 'Hindi', 'ta-IN': 'Tamil', 'te-IN': 'Telugu', 'kn-IN': 'Kannada', 'ml-IN': 'Malayalam', 'bn-IN': 'Bengali', 'zh-CN': 'Chinese (Mandarin)', 'zh-TW': 'Chinese (Taiwan)', 'zh-HK': 'Cantonese',
    'ko-KR': 'Korean', 'th-TH': 'Thai', 'id-ID': 'Indonesian', 'ms-MY': 'Malay', 'vi-VN': 'Vietnamese', 'tr-TR': 'Turkish', 'pl-PL': 'Polish', 'ca-ES': 'Catalan' };
  const langName = (c) => LANG_NAMES[c] || c;
  async function langInfo(list) {
    const shows = [...new Set(list.map((e) => e.show).filter(Boolean))];
    const want = new Set(list.map((e) => e.season).filter(Boolean));
    for (const sid of shows) for (const x of (state.byId.get(sid) || {}).seasons || []) if (x.id) want.add(x.id);
    const need = [...want].filter((id) => !state.eps[id] || (state.eps[id].length && !state.eps[id][0].al));
    if (need.length) { try { Object.assign(state.eps, await fetchEpisodeLists(need, new Set(need), null, true)); } catch (_) {} }
    const loc = {};
    for (const L of Object.values(state.eps)) for (const ep of L || []) (ep.al || []).forEach((a, i) => { if (a) loc[ep.ids[i]] = a; });
    const ours = new Set(Object.values(state.markAs || {}));   // episodes Reaperdex marked don't say what language you watch in
    const latest = (rows) => { let b = null; for (const r of rows) if (loc[r.id] && !ours.has(r.id) && (!b || r.date > b.date)) b = r; return b ? loc[b.id] : null; };
    const rows = state._cr || [], overall = latest(rows), pref = {}, found = {};
    for (const sid of shows) { const d = latest(rows.filter((r) => (r._sid || r.sid) === sid)); found[sid] = !!d; pref[sid] = state.lang[sid] || d || overall || 'ja-JP'; }
    const epFor = (e) => (state.eps[e.season] || []).find((ep) => ep.ids.includes(e.id));
    const avail = new Set();
    for (const e of list) { const ep = epFor(e); (ep && ep.al || []).forEach((a) => a && avail.add(a)); }
    return { shows, pref, found, epFor, avail: [...avail].sort((a, b) => (a === 'ja-JP' ? -1 : b === 'ja-JP' ? 1 : langName(a).localeCompare(langName(b)))) };
  }
  // a language picker for the confirm box: preselects the language you watch the show in
  function langPicker(L) {
    if (!L || L.avail.length < 2) return null;
    const one = L.shows.length === 1 ? L.shows[0] : null;
    const sel = h('select', { class: 'cx-input' },
      h('option', { value: 'auto' }, one ? `${langName(L.pref[one])}${state.lang[one] ? ' (your choice)' : L.found[one] ? ' – what you watch it in' : ' – your usual language'}` : 'Each show in the language you watch it in'),
      ...L.avail.filter((a) => !one || a !== L.pref[one]).map((a) => h('option', { value: a }, langName(a))));
    return { el: h('label', { class: 'cx-field cx-langpick' }, h('span', {}, 'Mark in which language? Crunchyroll tracks every dub separately'), sel), sel };
  }
  function applyLang(list, L, choice) {
    for (const e of list) {
      const ep = L && L.epFor(e), want = choice && choice !== 'auto' ? choice : L && L.pref[e.show];
      const i = ep && ep.al ? ep.al.indexOf(want) : -1;
      e.cid = i >= 0 ? ep.ids[i] : e.id;
    }
    if (choice && choice !== 'auto' && L) { for (const sid of L.shows) state.lang[sid] = choice; store.set('lang3', state.lang); }
  }

  async function markEpisodes(list, label) {
    list = list.filter((e) => e && e.id && toSend(e));
    if (!list.length) return toast('Already all watched', 'ok');
    const L = await langInfo(list).catch(() => null), pick = langPicker(L);
    if (!(await confirmModal(`Mark ${label} as watched?`, `${plural(list.length, 'episode')} will be marked as watched in the tracker and on your Crunchyroll account (like you finished them).`, 'Mark watched', pick && pick.el))) return;
    applyLang(list, L, pick && pick.sel.value);
    const now = Date.now();
    for (const e of list) { state.marks[e.id] = now; state.markAs[e.id] = e.cid || e.id; }
    await savePrefs(); refresh();
    await pushToCrunchyroll(list);
  }
  // Undo a watched episode – in the tracker and on Crunchyroll (every language version you have in your history)
  async function unwatchEp(e, label) {
    const ids = e.ids || [e.id];
    const inHist = new Set([...state.rows, ...Object.values(state.phRows || {})].filter((r) => ids.includes(r.id)).map((r) => r.id));
    if (state.marks[e.id]) inHist.add(state.markAs[e.id] || e.id);   // what Reaperdex itself sent to Crunchyroll
    const n = inHist.size;
    if (!(await confirmModal(`Set ${label} as not watched?`,
      n ? `It goes back to “not watched” in the tracker and on your Crunchyroll account${n > 1 ? ` (all ${n} language versions in your history)` : ''}.` : 'Your mark is removed from the tracker.', 'Set as not watched'))) return;
    delete state.marks[e.id]; delete state.markAs[e.id];
    let fails = 0;
    const t = n ? toast('Updating Crunchyroll…', 'info', true) : null;
    for (const id of inHist) { try { if (!(await crUnwatch(id))) fails++; } catch (err) { fails++; if (err.retry || err.status >= 500 || err.status === 429) await enqueue('unwatch', id); } await sleep(150); }
    if (t) t.close();
    state.rows = state.rows.filter((r) => !inHist.has(r.id));
    for (const id of inHist) delete state.phRows[id];
    await saveHistory(); await store.set('phrows3', state.phRows); await savePrefs(); refresh();
    if (!n) toast('Mark removed', 'info');
    else if (fails === n) toast('Removed in the tracker, but Crunchyroll didn’t accept it – you can also remove it in Crunchyroll’s History page', 'bad');
    else toast(`✓ ${label} set as not watched${fails ? ' (mostly – one version didn’t update)' : ''}`, 'ok');
  }

  async function markShows(sids) {
    const eps = [], local = [], ext = [];
    const t = sids.length > 3 ? toast('Getting episode lists…', 'info', true) : null;
    for (const sid of sids) {
      let s = state.byId.get(sid);
      if (!s || s.status === 'completed') continue;
      if (s.ext) { ext.push(s); continue; }
      if (s.movie) { eps.push({ id: s.lastEp.id, d: s.lastEp.durMin * 60, st: 'none' }); continue; }
      if (s.noSeasons) { await retrySeasons(sid); s = state.byId.get(sid); }
      await ensureLists((s.req || []).map((x) => x.id)); s = state.byId.get(sid);
      const list = (s.req || []).flatMap((x) => x.list || []).filter(toSend);
      if (list.length) eps.push(...list); else local.push(s);
    }
    if (t) t.close();
    if (!eps.length && !local.length && !ext.length) return toast('Already completed', 'ok');
    const one = sids.length === 1 ? state.byId.get(sids[0]) : null;
    const parts = [];
    if (eps.length) parts.push(`${plural(eps.length, 'episode')} will be marked watched in the tracker and on your Crunchyroll account.`);
    if (local.length) parts.push(`${plural(local.length, 'show')} Crunchyroll no longer lists (probably removed) will be marked completed in the tracker only.`);
    if (ext.length) parts.push(`${plural(ext.length, 'show')} from other services will be set to Completed.`);
    const L = eps.length ? await langInfo(eps).catch(() => null) : null, pick = langPicker(L);
    if (!(await confirmModal(one ? `Mark ${one.title} as completed?` : `Mark ${sids.length} shows as completed?`, parts.join(' '), 'Mark completed', pick && pick.el))) return;
    applyLang(eps, L, pick && pick.sel.value);
    const now = Date.now();
    for (const e of eps) { state.marks[e.id] = now; state.markAs[e.id] = e.cid || e.id; }
    for (const s of local) state.showMarks[s.sid] = now;
    for (const s of ext) { const x = state.external.find((y) => y.id === s.extId); if (x) x.status = 'completed'; }
    state.sel.clear(); state.selecting = false;
    await savePrefs(); refresh();
    if (local.length || ext.length) toast(`✓ ${plural(local.length + ext.length, 'show')} marked completed`, 'ok');
    await pushToCrunchyroll(eps);
  }
  const markShow = (sid) => markShows([sid]);
  async function unmarkShow(sid) { delete state.showMarks[sid]; await savePrefs(); refresh(); toast('Completed mark removed', 'info'); }

  async function hideShows(sids) {
    const one = sids.length === 1 ? state.byId.get(sids[0]) : null;
    if (!(await confirmModal(one ? `Remove ${one.title}?` : `Remove ${sids.length} shows?`,
      "They'll disappear from your list and your stats, as if you never watched them. Nothing changes on Crunchyroll, and you can bring them back any time from the Hidden filter.", "Didn't watch"))) return;
    for (const sid of sids) state.hidden[sid] = Date.now();
    state.sel.clear(); state.selecting = false;
    if (state.open && sids.includes(state.open)) closeDrawer();
    await savePrefs(); refresh();
    toast(`Removed ${one ? one.title : plural(sids.length, 'show')} from your list`, 'ok');
  }
  async function unhide(sid) { delete state.hidden[sid]; await savePrefs(); refresh(); toast('Back in your list', 'ok'); }
  let metaTimer;
  function setMeta(sid, patch) {
    state.meta[sid] = { ...(state.meta[sid] || {}), ...patch };
    const s = state.byId.get(sid); if (s) { if ('r' in patch) s.rating = patch.r; if ('n' in patch) s.note = patch.n; }
    clearTimeout(metaTimer); metaTimer = setTimeout(() => store.set('meta3', state.meta), 400);
  }

  // ================================================================
  // 7. Other services: import + manual add
  // ================================================================
  function parseCSV(t) {
    t = t.replace(/^﻿/, '');
    const rows = []; let row = [], f = '', q = false;
    for (let i = 0; i < t.length; i++) {
      const c = t[i];
      if (q) { if (c === '"') { if (t[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
      else if (c === '"') q = true;
      else if (c === ',' || c === ';' && !t.slice(0, 200).includes(',')) { row.push(f); f = ''; }
      else if (c === '\n' || c === '\r') { if (c === '\r' && t[i + 1] === '\n') i++; row.push(f); rows.push(row); row = []; f = ''; }
      else f += c;
    }
    if (f || row.length) { row.push(f); rows.push(row); }
    return rows.filter((r) => r.some((x) => x.trim()));
  }
  function dateParser(samples) {
    let dmy = null;
    for (const s of samples) {
      const m = String(s).trim().match(/^(\d{1,2})[/.-](\d{1,2})[/.-](\d{2,4})$/);
      if (!m) continue;
      if (+m[1] > 12) { dmy = true; break; }
      if (+m[2] > 12) { dmy = false; break; }
    }
    if (dmy === null) dmy = !/^en-US/i.test(navigator.language || '');
    return (s) => {
      s = String(s || '').trim();
      let m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
      if (m) return new Date(+m[1], +m[2] - 1, +m[3], 12).toISOString();
      m = s.match(/^(\d{1,2})[/.-](\d{1,2})[/.-](\d{2,4})$/);
      if (m) { let y = +m[3]; if (y < 100) y += 2000; return new Date(y, (dmy ? +m[2] : +m[1]) - 1, dmy ? +m[1] : +m[2], 12).toISOString(); }
      const t = Date.parse(s); return isNaN(t) ? '' : new Date(t).toISOString();
    };
  }
  function readImport(file) {
    if (file.size > 40e6) return toast('That file is too big to import (max 40 MB)', 'bad');
    const fr = new FileReader();
    fr.onload = () => {
      const rows = parseCSV(String(fr.result || ''));
      if (rows.length < 2) return toast("That file doesn't look like a CSV with a header row", 'bad');
      const hd = rows[0].map((x) => x.trim().toLowerCase());
      const ti = hd.findIndex((x) => /^(title|name|show|series)/.test(x)), di = hd.findIndex((x) => /date|watched/.test(x)), ei = hd.findIndex((x) => /^episodes?( watched)?$|^count$/.test(x));
      if (ti < 0) return toast('Couldn’t find a Title column in that file', 'bad');
      const parse = dateParser(rows.slice(1, 200).map((r) => r[di] || ''));
      const groups = new Map();
      for (const r of rows.slice(1)) {
        const raw = (r[ti] || '').trim(); if (!raw) continue;
        const parts = raw.split(': '), show = parts[0].trim(), isEp = parts.length >= 2;
        const k = tkey(show);
        const g = groups.get(k) || { title: show, eps: new Map(), count: 0, movie: true };
        if (isEp) g.movie = false;
        const epT = isEp ? parts.slice(1).join(': ') : show, date = di >= 0 ? parse(r[di]) : '';
        const prev = g.eps.get(epT);
        if (!prev || (date && date > prev.date)) g.eps.set(epT, { t: epT, date });
        if (ei >= 0) g.count = Math.max(g.count, parseInt(r[ei], 10) || 0);
        groups.set(k, g);
      }
      const list = [...groups.values()].map((g) => ({ ...g, eps: [...g.eps.values()].sort((a, b) => (a.date < b.date ? -1 : 1)) }))
        .sort((a, b) => b.eps.length - a.eps.length);
      const netflix = hd.length <= 3 && hd[0] === 'title' && hd[1] === 'date';
      importPicker(list, netflix ? 'netflix' : 'other', file.name);
    };
    fr.readAsText(file);
  }
  async function commitImport(list, svc) {
    let added = 0, merged = 0;
    for (const g of list) {
      const ex = state.external.find((x) => x.svc === svc && tkey(x.title) === tkey(g.title));
      if (ex) {
        const have = new Set((ex.eps || []).map((e) => e.t + '|' + e.date));
        ex.eps = [...(ex.eps || []), ...g.eps.filter((e) => !have.has(e.t + '|' + e.date))];
        ex.count = Math.max(ex.count || 0, g.count || 0); merged++;
      } else {
        state.external.push({ id: Math.random().toString(36).slice(2, 10), svc, title: g.title, eps: g.eps, count: g.count || 0, movie: g.movie, at: Date.now() });
        added++;
      }
    }
    await savePrefs(); refresh();
    toast(`Imported ${plural(added, 'show')} from ${SERVICES[svc].label}${merged ? ` · updated ${merged}` : ''}`, 'ok');
  }
  async function saveManual(x) {
    const i = state.external.findIndex((y) => y.id === x.id);
    if (i >= 0) state.external[i] = { ...state.external[i], ...x }; else state.external.push({ id: Math.random().toString(36).slice(2, 10), at: Date.now(), eps: [], ...x });
    await savePrefs(); refresh();
  }
  async function deleteExternal(extId) {
    if (!(await confirmModal('Delete this show?', 'It’s removed from the tracker completely.', 'Delete'))) return;
    state.external = state.external.filter((x) => x.id !== extId);
    closeDrawer(); await savePrefs(); refresh();
  }

  // ================================================================
  // 8. Backup / restore
  // ================================================================
  function backup() {
    const data = { app: 'nullreaper-anime-tracker', v: VERSION, at: new Date().toISOString(), ...personalData() };
    download(new Blob([JSON.stringify(data, null, 1)], { type: 'application/json' }), `anime-tracker-backup-${stamp()}.json`);
    toast('Backup downloaded – keep it somewhere safe', 'ok');
  }
  function restore(file) {
    if (file.size > 60e6) return toast('That backup file is too big (max 60 MB)', 'bad');
    const fr = new FileReader();
    fr.onload = async () => {
      let d; try { d = JSON.parse(fr.result); } catch (_) { return toast("That isn't a tracker backup", 'bad'); }
      if (!d || d.app !== 'nullreaper-anime-tracker') return toast("That isn't a tracker backup", 'bad');
      await snapshot('Before restoring a backup', true);
      await applyPersonal(d, true);
      toast('Backup restored – you can undo it in Settings → Safety snapshots', 'ok');
    };
    fr.readAsText(file);
  }
  function pickFile(accept, fn) {
    const i = h('input', { type: 'file', accept, style: 'display:none' });
    i.addEventListener('change', () => { if (i.files[0]) fn(i.files[0]); i.remove(); });
    document.body.append(i); i.click();
  }

  // ================================================================
  // 9. Helpers
  // ================================================================
  const norm = (x) => (x || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const p2 = (n) => String(n).padStart(2, '0');
  const plural = (n, w) => `${Number(n).toLocaleString()} ${w}${n === 1 ? '' : 's'}`;
  const fmtDate = (iso) => { if (!iso) return ''; const d = new Date(iso); return isNaN(d) ? iso : `${d.getFullYear()}-${p2(d.getMonth() + 1)}-${p2(d.getDate())}`; };
  const niceDate = (iso) => { const d = new Date(iso); return isNaN(d) ? '' : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }); };
  function ago(iso) {
    const d = (Date.now() - new Date(iso).getTime()) / DAY;
    if (!iso || !isFinite(d)) return 'date unknown';
    if (d < 1 / 24) return 'just now';
    if (d < 1) return `${Math.floor(d * 24)}h ago`;
    if (d < 2) return 'yesterday';
    if (d < 30) return `${Math.floor(d)} days ago`;
    if (d < 365) return `${Math.floor(d / 30)} month${d >= 60 ? 's' : ''} ago`;
    return `${Math.floor(d / 365)} year${d >= 730 ? 's' : ''} ago`;
  }
  const dur = (min) => { min = Math.round(min); if (min < 60) return `${min}m`; const hh = Math.floor(min / 60), mm = min % 60; return hh >= 100 ? `${hh.toLocaleString()}h` : `${hh}h${mm ? ` ${mm}m` : ''}`; };
  const epTag = (l) => (/^\d/.test(String(l ?? '')) ? 'E' + l : String(l || 'E?'));   // "SP1", not "ESP1"
  const epLabel = (e) => (e.movie ? 'Movie' : `${e.sNo !== '' && e.sNo != null ? 'S' + e.sNo + ' ' : ''}E${e.epNo !== '' && e.epNo != null ? e.epNo : '?'}`);
  const stamp = () => new Date().toISOString().slice(0, 10);
  const daysText = (d) => (d >= 10 ? Math.round(d).toLocaleString() : d.toFixed(1));
  const finishIn = (min) => { const p = state.totals && state.totals.pace; if (!p || !min) return ''; const d = min / p; return d < 1 ? 'finish today at your pace' : `~${Math.ceil(d)} day${Math.ceil(d) === 1 ? '' : 's'} at your pace`; };

  function h(tag, props = {}, ...kids) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(props)) {
      if (v == null || v === false) continue;
      if (k === 'class') el.className = v;
      else if (k === 'style') el.style.cssText = v;
      else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v);
    }
    for (const k of kids.flat()) if (k != null && k !== false) el.append(k instanceof Node ? k : document.createTextNode(String(k)));
    return el;
  }
  const loader = (t) => h('div', { class: 'cx-empty' }, h('div', { class: 'cx-spin' }), h('div', {}, t));
  function toast(msg, kind = 'info', sticky, action) {
    const box = ui.toasts || document.body;
    const txt = h('span', {}, msg);
    const t = h('div', { class: 'cx-toast ' + kind }, h('i', {}), txt,
      action ? h('button', { class: 'cx-btn xs', style: 'margin-left:10px;pointer-events:auto', onclick: (e) => { e.stopPropagation(); close(); action.fn(); } }, action.label) : null);
    box.append(t);
    requestAnimationFrame(() => t.classList.add('in'));
    const close = () => { t.classList.remove('in'); setTimeout(() => t.remove(), 300); };
    if (!sticky) setTimeout(close, action ? 9000 : 4200);
    return { close, set: (m) => (txt.textContent = m) };
  }
  function modal(cls, content) {
    const close = () => { m.classList.remove('in'); setTimeout(() => m.remove(), 200); };
    const m = h('div', { class: 'cx-modal' }, h('div', { class: 'cx-modal-bg', onclick: close }), h('div', { class: 'cx-modal-box ' + (cls || '') }, ...content(close).filter(Boolean)));
    ui.root.append(m);
    requestAnimationFrame(() => m.classList.add('in'));
    return close;
  }
  function confirmModal(title, text, yes, extra) {
    return new Promise((res) => {
      let answered = false;
      const close = modal('', (c) => [h('h3', {}, title), h('p', {}, text), extra || null,
        h('div', { class: 'cx-modal-act' }, h('button', { class: 'cx-btn', onclick: () => { answered = true; c(); res(false); } }, 'Cancel'),
          h('button', { class: 'cx-btn primary', onclick: () => { answered = true; c(); res(true); } }, yes))]);
      const bg = ui.root.lastChild.querySelector('.cx-modal-bg');
      bg.addEventListener('click', () => { if (!answered) res(false); });
      void close;
    });
  }

  // ================================================================
  // 10. Awards
  // ================================================================
  const MILESTONES = [
    { k: 'watched', label: 'episodes', one: 'episode', steps: [100, 500, 1000, 2500, 5000, 10000, 20000] },
    { k: 'days', label: 'days of anime', one: 'day of anime', steps: [1, 7, 30, 60, 100, 200, 365] },
    { k: 'completed', label: 'anime completed', one: 'anime completed', steps: [1, 10, 25, 50, 100, 250, 500] },
    { k: 'seasons', label: 'seasons completed', one: 'season completed', steps: [10, 50, 100, 250, 500, 1000] },
  ];
  function milestones() {
    const T = state.totals, out = [];
    for (const m of MILESTONES) {
      const v = T[m.k], got = m.steps.filter((x) => v >= x), next = m.steps.find((x) => v < x);
      if (got.length) out.push({ earned: true, big: got[got.length - 1], label: got[got.length - 1] === 1 ? m.one : m.label, tier: got.length });
      if (next) out.push({ earned: false, big: next, label: m.label, pct: Math.min(100, (v / next) * 100) });
    }
    return out;
  }

  // ================================================================
  // 11. Exports
  // ================================================================
  const svcName = (s) => [SERVICES[s.svc].label, ...(s.others || []).map((o) => SERVICES[o.svc].label)].join(' + ');
  function showsTable(list) {
    return list.map((s) => ({
      Title: s.title, Status: STATUS[s.status].label, Service: svcName(s), Rating: s.rating || '',
      'Seasons completed': s.movie || s.ext ? '' : s.seasonsDone ?? '', 'Seasons total': s.movie || s.ext ? '' : s.seasonsTotal ?? '',
      'Episodes watched': s.done + (s.others || []).reduce((a, o) => a + o.count, 0), 'Episodes total': s.total || '',
      'Progress %': s.total ? Math.round((s.done / s.total) * 100) : '',
      'Next episode': s.current && s.current.next ? `${s.current.t} ${epTag(s.current.next)}` : '',
      'Skipped episodes': s.current && s.current.gaps.length ? s.current.gaps.join(', ') : '',
      'New season': s.newSeason ? `${s.newSeason.t} (${s.newSeason.n} eps)` : '',
      'Time left': s.left ? dur(s.left) : '', 'Hours watched': Math.round(s.minutes / 6) / 10,
      'Last watched': fmtDate(s.last), 'First watched': fmtDate(s.first), Genres: (s.genres || []).join(', '), Notes: s.note || '',
      Type: s.movie ? 'Movie' : 'Series', Link: s.url,
    }));
  }
  function seasonsTable(list) {
    const out = [];
    for (const s of list) for (const x of s.seasons || []) if (!x.unknownTotal) out.push({
      Show: s.title, Season: x.t, Status: x.complete ? 'Complete' : x.started ? 'In progress' : 'Not started',
      'Episodes watched': x.w, 'Episodes total': x.n || '',
      'Not watched': x.started && !x.complete && x.list ? x.list.filter((e) => !WATCHED.has(e.st)).map((e) => 'E' + e.l).join(', ') : '',
    });
    return out;
  }
  function episodeTable() {
    const titleOf = (sid) => (state.byId.get(sid) || {}).title || '';
    const cr = (state._cr || state.rows).filter((r) => !state.hidden[r._sid || r.sid]).map((r) => ({
      'Date watched': fmtDate(r.date), Series: titleOf(r._sid || r.sid) || r.series, Service: 'Crunchyroll', Season: r.season, 'Season #': r.sNo, 'Episode #': r.epNo,
      'Episode title': r.title, 'Length (min)': r.durMin || '', 'Progress %': r.pct,
      'Counted as watched': r.done ? (r.how === 'credit' ? 'Yes (next episode watched)' : 'Yes') : 'No',
      Link: r.id ? `https://www.crunchyroll.com/watch/${r.id}` : '',
    }));
    const ext = state.external.filter((x) => !state.hidden['ext:' + x.id]).flatMap((x) => (x.eps || []).map((e) => ({
      'Date watched': fmtDate(e.date), Series: x.title, Service: SERVICES[x.svc].label, Season: '', 'Season #': '', 'Episode #': '',
      'Episode title': e.t, 'Length (min)': x.epMin || S.epMin, 'Progress %': 100, 'Counted as watched': 'Yes', Link: '' })));
    return [...cr, ...ext].sort((a, b) => (a['Date watched'] < b['Date watched'] ? 1 : -1));
  }
  function summaryTable() {
    const T = state.totals;
    return [
      { Stat: 'Days of anime', Value: T.days.toFixed(1) }, { Stat: 'Hours of anime', Value: T.hours },
      { Stat: 'Anime completed', Value: T.completed }, { Stat: 'Seasons completed', Value: T.seasons },
      { Stat: 'Watching', Value: T.watching }, { Stat: 'New seasons waiting', Value: T.newseason }, { Stat: 'Dropped', Value: T.dropped },
      { Stat: 'Movies watched', Value: T.movies }, { Stat: 'Episodes watched', Value: T.watched }, { Stat: 'Backlog', Value: dur(T.backlog) },
      { Stat: 'First anime', Value: T.first ? `${T.first.title} (${fmtDate(T.first.date)})` : '' },
      ...T.years.map((Y) => ({ Stat: `${Y.y}`, Value: `${Y.eps} episodes · ${Y.hours} h · top: ${Y.top}` })),
    ];
  }
  function download(blob, name) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
  }
  // a cell starting with = + - @ (or a tab/return) would be run as a FORMULA by Excel / Google Sheets – make it plain text
  const cellText = (v) => { if (typeof v === 'number') return String(v); const t = String(v ?? ''); return /^[=+\-@\t\r]/.test(t) && !/^-?\d+([.,]\d+)?$/.test(t) ? "'" + t : t; };
  const toCSV = (rows) => { const hd = Object.keys(rows[0] || {}), esc = (v) => `"${cellText(v).replace(/"/g, '""')}"`; return '﻿' + [hd.map(esc).join(','), ...rows.map((r) => hd.map((k) => esc(r[k])).join(','))].join('\r\n'); };
  const toTSV = (rows) => { const hd = Object.keys(rows[0] || {}), c = (v) => cellText(v).replace(/[\t\r\n]+/g, ' '); return [hd.join('\t'), ...rows.map((r) => hd.map((k) => c(r[k])).join('\t'))].join('\n'); };
  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); }
    catch (_) { const t = h('textarea', {}, text); document.body.append(t); t.select(); document.execCommand('copy'); t.remove(); }
  }
  const visible = () => state.series.filter(matches).sort((a, b) => (a.last < b.last ? 1 : -1));
  async function copySheets(kind) {
    if (!state.series.length) return toast('Nothing loaded yet', 'bad');
    await copyText(toTSV(kind === 'seasons' ? seasonsTable(visible()) : showsTable(visible())));
    window.open('https://sheets.new', '_blank');
    toast('Copied! In the new Google Sheet click A1 and press Ctrl+V', 'ok');
  }
  function dl(kind) {
    if (!state.series.length) return toast('Nothing loaded yet', 'bad');
    const csv = (rows, name) => download(new Blob([toCSV(rows)], { type: 'text/csv;charset=utf-8' }), `${name}-${stamp()}.csv`);
    if (kind === 'shows') return csv(showsTable(visible()), 'anime-shows');
    if (kind === 'seasons') return csv(seasonsTable(visible()), 'anime-seasons');
    if (kind === 'episodes') return csv(episodeTable(), 'anime-episodes');
    const all = state.series.filter((s) => !s.hidden).sort((a, b) => (a.last < b.last ? 1 : -1));
    download(xlsxBlob([['Summary', summaryTable()], ['Shows', showsTable(all)], ['Seasons', seasonsTable(all)], ['Episodes', episodeTable()]]), `anime-tracker-${stamp()}.xlsx`);
  }
  // ---- built-in Excel (.xlsx) writer: text is always stored as text (never as a formula), no outside library ----
  const CRC_T = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
  const crc32 = (b) => { let c = 0xffffffff; for (let i = 0; i < b.length; i++) c = CRC_T[(c ^ b[i]) & 255] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };
  function zipStore(files) {                       // files: [[path, Uint8Array]] – stored (no compression), valid ZIP
    const parts = [], central = []; let off = 0;
    const u16 = (v) => [v & 255, (v >>> 8) & 255], u32 = (v) => [v & 255, (v >>> 8) & 255, (v >>> 16) & 255, (v >>> 24) & 255];
    for (const [path, data] of files) {
      const name = new TextEncoder().encode(path), crc = crc32(data);
      const head = [...u32(0x04034b50), ...u16(20), ...u16(0x0800), ...u16(0), ...u16(0), ...u16(0x21), ...u32(crc), ...u32(data.length), ...u32(data.length), ...u16(name.length), ...u16(0)];
      parts.push(new Uint8Array(head), name, data);
      central.push(new Uint8Array([...u32(0x02014b50), ...u16(20), ...u16(20), ...u16(0x0800), ...u16(0), ...u16(0), ...u16(0x21), ...u32(crc), ...u32(data.length), ...u32(data.length), ...u16(name.length), ...u16(0), ...u16(0), ...u16(0), ...u16(0), ...u32(0), ...u32(off)]), name);
      off += head.length + name.length + data.length;
    }
    const cdSize = central.reduce((a, p) => a + p.length, 0);
    return new Blob([...parts, ...central, new Uint8Array([...u32(0x06054b50), ...u16(0), ...u16(0), ...u16(files.length), ...u16(files.length), ...u32(cdSize), ...u32(off), ...u16(0)])],
      { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  }
  function xlsxBlob(sheets) {
    const enc = (t) => new TextEncoder().encode(t);
    const x = (t) => String(t ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const col = (i) => { let s = ''; i++; while (i) { const m = (i - 1) % 26; s = String.fromCharCode(65 + m) + s; i = Math.floor((i - 1) / 26); } return s; };
    const used = sheets.filter(([, rows]) => rows.length).map(([n, rows], i) => [x(n).slice(0, 31) || `Sheet${i + 1}`, rows]);
    const sheetXml = (rows) => {
      const hd = Object.keys(rows[0]);
      const cell = (v, r, c) => (typeof v === 'number' && isFinite(v) ? `<c r="${col(c)}${r}"><v>${v}</v></c>`
        : `<c r="${col(c)}${r}" t="inlineStr"><is><t xml:space="preserve">${x(v)}</t></is></c>`);
      const body = [hd, ...rows.map((o) => hd.map((k) => o[k]))].map((vals, ri) => `<row r="${ri + 1}">${vals.map((v, ci) => cell(v, ri + 1, ci)).join('')}</row>`).join('');
      return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><cols>${hd.map((k, i) => `<col min="${i + 1}" max="${i + 1}" width="${Math.max(12, Math.min(48, k.length + 6))}" customWidth="1"/>`).join('')}</cols><sheetData>${body}</sheetData><autoFilter ref="A1:${col(hd.length - 1)}${rows.length + 1}"/></worksheet>`;
    };
    const files = [
      ['[Content_Types].xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>${used.map((_, i) => `<Override PartName="/xl/worksheets/sheet${i + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`).join('')}</Types>`],
      ['_rels/.rels', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`],
      ['xl/workbook.xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>${used.map(([n], i) => `<sheet name="${n}" sheetId="${i + 1}" r:id="rId${i + 1}"/>`).join('')}</sheets><definedNames>${used.map(([n, rows], i) => `<definedName name="_xlnm._FilterDatabase" localSheetId="${i}" hidden="1">'${n.replace(/'/g, "''")}'!$A$1:$${col(Object.keys(rows[0]).length - 1)}$${rows.length + 1}</definedName>`).join('')}</definedNames></workbook>`],
      ['xl/_rels/workbook.xml.rels', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${used.map((_, i) => `<Relationship Id="rId${i + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${i + 1}.xml"/>`).join('')}<Relationship Id="rId${used.length + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`],
      ['xl/styles.xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="1"><font><sz val="11"/><name val="Calibri"/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>`],
      ...used.map(([, rows], i) => [`xl/worksheets/sheet${i + 1}.xml`, sheetXml(rows)]),
    ];
    return zipStore(files.map(([p, t]) => [p, enc(t)]));
  }
  // debug info is safe to share publicly: no account/profile ids, emails, tokens or watch dates
  const redact = (o) => JSON.parse(JSON.stringify(o, (k, v) => (/account|profile|email|user|token|auth|date_played|created/i.test(k) ? '[removed]' : v)));
  async function copyDebug() {
    const d = { note: 'Contains no account info, tokens or watch dates.', ...redact(state.debug), settings: { ...S, goal: undefined } };
    await copyText(JSON.stringify(d, null, 1).slice(0, 20000)); toast('Debug info copied (no personal info) – paste it in the chat', 'ok');
  }

  // ---------- MyAnimeList / AniList XML export ----------
  async function anilistSearch(queries, say) {
    const cache = (await store.get('malmap3')) || {}, out = {}, todo = [];
    for (const q of queries) { if (cache[q] && Date.now() - cache[q].at < 60 * DAY) out[q] = cache[q].m; else todo.push(q); }
    for (let i = 0; i < todo.length; i += 12) {
      const chunk = todo.slice(i, i + 12), vars = {};
      const parts = chunk.map((q, j) => { vars['s' + j] = q; return `a${j}: Page(perPage: 1) { media(search: $s${j}, type: ANIME) { id idMal episodes format title { romaji english } } }`; });
      const query = `query(${chunk.map((_, j) => `$s${j}: String`).join(', ')}) { ${parts.join(' ')} }`;
      let j = null;
      for (let a = 0; a < 4 && !j; a++) {
        try {
          const r = await origFetch.call(window, 'https://graphql.anilist.co', { method: 'POST', headers: { 'content-type': 'application/json', accept: 'application/json' }, body: JSON.stringify({ query, variables: vars }) });
          if (r.status === 429) { await sleep((+r.headers.get('retry-after') || 30) * 1000); continue; }
          j = await r.json();
        } catch (e) { if (a === 3) throw e; await sleep(1500); }
      }
      chunk.forEach((q, k) => {
        const m = j && j.data && j.data['a' + k] && j.data['a' + k].media && j.data['a' + k].media[0];
        const v = m ? { id: m.id, mal: m.idMal, t: m.title.english || m.title.romaji, eps: m.episodes, f: m.format } : null;
        out[q] = v; cache[q] = { at: Date.now(), m: v };
      });
      if (say) say(Math.min(i + 12, todo.length), todo.length);
      await sleep(750);
    }
    await store.set('malmap3', cache);
    return out;
  }
  function malEntries() {
    const list = [], dates = (eps) => { const d = eps.map((e) => e.date).filter(Boolean).sort(); return [d[0] || '', d[d.length - 1] || '']; };
    for (const s of state.series) {
      if (s.hidden || s.status === 'unavailable') continue;
      const base = { score: s.rating || 0, notes: s.note || '', tags: (s.tags || []).join(', ') };
      if (s.movie || s.ext || !s.seasons || !s.seasons.length || s.seasons[0].unknownTotal) {
        const [st, fin] = dates(s.eps && s.eps.length ? s.eps : s.extList || []);
        list.push({ ...base, q: s.title, label: s.title, w: s.movie ? (s.done ? 1 : 0) : s.done + (s.others || []).reduce((a, o) => a + o.count, 0), n: s.total || 0,
          status: s.status === 'newseason' ? 'completed' : s.status, start: st || s.first, finish: s.status === 'completed' ? fin || s.last : '' });
        continue;
      }
      s.seasons.forEach((x, si) => {
        if (!x.started) return;
        const [st, fin] = dates(s.eps.filter((e) => e._si === si));
        list.push({ ...base, q: x.t.replace(/\([^)]*\)/g, '').trim() || s.title, label: x.t, w: x.w, n: x.n,
          status: x.complete ? 'completed' : s.status === 'dropped' ? 'dropped' : 'watching', start: st, finish: x.complete ? fin : '' });
      });
    }
    return list;
  }
  function malXml(rows) {
    const MS = { watching: 'Watching', completed: 'Completed', dropped: 'Dropped' };
    const cd = (t) => `<![CDATA[${String(t || '').replace(/]]>/g, ']]]]><![CDATA[>')}]]>`, d = (iso) => (iso ? fmtDate(iso) : '0000-00-00');
    const byId = new Map();
    for (const r of rows) { const p = byId.get(r.m.mal); if (!p || r.w > p.w) byId.set(r.m.mal, r); }
    const list = [...byId.values()];
    return `<?xml version="1.0" encoding="UTF-8" ?>\n<myanimelist>\n\t<myinfo>\n\t\t<user_export_type>1</user_export_type>\n\t\t<user_total_anime>${list.length}</user_total_anime>\n\t</myinfo>\n` +
      list.map((r) => {
        const w = r.status === 'completed' && r.m.eps ? r.m.eps : r.m.eps ? Math.min(r.w, r.m.eps) : r.w;
        return `\t<anime>\n\t\t<series_animedb_id>${r.m.mal}</series_animedb_id>\n\t\t<series_title>${cd(r.m.t)}</series_title>\n\t\t<series_type>${r.m.f || ''}</series_type>\n` +
          `\t\t<series_episodes>${r.m.eps || r.n || 0}</series_episodes>\n\t\t<my_id>0</my_id>\n\t\t<my_watched_episodes>${w}</my_watched_episodes>\n` +
          `\t\t<my_start_date>${d(r.start)}</my_start_date>\n\t\t<my_finish_date>${d(r.finish)}</my_finish_date>\n\t\t<my_score>${r.score}</my_score>\n` +
          `\t\t<my_status>${MS[r.status] || 'Watching'}</my_status>\n\t\t<my_comments>${cd(r.notes)}</my_comments>\n\t\t<my_times_watched>0</my_times_watched>\n` +
          `\t\t<my_rewatching>0</my_rewatching>\n\t\t<my_tags>${cd(r.tags)}</my_tags>\n\t\t<update_on_import>1</update_on_import>\n\t</anime>\n`;
      }).join('') + '</myanimelist>\n';
  }

  // ---------- share card ----------
  const PALETTES = { crunchy: ['#ffb15c', '#ff7a1a', '#ff3d6e'], neon: ['#22d3ee', '#8b5cf6', '#d946ef'], sakura: ['#fecdd3', '#f472b6', '#e11d74'],
    ocean: ['#5eead4', '#0ea5e9', '#3b82f6'], midnight: ['#ffffff', '#d4d4d8', '#71717a'], aurora: ['#a7f3d0', '#34d399', '#a855f7'], reaper: ['#fb7185', '#e11d48', '#7f1d1d'] };
  const rgba = (hex, a) => { const n = parseInt(hex.slice(1), 16); return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`; };
  function drawCard(year) {
    const T = scopeTotals(year), W = 1080, H = 1350, P = palette();
    const c = document.createElement('canvas'); c.width = W; c.height = H;
    const x = c.getContext('2d');
    const F = (w, s) => `${w} ${s}px Lato, "Segoe UI", system-ui, sans-serif`;
    const fit = (t, max) => { t = String(t); while (x.measureText(t).width > max && t.length > 1) t = t.slice(0, -2) + '…'; return t; };
    const rr = (X, Y, w, hh, r) => { x.beginPath(); if (x.roundRect) x.roundRect(X, Y, w, hh, r); else x.rect(X, Y, w, hh); };
    let g = x.createLinearGradient(0, 0, W, H); g.addColorStop(0, '#0d0a14'); g.addColorStop(1, '#140806');
    x.fillStyle = g; x.fillRect(0, 0, W, H);
    const glow = (X, Y, R, col) => { const r = x.createRadialGradient(X, Y, 0, X, Y, R); r.addColorStop(0, col); r.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = r; x.fillRect(0, 0, W, H); };
    glow(900, 160, 620, rgba(P[1], .42)); glow(120, 1200, 600, rgba(P[2], .28)); glow(560, 640, 500, 'rgba(140,90,255,.12)');
    x.strokeStyle = 'rgba(255,255,255,.035)'; x.lineWidth = 1;
    for (let i = -H; i < W; i += 46) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i + H, H); x.stroke(); }
    x.fillStyle = P[1]; x.font = F(800, 26);
    try { x.letterSpacing = '6px'; } catch (_) {}
    x.fillText('ANIME RECAP', 80, 110);
    try { x.letterSpacing = '0px'; } catch (_) {}
    x.fillStyle = 'rgba(255,255,255,.6)'; x.font = F(600, 28);
    const who = profile.name || state.name, ttl = currentTitle();
    x.fillText(fit(`${who ? `${who}'s anime` : 'My anime'}${year ? ` · ${year}` : ''}${ttl ? ` · ${ttl.name}` : T.persona ? ` · ${T.persona}` : ''}`, 760), 80, 152);
    if (profile.pic || profile.name) drawAvatar(x, 948, 122, 58, 6);
    g = x.createLinearGradient(80, 200, 700, 420); g.addColorStop(0, P[0]); g.addColorStop(.5, P[1]); g.addColorStop(1, P[2]);
    x.fillStyle = g; x.font = F(900, 230); x.fillText(daysText(T.days), 70, 400);
    const bw = x.measureText(daysText(T.days)).width;
    x.fillStyle = '#fff'; x.font = F(800, 52); x.fillText('days', 95 + bw, 330);
    x.fillStyle = 'rgba(255,255,255,.75)'; x.font = F(600, 40); x.fillText('of anime', 95 + bw, 390);
    x.fillStyle = 'rgba(255,255,255,.72)'; x.font = F(500, 32);
    x.fillText(`${T.hours.toLocaleString()} hours · ${T.watched.toLocaleString()} episodes`, 80, 465);
    T.tiles.forEach(([v, l, col], i) => {
      const X = 80 + (i % 3) * 312, Y = 520 + Math.floor(i / 3) * 170;
      rr(X, Y, 288, 146, 26); x.fillStyle = 'rgba(255,255,255,.06)'; x.fill(); x.strokeStyle = 'rgba(255,255,255,.1)'; x.stroke();
      x.fillStyle = col; x.font = F(900, 64); x.fillText(Number(v).toLocaleString(), X + 28, Y + 82);
      x.fillStyle = 'rgba(255,255,255,.7)'; x.font = F(600, 24); x.fillText(l, X + 28, Y + 120);
    });
    x.fillStyle = '#fff'; x.font = F(800, 30); x.fillText('Most watched', 80, 900);
    const max = Math.max(1, ...T.top.map((s) => s.minutes));
    T.top.forEach((s, i) => {
      const Y = 925 + i * 58;
      x.fillStyle = 'rgba(255,255,255,.07)'; rr(80, Y, 920, 44, 14); x.fill();
      g = x.createLinearGradient(80, 0, 1000, 0); g.addColorStop(0, rgba(P[1], .85)); g.addColorStop(1, rgba(P[2], .85));
      x.fillStyle = g; rr(80, Y, Math.max(44, 920 * (s.minutes / max)), 44, 14); x.fill();
      x.fillStyle = '#fff'; x.font = F(900, 23); x.fillText(`${i + 1}`, 100, Y + 30);
      x.font = F(700, 23); x.fillText(fit(s.title + (s.rating ? `  ★${s.rating}` : ''), 680), 136, Y + 30);
      x.textAlign = 'right'; x.font = F(800, 21); x.fillText(`${Math.round(s.minutes / 60)} h`, 980, Y + 30); x.textAlign = 'left';
    });
    T.years.slice(-8).forEach((Y, i) => {
      const X = 122 + i * 118, CY = 1250;
      g = x.createLinearGradient(X - 40, CY - 40, X + 40, CY + 40); g.addColorStop(0, '#fff'); g.addColorStop(.35, P[0]); g.addColorStop(1, P[1]);
      x.beginPath(); x.arc(X, CY, 40, 0, Math.PI * 2); x.fillStyle = g; x.fill();
      x.lineWidth = 4; x.strokeStyle = 'rgba(255,240,200,.6)'; x.stroke(); x.lineWidth = 1;
      x.fillStyle = '#16161c'; x.font = F(900, 22); x.textAlign = 'center'; x.fillText(String(Y.y), X, CY + 8); x.textAlign = 'left';
    });
    x.fillStyle = 'rgba(255,255,255,.4)'; x.font = F(600, 20); x.textAlign = 'right';
    const svcs = T.services.map((s) => SERVICES[s.k].label).join(' · ');
    x.fillText(`${svcs ? svcs + ' · ' : ''}${T.first ? `since ${new Date(T.first.date).getFullYear()} · ` : ''}Reaperdex by nullreaper`, 1000, 1328); x.textAlign = 'left';
    return c;
  }


  // ================================================================
  // 12. Scoped totals, personality, profile codes, share page
  // ================================================================
  function persona() {
    const I = insights(), T = state.totals, out = [];
    const tot = I.heat.flat().reduce((a, b) => a + b, 0) || 1;
    const night = I.heat.reduce((a, row) => a + row.slice(22).reduce((x, y) => x + y, 0) + row.slice(0, 4).reduce((x, y) => x + y, 0), 0) / tot;
    const weekend = (I.heat[5].reduce((a, b) => a + b, 0) + I.heat[6].reduce((a, b) => a + b, 0)) / tot;
    const perDay = I.activeDays ? allRows().filter((r) => r.date).length / I.activeDays : 0;
    const finishRate = T.completed + T.dropped ? T.completed / (T.completed + T.dropped) : 0;
    if (perDay >= 6) out.push(['Binger', `You average ${perDay.toFixed(1)} episodes on days you watch`]);
    if (night >= 0.35) out.push(['Night Owl', `${Math.round(night * 100)}% of your episodes are after 10pm`]);
    if (weekend >= 0.45) out.push(['Weekend Warrior', `${Math.round(weekend * 100)}% of your watching is on weekends`]);
    if (finishRate >= 0.7 && T.completed >= 5) out.push(['Completionist', `You finish ${Math.round(finishRate * 100)}% of what you start`]);
    if (finishRate < 0.4 && T.dropped >= 5) out.push(['Sampler', 'You try lots of shows and keep the best ones']);
    if (I.best >= 14) out.push(['Streaker', `Longest streak: ${I.best} days in a row`]);
    if (state.series.filter((s) => !s.hidden && !s.movie).length >= 150) out.push(['Explorer', 'Over 150 different anime watched']);
    const top = T.top[0];
    if (top && top.minutes / Math.max(1, T.minutes) >= 0.15) out.push(['Loyalist', `${top.title} is ${Math.round((top.minutes / T.minutes) * 100)}% of your watch time`]);
    if (!out.length) out.push(['Casual Viewer', 'You watch at your own pace']);
    return out;
  }

  function scopeTotals(year) {
    const T = state.totals;
    const traits = persona().slice(0, 2).map((p) => p[0]).join(' · ');
    if (!year) return { ...T, persona: traits, tiles: [[T.completed, 'anime completed', '#b490ff'], [T.seasons, 'seasons completed', '#b490ff'], [T.watching, 'watching now', '#ff8a1f'],
      [T.movies, 'movies', '#5ab4ff'], [T.years.length, T.years.length === 1 ? 'year watching' : 'years watching', '#2ee07c'], [T.newseason, 'new seasons waiting', '#2ee07c']] };
    const R = allRows().filter((r) => r.date && new Date(r.date).getFullYear() === year);
    const minutes = R.reduce((a, r) => a + (r.min || 0), 0), bySid = {};
    for (const r of R) bySid[r.sid] = (bySid[r.sid] || 0) + (r.min || 0);
    const shows = Object.keys(bySid).map((sid) => state.byId.get(sid)).filter(Boolean);
    const done = shows.filter((s) => s.status === 'completed' && new Date(s.last).getFullYear() === year && !s.movie).length;
    const days = new Set(R.map((r) => r.date.slice(0, 10))).size;
    const Y = T.years.find((y) => y.y === year);
    return { days: minutes / 1440, hours: Math.round(minutes / 60), watched: R.length, persona: traits, first: T.first, services: T.services,
      years: Y ? [Y] : [], top: shows.map((s) => ({ title: s.title, rating: s.rating, minutes: bySid[s.sid] })).sort((a, b) => b.minutes - a.minutes).slice(0, 5),
      tiles: [[done, 'anime finished', '#b490ff'], [shows.filter((s) => !s.movie).length, 'different anime', '#b490ff'], [days, 'days watching', '#ff8a1f'],
        [shows.filter((s) => s.movie).length, 'movies', '#5ab4ff'], [Math.round(R.length / Math.max(1, days) * 10) / 10, 'eps per active day', '#2ee07c'], [Y ? Y.n : 1, `year ${Y ? Y.n : 1} of anime`, '#2ee07c']] };
  }

  async function b64(bytes) { let s = ''; bytes.forEach((b) => (s += String.fromCharCode(b))); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
  async function profileCode() {
    const T = state.totals;
    const list = state.series.filter((s) => !s.hidden && s.status !== 'unavailable').sort((a, b) => b.minutes - a.minutes).slice(0, 700)
      .map((s) => [s.title, s.status[0], s.rating || 0, Math.round(s.minutes)]);
    const data = JSON.stringify({ v: 1, n: state.name || 'Friend', d: +T.days.toFixed(1), h: T.hours, c: T.completed, s: T.seasons, e: T.watched, y: T.years.length, l: list });
    try {
      const cs = new Blob([data]).stream().pipeThrough(new CompressionStream('deflate-raw'));
      return 'NRA1.' + (await b64(new Uint8Array(await new Response(cs).arrayBuffer())));
    } catch (_) { return 'NRA0.' + btoa(unescape(encodeURIComponent(data))); }
  }
  async function readCode(code) {
    code = String(code || '').trim();
    if (code.length > 400000) throw new Error('code too long');
    return checkCode(await readCodeRaw(code));
  }
  // a friend's code comes from another person: only accept the exact shape Reaperdex makes, within sane limits
  function checkCode(f) {
    const n = (v) => (typeof v === 'number' && isFinite(v) && v >= 0 && v < 1e7 ? v : 0);
    if (!f || typeof f !== 'object' || !Array.isArray(f.l)) throw new Error('bad code');
    return { v: 1, n: typeof f.n === 'string' ? f.n.slice(0, 40) : 'Friend', d: n(f.d), h: n(f.h), c: n(f.c), s: n(f.s), e: n(f.e), y: n(f.y),
      l: f.l.slice(0, 1000).filter((x) => Array.isArray(x) && typeof x[0] === 'string')
        .map(([t, st, r, m]) => [t.slice(0, 200), ['w', 'c', 'd', 'n', 'u', 'p'].includes(st) ? st : 'w', Number.isInteger(r) && r >= 0 && r <= 10 ? r : 0, n(m)]) };
  }
  async function readCodeRaw(code) {
    const raw = code.slice(5).replace(/-/g, '+').replace(/_/g, '/');
    const bin = Uint8Array.from(atob(raw + '==='.slice((raw.length + 3) % 4)), (c) => c.charCodeAt(0));
    if (code.startsWith('NRA0.')) return JSON.parse(new TextDecoder().decode(bin));
    if (!code.startsWith('NRA1.')) throw new Error('bad code');
    // stop reading if it unpacks to something huge (a "zip bomb")
    const rd = new Blob([bin]).stream().pipeThrough(new DecompressionStream('deflate-raw')).getReader();
    const chunks = []; let total = 0;
    for (;;) { const { done, value } = await rd.read(); if (done) break; total += value.length; if (total > 3e6) { rd.cancel(); throw new Error('code too big'); } chunks.push(value); }
    return JSON.parse(new TextDecoder().decode(await new Blob(chunks).arrayBuffer()));
  }

  function sharePage() {
    const T = state.totals, esc = (t) => String(t ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])), https = (u) => (/^https:\/\/[^\s"'()<>\\]+$/i.test(u || '') ? u : '');
    const list = state.series.filter((s) => !s.hidden && s.status !== 'unavailable').sort((a, b) => (a.last < b.last ? 1 : -1));
    const card = (s) => `<a class="c" href="${esc(https(s.url) || '#')}" style="--c:${STATUS[s.status].color}"><div class="a" style="background-image:url('${esc(https(s.thumb))}')"><span>${esc(STATUS[s.status].label)}</span>${s.rating ? `<b>★ ${s.rating}</b>` : ''}</div><div class="t">${esc(s.title)}</div><div class="m">${s.total ? `${s.done}/${s.total} eps` : `${s.done} eps`} · ${Math.round(s.minutes / 60)} h${s.fav ? ' · ♥' : ''}</div></a>`;
    const html = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(state.name || 'My')} anime list</title>
<style>body{margin:0;background:#07070b;color:#f2f2f5;font-family:Lato,Segoe UI,system-ui,sans-serif}main{max-width:1300px;margin:0 auto;padding:40px 24px}
h1{margin:0;font-size:15px;letter-spacing:.16em;text-transform:uppercase;color:#ffb27a}.big{font-size:96px;font-weight:900;line-height:1;background:linear-gradient(135deg,#ff9a3c,#ff6a1a 45%,#ff3d6e);-webkit-background-clip:text;color:transparent}
.sub{color:#bbb;margin:6px 0 26px}.st{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:30px}.st div{padding:14px 18px;border-radius:16px;background:rgba(255,255,255,.05)}.st b{display:block;font-size:26px}
.g{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px}.c{color:inherit;text-decoration:none;border-radius:16px;overflow:hidden;background:#101016;box-shadow:inset 0 0 0 1px rgba(255,255,255,.08)}
.a{position:relative;aspect-ratio:16/9;background:#1a1a22 center/cover}.a span{position:absolute;left:10px;top:10px;padding:4px 9px;border-radius:20px;background:rgba(0,0,0,.7);font-size:10px;font-weight:900;text-transform:uppercase;box-shadow:inset 0 0 0 1px var(--c)}
.a b{position:absolute;right:10px;top:10px;padding:4px 8px;border-radius:8px;background:rgba(0,0,0,.7);font-size:12px;color:#ffd36b}.t{padding:10px 12px 2px;font-weight:800}.m{padding:0 12px 12px;color:#999;font-size:13px}</style></head>
<body><main><h1>${esc(state.name ? state.name + '’s anime' : 'My anime')}</h1><div class="big">${daysText(T.days)} days</div><div class="sub">of anime · ${T.hours.toLocaleString()} hours · ${T.watched.toLocaleString()} episodes · ${esc(persona().slice(0, 2).map((p) => p[0]).join(' · '))}</div>
<div class="st"><div><b>${T.completed}</b>completed</div><div><b>${T.seasons}</b>seasons</div><div><b>${T.watching}</b>watching</div><div><b>${T.movies}</b>movies</div><div><b>${T.years.length}</b>years</div></div>
<div class="g">${list.map(card).join('')}</div><p class="sub" style="margin-top:30px">Made with the Crunchyroll Reaperdex by nullreaper · ${new Date().toLocaleDateString('en-GB')}</p></main></body></html>`;
    download(new Blob([html], { type: 'text/html' }), `my-anime-list-${stamp()}.html`);
    toast('Web page downloaded – send the file to your mates', 'ok');
  }

  function notifyNew(alerts) {
    if (!S.notify || !('Notification' in window) || Notification.permission !== 'granted') return;
    try { new Notification('New episodes out', { body: alerts.slice(0, 4).join(', ') + (alerts.length > 4 ? ` +${alerts.length - 4} more` : ''), tag: 'nrcx-new' }); } catch (_) {}
  }

  // ================================================================
  // 13. UI shell
  // ================================================================
  const ui = {};
  const inFilter = (s, f, q) => {
    if (f === 'hidden') return s.hidden;
    if (s.hidden) return false;
    if (f === 'all') return s.status !== 'unavailable' || !!q;
    if (f === 'movies') return s.movie;
    if (f === 'other') return s.svc !== 'crunchyroll' || s.others.length > 0;
    if (f === 'newep') return !!s.fresh;
    if (f === 'fav') return s.fav;
    if (f === 'look') return lookIds().has(s.sid);
    if (f === 'airing') return !!s.airing;
    if (f === 'all' && s.plan) return !!q;
    if (f === 'almost') return s.status === 'watching' && s.total && s.total - s.done > 0 && s.total - s.done <= 3;
    return s.status === f;
  };
  // search ignores punctuation, spacing and word order: "re zero" finds Re:ZERO, "spy family" finds SPY x FAMILY
  const qKey = (x) => norm(x).replace(/[^a-z0-9\u3040-\u30ff\u4e00-\u9fff]+/g, ' ').trim();
  const qHit = (title, q) => { const tt = qKey(title), tc = tt.replace(/ /g, ''); return qKey(q).split(' ').filter(Boolean).every((w) => tt.includes(w) || tc.includes(w)); };
  const matches = (s) => {
    const q = norm(state.q);
    return inFilter(s, state.filter, q) && (!state.genre || (s.genres || []).includes(state.genre)) && (!state.tag || (s.tags || []).includes(state.tag))
      && (!state.year || s.years.has(state.year)) && (!q || qHit(s.title, q));
  };
  function setSyncLabel(t, busy) {
    if (!ui.sync) return;
    ui.sync.classList.toggle('busy', !!busy);
    const q = (state.queue || []).length;
    ui.syncTxt.textContent = t || (state.at ? `Synced ${ago(new Date(state.at).toISOString())}` : 'Not synced yet') + (q && !t ? ` · ${q} waiting for Crunchyroll` : '');
  }
  function setBadge(n) { if (ui.badge) { ui.badge.textContent = n ? '+' + n : ''; ui.badge.style.display = n ? '' : 'none'; } }
  function dd(btn, items, cls = '') {
    const menu = h('div', { class: 'cx-menu ' + cls }, ...items.map((it) => it === '-' ? h('div', { class: 'cx-mi-sep' })
      : h('button', { class: 'cx-mi', onclick: () => { menu.classList.remove('open'); it[2](); } }, h('b', {}, it[0]), it[1] ? h('span', {}, it[1]) : null)));
    btn.addEventListener('click', (e) => { e.stopPropagation(); const was = menu.classList.contains('open'); ui.root.querySelectorAll('.cx-menu.open').forEach((m) => m.classList.remove('open')); if (!was) menu.classList.add('open'); });
    return h('div', { class: 'cx-dd' }, btn, menu);
  }
  function applyTheme() { if (ui.root) { ui.root.dataset.theme = S.theme || 'crunchy'; applyCustom(); } }

  function buildUI() {
    if (document.getElementById('cx-root')) return;
    document.head.append(h('style', {}, CSS));
    ui.root = h('div', { id: 'cx-root' });
    applyTheme();
    ui.toasts = h('div', { class: 'cx-toasts' });
    ui.badge = h('span', { class: 'cx-launch-badge', style: 'display:none' });
    ui.launch = h('button', { class: 'cx-launch', title: 'Open Reaperdex – your anime tracker', onclick: open }, h('span', { class: 'cx-launch-ico' }, h('span', {})), h('span', {}, 'Reaperdex'), ui.badge);
    ui.syncTxt = h('span', {}, '');
    ui.sync = h('button', { class: 'cx-sync', title: 'Sync now – picks up anything you watched on other devices', onclick: () => load('sync') }, h('i', { class: 'cx-sync-ico' }, '↻'), ui.syncTxt);
    const tab = (id, label) => h('button', { class: 'cx-tab', 'data-v': id, onclick: () => { state.view = id; render(); ui.overlay.scrollTo({ top: 0 }); } }, label);
    ui.tabs = h('div', { class: 'cx-tabs' }, tab('library', 'Library'), tab('insights', 'Insights'));
    const addMenu = dd(h('button', { class: 'cx-btn ghost cx-addbtn', title: 'Add' }, '＋', h('span', { class: 'cx-lbl' }, ' Add')), [
      ['Find a missing show', 'Search Crunchyroll and pull your real progress for it', () => findModal()],
      '-',
      ['Import from Netflix', 'Account → Viewing activity → Download all, then pick the file', () => pickFile('.csv,text/csv', readImport)],
      ['Import a CSV', 'Any list with a Title column (Prime, Disney+, a spreadsheet…)', () => pickFile('.csv,text/csv', readImport)],
      ['Add a show manually', 'For Disney+, Prime Video or anything else', () => manualModal()],
    ]);
    const exportMenu = dd(h('button', { class: 'cx-btn primary cx-exportbtn', title: 'Export' }, h('span', { class: 'cx-ico-m' }, '⤓'), h('span', { class: 'cx-lbl' }, 'Export ▾')), [
      ['Share card', 'An image for your mates – all time or any year', () => openShare()],
      ['Share page', 'Your whole list as a web page to send', sharePage],
      ['Compare with a friend', 'Swap codes, see shared anime + recommendations', () => compareModal()],
      '-',
      ['MyAnimeList / AniList (XML)', 'The file both sites import – you check every match first', () => malModal()],
      ['Copy to Google Sheets', 'Shows list – no Excel needed', () => copySheets('shows')],
      ['Copy seasons to Google Sheets', 'Every season + what you haven’t watched', () => copySheets('seasons')],
      ['Excel (.xlsx)', 'Summary, shows, seasons, every episode', () => dl('xlsx')],
      ['CSV – shows', null, () => dl('shows')], ['CSV – seasons', null, () => dl('seasons')], ['CSV – every episode', null, () => dl('episodes')],
      '-',
      ['Backup tracker data', 'Marks, hidden, ratings, tags, other services', backup],
      ['Restore a backup', null, () => pickFile('.json,application/json', restore)],
      ['Deep scan', 'Ask Crunchyroll for your progress on every show + watchlist', () => runDeep()],
      ['Full rescan', 'Re-read your whole Crunchyroll history', () => load('full')],
      ['Fix “1s left” on Crunchyroll', 'Episodes marked by an older version show 1s left – save them as fully played', () => fixShortMarks()],
      ['Copy debug info', 'If something looks wrong, send this to nullreaper', copyDebug],
    ], 'right');
    ui.main = h('main', { class: 'cx-main' });
    ui.overlay = h('div', { class: 'cx-overlay' }, h('div', { class: 'cx-bgfx' }),
      h('header', { class: 'cx-top' },
        h('div', { class: 'cx-brand' }, h('span', { class: 'cx-logo' }, h('span', {})), h('div', {}, h('div', { class: 'cx-title' }, 'Reaperdex'), h('div', { class: 'cx-by' }, `v${VERSION} · by nullreaper`))),
        ui.tabs,
        (ui.actions = h('div', { class: 'cx-actions' }, ui.sync, addMenu, h('button', { class: 'cx-btn ghost cx-sharebtn', onclick: () => openShare() }, '✦ Share'), exportMenu,
          h('button', { class: 'cx-btn icon', title: 'Settings', onclick: settingsModal }, '⚙'),
          h('button', { class: 'cx-btn icon', title: 'Close (Esc)', onclick: close }, '✕')))),
      ui.main);
    ui.drawer = h('div', { class: 'cx-drawer-wrap' }, h('div', { class: 'cx-drawer-bg', onclick: closeDrawer }), (ui.panel = h('aside', { class: 'cx-drawer' })));
    ui.bulk = h('div', { class: 'cx-bulk' });
    const svg = (d) => { const e = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); e.setAttribute('viewBox', '0 0 24 24');
      for (const p of d) { const q = document.createElementNS('http://www.w3.org/2000/svg', 'path'); q.setAttribute('d', p); e.append(q); } return e; };
    const ICONS = { library: ['M4 4h7v7H4z', 'M13 4h7v7h-7z', 'M4 13h7v7H4z', 'M13 13h7v7h-7z'], insights: ['M5 20V11', 'M12 20V4', 'M19 20v-6'],
      share: ['M12 3v12', 'M7 8l5-5 5 5', 'M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5'], me: ['M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M4 21a8 8 0 0 1 16 0'] };
    const nb = (v, ico, label, fn) => h('button', { class: 'cx-mnav-b', 'data-v': v, onclick: fn }, svg(ICONS[v]), h('span', {}, label));
    ui.mnav = h('nav', { class: 'cx-mnav' },
      nb('library', '▦', 'Library', () => { closeDrawer(); state.view = 'library'; render(); ui.overlay.scrollTo({ top: 0 }); }),
      nb('insights', '◔', 'Insights', () => { closeDrawer(); state.view = 'insights'; render(); ui.overlay.scrollTo({ top: 0 }); }),
      nb('share', '✦', 'Share', () => openShare()),
      nb('me', '☺', 'Profile', () => profileModal()));
    ui.overlay.append(ui.mnav);
    ui.root.append(ui.launch, ui.overlay, ui.drawer, ui.bulk, ui.toasts);
    document.body.append(ui.root);

    document.addEventListener('click', (e) => { if (!e.target.closest || !e.target.closest('.cx-dd')) ui.root.querySelectorAll('.cx-menu.open').forEach((m) => m.classList.remove('open')); });
    document.addEventListener('keydown', onKey, true);
    let wasWatching = false;
    const watchCheck = () => {
      const w = location.pathname.includes('/watch/');
      ui.launch.style.display = w ? 'none' : '';
      // just left the player: give Crunchyroll a few seconds to save, then sync
      if (wasWatching && !w && state.rows.length) setTimeout(() => { if (!state.busy) load('quiet'); }, 4000);
      wasWatching = w;
    };
    watchCheck(); setInterval(watchCheck, 1000);
    setInterval(() => { if (!state.busy) setSyncLabel(); }, 30000);
    (async () => {
      const had = await loadCache();
      applyTheme(); setSyncLabel();
      if (had) { await sleep(4000); load(state.needFull ? 'full' : 'quiet'); }
    })();
    setInterval(() => { if (S.syncMin && state.rows.length && !document.hidden) load('quiet'); }, Math.max(2, S.syncMin || 10) * 60000);
    document.addEventListener('visibilitychange', () => { if (!document.hidden && S.syncMin && state.rows.length && Date.now() - state.at > 2 * 60000) load('quiet'); });
  }

  function onKey(e) {
    if (!ui.overlay || !ui.overlay.classList.contains('open')) return;
    const typing = e.target && e.target.closest && e.target.closest('input,textarea,select');
    if (e.key === 'Escape') {
      const m = ui.root.querySelector('.cx-modal'); if (m) { m.querySelector('.cx-modal-bg').click(); e.stopPropagation(); return; }
      if (ui.drawer.classList.contains('open')) { closeDrawer(); e.stopPropagation(); return; }
      if (state.selecting) { state.selecting = false; state.sel.clear(); render(); return; }
      if (typing) { e.target.blur(); return; }
      close(); return;
    }
    if (typing || e.ctrlKey || e.metaKey || e.altKey || ui.root.querySelector('.cx-modal')) return;
    const k = e.key.toLowerCase(), act = {
      '/': () => { state.view = 'library'; render(); setTimeout(() => ui.search && ui.search.focus(), 0); },
      l: () => { state.view = 'library'; render(); }, i: () => { state.view = 'insights'; render(); },
      s: () => openShare(), r: () => randomPick(), m: () => { state.selecting = !state.selecting; state.sel.clear(); render(); },
      v: () => { S.layout = S.layout === 'list' ? 'grid' : 'list'; savePrefs(); render(); }, '?': () => helpModal(),
    }[k];
    if (act) { e.preventDefault(); e.stopPropagation(); act(); }
  }

  async function open() {
    ui.overlay.classList.add('open');
    document.documentElement.style.overflow = 'hidden';
    setBadge(0);
    if (!state.series.length && !state.busy) {
      const had = await loadCache(); applyTheme();
      if (!had) { ui.main.replaceChildren(loader('Starting…')); ui.grid = ui.main; return load('full').then(() => whatsNew()); }
    }
    if (applyLive()) buildSeries();
    render();
    whatsNew();
    const fresh = [...livePH.values()].some((v) => v.at > state.at);
    if ((fresh || Date.now() - state.at > 60000) && !state.busy) load(state.needFull ? 'full' : 'sync');
  }
  function close() { ui.overlay.classList.remove('open'); closeDrawer(); document.documentElement.style.overflow = ''; }

  function render() {
    if (!ui.overlay || !state.totals) return;
    if (!state.busy) setSyncLabel();
    ui.tabs.querySelectorAll('.cx-tab').forEach((t) => t.classList.toggle('on', t.dataset.v === state.view));
    if (ui.mnav) ui.mnav.querySelectorAll('.cx-mnav-b').forEach((t) => t.classList.toggle('on', t.dataset.v === state.view));
    if (state.view === 'insights') { ui.main.replaceChildren(renderInsights()); ui.grid = null; }
    else renderLibrary();
    renderBulk();
  }

  // ================================================================
  // 14. Library
  // ================================================================
  // generated artwork for shows without a picture (removed titles, other services)
  const hue = (t) => { let x = 0; for (const c of String(t)) x = (x * 31 + c.charCodeAt(0)) % 360; return x; };
  const artBg = (s) => s.thumb ? `background-image:url("${s.thumb}")`
    : `background-image:radial-gradient(circle at 80% 20%,hsl(${(hue(s.title) + 50) % 360} 80% 55% / .55),transparent 55%),linear-gradient(135deg,hsl(${hue(s.title)} 65% 34%),hsl(${(hue(s.title) + 30) % 360} 60% 12%))`;
  const initials = (t) => String(t || '?').replace(/[^\p{L}\p{N} ]/gu, ' ').split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

  function needsLook() {
    return state.series.filter((s) => !s.hidden && !s.ext && !s.movie && s.status !== 'completed' && !(state.lookOk || {})[s.sid] &&
      (s.noSeasons || s.unplaced >= 2 || s.status === 'unavailable' || (s.count <= 2 && s.total > 4) || (s.seasons && s.seasons.length && s.seasons.every((x) => x.extra)))).sort((a, b) => (a.last < b.last ? 1 : -1));
  }
  const lookIds = () => state.lookIds || (state.lookIds = new Set(needsLook().map((x) => x.sid)));
  function renderCheckCard() {
    const C = state.check, look = needsLook();
    ui.checkBox = h('section', { class: 'cx-check-card' + (C.running ? ' running' : look.length ? ' warn' : ' ok') });
    renderCheck(true);
    return ui.checkBox;
  }
  function renderCheck(force) {
    if (!ui.checkBox || (!force && !ui.checkBox.isConnected)) return;
    const C = state.check, look = needsLook(), pct = C.total ? Math.round((C.done / C.total) * 100) : 0;
    ui.checkBox.className = 'cx-check-card' + (C.running ? ' running' : look.length ? ' warn' : ' ok') + (S.checkOpen ? '' : ' slim');
    const toggle = h('button', { class: 'cx-btn xs ghost cx-ck-toggle', title: S.checkOpen ? 'Hide the Library check' : 'Show the Library check',
      onclick: () => { S.checkOpen = !S.checkOpen; savePrefs(); renderCheck(); } }, S.checkOpen ? 'Hide ▴' : 'Show ▾');
    if (!S.checkOpen) {
      ui.checkBox.replaceChildren(...[
        h('span', { class: 'cx-ck-dot' }, C.running ? h('span', { class: 'cx-spin xs' }) : look.length ? '!' : '✓'),
        h('span', { class: 'cx-ck-slimtxt' }, C.running ? `Checking with Crunchyroll… ${C.done}/${C.total}` : `Library check ✓${C.total ? ` · ${C.total} verified` : ''}`,
          look.length && !C.running ? h('button', { class: 'cx-link inline', onclick: () => { state.filter = 'look'; renderLibrary(); } }, `${look.length} need a look`) : null),
        C.running ? h('span', { class: 'cx-ck-bar slim' }, h('i', { style: `width:${pct}%` })) : null,
        toggle].filter(Boolean));
      return;
    }
    ui.checkBox.replaceChildren(...[
      h('div', { class: 'cx-ck-head' },
        h('span', { class: 'cx-ck-ico' }, C.running ? h('span', { class: 'cx-spin sm' }) : look.length ? '!' : '✓'),
        h('div', { class: 'cx-ck-txt' },
          h('b', {}, C.running ? `Checking every show with Crunchyroll… ${C.done}/${C.total}` : C.at ? `Library check ✓ ${plural(C.total || 0, 'show')} verified ${ago(new Date(C.at).toISOString())}` : 'Library check hasn’t run yet'),
          h('span', {}, C.running ? `Found ${plural(C.found, 'missing episode')} so far – you can keep using the tracker`
            : C.found ? `Found ${plural(C.found, 'episode')} your Crunchyroll history had lost` : 'Compares every show with Crunchyroll’s saved progress so nothing is missed')),
        h('div', { class: 'cx-ck-act' },
          h('button', { class: 'cx-btn xs', onclick: () => findModal() }, 'Find a missing show'),
          !C.running ? h('button', { class: 'cx-btn xs primary', onclick: () => checkLibrary(true) }, C.at ? 'Check again' : 'Check everything') : null, toggle)),
      C.running ? h('div', { class: 'cx-ck-bar' }, h('i', { style: `width:${pct}%` })) : null,
      look.length && !C.running ? h('div', { class: 'cx-ck-look' },
        h('div', { class: 'cx-ck-lookhead' },
          h('span', { class: 'cx-plabel' }, `Needs a look (${look.length}) – shows that may be missing episodes`)),
        true ? h('div', { class: 'cx-ck-list' }, ...look.slice(0, 9).map((s) => h('div', { class: 'cx-ck-item' },
          h('span', { class: 'cx-ck-name', title: s.title }, s.title), h('span', { class: 'cx-dim' }, s.status === 'unavailable' ? 'no details' : s.noSeasons ? 'no season info' : s.unplaced >= 2 ? `${s.unplaced} eps not matched` : `only ${plural(s.count, 'episode')}`),
          h('button', { class: 'cx-btn xs', title: 'Search Crunchyroll and pull your real progress', onclick: () => findModal(s.title) }, 'Fix'),
          h('button', { class: 'cx-btn xs ghost', title: 'Looks right – stop flagging this show', onclick: async () => { (state.lookOk = state.lookOk || {})[s.sid] = Date.now(); state.lookIds = null; await savePrefs(); renderCheck(); if (ui.bar && ui.bar.isConnected) ui.bar.replaceWith(renderBar()); } }, '✓'),
          h('button', { class: 'cx-btn xs ghost', title: 'I didn’t really watch this – remove it', onclick: () => hideShows([s.sid]) }, '✕')))) : null,
        look.length > 9 ? h('button', { class: 'cx-link', onclick: () => { state.filter = 'look'; renderLibrary(); setTimeout(() => ui.bar && ui.bar.scrollIntoView({ behavior: 'smooth', block: 'start' }), 30); } }, `Show all ${look.length} in the list →`) : null) : null].filter(Boolean));
  }

  // ---- Airing this week ----
  function until(at) {
    const m = Math.max(0, (at - Date.now()) / 60000);
    if (m < 60) return `in ${Math.round(m)}m`;
    if (m < 1440) return `in ${Math.floor(m / 60)}h ${Math.round(m % 60)}m`;
    return `in ${Math.floor(m / 1440)}d ${Math.floor((m % 1440) / 60)}h`;
  }
  function renderAiring() {
    if (!S.airing) return (ui.airSec = h('span', {}));
    const all = state.series.filter((s) => s.airing && !s.hidden && s.airing.at > Date.now()).sort((a, b) => a.airing.at - b.airing.at);
    const open = S.airOpen !== false, view = S.airView || 'week';
    const redraw = () => { savePrefs(); const old = ui.airSec; old.replaceWith(renderAiring()); };
    const dayName = (at) => { const d = new Date(at), t = new Date(); t.setHours(0, 0, 0, 0); const k = Math.floor((d - t) / DAY);
      return k === 0 ? 'Today' : k === 1 ? 'Tomorrow' : d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: k > 6 ? 'short' : undefined }); };
    const time = (at) => new Date(at).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    const seg = (k, label) => h('button', { class: 'cx-airseg-b' + (view === k ? ' on' : ''), onclick: () => { S.airView = k; redraw(); } }, label);
    const nx = all[0];
    const head = h('div', { class: 'cx-sec-h cx-air-head' },
      h('button', { class: 'cx-air-fold', title: open ? 'Collapse' : 'Expand', onclick: () => { S.airOpen = !open; redraw(); } },
        h('i', { class: 'cx-air-chev' + (open ? ' open' : '') }, '›'), h('h2', {}, 'Airing soon')),
      h('span', {}, open ? (all.length ? `${plural(all.length, 'show')} you follow` : 'Nothing you follow is airing right now')
        : nx ? `Next: ${nx.title} E${nx.airing.ep} · ${dayName(nx.airing.at)} ${time(nx.airing.at)}${all.length > 1 ? ` · +${all.length - 1} more` : ''}` : 'Nothing airing'),
      h('div', { class: 'cx-air-tools' },
        open && all.length ? h('div', { class: 'cx-airseg' }, seg('week', 'Week'), seg('list', 'List')) : null,
        h('button', { class: 'cx-btn xs ghost', title: 'Look up airing times again', onclick: () => refreshAiring(true) }, '↻')));
    let body = null;
    if (open && all.length && view === 'list') {
      body = h('div', { class: 'cx-airlist' }, ...all.map((s) => h('button', { class: 'cx-airrow', style: `--c:${STATUS[s.status].color}`, onclick: () => openDrawer(s.sid) },
        h('span', { class: 'cx-airrow-d' }, dayName(s.airing.at)), h('b', {}, time(s.airing.at)), h('span', { class: 'cx-airrow-t' }, s.title), h('em', {}, `E${s.airing.ep}`), h('span', { class: 'cx-airrow-u' }, until(s.airing.at)))));
    } else if (open && all.length) {
      const days = [];
      for (let i = 0; i < 7; i++) { const d = new Date(); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() + i); days.push(d); }
      const later = all.filter((s) => s.airing.at >= days[6].getTime() + DAY).length;
      body = h('div', {}, h('div', { class: 'cx-week' }, ...days.map((d, i) => {
        const items = all.filter((s) => { const a = new Date(s.airing.at); return a >= d && a < new Date(d.getTime() + DAY); });
        return h('div', { class: 'cx-day' + (i === 0 ? ' today' : '') },
          h('div', { class: 'cx-day-h' }, i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric' })),
          ...(items.length ? items.map((s) => h('button', { class: 'cx-air', style: `--c:${STATUS[s.status].color}`, title: s.title, onclick: () => openDrawer(s.sid) },
            h('b', {}, time(s.airing.at)), h('span', {}, s.title), h('em', {}, `E${s.airing.ep}`)))
            : [h('div', { class: 'cx-day-empty' }, '–')]));
      })), later ? h('button', { class: 'cx-link cx-air-more', onclick: () => { S.airView = 'list'; redraw(); } }, `+ ${plural(later, 'more show')} airing later – see the list`) : null);
    }
    return (ui.airSec = h('section', { class: 'cx-sec cx-airsec' + (open ? '' : ' folded') }, head, body));
  }
  // ---- More like this ----
  async function renderRecs() {
    const box = ui.recs; if (!box) return;
    const seeds = state.series.filter((s) => !s.hidden && !s.ext && !s.movie && !s.plan && (s.fav || s.rating >= 8 || s.status === 'completed'))
      .sort((a, b) => (b.fav - a.fav) || (b.rating - a.rating) || (b.minutes - a.minutes)).slice(0, 3);
    if (!seeds.length) return;
    const cache = (await store.get('similar3')) || {};
    const have = new Set(state.series.filter((s) => !s.plan).flatMap((s) => s.members || [s.sid])), haveT = new Set(state.series.filter((s) => !s.plan).map((s) => tkey(s.title)));
    const picks = [], seen = new Set();
    for (const seed of seeds) {
      let list = cache[seed.sid] && Date.now() - cache[seed.sid].at < 3 * DAY ? cache[seed.sid].l : null;
      if (!list) { await waitForToken(); list = await fetchSimilar(seed.sid); if (list) cache[seed.sid] = { at: Date.now(), l: list }; }
      for (const r of list || []) if (!have.has(r.sid) && !haveT.has(tkey(r.t)) && !seen.has(r.sid) && !state.hidden[r.sid]) { seen.add(r.sid); picks.push({ ...r, because: seed.title }); }
    }
    store.set('similar3', cache);
    if (!picks.length || !box.isConnected) return;
    box.replaceChildren(
      h('div', { class: 'cx-sec-h' }, h('h2', {}, 'More like this'), h('span', {}, `Because you liked ${seeds.map((s) => s.title).slice(0, 2).join(' and ')}`)),
      h('div', { class: 'cx-row' }, ...picks.slice(0, 14).map((r) => {
        const planned = state.plan && state.plan[r.sid];
        return h('div', { class: 'cx-rec' },
          h('a', { class: 'cx-rec-art', href: `https://www.crunchyroll.com/series/${r.sid}`, style: artBg({ thumb: r.img, title: r.t }) }, r.img ? null : h('span', { class: 'cx-ini' }, initials(r.t)), h('div', { class: 'cx-shade' }), h('div', { class: 'cx-cw-t' }, r.t)),
          h('div', { class: 'cx-rec-b' }, h('span', { class: 'cx-dim' }, `Like ${r.because}`),
            h('button', { class: 'cx-btn xs' + (planned ? '' : ' primary'), onclick: (e) => { if (!planned) { addPlan(r); e.currentTarget.textContent = '✓ Planned'; e.currentTarget.classList.remove('primary'); } } }, planned ? '✓ Planned' : '＋ Plan')));
      })));
  }

  function renderLibrary() {
    ui.grid = h('div', { class: S.layout === 'list' ? 'cx-list' : 'cx-grid' });
    ui.recs = h('section', { class: 'cx-sec cx-recs' });
    ui.main.replaceChildren(renderHero(), renderCheckCard(), renderContinue(), renderAiring(), ui.recs, renderAwards(), renderBar(), ui.grid);
    renderRecs();
    renderGrid();
  }

  function goalInfo() {
    if (!S.goal) return null;
    const now = new Date(), start = new Date(now);
    if (S.goalPeriod === 'week') { start.setDate(now.getDate() - ((now.getDay() + 6) % 7)); start.setHours(0, 0, 0, 0); }
    else if (S.goalPeriod === 'month') start.setFullYear(now.getFullYear(), now.getMonth(), 1), start.setHours(0, 0, 0, 0);
    else start.setFullYear(now.getFullYear(), 0, 1), start.setHours(0, 0, 0, 0);
    const R = allRows().filter((r) => r.date && new Date(r.date) >= start && r.done);
    const v = S.goalUnit === 'hours' ? R.reduce((a, r) => a + (r.min || 0), 0) / 60 : R.length;
    return { v, pct: Math.min(1, v / S.goal), label: `${S.goalUnit === 'hours' ? v.toFixed(1) : v} / ${S.goal} ${S.goalUnit}`, period: { week: 'this week', month: 'this month', year: 'this year' }[S.goalPeriod] };
  }
  function ring(pct, size = 92) {
    const r = size / 2 - 7, c = 2 * Math.PI * r, NS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(NS, 'svg'); svg.setAttribute('width', size); svg.setAttribute('height', size); svg.setAttribute('class', 'cx-ring');
    const el = (tag, attrs, parent) => { const e = document.createElementNS(NS, tag); for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, String(v)); parent.append(e); return e; };
    const grad = el('linearGradient', { id: 'cxg', x1: 0, y1: 0, x2: 1, y2: 1 }, el('defs', {}, svg));
    el('stop', { offset: 0, 'stop-color': 'var(--acc1)' }, grad); el('stop', { offset: 1, 'stop-color': 'var(--acc2)' }, grad);
    const C = size / 2, p = Math.max(0, Math.min(1, Number(pct) || 0));
    el('circle', { cx: C, cy: C, r, fill: 'none', stroke: 'rgba(255,255,255,.08)', 'stroke-width': 9 }, svg);
    el('circle', { cx: C, cy: C, r, fill: 'none', stroke: 'url(#cxg)', 'stroke-width': 9, 'stroke-linecap': 'round', 'stroke-dasharray': c, 'stroke-dashoffset': c * (1 - p), transform: `rotate(-90 ${C} ${C})` }, svg);
    return svg;
  }

  function renderHero() {
    const T = state.totals, first = T.first, goal = goalInfo();
    const stat = (n, l, c, f) => h('button', { class: 'cx-stat' + (f && state.filter === f ? ' on' : '') + (f ? ' click' : ''), style: `--c:${c}`,
      onclick: f ? () => { state.filter = state.filter === f ? 'all' : f; renderLibrary(); } : null }, h('b', {}, Number(n).toLocaleString()), h('span', {}, l));
    const traits = persona().slice(0, 2);
    const ttl = currentTitle();
    return h('section', { class: 'cx-hero' },
      h('div', { class: 'cx-big' + (profile.banner ? ' has-banner' : ''), style: profile.banner ? `--banner:url("${profile.banner}")` : null },
        h('div', { class: 'cx-who' }, avatarEl(64, profileModal),
          h('div', { class: 'cx-who-t' },
            h('button', { class: 'cx-who-name', onclick: profileModal, title: 'Edit your profile' }, displayName()),
            h('div', { class: 'cx-eyebrow' }, titleChip(ttl), ...traits.filter((t) => !ttl || t[0] !== ttl.name).slice(0, ttl ? 1 : 2).map((t) => h('span', { class: 'cx-trait', title: t[1] }, t[0]))))),
        h('div', { class: 'cx-bigrow' },
          h('div', {},
            h('div', { class: 'cx-days' }, h('b', {}, daysText(T.days)), h('span', {}, h('em', {}, 'days'), h('small', {}, 'of anime'))),
            h('div', { class: 'cx-sub' }, `${T.hours.toLocaleString()} hours · ${T.watched.toLocaleString()} episodes watched${T.backlog ? ` · ${dur(T.backlog)} backlog` : ''}`)),
          goal ? h('button', { class: 'cx-goal', title: 'Change your goal in Settings', onclick: settingsModal }, ring(goal.pct),
            h('div', {}, h('b', {}, `${Math.round(goal.pct * 100)}%`), h('span', {}, goal.label), h('small', {}, goal.pct >= 1 ? '✓ goal hit ' + goal.period : goal.period)))
            : h('button', { class: 'cx-goal empty', onclick: settingsModal }, h('b', {}, '＋'), h('span', {}, 'Set a watch goal'))),
        h('div', { class: 'cx-first' },
          first ? [h('span', { class: 'cx-first-tag' }, 'First anime'), h('span', {}, h('b', {}, first.title || 'Unknown'), ` · ${niceDate(first.date)}`)] : null,
          state.created ? h('span', { class: 'cx-dim' }, ` · account since ${niceDate(state.created)}`) : null,
          T.services.length > 1 ? h('span', { class: 'cx-svcs' }, ...T.services.map((s) => h('span', { class: 'cx-svc', style: `--s:${SERVICES[s.k].color}` }, `${SERVICES[s.k].label} ${s.n}`))) : null),
        renderShelf()),
      h('div', { class: 'cx-stats' },
        stat(T.completed, 'Anime completed', '#b490ff', 'completed'), stat(T.seasons, 'Seasons completed', '#b490ff'),
        stat(T.watching, 'Watching', '#ff8a1f', 'watching'), stat(T.newseason, 'New seasons out', '#2ee07c', 'newseason'),
        stat(T.dropped, 'Dropped', '#ff5470', 'dropped'), stat(T.movies, 'Movies', '#5ab4ff', 'movies')));
  }

  function renderContinue() {
    const list = state.series.filter((s) => !s.hidden && (s.status === 'watching' || s.status === 'newseason')).sort((a, b) => (a.last < b.last ? 1 : -1)).slice(0, 14);
    if (!list.length) return h('span', {});
    const tile = (s) => {
      const nx = s.nextEp, st = STATUS[s.status];
      const label = s.current && nx ? `${s.current.t.length > 26 ? 'Next' : s.current.t} · ${epTag(nx.l)}${nx.t ? ` – ${nx.t}` : ''}` : s.newSeason ? `New: ${s.newSeason.t}` : s.mid ? `Finish ${epLabel(s.mid)}` : 'Keep watching';
      const href = nx ? `https://www.crunchyroll.com/watch/${nx.id}` : s.mid ? `https://www.crunchyroll.com/watch/${s.mid.id}` : s.url;
      return h('div', { class: 'cx-cw', style: `--c:${st.color}`, onclick: () => openDrawer(s.sid) },
        h('div', { class: 'cx-cw-art', style: artBg(s) }, h('div', { class: 'cx-shade' }),
          s.fresh ? h('span', { class: 'cx-fresh' }, `+${s.fresh.n} NEW`) : null,
          h('div', { class: 'cx-cw-t' }, s.title),
          s.total ? h('div', { class: 'cx-bar-thin' }, h('i', { style: `width:${Math.round((s.done / s.total) * 100)}%` })) : null),
        h('div', { class: 'cx-cw-b' },
          h('div', { class: 'cx-cw-txt' }, h('div', { class: 'cx-cw-next' }, label), h('div', { class: 'cx-cw-sub' }, s.airing ? `◷ E${s.airing.ep} airs ${until(s.airing.at)}` : s.left ? `${dur(s.left)} left` : s.ext ? SERVICES[s.svc].label : '')),
          href ? h('a', { class: 'cx-play', href, title: 'Play', onclick: (e) => e.stopPropagation() }, h('span', {})) : null));
    };
    return h('section', { class: 'cx-sec' },
      h('div', { class: 'cx-sec-h' }, h('h2', {}, 'Continue watching'), h('span', {}, T_ago()),
        h('button', { class: 'cx-btn xs ghost', style: 'margin-left:auto', onclick: randomPick }, '🎲 What should I watch?')),
      h('div', { class: 'cx-row' }, ...list.map(tile)));
  }
  const T_ago = () => { const b = state.totals.backlog; return b ? `${dur(b)} to go${finishIn(b) ? ' · ' + finishIn(b) : ''}` : ''; };

  function renderAwards() {
    const T = state.totals;
    const years = T.years.map((Y) => h('button', { class: 'cx-medal' + (state.year === Y.y ? ' on' : ''), title: `See everything you watched in ${Y.y}`,
      onclick: () => { state.year = state.year === Y.y ? null : Y.y; renderLibrary(); setTimeout(() => ui.bar && ui.bar.scrollIntoView({ behavior: 'smooth', block: 'start' }), 30); } },
      h('div', { class: 'cx-medal-disc' }, h('b', {}, Y.y), h('span', {}, `YEAR ${Y.n}`)),
      h('div', { class: 'cx-medal-txt' }, h('b', {}, `${Y.hours.toLocaleString()} h · ${Y.eps.toLocaleString()} eps`), h('span', {}, Y.top ? `Top: ${Y.top}` : ''))));
    const cy = new Date().getFullYear(), nextYear = T.years.some((Y) => Y.y === cy) ? cy + 1 : cy;
    years.push(h('div', { class: 'cx-medal locked' }, h('div', { class: 'cx-medal-disc' }, h('b', {}, nextYear), h('span', {}, 'LOCKED')), h('div', { class: 'cx-medal-txt' }, h('b', {}, 'Next medal'), h('span', {}, 'keep watching'))));
    const ms = milestones().map((m) => h('div', { class: 'cx-badge' + (m.earned ? '' : ' locked') },
      h('i', {}, m.earned ? '★'.repeat(Math.min(3, Math.ceil(m.tier / 2))) : '◇'),
      h('div', {}, h('b', {}, `${m.big.toLocaleString()} ${m.label}`), m.earned ? h('span', {}, 'Unlocked') : h('span', { class: 'cx-bprog' }, h('em', { style: `width:${m.pct}%` })))));
    return h('section', { class: 'cx-awards' },
      h('div', { class: 'cx-sec-h' }, h('h2', {}, 'Awards'), h('span', {}, 'A new medal for every year you watch · click one to see that year')),
      h('div', { class: 'cx-medals' }, years), h('div', { class: 'cx-badges' }, ms));
  }

  function renderBar() {
    const all = state.series, q = norm(state.q);
    const count = (f) => all.filter((s) => inFilter(s, f, '')).length;
    const chip = (id, label, color) => h('button', { class: 'cx-chip' + (state.filter === id ? ' on' : ''), style: `--c:${color}`,
      onclick: () => { state.filter = id; renderLibrary(); } }, h('i', {}), label, h('em', {}, count(id)));
    const chips = [chip('all', 'All', '#ffffff'), ...['watching', 'newseason', 'completed', 'dropped'].map((id) => chip(id, STATUS[id].label, STATUS[id].color))];
    if (count('plan')) chips.push(chip('plan', 'Plan to watch', STATUS.plan.color));
    if (count('airing')) chips.push(chip('airing', 'Airing now', '#2ee07c'));
    if (count('almost')) chips.push(chip('almost', 'Almost done', '#ffd257'));
    if (state.filter === 'look' || lookIds().size) chips.push(chip('look', 'Needs a look', '#ffc857'));
    if (count('newep')) chips.push(chip('newep', 'New episodes', '#2ee07c'));
    if (count('fav')) chips.push(chip('fav', '♥ Favourites', '#ff4f8b'));
    if (count('movies')) chips.push(chip('movies', 'Movies', '#5ab4ff'));
    if (count('other')) chips.push(chip('other', 'Other services', '#e50914'));
    if (count('unavailable')) chips.push(chip('unavailable', 'Removed', STATUS.unavailable.color));
    if (count('hidden')) chips.push(chip('hidden', 'Hidden', '#6b6b78'));
    if (state.year) chips.push(h('button', { class: 'cx-chip on', style: '--c:#ffc35a', onclick: () => { state.year = null; renderLibrary(); } }, `${state.year} ✕`));
    ui.search = h('input', { class: 'cx-search', placeholder: 'Search your anime…  ( / )', type: 'text', value: state.q });
    ui.search.addEventListener('input', () => { state.q = ui.search.value; clearTimeout(ui.qTimer); ui.qTimer = setTimeout(renderGrid, 150); });   // wait for a pause in typing
    const sel = (opts, val, fn, title) => { const s = h('select', { class: 'cx-select', title }, ...opts.map(([v, l]) => h('option', { value: v, selected: v === val ? '' : null }, l))); s.addEventListener('change', () => fn(s.value)); return s; };
    const genres = {}; all.forEach((s) => !s.hidden && (s.genres || []).forEach((g) => (genres[g] = (genres[g] || 0) + 1)));
    const tags = {}; all.forEach((s) => !s.hidden && (s.tags || []).forEach((g) => (tags[g] = (tags[g] || 0) + 1)));
    const gs = Object.entries(genres).sort((a, b) => b[1] - a[1]), ts = Object.entries(tags).sort((a, b) => b[1] - a[1]);
    ui.bar = h('div', { class: 'cx-bar' }, h('div', { class: 'cx-chips' }, ...chips),
      h('div', { class: 'cx-tools' },
        gs.length ? sel([['', 'All genres'], ...gs.map(([g, n]) => [g, `${g} (${n})`])], state.genre, (v) => { state.genre = v; renderGrid(); }, 'Genre') : null,
        ts.length ? sel([['', 'All tags'], ...ts.map(([g, n]) => [g, `#${g} (${n})`])], state.tag || '', (v) => { state.tag = v; renderGrid(); }, 'Tag') : null,
        ui.search,
        sel([['recent', 'Last watched'], ['title', 'A–Z'], ['progress', 'Most progress'], ['hours', 'Most hours'], ['rating', 'Top rated'], ['left', 'Least time left'], ['first', 'First watched']], state.sort, (v) => { state.sort = v; renderGrid(); }, 'Sort'),
        h('button', { class: 'cx-btn icon' + (S.layout === 'list' ? ' on' : ''), title: 'Grid / list view (V)', onclick: () => { S.layout = S.layout === 'list' ? 'grid' : 'list'; savePrefs(); renderLibrary(); } }, S.layout === 'list' ? '▦' : '☰'),
        h('button', { class: 'cx-btn', title: 'Your Crunchylists', onclick: () => manageCrunchylists() }, '☰ Lists'),
        h('button', { class: 'cx-btn' + (state.selecting ? ' primary' : ''), title: 'Select several shows (M)', onclick: () => { state.selecting = !state.selecting; state.sel.clear(); render(); } }, state.selecting ? 'Done' : 'Select')));
    void q;
    return ui.bar;
  }

  function sortList(list) {
    const pr = (s) => (s.total ? s.done / s.total : 0);
    const tie = (a, b) => (a.last < b.last ? 1 : a.last > b.last ? -1 : 0);   // equal? last watched first – no jumping order
    const tk = (x) => String(x || '').replace(/^(the|a|an)\s+/i, '');
    const by = { title: (a, b) => tk(a.title).localeCompare(tk(b.title), undefined, { numeric: true, sensitivity: 'base' }), progress: (a, b) => pr(b) - pr(a) || tie(a, b), hours: (a, b) => b.minutes - a.minutes || tie(a, b),
      rating: (a, b) => (b.rating || 0) - (a.rating || 0) || tie(a, b), left: (a, b) => (a.left || 1e9) - (b.left || 1e9) || tie(a, b),
      first: (a, b) => ((a.first || '9') < (b.first || '9') ? -1 : (a.first || '9') > (b.first || '9') ? 1 : 0),
      recent: (a, b) => (a.last < b.last ? 1 : -1) }[state.sort] || ((a, b) => (a.last < b.last ? 1 : -1));
    return list.sort(by);
  }
  function renderGrid() {
    if (!ui.grid) return;
    const list = sortList(state.series.filter(matches)), isList = S.layout === 'list';
    ui.grid.className = isList ? 'cx-list' : 'cx-grid';
    if (gridObs) gridObs.disconnect();
    ui.grid.replaceChildren(
      ...(isList && list.length ? [h('div', { class: 'cx-lrow head' }, h('span', {}), h('span', {}, 'Title'), h('span', {}, 'Status'), h('span', {}, 'Progress'), h('span', {}, 'Time left'), h('span', {}, 'Rating'), h('span', {}, 'Last watched'))] : []),
      ...(list.length ? [] : [h('div', { class: 'cx-empty' }, state.series.length ? 'Nothing here.' : 'No history yet.')]));
    if (list.length) fillGrid(list, isList ? listRow : card, 0);
  }
  const clickShow = (s) => (e) => {
    if (state.selecting) { e.preventDefault(); state.sel.has(s.sid) ? state.sel.delete(s.sid) : state.sel.add(s.sid); e.currentTarget.classList.toggle('sel', state.sel.has(s.sid)); renderBulk(); return; }
    openDrawer(s.sid);
  };
  async function toggleFav(s, e) { if (e) e.stopPropagation(); setMeta(s.sid, { fav: !s.fav }); s.fav = !s.fav; await store.set('meta3', state.meta); renderGrid(); if (state.open === s.sid) openDrawer(s.sid, true); }

  // S1, S2, … counting only real seasons – movies and specials don't take a number
  const seasonNo = (s, i) => s.seasons.slice(0, i + 1).filter((x) => !x.mv && !x.extra).length;
  function seasonPills(s) {
    if (!s.seasons || !s.seasons.length || s.seasons[0].unknownTotal) return null;
    return h('div', { class: 'cx-pills' }, ...s.seasons.map((x, i) => (x.mv ? null : x)).map((x, i) => {
      if (!x) return null;
      const cls = x.complete ? 'ok' : x.started ? 'go' : s.newSeason === x ? 'new' : 'no';
      return h('span', { class: 'cx-pill ' + cls, title: x.t }, x.mv ? 'MV' : x.extra ? 'SP' : `S${seasonNo(s, i)}`, h('em', {}, x.complete ? '✓' : x.started ? `${x.w}/${x.n || '?'}` : s.newSeason === x ? 'NEW' : '–'));
    }));
  }
  function card(s) {
    const st = STATUS[s.status], pct = s.total ? Math.round((s.done / s.total) * 100) : 0;
    const otherEps = (s.others || []).reduce((a, o) => a + o.count, 0);
    let note = null;
    if (s.hidden) note = h('div', { class: 'cx-note' }, 'Hidden – not counted in your stats');
    else if (s.airing) note = h('div', { class: 'cx-note new' }, `◷ E${s.airing.ep} airs ${until(s.airing.at)}`);
    else if (s.plan) note = h('div', { class: 'cx-note' }, s.planSrc === 'watchlist' ? 'On your Crunchyroll watchlist' : 'Added by you');
    else if (s.status === 'unavailable') note = h('div', { class: 'cx-note' }, `${plural(s.count, 'episode')} · removed from Crunchyroll`);
    else if (s.manual) note = h('div', { class: 'cx-note' }, '✓ Marked completed by you');
    else if (s.droppedByYou) note = h('div', { class: 'cx-note' }, '✕ Dropped by you');
    else if (s.fresh) note = h('div', { class: 'cx-note new' }, `★ ${plural(s.fresh.n, 'new episode')} in ${s.fresh.t}`);
    else if (s.noSeasons && !s.movie && !s.ext) note = h('div', { class: 'cx-note' }, 'Probably removed from Crunchyroll');
    else if (s.newSeason) note = h('div', { class: 'cx-note new' }, `★ ${s.newSeason.t} is out`);
    else if (s.current && s.current.gaps.length) note = h('div', { class: 'cx-note warn' }, `Skipped E${s.current.gaps.slice(0, 4).join(', E')}${s.current.gaps.length > 4 ? '…' : ''}`);
    else if (s.status === 'watching' && S.dropDays && s.days >= 30) note = h('div', { class: 'cx-note warn' }, `Paused ${Math.floor(s.days)} days · counts as Dropped in ${Math.max(1, Math.ceil(S.dropDays - s.days))}`);
    else if (s.current && s.current.next) note = h('div', { class: 'cx-note' }, `Up next · ${epTag(s.current.next)}`);
    else if (otherEps) note = h('div', { class: 'cx-note' }, `+ ${otherEps} eps on ${s.others.map((o) => SERVICES[o.svc].label).join(', ')}`);
    const stop = (fn) => (e) => { e.stopPropagation(); fn(); };
    const btns = [];
    if (s.hidden) btns.push(h('button', { class: 'cx-quick show', onclick: stop(() => unhide(s.sid)) }, '↺ Restore'));
    else if (s.plan) btns.push(h('a', { class: 'cx-quick show', href: s.url, onclick: (e) => e.stopPropagation() }, '▶ Start watching'));
    else {
      if (s.status === 'dropped' || s.status === 'unavailable' || (s.noSeasons && !s.ext)) btns.push(h('button', { class: 'cx-quick show', title: 'I didn’t really watch this – remove it', onclick: stop(() => hideShows([s.sid])) }, '✕ Didn’t watch'));
      if (s.status === 'dropped' || s.status === 'watching') btns.push(h('button', { class: 'cx-quick' + (s.status === 'dropped' ? ' show' : ''), title: 'Mark the whole show as watched', onclick: stop(() => markShow(s.sid)) }, '✓ Complete'));
    }
    return h('div', { class: 'cx-card ' + s.status + (state.sel.has(s.sid) ? ' sel' : '') + (state.selecting ? ' selecting' : ''), style: `--c:${st.color}`, onclick: clickShow(s) },
      h('div', { class: 'cx-art', style: artBg(s) },
        s.thumb ? null : h('span', { class: 'cx-ini' }, initials(s.title)),
        h('div', { class: 'cx-shade' }),
        h('span', { class: 'cx-status' }, h('i', {}), st.label),
        state.selecting ? h('span', { class: 'cx-check' }, '✓') : h('button', { class: 'cx-heart' + (s.fav ? ' on' : ''), title: 'Favourite', onclick: (e) => toggleFav(s, e) }, s.fav ? '♥' : '♡'),
        s.fresh ? h('span', { class: 'cx-fresh' }, `+${s.fresh.n} NEW`) : null,
        s.mid && !s.fresh ? h('span', { class: 'cx-paused' }, `❚❚ ${epLabel(s.mid)} · ${s.mid.pos}/${s.mid.durMin}m`) : null,
        h('div', { class: 'cx-art-title' }, s.title,
          s.svc !== 'crunchyroll' || s.others.length ? h('span', { class: 'cx-svcrow' }, ...[s.svc, ...s.others.map((o) => o.svc)].filter((v, i, a) => a.indexOf(v) === i && v !== 'crunchyroll').map((k) => h('span', { class: 'cx-svc', style: `--s:${SERVICES[k].color}` }, SERVICES[k].short))) : null),
        s.total ? h('div', { class: 'cx-bar-thin' }, h('i', { style: `width:${pct}%` })) : null),
      h('div', { class: 'cx-info' },
        h('div', { class: 'cx-meta' },
          s.movie ? h('span', {}, s.done ? 'Watched' : `${s.mid ? s.mid.pct : 0}% watched`)
            : s.total ? h('span', {}, h('b', {}, s.done), ` / ${s.total} eps`) : h('span', {}, h('b', {}, s.done + otherEps), ' eps'),
          s.seasonsTotal ? h('span', {}, `${s.seasonsDone}/${s.seasonsTotal} seasons`) : s.ext ? h('span', {}, SERVICES[s.svc].label) : null,
          s.rating ? h('span', { class: 'cx-rate' }, `★ ${s.rating}`) : s.total && !s.movie ? h('span', { class: 'cx-pct' }, `${pct}%`) : null),
        seasonPills(s), note,
        (s.tags || []).length ? h('div', { class: 'cx-tagrow' }, ...s.tags.slice(0, 3).map((t) => h('span', { class: 'cx-tag' }, '#' + t))) : null,
        h('div', { class: 'cx-foot' }, h('span', {}, s.plan ? 'Not started' : ago(s.last), s.left && s.status !== 'completed' ? ` · ${dur(s.left)} left` : ''), h('span', { class: 'cx-qbtns' }, ...btns))));
  }
  function listRow(s) {
    const st = STATUS[s.status], pct = s.total ? Math.round((s.done / s.total) * 100) : 0;
    return h('div', { class: 'cx-lrow' + (state.sel.has(s.sid) ? ' sel' : ''), style: `--c:${st.color}`, onclick: clickShow(s) },
      h('span', { class: 'cx-lthumb', style: artBg(s) }),
      h('span', { class: 'cx-ltitle' }, s.fav ? h('em', { class: 'cx-lfav' }, '♥ ') : null, s.title, s.fresh ? h('span', { class: 'cx-fresh inline' }, 'NEW') : null),
      h('span', {}, h('span', { class: 'cx-status inline' }, h('i', {}), st.label)),
      h('span', { class: 'cx-lprog' }, s.total ? [h('span', { class: 'cx-sbar' }, h('i', { style: `width:${pct}%` })), ` ${s.done}/${s.total}`] : `${s.done} eps`),
      h('span', {}, s.left && s.status !== 'completed' ? dur(s.left) : '–'),
      h('span', { class: 'cx-rate' }, s.rating ? `★ ${s.rating}` : ''),
      h('span', { class: 'cx-dim' }, ago(s.last)));
  }

  function renderBulk() {
    if (!ui.bulk) return;
    ui.bulk.classList.toggle('open', state.selecting && ui.overlay.classList.contains('open'));
    if (!state.selecting) return;
    const n = state.sel.size, ids = () => [...state.sel];
    ui.bulk.replaceChildren(h('b', {}, n ? `${n} selected` : 'Tap shows to select them'),
      h('button', { class: 'cx-btn', onclick: () => { state.series.filter(matches).forEach((s) => state.sel.add(s.sid)); renderGrid(); renderBulk(); } }, 'Select all shown'),
      h('button', { class: 'cx-btn', disabled: n ? null : '', onclick: () => markShows(ids()) }, '✓ Mark complete'),
      h('button', { class: 'cx-btn', disabled: n ? null : '', onclick: () => hideShows(ids()) }, '✕ Didn’t watch'),
      h('button', { class: 'cx-btn', disabled: n ? null : '', title: 'Add the selected shows to a Crunchylist on Crunchyroll', onclick: () => addToCrunchylist(ids()) }, '☰ Add to Crunchylist'),
      h('button', { class: 'cx-btn', disabled: n ? null : '', title: 'Copy the titles of the selected shows', onclick: async () => { const tl = ids().map((id) => (state.byId.get(id) || {}).title).filter(Boolean); await copyText(tl.join('\n')); toast(`Copied ${plural(tl.length, 'title')}`, 'ok'); } }, '⧉ Copy titles'),
      h('button', { class: 'cx-btn primary', onclick: () => { state.selecting = false; state.sel.clear(); render(); } }, 'Done'));
  }

  // ================================================================
  // 15. Show drawer
  // ================================================================
  async function openDrawer(sid, keep) {
    let s = state.byId.get(sid);
    if (!s) return closeDrawer();
    state.open = sid;
    const openNow = () => new Set([...ui.panel.querySelectorAll('details[open]')].map((d) => d.dataset.id));
    const openSeasons = keep ? openNow() : null, scroll = keep ? ui.panel.scrollTop : 0;
    ui.drawer.classList.add('open');
    (s.plan ? drawPlan : s.ext ? drawExt : drawDrawer)(s, openSeasons);
    ui.panel.scrollTop = scroll;
    if (!keep && !s.ext && !s.plan && s.seasons) {
      if (s.noSeasons && !s.movie && await retrySeasons(sid)) { render(); if (state.open === sid) drawDrawer(state.byId.get(sid)); return; }
      const need = s.seasons.map((x) => x.id).filter((id) => id && !state.eps[id]);
      if (need.length) { await ensureLists(need); if (state.open === sid) { const sc = ui.panel.scrollTop, o = openNow(); drawDrawer(state.byId.get(sid), o); ui.panel.scrollTop = sc; } }
    }
  }
  function closeDrawer() { state.open = null; if (ui.drawer) ui.drawer.classList.remove('open'); }

  function personalBlock(s) {
    const stars = h('div', { class: 'cx-stars' }, ...Array.from({ length: 10 }, (_, i) => h('button', { class: 'cx-star' + (s.rating >= i + 1 ? ' on' : ''),
      onclick: async () => { setMeta(s.sid, { r: s.rating === i + 1 ? 0 : i + 1 }); await store.set('meta3', state.meta); buildSeries(); renderGrid(); openDrawer(s.sid, true); } }, i + 1)));
    const note = h('textarea', { class: 'cx-note-in', placeholder: 'Your notes – thoughts, where you heard about it, who to recommend it to…' }, s.note || '');
    note.addEventListener('input', () => setMeta(s.sid, { n: note.value }));
    const tagIn = h('input', { class: 'cx-tag-in', placeholder: 'Add a tag…', list: 'cx-tag-sugg' });
    const addTag = async (t) => {
      t = t.trim().replace(/^#/, ''); if (!t) return;
      const tags = [...new Set([...(s.tags || []), t])]; setMeta(s.sid, { tags }); await store.set('meta3', state.meta); buildSeries(); openDrawer(s.sid, true);
    };
    tagIn.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); addTag(tagIn.value); } });
    const known = new Set(['Rewatch', 'Recommend', 'Masterpiece', 'Guilty pleasure', 'Watch with friends', 'Comfort show']);
    state.series.forEach((x) => (x.tags || []).forEach((t) => known.add(t)));
    return h('div', { class: 'cx-personal' },
      h('div', { class: 'cx-plabel' }, 'Your rating'), stars,
      h('div', { class: 'cx-plabel' }, 'Tags'),
      h('div', { class: 'cx-tagrow edit' }, ...(s.tags || []).map((t) => h('span', { class: 'cx-tag' }, '#' + t,
        h('button', { onclick: async () => { setMeta(s.sid, { tags: s.tags.filter((x) => x !== t) }); await store.set('meta3', state.meta); buildSeries(); openDrawer(s.sid, true); } }, '✕'))), tagIn,
        h('datalist', { id: 'cx-tag-sugg' }, ...[...known].map((t) => h('option', { value: t }))),
        ...['Rewatch', 'Recommend', 'Masterpiece'].filter((t) => !(s.tags || []).includes(t)).map((t) => h('button', { class: 'cx-tag sugg', onclick: () => addTag(t) }, '+ ' + t))),
      h('div', { class: 'cx-plabel' }, 'Notes'), note);
  }

  function historyBlock(s) {
    const n = (v) => Number(v) || 0;
    const eps = s.eps.slice().sort((a, b) => n(a.sNo) - n(b.sNo) || n(a.epNo) - n(b.epNo) || (a.date < b.date ? -1 : 1));
    return h('div', { class: 'cx-seasons' },
      h('div', { class: 'cx-callout gray' },
        h('span', {}, s.manual ? '✓ Marked completed by you (tracker only)' : 'Crunchyroll no longer lists this show’s seasons – it’s probably been removed. Here’s what’s in your history.'),
        s.manual ? h('button', { class: 'cx-btn xs', onclick: () => unmarkShow(s.sid) }, 'Undo') : null),
      h('details', { class: 'cx-season ' + (s.manual ? 'ok' : 'go'), open: '' },
        h('summary', {}, h('span', { class: 'cx-sn' }, '≡'), h('span', { class: 'cx-st' }, h('b', {}, 'Episodes in your history'), h('span', {}, plural(eps.length, 'episode'))), h('span', { class: 'cx-chev' }, '›')),
        h('div', { class: 'cx-eps' }, ...eps.map((e, i) => h('div', { class: 'cx-ep ' + (e.done ? 'done' : 'partial') },
          h('span', { class: 'cx-ep-n' }, e.epNo !== '' && e.epNo != null ? `E${e.epNo}` : `#${i + 1}`),
          h('span', { class: 'cx-ep-t' }, e.title || 'Episode details removed', h('span', { class: 'cx-dim' }, ` · watched ${niceDate(e.date)}`)),
          h('span', { class: 'cx-ep-s' }, e.done ? '✓ Watched' : `◐ ${e.pct}%`), h('span', { class: 'cx-ep-btn ghost' }))))));
  }

  function drawerHero(s, extra) {
    const st = STATUS[s.status], pct = s.total ? Math.round((s.done / s.total) * 100) : 0;
    return h('div', { class: 'cx-dhero', style: `--c:${st.color};${artBg(s)}` },
      s.thumb ? null : h('span', { class: 'cx-ini big' }, initials(s.title)),
      h('div', { class: 'cx-shade' }),
      h('button', { class: 'cx-btn icon cx-dclose', onclick: closeDrawer }, '✕'),
      h('button', { class: 'cx-heart big' + (s.fav ? ' on' : ''), title: 'Favourite', onclick: (e) => toggleFav(s, e) }, s.fav ? '♥' : '♡'),
      h('div', { class: 'cx-dhead' },
        h('span', { class: 'cx-status', style: `--c:${st.color}` }, h('i', {}), st.label),
        s.hidden ? h('span', { class: 'cx-status', style: '--c:#6b6b78;margin-left:6px' }, 'Hidden') : null,
        h('h2', {}, s.title),
        h('div', { class: 'cx-dmeta' }, s.total ? `${s.done} / ${plural(s.total, 'episode')} · ${pct}%` : `${plural(s.done, 'episode')} watched`,
          s.seasonsTotal ? ` · ${s.seasonsDone}/${s.seasonsTotal} seasons` : '', ` · ${dur(s.minutes)} watched`, extra || '')));
  }

  function drawDrawer(s, openSeasons) {
    const stLabel = { done: '✓ Watched', credit: '✓ Counted · next ep watched', marked: '★ Marked by you', partial: '', none: 'Not watched' };
    const seasonBlock = (x, i) => {
      const spct = x.n ? Math.round((x.w / x.n) * 100) : 0;
      const isOpen = openSeasons ? openSeasons.has(x.id) : (s.current === x || (!s.current && x === s.newSeason));
      const credits = x.list ? x.list.filter((e) => e.st === 'credit').length : 0;
      const markBtn = x.list && (!x.complete || credits) ? h('button', { class: 'cx-btn xs', title: x.complete ? `${plural(credits, 'episode')} counted here because you watched a later one – send them to Crunchyroll so your phone shows them too` : '', onclick: (e) => { e.preventDefault(); e.stopPropagation(); markEpisodes(x.list, x.t); } }, x.complete ? 'Sync to Crunchyroll' : 'Mark season watched') : null;
      const body = x.list ? h('div', { class: 'cx-eps' }, ...x.list.map((e, i) => h('div', { class: 'cx-ep ' + e.st },
          h('span', { class: 'cx-ep-n' }, e.l ? `${epTag(e.l)}` : '•'),
          h('a', { class: 'cx-ep-t', href: `https://www.crunchyroll.com/watch/${e.id}`, title: 'Play this episode' }, e.t || `Episode ${e.l}`),
          h('span', { class: 'cx-ep-s' }, e.st === 'partial' ? `◐ ${e.pct}%` : stLabel[e.st]),
          h('span', { class: 'cx-ep-acts' },
            !WATCHED.has(e.st) && x.list.slice(0, i).some((y) => !WATCHED.has(y.st)) ? h('button', { class: 'cx-ep-btn', title: 'Mark up to here – this and every earlier episode of this season', onclick: () => markEpisodes(x.list.slice(0, i + 1), `${x.t} up to ${epTag(e.l)}`) }, '⤒') : null,
            !WATCHED.has(e.st) ? h('button', { class: 'cx-ep-btn', title: 'Mark watched (also on Crunchyroll)', onclick: () => markEpisodes([e], `${x.t} ${epTag(e.l)}`) }, '✓')
              : e.st === 'marked' || e.st === 'done' ? h('button', { class: 'cx-ep-btn undo', title: 'Undo – set as not watched (also on Crunchyroll)', onclick: () => unwatchEp(e, `${x.t} ${epTag(e.l)}`) }, '↺') : h('span', { class: 'cx-ep-btn ghost' }, '')))))
        : h('div', { class: 'cx-eps' }, h('div', { class: 'cx-ep none' }, h('span', {}), h('span', { class: 'cx-ep-t' }, x.n ? `${x.n} episodes – loading list…` : 'Episode list not available')));
      return h('details', { class: 'cx-season' + (x.complete ? ' ok' : x.started ? ' go' : ''), 'data-id': x.id, open: isOpen ? '' : null },
        h('summary', {}, h('span', { class: 'cx-sn' }, x.mv ? 'MV' : x.extra ? 'SP' : `S${seasonNo(s, i)}`),
          h('span', { class: 'cx-st' }, h('b', {}, x.t),
            h('span', {}, x.complete ? 'Complete' : x.started ? `${x.w} of ${x.n || '?'} watched${x.left ? ` · ${dur(x.left)} left` : ''}${x.gaps.length ? ` · skipped E${x.gaps.slice(0, 6).join(', E')}` : ''}` : s.newSeason === x ? 'New – not started' : 'Not started')),
          h('span', { class: 'cx-sbar' }, h('i', { style: `width:${spct}%` })), markBtn, h('span', { class: 'cx-chev' }, '›')),
        body);
    };
    const merged = (s.members || []).filter((x) => x !== s.sid);
    const splitable = Object.entries(state.merges).filter(([, to]) => to === s.sid).map(([from]) => from);
    const nx = s.nextEp;
    ui.panel.replaceChildren(drawerHero(s),
      h('div', { class: 'cx-dbody' },
        h('div', { class: 'cx-dact' },
          nx ? h('a', { class: 'cx-btn primary', href: `https://www.crunchyroll.com/watch/${nx.id}` }, `▶ Play ${epTag(nx.l)}`) : h('a', { class: 'cx-btn primary', href: s.url }, '▶ Open on Crunchyroll'),
          nx ? h('a', { class: 'cx-btn', href: s.url }, 'Show page') : null,
          s.status !== 'completed' && s.status !== 'unavailable' && !s.hidden ? h('button', { class: 'cx-btn', onclick: () => markShow(s.sid) }, '✓ Mark whole show watched') : null,
          s.hidden ? h('button', { class: 'cx-btn', onclick: () => unhide(s.sid) }, '↺ Restore to my list') : h('button', { class: 'cx-btn', onclick: () => hideShows([s.sid]) }, '✕ Didn’t watch'),
          s.droppedByYou ? h('button', { class: 'cx-btn', title: 'Put it back to its normal status', onclick: () => { setMeta(s.sid, { drop: false }); refresh(); openDrawer(s.sid, true); toast(`${s.title} is back`, 'ok'); } }, '↺ Undrop')
            : (s.status === 'watching' || s.status === 'newseason') && !s.plan && !s.hidden ? h('button', { class: 'cx-btn', title: 'You’ve stopped watching this – mark it Dropped now', onclick: () => { setMeta(s.sid, { drop: true }); refresh(); openDrawer(s.sid, true); toast(`${s.title} dropped`, 'info'); } }, '✕ Drop') : null,
          h('button', { class: 'cx-btn', title: 'Tell the tracker another card is the same anime', onclick: () => mergeModal(s) }, '⇄ Merge'),
          clOk(s) ? h('button', { class: 'cx-btn', title: 'Add this show to one of your Crunchylists', onclick: () => addToCrunchylist([s.sid]) }, '☰ Crunchylist') : null,
          !s.plan && !s.hidden ? h('button', { class: 'cx-btn' + (profile.top.includes(s.sid) ? ' on' : ''), title: 'Pin to the Top 5 on your profile and ID card', onclick: () => toggleTop(s.sid) }, profile.top.includes(s.sid) ? '★ In your Top 5' : '☆ Top 5') : null),
        h('div', { class: 'cx-dfacts' },
          h('div', {}, h('span', {}, 'First watched'), h('b', {}, niceDate(s.first))),
          h('div', {}, h('span', {}, 'Last watched'), h('b', {}, `${niceDate(s.last)} · ${ago(s.last)}`)),
          s.left && s.status !== 'completed' ? h('div', {}, h('span', {}, 'Time left'), h('b', {}, `${dur(s.left)}${finishIn(s.left) ? ' · ' + finishIn(s.left) : ''}`)) : null,
          s.mid ? h('div', {}, h('span', {}, 'Paused at'), h('b', {}, `${epLabel(s.mid)} · ${s.mid.pos} of ${s.mid.durMin} min`)) : null,
          (s.genres || []).length ? h('div', {}, h('span', {}, 'Genres'), h('b', {}, s.genres.slice(0, 4).join(', '))) : null,
          ...(s.others || []).map((o) => h('div', {}, h('span', {}, `Also on ${SERVICES[o.svc].label}`), h('b', {}, `${plural(o.count, 'episode')} · ${dur(o.minutes)}`)))),
        s.fresh ? h('div', { class: 'cx-callout' }, `★ ${plural(s.fresh.n, 'new episode')} out in ${s.fresh.t}`) : null,
        s.newSeason ? h('div', { class: 'cx-callout' }, `★ ${s.newSeason.t} is out – ${plural(s.newSeason.n, 'episode')} waiting for you`) : null,
        merged.length ? h('div', { class: 'cx-callout gray' }, h('span', {}, `Includes ${plural(merged.length, 'other Crunchyroll entry')} for the same anime (dubs / re-releases)`),
          splitable.length ? h('button', { class: 'cx-btn xs', onclick: async () => { splitable.forEach((k) => delete state.merges[k]); await savePrefs(); refresh(); } }, 'Split') : null) : null,
        personalBlock(s),
        s.seasons && s.seasons.length && !s.seasons[0].unknownTotal ? h('div', { class: 'cx-seasons' }, ...s.seasons.map(seasonBlock))
          : s.movie ? h('div', { class: 'cx-empty sm' }, 'Movie') : historyBlock(s)));
  }

  function drawPlan(s) {
    ui.panel.replaceChildren(drawerHero(s),
      h('div', { class: 'cx-dbody' },
        h('div', { class: 'cx-dact' },
          h('a', { class: 'cx-btn primary', href: s.url }, '▶ Start watching'),
          h('button', { class: 'cx-btn', onclick: () => findModal(s.title) }, 'I’ve already watched some'),
          h('button', { class: 'cx-btn', onclick: () => removePlan(s.sid) }, '✕ Remove from plan')),
        h('div', { class: 'cx-callout gray' }, h('span', {}, s.planSrc === 'watchlist' ? 'This show is on your Crunchyroll watchlist and you haven’t started it yet.' : 'You added this to Plan to watch.')),
        s.airing ? h('div', { class: 'cx-callout' }, `◷ Episode ${s.airing.ep} airs ${until(s.airing.at)}`) : null,
        (s.genres || []).length ? h('div', { class: 'cx-dfacts' }, h('div', {}, h('span', {}, 'Genres'), h('b', {}, s.genres.slice(0, 4).join(', ')))) : null,
        personalBlock(s)));
  }

  function drawExt(s) {
    const x = state.external.find((y) => y.id === s.extId) || {};
    const statusSel = h('select', { class: 'cx-select' }, ...['watching', 'completed', 'dropped'].map((k) => h('option', { value: k, selected: s.status === k ? '' : null }, STATUS[k].label)));
    statusSel.addEventListener('change', async () => { x.status = statusSel.value; await savePrefs(); refresh(); });
    const num = (v, fn, ph) => { const i = h('input', { class: 'cx-input sm', type: 'number', min: '0', value: v || '', placeholder: ph }); i.addEventListener('change', async () => { fn(+i.value || 0); await savePrefs(); refresh(); }); return i; };
    ui.panel.replaceChildren(drawerHero(s, ` · ${SERVICES[s.svc].label}`),
      h('div', { class: 'cx-dbody' },
        h('div', { class: 'cx-dact' },
          s.hidden ? h('button', { class: 'cx-btn', onclick: () => unhide(s.sid) }, '↺ Restore') : h('button', { class: 'cx-btn', onclick: () => hideShows([s.sid]) }, '✕ Didn’t watch'),
          h('button', { class: 'cx-btn', onclick: () => deleteExternal(s.extId) }, '🗑 Delete')),
        h('div', { class: 'cx-form' },
          h('label', {}, 'Status', statusSel),
          h('label', {}, 'Episodes watched', num(x.count || (x.eps || []).length, (v) => (x.count = v))),
          h('label', {}, 'Total episodes', num(x.total, (v) => (x.total = v), 'unknown')),
          h('label', {}, 'Minutes per episode', num(x.epMin || S.epMin, (v) => (x.epMin = v)))),
        personalBlock(s),
        (x.eps || []).length ? h('details', { class: 'cx-season go', open: '' },
          h('summary', {}, h('span', { class: 'cx-sn' }, '≡'), h('span', { class: 'cx-st' }, h('b', {}, `Imported from ${SERVICES[s.svc].label}`), h('span', {}, plural(x.eps.length, 'entry'))), h('span', { class: 'cx-chev' }, '›')),
          h('div', { class: 'cx-eps' }, ...x.eps.slice().reverse().map((e) => h('div', { class: 'cx-ep done' }, h('span', { class: 'cx-ep-n' }, '•'),
            h('span', { class: 'cx-ep-t' }, e.t, h('span', { class: 'cx-dim' }, e.date ? ` · ${niceDate(e.date)}` : '')), h('span', { class: 'cx-ep-s' }, '✓'), h('span', {}))))) : null));
  }

  // ================================================================
  // 16. Insights
  // ================================================================
  function renderInsights() {
    const I = insights(), T = state.totals;
    const card = (title, ...kids) => h('section', { class: 'cx-icard' }, h('h3', {}, title), ...kids);
    // On this day: what you watched on today's date in earlier years (real watching only – no bulk marks)
    const otdNow = new Date(), otd = new Map();
    for (const r of allRows()) {
      if (!r.date || r.bulk || r.dateGuess || r.inferred) continue;
      const d = new Date(r.date);
      if (d.getMonth() !== otdNow.getMonth() || d.getDate() !== otdNow.getDate() || d.getFullYear() >= otdNow.getFullYear()) continue;
      const y = d.getFullYear(), title = (state.byId.get(r.sid) || {}).title || r.series || 'Unknown';
      const m = otd.get(y) || new Map(); m.set(title, (m.get(title) || 0) + 1); otd.set(y, m);
    }
    const OTD = [...otd.entries()].sort((a, b) => b[0] - a[0]).map(([y, m]) => {
      const top = [...m.entries()].sort((a, b) => b[1] - a[1]), n = top.reduce((a, x) => a + x[1], 0);
      return h('div', { class: 'cx-irow' }, h('span', {}, String(y)), h('b', {}, top.slice(0, 3).map((x) => x[0]).join(', ') + (top.length > 3 ? ` +${top.length - 3}` : '')), h('em', {}, plural(n, 'episode')));
    });
    const maxM = Math.max(1, ...I.months.map((m) => m.min));
    const months = h('div', { class: 'cx-mchart' }, ...I.months.map((m, i) => h('div', { class: 'cx-mbar', title: `${m.d.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}: ${dur(m.min)} · ${m.eps} eps` },
      h('i', { style: `height:${Math.max(2, (m.min / maxM) * 100)}%` }), h('span', {}, i % 3 === 0 ? m.d.toLocaleDateString('en-GB', { month: 'short' }) + (m.d.getMonth() === 0 || i === 0 ? ` ’${String(m.d.getFullYear()).slice(2)}` : '') : ''))));
    const hmax = Math.max(1, ...I.heat.flat());
    const DOW = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const heat = h('div', { class: 'cx-heat' }, ...I.heat.map((row, d) => h('div', { class: 'cx-hrow' }, h('span', {}, DOW[d]),
      ...row.map((v, hr) => h('i', { title: `${DOW[d]} ${p2(hr)}:00 – ${v} episodes`, style: `--a:${v ? 0.12 + 0.88 * (v / hmax) : 0}` })))),
      h('div', { class: 'cx-hrow axis' }, h('span', {}), ...Array.from({ length: 24 }, (_, i) => h('em', {}, i % 6 === 0 ? `${i}:00` : ''))));
    // activity calendar – last 53 weeks
    const dayMin = new Map();
    for (const r of allRows()) if (r.date) { const d = new Date(r.date), k = `${d.getFullYear()}-${p2(d.getMonth() + 1)}-${p2(d.getDate())}`; dayMin.set(k, (dayMin.get(k) || 0) + (r.min || 0)); }
    const today = new Date(); today.setHours(12, 0, 0, 0);
    const start = new Date(today); start.setDate(today.getDate() - 52 * 7 - ((today.getDay() + 6) % 7));
    const cmax = Math.max(60, ...[...dayMin.values()]);
    const weeks = [];
    for (let w = 0; w < 53; w++) {
      const col = [];
      for (let d = 0; d < 7; d++) {
        const dt = new Date(start); dt.setDate(start.getDate() + w * 7 + d);
        const k = `${dt.getFullYear()}-${p2(dt.getMonth() + 1)}-${p2(dt.getDate())}`, v = dayMin.get(k) || 0;
        col.push(dt > today ? h('i', { class: 'f' }) : h('i', { title: `${dt.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}: ${v ? dur(v) : 'nothing'}`, style: `--a:${v ? 0.18 + 0.82 * Math.min(1, v / cmax) : 0}` }));
      }
      weeks.push(h('div', { class: 'cx-cweek' }, ...col));
    }
    const yearMin = [...dayMin.entries()].filter(([k]) => new Date(k + 'T12:00:00') >= start).reduce((a, [, v]) => a + v, 0);
    const big = (n, l) => h('div', { class: 'cx-ibig' }, h('b', {}, n), h('span', {}, l));
    const gmax = Math.max(1, ...I.genres.map((g) => g[1]));
    const smax = Math.max(1, ...I.svc.map((g) => g[1]));
    const traits = persona();
    return h('div', { class: 'cx-insights' },
      h('section', { class: 'cx-icard wide persona' }, h('h3', {}, 'Your anime personality'),
        h('div', { class: 'cx-traits' }, ...traits.map((t, i) => h('div', { class: 'cx-traitcard' + (i === 0 ? ' main' : '') }, h('b', {}, t[0]), h('span', {}, t[1]))))),
      h('div', { class: 'cx-ibigs' },
        big(daysText(T.days), 'days of anime'), big(`${I.best}`, 'longest streak (days)'), big(`${I.cur}`, 'current streak'),
        big(I.activeDays.toLocaleString(), 'days you watched'), big(dur(I.avgDay), 'average per day'), big(dur(T.backlog), 'backlog')),
      card('Activity – last 12 months', h('div', { class: 'cx-ihint' }, `${dur(yearMin)} watched in the last year`), h('div', { class: 'cx-cal' }, ...weeks)),
      card('Watch time by month', months),
      card('When you watch', heat),
      h('div', { class: 'cx-igrid' },
        OTD.length ? card('On this day', ...OTD) : null,
        card('Biggest days',
          I.bigDay ? h('div', { class: 'cx-irow' }, h('span', {}, 'Most in one day'), h('b', {}, `${dur(I.bigDay.min)} · ${I.bigDay.eps} eps`), h('em', {}, niceDate(I.bigDay.k + 'T12:00:00'))) : null,
          I.binge ? h('div', { class: 'cx-irow' }, h('span', {}, 'Biggest binge'), h('b', {}, `${I.binge.n} eps of ${I.binge.title}`), h('em', {}, niceDate(I.binge.date + 'T12:00:00'))) : null,
          I.bulk ? h('p', { class: 'cx-dim', style: 'font-size:12px;margin:8px 0 0' }, `${I.bulk} episodes marked watched in bulk aren't counted in these day records.`) : null,
          T.first ? h('div', { class: 'cx-irow' }, h('span', {}, 'First anime'), h('b', {}, T.first.title), h('em', {}, niceDate(T.first.date))) : null),
        I.genres.length ? card('Top genres', ...I.genres.map(([g, m]) => h('div', { class: 'cx-hbar' }, h('span', {}, g), h('i', {}, h('em', { style: `width:${(m / gmax) * 100}%` })), h('b', {}, dur(m))))) : null,
        I.svc.length > 1 ? card('By service', ...I.svc.map(([k, m]) => h('div', { class: 'cx-hbar' }, h('span', {}, SERVICES[k].label), h('i', {}, h('em', { style: `width:${(m / smax) * 100}%;background:${SERVICES[k].color}` })), h('b', {}, dur(m))))) : null,
        card('Most watched', ...T.top.map((s, i) => h('div', { class: 'cx-hbar' }, h('span', {}, `${i + 1}. ${s.title}`), h('i', {}, h('em', { style: `width:${(s.minutes / Math.max(1, T.top[0].minutes)) * 100}%` })), h('b', {}, dur(s.minutes)))))));
  }

  // ================================================================
  // 17. Modals
  // ================================================================
  function whatsNew(force) {
    if (!force && state.seenVer === VERSION) return;
    const first = !state.seenVer;
    if (state.seenVer && state.seenVer !== VERSION) snapshot(`Updated to v${VERSION}`, true);
    state.seenVer = VERSION; store.set('seenver3', VERSION);
    if (first && !force) return;
    modal('wide', (close) => [h('div', { class: 'cx-eyebrow' }, `Version ${VERSION}`), h('h3', {}, 'What’s new'),
      h('ul', { class: 'cx-new' }, ...CHANGELOG[0].items.map((t) => h('li', {}, t))),
      h('details', { class: 'cx-older' }, h('summary', {}, 'Earlier versions'), ...CHANGELOG.slice(1).map((c) => h('div', {}, h('b', {}, `v${c.v}`), h('ul', {}, ...c.items.map((t) => h('li', {}, t)))))),
      h('div', { class: 'cx-modal-act' }, h('button', { class: 'cx-btn primary', onclick: close }, 'Nice'))]);
  }
  function helpModal() {
    const keys = [['/', 'Search'], ['L', 'Library'], ['I', 'Insights'], ['S', 'Share card'], ['R', 'What should I watch?'], ['M', 'Select several shows'], ['V', 'Grid / list view'], ['Esc', 'Close / back'], ['?', 'This help']];
    modal('', (close) => [h('h3', {}, 'Keyboard shortcuts'), h('div', { class: 'cx-keys' }, ...keys.map(([k, l]) => h('div', {}, h('kbd', {}, k), h('span', {}, l)))),
      h('div', { class: 'cx-about' }, h('b', {}, `Reaperdex v${VERSION}`), ' by nullreaper · © 2026 · GPL-3.0 licence. Free to modify – but keep the credit and don’t pass it off as your own.', h('br', {}), 'Not affiliated with Crunchyroll or any streaming service.', h('br', {}), h('a', { href: 'https://github.com/nullreaper-dev/reaperdex', target: '_blank', class: 'cx-link inline-a' }, 'Source code & bug reports on GitHub →')),
      h('div', { class: 'cx-official' }, h('b', {}, '✓ Official sources'), ' – Reaperdex is only published by nullreaper on ',
        h('a', { href: 'https://greasyfork.org/en/scripts/604749-reaperdex-anime-tracker-for-crunchyroll', target: '_blank', class: 'cx-link inline-a' }, 'Greasy Fork'), ' and ',
        h('a', { href: 'https://github.com/nullreaper-dev/reaperdex', target: '_blank', class: 'cx-link inline-a' }, 'GitHub (nullreaper-dev/reaperdex)'),
        '. Got it from anywhere else? It may have been modified – reinstall it from Greasy Fork.'),
      h('div', { class: 'cx-modal-act' }, h('button', { class: 'cx-btn', onclick: () => { close(); whatsNew(true); } }, 'What’s new'), h('button', { class: 'cx-btn primary', onclick: close }, 'Got it'))]);
  }
  const THEMES = [['crunchy', 'Sunset', 'warm orange glow'], ['neon', 'Cyberpunk', 'neon grid'], ['sakura', 'Sakura', 'soft pink petals'], ['ocean', 'Ocean', 'deep sea waves'],
    ['aurora', 'Aurora', 'northern lights'], ['reaper', 'Reaper', 'crimson & black'], ['midnight', 'Midnight', 'pure black OLED']];
  function settingsModal() {
    const num = (k, min, max) => { const i = h('input', { class: 'cx-input sm', type: 'number', min, max, value: S[k] }); i.addEventListener('change', () => (S[k] = Math.max(min, Math.min(max, +i.value || 0)))); return i; };
    const sel = (k, opts) => { const s = h('select', { class: 'cx-select' }, ...opts.map(([v, l]) => h('option', { value: v, selected: S[k] === v ? '' : null }, l))); s.addEventListener('change', () => { S[k] = s.value; if (k === 'theme') applyTheme(); }); return s; };
    const notify = h('input', { type: 'checkbox', checked: S.notify ? '' : null });
    const airing = h('input', { type: 'checkbox', checked: S.airing ? '' : null });
    airing.addEventListener('change', () => { S.airing = airing.checked; if (S.airing) setTimeout(() => refreshAiring(true), 300); else { state.airing = {}; store.set('airingmap3', {}); } });
    notify.addEventListener('change', async () => {
      S.notify = notify.checked;
      if (S.notify && 'Notification' in window && Notification.permission !== 'granted') { const p = await Notification.requestPermission(); if (p !== 'granted') { S.notify = false; notify.checked = false; toast('Notifications are blocked in your browser', 'bad'); } }
    });
    const customBox = h('div', { class: 'cx-custom-wrap' + (S.theme === 'custom' ? ' open' : '') });
    const syncSw = () => { const c = custom(); const sw = themeGrid.querySelector('[data-t=custom] .cx-theme-sw'); if (sw) sw.style.background = `radial-gradient(circle at 80% 10%,${c.a},transparent 60%),radial-gradient(circle at 0 100%,${c.a2},transparent 60%),${c.bg}`; };
    const mark = () => themeGrid.querySelectorAll('.cx-theme').forEach((b) => b.classList.toggle('on', b.dataset.t === S.theme));
    const themeGrid = h('div', { class: 'cx-themes' }, ...[...THEMES, ['custom', 'Custom', 'your own colours']].map(([id, name, sub]) => h('button', { class: 'cx-theme' + (S.theme === id ? ' on' : ''), 'data-t': id,
      onclick: () => { S.theme = id; applyTheme(); mark(); customBox.classList.toggle('open', id === 'custom'); } },
      h('span', { class: 'cx-theme-sw' }), h('b', {}, name), h('span', {}, sub))));
    customBox.append(customPanel((rebuild) => { syncSw(); mark(); if (rebuild) { customBox.replaceChildren(customPanel(() => { syncSw(); mark(); })); } }));
    setTimeout(syncSw, 0);
    modal('wide', (close) => [h('h3', {}, 'Settings'),
      h('div', { class: 'cx-form' },
        h('div', { class: 'cx-flabel' }, 'Theme'),
        themeGrid,
        customBox,
        h('label', {}, 'Watch goal', h('span', { class: 'cx-inline' }, num('goal', 0, 100000), sel('goalUnit', [['episodes', 'episodes'], ['hours', 'hours']]), sel('goalPeriod', [['week', 'per week'], ['month', 'per month'], ['year', 'per year']]))),
        h('div', { class: 'cx-hint' }, 'Set the goal to 0 to turn it off.'),
        h('label', {}, 'Mark as dropped after (days untouched)', num('dropDays', 7, 3650)),
        h('label', {}, 'Count an episode as watched at (%)', num('donePct', 50, 100)),
        h('label', {}, 'Auto-sync every (minutes, 0 = off)', num('syncMin', 0, 240)),
        h('label', {}, 'Assumed episode length when unknown (min)', num('epMin', 1, 180)),
        h('label', {}, 'Count as a movie when it’s at least (min)', num('movieMin', 30, 300)),
        h('label', { class: 'row' }, notify, 'Desktop notification when a new episode drops'),
        h('label', { class: 'row' }, airing, 'Airing countdowns – “E9 airs in 2d” (looks up show titles on AniList, nothing else)')),
      h('div', { class: 'cx-flabel' }, 'Safety snapshots'),
      snapshotList(close),
      h('div', { class: 'cx-modal-act' }, h('button', { class: 'cx-btn', onclick: () => { close(); helpModal(); } }, 'Shortcuts & about'),
        h('button', { class: 'cx-btn', onclick: () => { close(); profileModal(); } }, 'Profile'),
        h('button', { class: 'cx-btn primary', onclick: async () => { await savePrefs(); close(); refresh(); toast('Settings saved', 'ok'); } }, 'Save'))]);
  }
  function manualModal() {
    const f = { title: h('input', { class: 'cx-input', placeholder: 'e.g. Demon Slayer' }),
      svc: h('select', { class: 'cx-select' }, ...['disney', 'prime', 'netflix', 'other'].map((k) => h('option', { value: k }, SERVICES[k].label))),
      count: h('input', { class: 'cx-input sm', type: 'number', min: '0', value: '12' }), total: h('input', { class: 'cx-input sm', type: 'number', min: '0', placeholder: 'unknown' }),
      status: h('select', { class: 'cx-select' }, ...['completed', 'watching', 'dropped'].map((k) => h('option', { value: k }, STATUS[k].label))),
      date: h('input', { class: 'cx-input sm', type: 'date', value: stamp() }), epMin: h('input', { class: 'cx-input sm', type: 'number', min: '1', value: String(S.epMin) }),
      movie: h('input', { type: 'checkbox' }) };
    modal('wide', (close) => [h('h3', {}, 'Add a show'), h('p', {}, 'For anything not on Crunchyroll – Disney+, Prime Video, Netflix, Blu-ray…'),
      h('div', { class: 'cx-form' }, h('label', {}, 'Title', f.title), h('label', {}, 'Service', f.svc), h('label', { class: 'row' }, f.movie, 'It’s a movie'),
        h('label', {}, 'Episodes watched', f.count), h('label', {}, 'Total episodes', f.total), h('label', {}, 'Status', f.status),
        h('label', {}, 'Last watched', f.date), h('label', {}, 'Minutes per episode', f.epMin)),
      h('div', { class: 'cx-modal-act' }, h('button', { class: 'cx-btn', onclick: close }, 'Cancel'),
        h('button', { class: 'cx-btn primary', onclick: async () => {
          const title = f.title.value.trim(); if (!title) return f.title.focus();
          await saveManual({ svc: f.svc.value, title, count: f.movie.checked ? 1 : +f.count.value || 0, total: f.movie.checked ? 1 : +f.total.value || 0, movie: f.movie.checked,
            status: f.status.value, date: new Date((f.date.value || stamp()) + 'T12:00:00').toISOString(), epMin: +f.epMin.value || (f.movie.checked ? 100 : S.epMin) });
          close(); toast(`Added ${title}`, 'ok');
        } }, 'Add show'))]);
    setTimeout(() => f.title.focus(), 50);
  }
  function importPicker(list, svc, fname) {
    const crTitles = new Set(state.series.filter((s) => !s.ext).map((s) => tkey(s.title)));
    const chosen = new Set(list.filter((g) => crTitles.has(tkey(g.title))).map((g) => g.title));
    const svcSel = h('select', { class: 'cx-select' }, ...Object.keys(SERVICES).filter((k) => k !== 'crunchyroll').map((k) => h('option', { value: k, selected: k === svc ? '' : null }, SERVICES[k].label)));
    const q = h('input', { class: 'cx-input', placeholder: 'Search titles…' });
    const box = h('div', { class: 'cx-implist' }), count = h('b', {});
    const draw = () => {
      const qq = norm(q.value);
      box.replaceChildren(...list.filter((g) => !qq || norm(g.title).includes(qq)).slice(0, 400).map((g) => {
        const cb = h('input', { type: 'checkbox', checked: chosen.has(g.title) ? '' : null });
        cb.addEventListener('change', () => { cb.checked ? chosen.add(g.title) : chosen.delete(g.title); count.textContent = `${chosen.size} selected`; });
        const last = g.eps.length ? g.eps[g.eps.length - 1].date : '';
        return h('label', { class: 'cx-imp' }, cb, h('span', { class: 'cx-imp-t' }, g.title, crTitles.has(tkey(g.title)) ? h('em', {}, ' · also on Crunchyroll') : null),
          h('span', { class: 'cx-dim' }, `${g.movie ? 'movie' : plural(g.eps.length || g.count, 'episode')}${last ? ' · ' + niceDate(last) : ''}`));
      }));
      count.textContent = `${chosen.size} selected`;
    };
    q.addEventListener('input', draw);
    modal('wide', (close) => [h('h3', {}, `Import ${plural(list.length, 'title')}`),
      h('p', {}, `From ${fname}. Netflix exports include everything you watched – tick the anime you want in your list. Shows that are also on your Crunchyroll list are ticked already and will be merged.`),
      h('div', { class: 'cx-inline' }, h('span', {}, 'Service'), svcSel, q),
      h('div', { class: 'cx-inline' }, h('button', { class: 'cx-btn xs', onclick: () => { list.forEach((g) => chosen.add(g.title)); draw(); } }, 'Select all'),
        h('button', { class: 'cx-btn xs', onclick: () => { chosen.clear(); draw(); } }, 'Select none'), count),
      box,
      h('div', { class: 'cx-modal-act' }, h('button', { class: 'cx-btn', onclick: close }, 'Cancel'),
        h('button', { class: 'cx-btn primary', onclick: async () => { if (!chosen.size) return toast('Tick at least one title', 'bad'); close(); await commitImport(list.filter((g) => chosen.has(g.title)), svcSel.value); } }, 'Import'))]);
    draw();
  }
  function mergeModal(s) {
    const q = h('input', { class: 'cx-input', placeholder: 'Search for the other card…' }), box = h('div', { class: 'cx-implist' });
    let closeFn;
    const draw = () => {
      const qq = norm(q.value);
      box.replaceChildren(...state.series.filter((x) => x.sid !== s.sid && !x.ext && (!qq || norm(x.title).includes(qq))).sort((a, b) => a.title.localeCompare(b.title)).slice(0, 200)
        .map((x) => h('button', { class: 'cx-imp btn', onclick: async () => {
          if (!(await confirmModal('Merge these?', `“${x.title}” will be shown as part of “${s.title}”. You can split them again from the show panel.`, 'Merge'))) return;
          for (const m of x.members || [x.sid]) state.merges[m] = s.sid;
          await savePrefs(); closeFn(); refresh(); toast('Merged', 'ok');
        } }, h('span', { class: 'cx-imp-t' }, x.title), h('span', { class: 'cx-dim' }, `${STATUS[x.status].label} · ${plural(x.count || x.done, 'episode')}`))));
    };
    q.addEventListener('input', draw);
    closeFn = modal('wide', (close) => [h('h3', {}, `Merge into ${s.title}`), h('p', {}, 'Pick a card that’s the same anime (a dub, a re-release, a split entry). Its episodes will be counted as part of this show.'), q, box,
      h('div', { class: 'cx-modal-act' }, h('button', { class: 'cx-btn', onclick: close }, 'Cancel'))]);
    draw(); setTimeout(() => q.focus(), 50);
  }
  function randomPick() {
    const pool = state.series.filter((s) => !s.hidden && (s.status === 'watching' || s.status === 'newseason'));
    if (!pool.length) return toast('Nothing in progress – go start something new!', 'info');
    const weighted = pool.flatMap((s) => Array(1 + (s.fav ? 3 : 0) + (s.rating >= 8 ? 2 : 0) + (s.left && s.left < 120 ? 2 : 0)).fill(s));
    const title = h('div', { class: 'cx-spin-t' }), sub = h('div', { class: 'cx-spin-s' }), art = h('div', { class: 'cx-spin-art' }), act = h('div', { class: 'cx-modal-act' });
    let pick;
    const spin = () => {
      act.replaceChildren(); let i = 0; const steps = 18 + Math.floor(Math.random() * 8);
      const tick = () => {
        pick = weighted[Math.floor(Math.random() * weighted.length)];
        title.textContent = pick.title; art.style.backgroundImage = pick.thumb ? `url("${pick.thumb}")` : '';
        if (++i < steps) setTimeout(tick, 35 + i * i * 0.3);
        else {
          sub.textContent = pick.current && pick.nextEp ? `Next up: ${pick.current.t} ${epTag(pick.nextEp.l)}${pick.left ? ` · ${dur(pick.left)} left` : ''}` : pick.newSeason ? `${pick.newSeason.t} is waiting` : '';
          const href = pick.nextEp ? `https://www.crunchyroll.com/watch/${pick.nextEp.id}` : pick.url;
          act.replaceChildren(h('button', { class: 'cx-btn', onclick: spin }, '🎲 Spin again'), href ? h('a', { class: 'cx-btn primary', href }, '▶ Watch it') : null);
        }
      };
      sub.textContent = ''; tick();
    };
    modal('', () => [h('div', { class: 'cx-eyebrow' }, 'What should I watch?'), art, title, sub, act]);
    spin();
  }
  async function compareModal() {
    const code = await profileCode();
    const inp = h('textarea', { class: 'cx-note-in', placeholder: 'Paste your friend’s code here…' });
    const out = h('div', {});
    modal('wide', (close) => [h('h3', {}, 'Compare with a friend'),
      h('p', {}, 'Send your code to a friend who also uses this tracker, and paste theirs below. Codes only contain your stats and show titles.'),
      h('div', { class: 'cx-inline' }, h('button', { class: 'cx-btn primary', onclick: async () => { await copyText(code); toast('Your code is copied – send it to your friend', 'ok'); } }, 'Copy my code'), h('span', { class: 'cx-dim' }, `${Math.round(code.length / 1024)} KB`)),
      inp, h('div', { class: 'cx-inline' }, h('button', { class: 'cx-btn', onclick: async () => {
        try { state.friend = await readCode(inp.value); out.replaceChildren(compareView(state.friend)); }
        catch (_) { toast("That code doesn't look right", 'bad'); }
      } }, 'Compare')), out,
      h('div', { class: 'cx-modal-act' }, h('button', { class: 'cx-btn', onclick: close }, 'Close'))]);
  }
  function compareView(f) {
    const T = state.totals, mine = new Map(state.series.filter((s) => !s.hidden).map((s) => [tkey(s.title), s]));
    const theirs = f.l.map(([t, st, r, m]) => ({ t, st, r, m }));
    const shared = theirs.filter((x) => mine.has(tkey(x.t)));
    const recs = theirs.filter((x) => !mine.has(tkey(x.t)) && x.st === 'c').sort((a, b) => (b.r || 0) - (a.r || 0) || b.m - a.m).slice(0, 15);
    const row = (l, a, b) => h('div', { class: 'cx-cmp' }, h('b', { class: +a >= +b ? 'win' : '' }, Number(a).toLocaleString()), h('span', {}, l), h('b', { class: +b > +a ? 'win' : '' }, Number(b).toLocaleString()));
    return h('div', { class: 'cx-compare' },
      h('div', { class: 'cx-cmp head' }, h('b', {}, state.name || 'You'), h('span', {}, 'vs'), h('b', {}, f.n)),
      row('days of anime', T.days.toFixed(1), f.d), row('hours', T.hours, f.h), row('anime completed', T.completed, f.c), row('seasons completed', T.seasons, f.s), row('episodes', T.watched, f.e), row('years watching', T.years.length, f.y),
      h('div', { class: 'cx-plabel' }, `${plural(shared.length, 'anime')} you’ve both watched`),
      h('div', { class: 'cx-tagrow' }, ...shared.slice(0, 40).map((x) => h('span', { class: 'cx-tag' }, x.t))),
      recs.length ? h('div', { class: 'cx-plabel' }, `${f.n} finished these and you haven’t`) : null,
      ...recs.map((x) => h('div', { class: 'cx-irow' }, h('span', {}, x.r ? `★ ${x.r}` : ''), h('b', {}, x.t), h('em', {}, dur(x.m)))));
  }
  function findModal(prefill) {
    const q = h('input', { class: 'cx-input', placeholder: 'e.g. Black Clover', value: prefill || '' }), box = h('div', { class: 'cx-implist' });
    let closeFn, timer;
    const search = async () => {
      const v = q.value.trim(); if (v.length < 2) return;
      box.replaceChildren(loader('Searching Crunchyroll…'));
      let res = [];
      try { await waitForToken(); res = await crSearch(v); } catch (e) { box.replaceChildren(h('div', { class: 'cx-empty sm' }, "Couldn't search Crunchyroll: " + e.message)); return; }
      const local = state.series.filter((s) => norm(s.title).includes(norm(v)));
      box.replaceChildren(
        ...local.map((s) => h('div', { class: 'cx-imp' }, h('span', {}, '✓'), h('span', { class: 'cx-imp-t' }, s.title,
          h('em', {}, s.hidden ? ' · hidden' : s.status === 'unavailable' ? ' · in Removed' : ' · already in your list')), h('span', { class: 'cx-dim' }, plural(s.count || s.done, 'episode')))),
        ...(res.length ? res.map((r) => h('div', { class: 'cx-imp' + ' row3' },
          h('span', { class: 'cx-imp-t' }, r.t),
          h('button', { class: 'cx-btn xs ghost', title: 'Add to your Plan to watch list', onclick: () => { addPlan(r); closeFn(); } }, '＋ Plan to watch'),
          h('button', { class: 'cx-btn xs', onclick: () => pull(r) }, 'Check my progress →')))
          : [h('div', { class: 'cx-empty sm' }, 'No series found on Crunchyroll')]));
    };
    const pull = async (r) => {
      box.replaceChildren(loader(`Checking your progress in ${r.t}…`));
      try {
        if (!state.acc) { const me = await api('/accounts/v1/me'); state.acc = me.account_id; }
        if (!state.shows[r.id]) state.shows[r.id] = { at: Date.now(), t: r.t, img: r.img, g: r.g || [] };
        const n = await deepScan([r.id], (t) => box.replaceChildren(loader(t)));
        delete state.hidden[r.id];
        await savePrefs(); refresh();
        const s = state.series.find((x) => (x.members || [x.sid]).includes(r.id));
        const d = (state.lastDiag || [])[0] || {};
        const seasonsTxt = (d.seasons || []).map((x) => `${x.t}: ${x.list || x.n} eps`).join(' · ');
        box.replaceChildren(h('div', { class: 'cx-found' },
          h('b', {}, n ? `✓ Found ${plural(n, 'watched episode')} of ${r.t}` : `No new progress found for ${r.t}`),
          s ? h('span', {}, `Now: ${s.done}${s.total ? ' / ' + s.total : ''} episodes · ${s.seasonsDone || 0}/${s.seasonsTotal || 0} seasons · ${STATUS[s.status].label}`) : null,
          h('span', { class: 'cx-dim' }, seasonsTxt ? `Crunchyroll lists ${plural((d.seasons || []).length, 'season')}: ${seasonsTxt}` : 'Crunchyroll returned no seasons for this show'),
          h('div', { class: 'cx-inline' },
            s ? h('button', { class: 'cx-btn primary', onclick: () => { closeFn(); openDrawer(s.sid); } }, 'Open show') : null,
            h('button', { class: 'cx-btn', onclick: async () => { await copyText(JSON.stringify(redact({ version: VERSION, show: r.t, diag: state.lastDiag, playheads: state.lastDiag && state.lastDiag.playheads }), null, 1)); toast('Diagnosis copied (no personal info) – paste it in the chat', 'ok'); } }, 'Copy diagnosis'),
            h('button', { class: 'cx-btn ghost', onclick: () => search() }, 'Back to results'))));
      } catch (e) { box.replaceChildren(h('div', { class: 'cx-empty sm' }, 'Error: ' + e.message)); }
    };
    q.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(search, 400); });
    q.addEventListener('keydown', (e) => { if (e.key === 'Enter') { clearTimeout(timer); search(); } });
    if (prefill) setTimeout(search, 60);
    closeFn = modal('wide', () => [h('h3', {}, 'Find a missing show'),
      h('p', {}, 'Crunchyroll’s history list only keeps so much. Search for the show, pick it, and the tracker asks Crunchyroll how far you got in every single episode.'),
      q, box, h('div', { class: 'cx-modal-act' }, h('button', { class: 'cx-btn', onclick: () => closeFn() }, 'Close'))]);
    setTimeout(() => q.focus(), 50);
  }

  async function malModal() {
    if (!state.series.length) return toast('Nothing loaded yet', 'bad');
    const entries = malEntries(), body = h('div', {}), act = h('div', { class: 'cx-modal-act' });
    let closeFn;
    const intro = () => {
      body.replaceChildren(
        h('p', {}, `Makes a MyAnimeList XML file from ${plural(entries.length, 'season / show')}. MyAnimeList and AniList both import it, and they match anime by MyAnimeList ID, so the tracker looks those up on AniList first.`),
        h('div', { class: 'cx-callout gray' }, h('span', {}, 'Privacy: only show titles are sent to AniList’s public search. Nothing about your account is sent.')));
      act.replaceChildren(h('button', { class: 'cx-btn', onclick: () => closeFn() }, 'Cancel'), h('button', { class: 'cx-btn primary', onclick: run }, 'Find matches'));
    };
    const run = async () => {
      const bar = h('i', { style: 'width:0%' }), txt = h('span', {}, 'Matching with AniList…');
      body.replaceChildren(h('div', { class: 'cx-inline' }, txt), h('div', { class: 'cx-sbar wide' }, bar)); act.replaceChildren();
      let found;
      try { found = await anilistSearch([...new Set(entries.map((e) => e.q))], (n, t) => { bar.style.width = `${(n / t) * 100}%`; txt.textContent = `Matching with AniList… ${n}/${t}`; }); }
      catch (_) { body.replaceChildren(h('p', {}, 'Couldn’t reach AniList from this page (your browser or network may be blocking it). Try again later.')); act.replaceChildren(h('button', { class: 'cx-btn', onclick: () => closeFn() }, 'Close')); return; }
      const rows = entries.map((e) => ({ ...e, m: found[e.q] })), chosen = new Set(rows.map((r, i) => (r.m && r.m.mal ? i : -1)).filter((i) => i >= 0));
      const ok = rows.filter((r) => r.m && r.m.mal).length;
      body.replaceChildren(
        h('p', {}, `Matched ${ok} of ${rows.length}. Untick anything that matched the wrong anime.`),
        h('div', { class: 'cx-implist' }, ...rows.map((r, i) => {
          if (!r.m || !r.m.mal) return h('div', { class: 'cx-imp' }, h('span', {}, '–'), h('span', { class: 'cx-imp-t' }, r.label), h('span', { class: 'cx-dim' }, 'no match'));
          const cb = h('input', { type: 'checkbox', checked: '' });
          cb.addEventListener('change', () => (cb.checked ? chosen.add(i) : chosen.delete(i)));
          return h('label', { class: 'cx-imp' }, cb, h('span', { class: 'cx-imp-t' }, r.label, r.m.t !== r.label ? h('em', { class: 'cx-match' }, ` → ${r.m.t}`) : null),
            h('a', { class: 'cx-dim', href: `https://myanimelist.net/anime/${r.m.mal}`, target: '_blank', onclick: (e) => e.stopPropagation() }, `MAL #${r.m.mal}`));
        })),
        h('div', { class: 'cx-hint' }, 'MyAnimeList: myanimelist.net/import.php → “MyAnimeList Import”. AniList: Settings → Import → upload the file.'));
      act.replaceChildren(h('button', { class: 'cx-btn', onclick: () => closeFn() }, 'Close'),
        h('button', { class: 'cx-btn primary', onclick: () => {
          const pick = rows.filter((_, i) => chosen.has(i));
          if (!pick.length) return toast('Nothing selected', 'bad');
          download(new Blob([malXml(pick)], { type: 'application/xml' }), `animelist-mal-${stamp()}.xml`);
          toast(`MAL XML downloaded – ${plural(new Set(pick.map((r) => r.m.mal)).size, 'anime')}`, 'ok');
        } }, 'Download XML'));
    };
    intro();
    closeFn = modal('wide', () => [h('h3', {}, 'Export to MyAnimeList / AniList'), body, act]);
  }

  function openShare(kind) {
    if (!state.totals) return toast('Nothing loaded yet', 'bad');
    let mode = kind === 'id' ? 'id' : 'recap', year = null, c = null;
    const imgEl = h('img', { class: 'cx-share-img', alt: 'Share card' });
    const draw = async () => {
      imgEl.classList.add('loading');
      c = mode === 'id' ? await drawIdCard() : drawCard(year);
      imgEl.src = c.toDataURL('image/png'); imgEl.classList.remove('loading');
      imgEl.classList.toggle('id', mode === 'id'); years.style.display = mode === 'id' ? 'none' : '';
    };
    const years = h('div', { class: 'cx-chips' }, ...[null, ...state.totals.years.map((y) => y.y).reverse()].map((y) =>
      h('button', { class: 'cx-chip' + (y === year ? ' on' : ''), style: '--c:#ff8a1f', onclick: (e) => {
        year = y; draw();
        years.querySelectorAll('.cx-chip').forEach((b) => b.classList.remove('on')); e.currentTarget.classList.add('on');
      } }, y ? String(y) : 'All time')));
    const seg = h('div', { class: 'cx-airseg big' }, ...[['recap', 'Anime Recap'], ['id', 'Anime ID card']].map(([k, l]) =>
      h('button', { class: 'cx-airseg-b' + (mode === k ? ' on' : ''), onclick: (e) => { mode = k; seg.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b === e.currentTarget)); draw(); } }, l)));
    const name = () => (mode === 'id' ? `anime-id-${stamp()}.png` : `anime-recap-${year || 'all-time'}-${stamp()}.png`);
    modal('share', (close) => [h('h3', {}, 'Share'), h('p', {}, 'Paste it straight into Discord. Your picture, title and Top 5 are set in your profile.'), seg, years, imgEl,
      h('div', { class: 'cx-modal-act' },
        h('button', { class: 'cx-btn', onclick: () => { close(); profileModal(); } }, 'Edit profile'),
        h('button', { class: 'cx-btn', onclick: () => c && c.toBlob((b) => download(b, name())) }, 'Download PNG'),
        h('button', { class: 'cx-btn primary', onclick: () => c && c.toBlob(async (b) => {
          try { await navigator.clipboard.write([new ClipboardItem({ 'image/png': b })]); toast('Image copied – paste it anywhere', 'ok'); }
          catch (_) { download(b, name()); toast("Couldn't copy, so it downloaded instead", 'info'); }
        }) }, 'Copy image'))]);
    years.firstChild.classList.add('on');
    draw();
  }


  // ================================================================
  // 14. Profiles – picture, banner, frames, titles, Top 5, ID card, custom colours
  // ================================================================
  const profile = { pic: null, picSrc: null, picTaint: false, banner: null, name: '', title: 'auto', frame: 'auto', top: [], showOnCR: false };
  const img = { pic: null, banner: null };
  const loadImg = (src, cors) => new Promise((res) => {
    if (!src) return res(null);
    const i = new Image(); if (cors) i.crossOrigin = 'anonymous';
    i.onload = () => res(i); i.onerror = () => res(null); i.src = src;
  });
  async function loadProfile() {
    Object.assign(profile, (await store.get('profile3')) || {});
    cleanProfile();
    if (profile.picSrc === 'cr' && profile.picTaint && profile.pic) setTimeout(() => retryCrAvatar(0), 500);
    img.pic = await loadImg(profile.pic, !profile.pic || !profile.pic.startsWith('data:'));
    img.banner = await loadImg(profile.banner);
    crAvatarSwap();
  }
  async function saveProfile() { cleanProfile(); await store.set('profile3', { ...profile }); img.pic = await loadImg(profile.pic, profile.pic && !profile.pic.startsWith('data:')); img.banner = await loadImg(profile.banner); crAvatarSwap(); }
  // only our own pictures (made in your browser) or Crunchyroll's own avatar images are ever used
  const safePic = (v) => (typeof v === 'string' && (/^data:image\/(png|jpe?g|webp|gif);base64,[a-z0-9+/=]+$/i.test(v) || /^https:\/\/(static|imgsrv)\.crunchyroll\.com\/[\w\-./,=:%]+$/i.test(v)) ? v : null);
  function cleanProfile() {
    profile.pic = safePic(profile.pic); profile.banner = safePic(profile.banner); profile.crUrl = safePic(profile.crUrl);
    profile.name = String(profile.name || '').slice(0, 32);
    profile.top = (Array.isArray(profile.top) ? profile.top : []).map(String).slice(0, 5);
    if (!['auto', ...TITLES.map((t) => t.id)].includes(profile.title)) profile.title = 'auto';
    if (!['auto', ...FRAMES.map((f) => f.id)].includes(profile.frame)) profile.frame = 'auto';
  }
  const displayName = () => profile.name || state.name || 'Anime fan';

  // ---------- titles ----------
  const RARITY = {
    common: { label: 'Common', color: '#a1a1aa' }, rare: { label: 'Rare', color: '#60a5fa' }, epic: { label: 'Epic', color: '#c084fc' },
    legendary: { label: 'Legendary', color: '#fbbf24' }, mythic: { label: 'Mythic', color: '#ff4d8d' },
  };
  const RANK = { common: 0, rare: 1, epic: 2, legendary: 3, mythic: 4 };
  // ctx: T totals · I insights · R real rows (no bulk marks, no guessed dates) · X extra facts
  const TITLES = [
    ['newcomer', 'Newcomer', 'common', 'Complete your first anime', (c) => c.T.completed >= 1],
    ['regular', 'Regular', 'common', 'Watch 100 episodes', (c) => c.T.watched >= 100],
    ['binger', 'Binger', 'common', 'Average 6+ episodes on days you watch', (c) => c.P.has('Binger')],
    ['owl', 'Night Owl', 'common', 'Watch over a third of your episodes after 10pm', (c) => c.P.has('Night Owl')],
    ['weekend', 'Weekend Warrior', 'common', 'Do most of your watching on weekends', (c) => c.P.has('Weekend Warrior')],
    ['completionist', 'Completionist', 'common', 'Finish 70% of what you start', (c) => c.P.has('Completionist')],
    ['explorer', 'Explorer', 'common', 'Watch 150 different anime', (c) => c.P.has('Explorer')],
    ['loyalist', 'Loyalist', 'common', 'One show is 15% of your watch time', (c) => c.P.has('Loyalist')],
    ['century', 'Century', 'rare', 'Complete 100 anime', (c) => c.T.completed >= 100],
    ['marathoner', 'Marathoner', 'rare', 'Watch 12 hours in a single day', (c) => c.X.bigDayMin >= 720],
    ['earlybird', 'Early Bird', 'rare', 'Watch a fifth of 200+ episodes between 5 and 9am', (c) => c.R.length >= 200 && c.X.early / c.R.length >= 0.2],
    ['veteran', 'Veteran', 'rare', 'Watch anime in 5 different years', (c) => c.T.years.length >= 5],
    ['moviebuff', 'Movie Buff', 'rare', 'Watch 25 anime movies', (c) => c.T.movies >= 25],
    ['longhaul', 'Long Haul', 'rare', 'Complete a show with 200+ episodes', (c) => c.X.longest >= 200],
    ['hopper', 'Genre Hopper', 'rare', 'Spend 10+ hours in 15 different genres', (c) => c.X.genres10 >= 15],
    ['streak30', 'Devoted', 'rare', 'Watch 30 days in a row', (c) => c.I.best >= 30],
    ['speedrun', 'Speedrunner', 'rare', 'Finish a 24+ episode season within 48 hours', (c) => c.X.speedrun, true],
    ['patience', 'Patience', 'rare', 'Finish a show 3+ years after you started it', (c) => c.X.patience, true],
    ['fullcircle', 'Full Circle', 'rare', 'Go back to your very first anime a year later', (c) => c.X.fullCircle, true],
    ['thousandh', 'Thousand Hours', 'epic', 'Watch 1,000 hours of anime', (c) => c.T.hours >= 1000],
    ['ironwill', 'Iron Will', 'epic', 'Watch 100 days in a row', (c) => c.I.best >= 100],
    ['seasoned', 'Seasoned', 'epic', 'Complete 500 seasons', (c) => c.T.seasons >= 500],
    ['cinephile', 'Cinephile', 'epic', 'Watch 100 anime movies', (c) => c.T.movies >= 100],
    ['spotless', 'Spotless', 'epic', 'Complete 50 anime without dropping a single one', (c) => c.T.completed >= 50 && c.T.dropped === 0],
    ['midnight', 'Midnight Marathon', 'epic', '10 episodes in one night, between midnight and 6am', (c) => c.X.nightRun >= 10, true],
    ['tenthousand', '5K Club', 'epic', 'Watch 5,000 episodes', (c) => c.T.watched >= 5000],
    ['oneyear', 'One Year Under', 'legendary', 'A full year of anime – 365 days of watch time', (c) => c.T.days >= 365],
    ['unbroken', 'Unbroken', 'legendary', 'Watch 365 days in a row', (c) => c.I.best >= 365],
    ['archivist', 'The Archivist', 'legendary', 'Complete 500 anime', (c) => c.T.completed >= 500],
    ['voyage', 'The Long Voyage', 'legendary', 'Watch 1,000 episodes of one show', (c) => c.X.mostEps >= 1000],
    ['witching', 'Witching Hour', 'legendary', '100 episodes watched between 3 and 4am', (c) => c.X.three >= 100, true],
    ['eternal', 'Eternal', 'mythic', 'Three full years of anime – 1,000 days of watch time', (c) => c.T.days >= 1000],
    ['nodaysoff', 'No Days Off', 'mythic', 'Watch 730 days in a row', (c) => c.I.best >= 730],
    ['grimreaper', 'Grim Reaper', 'mythic', '10,000 episodes and 1,000 anime completed', (c) => c.T.watched >= 10000 && c.T.completed >= 1000],
    ['decade', 'A Decade Deep', 'mythic', 'Watch anime in 10 different years with 2,000+ hours', (c) => c.T.years.length >= 10 && c.T.hours >= 2000, true],
  ].map(([id, name, rarity, hint, test, secret]) => ({ id, name, rarity, hint, test, secret: !!secret }));

  let ctxCache = null;
  function titleCtx() {
    if (ctxCache && ctxCache.T === state.totals) return ctxCache;
    const T = state.totals, I = insights(), P = new Set(persona().map((p) => p[0]));
    const R = allRows().filter((r) => r.date && !r.bulk && !r.ext && !r.dateGuess && r.done !== false);
    let early = 0, three = 0;
    const nights = new Map();
    for (const r of R) {
      const d = new Date(r.date), hr = d.getHours();
      if (hr >= 5 && hr < 9) early++;
      if (hr === 3) three++;
      if (hr < 6) { const k = d.toDateString(); nights.set(k, (nights.get(k) || 0) + 1); }
    }
    const shows = state.series.filter((s) => !s.hidden && !s.ext && !s.plan);
    const done = shows.filter((s) => s.status === 'completed');
    // seasons of 24+ episodes finished within 48 hours
    let speedrun = false;
    const bySeason = new Map();
    for (const r of R) if (r._si >= 0) { const k = (r._sid || r.sid) + '|' + r._si; (bySeason.get(k) || bySeason.set(k, []).get(k)).push(new Date(r.date).getTime()); }
    for (const s of done) (s.seasons || []).forEach((x, si) => {
      if (speedrun || !x.complete || x.n < 24) return;
      const t = bySeason.get(s.sid + '|' + si); if (!t || t.length < 24) return;
      if (Math.max(...t) - Math.min(...t) <= 2 * DAY) speedrun = true;
    });
    const first = T.first;
    const fullCircle = !!first && R.some((r) => (r._sid || r.sid) === (first.ep._sid || first.ep.sid) && new Date(r.date) - new Date(first.date) > 365 * DAY);
    const genreH = {};
    for (const s of shows) for (const g of s.genres || []) genreH[g] = (genreH[g] || 0) + s.minutes / 60;
    const perShow = {};
    for (const r of R) { const k = r._sid || r.sid; perShow[k] = (perShow[k] || 0) + 1; }
    ctxCache = { T, I, P, R, X: {
      early, three, nightRun: Math.max(0, ...nights.values()), bigDayMin: I.bigDay ? I.bigDay.min : 0,
      longest: Math.max(0, ...done.map((s) => s.total || 0)), speedrun, fullCircle,
      patience: done.some((s) => s.first && s.last && new Date(s.last) - new Date(s.first) >= 3 * 365 * DAY),
      genres10: Object.values(genreH).filter((v) => v >= 10).length, mostEps: Math.max(0, ...Object.values(perShow)),
    } };
    return ctxCache;
  }
  function earnedTitles() {
    if (!state.totals) return [];
    const c = titleCtx();
    return TITLES.filter((t) => { try { return !!t.test(c); } catch (_) { return false; } });
  }
  function currentTitle() {
    const got = earnedTitles();
    if (profile.title !== 'auto') { const t = got.find((x) => x.id === profile.title); if (t) return t; }
    return got.slice().sort((a, b) => RANK[b.rarity] - RANK[a.rarity])[0] || null;
  }

  // ---------- frames ----------
  const FRAMES = [
    { id: 'none', name: 'No frame', hint: '', test: () => true, g: null },
    { id: 'ember', name: 'Ember', hint: 'Complete your first anime', test: (c) => c.T.completed >= 1, g: ['#ffb15c', '#ff7a1a', '#ff3d6e'] },
    { id: 'silver', name: 'Silver', hint: 'Complete 50 anime', test: (c) => c.T.completed >= 50, g: ['#f4f4f5', '#a1a1aa', '#e4e4e7'] },
    { id: 'sakura', name: 'Sakura', hint: 'Watch 1,000 episodes', test: (c) => c.T.watched >= 1000, g: ['#fecdd3', '#f472b6', '#fda4af'] },
    { id: 'flame', name: 'Flame', hint: 'Watch 30 days in a row', test: (c) => c.I.best >= 30, g: ['#fde047', '#f97316', '#dc2626'] },
    { id: 'gold', name: 'Gold', hint: '100 days of anime', test: (c) => c.T.days >= 100, g: ['#fff7cc', '#fbbf24', '#b45309'] },
    { id: 'aurora', name: 'Aurora', hint: 'Complete 250 anime', test: (c) => c.T.completed >= 250, g: ['#34d399', '#38bdf8', '#a855f7'] },
    { id: 'reaper', name: 'Reaper', hint: 'Complete 500 seasons', test: (c) => c.T.seasons >= 500, g: ['#fb7185', '#e11d48', '#1a0206'] },
    { id: 'void', name: 'Void', hint: 'Earn a Mythic title', test: (c) => earnedTitles().some((t) => t.rarity === 'mythic'), g: ['#ff4d8d', '#a855f7', '#22d3ee', '#fde047'] },
  ];
  function frameOk(f) { if (!state.totals) return f.id === 'none'; try { return f.test(titleCtx()); } catch (_) { return false; } }
  function currentFrame() {
    if (profile.frame !== 'auto') { const f = FRAMES.find((x) => x.id === profile.frame); if (f && frameOk(f)) return f; }
    if (profile.frame === 'none') return FRAMES[0];
    return FRAMES.slice().reverse().find((f) => f.id !== 'void' && frameOk(f)) || FRAMES[0];
  }
  const frameCss = (f) => (f && f.g ? `conic-gradient(from 210deg,${[...f.g, f.g[0]].join(',')})` : 'none');

  // avatar element (picture or initials) with its frame
  function avatarEl(size, onclick) {
    const f = currentFrame();
    const inner = profile.pic ? h('img', { src: profile.pic, alt: '', referrerpolicy: 'no-referrer' }) : h('span', {}, initials(displayName()));
    return h(onclick ? 'button' : 'div', { class: 'cx-ava' + (f.g ? ' framed f-' + f.id : ''), style: `--s:${size}px;--frame:${frameCss(f)}`, title: onclick ? 'Your profile' : null, onclick },
      h('div', { class: 'cx-ava-in' }, inner));
  }
  function titleChip(t) { return t ? h('span', { class: 'cx-ttl r-' + t.rarity, title: `${RARITY[t.rarity].label} title · ${t.hint}` }, t.name) : null; }

  // ---------- Top 5 shelf ----------
  const topShows = () => profile.top.map((sid) => state.byId.get(sid)).filter(Boolean);
  async function toggleTop(sid) {
    const i = profile.top.indexOf(sid);
    if (i >= 0) profile.top.splice(i, 1);
    else { if (profile.top.length >= 5) return toast('Your Top 5 is full – remove one first (click your picture)', 'bad'); profile.top.push(sid); }
    await saveProfile(); render(); if (state.open) openDrawer(state.open, true);
    toast(i >= 0 ? 'Removed from your Top 5' : `Added to your Top 5 (${profile.top.length}/5)`, 'ok');
  }
  function renderShelf() {
    const list = topShows();
    if (!list.length) return null;
    return h('div', { class: 'cx-shelf' }, h('span', { class: 'cx-shelf-h' }, 'Top 5'),
      ...list.map((s, i) => h('button', { class: 'cx-shelf-i', title: s.title, onclick: () => openDrawer(s.sid) },
        h('span', { class: 'cx-shelf-art', style: artBg(s) }, h('b', {}, String(i + 1))), h('span', { class: 'cx-shelf-t' }, s.title))));
  }

  // ---------- picture tools ----------
  function readDataUrl(file) { return new Promise((res) => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.onerror = () => res(null); fr.readAsDataURL(file); }); }
  // crop an image: square (avatar) or wide (banner). Drag to move, slider to zoom.
  function cropModal(src, wide) {
    return new Promise(async (done) => {
      const im = await loadImg(src); if (!im) { toast("Couldn't read that image", 'bad'); return done(null); }
      const OW = wide ? 1200 : 320, OH = wide ? 360 : 320, VW = wide ? 600 : 280, VH = wide ? 180 : 280;
      const c = h('canvas', { width: VW, height: VH, class: 'cx-crop' + (wide ? ' wide' : '') });
      const x = c.getContext('2d');
      const base = Math.max(VW / im.width, VH / im.height);
      let z = 1, ox = 0, oy = 0, drag = null, answered = false;
      const clamp = () => { const w = im.width * base * z, hh = im.height * base * z; ox = Math.min(0, Math.max(VW - w, ox)); oy = Math.min(0, Math.max(VH - hh, oy)); };
      const center = () => { ox = (VW - im.width * base * z) / 2; oy = (VH - im.height * base * z) / 2; };
      const draw = () => { clamp(); x.clearRect(0, 0, VW, VH); x.drawImage(im, ox, oy, im.width * base * z, im.height * base * z); };
      center(); draw();
      c.addEventListener('pointerdown', (e) => { drag = { x: e.clientX - ox, y: e.clientY - oy }; c.setPointerCapture(e.pointerId); });
      c.addEventListener('pointermove', (e) => { if (!drag) return; ox = e.clientX - drag.x; oy = e.clientY - drag.y; draw(); });
      c.addEventListener('pointerup', () => (drag = null));
      const zoom = h('input', { type: 'range', min: '1', max: '4', step: '0.01', value: '1', class: 'cx-range' });
      zoom.addEventListener('input', () => { const cx = VW / 2, cy = VH / 2, k = +zoom.value / z; ox = cx - (cx - ox) * k; oy = cy - (cy - oy) * k; z = +zoom.value; draw(); });
      const finish = (ok) => {
        answered = true;
        if (!ok) return done(null);
        const out = document.createElement('canvas'); out.width = OW; out.height = OH; const k = OW / VW;
        out.getContext('2d').drawImage(im, ox * k, oy * k, im.width * base * z * k, im.height * base * z * k);
        let url = out.toDataURL('image/webp', 0.86); if (!url.startsWith('data:image/webp')) url = out.toDataURL('image/jpeg', 0.86);
        done(url);
      };
      modal('', (close) => [h('h3', {}, wide ? 'Position your banner' : 'Position your picture'), h('p', {}, 'Drag to move · slider to zoom'),
        h('div', { class: 'cx-crop-wrap' + (wide ? ' wide' : '') }, c), zoom,
        h('div', { class: 'cx-modal-act' }, h('button', { class: 'cx-btn', onclick: () => { close(); finish(false); } }, 'Cancel'),
          h('button', { class: 'cx-btn primary', onclick: () => { close(); finish(true); } }, 'Use this'))]);
      ui.root.lastChild.querySelector('.cx-modal-bg').addEventListener('click', () => { if (!answered) done(null); });
    });
  }
  async function crAvatarUrl() {
    await waitForToken();
    try { const p = await api('/accounts/v1/me/profile', 0); if (p && p.avatar) return `https://static.crunchyroll.com/assets/avatar/170x170/${p.avatar}`; } catch (_) {}
    try { const mp = await api('/accounts/v1/me/multiprofile', 0); const p = (mp.profiles || []).find((x) => x.is_selected) || (mp.profiles || [])[0]; if (p && p.avatar) return `https://static.crunchyroll.com/assets/avatar/170x170/${p.avatar}`; } catch (_) {}
    return null;
  }
  // a copy of the avatar that can go on share cards: a fresh request (the browser's cached copy can't be copied),
  // then through Crunchyroll's image server (the one posters come from)
  async function crAvatarData(url) {
    // 1) Crunchyroll's image server (the one posters come from – it allows share cards), 2) same with the full address,
    // 3) a fresh copy straight from the avatar server
    const path = (String(url).match(/static\.crunchyroll\.com(\/[^?#]+)/) || [])[1];
    const tries = [
      path ? `https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=png,width=320${path}` : null,
      `https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=png,width=320/${url}`,
      url + (url.includes('?') ? '&' : '?') + 'reaperdex=' + Date.now()].filter(Boolean);
    for (const u of tries) {
      const im = await loadImg(u, true); if (!im) continue;
      try { const c = document.createElement('canvas'); c.width = c.height = 320; c.getContext('2d').drawImage(im, 0, 0, 320, 320); return c.toDataURL('image/png'); } catch (_) {}
    }
    return null;
  }
  async function useCrAvatar() {
    const url = await crAvatarUrl();
    if (!url) return toast("Couldn't find your Crunchyroll avatar", 'bad');
    const data = await crAvatarData(url);
    profile.pic = data || url; profile.picSrc = 'cr'; profile.picTaint = !data; profile.crUrl = url;
    await saveProfile();
    toast('Using your Crunchyroll avatar', 'ok');
    if (!data) retryCrAvatar();
  }
  // the copy for share cards sometimes isn't ready on the first try – keep trying quietly, then update everything on screen
  let avaRetry = null;
  function retryCrAvatar(n = 0) {
    clearTimeout(avaRetry);
    if (!profile.picTaint || profile.picSrc !== 'cr' || n > 5) return;
    avaRetry = setTimeout(async () => {
      const d = await crAvatarData(profile.crUrl || profile.pic);
      if (!d) return retryCrAvatar(n + 1);
      profile.pic = d; profile.picTaint = false; await saveProfile();
      if (state.series.length) render();
      refreshProfileModal();
    }, [1500, 4000, 8000, 15000, 30000, 60000][n]);
  }
  let profileClose = null;
  function refreshProfileModal() { if (profileClose && ui.root.querySelector('.cx-modal-box.profile')) { profileClose(); setTimeout(profileModal, 220); } }
  // optional: show your picture in Crunchyroll's own menus – only on this computer
  let swapObs = null;
  function crAvatarSwap() {
    if (swapObs) { swapObs.disconnect(); swapObs = null; }
    if (!profile.showOnCR || !profile.pic || profile.picSrc === 'cr') return;
    const swap = () => document.querySelectorAll('img[src*="/assets/avatar/"]').forEach((i) => { if (!i.closest('#cx-root') && i.src !== profile.pic) { i.dataset.nrOrig = i.src; i.src = profile.pic; i.srcset = ''; } });
    let t = null;
    swapObs = new MutationObserver(() => { clearTimeout(t); t = setTimeout(swap, 150); });
    swapObs.observe(document.documentElement, { childList: true, subtree: true });
    swap();
  }

  // ---------- profile editor ----------
  function profileModal() {
    if (!state.totals) return toast('Nothing loaded yet', 'bad');
    let closeFn = null;
    const reopen = () => { if (closeFn) closeFn(); setTimeout(profileModal, 220); };
    const got = new Set(earnedTitles().map((t) => t.id));
    const nameIn = h('input', { class: 'cx-input', placeholder: state.name || 'Your name', value: profile.name || '', maxlength: '32' });
    nameIn.addEventListener('change', async () => { profile.name = nameIn.value.trim(); await saveProfile(); render(); });
    const onCR = h('input', { type: 'checkbox', checked: profile.showOnCR ? '' : null, disabled: !profile.pic || profile.picSrc === 'cr' ? '' : null });
    onCR.addEventListener('change', async () => { profile.showOnCR = onCR.checked; await saveProfile(); });
    const pickPic = (wide) => pickFile('image/*', async (f) => {
      if (f.size > 15e6) return toast('That image is too big (max 15 MB)', 'bad');
      const url = await cropModal(await readDataUrl(f), wide); if (!url) return;
      if (wide) profile.banner = url; else { profile.pic = url; profile.picSrc = 'upload'; profile.picTaint = false; }
      await saveProfile(); render(); reopen();
    });
    const byR = ['mythic', 'legendary', 'epic', 'rare', 'common'];
    const tcount = TITLES.filter((t) => got.has(t.id)).length;
    const titleGrid = h('div', { class: 'cx-titles' },
      h('button', { class: 'cx-tsel' + (profile.title === 'auto' ? ' on' : ''), onclick: async () => { profile.title = 'auto'; await saveProfile(); render(); reopen(); } },
        h('b', {}, 'Automatic'), h('span', {}, 'Your rarest title')),
      ...[true, false].flatMap((earned) => byR.flatMap((r) => TITLES.filter((t) => t.rarity === r && got.has(t.id) === earned))).map((t) => {
        const ok = got.has(t.id);
        return h('button', { class: `cx-tsel r-${t.rarity}` + (ok ? '' : ' locked') + (profile.title === t.id ? ' on' : ''), disabled: ok ? null : '',
          title: ok ? t.hint : t.secret ? 'Secret title – keep watching' : t.hint,
          onclick: ok ? async () => { profile.title = t.id; await saveProfile(); render(); reopen(); } : null },
          h('b', {}, ok || !t.secret ? t.name : '???'), h('span', {}, `${RARITY[t.rarity].label}${ok ? '' : ' · ' + (t.secret ? 'secret' : t.hint)}`));
      }));
    const frameGrid = h('div', { class: 'cx-frames' }, ...[{ id: 'auto', name: 'Automatic', hint: 'Your best frame', g: null }, ...FRAMES].map((f) => {
      const ok = f.id === 'auto' || frameOk(f);
      return h('button', { class: 'cx-fsel' + (profile.frame === f.id ? ' on' : '') + (ok ? '' : ' locked'), disabled: ok ? null : '', title: f.hint,
        onclick: ok ? async () => { profile.frame = f.id; await saveProfile(); render(); reopen(); } : null },
        h('span', { class: 'cx-fsw' + (f.id === 'void' ? ' f-void' : ''), style: `--frame:${f.id === 'auto' ? frameCss(currentFrame()) : frameCss(f)}` }), h('b', {}, f.name), h('span', {}, ok ? (f.id === 'auto' ? f.hint : 'Unlocked') : f.hint));
    }));
    const tops = topShows();
    const move = async (i, d) => { const a = profile.top; const j = i + d; if (j < 0 || j >= a.length) return; [a[i], a[j]] = [a[j], a[i]]; await saveProfile(); render(); reopen(); };
    const topList = tops.length ? h('div', { class: 'cx-toplist' }, ...tops.map((s, i) => h('div', { class: 'cx-toprow' },
      h('b', {}, String(i + 1)), h('span', {}, s.title),
      h('button', { class: 'cx-btn xs ghost', onclick: () => move(i, -1), disabled: i ? null : '' }, '↑'), h('button', { class: 'cx-btn xs ghost', onclick: () => move(i, 1), disabled: i < tops.length - 1 ? null : '' }, '↓'),
      h('button', { class: 'cx-btn xs ghost', onclick: async () => { await toggleTop(s.sid); reopen(); } }, '✕'))))
      : h('p', { class: 'cx-hint' }, 'Open any show and press “☆ Top 5” to pin it here.');
    closeFn = profileClose = modal('wide profile', () => [
      h('div', { class: 'cx-prof-head', style: profile.banner ? `background-image:linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.65)),url("${profile.banner}")` : '' },
        avatarEl(96), h('div', {}, h('h3', {}, displayName()), titleChip(currentTitle()))),
      h('div', { class: 'cx-form' },
        h('div', { class: 'cx-flabel' }, 'Picture'),
        h('div', { class: 'cx-inline wrap' },
          h('button', { class: 'cx-btn', onclick: () => pickPic(false) }, 'Upload picture'),
          h('button', { class: 'cx-btn', onclick: async () => { await useCrAvatar(); render(); reopen(); } }, 'Use my Crunchyroll avatar'),
          profile.pic ? h('button', { class: 'cx-btn ghost', onclick: async () => { profile.pic = null; profile.picSrc = null; profile.showOnCR = false; await saveProfile(); render(); reopen(); } }, 'Remove') : null),
        profile.picTaint ? h('p', { class: 'cx-hint warn' }, 'Getting a copy of your Crunchyroll avatar for share cards… this updates by itself in a moment.') : null,
        h('div', { class: 'cx-flabel' }, 'Banner'),
        h('div', { class: 'cx-inline wrap' }, h('button', { class: 'cx-btn', onclick: () => pickPic(true) }, profile.banner ? 'Change banner' : 'Upload banner'),
          profile.banner ? h('button', { class: 'cx-btn ghost', onclick: async () => { profile.banner = null; await saveProfile(); render(); reopen(); } }, 'Remove') : null),
        h('label', {}, 'Name on your profile and cards', nameIn),
        h('label', { class: 'row' }, onCR, 'Show my picture on Crunchyroll too – only on this computer, nobody else sees it'),
        h('div', { class: 'cx-flabel' }, `Title · ${tcount} of ${TITLES.length} earned`), titleGrid,
        h('div', { class: 'cx-flabel' }, 'Frame'), frameGrid,
        h('div', { class: 'cx-flabel' }, 'Top 5'), topList,
        h('p', { class: 'cx-hint' }, 'Everything here stays in your browser – nothing is uploaded anywhere.')),
      h('div', { class: 'cx-modal-act' }, h('button', { class: 'cx-btn', onclick: () => { closeFn(); openShare('id'); } }, '🪪 My Anime ID card'),
        h('button', { class: 'cx-btn primary', onclick: () => closeFn() }, 'Done'))]);
  }

  // ---------- canvas helpers shared by the cards ----------
  function drawAvatar(x, cx, cy, r, ring) {
    const f = currentFrame();
    if (f.g && ring) {
      let g;
      if (x.createConicGradient) { g = x.createConicGradient(-Math.PI / 2, cx, cy); f.g.forEach((col, i) => g.addColorStop(i / f.g.length, col)); g.addColorStop(1, f.g[0]); }
      else { g = x.createLinearGradient(cx - r, cy - r, cx + r, cy + r); f.g.forEach((col, i) => g.addColorStop(i / Math.max(1, f.g.length - 1), col)); }
      x.save(); x.shadowColor = f.g[1]; x.shadowBlur = r * 0.5;
      x.beginPath(); x.arc(cx, cy, r + ring, 0, Math.PI * 2); x.fillStyle = g; x.fill(); x.restore();
    }
    x.save(); x.beginPath(); x.arc(cx, cy, r, 0, Math.PI * 2); x.closePath(); x.clip();
    if (img.pic && !profile.picTaint) x.drawImage(img.pic, cx - r, cy - r, r * 2, r * 2);
    else {
      const g = x.createLinearGradient(cx - r, cy - r, cx + r, cy + r); g.addColorStop(0, '#3a2140'); g.addColorStop(1, '#16121c');
      x.fillStyle = g; x.fillRect(cx - r, cy - r, r * 2, r * 2);
      x.fillStyle = '#fff'; x.font = `900 ${Math.round(r * 0.8)}px Lato, "Segoe UI", system-ui, sans-serif`; x.textAlign = 'center'; x.textBaseline = 'middle';
      x.fillText(initials(displayName()), cx, cy + 2); x.textAlign = 'left'; x.textBaseline = 'alphabetic';
    }
    x.restore();
  }

  // ---------- Anime ID card ----------
  async function drawIdCard(noPosters) {
    const T = state.totals, P = palette(), W = 1200, H = 760;
    const c = document.createElement('canvas'); c.width = W; c.height = H;
    const x = c.getContext('2d');
    const F = (w, s) => `${w} ${s}px Lato, "Segoe UI", system-ui, sans-serif`;
    const fit = (t, max) => { t = String(t); while (x.measureText(t).width > max && t.length > 1) t = t.slice(0, -2) + '…'; return t; };
    const rr = (X, Y, w, hh, r) => { x.beginPath(); if (x.roundRect) x.roundRect(X, Y, w, hh, r); else x.rect(X, Y, w, hh); };
    x.fillStyle = '#0c0a10'; x.fillRect(0, 0, W, H);
    // banner
    const BH = 250;
    x.save(); rr(0, 0, W, BH, 0); x.clip();
    if (img.banner) { const k = Math.max(W / img.banner.width, BH / img.banner.height); x.drawImage(img.banner, (W - img.banner.width * k) / 2, (BH - img.banner.height * k) / 2, img.banner.width * k, img.banner.height * k); }
    else { const g = x.createLinearGradient(0, 0, W, BH); g.addColorStop(0, rgba(P[2], .9)); g.addColorStop(.55, rgba(P[1], .75)); g.addColorStop(1, rgba(P[0], .55)); x.fillStyle = g; x.fillRect(0, 0, W, BH);
      x.strokeStyle = 'rgba(255,255,255,.07)'; for (let i = -BH; i < W; i += 28) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i + BH, BH); x.stroke(); } }
    const sh = x.createLinearGradient(0, BH * 0.4, 0, BH); sh.addColorStop(0, 'rgba(12,10,16,0)'); sh.addColorStop(1, 'rgba(12,10,16,1)'); x.fillStyle = sh; x.fillRect(0, 0, W, BH);
    x.restore();
    const glow = (X, Y, R, col) => { const r = x.createRadialGradient(X, Y, 0, X, Y, R); r.addColorStop(0, col); r.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = r; x.fillRect(0, BH, W, H - BH); };
    glow(1100, 700, 520, rgba(P[2], .22)); glow(120, 760, 420, rgba(P[1], .14));
    // card label
    x.fillStyle = 'rgba(255,255,255,.85)'; x.font = F(900, 18);
    try { x.letterSpacing = '5px'; } catch (_) {}
    x.fillText('ANIME ID', 60, 56); try { x.letterSpacing = '0px'; } catch (_) {}
    // avatar + name + title
    drawAvatar(x, 150, 270, 92, 9);
    x.fillStyle = '#fff'; x.font = F(900, 54); x.fillText(fit(displayName(), 560), 270, 300);
    const t = currentTitle();
    if (t) {
      x.font = F(900, 22); const tw = x.measureText(t.name).width + 36;
      rr(272, 322, tw, 40, 20); x.fillStyle = rgba(RARITY[t.rarity].color, .18); x.fill(); x.strokeStyle = rgba(RARITY[t.rarity].color, .7); x.lineWidth = 2; x.stroke(); x.lineWidth = 1;
      x.fillStyle = RARITY[t.rarity].color; x.fillText(t.name, 290, 349);
      x.fillStyle = 'rgba(255,255,255,.45)'; x.font = F(700, 17); x.fillText(RARITY[t.rarity].label.toUpperCase() + ' TITLE', 290 + tw, 349);
    }
    // big number
    const g2 = x.createLinearGradient(W - 420, 220, W - 60, 360); g2.addColorStop(0, P[0]); g2.addColorStop(.5, P[1]); g2.addColorStop(1, P[2]);
    x.textAlign = 'right'; x.fillStyle = g2; x.font = F(900, 120); x.fillText(daysText(T.days), W - 60, 330);
    x.fillStyle = 'rgba(255,255,255,.75)'; x.font = F(700, 26); x.fillText('days of anime', W - 64, 368); x.textAlign = 'left';
    // stat tiles
    const genre = (insights().genres[0] || [])[0];
    const tiles = [[T.watched.toLocaleString(), 'episodes'], [T.completed.toLocaleString(), 'completed'], [T.seasons.toLocaleString(), 'seasons'], genre ? [genre, 'top genre'] : [String(T.years.length), T.years.length === 1 ? 'year watching' : 'years watching']];
    tiles.forEach(([v, l], i) => {
      const X = 60 + i * 275, Y = 410;
      rr(X, Y, 255, 104, 20); x.fillStyle = 'rgba(255,255,255,.055)'; x.fill(); x.strokeStyle = 'rgba(255,255,255,.09)'; x.stroke();
      x.fillStyle = '#fff'; x.font = F(900, i === 3 ? 30 : 40); x.fillText(fit(v, 220), X + 22, Y + 56);
      x.fillStyle = 'rgba(255,255,255,.6)'; x.font = F(700, 18); x.fillText(l, X + 22, Y + 84);
    });
    // Top 5 (or most watched)
    const tops = topShows(), list = tops.length ? tops : T.top;
    x.fillStyle = '#fff'; x.font = F(800, 22); x.fillText(tops.length ? 'Top 5' : 'Most watched', 60, 560);
    const posters = noPosters ? [] : await Promise.all(list.slice(0, 5).map((s) => loadImg(s.thumb, true)));
    list.slice(0, 5).forEach((s, i) => {
      const X = 60 + i * 220, Y = 578, w = 200, hh = 112;
      x.save(); rr(X, Y, w, hh, 14); x.clip();
      let drawn = false;
      if (posters[i]) { try { const k = Math.max(w / posters[i].width, hh / posters[i].height); x.drawImage(posters[i], X + (w - posters[i].width * k) / 2, Y + (hh - posters[i].height * k) / 2, posters[i].width * k, posters[i].height * k); drawn = true; } catch (_) { drawn = false; } }
      if (!drawn) { const hu = hue(s.title), g = x.createLinearGradient(X, Y, X + w, Y + hh); g.addColorStop(0, `hsl(${hu} 65% 34%)`); g.addColorStop(1, `hsl(${(hu + 30) % 360} 60% 12%)`); x.fillStyle = g; x.fillRect(X, Y, w, hh);
        x.fillStyle = 'rgba(255,255,255,.22)'; x.font = F(900, 46); x.fillText(initials(s.title), X + 16, Y + 64); }
      const sg = x.createLinearGradient(0, Y + 40, 0, Y + hh); sg.addColorStop(0, 'rgba(0,0,0,0)'); sg.addColorStop(1, 'rgba(0,0,0,.85)'); x.fillStyle = sg; x.fillRect(X, Y, w, hh);
      x.restore();
      x.fillStyle = '#fff'; x.font = F(800, 16); x.fillText(fit(s.title, w - 20), X + 10, Y + hh - 12);
    });
    // footer
    const now = state.series.filter((s) => !s.hidden && s.status === 'watching').sort((a, b) => (a.last < b.last ? 1 : -1))[0];
    x.fillStyle = 'rgba(255,255,255,.55)'; x.font = F(700, 18);
    x.fillText(fit(now ? `Watching now: ${now.title}` : `${T.years.length} ${T.years.length === 1 ? 'year' : 'years'} of anime`, 640), 60, 728);
    x.textAlign = 'right'; x.fillStyle = 'rgba(255,255,255,.4)'; x.fillText('Reaperdex by nullreaper', W - 60, 728); x.textAlign = 'left';
    // if a poster tainted the canvas, redraw without posters
    if (!noPosters) { try { c.toDataURL(); } catch (_) { return drawIdCard(true); } }
    return c;
  }

  // ---------- custom colours & theme codes ----------
  const hex6 = (v) => (/^#?[0-9a-f]{6}$/i.test(v || '') ? '#' + String(v).replace('#', '').toLowerCase() : null);
  const mix = (a, b, t) => { const p = (s) => [1, 3, 5].map((i) => parseInt(s.slice(i, i + 2), 16)); const A = p(a), B = p(b); return '#' + A.map((v, i) => Math.round(v + (B[i] - v) * t).toString(16).padStart(2, '0')).join(''); };
  const defaultCustom = () => ({ a1: '#ffb15c', a: '#ff7a1a', a2: '#ff3d6e', bg: '#120c10' });
  function custom() { const c = { ...defaultCustom(), ...(S.custom || {}) }; for (const k of ['a1', 'a', 'a2', 'bg']) c[k] = hex6(c[k]) || defaultCustom()[k]; return c; }
  function palette() { return S.theme === 'custom' ? [custom().a1, custom().a, custom().a2] : PALETTES[S.theme] || PALETTES.crunchy; }
  function applyCustom() {
    if (!ui.root) return;
    const props = ['--bg', '--acc', '--acc1', '--acc2', '--soft', '--glow1', '--glow2', '--card', '--drawer', '--line', '--panel'];
    if (S.theme !== 'custom') { props.forEach((p) => ui.root.style.removeProperty(p)); return; }
    const c = custom(), set = (k, v) => ui.root.style.setProperty(k, v);
    set('--bg', c.bg); set('--acc', c.a); set('--acc1', c.a1); set('--acc2', c.a2);
    set('--soft', rgba(c.a, 0.16)); set('--glow1', rgba(c.a, 0.26)); set('--glow2', rgba(c.a2, 0.18));
    set('--card', mix(c.bg, '#ffffff', 0.035)); set('--drawer', mix(c.bg, '#000000', 0.15)); set('--line', rgba(c.a1, 0.13)); set('--panel', rgba(mix(c.bg, '#ffffff', 0.5), 0.045));
  }
  const themeCode = (c) => 'RDX-' + [c.a1, c.a, c.a2, c.bg].map((v) => v.slice(1).toUpperCase()).join('');
  function parseCode(t) {
    const m = String(t || '').replace(/\s/g, '').match(/RDX-?([0-9a-f]{24})/i); if (!m) return null;
    const v = m[1].match(/.{6}/g).map((s) => '#' + s.toLowerCase());
    return { a1: v[0], a: v[1], a2: v[2], bg: v[3] };
  }
  // pick lively colours out of your picture
  function coloursFromPicture() {
    if (!img.pic || profile.picTaint) return null;
    const c = document.createElement('canvas'); c.width = c.height = 48; const x = c.getContext('2d');
    try { x.drawImage(img.pic, 0, 0, 48, 48); } catch (_) { return null; }
    let d; try { d = x.getImageData(0, 0, 48, 48).data; } catch (_) { return null; }
    const bins = Array.from({ length: 18 }, () => ({ w: 0, r: 0, g: 0, b: 0 }));
    for (let i = 0; i < d.length; i += 4) {
      const r = d[i] / 255, g = d[i + 1] / 255, b = d[i + 2] / 255, mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, s = mx === mn ? 0 : (mx - mn) / (1 - Math.abs(2 * l - 1));
      if (s < 0.25 || l < 0.18 || l > 0.85) continue;
      let hh = 0; if (mx !== mn) hh = mx === r ? ((g - b) / (mx - mn)) % 6 : mx === g ? (b - r) / (mx - mn) + 2 : (r - g) / (mx - mn) + 4;
      const k = Math.floor((((hh * 60) + 360) % 360) / 20), wgt = s * (1 - Math.abs(l - 0.55));
      const B = bins[k]; B.w += wgt; B.r += d[i] * wgt; B.g += d[i + 1] * wgt; B.b += d[i + 2] * wgt;
    }
    const ranked = bins.map((B, i) => ({ ...B, i })).filter((B) => B.w > 0).sort((a, b) => b.w - a.w);
    if (!ranked.length) return null;
    const col = (B) => '#' + [B.r, B.g, B.b].map((v) => Math.round(v / B.w).toString(16).padStart(2, '0')).join('');
    const main = ranked[0], second = ranked.find((B) => Math.min(Math.abs(B.i - main.i), 18 - Math.abs(B.i - main.i)) >= 3) || ranked[1] || main;
    const a = col(main);
    return { a1: mix(a, '#ffffff', 0.35), a, a2: col(second), bg: mix(mix('#0b0b0f', a, 0.08), '#000000', 0.1) };
  }
  function customPanel(onChange) {
    const c = custom();
    const pick = (k, label) => { const i = h('input', { type: 'color', value: c[k], class: 'cx-color' }); i.addEventListener('input', () => { S.custom = { ...custom(), [k]: i.value }; S.theme = 'custom'; applyTheme(); code.value = themeCode(custom()); onChange && onChange(); }); return h('label', { class: 'cx-colf' }, i, h('span', {}, label)); };
    const code = h('input', { class: 'cx-input mono', readonly: '', value: themeCode(c) });
    const paste = h('input', { class: 'cx-input mono', placeholder: 'Paste a theme code – RDX-…' });
    const apply = (v) => { S.custom = v; S.theme = 'custom'; applyTheme(); onChange && onChange(true); };
    return h('div', { class: 'cx-custom' },
      h('div', { class: 'cx-cols' }, pick('a1', 'Highlight'), pick('a', 'Accent'), pick('a2', 'Second accent'), pick('bg', 'Background')),
      h('div', { class: 'cx-inline wrap' },
        h('button', { class: 'cx-btn xs', disabled: img.pic && !profile.picTaint ? null : '', title: img.pic ? '' : 'Upload a picture in your profile first', onclick: () => { const v = coloursFromPicture(); if (!v) return toast("Couldn't read colours from your picture", 'bad'); apply(v); toast('Colours taken from your picture', 'ok'); } }, '✦ From my picture'),
        h('button', { class: 'cx-btn xs ghost', onclick: () => apply(defaultCustom()) }, 'Reset')),
      h('div', { class: 'cx-flabel sm' }, 'Theme code – share it, or paste one'),
      h('div', { class: 'cx-coderow' }, code, h('button', { class: 'cx-btn xs', onclick: () => copyText(code.value).then(() => toast('Theme code copied', 'ok')) }, 'Copy')),
      h('div', { class: 'cx-coderow' }, paste, h('button', { class: 'cx-btn xs', onclick: () => { const v = parseCode(paste.value); if (!v) return toast("That isn't a Reaperdex theme code", 'bad'); apply(v); toast('Theme applied – press Save to keep it', 'ok'); } }, 'Apply')));
  }

  // ================================================================
  // 15. Safety: complete backups, snapshots, Crunchyroll retry queue
  // ================================================================
  // everything that's yours (not re-downloadable from Crunchyroll)
  function personalData() {
    return { settings: { ...S }, marks: state.marks, markAs: state.markAs || {}, showMarks: state.showMarks, hidden: state.hidden, meta: state.meta,
      external: state.external, merges: state.merges, lookOk: state.lookOk || {}, plan: state.plan || {}, lang: state.lang || {}, profile: { ...profile } };
  }
  // ---- strict checking of anything that comes from a FILE (backups, snapshots): only known fields, right types, sane sizes ----
  const BAD_KEY = /^(__proto__|constructor|prototype)$/;
  const isObj = (o) => !!o && typeof o === 'object' && !Array.isArray(o);
  const str = (v, max) => (typeof v === 'string' ? v.slice(0, max) : undefined);
  const num = (v) => (typeof v === 'number' && isFinite(v) ? v : undefined);
  const okDate = (v) => (typeof v === 'string' && v.length <= 40 && !isNaN(Date.parse(v)) ? v : undefined);
  function dict(o, check, max = 100000) {
    const out = {};
    if (!isObj(o)) return out;
    for (const k of Object.keys(o).slice(0, max)) {
      if (BAD_KEY.test(k) || k.length > 200) continue;
      const v = check(o[k]);
      if (v !== undefined) out[k] = v;
    }
    return out;
  }
  function cleanPersonal(d) {
    const meta = (m) => {
      if (!isObj(m)) return undefined;
      const o = {};
      if (Number.isInteger(m.r) && m.r >= 0 && m.r <= 10) o.r = m.r;
      if (typeof m.n === 'string') o.n = m.n.slice(0, 5000);
      if (typeof m.fav === 'boolean') o.fav = m.fav;
      if (Array.isArray(m.tags)) o.tags = m.tags.filter((t) => typeof t === 'string').map((t) => t.slice(0, 40)).slice(0, 30);
      return o;
    };
    const plan = (p) => (isObj(p) && typeof p.t === 'string' ? { t: p.t.slice(0, 300), img: /^https:\/\/(static|imgsrv)\.crunchyroll\.com\/[\w\-./,=:%]+$/i.test(p.img || '') ? p.img : '',
      g: Array.isArray(p.g) ? p.g.filter((x) => typeof x === 'string').map((x) => x.slice(0, 40)).slice(0, 10) : [], at: num(p.at) || Date.now() } : undefined);
    const ext = (x) => {
      if (!isObj(x) || typeof x.title !== 'string' || !(x.svc in SERVICES) || BAD_KEY.test(x.svc)) return null;
      const o = { id: /^[a-z0-9]{1,40}$/i.test(x.id || '') ? x.id : Math.random().toString(36).slice(2, 10), svc: x.svc, title: x.title.slice(0, 300),
        count: Math.max(0, Math.min(100000, Math.floor(num(x.count) || 0))), at: num(x.at) || Date.now(), movie: x.movie === true,
        eps: Array.isArray(x.eps) ? x.eps.slice(0, 20000).filter(isObj).map((e) => ({ date: okDate(e.date) || '', t: str(e.t, 300) || '' })).filter((e) => e.date) : [] };
      if (Number.isInteger(x.total) && x.total >= 0 && x.total <= 100000) o.total = x.total;
      if (['completed', 'watching', 'dropped'].includes(x.status)) o.status = x.status;
      if (okDate(x.date)) o.date = x.date;
      if (num(x.epMin) >= 1 && num(x.epMin) <= 600) o.epMin = x.epMin;
      return o;
    };
    return { settings: d.settings, profile: isObj(d.profile) ? d.profile : undefined,
      marks: dict(d.marks, num), markAs: dict(d.markAs, (v) => str(v, 200)), showMarks: dict(d.showMarks, num),
      hidden: dict(d.hidden, (v) => (typeof v === 'boolean' || num(v) !== undefined ? v : undefined)), meta: dict(d.meta, meta),
      merges: dict(d.merges, (v) => (typeof v === 'string' && !BAD_KEY.test(v) ? v.slice(0, 200) : undefined)), lookOk: dict(d.lookOk, (v) => (typeof v === 'boolean' || num(v) !== undefined ? v : undefined)),
      plan: dict(d.plan, plan, 5000), lang: dict(d.lang, (v) => (typeof v === 'string' && /^[a-z]{2,3}(-[A-Za-z0-9]{2,4})?$/.test(v) ? v : undefined)),
      external: Array.isArray(d.external) ? d.external.slice(0, 5000).map(ext).filter(Boolean) : [] };
  }
  async function applyPersonal(d, mode) {
    const replace = mode === 'replace';
    d = cleanPersonal(isObj(d) ? d : {});
    const put = (k, v) => { state[k] = replace ? { ...(v || {}) } : Object.assign(state[k] || {}, v || {}); };
    if (d.settings && typeof d.settings === 'object') {
      // settings from a file: only known settings, of the right type
      const base = { ...S }, ok = {};
      for (const [k, v] of Object.entries(d.settings)) if (!BAD_KEY.test(k) && (Object.prototype.hasOwnProperty.call(base, k) ? typeof v === typeof base[k] && (typeof v !== 'string' || v.length <= 200) : k === 'custom' && isObj(v))) ok[k] = v;
      if (ok.custom) ok.custom = Object.fromEntries(['a1', 'a', 'a2', 'bg'].map((k) => [k, /^#[0-9a-f]{6}$/i.test(ok.custom[k] || '') ? ok.custom[k] : null]).filter((e) => e[1]));
      Object.assign(S, ok);
    }
    put('marks', d.marks); put('markAs', d.markAs); put('showMarks', d.showMarks); put('hidden', d.hidden); put('meta', d.meta);
    put('merges', d.merges); put('lookOk', d.lookOk); put('plan', d.plan); put('lang', d.lang);
    if (replace) state.external = [...(d.external || [])];
    else for (const x of d.external || []) if (!state.external.some((y) => y.id === x.id)) state.external.push(x);
    if (d.profile) { if (replace) Object.assign(profile, { pic: null, picSrc: null, picTaint: false, banner: null, name: '', title: 'auto', frame: 'auto', top: [], showOnCR: false });
      for (const k of ['pic', 'picSrc', 'picTaint', 'banner', 'name', 'title', 'frame', 'top', 'showOnCR', 'crUrl']) if (k in d.profile) profile[k] = d.profile[k];
      await saveProfile(); }
    state.lookIds = null;
    await store.set('lang3', state.lang); await savePrefs(); applyTheme(); refresh();
  }

  async function snapshot(label, force) {
    if (!state.prefsLoaded) return;
    const snaps = (await store.get('snaps3')) || [];
    const last = snaps[snaps.length - 1];
    if (!force && last && Date.now() - last.at < 20 * 3600000) return;
    snaps.push({ at: Date.now(), label, v: VERSION, d: JSON.parse(JSON.stringify(personalData())) });
    while (snaps.length > 6) snaps.shift();
    await store.set('snaps3', snaps);
  }
  function snapshotList(closeSettings) {
    const box = h('div', { class: 'cx-snaps' }, h('div', { class: 'cx-hint' }, 'Loading…'));
    store.get('snaps3').then((snaps) => {
      snaps = (snaps || []).slice().reverse();
      if (!snaps.length) return box.replaceChildren(h('div', { class: 'cx-hint' }, 'Reaperdex saves a copy of your marks, ratings, notes, profile and settings once a day and before big changes. Nothing saved yet.'));
      box.replaceChildren(h('div', { class: 'cx-hint' }, 'Copies of your marks, ratings, notes, profile and settings – your Crunchyroll history isn’t touched.'),
        ...snaps.map((sn) => h('div', { class: 'cx-snap' },
          h('div', {}, h('b', {}, new Date(sn.at).toLocaleString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })), h('span', {}, ` · ${sn.label}${String(sn.label).includes(sn.v) ? '' : ` · v${sn.v}`}`)),
          h('button', { class: 'cx-btn xs', onclick: async () => {
            if (!(await confirmModal('Restore this snapshot?', 'Your marks, ratings, notes, profile and settings go back to how they were then. Your current state is saved as a snapshot first, so you can undo this.', 'Restore'))) return;
            await snapshot('Before restoring a snapshot', true);
            await applyPersonal(sn.d, 'replace');
            if (closeSettings) closeSettings();
            toast('Snapshot restored', 'ok');
          } }, 'Restore'))));
    });
    return box;
  }

  // updates Crunchyroll refused (offline, hiccup…) are retried automatically on the next syncs
  async function enqueue(kind, id, d) {
    state.queue = state.queue || [];
    if (!state.queue.some((q) => q.kind === kind && q.id === id)) state.queue.push({ kind, id, d: d || 0, tries: 0, at: Date.now() });
    await store.set('queue3', state.queue); setSyncLabel();
  }
  async function retryQueue() {
    if (!state.queue || !state.queue.length) return;
    const keep = [];
    for (const q of state.queue) {
      try { if (q.kind === 'mark') await crMarkWatched(q.id, q.d); else await crUnwatch(q.id); }
      catch (_) { if (++q.tries < 6) keep.push(q); }
      await sleep(200);
    }
    const done = state.queue.length - keep.length;
    state.queue = keep; await store.set('queue3', keep); setSyncLabel();
    if (done) toast(`✓ ${plural(done, 'waiting update')} sent to Crunchyroll`, 'ok');
  }

  // big libraries: draw cards in batches as you scroll instead of all at once
  let gridObs = null;
  function fillGrid(list, make, start) {
    const BATCH = 80, end = Math.min(list.length, start + BATCH);
    const frag = document.createDocumentFragment();
    for (let i = start; i < end; i++) frag.append(make(list[i]));
    const old = ui.grid.querySelector('.cx-more-sentinel'); if (old) old.remove();
    ui.grid.append(frag);
    if (end < list.length) {
      const s = h('div', { class: 'cx-more-sentinel' }, h('div', { class: 'cx-spin' }));
      ui.grid.append(s);
      if (gridObs) gridObs.disconnect();
      gridObs = new IntersectionObserver((en) => { if (en.some((e) => e.isIntersecting)) { gridObs.disconnect(); fillGrid(list, make, end); } }, { root: ui.overlay, rootMargin: '900px' });
      gridObs.observe(s);
    }
  }

  // ================================================================
  // 18. Styles + start
  // ================================================================
  const CSS = `
  #cx-root{--bg:#07070b;--panel:rgba(255,255,255,.045);--line:rgba(255,255,255,.08);--txt:#f2f2f5;--mut:#9b9ba8;--dim:#6b6b78;
    --acc:#ff7a1a;--acc1:#ff9a3c;--acc2:#ff3d6e;--grad:linear-gradient(135deg,var(--acc1),var(--acc) 45%,var(--acc2));--glow1:rgba(255,110,30,.22);--glow2:rgba(255,61,110,.14);--soft:rgba(255,122,26,.16);--card:#100d10;--drawer:#0d0a0d;--radius:18px;
    font-family:Lato,"Inter","Segoe UI",system-ui,sans-serif;color:var(--txt);-webkit-font-smoothing:antialiased;line-height:1.35}
  #cx-root *{box-sizing:border-box}
  #cx-root button{font-family:inherit}
  .cx-launch{position:fixed;right:22px;bottom:22px;z-index:2147483000;display:flex;align-items:center;gap:10px;height:48px;padding:0 20px 0 7px;border:0;border-radius:26px;
    background:rgba(20,20,26,.82);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);color:#fff;font-weight:800;font-size:14px;cursor:pointer;
    box-shadow:0 10px 30px rgba(0,0,0,.55),inset 0 0 0 1px rgba(255,255,255,.1);transition:transform .2s,box-shadow .2s}
  .cx-launch:hover{transform:translateY(-2px);box-shadow:0 14px 36px rgba(255,106,26,.35),inset 0 0 0 1px rgba(255,140,60,.5)}
  .cx-launch-ico,.cx-logo{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--grad);box-shadow:0 4px 14px rgba(255,90,40,.5);flex:none}
  .cx-launch-ico span,.cx-logo span{width:0;height:0;border-left:11px solid #fff;border-top:7px solid transparent;border-bottom:7px solid transparent;margin-left:3px}
  .cx-launch-badge{position:absolute;top:-6px;right:-4px;padding:2px 7px;border-radius:10px;background:#2ee07c;color:#04140a;font-size:11px;font-weight:900}

  .cx-overlay{position:fixed;inset:0;z-index:2147483001;background:var(--bg);overflow:auto;opacity:0;visibility:hidden;transition:opacity .25s,visibility 0s .25s;scrollbar-width:thin;scrollbar-color:#333 transparent}
  .cx-overlay.open{opacity:1;visibility:visible;transition:opacity .25s}
  .cx-bgfx{position:fixed;inset:0;pointer-events:none;background:
    radial-gradient(900px 520px at 85% -10%,var(--glow1),transparent 60%),
    radial-gradient(700px 500px at -5% 110%,var(--glow2),transparent 60%),
    radial-gradient(600px 400px at 50% 40%,rgba(130,90,255,.06),transparent 70%)}
  .cx-top{position:sticky;top:0;z-index:5;display:flex;justify-content:space-between;align-items:center;gap:16px;height:70px;padding:0 40px;
    background:rgba(7,7,11,.72);backdrop-filter:blur(18px) saturate(1.4);-webkit-backdrop-filter:blur(18px) saturate(1.4);border-bottom:1px solid var(--line)}
  .cx-brand{display:flex;align-items:center;gap:12px}
  .cx-title{font-size:20px;font-weight:900;letter-spacing:-.01em}
  .cx-by{font-size:11px;color:var(--mut);font-weight:700;letter-spacing:.08em;text-transform:uppercase}
  .cx-actions{display:flex;gap:10px;align-items:center}
  .cx-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;height:38px;padding:0 16px;border:0;border-radius:11px;background:var(--panel);color:var(--txt);
    font-weight:700;font-size:13.5px;cursor:pointer;text-decoration:none;box-shadow:inset 0 0 0 1px var(--line);transition:background .15s,transform .1s,filter .15s;white-space:nowrap}
  .cx-btn:hover{background:rgba(255,255,255,.09)}
  .cx-btn:active{transform:scale(.97)}
  .cx-btn.primary{background:var(--grad);color:#fff;box-shadow:0 6px 18px rgba(255,90,40,.35)}
  .cx-btn.primary:hover{filter:brightness(1.08)}
  .cx-btn.ghost{background:transparent}
  .cx-btn.icon{width:38px;padding:0}
  .cx-btn.xs{height:28px;padding:0 11px;font-size:12px;border-radius:8px;flex:none}
  .cx-sync{display:flex;align-items:center;gap:8px;height:38px;padding:0 14px;border:0;border-radius:11px;background:transparent;color:var(--mut);font-size:12.5px;font-weight:700;cursor:pointer}
  .cx-sync:hover{color:#fff;background:var(--panel)}
  .cx-sync-ico{font-style:normal;font-size:15px;display:inline-block}
  .cx-sync.busy .cx-sync-ico{animation:cx-spin 1s linear infinite;color:var(--acc)}
  .cx-export{position:relative}
  .cx-menu{position:absolute;left:0;top:46px;width:310px;padding:8px;border-radius:16px;background:rgba(22,22,30,.97);backdrop-filter:blur(20px);
    box-shadow:0 24px 60px rgba(0,0,0,.6),inset 0 0 0 1px var(--line);opacity:0;visibility:hidden;transform:translateY(-6px);transition:.18s}
  .cx-menu.open{opacity:1;visibility:visible;transform:none}
  .cx-mi{display:flex;flex-direction:column;align-items:flex-start;gap:2px;width:100%;padding:9px 12px;border:0;border-radius:10px;background:none;color:var(--txt);text-align:left;cursor:pointer}
  .cx-mi:hover{background:rgba(255,255,255,.07)}
  .cx-mi b{font-size:13.5px}
  .cx-mi span{font-size:11.5px;color:var(--mut)}
  .cx-mi-sep{height:1px;background:var(--line);margin:6px 4px}

  .cx-main{position:relative;max-width:1500px;margin:0 auto;padding:30px 40px 80px}
  .cx-hero{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:22px;margin-bottom:22px}
  .cx-big{position:relative;overflow:hidden;padding:30px 34px;border-radius:26px;background:linear-gradient(145deg,var(--soft),rgba(255,255,255,.03) 60%,rgba(255,255,255,.02));
    box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--acc) 30%,transparent)}
  .cx-big::after{content:"";position:absolute;right:-80px;top:-80px;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,color-mix(in srgb,var(--acc) 40%,transparent),transparent 70%);pointer-events:none}
  .cx-eyebrow{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:12px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:color-mix(in srgb,var(--acc1) 70%,#fff)}
  .cx-days{display:flex;align-items:flex-end;gap:14px;margin:6px 0 8px}
  .cx-days b{font-size:108px;line-height:.9;font-weight:900;letter-spacing:-.04em;background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent}
  .cx-days span{display:flex;flex-direction:column;padding-bottom:10px}
  .cx-days em{font-style:normal;font-size:30px;font-weight:900;line-height:1}
  .cx-days small{font-size:15px;color:var(--mut);font-weight:700}
  .cx-sub{font-size:14px;color:#d6d6de;font-weight:600}
  .cx-first{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:18px;font-size:13px;color:#cfcfd8}
  .cx-first-tag{padding:4px 10px;border-radius:20px;background:rgba(255,255,255,.08);font-size:11px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#ffcfa8}
  .cx-dim{color:var(--dim)}
  .cx-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
  .cx-stat{--c:#fff;display:flex;flex-direction:column;justify-content:center;gap:4px;padding:16px 18px;border:0;border-radius:18px;background:var(--panel);color:var(--txt);text-align:left;
    box-shadow:inset 0 0 0 1px var(--line);transition:.18s;cursor:default}
  .cx-stat.click{cursor:pointer}
  .cx-stat.click:hover{background:rgba(255,255,255,.07);transform:translateY(-1px)}
  .cx-stat.on{box-shadow:inset 0 0 0 1.5px var(--c);background:color-mix(in srgb,var(--c) 12%,transparent)}
  .cx-stat b{font-size:32px;font-weight:900;letter-spacing:-.02em;color:var(--c)}
  .cx-stat span{font-size:12.5px;color:var(--mut);font-weight:700}

  .cx-awards{margin-bottom:26px;padding:20px 22px;border-radius:22px;background:var(--panel);box-shadow:inset 0 0 0 1px var(--line)}
  .cx-sec-h{display:flex;align-items:baseline;gap:12px;margin-bottom:14px}
  .cx-sec-h h2{margin:0;font-size:17px;font-weight:900;color:#fff}
  .cx-sec-h span{font-size:12.5px;color:var(--mut)}
  .cx-medals{display:flex;gap:12px;overflow-x:auto;padding-bottom:6px;scrollbar-width:thin}
  .cx-medal{flex:none;display:flex;align-items:center;gap:12px;padding:10px 18px 10px 10px;border-radius:40px;background:rgba(255,200,120,.06);box-shadow:inset 0 0 0 1px rgba(255,200,120,.18)}
  .cx-medal-disc{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:none;width:62px;height:62px;border-radius:50%;
    background:radial-gradient(circle at 35% 30%,#fff3cf,#ffc35a 40%,#e07a12 85%);box-shadow:0 6px 18px rgba(255,150,40,.35),inset 0 -3px 6px rgba(120,50,0,.35),inset 0 0 0 3px rgba(255,240,200,.5)}
  .cx-medal-disc b{font-size:16px;font-weight:900;color:#4a2100;line-height:1}
  .cx-medal-disc span{font-size:8.5px;font-weight:900;letter-spacing:.08em;color:#7a3a00;margin-top:2px}
  .cx-medal-txt{display:flex;flex-direction:column;max-width:190px}
  .cx-medal-txt b{font-size:14px;color:#fff}
  .cx-medal-txt span{font-size:12px;color:var(--mut);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .cx-medal.locked{background:rgba(255,255,255,.02);box-shadow:inset 0 0 0 1px var(--line);opacity:.6}
  .cx-medal.locked .cx-medal-disc{background:radial-gradient(circle at 35% 30%,#4a4a52,#22222a);box-shadow:inset 0 0 0 2px rgba(255,255,255,.12)}
  .cx-medal.locked .cx-medal-disc b,.cx-medal.locked .cx-medal-disc span{color:#9a9aa4}
  .cx-badges{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:10px;margin-top:14px}
  .cx-badge{display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:14px;background:linear-gradient(135deg,rgba(180,144,255,.14),rgba(255,255,255,.02));box-shadow:inset 0 0 0 1px rgba(180,144,255,.25)}
  .cx-badge i{font-style:normal;display:grid;place-items:center;flex:none;min-width:38px;height:38px;padding:0 6px;border-radius:11px;background:rgba(180,144,255,.22);color:#efe6ff;font-size:12px;letter-spacing:-1px}
  .cx-badge b{display:block;font-size:13px;color:#fff}
  .cx-badge span{font-size:11.5px;color:#cbbcff}
  .cx-badge.locked{background:rgba(255,255,255,.025);box-shadow:inset 0 0 0 1px var(--line)}
  .cx-badge.locked i{background:rgba(255,255,255,.06);color:var(--dim);font-size:16px}
  .cx-badge.locked b{color:#c8c8d0}
  .cx-bprog{display:block;width:120px;height:4px;margin-top:6px;border-radius:3px;background:rgba(255,255,255,.08);overflow:hidden}
  .cx-bprog em{display:block;height:100%;background:var(--grad)}

  .cx-bar{position:sticky;top:70px;z-index:4;display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin:0 -12px 18px;padding:12px;border-radius:0 0 18px 18px;
    background:rgba(7,7,11,.8);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px)}
  .cx-chips{display:flex;gap:8px;flex-wrap:wrap}
  .cx-chip{--c:#fff;display:flex;align-items:center;gap:8px;height:36px;padding:0 14px;border:0;border-radius:20px;background:var(--panel);color:#d8d8e0;font-weight:700;font-size:13px;cursor:pointer;box-shadow:inset 0 0 0 1px var(--line);transition:.15s}
  .cx-chip i{width:8px;height:8px;border-radius:50%;background:var(--c);box-shadow:0 0 10px var(--c)}
  .cx-chip em{font-style:normal;font-size:11.5px;padding:2px 8px;border-radius:10px;background:rgba(255,255,255,.08);color:#bbb}
  .cx-chip:hover{background:rgba(255,255,255,.08)}
  .cx-chip.on{background:color-mix(in srgb,var(--c) 18%,transparent);color:#fff;box-shadow:inset 0 0 0 1.5px var(--c)}
  .cx-tools{display:flex;gap:8px}
  .cx-search,.cx-select{height:38px;padding:0 14px;border:0;border-radius:11px;background:var(--panel);color:var(--txt);font-family:inherit;font-size:13.5px;outline:none;box-shadow:inset 0 0 0 1px var(--line)}
  .cx-search{width:240px}
  .cx-search::placeholder{color:var(--dim)}
  .cx-search:focus,.cx-select:focus{box-shadow:inset 0 0 0 1.5px var(--acc)}
  .cx-select option{background:#16161c}

  .cx-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:18px}
  .cx-card{--c:#ff8a1f;position:relative;display:flex;flex-direction:column;border-radius:var(--radius);overflow:hidden;background:var(--card);cursor:pointer;
    box-shadow:inset 0 0 0 1px var(--line);transition:transform .22s cubic-bezier(.2,1,.3,1),box-shadow .22s}
  .cx-card:hover{transform:translateY(-4px);box-shadow:0 18px 40px -12px color-mix(in srgb,var(--c) 55%,transparent),inset 0 0 0 1px color-mix(in srgb,var(--c) 60%,transparent)}
  .cx-art{position:relative;aspect-ratio:16/9;background:linear-gradient(135deg,#1d1d26,#121218) center/cover no-repeat}
  .cx-shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.35) 0%,rgba(0,0,0,0) 30%,color-mix(in srgb,var(--card) 55%,transparent) 62%,var(--card) 100%)}
  .cx-status{position:absolute;left:12px;top:12px;display:inline-flex;align-items:center;gap:6px;padding:5px 10px;border-radius:20px;background:rgba(10,10,14,.72);backdrop-filter:blur(8px);
    font-size:10.5px;font-weight:900;letter-spacing:.07em;text-transform:uppercase;color:#fff;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--c) 55%,transparent)}
  .cx-status i{width:7px;height:7px;border-radius:50%;background:var(--c);box-shadow:0 0 8px var(--c)}
  .cx-movie{position:absolute;right:12px;top:12px;padding:5px 9px;border-radius:8px;background:rgba(10,10,14,.72);font-size:10.5px;font-weight:900;letter-spacing:.08em}
  .cx-paused{position:absolute;right:12px;top:12px;padding:5px 9px;border-radius:8px;background:rgba(10,10,14,.78);font-size:11px;font-weight:800;color:#ffd2ad}
  .cx-art-title{position:absolute;left:14px;right:14px;bottom:14px;font-size:17px;font-weight:900;line-height:1.2;letter-spacing:-.01em;color:#fff;text-shadow:0 2px 12px rgba(0,0,0,.8);
    display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
  .cx-bar-thin{position:absolute;left:0;right:0;bottom:0;height:3px;background:rgba(255,255,255,.08)}
  .cx-bar-thin i{display:block;height:100%;background:var(--c);box-shadow:0 0 12px var(--c)}
  .cx-info{display:flex;flex-direction:column;gap:9px;padding:12px 14px 14px;flex:1}
  .cx-meta{display:flex;align-items:center;gap:10px;font-size:12.5px;color:var(--mut);font-weight:600}
  .cx-meta b{color:#fff;font-size:14px}
  .cx-pct{margin-left:auto;color:var(--c);font-weight:900}
  .cx-pills{display:flex;flex-wrap:wrap;gap:5px}
  .cx-pill{display:inline-flex;gap:5px;padding:3px 8px;border-radius:7px;background:rgba(255,255,255,.05);font-size:11px;font-weight:800;color:var(--dim)}
  .cx-pill em{font-style:normal}
  .cx-pill.ok{background:rgba(180,144,255,.15);color:#d4c4ff}
  .cx-pill.go{background:rgba(255,138,31,.16);color:#ffc28f}
  .cx-pill.new{background:rgba(46,224,124,.15);color:#8ef0b6}
  .cx-note{font-size:12.5px;font-weight:700;color:#cfcfd8}
  .cx-note.new{color:#5cf09a}
  .cx-note.warn{color:#ffc857}
  .cx-foot{display:flex;align-items:center;justify-content:space-between;margin-top:auto;min-height:26px;font-size:12px;color:var(--dim);font-weight:600}
  .cx-quick{height:26px;padding:0 10px;border:0;border-radius:8px;background:rgba(255,255,255,.06);color:#ddd;font-size:11.5px;font-weight:800;cursor:pointer;opacity:0;transition:.15s}
  .cx-card:hover .cx-quick,.cx-card.dropped .cx-quick{opacity:1}
  .cx-quick:hover{background:var(--grad);color:#fff}
  .cx-empty{grid-column:1/-1;display:flex;flex-direction:column;align-items:center;gap:16px;padding:70px 20px;color:var(--mut);text-align:center;font-weight:600}
  .cx-empty.sm{padding:30px}
  .cx-spin{width:40px;height:40px;border-radius:50%;border:3px solid rgba(255,255,255,.1);border-top-color:var(--acc);animation:cx-spin .8s linear infinite}
  @keyframes cx-spin{to{transform:rotate(360deg)}}

  .cx-drawer-wrap{position:fixed;inset:0;z-index:2147483002;visibility:hidden;transition:visibility 0s .32s}
  .cx-drawer-wrap.open{visibility:visible;transition:none}
  .cx-drawer-bg{position:absolute;inset:0;background:rgba(0,0,0,.55);backdrop-filter:blur(4px);opacity:0;transition:.25s}
  .cx-drawer-wrap.open .cx-drawer-bg{opacity:1}
  .cx-drawer{position:absolute;top:0;right:0;bottom:0;width:min(620px,100vw);overflow:auto;background:var(--drawer);box-shadow:-30px 0 80px rgba(0,0,0,.6),inset 1px 0 0 var(--line);
    transform:translateX(100%);transition:transform .32s cubic-bezier(.2,1,.3,1);scrollbar-width:thin;scrollbar-color:#333 transparent}
  .cx-drawer-wrap.open .cx-drawer{transform:none}
  .cx-dhero{position:relative;height:260px;background:linear-gradient(135deg,#1d1d26,#121218) center/cover no-repeat}
  .cx-dhero .cx-shade{background:linear-gradient(180deg,rgba(0,0,0,.2),color-mix(in srgb,var(--drawer) 60%,transparent) 55%,var(--drawer))}
  .cx-dclose{position:absolute;right:16px;top:16px;background:rgba(10,10,14,.6);backdrop-filter:blur(8px)}
  .cx-dhead{position:absolute;left:28px;right:28px;bottom:18px}
  .cx-dhead .cx-status{position:static}
  .cx-dhead h2{margin:10px 0 6px;font-size:30px;font-weight:900;line-height:1.1;letter-spacing:-.02em;color:#fff;text-shadow:0 2px 20px rgba(0,0,0,.7)}
  .cx-dmeta{font-size:13.5px;color:#d9d9e0;font-weight:700}
  .cx-dbody{padding:18px 28px 40px;display:flex;flex-direction:column;gap:16px}
  .cx-dact{display:flex;gap:10px;flex-wrap:wrap}
  .cx-dfacts{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px}
  .cx-dfacts div{padding:12px 14px;border-radius:14px;background:var(--panel);box-shadow:inset 0 0 0 1px var(--line)}
  .cx-dfacts span{display:block;font-size:10.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--dim);margin-bottom:2px}
  .cx-dfacts b{font-size:13.5px;color:#fff}
  .cx-callout{padding:12px 16px;border-radius:14px;background:rgba(46,224,124,.1);box-shadow:inset 0 0 0 1px rgba(46,224,124,.3);color:#8ef0b6;font-weight:800;font-size:13.5px}
  .cx-seasons{display:flex;flex-direction:column;gap:10px}
  .cx-season{border-radius:16px;background:var(--panel);box-shadow:inset 0 0 0 1px var(--line);overflow:hidden}
  .cx-season.ok{box-shadow:inset 0 0 0 1px rgba(180,144,255,.28)}
  .cx-season.go{box-shadow:inset 0 0 0 1px rgba(255,138,31,.3)}
  .cx-season summary{display:flex;align-items:center;gap:12px;padding:12px 14px;cursor:pointer;list-style:none}
  .cx-season summary::-webkit-details-marker{display:none}
  .cx-season summary:hover{background:rgba(255,255,255,.03)}
  .cx-sn{display:grid;place-items:center;flex:none;width:38px;height:38px;border-radius:11px;background:rgba(255,255,255,.06);font-size:13px;font-weight:900;color:var(--mut)}
  .cx-season.ok .cx-sn{background:rgba(180,144,255,.2);color:#e0d4ff}
  .cx-season.go .cx-sn{background:rgba(255,138,31,.2);color:#ffc28f}
  .cx-st{flex:1;min-width:0;display:flex;flex-direction:column}
  .cx-st b{font-size:14px;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .cx-st span{font-size:12px;color:var(--mut);font-weight:600}
  .cx-sbar{flex:none;width:64px;height:5px;border-radius:3px;background:rgba(255,255,255,.08);overflow:hidden}
  .cx-sbar i{display:block;height:100%;background:var(--grad)}
  .cx-season.ok .cx-sbar i{background:#b490ff}
  .cx-chev{flex:none;font-size:20px;color:var(--dim);transition:transform .2s}
  .cx-season[open] .cx-chev{transform:rotate(90deg)}
  .cx-eps{display:flex;flex-direction:column;padding:2px 8px 10px}
  .cx-ep-acts{display:flex;gap:4px;justify-content:flex-end}
  .cx-ep{display:grid;grid-template-columns:46px minmax(0,1fr) auto auto;align-items:center;gap:10px;min-height:38px;padding:4px 8px;border-radius:10px}
  .cx-ep:hover{background:rgba(255,255,255,.035)}
  .cx-ep-n{font-size:12px;font-weight:900;color:var(--dim);font-variant-numeric:tabular-nums}
  .cx-ep-t{font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#e4e4ea}
  .cx-ep-s{font-size:11.5px;font-weight:800;white-space:nowrap}
  .cx-ep.done .cx-ep-s{color:#8ef0b6}
  .cx-ep.credit .cx-ep-s{color:#9fd8ff}
  .cx-ep.marked .cx-ep-s{color:#d4c4ff}
  .cx-ep.partial .cx-ep-s{color:#ffc857}
  .cx-ep.none .cx-ep-s{color:#ff8197}
  .cx-ep.none .cx-ep-t,.cx-ep.partial .cx-ep-t{color:#fff}
  .cx-ep.done .cx-ep-t,.cx-ep.credit .cx-ep-t{color:#a9a9b4}
  .cx-ep-btn{display:grid;place-items:center;width:30px;height:30px;border:0;border-radius:9px;background:rgba(255,255,255,.06);color:#fff;font-weight:900;cursor:pointer;transition:.15s}
  .cx-ep-btn:hover{background:var(--grad)}
  .cx-ep-btn.undo{color:var(--mut)}
  .cx-ep-btn.undo:hover{background:rgba(255,255,255,.12);color:#fff}
  .cx-ep-btn.ghost{background:none;cursor:default}

  .cx-modal{position:fixed;inset:0;z-index:2147483004;display:grid;place-items:center;opacity:0;transition:opacity .2s}
  .cx-modal.in{opacity:1}
  .cx-modal-bg{position:absolute;inset:0;background:rgba(0,0,0,.6);backdrop-filter:blur(6px)}
  .cx-modal-box{position:relative;width:min(440px,92vw);padding:26px;border-radius:22px;background:#14141b;box-shadow:0 30px 80px rgba(0,0,0,.7),inset 0 0 0 1px var(--line);transform:scale(.96);transition:transform .2s}
  .cx-modal.in .cx-modal-box{transform:none}
  .cx-modal-box.share{width:min(560px,94vw)}
  .cx-modal-box h3{margin:0 0 8px;font-size:20px;font-weight:900;color:#fff}
  .cx-modal-box p{margin:0 0 18px;color:var(--mut);font-size:14px;line-height:1.5}
  .cx-modal-act{display:flex;justify-content:flex-end;gap:10px;flex-wrap:wrap}
  .cx-share-img{display:block;width:100%;max-height:60vh;object-fit:contain;border-radius:14px;margin-bottom:18px;box-shadow:0 10px 30px rgba(0,0,0,.5)}

  .cx-toasts{position:fixed;left:50%;bottom:28px;transform:translateX(-50%);z-index:2147483005;display:flex;flex-direction:column-reverse;gap:8px;align-items:center;pointer-events:none}
  .cx-toast{display:flex;align-items:center;gap:10px;padding:12px 18px 12px 14px;border-radius:14px;background:rgba(22,22,30,.95);backdrop-filter:blur(14px);font-size:13.5px;font-weight:700;color:#fff;
    box-shadow:0 14px 40px rgba(0,0,0,.6),inset 0 0 0 1px var(--line);opacity:0;transform:translateY(12px);transition:.3s cubic-bezier(.2,1,.3,1)}
  .cx-toast.in{opacity:1;transform:none}
  .cx-toast i{width:9px;height:9px;border-radius:50%;background:var(--acc);box-shadow:0 0 10px var(--acc)}
  .cx-toast.ok i{background:#2ee07c;box-shadow:0 0 10px #2ee07c}
  .cx-toast.bad i{background:#ff5470;box-shadow:0 0 10px #ff5470}
  @media (max-width:1000px){.cx-hero{grid-template-columns:1fr}.cx-main{padding:20px}.cx-top{padding:0 20px}.cx-days b{font-size:80px}.cx-sync span{display:none}}
  
  .cx-tabs{display:flex;gap:4px;padding:4px;border-radius:13px;background:var(--panel);box-shadow:inset 0 0 0 1px var(--line)}
  .cx-tab{height:32px;padding:0 18px;border:0;border-radius:9px;background:none;color:var(--mut);font-weight:800;font-size:13px;cursor:pointer;transition:.15s}
  .cx-tab:hover{color:#fff}
  .cx-tab.on{background:rgba(255,255,255,.1);color:#fff;box-shadow:0 2px 10px rgba(0,0,0,.3)}
  .cx-dd{position:relative}
  .cx-menu.right{left:auto;right:0}
  .cx-btn.on{box-shadow:inset 0 0 0 1.5px var(--acc)}
  .cx-btn[disabled]{opacity:.4;pointer-events:none}
  .cx-trait{padding:3px 9px;border-radius:20px;background:rgba(255,255,255,.08);color:#fff;letter-spacing:.04em;font-size:10.5px}
  .cx-bigrow{display:flex;align-items:center;justify-content:space-between;gap:20px}
  .cx-goal{display:flex;align-items:center;gap:14px;padding:10px 16px 10px 10px;border:0;border-radius:20px;background:rgba(0,0,0,.25);color:#fff;cursor:pointer;text-align:left;box-shadow:inset 0 0 0 1px var(--line)}
  .cx-goal:hover{background:rgba(0,0,0,.35)}
  .cx-goal div{display:flex;flex-direction:column}
  .cx-goal b{font-size:22px;font-weight:900}
  .cx-goal span{font-size:12.5px;font-weight:700;color:#ddd}
  .cx-goal small{font-size:11px;color:var(--mut);font-weight:700}
  .cx-goal.empty{flex-direction:column;gap:2px;padding:16px 20px;border:1px dashed rgba(255,255,255,.18);background:none}
  .cx-goal.empty b{font-size:20px;color:var(--mut)}
  .cx-ring{flex:none}
  .cx-svcs{display:inline-flex;gap:6px;margin-left:6px}
  .cx-svc{display:inline-flex;align-items:center;padding:2px 7px;border-radius:6px;background:color-mix(in srgb,var(--s) 22%,rgba(0,0,0,.6));color:#fff;font-size:10px;font-weight:900;letter-spacing:.05em;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--s) 60%,transparent)}
  .cx-svcrow{display:flex;gap:5px;margin-top:6px}
  .cx-sec{margin-bottom:22px}
  .cx-row{display:flex;gap:14px;overflow-x:auto;padding:2px 2px 10px;scroll-snap-type:x mandatory;scrollbar-width:thin;scrollbar-color:#333 transparent}
  .cx-cw{--c:#ff8a1f;flex:none;width:300px;border-radius:var(--radius);overflow:hidden;background:var(--card);cursor:pointer;scroll-snap-align:start;box-shadow:inset 0 0 0 1px var(--line);transition:transform .2s,box-shadow .2s}
  .cx-cw:hover{transform:translateY(-3px);box-shadow:0 16px 36px -14px color-mix(in srgb,var(--c) 60%,transparent),inset 0 0 0 1px color-mix(in srgb,var(--c) 55%,transparent)}
  .cx-cw-art{position:relative;aspect-ratio:16/8;background:linear-gradient(135deg,#1d1d26,#121218) center/cover no-repeat}
  .cx-cw-t{position:absolute;left:14px;right:14px;bottom:12px;font-size:16px;font-weight:900;color:#fff;text-shadow:0 2px 12px rgba(0,0,0,.8);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .cx-cw-b{display:flex;align-items:center;gap:10px;padding:10px 12px 12px 14px}
  .cx-cw-txt{flex:1;min-width:0}
  .cx-cw-next{font-size:12.5px;font-weight:800;color:#e8e8ee;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .cx-cw-sub{font-size:11.5px;color:var(--mut);font-weight:600}
  .cx-play{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:50%;background:var(--grad);box-shadow:0 6px 16px color-mix(in srgb,var(--acc) 45%,transparent);transition:transform .15s}
  .cx-play:hover{transform:scale(1.08)}
  .cx-play span{width:0;height:0;border-left:12px solid #fff;border-top:8px solid transparent;border-bottom:8px solid transparent;margin-left:4px}
  .cx-fresh{position:absolute;right:12px;top:12px;padding:4px 9px;border-radius:8px;background:#2ee07c;color:#04140a;font-size:10.5px;font-weight:900;letter-spacing:.05em;box-shadow:0 0 14px rgba(46,224,124,.6)}
  .cx-fresh.inline{position:static;margin-left:8px;padding:2px 6px}
  .cx-card .cx-fresh{right:48px}
  .cx-heart{position:absolute;right:10px;top:10px;display:grid;place-items:center;width:32px;height:32px;border:0;border-radius:50%;background:rgba(10,10,14,.6);backdrop-filter:blur(8px);color:#fff;font-size:16px;cursor:pointer;opacity:0;transition:.15s}
  .cx-card:hover .cx-heart,.cx-heart.on{opacity:1}
  .cx-heart.on{color:#ff4f8b;text-shadow:0 0 10px rgba(255,79,139,.7)}
  .cx-heart.big{right:64px;top:16px;width:38px;height:38px;opacity:1}
  .cx-card .cx-paused{top:auto;bottom:50px;right:12px}
  .cx-medal{border:0;color:inherit;cursor:pointer;font-family:inherit;text-align:left;transition:.15s}
  button.cx-medal:hover{background:rgba(255,200,120,.12)}
  .cx-medal.on{box-shadow:inset 0 0 0 2px #ffc35a;background:rgba(255,200,120,.14)}
  .cx-awards{margin-bottom:22px}
  .cx-bar{flex-wrap:wrap}
  .cx-tools{flex-wrap:wrap}
  .cx-rate{color:#ffd36b;font-weight:900;margin-left:auto}
  .cx-tagrow{display:flex;flex-wrap:wrap;gap:5px;align-items:center}
  .cx-tag{display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:7px;background:color-mix(in srgb,var(--acc) 16%,transparent);color:color-mix(in srgb,var(--acc1) 60%,#fff);font-size:11px;font-weight:800;border:0;font-family:inherit}
  .cx-tag button{border:0;background:none;color:inherit;cursor:pointer;padding:0 0 0 2px;font-size:10px;opacity:.7}
  .cx-tag.sugg{background:rgba(255,255,255,.05);color:var(--mut);cursor:pointer}
  .cx-tag.sugg:hover{color:#fff}
  .cx-qbtns{display:flex;gap:6px;margin-left:auto;flex-wrap:nowrap}
  .cx-quick{white-space:nowrap;flex:none}
  .cx-foot{flex-wrap:wrap;gap:6px 10px}
  .cx-about{margin:-6px 0 16px;padding:12px 14px;border-radius:12px;background:rgba(255,255,255,.04);font-size:12.5px;color:var(--mut);line-height:1.5}
  .cx-about b{color:#fff}
  .cx-quick.show{opacity:1}
  .cx-check{position:absolute;right:10px;top:10px;display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:rgba(10,10,14,.6);color:transparent;font-weight:900;box-shadow:inset 0 0 0 2px rgba(255,255,255,.4)}
  .cx-card.sel{box-shadow:0 0 0 2px var(--acc),0 18px 40px -12px color-mix(in srgb,var(--acc) 55%,transparent)}
  .cx-card.sel .cx-check{background:var(--grad);color:#fff;box-shadow:none}
  .cx-card.selecting:hover{transform:none}
  .cx-bulk{position:fixed;left:50%;bottom:24px;z-index:2147483003;display:flex;align-items:center;gap:10px;padding:10px 12px 10px 20px;border-radius:18px;background:rgba(22,22,30,.96);backdrop-filter:blur(18px);
    box-shadow:0 20px 50px rgba(0,0,0,.6),inset 0 0 0 1px var(--line);transform:translate(-50%,calc(100% + 140px));visibility:hidden;transition:transform .3s cubic-bezier(.2,1,.3,1),visibility 0s .3s}
  .cx-bulk.open{transform:translate(-50%,0);visibility:visible;transition:transform .3s cubic-bezier(.2,1,.3,1)}
  .cx-bulk b{margin-right:8px;font-size:14px}
  .cx-list{display:flex;flex-direction:column;gap:4px}
  .cx-lrow{--c:#ff8a1f;display:grid;grid-template-columns:72px minmax(0,2.4fr) 150px 170px 90px 70px 110px;align-items:center;gap:14px;min-height:52px;padding:6px 14px 6px 6px;border-radius:12px;background:var(--panel);cursor:pointer;font-size:13px;font-weight:600;transition:.12s}
  .cx-lrow:hover{background:rgba(255,255,255,.07)}
  .cx-lrow.sel{box-shadow:inset 0 0 0 1.5px var(--acc)}
  .cx-lrow.head{background:none;min-height:30px;cursor:default;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--dim)}
  .cx-lthumb{width:72px;height:40px;border-radius:8px;background:#1a1a22 center/cover}
  .cx-ltitle{font-weight:800;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .cx-lfav{font-style:normal;color:#ff4f8b}
  .cx-lprog{display:flex;align-items:center;gap:8px;color:var(--mut)}
  .cx-status.inline{position:static;padding:3px 8px;font-size:10px;backdrop-filter:none}
  .cx-callout.gray{display:flex;align-items:center;justify-content:space-between;gap:12px;background:rgba(255,255,255,.04);box-shadow:inset 0 0 0 1px var(--line);color:#cfcfd8;font-weight:600}
  .cx-personal{display:flex;flex-direction:column;gap:8px;padding:14px 16px;border-radius:16px;background:var(--panel);box-shadow:inset 0 0 0 1px var(--line)}
  .cx-plabel{font-size:10.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--dim);margin-top:4px}
  .cx-stars{display:flex;gap:4px}
  .cx-star{flex:1;height:30px;border:0;border-radius:8px;background:rgba(255,255,255,.05);color:var(--mut);font-weight:900;font-size:12px;cursor:pointer;transition:.12s}
  .cx-star:hover{background:rgba(255,211,107,.2);color:#fff}
  .cx-star.on{background:linear-gradient(135deg,#ffd36b,#ff9a3c);color:#2a1400}
  .cx-note-in{width:100%;min-height:70px;padding:10px 12px;border:0;border-radius:11px;background:rgba(0,0,0,.25);color:#fff;font-family:inherit;font-size:13px;resize:vertical;outline:none;box-shadow:inset 0 0 0 1px var(--line)}
  .cx-note-in:focus,.cx-input:focus,.cx-tag-in:focus{box-shadow:inset 0 0 0 1.5px var(--acc)}
  .cx-tag-in{width:140px;height:26px;padding:0 9px;border:0;border-radius:7px;background:rgba(0,0,0,.25);color:#fff;font-family:inherit;font-size:12px;outline:none;box-shadow:inset 0 0 0 1px var(--line)}
  .cx-ep a.cx-ep-t{text-decoration:none}
  .cx-ep a.cx-ep-t:hover{text-decoration:underline}
  .cx-input{height:36px;padding:0 12px;border:0;border-radius:10px;background:rgba(0,0,0,.3);color:#fff;font-family:inherit;font-size:13.5px;outline:none;box-shadow:inset 0 0 0 1px var(--line);width:100%}
  .cx-input.sm{width:110px}
  .cx-form{display:flex;flex-direction:column;gap:10px;margin-bottom:16px}
  .cx-form label{display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:13.5px;font-weight:700;color:#ddd}
  .cx-form label.row{justify-content:flex-start}
  .cx-form label .cx-input:not(.sm){max-width:320px}
  .cx-hint{font-size:12px;color:var(--dim);margin-top:-6px}
  .cx-inline{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:10px}
  .cx-modal-box.wide{width:min(620px,94vw);max-height:88vh;overflow:auto}
  .cx-implist{display:flex;flex-direction:column;gap:2px;max-height:46vh;overflow:auto;margin:6px 0 16px;padding:4px;border-radius:12px;background:rgba(0,0,0,.2)}
  .cx-imp{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:10px;padding:8px 10px;border-radius:9px;cursor:pointer;font-size:13px}
  .cx-imp.btn{grid-template-columns:minmax(0,1fr) auto;border:0;background:none;color:inherit;font-family:inherit;text-align:left}
  .cx-imp:hover{background:rgba(255,255,255,.05)}
  .cx-imp-t{font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .cx-imp-t em{font-style:normal;color:#8ef0b6;font-size:11.5px}
  .cx-new{margin:6px 0 14px;padding-left:20px;display:flex;flex-direction:column;gap:7px;font-size:13.5px;color:#ddd;line-height:1.4}
  .cx-new li::marker{color:var(--acc)}
  .cx-older{margin-bottom:16px;font-size:12.5px;color:var(--mut)}
  .cx-older summary{cursor:pointer;font-weight:700}
  .cx-older ul{margin:6px 0;padding-left:20px}
  .cx-keys{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:18px}
  .cx-keys div{display:flex;align-items:center;gap:10px;font-size:13px;color:#ddd}
  .cx-keys kbd{display:inline-grid;place-items:center;min-width:34px;height:28px;padding:0 8px;border-radius:7px;background:rgba(255,255,255,.08);box-shadow:inset 0 -2px 0 rgba(0,0,0,.4),inset 0 0 0 1px var(--line);font-family:inherit;font-weight:900;font-size:12px;color:#fff}
  .cx-spin-art{height:180px;margin:12px 0 14px;border-radius:16px;background:linear-gradient(135deg,#1d1d26,#121218) center/cover;box-shadow:inset 0 0 0 1px var(--line)}
  .cx-spin-t{font-size:22px;font-weight:900;color:#fff;min-height:30px}
  .cx-spin-s{font-size:13.5px;color:var(--mut);min-height:20px;margin:4px 0 18px}
  .cx-compare{display:flex;flex-direction:column;gap:6px;margin-top:10px}
  .cx-cmp{display:grid;grid-template-columns:1fr 1.4fr 1fr;align-items:center;gap:10px;padding:8px 12px;border-radius:10px;background:var(--panel);text-align:center;font-size:13px;color:var(--mut)}
  .cx-cmp b{font-size:16px;color:#ddd}
  .cx-cmp b.win{color:var(--acc1)}
  .cx-cmp.head{background:none}
  .cx-cmp.head b{font-size:15px;color:#fff}
  .cx-insights{display:flex;flex-direction:column;gap:18px}
  .cx-icard{padding:20px 22px;border-radius:22px;background:var(--panel);box-shadow:inset 0 0 0 1px var(--line);min-width:0}
  .cx-icard h3{margin:0 0 14px;font-size:15px;font-weight:900;color:#fff}
  .cx-ihint{margin:-8px 0 12px;font-size:12.5px;color:var(--mut)}
  .cx-ibigs{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px}
  .cx-ibig{padding:16px 18px;border-radius:18px;background:var(--panel);box-shadow:inset 0 0 0 1px var(--line)}
  .cx-ibig b{display:block;font-size:30px;font-weight:900;background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent}
  .cx-ibig span{font-size:12.5px;color:var(--mut);font-weight:700}
  .cx-igrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:18px}
  .cx-traits{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px}
  .cx-traitcard{padding:14px 16px;border-radius:16px;background:rgba(255,255,255,.04);box-shadow:inset 0 0 0 1px var(--line)}
  .cx-traitcard.main{background:linear-gradient(135deg,var(--soft),rgba(255,255,255,.02));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--acc) 40%,transparent)}
  .cx-traitcard b{display:block;font-size:17px;font-weight:900;color:#fff}
  .cx-traitcard span{font-size:12.5px;color:var(--mut)}
  .cx-cal{display:flex;gap:3px;overflow-x:auto;padding-bottom:4px}
  .cx-cweek{display:flex;flex-direction:column;gap:3px}
  .cx-cal i{width:13px;height:13px;border-radius:3px;background:color-mix(in srgb,var(--acc) calc(var(--a) * 100%),rgba(255,255,255,.05))}
  .cx-cal i.f{background:none}
  .cx-mchart{display:flex;align-items:flex-end;gap:5px;height:180px}
  .cx-mbar{flex:1;height:100%;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;min-width:0}
  .cx-mbar i{width:100%;border-radius:6px 6px 2px 2px;background:var(--grad);opacity:.85;transition:opacity .15s}
  .cx-mbar:hover i{opacity:1;box-shadow:0 0 14px color-mix(in srgb,var(--acc) 60%,transparent)}
  .cx-mbar span{height:18px;line-height:18px;font-size:10px;font-weight:800;color:var(--dim);white-space:nowrap}
  .cx-heat{display:flex;flex-direction:column;gap:3px;overflow-x:auto}
  .cx-hrow{display:grid;grid-template-columns:36px repeat(24,minmax(14px,1fr));gap:3px;align-items:center}
  .cx-hrow span{font-size:11px;font-weight:800;color:var(--dim)}
  .cx-hrow i{height:20px;border-radius:4px;background:color-mix(in srgb,var(--acc) calc(var(--a) * 100%),rgba(255,255,255,.04))}
  .cx-hrow.axis em{font-style:normal;font-size:10px;color:var(--dim);white-space:nowrap}
  .cx-irow{display:grid;grid-template-columns:100px minmax(0,1fr) auto;gap:10px;align-items:center;padding:9px 0;border-bottom:1px solid var(--line);font-size:13px}
  .cx-irow:last-child{border-bottom:0}
  .cx-irow span{color:var(--mut);font-weight:700}
  .cx-irow b{color:#fff;line-height:1.3}
  .cx-irow em{font-style:normal;color:var(--dim);font-size:12px}
  .cx-hbar{display:grid;grid-template-columns:minmax(0,1.3fr) 1fr 60px;gap:10px;align-items:center;padding:6px 0;font-size:13px}
  .cx-hbar span{font-weight:700;color:#ddd;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .cx-hbar i{height:8px;border-radius:5px;background:rgba(255,255,255,.06);overflow:hidden}
  .cx-hbar em{display:block;height:100%;border-radius:5px;background:var(--grad)}
  .cx-hbar b{text-align:right;color:var(--mut);font-size:12px}
  .cx-check-card{margin-bottom:22px;padding:16px 18px;border-radius:20px;background:var(--panel);box-shadow:inset 0 0 0 1px var(--line)}
  .cx-check-card.ok{box-shadow:inset 0 0 0 1px rgba(46,224,124,.28)}
  .cx-check-card.warn{background:linear-gradient(135deg,rgba(255,200,87,.10),rgba(255,255,255,.02));box-shadow:inset 0 0 0 1px rgba(255,200,87,.35)}
  .cx-check-card.running{background:linear-gradient(135deg,var(--soft),rgba(255,255,255,.02));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--acc) 45%,transparent)}
  .cx-ck-head{display:flex;align-items:center;gap:14px}
  .cx-ck-ico{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:12px;font-weight:900;font-size:18px;background:rgba(46,224,124,.16);color:#5cf09a}
  .cx-check-card.warn .cx-ck-ico{background:rgba(255,200,87,.18);color:#ffd257}
  .cx-check-card.running .cx-ck-ico{background:rgba(255,255,255,.06)}
  .cx-ck-txt{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
  .cx-ck-txt b{font-size:14.5px;color:#fff}
  .cx-ck-txt span{font-size:12.5px;color:var(--mut)}
  .cx-ck-act{display:flex;gap:8px;flex-wrap:wrap}
  .cx-ck-bar{height:6px;margin-top:12px;border-radius:4px;background:rgba(255,255,255,.08);overflow:hidden}
  .cx-ck-bar i{display:block;height:100%;background:var(--grad);transition:width .4s}
  .cx-ck-look{margin-top:12px;display:flex;flex-direction:column;gap:6px}
  .cx-ck-look.closed{margin-top:8px}
  .cx-check-card.slim{display:flex;align-items:center;gap:12px;padding:8px 10px 8px 12px;border-radius:14px}
  .cx-ck-dot{display:grid;place-items:center;flex:none;width:26px;height:26px;border-radius:8px;font-weight:900;font-size:13px;background:rgba(46,224,124,.16);color:#5cf09a}
  .cx-check-card.warn .cx-ck-dot{background:rgba(255,200,87,.18);color:#ffd257}
  .cx-check-card.running .cx-ck-dot{background:rgba(255,255,255,.06)}
  .cx-ck-slimtxt{flex:1;min-width:0;font-size:13px;font-weight:700;color:#ddd;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .cx-ck-bar.slim{flex:0 1 180px;margin:0;height:5px}
  .cx-link.inline{padding:0;font-size:13px}
  .cx-link.inline::before{content:'·';margin:0 8px;color:var(--dim)}
  .cx-ck-toggle{flex:none}
  .cx-spin.xs{width:14px;height:14px;border-width:2px}
  .cx-ck-lookhead{display:flex;align-items:center;justify-content:space-between;gap:10px}
  .cx-ck-item{grid-template-columns:minmax(0,1fr) auto auto auto auto !important}
  .cx-link{align-self:flex-start;border:0;background:none;color:color-mix(in srgb,var(--acc1) 70%,#fff);font-family:inherit;font-weight:800;font-size:12.5px;cursor:pointer;padding:4px 2px}
  .cx-link:hover{text-decoration:underline}
  .cx-ck-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:6px}
  .cx-ck-item{display:grid;grid-template-columns:minmax(0,1fr) auto auto auto;align-items:center;gap:8px;padding:6px 8px 6px 12px;border-radius:10px;background:rgba(0,0,0,.22);font-size:13px}
  .cx-ck-name{font-weight:800;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .cx-spin.sm{width:20px;height:20px;border-width:2px}
  .cx-ini{position:absolute;left:50%;top:42%;transform:translate(-50%,-50%);font-size:54px;font-weight:900;letter-spacing:-.02em;color:rgba(255,255,255,.22);pointer-events:none}
  .cx-ini.big{font-size:110px;top:45%}
  .cx-found{display:flex;flex-direction:column;gap:8px;padding:16px}
  .cx-found b{font-size:16px;color:#fff}
  .cx-sbar.wide{width:100%;height:8px;margin:8px 0 4px}
  .cx-match{font-style:normal;color:var(--mut);font-weight:600}
  @media (max-width:1100px){
    .cx-top{height:auto;min-height:70px;flex-wrap:wrap;row-gap:10px;padding:12px 20px}
    .cx-tabs{order:3;width:100%;justify-content:center}
    .cx-tab{flex:1}
    .cx-sync span{display:none}
    .cx-bar{position:static;margin:0 0 18px}
    .cx-lrow{grid-template-columns:60px minmax(0,1fr) 120px 90px}.cx-lrow>span:nth-child(n+5){display:none}}
  @media (max-width:700px){.cx-actions .cx-btn.ghost{display:none}.cx-bigrow{flex-direction:column;align-items:flex-start}.cx-cw{width:250px}}

  /* ===================== THEMES ===================== */
  .cx-bgfx{overflow:hidden}
  .cx-bgfx::before,.cx-bgfx::after{content:"";position:absolute;inset:-10%;pointer-events:none}
  @keyframes cx-drift{0%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(-4%,3%,0) scale(1.08)}100%{transform:translate3d(0,0,0) scale(1)}}
  @keyframes cx-aurora{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
  @media (prefers-reduced-motion:reduce){.cx-bgfx::before,.cx-bgfx::after{animation:none!important}}
  .cx-card,.cx-cw,.cx-rec{transition:transform .22s cubic-bezier(.2,1,.3,1),box-shadow .22s}
  .cx-card:hover,.cx-cw:hover{box-shadow:0 18px 40px -12px color-mix(in srgb,var(--c) 55%,transparent),inset 0 0 0 1px color-mix(in srgb,var(--c) 60%,transparent),0 0 0 1px var(--glowline,transparent)}

  /* Sunset (default) */
  #cx-root[data-theme=crunchy] .cx-bgfx::before{background:radial-gradient(900px 600px at 88% -8%,rgba(255,120,30,.32),transparent 60%),radial-gradient(800px 560px at -8% 108%,rgba(255,50,110,.22),transparent 60%),radial-gradient(600px 400px at 40% 40%,rgba(255,170,60,.06),transparent 70%);animation:cx-drift 26s ease-in-out infinite}
  #cx-root[data-theme=crunchy] .cx-bgfx::after{background:linear-gradient(115deg,transparent 40%,rgba(255,160,80,.05) 50%,transparent 60%)}

  /* Cyberpunk */
  #cx-root[data-theme=neon]{--bg:#05030c;--acc:#a855f7;--acc1:#22d3ee;--acc2:#f0abfc;--soft:rgba(168,85,247,.16);--card:#0b0817;--drawer:#08061a;--radius:12px;--glowline:rgba(34,211,238,.18);--line:rgba(167,139,250,.16)}
  #cx-root[data-theme=neon] .cx-bgfx::before{background:radial-gradient(900px 500px at 85% -10%,rgba(217,70,239,.35),transparent 60%),radial-gradient(700px 500px at 0% 100%,rgba(34,211,238,.25),transparent 60%);animation:cx-drift 20s ease-in-out infinite}
  #cx-root[data-theme=neon] .cx-bgfx::after{inset:40% -30% -40%;background:repeating-linear-gradient(90deg,rgba(34,211,238,.13) 0 1px,transparent 1px 64px),repeating-linear-gradient(0deg,rgba(217,70,239,.13) 0 1px,transparent 1px 64px);transform:perspective(500px) rotateX(62deg);-webkit-mask:linear-gradient(transparent,#000 70%);mask:linear-gradient(transparent,#000 70%)}
  #cx-root[data-theme=neon] .cx-title,#cx-root[data-theme=neon] .cx-days b{text-shadow:0 0 18px rgba(217,70,239,.45)}
  #cx-root[data-theme=neon] .cx-card,#cx-root[data-theme=neon] .cx-cw{box-shadow:inset 0 0 0 1px rgba(167,139,250,.22),0 0 22px -8px rgba(34,211,238,.35)}
  #cx-root[data-theme=neon] .cx-status{box-shadow:inset 0 0 0 1px var(--c),0 0 12px -2px var(--c)}

  /* Sakura */
  #cx-root[data-theme=sakura]{--bg:#130a11;--acc:#f472b6;--acc1:#fecdd3;--acc2:#e11d74;--soft:rgba(244,114,182,.16);--card:#1a0f17;--drawer:#150c13;--radius:24px;--line:rgba(253,164,175,.12)}
  #cx-root[data-theme=sakura] .cx-bgfx::before{background:radial-gradient(800px 600px at 80% 0%,rgba(244,114,182,.28),transparent 60%),radial-gradient(700px 500px at 10% 100%,rgba(253,164,175,.18),transparent 60%);animation:cx-drift 30s ease-in-out infinite}
  #cx-root[data-theme=sakura] .cx-bgfx::after{background-image:radial-gradient(6px 4px at 20px 30px,rgba(253,164,175,.35),transparent 70%),radial-gradient(5px 3px at 120px 90px,rgba(244,114,182,.28),transparent 70%),radial-gradient(4px 3px at 70px 150px,rgba(254,205,211,.3),transparent 70%);background-size:180px 180px;animation:cx-drift 40s linear infinite}

  /* Ocean */
  #cx-root[data-theme=ocean]{--bg:#020c16;--acc:#0ea5e9;--acc1:#5eead4;--acc2:#3b82f6;--soft:rgba(14,165,233,.16);--card:#071522;--drawer:#06121d;--radius:18px;--line:rgba(94,234,212,.12)}
  #cx-root[data-theme=ocean] .cx-bgfx::before{background:radial-gradient(1000px 600px at 70% -10%,rgba(14,165,233,.30),transparent 60%),radial-gradient(800px 500px at 0% 90%,rgba(45,212,191,.20),transparent 60%);animation:cx-drift 24s ease-in-out infinite}
  #cx-root[data-theme=ocean] .cx-bgfx::after{background:repeating-radial-gradient(ellipse 120% 60% at 50% 120%,rgba(94,234,212,.05) 0 2px,transparent 2px 46px);animation:cx-drift 18s ease-in-out infinite reverse}

  /* Aurora */
  #cx-root[data-theme=aurora]{--bg:#03090b;--acc:#34d399;--acc1:#a7f3d0;--acc2:#a855f7;--soft:rgba(52,211,153,.14);--card:#08121a;--drawer:#060f15;--radius:20px;--line:rgba(167,243,208,.12)}
  #cx-root[data-theme=aurora] .cx-bgfx::before{inset:-20% -10% 40%;background:linear-gradient(120deg,rgba(52,211,153,0),rgba(52,211,153,.16),rgba(56,189,248,.10),rgba(168,85,247,.16),rgba(52,211,153,0));background-size:300% 300%;filter:blur(70px);-webkit-mask:linear-gradient(#000 20%,transparent 85%);mask:linear-gradient(#000 20%,transparent 85%);animation:cx-aurora 22s ease-in-out infinite}
  #cx-root[data-theme=aurora] .cx-bgfx::after{background-image:radial-gradient(1px 1px at 30px 40px,rgba(255,255,255,.6),transparent),radial-gradient(1px 1px at 150px 120px,rgba(255,255,255,.4),transparent),radial-gradient(1.5px 1.5px at 90px 200px,rgba(255,255,255,.5),transparent);background-size:240px 240px}

  /* Reaper */
  #cx-root[data-theme=reaper]{--bg:#070203;--acc:#e11d48;--acc1:#fb7185;--acc2:#7f1d1d;--soft:rgba(225,29,72,.14);--card:#110508;--drawer:#0d0406;--radius:10px;--line:rgba(225,29,72,.16)}
  #cx-root[data-theme=reaper] .cx-bgfx::before{background:radial-gradient(900px 600px at 50% -20%,rgba(225,29,72,.30),transparent 60%),radial-gradient(600px 400px at 100% 100%,rgba(127,29,29,.35),transparent 60%);animation:cx-drift 28s ease-in-out infinite}
  #cx-root[data-theme=reaper] .cx-bgfx::after{background:repeating-linear-gradient(135deg,rgba(225,29,72,.035) 0 2px,transparent 2px 14px)}
  #cx-root[data-theme=reaper] .cx-title{letter-spacing:.06em;text-transform:uppercase}
  #cx-root[data-theme=reaper] .cx-card,#cx-root[data-theme=reaper] .cx-cw{box-shadow:inset 0 0 0 1px rgba(225,29,72,.22)}

  /* Midnight */
  #cx-root[data-theme=midnight]{--bg:#000;--panel:rgba(255,255,255,.03);--acc:#e5e5e5;--acc1:#ffffff;--acc2:#a1a1aa;--soft:rgba(255,255,255,.05);--card:#050505;--drawer:#000;--radius:14px;--line:rgba(255,255,255,.09)}
  #cx-root[data-theme=midnight] .cx-btn.primary,#cx-root[data-theme=midnight] .cx-play{color:#000}
  #cx-root[data-theme=midnight] .cx-bgfx::before{background:radial-gradient(700px 400px at 80% -10%,rgba(255,255,255,.05),transparent 60%)}

  /* theme picker */
  .cx-flabel{font-size:13.5px;font-weight:700;color:#ddd}
  .cx-themes{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:8px}
  .cx-theme{display:flex;flex-direction:column;align-items:flex-start;gap:2px;padding:8px 8px 10px;border:0;border-radius:14px;background:rgba(255,255,255,.04);color:#fff;font-family:inherit;text-align:left;cursor:pointer;box-shadow:inset 0 0 0 1px var(--line);transition:.15s}
  .cx-theme:hover{background:rgba(255,255,255,.07)}
  .cx-theme.on{box-shadow:inset 0 0 0 2px var(--acc)}
  .cx-theme b{font-size:13px;padding:0 4px}
  .cx-theme span:last-child{font-size:11px;color:var(--mut);padding:0 4px}
  .cx-theme-sw{display:block;width:100%;height:46px;margin-bottom:6px;border-radius:9px}
  .cx-theme[data-t=crunchy] .cx-theme-sw{background:radial-gradient(circle at 80% 10%,#ff7a1a,transparent 60%),radial-gradient(circle at 0 100%,#ff3d6e,transparent 60%),#100a08}
  .cx-theme[data-t=neon] .cx-theme-sw{background:repeating-linear-gradient(90deg,rgba(34,211,238,.35) 0 1px,transparent 1px 12px),radial-gradient(circle at 80% 0,#d946ef,transparent 60%),#07051a}
  .cx-theme[data-t=sakura] .cx-theme-sw{background:radial-gradient(4px 3px at 20% 30%,#fecdd3,transparent),radial-gradient(4px 3px at 70% 60%,#fda4af,transparent),radial-gradient(circle at 80% 0,#f472b6,transparent 60%),#1a0d16}
  .cx-theme[data-t=ocean] .cx-theme-sw{background:radial-gradient(circle at 70% 0,#0ea5e9,transparent 60%),radial-gradient(circle at 0 100%,#2dd4bf,transparent 60%),#04121d}
  .cx-theme[data-t=aurora] .cx-theme-sw{background:linear-gradient(120deg,#052e2b,#34d399 35%,#38bdf8 55%,#a855f7 80%,#120a24)}
  .cx-theme[data-t=reaper] .cx-theme-sw{background:repeating-linear-gradient(135deg,rgba(225,29,72,.18) 0 2px,transparent 2px 9px),radial-gradient(circle at 50% -20%,#e11d48,transparent 65%),#0a0204}
  .cx-theme[data-t=midnight] .cx-theme-sw{background:#000;box-shadow:inset 0 0 0 1px rgba(255,255,255,.15)}

  /* airing + recs + plan */
  .cx-week{display:grid;grid-template-columns:repeat(7,minmax(130px,1fr));gap:8px;overflow-x:auto;padding-bottom:6px}
  .cx-day{display:flex;flex-direction:column;gap:6px;padding:10px;border-radius:14px;background:var(--panel);box-shadow:inset 0 0 0 1px var(--line);min-height:90px}
  .cx-day.today{box-shadow:inset 0 0 0 1.5px var(--acc)}
  .cx-day-h{font-size:11.5px;font-weight:900;letter-spacing:.06em;text-transform:uppercase;color:var(--mut)}
  .cx-day.today .cx-day-h{color:var(--acc1)}
  .cx-day-empty{color:var(--dim);font-size:12px}
  .cx-air{display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;column-gap:8px;padding:7px 9px;border:0;border-radius:10px;background:rgba(0,0,0,.25);color:#fff;text-align:left;font-family:inherit;cursor:pointer;box-shadow:inset 3px 0 0 var(--c)}
  .cx-air:hover{background:rgba(255,255,255,.06)}
  .cx-air b{grid-row:1/3;font-size:12px;color:var(--acc1);align-self:center}
  .cx-air span{font-size:12px;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .cx-air em{font-style:normal;font-size:11px;color:var(--mut)}
  .cx-recs:empty{display:none}
  .cx-rec{flex:none;width:240px;border-radius:var(--radius);overflow:hidden;background:var(--card);box-shadow:inset 0 0 0 1px var(--line);scroll-snap-align:start}
  .cx-rec:hover{transform:translateY(-3px)}
  .cx-rec-art{position:relative;display:block;aspect-ratio:16/9;background:#1a1a22 center/cover no-repeat;color:#fff;text-decoration:none}
  .cx-rec-b{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:9px 10px 10px 12px;font-size:12px}
  .cx-rec-b .cx-dim{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
  .cx-card.plan .cx-art{filter:saturate(.85)}
  a.cx-quick{display:inline-flex;align-items:center;text-decoration:none}
  .cx-langpick{display:flex;flex-direction:column;gap:6px;margin:4px 0 14px;font-size:12.5px;color:var(--mut)}
  .cx-langpick select{height:40px;font-weight:700;cursor:pointer}
  .cx-langpick option{background:#15151c}
  .cx-airsec.folded{padding-bottom:0}
  .cx-airsec.folded .cx-sec-h{margin-bottom:0}
  .cx-air-head{align-items:center;flex-wrap:wrap}
  .cx-air-fold{display:flex;align-items:center;gap:8px;border:0;background:none;color:#fff;font-family:inherit;padding:0;cursor:pointer}
  .cx-air-chev{font-style:normal;font-size:18px;font-weight:900;color:var(--mut);transition:transform .2s;display:inline-block}
  .cx-air-chev.open{transform:rotate(90deg)}
  .cx-air-tools{display:flex;align-items:center;gap:8px;margin-left:auto}
  .cx-airseg{display:flex;padding:3px;border-radius:10px;background:rgba(0,0,0,.3);box-shadow:inset 0 0 0 1px var(--line)}
  .cx-airseg-b{border:0;background:none;color:var(--mut);font:800 12px inherit;font-family:inherit;padding:5px 12px;border-radius:7px;cursor:pointer}
  .cx-airseg-b.on{background:rgba(255,255,255,.1);color:#fff}
  .cx-airlist{display:flex;flex-direction:column;gap:6px;max-height:340px;overflow:auto;padding-right:4px}
  .cx-airrow{display:grid;grid-template-columns:96px 52px minmax(0,1fr) auto 90px;align-items:center;gap:12px;padding:10px 14px;border:0;border-radius:12px;background:var(--panel);color:#fff;font-family:inherit;font-size:13px;text-align:left;cursor:pointer;box-shadow:inset 3px 0 0 var(--c),inset 0 0 0 1px var(--line)}
  .cx-airrow:hover{background:rgba(255,255,255,.06)}
  .cx-airrow-d{color:var(--mut);font-weight:700;font-size:12px}
  .cx-airrow b{color:var(--acc1)}
  .cx-airrow-t{font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .cx-airrow em{font-style:normal;color:var(--mut);font-size:12px}
  .cx-airrow-u{text-align:right;color:var(--mut);font-size:12px}
  .cx-air-more{margin-top:10px;font-size:12.5px}

  /* ===================== PROFILES ===================== */
  .cx-ava{--s:64px;position:relative;flex:none;width:var(--s);height:var(--s);border:0;padding:0;border-radius:50%;background:none;cursor:default;display:grid;place-items:center}
  button.cx-ava{cursor:pointer}
  .cx-ava.framed{padding:calc(var(--s) * .07);background:var(--frame);box-shadow:0 0 calc(var(--s) * .3) -4px color-mix(in srgb,var(--acc) 60%,transparent)}
  .cx-ava.f-void,.cx-fsw.f-void{animation:cx-spinhue 6s linear infinite}
  .cx-ava.f-flame{animation:cx-flick 2.4s ease-in-out infinite}
  @keyframes cx-spinhue{to{filter:hue-rotate(360deg)}}
  @keyframes cx-flick{50%{box-shadow:0 0 calc(var(--s) * .45) -2px #f97316}}
  @media (prefers-reduced-motion:reduce){.cx-ava,.cx-fsw{animation:none!important}}
  .cx-ava-in{width:100%;height:100%;border-radius:50%;overflow:hidden;display:grid;place-items:center;background:linear-gradient(135deg,#3a2140,#16121c);box-shadow:0 0 0 2px var(--bg)}
  .cx-ava-in img{width:100%;height:100%;object-fit:cover;display:block}
  .cx-ava-in span{font-weight:900;font-size:calc(var(--s) * .36);color:#fff}
  button.cx-ava:hover .cx-ava-in{filter:brightness(1.12)}
  .cx-who{display:flex;align-items:center;gap:16px;margin-bottom:14px}
  .cx-who-t{display:flex;flex-direction:column;gap:6px;min-width:0}
  .cx-who-name{border:0;background:none;padding:0;color:#fff;font-family:inherit;font-size:22px;font-weight:900;text-align:left;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .cx-who-name:hover{text-decoration:underline;text-decoration-color:var(--acc)}
  .cx-big.has-banner{position:relative;isolation:isolate}
  .cx-big.has-banner::before{content:"";position:absolute;inset:0;z-index:-1;border-radius:inherit;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 30%,transparent),var(--bg) 78%),var(--banner) center/cover;opacity:.9}
  .cx-ttl{display:inline-flex;align-items:center;height:24px;padding:0 11px;border-radius:12px;font-size:11.5px;font-weight:900;letter-spacing:.06em;text-transform:uppercase;color:var(--rc);background:color-mix(in srgb,var(--rc) 16%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--rc) 60%,transparent)}
  .r-common{--rc:#a1a1aa}.r-rare{--rc:#60a5fa}.r-epic{--rc:#c084fc}.r-legendary{--rc:#fbbf24}.r-mythic{--rc:#ff4d8d}
  .cx-ttl.r-mythic{background:linear-gradient(90deg,rgba(255,77,141,.22),rgba(168,85,247,.22),rgba(34,211,238,.22));animation:cx-spinhue 5s linear infinite}
  .cx-ttl.r-legendary{box-shadow:inset 0 0 0 1.5px #fbbf24,0 0 14px -3px #fbbf24}
  .cx-shelf{display:flex;align-items:center;gap:10px;margin-top:16px;overflow-x:auto;padding-bottom:2px}
  .cx-shelf-h{font-size:11px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;color:var(--mut);writing-mode:vertical-rl;transform:rotate(180deg)}
  .cx-shelf-i{flex:none;width:128px;border:0;padding:0;background:none;color:#fff;font-family:inherit;text-align:left;cursor:pointer}
  .cx-shelf-art{position:relative;display:block;aspect-ratio:16/9;border-radius:10px;background:#1a1a22 center/cover no-repeat;box-shadow:inset 0 0 0 1px var(--line)}
  .cx-shelf-art b{position:absolute;left:6px;top:5px;display:grid;place-items:center;width:22px;height:22px;border-radius:7px;background:var(--grad);font-size:12px}
  .cx-shelf-i:hover .cx-shelf-art{filter:brightness(1.15)}
  .cx-shelf-t{display:block;margin-top:5px;font-size:11.5px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#ddd}
  .cx-modal-box.profile{padding-top:0;overflow:auto;max-height:88vh}
  .cx-prof-head{display:flex;align-items:center;gap:18px;margin:0 -28px 18px;padding:40px 28px 22px;background:linear-gradient(135deg,color-mix(in srgb,var(--acc2) 35%,transparent),color-mix(in srgb,var(--acc) 20%,transparent)) ;background-size:cover;background-position:center;border-radius:22px 22px 0 0}
  .cx-prof-head h3{margin:0 0 8px}
  .cx-inline.wrap{flex-wrap:wrap}
  .cx-titles,.cx-frames{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:8px;max-height:300px;overflow:auto;padding:2px}
  .cx-tsel,.cx-fsel{display:flex;flex-direction:column;align-items:flex-start;gap:3px;padding:10px 12px;border:0;border-radius:12px;background:rgba(255,255,255,.04);color:#fff;font-family:inherit;text-align:left;cursor:pointer;box-shadow:inset 0 0 0 1px var(--line)}
  .cx-tsel b{font-size:13px;color:var(--rc,#fff)}
  .cx-tsel span,.cx-fsel span:last-child{font-size:11px;color:var(--mut)}
  .cx-tsel.on,.cx-fsel.on{box-shadow:inset 0 0 0 2px var(--acc)}
  .cx-tsel.locked,.cx-fsel.locked{opacity:.45;cursor:default}
  .cx-tsel.locked b{color:#bbb}
  .cx-fsel{align-items:center;text-align:center}
  .cx-fsw{width:44px;height:44px;border-radius:50%;background:var(--frame);margin-bottom:4px;-webkit-mask:radial-gradient(circle,transparent 15px,#000 16px);mask:radial-gradient(circle,transparent 15px,#000 16px)}
  .cx-fsel[disabled] .cx-fsw{filter:grayscale(1)}
  .cx-toplist{display:flex;flex-direction:column;gap:6px}
  .cx-toprow{display:grid;grid-template-columns:24px 1fr auto auto auto;align-items:center;gap:8px;padding:6px 8px;border-radius:10px;background:rgba(255,255,255,.04)}
  .cx-toprow b{color:var(--acc1)}
  .cx-crop-wrap{display:grid;place-items:center;margin:10px 0}
  .cx-crop{border-radius:50%;cursor:grab;touch-action:none;box-shadow:0 0 0 3px var(--acc)}
  .cx-crop.wide{border-radius:14px;max-width:100%}
  .cx-crop:active{cursor:grabbing}
  .cx-range{width:100%;accent-color:var(--acc)}
  .cx-btn.on{box-shadow:inset 0 0 0 1.5px var(--acc);color:var(--acc1)}
  .cx-airseg.big{display:inline-flex;margin-bottom:10px}
  .cx-airseg.big .cx-airseg-b{font-size:13px;padding:7px 16px}
  .cx-share-img.id{aspect-ratio:1200/760}
  .cx-share-img.loading{opacity:.4}
  /* custom theme */
  .cx-theme[data-t=custom] .cx-theme-sw{background:conic-gradient(from 90deg,#ff7a1a,#f472b6,#a855f7,#22d3ee,#34d399,#ff7a1a)}
  .cx-custom-wrap{display:none}
  .cx-custom-wrap.open{display:block}
  .cx-custom{display:flex;flex-direction:column;gap:10px;padding:14px;border-radius:14px;background:rgba(0,0,0,.25);box-shadow:inset 0 0 0 1px var(--line)}
  .cx-cols{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
  .cx-colf{display:flex;flex-direction:column;align-items:center;gap:5px;font-size:11.5px;color:var(--mut);font-weight:700}
  .cx-color{width:100%;height:40px;border:0;padding:0;border-radius:10px;background:none;cursor:pointer}
  .cx-color::-webkit-color-swatch-wrapper{padding:0}.cx-color::-webkit-color-swatch{border:0;border-radius:10px}
  .cx-input.mono{font-family:ui-monospace,Consolas,monospace;letter-spacing:.04em}
  .cx-flabel.sm{font-size:12px;color:var(--mut)}
  #cx-root[data-theme=custom] .cx-bgfx::before{background:radial-gradient(900px 600px at 88% -8%,var(--glow1),transparent 60%),radial-gradient(800px 560px at -8% 108%,var(--glow2),transparent 60%);animation:cx-drift 26s ease-in-out infinite}
  #cx-root[data-theme=custom] .cx-btn.primary,#cx-root[data-theme=custom] .cx-logo{box-shadow:0 6px 18px color-mix(in srgb,var(--acc) 45%,transparent)}
  /* safety + grid */
  .cx-hint.warn{color:#fbbf24;margin:0}
  .cx-avafix{display:flex;flex-direction:column;gap:6px;padding:12px 14px;border-radius:12px;background:rgba(251,191,36,.07);box-shadow:inset 0 0 0 1px rgba(251,191,36,.25)}
  .cx-steps{margin:0;padding-left:20px;display:flex;flex-direction:column;gap:6px;font-size:13px;color:#ddd}
  .cx-modal-box.share{display:flex;flex-direction:column;max-height:94vh;padding-bottom:0}
  .cx-modal-box.share .cx-share-img{flex:1 1 auto;min-height:0;max-height:none;height:auto;width:100%;margin-bottom:12px}
  .cx-modal-box.share .cx-share-img:not(.id){max-height:calc(94vh - 300px)}
  .cx-modal-box.share .cx-modal-act{position:sticky;bottom:0;margin:0 -26px;padding:14px 26px 20px;background:linear-gradient(transparent,#14141b 35%);flex-wrap:wrap}
  .cx-modal-box.share h3+p{margin:0 0 12px}
  .cx-official{margin-top:12px;padding:12px 14px;border-radius:12px;font-size:12.5px;line-height:1.5;color:#ddd;background:rgba(46,224,124,.07);box-shadow:inset 0 0 0 1px rgba(46,224,124,.25)}
  .cx-official b{color:#5cf09a}
  .cx-coderow{display:flex;gap:8px;align-items:center}
  .cx-coderow .cx-input{flex:1}
  .cx-snaps{display:flex;flex-direction:column;gap:8px;margin:2px 0 18px}
  .cx-snaps>.cx-hint{margin:0 0 4px}
  .cx-snap{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 12px;border-radius:10px;background:rgba(255,255,255,.04);font-size:12.5px}
  .cx-snap span{color:var(--mut)}
  .cx-snap{min-height:48px}
  .cx-more-sentinel{grid-column:1/-1;display:grid;place-items:center;padding:24px}

  /* ===================== PHONE LAYOUT ===================== */
  .cx-mnav,.cx-ico-m{display:none}
  @media (max-width:640px){
    .cx-main{padding:12px 12px 96px}
    /* top bar: one compact row */
    .cx-top{flex-wrap:nowrap;height:56px;min-height:56px;padding:0 10px 0 12px;gap:6px}
    .cx-top .cx-tabs{display:none}
    .cx-brand{gap:8px;min-width:0}.cx-logo{width:30px;height:30px}
    .cx-by{display:none}.cx-title{font-size:17px}
    .cx-actions{gap:4px}
    .cx-actions .cx-btn{height:36px;min-width:36px;padding:0 10px}
    .cx-actions .cx-sharebtn{display:none}
    .cx-actions .cx-addbtn{display:inline-flex!important;padding:0;width:36px;justify-content:center;font-size:18px}
    .cx-lbl{display:none}.cx-ico-m{display:inline;font-size:17px}
    .cx-exportbtn{padding:0!important;width:36px;justify-content:center}
    .cx-sync{padding:0 6px}
    .cx-menu{position:fixed!important;left:10px!important;right:10px!important;top:60px!important;width:auto!important;max-height:72vh;overflow:auto}
    /* bottom navigation, like an app */
    .cx-mnav{display:grid;grid-template-columns:repeat(4,1fr);position:fixed;left:0;right:0;bottom:0;z-index:6;height:64px;padding:0 6px env(safe-area-inset-bottom);
      background:color-mix(in srgb,var(--bg) 82%,transparent);backdrop-filter:blur(18px) saturate(1.4);-webkit-backdrop-filter:blur(18px) saturate(1.4);border-top:1px solid var(--line)}
    .cx-mnav-b{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;border:0;background:none;color:var(--mut);font:800 11px inherit;font-family:inherit;cursor:pointer}
    .cx-mnav-b svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
    .cx-mnav-b.on{color:var(--acc1)}
    .cx-mnav-b.on svg{filter:drop-shadow(0 0 6px var(--acc))}
    .cx-overlay{overflow-x:hidden}
    /* hero */
    .cx-hero{gap:12px;margin-bottom:16px}
    .cx-big{padding:18px}
    .cx-who{gap:12px;margin-bottom:10px}.cx-who .cx-ava{--s:52px!important}
    .cx-who-name{font-size:19px}
    .cx-days b{font-size:62px}
    .cx-sub{font-size:13px}
    .cx-goal{width:100%;flex-direction:row;justify-content:center}
    .cx-first{font-size:12.5px;flex-wrap:wrap}
    .cx-stats{gap:8px}
    .cx-stat{padding:12px 12px;min-height:0;border-radius:14px}
    .cx-stat b{font-size:24px}.cx-stat span{font-size:11px;line-height:1.2}
    .cx-shelf-i{width:104px}
    /* sections */
    .cx-sec{margin-bottom:18px}
    .cx-sec-h{flex-wrap:wrap;row-gap:4px;margin-bottom:10px}
    .cx-sec-h h2{font-size:16px}
    .cx-sec-h>button:last-child,.cx-sec-h .cx-btn{margin-left:auto}
    .cx-check-card{padding:12px 12px;border-radius:16px}
    .cx-ck-head{flex-wrap:wrap;gap:10px}
    .cx-ck-txt{flex:1 1 180px}
    .cx-ck-act{width:100%}.cx-ck-act .cx-btn{flex:1}
    .cx-check-card.slim .cx-ck-bar.slim{display:none}
    .cx-ck-item{grid-template-columns:minmax(0,1fr) auto !important}
    .cx-ck-item>*:nth-child(n+3){display:none}
    .cx-cw{width:78vw;max-width:300px}
    .cx-week{grid-template-columns:repeat(7,140px)}
    .cx-airrow{grid-template-columns:70px 44px minmax(0,1fr) auto;gap:8px;padding:9px 10px}
    .cx-airrow-u{display:none}
    .cx-air-tools .cx-airseg-b{padding:5px 9px}
    .cx-rec{width:200px}
    .cx-medals{flex-wrap:nowrap;overflow-x:auto;padding-bottom:4px}
    .cx-badges{grid-template-columns:1fr 1fr;gap:8px}
    /* filters: one swipeable row */
    .cx-bar{gap:8px}
    .cx-chips{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;padding:2px 0 4px;max-width:100%}
    .cx-chips::-webkit-scrollbar{display:none}
    .cx-chip{flex:none}
    .cx-tools{width:100%}
    .cx-search{flex:1 1 100%;min-width:0;width:100%}
    /* cards */
    .cx-grid{grid-template-columns:1fr 1fr;gap:10px}
    .cx-card{border-radius:14px}
    .cx-card .cx-art{aspect-ratio:4/3}
    .cx-card .cx-status{font-size:9.5px;padding:3px 7px;top:8px;left:8px}
    .cx-card .cx-heart{top:6px;right:6px;transform:scale(.85)}
    .cx-card .cx-ini{font-size:34px}
    .cx-card .cx-info{padding:9px 10px 10px}
    .cx-card .cx-info b,.cx-card h3{font-size:13.5px}
    .cx-card .cx-pills,.cx-card .cx-qbtns,.cx-card .cx-quick{display:none}
    .cx-card .cx-meta{font-size:11px;flex-wrap:wrap;row-gap:2px}
    .cx-card .cx-note{font-size:11px}
    .cx-lrow{grid-template-columns:44px minmax(0,1fr) 80px}.cx-lrow>span:nth-child(n+4){display:none}
    /* show panel: full screen */
    .cx-drawer{width:100vw!important;max-width:100vw!important;border-radius:0}
    .cx-dhero{height:200px}
    .cx-dbody{padding:14px!important}
    .cx-dact{display:grid!important;grid-template-columns:1fr 1fr;gap:8px}
    .cx-dact .cx-btn{justify-content:center;width:100%}
    .cx-dact .cx-btn.primary{grid-column:1/-1}
    .cx-dfacts{grid-template-columns:1fr 1fr!important;gap:8px}
    .cx-rate{flex-wrap:wrap}
    .cx-season summary{flex-wrap:wrap;row-gap:8px;padding:12px}
    .cx-season summary .cx-st{flex:1 1 calc(100% - 90px);min-width:0}
    .cx-season summary .cx-sbar{display:none}
    .cx-season summary .cx-btn{order:5;flex:1 1 100%;justify-content:center}
    .cx-ep{gap:8px}
    /* windows become bottom sheets */
    .cx-modal{place-items:end stretch}
    .cx-modal-box,.cx-modal-box.wide,.cx-modal-box.share,.cx-modal-box.profile{width:100vw!important;max-width:100vw;max-height:92vh;overflow:auto;border-radius:22px 22px 0 0;padding:20px 16px calc(16px + env(safe-area-inset-bottom))}
    .cx-modal-box h3{font-size:18px}
    .cx-modal-act{flex-wrap:wrap;gap:8px}
    .cx-modal-act .cx-btn{flex:1 1 auto;justify-content:center}
    .cx-form label:not(.row){flex-direction:column;align-items:stretch;gap:6px}
    .cx-form label .cx-input,.cx-form label .cx-select{max-width:none!important;width:100%}
    .cx-form label .cx-input.sm{width:100%}
    .cx-inline{flex-wrap:wrap}
    .cx-themes{grid-template-columns:1fr 1fr}
    .cx-cols{grid-template-columns:1fr 1fr}
    .cx-titles,.cx-frames{grid-template-columns:1fr 1fr;max-height:none}
    .cx-prof-head{margin:-20px -16px 16px;padding:28px 16px 18px;border-radius:22px 22px 0 0}
    .cx-modal-box.share .cx-modal-act{margin:0 -16px;padding:12px 16px calc(14px + env(safe-area-inset-bottom))}
    .cx-modal-box.share .cx-share-img:not(.id){max-height:calc(92vh - 330px)}
    .cx-airseg.big{display:flex}.cx-airseg.big .cx-airseg-b{flex:1}
    /* little things */
    .cx-toasts{bottom:78px;left:12px;right:12px;transform:none}
    .cx-toast{max-width:100%}
    .cx-launch{right:14px;bottom:14px;height:44px;padding:0 16px 0 6px;font-size:13px}
    .cx-bulk{bottom:76px!important;max-width:calc(100vw - 20px)}
    .cx-insights,.cx-igrid{grid-template-columns:1fr!important}
  }
  .cx-imp.row3{grid-template-columns:minmax(0,1fr) auto auto}
  `;

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', buildUI);
  else buildUI();
})();
