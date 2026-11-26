---
tipo: competenza
area: finanza
corsi: [Ricerca operativa, Financial engineering]
livello: [triennale, magistrale]
aliases: ["arbitrage opportunity", "arbitraggio", "assenza di arbitraggio", "no arbitrage", "funzionale di pricing", "prezzi degli stati", "state prices", "teorema fondamentale della finanza matematica", "principio di non arbitraggio", "mercato privo di arbitraggio", "titoli di Arrow-Debreu"]
tags: [competenza, area/finanza]
---

# Opportunità di arbitraggio

> In un mercato a scenari discreti non esistono arbitraggi se e solo se esiste un funzionale di pricing non negativo (prezzi degli stati); lo si dimostra con il lemma di Farkas o con la dualità LP.

## Definizione / enunciato
$n$ asset con prezzi correnti $S_{i0}$ e prezzi futuri $S_{iT}^j$ negli scenari $j\in[m]$; $h_i$ unità detenute. Un **arbitraggio** è un portafoglio di valore corrente negativo (si incassa denaro) e valore futuro mai negativo. Problema primale:
$$\min\sum_{i\in[n]}S_{i0}h_i\quad\text{s.t.}\ \sum_{i\in[n]}S_{iT}^jh_i\ge0,\ j\in[m].$$
Il portafoglio nullo è ammissibile, quindi l'ottimo è $0$ (nessun arbitraggio) oppure $-\infty$ (un portafoglio di valore negativo si può scalare con $\alpha>0$ arbitrario).

## Formule chiave
Duale, con $q_j\ge0$ per ogni scenario:
$$\max\sum_j0\cdot q_j\quad\text{s.t.}\ \sum_{j\in[m]}S_{iT}^jq_j=S_{i0},\ i\in[n];\qquad q_j\ge0 .$$
Esiste un funzionale di pricing non negativo (duale ammissibile) se e solo se il primale ha ottimo $0$, cioè non ci sono arbitraggi.

## Intuizione
I $q_j$ sono i prezzi correnti di titoli che pagano 1 nello scenario $j$ e 0 altrove: il prezzo di ogni asset è combinazione conica dei suoi prezzi futuri. Se un asset domina un altro in ogni scenario ma costa meno, il sistema non ha soluzione non negativa.

## Come si usa
Esempio delle slide: $S_1(0)=10$, $S_2(0)=9$; $S_1(T)=(11,11)$ (privo di rischio, $R_f=10\%$), $S_2(T)=(11,12)$. Il portafoglio $\mathbf h=(-1,1)$ costa $9-10=-1$ (incasso 1) e vale $0$ in $\omega_1$, $1$ in $\omega_2$: arbitraggio. Infatti $11q_1+11q_2=10$, $11q_1+12q_2=9$ dà $q_1=21/11$, $q_2=-1<0$. Con il teorema delle alternative: $\mathbf y=\mathbf h$, $A^T=-P$, $\mathbf b=-\mathbf p_0$.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap4.pdf` (p. 49-52); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap7.pdf` (p. 27-28).
- **Financial engineering** (magistrale): definizione probabilistica (def. c01-arbitraggio, c09-arbitraggio-periodo, c10-arbitraggio): strategia (autofinanziante) con $V(0)=0$, $\mathbb P(V(T)\ge0)=1$, $\mathbb P(V(T)>0)>0$; mercato privo di arbitraggio se non ne esistono. Conseguenza: **legge del prezzo unico** (prop. c01-prezzo-unico). "Comprare un titolo sottoprezzato" non è un arbitraggio. Le violazioni si sfruttano con tabelle dei flussi (buy cheap, sell dear): prezzo forward, parità put-call, limiti delle opzioni, $d<1+r<u$ nel binomiale. Nel libro i prezzi degli stati sono $\psi_j=q_j/(1+r)$ e la direzione difficile del primo teorema fondamentale si dimostra con il lemma di Farkas (facoltativa). Esempio: azione a 100 che va a 110 o 95 con titolo non rischioso al 12%: $h=(100,-1)$ dà $+2$ o $+17$ a costo nullo. Fonti: `Libri/Financial engineering/capitoli/cap01.tex`, `cap09.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/04 - 25 febbraio - Lesson - no arbitrage pricing.pdf`, `27 - lez 24 marzo - modello binomiale uniperiodale.pdf`.

## Prerequisiti
- [[Lemma di Farkas]]: alternativa fra pricing e arbitraggio
- [[Dualità nella programmazione lineare]]: primale illimitato ⇒ duale non ammissibile

## Collegati
- [[Combinazioni coniche, affini e convesse]]: prezzo corrente come combinazione conica dei prezzi futuri
- [[Cash flow matching]]: altro modello finanziario del corso
- [[Martingala]]: i prezzi degli stati normalizzati definiscono una misura neutrale al rischio (collegamento concettuale, non nelle slide)
- [[Primo teorema fondamentale dell'asset pricing]]: versione probabilistica, con $\mathbb Q$ equivalente e caso multiperiodale (Financial engineering)
- [[Misura neutrale al rischio]]: $q_j=(1+r)\psi_j$ (Financial engineering)

## Porta a
- [[Portafoglio replicante]]: legge del prezzo unico e prezzo come costo della replica (Financial engineering)
- [[Prezzo forward]]: tabelle di arbitraggio cash and carry (Financial engineering)
