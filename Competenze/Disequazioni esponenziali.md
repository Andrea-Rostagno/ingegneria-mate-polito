---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["exponential inequalities", "sostituzione con variabile ausiliaria", "equazioni biquadratiche", "biquadratic equations", "equazioni di quarto grado"]
tags: [competenza, area/analisi]
---

# Disequazioni esponenziali

> Una somma di esponenziali nella stessa base si risolve con una variabile ausiliaria $t=e^x$, riducendosi a una disequazione algebrica, e poi tornando a $x$ con i logaritmi.

## Definizione / enunciato
**Tecnica**: quando compare una somma algebrica di termini con la stessa base, la **sostituzione** $t=a^x$ riconduce a forme conosciute (di solito di secondo grado). Risolta in $t$, si torna a $x$:
- $a^x<c$ con $c\le0$ non ha soluzioni, perché un esponenziale non può essere negativo;
- $a^x>c$ con $c>0$ si risolve applicando $\log_a$; con base $a>1$ (ad esempio $e$) il verso non cambia.

## Formule chiave
$$e^{2x}=(e^x)^2,\qquad a^x=b\iff x=\log_a b .$$

## Intuizione
La variabile ausiliaria abbassa il grado del problema: $e^{2x}$ e $e^x$ diventano $t^2$ e $t$. Il ritorno a $x$ elimina le soluzioni in $t$ incompatibili con $t>0$.

## Come si usa
Lezione 1, es. 10: $e^{2x}+e^x-3>0$. Con $t=e^x$: $t^2+t-3>0$, radici $t_{1,2}=\frac{-1\pm\sqrt{13}}2$, quindi $t<\frac{-1-\sqrt{13}}2\ \vee\ t>\frac{-1+\sqrt{13}}2$.
- $e^x<\frac{-1-\sqrt{13}}2$: nessun contributo, il secondo membro è negativo.
- $e^x>\frac{-1+\sqrt{13}}2$: $S:\ x>\log\!\left(\frac{-1+\sqrt{13}}2\right)$, senza girare il verso perché la base $e$ è $>1$.

Stessa tecnica per le **equazioni biquadratiche** (es. 2): $x^4+x^2-2=0$ con $t=x^2$ diventa $t^2+t-2=0$, $t_1=1$, $t_2=-2$. Da $x^2=1$ si ha $x=\pm1$; $x^2=-2$ è impossibile. $S:\ x=-1\vee x=1$.

## Nei corsi
- **Analisi 1** (triennale): esercitazione 1 (test di ingresso). Fonti: `triennale/ANNO 1/analisi 1/2021.09.27 - Fiandaca_Lezione1.pdf` (lezione 1, pp. 1-2, 10-11).

## Prerequisiti
- [[Proprietà di potenze e logaritmi]]: ritorno a $x$ con il logaritmo

## Porta a
- Nessuno.

## Collegati
- [[Disequazioni logaritmiche]]: si risolvono passando ai logaritmi
- [[Disequazioni lineari in seno e coseno]]: stessa strategia, ricondursi a una disequazione elementare
