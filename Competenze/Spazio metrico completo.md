---
tipo: competenza
area: analisi
corsi: [Analisi funzionale, Istituzioni topologia]
livello: [triennale]
aliases: ["complete metric space", "completezza", "successione di Cauchy", "Cauchy sequence", "spazio completo", "completezza di R^n", "teorema di completezza di Rn"]
tags: [competenza, area/analisi]
---

# Spazio metrico completo

> Uno spazio metrico in cui ogni successione di Cauchy converge: è la proprietà che permette di costruire limiti senza conoscerli in anticipo.

## Definizione / enunciato
In uno spazio metrico $(M,d)$ una successione $(x_n)$ è **di Cauchy** se
$$\forall\epsilon>0\ \exists N\in\mathbb N:\ d(x_n,x_m)<\epsilon\quad\forall n,m>N.$$
Ogni successione convergente è di Cauchy, e ogni successione di Cauchy è limitata. $(M,d)$ è **completo** se ogni successione di Cauchy converge a un punto di $M$.

## Formule chiave
- $(\mathbb Q,d_2)$ non è completo: $(\lfloor10^n\sqrt2\rfloor/10^n)_n$ è di Cauchy ma non converge in $\mathbb Q$.
- $(\mathbb F^n,d_2)$ è completo; $(C_{\mathbb F}[a,b],d_\infty)$ è completo.
- **Teor. 2.15:** per ogni insieme $S$, $(F_b(S,\mathbb F),d_\infty)$ (funzioni limitate) è completo.
- **Teor. 2.37:** se $M$ è compatto, $(C_{\mathbb F}(M),d_\infty)$ è completo.
- Prodotto: $M\times N$ è completo se $M$ e $N$ lo sono (Cauchy componente per componente).

## Intuizione
Cauchy dice che i termini si avvicinano fra loro; la completezza garantisce che "il punto verso cui si avvicinano" esista nello spazio. $\mathbb Q$ ha dei "buchi" (come $\sqrt2$), $\mathbb R$ no.

## Come si usa
Per dimostrare che uno spazio di funzioni è completo: data $(f_n)$ di Cauchy in $d_\infty$, si costruisce il limite puntuale (esiste perché $\mathbb F$ è completo), poi si mostra che la convergenza è uniforme e che il limite sta nello spazio (es. è continuo). Un sottoinsieme chiuso di uno spazio completo è completo. Le funzioni uniformemente continue mandano successioni di Cauchy in successioni di Cauchy (Prop. 2.30).

## Nei corsi
- **Analisi funzionale** (triennale): §2.2 (Def. 2.7(b), Def. 2.11, Es. 2.12, Prop. 2.13, Teor. 2.14-2.15) e Teor. 2.37. Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 12-15, 21); `triennale/ANNO 3/analisi funzionale/02_spazimetrici_handout.pdf` (pp. 5-7, 19).
- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): §1.6 delle note di topologia (Def. 1.28, 1.33, Prop. 1.30-1.34). Non basta $d(p_n,p_{n+1})\to0$ per essere di Cauchy: le somme parziali della serie armonica hanno $p_{2n}-p_n>\frac12$ (Es. 1.29). $1/n$ è di Cauchy ma non converge in $(0,1)$ (Es. 1.32). La completezza si conserva per metriche equivalenti e per isometrie (Prop. 1.34). Un sottoinsieme di uno spazio completo è completo se e solo se è chiuso (Prop. 2.48), e un compatto metrico è completo (Prop. 5.27). **Teor. 5.28 (completezza di $\mathbb R^n$):** una successione di Cauchy è limitata, la sua chiusura è compatta per Heine-Borel e quindi completa (punto 10 della lista delle dimostrazioni per l'orale). La completezza non è topologica: $d(x,y)=\big|\frac{x}{1+|x|}-\frac{y}{1+|y|}\big|$ induce su $\mathbb R$ la topologia euclidea, ma $p_n=n$ è di Cauchy e non converge (Es. 5.29). Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (pp. 10-11, 24, 42-43); `triennale/ANNO 3/istituzioni/topologia/Pejsachwicz (1).pdf` (§6.1-6.2, Teor. 6.4-6.9).

## Prerequisiti
- [[Spazio metrico]]: distanza e convergenza
- [[Sottosuccessione]]: una Cauchy con sottosuccessione convergente converge

## Porta a
- [[Spazio di Banach]]: spazio normato completo
- [[Lemma di Baire]]: vale negli spazi metrici completi
- [[Teorema del punto fisso di Banach]]: le contrazioni di uno spazio completo hanno un unico punto fisso (Istituzioni topologia)

## Collegati
- [[Assioma di Dedekind]]: la completezza di R è il caso base
- [[Convergenza uniforme di successioni di funzioni]]: completezza di (C[a,b], d∞)
