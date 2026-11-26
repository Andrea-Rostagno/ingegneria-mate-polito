---
tipo: competenza
area: probabilita
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["Gaussian limit of the random walk", "random walk unidimensionale", "passeggiata aleatoria semplice", "simple random walk", "p(m,n)", "diffusione della passeggiata aleatoria"]
tags: [competenza, area/probabilita]
---

# Limite gaussiano della passeggiata aleatoria

> Per $n$ grande la probabilità che la passeggiata aleatoria simmetrica si trovi in $m$ dopo $n$ passi è approssimata da una gaussiana di varianza $n$.

## Definizione / enunciato
Passeggiata in $d=1$ con passo $\Delta x=1$: da $i$ si va in $i+1$ con probabilità $p$ e in $i-1$ con probabilità $q=1-p$; $X_0=0$ e
$$P(X_n=i)=q\,P(X_{n-1}=i+1)+p\,P(X_{n-1}=i-1).$$
Per stare in $m$ dopo $n$ passi servono $n_1=\frac{n+m}2$ passi a destra e $n_2=\frac{n-m}2$ a sinistra ($m$ e $n$ con la stessa parità; $p(m,n)=0$ per $m>n$).

## Formule chiave
$$p(m,n)=\frac{n!}{\big(\frac{n+m}2\big)!\big(\frac{n-m}2\big)!}\,p^{\frac12(n+m)}q^{\frac12(n-m)}.$$
Con $p=q=\frac12$, $x=m/n$ piccolo e la formula di Stirling:
$$p(m,n)\simeq\sqrt{\frac2{\pi n}}\,e^{-\frac{m^2}{2n}},\qquad \mathrm{Var}(m)=\langle m^2\rangle=n .$$

## Intuizione
La posizione è una somma di $n$ passi indipendenti $\pm1$: la distribuzione si allarga come $\sqrt n$ e prende forma gaussiana. Il fattore 2 in più rispetto a una densità normale non è un errore: la formula vale solo per $m,n$ della stessa parità (le altre probabilità sono 0), e passando al continuo con $dy=2dx$ si ha $P(x,n)dx\to\frac12P(y,n)dy$, che rinormalizza.

## Come si usa
Esempio di come un processo discreto converge a un moto di diffusione; negli appunti fa da ponte verso i **modelli di diffusione**, dove un moto disordinato in un potenziale $V=\frac12\|x\|^2$ ha distribuzione $\propto e^{-\frac12\beta\|x\|^2}$.

## Nei corsi
- **Matematica per l'AI** (triennale): appunti a mano di De Gregorio. Fonti: `triennale/ANNO 3/matematica AI/De Gregorio Mia 2 (1).pdf` (p. 12-14); `De Gregorio Mia 3.pdf` (p. 1-2, 10).

## Prerequisiti
- [[Formula di Stirling]]: per sviluppare i fattoriali
- [[Distribuzione binomiale]]: il numero di passi a destra è binomiale

## Porta a
- [[Modello di diffusione probabilistico]]: dal moto disordinato al processo di rumore gaussiano

## Collegati
- [[Teorema del limite centrale]]: il risultato ne è un caso particolare
- [[Distribuzione normale]]: la forma limite
- [[Ricorrenza della passeggiata aleatoria]]: stessa passeggiata, studio del ritorno in 0
