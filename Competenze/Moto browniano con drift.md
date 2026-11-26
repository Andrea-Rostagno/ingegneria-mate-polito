---
tipo: competenza
area: probabilita
corsi: [Financial engineering, Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: [Brownian motion with drift, moto browniano generalizzato, moto browniano aritmetico, arithmetic Brownian motion, generalized Wiener process, processo di Wiener generalizzato, modello di Bachelier]
tags: [competenza, area/probabilita]
---

# Moto browniano con drift

> Il processo $X_t=x_0+\mu t+\sigma W_t$: tendenza lineare più rumore browniano; modello aritmetico che non basta per i prezzi ma descrive il loro logaritmo.

## Definizione / enunciato
Con $x_0,\mu\in\mathbb R$, $\sigma>0$ e $W$ moto browniano standard (def. c11-browniano-drift):
$$X_t=x_0+\mu t+\sigma W_t,\qquad t\ge0,$$
moto browniano con drift $\mu$ e coefficiente di diffusione (volatilità) $\sigma$. In forma differenziale $dX_t=\mu\,dt+\sigma\,dW_t$: è la SDE a coefficienti costanti.

## Formule chiave
$$X_t\sim\mathcal N(x_0+\mu t,\ \sigma^2t),\qquad X_t-X_s\sim\mathcal N(\mu(t-s),\sigma^2(t-s)),$$
incrementi indipendenti; variazione quadratica $\langle X\rangle_t=\sigma^2t$; momenti infinitesimali $A_1=\mu$, $A_2=\sigma^2$.

## Intuizione
È di Markov ma, se $\mu\ne0$, non è una martingala: $\mathbb E[X_t\mid\mathcal F_s]=X_s+\mu(t-s)$ (sub/supermartingala secondo il segno di $\mu$). Come modello di prezzo ha due difetti: assegna probabilità positiva a prezzi negativi e la variazione attesa non dipende dal livello del prezzo. Entrambi si risolvono modellando così il **logaritmo** del prezzo: si ottiene il moto browniano geometrico.

## Come si usa
Esempio del libro: $S_t=10+t+3W_t$; $S_5\sim\mathcal N(15,45)$ e $\mathbb P(S_5<0)=N(-15/\sqrt{45})=N(-2.236)=0.0127$, più dell'1%: inaccettabile per un titolo a responsabilità limitata. Il Bachelier e il browniano a coefficienti a tratti (cap. 14) sono varianti con leggi gaussiane calcolabili allo stesso modo.

## Nei corsi
- **Financial engineering** (magistrale): cap. 11 §Moto browniano con drift, def. c11-browniano-drift, es. c11-markov-non-mart, c11-prezzi-negativi; cap. 14 §Altre SDE risolubili. Fonti: `Libri/Financial engineering/capitoli/cap11.tex`, `cap14.tex`; lezione d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/34 - 15 aprile - Lesson 1 -WP-SC_Italiano.pdf`.
- **Ottimizzazione in condizione di incertezza** (magistrale): "generalized Wiener process" $dX=a\,dt+b\,dW$, soluzione $X(t)=x_0+at+bW(t)\sim N(x_0+at,b^2t)$, simulato con $X(t+\delta t)=X(t)+a\,\delta t+b\sqrt{\delta t}\,\epsilon_{t+\delta t}$; inadatto ai prezzi perché può diventare negativo e ha incrementi additivi indipendenti dallo stato. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/03 - SDEs.pdf` (p. 9-12).

## Prerequisiti
- [[Moto browniano]]: componente aleatoria
- [[Distribuzione normale]]: legge di $X_t$

## Porta a
- [[Moto browniano geometrico]]: drift e rumore applicati al logaritmo
- [[Equazione differenziale stocastica]]: caso a coefficienti costanti

## Collegati
- [[Martingala]]: non lo è se $\mu\ne0$ (submartingala per $\mu>0$)
- [[Momenti infinitesimali]]: $A_1=\mu$, $A_2=\sigma^2$
