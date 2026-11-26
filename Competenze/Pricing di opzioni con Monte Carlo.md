---
tipo: competenza
area: finanza
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["Monte Carlo option pricing", "pricing Monte Carlo", "prezzo di un'opzione con Monte Carlo", "pricing a vanilla option by Monte Carlo", "BlsMC"]
tags: [competenza, area/finanza]
---

# Pricing di opzioni con Monte Carlo

> Il prezzo di un'opzione europea è il valore atteso scontato del payoff sotto la misura neutrale al rischio; quando non c'è formula chiusa lo si stima mediando payoff simulati.

## Definizione / enunciato
Un derivato con payoff $f_T(S_T)$ alla scadenza $T$ (call $\max\{0,S_T-K\}$, put $\max\{0,K-S_T\}$) ha prezzo, sotto opportune ipotesi e tasso privo di rischio $r$ costante,
$$f_0=e^{-rT}\,\mathbb E^{\mathbb Q}[f_T],$$
dove sotto $\mathbb Q$ il drift è sostituito da $r$: per il GBM $dS_t=rS_t\,dt+\sigma S_t\,dW_t$.

## Formule chiave
Simulazione esatta del sottostante con $\epsilon\sim N(0,1)$:
$$f_T=\max\big\{0,\ S_0e^{(r-\sigma^2/2)T+\sigma\sqrt T\epsilon}-K\big\},\qquad \hat f_0=e^{-rT}\frac1n\sum_{k=1}^nf_T^{(k)} .$$
Riferimento analitico (Black-Scholes-Merton): $C_t^e=S_t\Phi(d_1)-Ke^{-r(T-t)}\Phi(d_2)$, $d_{1,2}=\frac{\log(S_t/K)+(r\pm\sigma^2/2)(T-t)}{\sigma\sqrt{T-t}}$, delta $\Delta=\Phi(d_1)\in[0,1]$.

## Intuizione
Il Monte Carlo serve dove la formula non esiste (opzioni dipendenti dal percorso, modelli diversi dal GBM); il caso vanilla serve a misurare l'errore di campionamento, che scende solo come $1/\sqrt n$ e motiva la riduzione della varianza.

## Come si usa
- Esempio BSM delle slide: $S_0=K=50$, $r=0.1$, $\sigma=0.4$, $T=5/12$: $d_1=0.2905$, $d_2=0.0323$, $\Phi(d_1)=0.6143$, $\Phi(d_2)=0.5129$, $C_0=6.1165$.
- Funzione `BlsMC1` con $S_0=50$, $K=60$, $r=0.05$, $T=1$, $\sigma=0.2$: con 1000 repliche 1.2562, 1.8783, 1.7864; con $10^6$ repliche 1.6295, 1.6164, 1.6141.
- Per opzioni path-dependent si generano traiettorie intere (`AssetPaths`) e si media il payoff scontato.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Pricing financial options by Monte Carlo", poi banco di prova di tutte le tecniche di riduzione della varianza. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/03 - SDEs.pdf` (p. 37-42); `magistrale/Ottimizzazione in condizione di incertezza/04 - VarianceReduction.pdf` (p. 9-10, 15-18, 39-43).

## Prerequisiti
- [[Moto browniano geometrico]]: dinamica del sottostante e simulazione esatta
- [[Valutazione neutrale al rischio]]: prezzo come attesa scontata sotto $\mathbb Q$
- [[Metodo Monte Carlo]]: media campionaria dei payoff

## Porta a
- [[Variabili di controllo]]: la vanilla o l'asiatica geometrica come controllo
- [[Campionamento per importanza]]: opzioni molto out-of-the-money

## Collegati
- [[Formula di Black-Scholes]]: valore esatto per confrontare la stima
- [[Opzioni call e put]]: payoff delle vanilla
- [[Greche]]: sensitività stimate con differenze finite e numeri comuni
