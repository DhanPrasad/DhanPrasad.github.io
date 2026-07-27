# hammerHead (maze solving robot) — asset slots

Drop your files here using these **exact filenames** and the project page picks them up
automatically. Until a file exists, the page shows a labelled dashed placeholder instead of a
broken image — so it stays presentable while you fill it in.

Page that consumes these files: `project-line-follower.html`

---

## `img/` — displayed inline on the page

| Filename | Figure | What it should show |
|---|---|---|
| `hero.jpg` | Fig. 1 | hammerHead finished, ideally on the maze. Landscape, ~1600 px wide. |
| `wiring.png` | Fig. 2 | Wiring / schematic: Nano, IR array, TB6612FNG, motor rail. |
| `sensor-array.jpg` | Fig. 3 | Close-up of the 5-channel array on its mount, showing ride height. |
| `flowchart.png` | Fig. 4 | Program flowchart. ✅ you have this one |
| `callgraph.png` | Fig. 5 | Function call graph. |
| `assembly-render.png` | Fig. 6 | CAD assembly render. |
| `exploded.png` | Fig. 7 | Exploded view / assembly sequence. |
| `path-layout.png` | Fig. 8 | Maze layout: junctions, dead ends, finish pad. |

**Notes**
- Photos → `.jpg`, diagrams and renders → `.png` (crisp lines, transparent background OK).
- **Filenames are case-sensitive on GitHub Pages** even though Windows ignores case.
  `Flowchart.PNG` will 404. Use lowercase exactly as listed above.
- Keep each file under ~500 KB. GitHub Pages serves the raw file; large images make the page slow.
- If your diagrams are currently PDFs, export a PNG for `img/` **and** keep the PDF in `docs/` —
  the page links to both.

## `docs/` — linked from the Downloads section

| Filename | What it is |
|---|---|
| `motor-n20-datasheet.pdf` | N20 gear motor spec sheet |
| `tb6612fng-datasheet.pdf` | Motor driver datasheet |
| `path-layout.pdf` | Maze layout drawing |
| `flowchart.pdf` | Program flowchart (vector) |
| `callgraph.pdf` | Call graph (vector) |

## `cad/` — linked from the Downloads section

| Filename | What it is |
|---|---|
| `line-follower-assembly.step` | Neutral-format assembly, opens in any CAD package |
| `line-follower-parts.zip` | Printable STLs, zipped |

Native files (`.sldasm`, `.f3d`) are fine to add too — add a matching card in the Downloads
section of the HTML if you do. Keep individual files under 100 MB (GitHub's hard limit); under
50 MB is safer.

---

## Still to fill in on the page

Every value marked with a **yellow dashed `todo` chip** in the HTML needs your real number:

- Motor gear ratio and no-load RPM
- Wheel diameter and width
- Battery configuration and voltage
- Chassis material, caster type
- Final `Kp`, `Ki`, `Kd`, `BASE_SPEED`, loop period, `CONFIRM_MM`
- Chassis dimensions: overall size, wheelbase, track width, **sensor array width**,
  **sensor lead**, ride height, mass
- Results: solve time, junctions handled, dead ends recovered, false finishes,
  completion rate, top stable speed

Also worth replacing with real content:

- The **"What to watch for"** callout under the video — timestamps for the first junction,
  a dead-end recovery, and the finish confirmation.
- The **maze description** paragraph — line width, surface, dimensions, junction and dead-end
  counts, and whether the maze is simply connected (no closed loops).
- The **"Biggest lesson"** callout at the end.
- Both **GitHub links** — currently point at your profile, not the repo.

Search the HTML for `class="todo"` to find them all.
