---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["white noise", "rumore bianco gaussiano", "Gaussian white noise", "w_t iid N(0, sigma^2)"]
tags: [competenza, area/statistica]
---

# Rumore bianco

> Il modello di serie storica più semplice: osservazioni indipendenti normali a media zero e varianza costante; è il mattone con cui si costruiscono random walk, AR, MA e ARIMA.

## Definizione / enunciato
$$x_t=w_t,\qquad w_t\overset{iid}{\sim}N(0,\sigma^2),$$
quindi $\mathbf X\sim N(\mathbf 0,\sigma^2\mathbf I_n)$: le componenti sono indipendenti.

## Formule chiave
- Autocorrelazione e autocorrelazione parziale nulle a ogni lag tranne 0: $\rho(0)=1$, $\rho(k)=\psi(k)=0$ per $k\ne0$.
- Stazionario del secondo ordine e anche in senso forte.
- È un AR(1) con $\alpha=0$; nel teorema di Wold il rumore bianco può essere anche non gaussiano (media zero, varianza finita).

## Intuizione
Nessuna memoria: il valore di oggi non dice nulla su domani. Eppure da un singolo grafico simulato (100 punti) "non è facilissimo" stabilire se le componenti siano indipendenti: il correlogramma campionario oscilla dentro le bande.

## Come si usa
È il termine d'innovazione di tutti i modelli: random walk $x_t=x_{t-1}+w_t$, AR $x_t=\alpha x_{t-1}+w_t$, MA $x_t=w_t+\beta w_{t-1}$. Una serie integrata di ordine $d$ è quella che, differenziata $d$ volte, diventa rumore bianco.

## Nei corsi
- **Statistica computazionale** (magistrale): "Rumore bianco (White noise) I-II", con simulazione e correlogrammi. Fonti: `magistrale/Statistica computazionale/Time Series - Introduzione.pdf` (p. 23-25).

## Prerequisiti
- [[Distribuzione normale]]: legge delle componenti
- [[Indipendenza di variabili aleatorie]]: componenti indipendenti

## Porta a
- [[Passeggiata aleatoria gaussiana]]: somma cumulata di rumore bianco
- [[Modello AR(1)]]: rumore bianco come innovazione
- [[Modello MA(q)]]: combinazione lineare di rumori bianchi

## Collegati
- [[Funzione di autocorrelazione]]: nulla fuori dal lag 0
- [[Stazionarietà di un processo stocastico]]: caso più semplice di processo stazionario
