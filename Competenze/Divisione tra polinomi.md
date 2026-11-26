---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["polynomial long division", "divisione con resto tra polinomi", "divisione euclidea tra polinomi", "K[x] dominio euclideo", "divisibilità tra polinomi"]
tags: [competenza, area/algebra-geometria]
---

# Divisione tra polinomi

> In $K[x]$, con $K$ campo, ogni polinomio si divide per un polinomio non nullo in modo unico, con resto di grado minore del divisore. Quindi $K[x]$ è un dominio euclideo e un PID.

## Definizione / enunciato
**Def. 12.** $g\mid f$ se esiste $q$ con $f=qg$.

**Teorema 13.** Siano $K$ un campo e $g=a_0+\dots+a_nx^n\in K[x]$ con $a_n\neq0$. Per ogni $f\in K[x]$ esistono $q,r\in K[x]$ tali che:
1. $f=qg+r$;
2. $r=0$ oppure $\deg r\le\deg g-1$.

Inoltre $q$ e $r$ sono unici.

Conseguenze:
- **Oss. 15:** $K[x]$ è un dominio euclideo, con $\delta=\deg$.
- **Teor. 17:** $K[x]$ è un PID.

## Formule chiave
$$f=qg+r,\qquad r=0\ \vee\ \deg r<\deg g;\qquad f_1=a_nf-b_mx^{m-n}g\ \ (\deg f_1\le m-1)$$

## Intuizione
- **Esistenza:** si elimina il termine di grado massimo di $f$ sottraendo un multiplo monomiale di $g$, e si ripete finché il grado scende sotto quello di $g$. È la divisione "in colonna" delle scuole (Oss. 16).
- **Unicità:** se $(q-q')g=r'-r$ con $q\neq q'$, il primo membro ha grado $\ge\deg g$ e il secondo minore: assurdo.

Serve un campo per poter dividere per il coefficiente direttivo $a_n$.

## Come si usa
- **Esistenza:** per induzione su $m=\deg f$, applicata ad $f_1$ (dispense, pp. 6-8).
- **MCD di polinomi:** con divisioni successive (algoritmo di Euclide) si calcola il MCD in $K[x]$.
- **Ruffini:** dividere per $x-a$ dà un resto costante $r=f(a)$.
- **Rappresentanti delle classi:** in $K[x]/(f)$ ogni classe ha un unico rappresentante di grado $<\deg f$, il resto.
- **Su un anello non basta:** in $\mathbb Z[x]$ non si può dividere per il coefficiente direttivo. Per esempio $x$ non si divide per $2x$ con resto costante, perché servirebbe il quoziente $\tfrac12$ (esempio mio). Le dispense mostrano infatti che $\mathbb Z[x]$ non è un PID.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 28-29, "Divisione tra polinomi". Fonti: `triennale/ANNO 2/istituzioni/Alg-07-12-22.pdf` (lezioni 28-29, pp. 6-11); `triennale/ANNO 2/istituzioni/Alg-12-12-22.pdf` (lezione 30, p. 2).

## Prerequisiti
- [[Anello dei polinomi]]: grado e coefficiente direttivo
- [[Divisione euclidea]]: stessa costruzione in $\mathbb Z$

## Porta a
- [[Teorema di Ruffini]]: divisione per $x-a$
- [[Dominio a ideali principali]]: $K[x]$ euclideo, quindi PID
- [[Polinomio irriducibile]]: MCD, Bézout e fattorizzazione in $K[x]$
- [[Teorema cinese dei resti]]: riduzione del grado della soluzione

## Collegati
- [[Algoritmo di Euclide]]: MCD di polinomi con divisioni successive
