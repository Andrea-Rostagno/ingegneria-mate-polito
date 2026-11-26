---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni topologia]
livello: [triennale]
aliases: ["closure and interior in a topological space", "insiemi associati", "chiusura topologica", "interno topologico", "punto aderente", "punti di frontiera", "Fr(E)", "insieme derivato", "Der(E)", "derived set", "Iso(E)", "insieme denso in uno spazio topologico"]
tags: [competenza, area/algebra-geometria]
---

# Chiusura e interno in uno spazio topologico

> Ad ogni sottoinsieme $E$ di uno spazio topologico si associano il più grande aperto contenuto in $E$, il più piccolo chiuso che lo contiene, la frontiera e i punti di accumulazione.

## Definizione / enunciato
Sia $(X,\tau)$ uno spazio topologico e $E\subseteq X$ (§2.5).
- **Parte interna** $\mathring E=\mathrm{Int}(E)$: unione degli aperti contenuti in $E$; $p\in\mathring E\iff$ esiste $U\in\mathcal U_p$ con $U\subseteq E$ (Prop. 2.25).
- **Chiusura** $\overline E$: intersezione dei chiusi che contengono $E$; $p\in\overline E\iff U\cap E\neq\emptyset$ per ogni $U\in\mathcal U_p$ (Prop. 2.30). $E$ è **denso** se $\overline E=X$; $X$ è **separabile** se ha un denso numerabile (Def. 2.33).
- **Frontiera** $\mathrm{Fr}(E)=\overline E\setminus\mathring E$ (Def. 2.35).
- **Derivato** $\mathrm{Der}(E)$: punti $p$ con $(U\setminus\{p\})\cap E\neq\emptyset$ per ogni $U\in\mathcal U_p$; **punti isolati** $\mathrm{Iso}(E)$: $p\in E$ con $U\cap E=\{p\}$ per qualche $U$ (Def. 2.39-2.40).

## Formule chiave
$$\overline{X\setminus E}=X\setminus\mathring E\ \ (\text{Prop. 2.31(2)}),\qquad \overline{E\cup E'}=\overline E\cup\overline{E'},\qquad (E\cap E')^{\circ}=\mathring E\cap\mathring{E'},$$
mentre in generale valgono solo $\mathring E\cup\mathring{E'}\subseteq(E\cup E')^{\circ}$ e $\overline{E\cap E'}\subseteq\overline E\cap\overline{E'}$. Le inclusioni sono strette in Es. 2.28 ($[0,1]$ e $[1,2]$) ed Es. 2.32 ($(0,1)$ e $(1,2)$).
$$\mathrm{Fr}(E)=\overline E\cap\overline{X\setminus E},\qquad \overline E=\mathring E\cup\mathrm{Fr}(E),\qquad \overline E=\mathrm{Der}(E)\sqcup\mathrm{Iso}(E).$$
$E$ è chiuso $\iff\mathrm{Fr}(E)\subseteq E\iff\mathrm{Der}(E)\subseteq E$ (Prop. 2.36, 2.41). Nella topologia indotta: $\overline H^E=\overline H\cap E$.

Negli spazi metrici (§2.6): $p\in\overline E\iff$ esiste $p_n\in E$ con $p_n\to p\iff d(p,E)=0$; $E$ limitato $\iff\overline E$ limitato (Prop. 2.45-2.47).

## Intuizione
L'interno è "ciò che resta di $E$ togliendo il bordo", la chiusura "ciò che si ottiene aggiungendo il bordo". Le operazioni dipendono dalla topologia ambiente: il segmento $H=[0,1]\times\{0\}$ ha interno vuoto in $\mathbb R^2$ ma interno $(0,1)\times\{0\}$ nell'asse $x$ (Es. 2.26, 2.37).

## Come si usa
- $\mathbb Q$ è denso in $\mathbb R$ con interno vuoto, quindi $\mathbb R$ è separabile (Es. 2.34).
- In $(\mathbb R^{n,n},d_E)$ le matrici invertibili sono dense: $M+\frac1k I_n$ è invertibile per $k$ grande e tende a $M$ (Es. 2.49(3)).
- Senza Hausdorff il derivato può non essere chiuso (Es. 2.43); in uno spazio di Hausdorff lo è sempre (Prop. 2.44).
- Nella cofinita su un insieme infinito ogni insieme infinito è denso (Es. 2.38).

## Nei corsi
- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni). Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (§2.5-2.6, Def. 2.24-2.40, Prop. 2.25-2.48, pp. 19-25; nel testo estratto le sopralineature della chiusura si perdono e vanno lette sul PDF); `triennale/ANNO 3/istituzioni/topologia/Pejsachwicz (1).pdf` (§4.6, Teor. 4.22-4.23; §5.1, Teor. 5.9 $A^{ad}=\overline A$).

## Prerequisiti
- [[Spazio topologico]]: aperti, chiusi, intorni

## Porta a
- [[Funzione continua tra spazi topologici]]: caratterizzazione f(cl E) ⊆ cl f(E)
- [[Spazio connesso]]: la chiusura di un connesso è connessa

## Collegati
- [[Aperti e chiusi in uno spazio metrico]]: versione metrica con le successioni
- [[Punto di accumulazione]]: definizione per R, qui estesa agli spazi topologici
- [[Spazio separabile]]: densità di un sottoinsieme numerabile
- [[Spazio di Hausdorff]]: il derivato è chiuso
