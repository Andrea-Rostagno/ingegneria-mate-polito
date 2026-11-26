---
tipo: competenza
area: analisi
corsi: [Analisi 1, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: ["Landau symbols", "O grande", "big O", "equivalenza asintotica", "funzioni asintotiche", "stesso ordine di grandezza", "notazione asintotica", "Omega grande", "Theta grande", "big Omega", "big Theta"]
tags: [competenza, area/analisi]
---

# Simboli di Landau

> Il linguaggio per confrontare due funzioni vicino a un punto: $f\sim g$ (equivalenti), $f=O(g)$ (controllata), $f=o(g)$ (trascurabile rispetto a $g$).

## Definizione / enunciato
Sia $\bar x$ di accumulazione per il dominio comune di $f$, $g$ e dei loro reciproci (Mazzi, §1.11).
- **Stesso ordine di grandezza**: $f\asymp g$ per $x\to\bar x$ se $\lim_{x\to\bar x}\frac{f(x)}{g(x)}=k\in\mathbb R\setminus\{0\}$.
- **Equivalenti** (asintotiche): $f\sim g$ se $\lim_{x\to\bar x}\frac{f(x)}{g(x)}=1$. $\sim$ è riflessiva, simmetrica e transitiva (prop. 1.11).
- **O grande**: $f=O(g)$ se $\exists M>0\ \exists B(\bar x):\ |f(x)|\le M|g(x)|$ per $x\in B(\bar x)\cap A\setminus\{\bar x\}$; $O(1)$ = funzioni localmente limitate.
- **o piccolo**: $o(g)=\left\{f:\ \lim_{x\to\bar x}\frac{f(x)}{g(x)}=0\right\}$; $o(1)$ = funzioni infinitesime.

**Prop. 1.14.** $f\sim g\iff f-g\in o(g)\iff f=g+o(g)$.

## Formule chiave
$$f\sim g\iff f=g+o(g),\qquad o(f)\cdot o(g)\subseteq o(fg),\qquad o(\alpha g)=o(g)\ (\alpha\ne0)$$
Dai limiti notevoli, per $x\to0$: $\sin x=x+o(x)$, $\tan x=x+o(x)$, $1-\cos x=\frac12x^2+o(x^2)$, $e^x-1\sim x$.

## Intuizione
"$o(g)$" è un'etichetta per "qualcosa che, diviso per $g$, sparisce": non indica una funzione precisa, per cui $o(x)-o(x)=o(x)$ e non $0$. L'uguale con l'o piccolo va letto come "appartiene a".

## Come si usa
Si riscrivono le funzioni come parte principale più o piccolo e si semplifica. Attenzioni della lezione del 04/11/2021: $o(f)=o(g)$ e $o(g)=o(f)$ non sono equivalenti (sono inclusioni di insiemi); per $x\to0$, $o(x^2)=o(x)$ ma non il viceversa. Esercizi di Mazzi (es. 1.2): se $f\in o(x^\alpha)$ per $x\to0^+$ allora $f\in o(x^\beta)$ per ogni $\beta\in[0,\alpha]$. Esercizi tipo: esercitazione 14 (2021-22, "simboli di Landau"), esercitazione 10 (2022-23).

## Nei corsi
- **Analisi 1** (triennale): "infiniti e infinitesimi, simboli di Landau". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (§1.11, def. 1.12-1.14, prop. 1.10-1.14, es. 1.18-1.20, pp. 36-39); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (def. 3.4.3, PDF p. 107); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-11-03.pdf` (p. 1, definizioni di O grande, equivalenza, o piccolo); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-11-04.pdf` (p. 1); `triennale/ANNO 1/analisi 1/Esercitazioni 2021-22 (manoscritte e svolte)/LIMITI NOTEVOLI SCRITTI CON SIMBOLI di LANDAU.pdf` (scansione).
- **Programmazione e calcolo scientifico** (triennale): lucidi introduttivi Crescenzi, notazione asintotica per il costo degli algoritmi al crescere di $n$, con $g,f$ funzioni del numero di dati: $g(n)=O(f(n))$ se e solo se $\exists\,c,n_0>0:\ g(n)\le c\,f(n)\ \forall n>n_0$; $g(n)=\Omega(f(n))$ se e solo se $\exists\,c,n_0>0:\ g(n)\ge c\,f(n)$ per infiniti valori $n>n_0$; $g(n)=\Theta(f(n))$ se e solo se $g(n)=O(f(n))$ e $g(n)=\Omega(f(n))$. $O$ dà limiti superiori (costo di un algoritmo), $\Omega$ limiti inferiori (per esempio $\Omega(n\log n)$ per l'ordinamento per confronti). Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Introduzione.pdf` (p. 32).

## Prerequisiti
- [[Limite di funzione]]: definiti tramite limiti di rapporti
- [[Limiti notevoli]]: danno le equivalenze di base

## Porta a
- [[Ordine di infinitesimo e parte principale]]: parte principale + o(g^α)
- [[Principio di eliminazione dei termini trascurabili]]: f1=f+o(f)
- [[Asintoti]]: f=mx+q+o(1)
- [[Derivata]]: f(x0)+α(x-x0)+o(x-x0)
- [[Sviluppi di Maclaurin]]: il resto è un o-piccolo

## Collegati
- Nessuno.
