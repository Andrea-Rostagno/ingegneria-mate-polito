---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [risk-neutral valuation, risk-neutral pricing, formula di valutazione neutrale al rischio, prezzo come valore atteso scontato, mercato di Black-Scholes, Black-Scholes market, payoff lineari, opzione digitale]
tags: [competenza, area/finanza]
---

# Valutazione neutrale al rischio

> Nel mercato di Black-Scholes il prezzo di un derivato europeo è il valore atteso scontato del suo payoff sotto la misura neutrale al rischio: $\Pi(t,X)=e^{-r(T-t)}\mathbb E^{\mathbb Q}[\varphi(S_T)\mid\mathcal F_t]$.

## Definizione / enunciato
**Mercato di Black-Scholes** (def. c16-mercato-bs): conto in banca $B(t)=e^{rt}$ con $r\ge0$ costante; titolo senza dividendi $dS_t=\mu S_t\,dt+\sigma S_t\,dW_t$; niente attriti, titoli divisibili, vendite allo scoperto, stesso tasso per prestiti e depositi, scambi continui.

**Teorema** (teo. c16-prezzo-neutrale): se $X$ ha payoff $\varphi(S_T)$ con $\mathbb E^{\mathbb Q}[\varphi(S_T)^2]<\infty$, allora $X$ è replicabile con una strategia autofinanziante e il suo unico prezzo di non arbitraggio è
$$\Pi(t,X)=e^{-r(T-t)}\mathbb E^{\mathbb Q}\big[\varphi(S_T)\mid\mathcal F_t\big],\qquad\Pi(0,X)=e^{-rT}\mathbb E^{\mathbb Q}[\varphi(S_T)].$$

## Formule chiave
Sotto $\mathbb Q$: $\ln S_T\mid\mathcal F_t\sim\mathcal N\big(\ln S_t+(r-\frac12\sigma^2)(T-t),\ \sigma^2(T-t)\big)$. Payoff lineari: $\varphi=aS_T+b\ \Rightarrow\ \Pi(t,X)=aS_t+be^{-r(T-t)}$.

## Intuizione
Il drift reale $\mu$ non entra nel prezzo: il rischio si elimina replicando, e un portafoglio senza rischio rende $r$. Per un payoff lineare il prezzo non dipende da $\sigma$ (replica statica; con $a=1$, $b=-K$ si ritrova il forward). Per un payoff non lineare $\mathbb E^{\mathbb Q}[\varphi(S_T)]\ne\varphi(\mathbb E^{\mathbb Q}[S_T])$ e il prezzo dipende dalla volatilità.

## Come si usa
Esempio del libro (es. c16-log-contract, contratto logaritmico): il titolo che paga $\ln S_T$ vale $f(t,S)=e^{-r(T-t)}\big[\ln S+(r-\frac12\sigma^2)(T-t)\big]$, e si verifica che soddisfa l'equazione di Black-Scholes. Digitale che paga 1 se $S_T>K$: $e^{-rT}N(d_2)$. Il binomiale dà la stessa formula a tempo discreto, $\Pi(0,X)=(1+r)^{-T}\mathbb E^{\mathbb Q}[\varphi(S_T)]$.

## Nei corsi
- **Financial engineering** (magistrale): cap. 16 §§Il mercato di Black-Scholes, Valutazione neutrale al rischio. Fonti: `Libri/Financial engineering/capitoli/cap16.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/36 - lez 21 aprile - Black Scholes e Girsanov.pdf`, `37 - lez 24 aprile a - formula Black Scholes.pdf`.

## Prerequisiti
- [[Teorema di Girsanov]]: costruzione di $\mathbb Q$
- [[Strategia autofinanziante]]: replica in tempo continuo
- [[Speranza condizionata]]: prezzo come attesa condizionata

## Porta a
- [[Formula di Black-Scholes]]: calcolo esplicito per la call
- [[Metodo Monte Carlo]]: stima dell'attesa per simulazione
- [[Opzione asiatica]]: payoff dipendente dal percorso
- [[Modello per il tasso a breve]]: prezzo degli ZCB come attesa sotto $\mathbb Q$

## Collegati
- [[Misura neutrale al rischio]]: versione discreta
- [[Primo teorema fondamentale dell'asset pricing]]: prezzi scontati martingala
- [[Formula di Feynman-Kac]]: la stessa attesa come soluzione di una PDE
- [[Pricing di opzioni con Monte Carlo]]: stima per simulazione dell'attesa sotto $\mathbb Q$ (Ottimizzazione in condizione di incertezza)
