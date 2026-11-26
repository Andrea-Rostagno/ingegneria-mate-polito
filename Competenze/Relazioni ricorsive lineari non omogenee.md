---
tipo: competenza
area: algebra-geometria
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["non-homogeneous linear recurrence", "ricorrenza lineare non omogenea", "soluzione particolare di una ricorrenza", "termine non omogeneo"]
tags: [competenza, area/algebra-geometria]
---

# Relazioni ricorsive lineari non omogenee

> Ricorrenze $a_n=\alpha a_{n-1}+\beta a_{n-2}+f(n)$. La soluzione generale è una soluzione particolare più la soluzione generale dell'omogenea associata.

## Definizione / enunciato
**Teorema 3.3.1** (Tilli). Se $p_n$ risolve $a_n=\alpha a_{n-1}+\beta a_{n-2}+f(n)$, la soluzione generale è
$$a_n=p_n+b_n,$$
dove $b_n$ è la soluzione generale (con due parametri) di $b_n=\alpha b_{n-1}+\beta b_{n-2}$.

Infatti la differenza di due soluzioni risolve l'omogenea, e la somma di una soluzione dell'omogenea e di una della non omogenea risolve la non omogenea.

**Procedura.**
1. Trovare una soluzione particolare $p_n$, ignorando i dati iniziali.
2. Risolvere l'omogenea associata.
3. Imporre i dati iniziali ad $a_n=p_n+b_n$ per fissare $A$ e $B$.

## Formule chiave
**Metodo di somiglianza.** Se $f(n)=\lambda^n h(n)$, con $h$ polinomio di grado $d$, si cerca
$$p_n=\lambda^n\,n^m\,q(n),\qquad \deg q=d,$$
dove $m\in\{0,1,2\}$ è la molteplicità di $\lambda$ come radice di $x^2=\alpha x+\beta$: $m=0$ se non è radice, $1$ se è radice semplice, $2$ se è radice doppia. Questa forma include i casi "$f$ polinomio" ($\lambda=1$) e "$f$ esponenziale" ($h$ costante). La lezione 5 cita anche un secondo metodo, iterativo.

## Intuizione
Il termine forzante "impone la sua forma" alla soluzione particolare. Se però quella forma risolve già l'omogenea (risonanza), sostituendola si otterrebbe 0 invece di $f(n)$: per questo si moltiplica per $n^m$.

## Come si usa
**Esempio della lezione 5:** $a_n=2a_{n-1}+3a_{n-2}+1$.
- $f(n)=1=1^n\cdot1$, polinomio di grado 0.
- L'omogenea $x^2-2x-3=0$ ha radici 3 e $-1$, quindi $b_n=A\,3^n+B(-1)^n$.
- $1$ non è radice, quindi $m=0$ e $p_n=q$ costante. Sostituendo, $q=2q+3q+1$ dà $q=-\frac14$.
- La soluzione generale è $a_n=A\,3^n+B(-1)^n-\frac14$; poi si impongono i dati iniziali.

Tilli (3.3) elenca altri tipi di termine noto: $f(n)=1$, $-2n+4$, $2^n$, $-5n^2\cdot4^n$.

## Nei corsi
- **Matematica discreta** (triennale): lezione 5, dopo il caso omogeneo (il primo ordine non omogeneo è trattato prima, con la stessa struttura). Fonti: `triennale/ANNO 1/Matematica discreta/teoria/05 - Successioni ricorsive lineari.pdf` (lezione 5, pp. 5-6, 20-22); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§3.3, Teor. 3.3.1, pp. 52-58).

## Prerequisiti
- [[Relazioni ricorsive lineari omogenee]]: forniscono la parte $b_n$
- [[Relazioni ricorsive lineari del primo ordine]]: stessa struttura nel caso più semplice

## Porta a
- [[Conteggio con relazioni ricorsive]]: le stringhe con "cc" danno una ricorrenza non omogenea

## Collegati
- [[Equazioni lineari del secondo ordine a coefficienti costanti]]: stessa struttura omogenea + particolare per le EDO
- [[Metodo di somiglianza]]: la versione per le EDO, con $t^m$ al posto di $n^m$ in caso di risonanza
