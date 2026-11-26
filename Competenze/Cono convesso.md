---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa, Ottimizzazione in condizione di incertezza]
livello: [triennale, magistrale]
aliases: ["convex cone", "cono poliedrale", "polyhedral cone", "cono finitamente generato", "teorema di Minkowski-Weyl", "cono di Lorentz", "cono del secondo ordine", "second order cone", "cono associato a una norma", "cono proprio"]
tags: [competenza, area/ottimizzazione]
---

# Cono convesso

> Un cono è un insieme chiuso rispetto alla moltiplicazione per scalari non negativi; i coni convessi (poliedrali o no, come il cono di Lorentz) definiscono le regioni ammissibili dell'ottimizzazione conica.

## Definizione / enunciato
$C\subseteq\mathbb R^n$ è un **cono** se $\mathbf x\in C$, $\lambda\ge0$ ⇒ $\lambda\mathbf x\in C$ (contiene sempre l'origine). Esempi: $\mathbb R^n$, l'ortante $\mathbb R^n_+$, $\{\mathbf 0\}$, una retta o una semiretta per l'origine. Un cono può essere: **a punta** (non contiene rette), **convesso**, **poliedrale** (intersezione finita di semispazi per l'origine), chiuso o aperto. In ottimizzazione interessano i **coni propri**: a punta, chiusi e convessi.

**Teorema (Minkowski-Weyl).** Un cono è poliedrale se e solo se è finitamente generato (ricopertura conica dei suoi generatori, le direzioni estreme).

## Formule chiave
Cono di Lorentz (del secondo ordine), convesso e non poliedrale:
$$C=\{(\mathbf x,t)\in\mathbb R^{n+1}:\|\mathbf x\|_2\le t\}.$$
Cono associato a una norma: $K=\{(\mathbf x,t)\in\mathbb R^{n+1}:\|\mathbf x\|\le t\}$; è un cono perché $\|\mathbf x\|\le t\Rightarrow\|\lambda\mathbf x\|=\lambda\|\mathbf x\|\le\lambda t$ per $\lambda\ge0$; per le norme $\ell_1$ e $\ell_\infty$ è poliedrale.

## Intuizione
Un cono non è necessariamente convesso (due semirette per l'origine formano un cono a punta non convesso). Il cono "del gelato" di Lorentz ha infiniti generatori, ovvero è intersezione di infiniti semispazi.

## Come si usa
Nei modelli di ottimizzazione conica la regione ammissibile si definisce chiedendo che immagini affini di $\mathbf x$ stiano in coni (vincoli SOCP); i coni duali permettono di scrivere in modo compatto infiniti vincoli.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap4.pdf` (p. 30-33, 36-37).
- **Ottimizzazione in condizione di incertezza** (magistrale): coni puntati o no, chiusi o aperti, poliedrali o no (piramide contro cono gelato); **cono di norma** $K=\{(\mathbf x,t):\|\mathbf x\|\le t\}$, convesso perché la norma è convessa, con il cono di Lorentz $L^{n+1}$ come caso euclideo. Serve per i vincoli SOCP delle controparti robuste ellissoidali. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/05a - Analisi convessa (versione completa).pdf` (p. 16-18).

## Prerequisiti
- [[Combinazioni coniche, affini e convesse]]: ricopertura conica dei generatori
- [[Insieme convesso]]: coni convessi
- [[Norme vettoriali]]: cono associato a una norma

## Porta a
- [[Cono duale e cono polare]]: dualità fra coni
- [[Programmazione conica del secondo ordine]]: vincoli nel cono di Lorentz
- [[Lemma di Farkas]]: cono generato da un insieme finito di vettori

## Collegati
- [[Poliedro]]: un poliedro illimitato è politopo più cono
- [[Coni, cilindri e superfici di rotazione]]: il cono quadrico come superficie (collegamento concettuale, non nelle slide)
