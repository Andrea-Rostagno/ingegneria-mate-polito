---
tipo: competenza
area: analisi
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["deterministic chaos", "caos", "chaos", "imprevedibilità deterministica", "mappa logistica con mu = 4", "shift binario", "doubling map", "complessità statistica", "sequenza casuale", "random sequence", "complessità di Kolmogorov-Chaitin"]
tags: [competenza, area/analisi]
---

# Caos deterministico

> Una dinamica deterministica e semplicissima può essere imprevedibile: con precisione finita, la sensibilità alle condizioni iniziali cancella dopo pochi passi ogni informazione sullo stato iniziale.

## Definizione / enunciato
"Il caos deterministico è la regola, non l'eccezione": le incertezze crescono esponenzialmente (effetto farfalla). Esempio della mappa logistica con $\mu=4$, $x_{n+1}=4x_n(1-x_n)$: con il cambio di coordinate $x_n=\frac12(1-\cos(\pi\xi_n))$ la mappa diventa
$$\xi_{n+1}=2\xi_n\quad(\xi_n\le\tfrac12),\qquad\xi_{n+1}=2-2\xi_n\quad(\xi_n>\tfrac12),$$
così che $\xi\in[0,1]$ sempre.

## Formule chiave
Scrivendo $\xi_n$ in binario, $\xi_n=0.a_{n,1}a_{n,2}a_{n,3}\dots$, moltiplicare per 2 fa scorrere la sequenza di una posizione verso sinistra e perdere la prima cifra: $a_{n+1,i}=a_{n,i+1}$. Nel ramo $\xi_n>\frac12$ si usa $1.000\dots=0.111\dots$ e la regola diventa: si scorre, si elimina la prima cifra e si scambiano 0 e 1. Due condizioni iniziali uguali nelle prime $N$ cifre (es. 0.555555123123... e 0.555555000111...) dopo $N$ passi sono completamente diverse.

## Intuizione
Ogni passo "consuma" una cifra binaria della condizione iniziale e porta in superficie cifre sempre più lontane. Poiché si conosce lo stato solo fino a $N$ cifre (una "nuvoletta" di punti), nessuna previsione è possibile oltre l'$N$-esimo passo: la dinamica è deterministica ma imprevedibile, sembra casuale eppure la sua complessità algoritmica di Kolmogorov-Chaitin è minuscola. Per la mappa analoga $\eta_{n+1}=2\eta_n\bmod1$ (massimi di $z$ nel sistema di Lorenz) la dispensa dà esponente di Lyapunov $\ln2$.

## Come si usa
**Complessità statistica** (parte II): una serie (Dow Jones, temperatura, numero di batteri) si codifica come sequenza di 0 e 1; la frequenza $\mathcal P(s_n)=\lim_NM(s_n,N)/N$ di una stringa $s_n$ è una probabilità frequentista; $s_n$ e $s_m$ sono statisticamente indipendenti se $\mathcal P(s_n,s_m)=\mathcal P(s_n)\mathcal P(s_m)$; una sequenza infinita è **casuale** se tutte le stringhe di lunghezza fissa $n$ hanno la stessa probabilità. La mappa logistica a $\mu=4$ mostra come costruire una sequenza "aleatoria" da una regola deterministica. Domanda aperta per la finanza: qual è il numero $D$ di gradi di libertà e quale la legge di evoluzione?

## Nei corsi
- **Matematica per l'AI** (triennale): dispensa "Intro to dynamic system I-II". Fonti: `triennale/ANNO 3/matematica AI/IntroToDynamicalSystems (1).pdf` (p. 1, 9-11, 19-21).

## Prerequisiti
- [[Esponente di Lyapunov]]: esponente positivo = sensibilità alle condizioni iniziali
- [[Equazione logistica discreta]]: il modello usato come esempio

## Porta a
- [[Sistema di Lorenz]]: caos in un sistema continuo

## Collegati
- [[Partizione di Markov e dinamica simbolica]]: la dinamica come shift di simboli
- [[Misura invariante di un sistema dinamico]]: la statistica di lungo periodo resta prevedibile
- [[Biforcazione]]: la cascata di raddoppi del periodo verso il caos
- [[Indipendenza di eventi]]: indipendenza statistica delle stringhe
