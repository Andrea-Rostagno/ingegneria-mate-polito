---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: ["exponential races", "minimo di esponenziali", "competing exponentials"]
tags: [competenza, area/probabilita]
---

# Corsa di esponenziali

> Proprietà del minimo di esponenziali indipendenti: chi arriva primo, quando, e l'indipendenza tra le due cose.

## Definizione / enunciato
Siano $\tau_1,\dots,\tau_n$ indipendenti, $\tau_i\sim\exp(\lambda_i)$, $V=\min_i\tau_i$ e $I$ l'indice tale che $\tau_I=V$. Allora:
1. $V\sim\exp\big(\sum_{i=1}^n\lambda_i\big)$;
2. $\mathbb P(I=j)=\dfrac{\lambda_j}{\sum_{i=1}^n\lambda_i}$;
3. $I$ e $V$ sono indipendenti.

## Formule chiave
$$\mathbb P(\tau_1<\tau_2)=\int_0^\infty\!\!\int_0^{t_2}\lambda_1e^{-\lambda_1t_1}\lambda_2e^{-\lambda_2t_2}\,dt_1dt_2=\frac{\lambda_1}{\lambda_1+\lambda_2}.$$
Per l'indipendenza si mostra $\mathbb P(V>t,I=j)=\mathbb P(V>t)\,\mathbb P(I=j)$.

## Intuizione
Più "orologi" esponenziali corrono insieme. Il primo suona dopo un tempo esponenziale di tasso totale, e chi vince è proporzionale al proprio tasso, indipendentemente da quando suona.

## Come si usa
- Lezione 3: Alice finisce dopo $\tau_A\sim\exp(1)$, Bob dopo $\tau_B\sim\exp(1/4)$.
  - $\mathbb P(\text{Alice prima})=\frac{1}{1+1/4}=\frac45$.
  - Per l'indipendenza di $I$ e $V$, la risposta non cambia sapendo che il primo finisce dopo 4 ore.
  - $\mathbb E[\tau_A\mid \tau_A<\tau_B]=\mathbb E[V]=\frac45$ ore.
- Durrett 2.6: manicure $\exp(3)$ contro taglio $\exp(2)$, quindi $\mathbb P(\text{manicure prima})=3/5$.
- È il fondamento dell'equivalenza tra le due costruzioni delle CTMC (lezione 10): con allarmi $\exp(q(i,j))$ il salto avviene dopo un tempo $\exp(\lambda(i))$ verso $y$ con probabilità $q(i,y)/\lambda(i)$.

## Nei corsi
- **Processi stocastici** (magistrale): Lezione 3 ("Exponential races"), riusata nella lezione 10 (costruzione 2 delle CTMC). Esercizi: `magistrale/Processi stocastici/suggested_exercises_PP.pdf` (Durrett 2.4, 2.6). Fonti principali: `magistrale/Processi stocastici/Lezione_03_29_09.pdf` (lezione 3); `magistrale/Processi stocastici/suggested_exercises_PP.pdf (es. 2.4, 2.6)`.

## Prerequisiti
- [[Proprietà di assenza di memoria]]: il minimo riparte senza memoria

## Porta a
- [[Catena di Markov a tempo continuo]]: salto al primo orologio esponenziale
- [[Coda M-M-s]]: primo servizio concluso fra paralleli

## Collegati
- [[Sovrapposizione di processi di Poisson]]: primo arrivo fra flussi indipendenti
