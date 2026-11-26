---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["Laurent series", "sviluppo di Laurent", "parte principale", "sviluppo in un anello"]
tags: [competenza, area/analisi]
---

# Serie di Laurent

> Una funzione analitica in un anello si sviluppa in una serie con potenze positive e negative di $(z-z_0)$; i coefficienti sono integrali su circonferenze e la parte con potenze negative descrive le singolarità.

## Definizione / enunciato
**Teorema 3.16.** Sia $f$ analitica nell'anello $\Omega=\{r_1<|z-z_0|<r_2\}$, $0\le r_1<r_2$. Allora per ogni $z\in\Omega$
$$f(z)=\sum_{n=-\infty}^{+\infty}c_n(z-z_0)^n,\qquad c_n=\frac1{2\pi i}\oint_C\frac{f(z)}{(z-z_0)^{n+1}}\,dz\quad(3.11)\text{-}(3.12)$$
con $C$ circonferenza $|z-z_0|=r$, $r_1<r<r_2$, percorsa in senso antiorario. La parte con potenze negative è la **parte principale** di $f$ in $z_0$.

## Formule chiave
$$c_{-1}=\frac1{2\pi i}\oint_C f(z)\,dz$$
(è il residuo quando $z_0$ è una singolarità isolata).

## Intuizione
Nella formula di Cauchy sull'anello compaiono due integrali: sulla circonferenza esterna $\frac1{s-z}$ si sviluppa in potenze di $(z-z_0)$ (parte di Taylor), su quella interna in potenze di $\frac1{z-z_0}$ (parte principale). Se $f$ è analitica anche dentro, i $c_n$ con $n<0$ sono nulli e si ritrova Taylor.

## Come si usa
In pratica si usano serie note, non gli integrali. Esempio 3.17 a): $f(z)=\frac1{(z-1)(z-2)}=\frac1{z-2}-\frac1{z-1}$ ha tre sviluppi centrati in $0$:
- in $|z|<1$: $c_n=1-\frac1{2^{n+1}}$, $n\ge0$ (Maclaurin);
- in $1<|z|<2$: $c_n=-\frac1{2^{n+1}}$ per $n\ge0$, $c_n=-1$ per $n<0$;
- in $|z|>2$: $c_n=\frac1{2^{n+1}}-1$ per $n<0$, $c_n=0$ per $n\ge0$.

Esempio 3.17 b): $\frac{e^z}{z^2}=\sum_{n\ge-2}\frac{z^n}{(n+2)!}$ in $|z|>0$.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §3.3 "Serie di Laurent". Fonte: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 3 (1).pdf` (pp. 13-17 del PDF).

## Prerequisiti
- [[Serie di potenze]]: due serie di potenze, in $z-z_0$ e in $1/(z-z_0)$
- [[Formula integrale di Cauchy]]: coefficienti come integrali su circonferenze

## Porta a
- [[Singolarità isolate]]: classificazione tramite la parte principale
- [[Residuo]]: è il coefficiente $c_{-1}$

## Collegati
- Nessuno.
