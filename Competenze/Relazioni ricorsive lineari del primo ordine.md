---
tipo: competenza
area: algebra-geometria
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["first-order linear recurrence", "ricorrenza lineare del primo ordine", "equazione alle differenze del primo ordine", "a_n = alpha a_{n-1} + beta", "progressione geometrica", "modello lineare di popolazione"]
tags: [competenza, area/algebra-geometria]
---

# Relazioni ricorsive lineari del primo ordine

> Ricorrenze del tipo $a_n=\alpha a_{n-1}+f(n)$. Nel caso omogeneo la soluzione è una progressione geometrica. Con termine costante si aggiunge una soluzione costante.

## Definizione / enunciato
**Omogenea:** $a_n=\alpha a_{n-1}$ per $n\ge1$, $a_0=c$. Iterando all'indietro, $a_n=\alpha a_{n-1}=\alpha^2a_{n-2}=\dots=\alpha^na_0$, quindi
$$a_n=c\,\alpha^n.$$
Senza dato iniziale la relazione ha infinite soluzioni $a_n=A\alpha^n$, $A\in\mathbb R$.

**Non omogenea:** $a_n=\alpha a_{n-1}+f(n)$ (3), $a_0=c$.
1. Se $c_n$ e $d_n$ risolvono (3), la differenza $c_n-d_n$ risolve l'omogenea.
2. Se $b_n$ risolve l'omogenea e $p_n$ è una soluzione particolare di (3), allora $b_n+p_n$ risolve (3).

**Termine costante $f(n)=\beta$.** Si prova $p_n=p$ costante: $p=\alpha p+\beta$, quindi $p=\beta/(1-\alpha)$ se $\alpha\ne1$.

## Formule chiave
$$a_n=A\,\alpha^n+\frac{\beta}{1-\alpha}\quad(\alpha\ne1),\qquad A=c-\frac{\beta}{1-\alpha}.$$

## Intuizione
È la versione discreta di $y'=ay+b$: un moltiplicatore e un apporto costante. Se $|\alpha|<1$ il termine $A\alpha^n$ si spegne e $a_n$ tende all'equilibrio $\beta/(1-\alpha)$, che è proprio la soluzione costante.

## Come si usa
**Esempio della lezione 5 (popolazione di un villaggio):** $a_{n+1}=\frac45a_n+100$, $a_0=1000$, quindi $\alpha=\frac45$, $\beta=100$, $c=1000$.
- La soluzione generale è $a_n=A(\frac45)^n+\frac{100}{1-4/5}=A(\frac45)^n+500$.
- Il dato iniziale dà $A=1000-500=500$, quindi $a_n=500(\frac45)^n+500$.
- La popolazione scende perché $(\frac45)^n\to0$, ma non si estingue: $\lim a_n=500$.

Altri esempi:
- $a_n=3a_{n-1}$, $a_0=2$ dà $a_n=2\cdot3^n$;
- il modello di popolazione della lezione 6, $p_{n+1}=(1+\lambda)p_n$, dà una crescita esponenziale "non realistica" e motiva il modello logistico.

## Nei corsi
- **Matematica discreta** (triennale): lezione 5, primo caso trattato, con l'esempio della popolazione già introdotto nella lezione 1. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/05 - Successioni ricorsive lineari.pdf` (lezione 5, pp. 4-7); `triennale/ANNO 1/Matematica discreta/teoria/01 - Esercizi introduttivi.pdf` (p. 4); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§3.1, formula (3.4)).

## Prerequisiti
- [[Successione definita per ricorrenza]]: il sistema relazione più dato iniziale ha un'unica soluzione

## Porta a
- [[Relazioni ricorsive lineari non omogenee]]: la stessa struttura omogenea + particolare, al secondo ordine

## Collegati
- [[Torre di Hanoi]]: $M_{n+1}=2M_n+1$ è di questo tipo
- [[Equazioni differenziali lineari del primo ordine]]: analogo continuo
- [[Equazione logistica discreta]]: il modello lineare di popolazione è il punto di partenza di quello logistico
- [[Stabilità dei punti di equilibrio]]: $a_{n+1}=-a_n+3$ ha un equilibrio stabile ma non attrattivo
