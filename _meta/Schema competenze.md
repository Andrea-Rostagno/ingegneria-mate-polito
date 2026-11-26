---
tipo: meta
tags: [meta]
---

# Schema del wiki delle competenze (metodo Karpathy)

This file holds the rules every agent and every session must follow when building or updating the POLI wiki. Write the note content in Italian.

## The three layers (Karpathy "LLM Wiki")
1. **Sources (raw, immutable):** the user's original files in the course folders (PDFs, `.tex`, `.ipynb`, OCR extracts, code). Never modify them. They are the only source of truth for content.
2. **Wiki (written by Claude):** `Competenze/`, one note per competency. This is the only thing the graph shows.
3. **Navigation and maintenance (outside the graph):** `index.md` (catalogue of competencies by area and course), `log.md` (chronological list of operations), `_meta/` (this schema and the name registry), and the course `_indice.md` files.

Earlier notes (`<corso>/Note/`, `Argomenti/`, the old hubs) were judged poor quality. Use them at most as a hint for where to look in the sources; never copy content from them without checking it against the original file.

## What a competency is
- A single definition, theorem, technique, model or procedure that could be **an oral-exam question or an exercise on its own**. Examples: "Generatore di una CTMC", "Teorema di optional stopping", "Formula di Black-Scholes", "Normalizzazione 3NF".
- **Not allowed:** umbrella notes that are mostly lists of links ("Catene di Markov" as a container). Their role belongs to `index.md`. A note with high degree is fine only if it is a real concept that many others build on (e.g. "Speranza condizionata").
- Granularity: if a note covers two things that could each be asked separately, split it. If it is under ~80 words with no formula or example, merge it into the parent concept.

## File name = graph label
- Short, correct Italian with accents (e.g. "Probabilità di assorbimento"). Use the international name when that is what it is called in practice (e.g. "Moto browniano", "Value at Risk", "Gradient descent").
- **No course prefix.** One node per concept: if the concept appears in several courses, it is a single note with one section per course.
- Windows-safe characters: no `/ \ : * ? " < > |`. "M/M/1" becomes "Coda M-M-1". Use the original spelling as an alias.
- **Before creating a note**, check `_meta/Registro competenze.md`. If the concept, or a synonym of it, already exists, add to that note instead (new section "Nei corsi", new aliases). After creating it, add the row to the registry.
- The name must not collide with an existing basename in the vault.

## Template
```markdown
---
tipo: competenza
area: <one of the areas below>
corsi: [<Corso 1>, <Corso 2>]
livello: [triennale|magistrale]
aliases: [<English name>, <synonyms>, <original spelling>]
tags: [competenza, area/<area>]
---

# <Nome>

> <One sentence: what it is and what it is for.>

## Definizione / enunciato
<Precise. Hypotheses and thesis for theorems.>

## Formule chiave
$$ ... $$  (only formulas found in the sources; any doubtful one is marked "(da verificare sul PDF)")

## Intuizione
<2-4 lines: why it holds / what it really means.>

## Come si usa
<Typical exercise or application, with a short example taken from the material.>

## Nei corsi
- **<Corso>** (<triennale|magistrale>): how it appears there, with any differences in notation. Sources: `<path/file.pdf>` (lesson N, p. X), `<file.tex>` §Y.

## Prerequisiti
- [[<Competenza>]]: <why it is needed, in 3-8 words>

## Porta a
- [[<Competenza>]]: <how it is used>

## Collegati
- [[<Competenza>]]: <relationship: generalisation, special case, analogue, contrast...>
```

## Link rules
- Wikilinks **only between competencies** (`[[Nome]]`). Never link to indexes, hubs, `Argomenti/` or the old notes.
- Sources are cited as **text in backticks** (path), not as wikilinks, so PDFs and notes do not appear in the graph.
- Every link has a short reason after the colon: it is what makes the graph meaningful.
- Every competency has at least 2 links and belongs to the single connected component of its course.
- **Concepts from courses not yet processed:** link them only if they are already in the registry. Otherwise write the name in plain text inside the "Collegati" section followed by `(da collegare)`. The link is added when that course is processed. This keeps the graph free of ghost nodes.

## Areas (colours in the graph)
| area | contents |
|---|---|
| probabilita | probability, random variables, stochastic processes, Markov chains, martingales, Brownian motion |
| statistica | inference, linear models, Bayesian statistics, time series, MCMC |
| analisi | analysis 1-2, functional analysis, measure theory, ODEs, PDEs |
| algebra-geometria | linear algebra, geometry, topology, abstract algebra |
| numerica | numerical methods, scientific computing |
| ottimizzazione | linear, convex, stochastic and robust optimisation, operations research, dynamic programming |
| finanza | pricing, rates, risk, portfolio, copulas applied to finance |
| data-ml | machine learning, deep learning, data mining, business intelligence |
| informatica | programming, databases, algorithms, blockchain/cryptography |
| fisica | mechanics, electromagnetism, quantum physics, chemistry |
| network | graph theory, dynamics on networks, random graphs, game theory |

## Content quality
- No formula written from memory: each comes from the cited source. When the slide text is a noisy OCR, write the formula only if it is unambiguous; otherwise use "(da verificare sul PDF)".
- No invented numbers in the examples: use those in the material.
- For manuscript scans with no text, base the note on the user's `.tex`/`.ipynb` files, and say so in the "Nei corsi" section.

## After every course
1. Update `index.md` (section for the area and the course).
2. Add an entry to `log.md`: date, course, notes created and updated, problems.
3. Rewrite the course `_indice.md` as a list of competencies in teaching order. It is outside the graph.
4. Run the check script `_meta/verifica_grafo.py`: unresolved links, orphans, components, degree.
