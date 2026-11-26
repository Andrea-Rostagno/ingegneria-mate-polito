---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Matematica per l'AI, Statistica computazionale, Dinamiche su network]
livello: [magistrale, triennale]
aliases: ["detailed balance", "reversibilità temporale", "time reversibility", "matrice stocastica reversibile", "reversible stochastic matrix", "catena reversibile", "reversible Markov chain", "balance equation"]
tags: [competenza, area/probabilita]
---

# Bilancio dettagliato

> Condizione $\pi(x)p(x,y)=\pi(y)p(y,x)$: implica la stazionarietà e caratterizza le catene reversibili nel tempo.

## Definizione / enunciato
$\pi$ è **detailed balanced** se
$$\pi(x)p(x,y)=\pi(y)p(y,x)\qquad\forall x,y\in S.$$
Sommando su $y$, $\sum_y\pi(y)p(y,x)=\pi(x)$, quindi una distribuzione in bilancio dettagliato è stazionaria. Il viceversa in generale è falso.

**Reversibilità.** Una DTMC irriducibile con distribuzione in bilancio dettagliato è **reversibile nel tempo**: se $X_0\sim\pi$,
$$\mathbb P(X_0=x_0,\dots,X_n=x_n)=\mathbb P(X_0=x_n,\dots,X_n=x_0).$$

## Formule chiave
Versione a tempo continuo (nascita-morte, `.tex`): $\pi(n)\lambda_n=\pi(n+1)\mu_{n+1}$.

## Intuizione
In equilibrio il flusso di probabilità da $x$ a $y$ eguaglia quello da $y$ a $x$ per ogni coppia, non solo in totale. Osservando una catena stazionaria non si capisce se il tempo scorre in avanti o all'indietro.

## Come si usa
- Prima scorciatoia per calcolare $\pi$: si prova $\pi(x)p(x,y)=\pi(y)p(y,x)$. Se un candidato normalizzabile la soddisfa, è la stazionaria.
- Per le catene nascita-morte ogni stazionaria è in bilancio dettagliato, quindi la formula prodotto vale sempre.
- In tempo continuo la reversibilità della coda M/M/1 dà il teorema di Burke.

## Nei corsi
- **Processi stocastici** (magistrale): Lezione 10 ("Detailed balanced distributions", "Time reversibility"), lezione 14 (caso CTMC); `magistrale/Processi stocastici/riassunto_del_corso.tex` § Reversibilità e birth-death discrete. Fonti principali: `magistrale/Processi stocastici/Lezione_10_21_10.pdf` (lezione 10), `magistrale/Processi stocastici/Lezione_14_04_11.pdf` (lezione 14); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Reversibilità e birth-death discrete.
- **Matematica per l'AI** (triennale): teorema di reversibilità negli appunti di De Gregorio: se $P$ è irriducibile con $\pi$ invariante, $(X_n)$ è Markov$(\pi,P)$ e $Y_n=X_{N-n}$, allora $(Y_n)$ è Markov$(\pi,\hat P)$ con $\pi_j\hat p_{ji}=\pi_ip_{ij}$. Negli appunti si legge anche "se esiste $\pi$ invariante vale il bilancio dettagliato $\pi_ip_{ij}=\pi_jp_{ji}$", affermazione che in generale vale solo per catene reversibili (da verificare sul PDF). Fonti: `triennale/ANNO 3/matematica AI/De Gregorio Mia 2 (1).pdf` (p. 9); `De Gregorio Mia 3.pdf` (p. 2).
- **Statistica computazionale** (magistrale): usato per dimostrare che un passo Metropolis lascia invariata la full conditional. Con due blocchi e l'aggiornamento di $\theta_1$ si deve avere $f(\theta_1^b\mid\theta_2^b,\mathbf y)T_1((\theta_1^b,\theta_2^b),(\theta_1^{b+1},\theta_2^b))=f(\theta_1^{b+1}\mid\theta_2^b,\mathbf y)T_1((\theta_1^{b+1},\theta_2^b),(\theta_1^b,\theta_2^b))$. Se la proposta è rifiutata è banale; se è accettata $T_1=q(\theta_1^{b+1}\mid\theta_1^b,\theta_2^b,\mathbf y)\alpha(\theta_1^b,\theta_1^{b+1})$, uno dei due $\alpha$ vale 1, e l'uguaglianza impone per l'altro esattamente il rapporto di Metropolis-Hastings. Fonti: `magistrale/Statistica computazionale/Algoritmi MCMC.pdf` (p. 24-26).
- **Dinamiche su network** (magistrale): $P$ stocastica è **reversibile** se esiste $y>0$ con $y_iP_{ij}=y_jP_{ji}$; allora $y=P'y$, e se $\mathcal G_P$ è connesso $\pi=y/\mathbb 1'y$ è l'unica invariante. Ponendo $W_{ij}=y_iP_{ij}$ si ottiene un grafo non orientato con $w_i=y_i$ e $P=D^{-1}W$: reversibile equivale a random walk su un grafo non orientato, con $\pi\propto w$ e bilancio "arco per arco" della massa. Lemma: se $P$ è reversibile irriducibile, $M=\Pi^{1/2}P\Pi^{-1/2}$ ($\Pi=\operatorname{diag}(\pi)$) è simmetrica, quindi $P$ è diagonalizzabile con autovalori reali (la slide scrive la catena $1=\lambda_1<\lambda_2\le\dots\le\lambda_n=-1$, da verificare sul PDF). Teorema: $\|(P^t-\mathbb 1\pi')x(0)\|_2\le\frac{\max\sqrt{\pi_i}}{\min\sqrt{\pi_i}}\lambda^t\|x(0)\|_2$ con $\lambda=\max\{\lambda_2,|\lambda_n|\}$. In Slides 7: reversibile rispetto a $\pi$ implica $(X(0),\dots,X(t))\overset{d}{=}(X(t),\dots,X(0))$ se $X(0)\sim\pi$. La noisy best response su un gioco potenziale è reversibile rispetto alla misura di Gibbs. Fonti: `magistrale/Dinamiche su network/slide/Slides-6-Flows-Reversibility.pdf` (pp. 25-33); `magistrale/Dinamiche su network/slide/Slides-7-MarkovChains+RandomWalks.pdf` (p. 39); `magistrale/Dinamiche su network/slide/Slides-10-NetworkGames.pdf` (pp. 77-79).

## Prerequisiti
- [[Distribuzione stazionaria di una DTMC]]: condizione sufficiente di stazionarietà

## Porta a
- [[Catena di nascita e morte discreta]]: stazionaria come prodotto di rapporti
- [[Catena di nascita e morte continua]]: stazionaria come prodotto di rapporti
- [[Teorema di Burke]]: reversibilità temporale della coda
- [[Disuguaglianza di Cheeger]]: gap spettrale di una matrice reversibile (Dinamiche su network)
- [[Noisy best response]]: catena reversibile con stazionaria di Gibbs (Dinamiche su network)
- [[Velocità di convergenza al consenso]]: la diagonalizzabilità dà la stima con $\lambda_2$ (Dinamiche su network)

## Collegati
- [[Algoritmo di Metropolis-Hastings]]: costruzione di catene reversibili
- [[Modello di diffusione probabilistico]]: il modello generativo inverte nel tempo una catena di rumore (Matematica per l'AI)
