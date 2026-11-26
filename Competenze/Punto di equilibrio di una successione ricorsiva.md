---
tipo: competenza
area: analisi
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["equilibrium point of a recurrence", "punto di equilibrio", "punto fisso di f", "fixed point of a map", "diagramma a tela di ragno", "cobweb diagram", "successioni ricorsive non lineari", "esistenza del punto fisso"]
tags: [competenza, area/analisi]
---

# Punto di equilibrio di una successione ricorsiva

> Per $a_{n+1}=f(a_n)$, un punto $x_0$ con $f(x_0)=x_0$ è un equilibrio: se la successione ci arriva, ci resta. Se $f$ è continua, gli unici limiti possibili sono i punti fissi di $f$.

## Definizione / enunciato
Una ricorrenza **non lineare del primo ordine autonoma** è $a_{n+1}=f(a_n)$, $a_0=a\in\mathbb R$. È **non autonoma** se $f$ dipende anche da $n$. In generale $a_n=f\circ\dots\circ f(a_0)$ e una formula esplicita si trova solo in casi particolari.

**Definizione.** Se $f(x_0)=x_0$, $x_0$ è un **punto fisso** di $f$ e un **punto di equilibrio** della successione. Il motivo del nome:
- se $a_0=x_0$, allora $a_n=x_0$ per ogni $n$ e la successione è costante;
- se $a_N=x_0$ per qualche $N$, allora $a_n=x_0$ per ogni $n\ge N$;
- se $a_n\to\ell$ e $f$ è continua, passando al limite in $a_{n+1}=f(a_n)$ si ottiene $\ell=f(\ell)$.

**Quindi i possibili valori limite di $a_n$ sono fra i punti fissi di $f$**, cioè le intersezioni dei grafici di $y=f(x)$ e $y=x$.

## Formule chiave
**Teorema (esistenza; "Brouwer" in dimensione 1).** Se $f:[a,b]\to[a,b]$ è continua, esiste $x_0\in[a,b]$ con $f(x_0)=x_0$.

*Dimostrazione:* se $a$ o $b$ sono fissi non c'è nulla da dimostrare. Altrimenti $g(x)=f(x)-x$ è continua con $g(a)>0$ e $g(b)<0$, e per il teorema degli zeri si annulla in qualche punto.

**Corollario:** ogni $f:\mathbb R\to\mathbb R$ continua e limitata ha almeno un punto fisso, ad esempio $\arctan x$, $\sin x$, $\cos x$, $\frac1{1+x^2}$.

## Intuizione
Il **diagramma a tela di ragno** si costruisce così: dal punto $(a_n,f(a_n))$ si va in orizzontale fino alla bisettrice e si scende in verticale sul grafico, trovando $a_{n+1}$. La traiettoria converge verso gli incroci con la bisettrice oppure se ne allontana.

## Come si usa
Esempi della lezione 6:
- $a_{n+1}=a_n^2$: si ha $a_n=a_0^{\,2^n}$;
- $a_{n+1}=1/a_n$ con $a_0\ne0$: la successione alterna $a_0,1/a_0,a_0,\dots$;
- $a_{n+1}=\cos a_n$ si scrive solo come composizione $\cos\circ\dots\circ\cos(a_0)$;
- $a_{n+1}=\alpha a_n(1-a_n)$, l'equazione logistica.

Il piano di studio è: (1) trovare i punti fissi; (2) studiare la monotonia al variare di $a_0$; (3) se il limite esiste, è uno dei punti fissi, oppure è $\pm\infty$.

## Nei corsi
- **Matematica discreta** (triennale): lezione 6, prima parte, e cenno sulle condizioni di esistenza dei punti fissi. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/06 - Successioni ricorsive non lineari.pdf` (lezione 6, pp. 2-4, 14-15, manoscritto). Non è nelle dispense di Tilli.

## Prerequisiti
- [[Successione definita per ricorrenza]]: la successione è definita da $a_0$ e da $f$
- [[Limite di successione]]: il limite, se esiste, è un punto fisso
- [[Teorema degli zeri]]: dimostra l'esistenza del punto fisso in $[a,b]$

## Porta a
- [[Monotonia delle successioni ricorsive]]: decide verso quale punto fisso, o verso $\pm\infty$, va la successione
- [[Equazione logistica discreta]]: esempio guida
- [[Stabilità dei punti di equilibrio]]: classifica gli equilibri

## Collegati
- [[Metodo del punto fisso]]: stessa iterazione $x_{n+1}=g(x_n)$, usata per risolvere equazioni
