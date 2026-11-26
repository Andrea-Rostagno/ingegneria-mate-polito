---
tipo: competenza
area: analisi
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["monotonicity of recursive sequences", "insieme invariante", "invariant set", "f crescente successione monotona", "f decrescente sottosuccessioni pari e dispari", "f composta f"]
tags: [competenza, area/analisi]
---

# Monotonia delle successioni ricorsive

> Per $a_{n+1}=f(a_n)$, la monotonia di $f$ su un insieme invariante decide la monotonia della successione. Unita alla limitatezza, permette di trovare il limite senza una formula esplicita.

## Definizione / enunciato
**Definizione.** $A\subseteq\mathbb R$ è **invariante** per $f$ se $f(A)\subseteq A$.

**Proprietà** (lezione 6). Sia $A$ invariante per $f$ e sia $a_{n+1}=f(a_n)$ con $a_0\in A$. Allora:
1. se $f(x)\ge x$ per ogni $x\in A$, $a_n$ è crescente (strettamente, se la disuguaglianza è stretta);
2. se $f(x)\le x$ per ogni $x\in A$, $a_n$ è decrescente;
3. se $f$ è crescente in $A$, $a_n$ è monotona: crescente se $a_0\le a_1$, decrescente se $a_0\ge a_1$;
4. se $f$ è decrescente in $A$, le sottosuccessioni $a_{2n}$ e $a_{2n+1}$ sono monotone.

## Formule chiave
**Caso 4.** Con $g=f\circ f$ crescente si ha $a_{2n}=g^{\,n}(a_0)$ e $a_{2n+1}=g^{\,n}(a_1)$, e si applica la 3 a $g$.

I punti fissi di $f$ sono punti fissi di $g$, perché $f(f(x_0))=f(x_0)=x_0$. **Il viceversa non vale sempre**, quindi i punti fissi di $g$ vanno controllati a parte.

## Intuizione
Una $f$ crescente conserva le disuguaglianze: se $a_0\le a_1$, applicando $f$ si ottiene $a_1\le a_2$, e così via per induzione. Una $f$ decrescente le inverte a ogni passo, e la successione oscilla. Ogni due passi però l'ordine si conserva.

## Come si usa
**Problema della lezione 6:** $a_{n+1}=1+\frac1{a_n}$, $a_0=1$.
- $A=(0,+\infty)$ è invariante, perché $f(A)=(1,+\infty)$.
- I punti fissi risolvono $x^2-x-1=0$, quindi $x_0=\frac{1+\sqrt5}2$.
- $f$ è decrescente, quindi $a_{2n}$ e $a_{2n+1}$ sono monotone.
- $g(x)=\frac{2x+1}{x+1}$ ha gli stessi punti fissi di $f$.
- $b_n=a_{2n}$ non può divergere, perché $g(b_n)\to2$ e non a $+\infty$. Quindi converge a $x_0$, e lo stesso vale per $a_{2n+1}$.
- Conclusione: $a_n\to\frac{1+\sqrt5}2$.

**Esercizio 1:** $a_{n+1}=2a_n(1-a_n)$ con $a_0\in(-\infty,0)$. L'insieme è invariante e $f(x)<x$ su di esso, quindi $a_n$ è strettamente decrescente e il limite esiste. Un limite finito dovrebbe essere $0$ o $\frac12$, il che è impossibile perché la successione decresce da un valore negativo. Quindi $a_n\to-\infty$.

## Nei corsi
- **Matematica discreta** (triennale): lezione 6, proprietà generali ricavate dall'esempio logistico. Le dimostrazioni di 1 e 3 sono per induzione, quella di 4 passa per $f\circ f$. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/06 - Successioni ricorsive non lineari.pdf` (lezione 6, pp. 6-8, 10-11, manoscritto).

## Prerequisiti
- [[Punto di equilibrio di una successione ricorsiva]]: i candidati limite sono i punti fissi
- [[Principio di induzione]]: le disuguaglianze si propagano da $n$ a $n+1$
- [[Teorema sulle successioni monotone]]: monotona e limitata implica convergente

## Porta a
- [[Equazione logistica discreta]]: il caso $\alpha=2$ con $a_0\in(0,1)$

## Collegati
- [[Sottosuccessione]]: le sottosuccessioni pari e dispari nel caso $f$ decrescente
