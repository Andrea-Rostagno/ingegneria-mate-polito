---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["irrational inequalities", "disequazioni con radicali", "radice n-esima"]
tags: [competenza, area/analisi]
---

# Disequazioni irrazionali

> Una disequazione $\sqrt[n]{A(x)}\gtrless B(x)$ si risolve elevando alla $n$: direttamente se $n$ è dispari, con sistemi che controllano segni ed esistenza se $n$ è pari.

## Definizione / enunciato
- **$n$ dispari**: $\sqrt[n]{A(x)}\gtrless B(x)\iff A(x)\gtrless[B(x)]^n$.
- **$n$ pari, caso maggiore**:
$$\sqrt[n]{A(x)}\ge B(x)\iff\begin{cases}B(x)\ge0\\ A(x)\ge[B(x)]^n\end{cases}\ \cup\ \begin{cases}A(x)\ge0\\ B(x)<0\end{cases}$$
(nel secondo sistema $A(x)\ge0$ è la condizione di esistenza).
- **$n$ pari, caso minore**:
$$\sqrt[n]{A(x)}\le B(x)\iff\begin{cases}A(x)\ge0\\ B(x)\ge0\\ A(x)\le[B(x)]^n\end{cases}$$

## Formule chiave
Le disuguaglianze strette si trattano allo stesso modo, con $>$ o $<$ al posto di $\ge$ o $\le$ (`Lezione1.pdf` p. 6).

## Intuizione
Con indice pari la radice esiste solo per argomento non negativo ed è a sua volta non negativa. Elevare al quadrato conserva il verso solo fra quantità non negative. Se $B(x)<0$ la radice è automaticamente maggiore, purché esista; se si chiede "minore", $B(x)$ deve essere non negativo.

## Come si usa
Lezione 1, es. 6: $\sqrt{x+1}\ge1-x$, con $A(x)=x+1$, $B(x)=1-x$, $n=2$ pari, caso maggiore.
- Sistema 1: $1-x\ge0$ e $x+1\ge(1-x)^2$, cioè $x\le1$ e $x^2-3x\le0$; poiché $x^2-3x=x(x-3)$, $0\le x\le3$. Intersecando: $0\le x\le1$.
- Sistema 2: $1-x<0$ e $x+1\ge0$, cioè $x>1$.
- Unione: $S:\ x\ge0$.

## Nei corsi
- **Analisi 1** (triennale): esercitazione 1 (test di ingresso). Fonti: `triennale/ANNO 1/analisi 1/2021.09.27 - Fiandaca_Lezione1.pdf` (lezione 1, pp. 6-7).

## Prerequisiti
- [[Operazioni sugli insiemi]]: unione delle soluzioni di due sistemi

## Porta a
- Nessuno.

## Collegati
- [[Valore assoluto]]: radici di indice pari e dispari
