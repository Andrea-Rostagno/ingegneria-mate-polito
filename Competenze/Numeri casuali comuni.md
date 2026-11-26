---
tipo: competenza
area: numerica
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["common random numbers", "CRN", "stima delle greche con Monte Carlo", "Monte Carlo estimation of Greeks", "delta Monte Carlo", "differenze finite centrate Monte Carlo"]
tags: [competenza, area/numerica]
---

# Numeri casuali comuni

> Per stimare la differenza fra due sistemi simulati si usano gli stessi numeri casuali in entrambi: la correlazione positiva riduce la varianza della differenza. Applicazione tipica: le sensitività (greche) di un'opzione.

## Definizione / enunciato
Si vuole stimare $\mathbb E[X_1-X_2]$, con $X_1$ e $X_2$ uscite di due sistemi che differiscono magari per un solo parametro (es. $h(\alpha)=\mathbb E[f(\alpha;\omega)]$ e la derivata $dh/d\alpha$ approssimata con $[h(\alpha+\delta\alpha)-h(\alpha)]/\delta\alpha$). Dalle repliche $Z_j=X_{1,j}-X_{2,j}$ si costruisce l'intervallo di confidenza.

## Formule chiave
$$\mathrm{Var}(X_{1j}-X_{2j})=\mathrm{Var}(X_{1j})+\mathrm{Var}(X_{2j})-2\,\mathrm{Cov}(X_{1j},X_{2j}),$$
quindi conviene indurre covarianza **positiva** usando lo stesso flusso di numeri casuali (se vale la monotonia). Per il delta di una call si usa la differenza centrata, con lo stesso shock normale $\epsilon$ per $S_0\pm\delta S$:
$$\Delta\approx\mathbb E\Big[\frac{C(S_0+\delta S,\omega)-C(S_0-\delta S,\omega)}{2\,\delta S}\Big],$$
con $C(S_0,\omega)$ payoff scontato della call sulla traiettoria $\omega$.

## Intuizione
Con un incremento piccolo, se i due sistemi usano numeri casuali diversi non si capisce se la differenza osservata è dovuta al parametro o al rumore. Inoltre stimare $\mathbb E[(C(S_0+\delta S)-C(S_0))/\delta S]$ scambia limite e valore atteso, cosa non scontata.

## Come si usa
Esempio delle slide: $S_0=50$, $K=52$, $r=0.05$, $T=5/12$, $\sigma=0.4$, delta esatto (formula di Black-Scholes) 0.5231. Con 50000 repliche e $\delta S=0.5$ lo stimatore ingenuo (differenza in avanti, numeri casuali indipendenti) dà 0.3588 con intervallo $(0.1447,0.5729)$; con differenza centrata e numeri comuni dà 0.5296 con intervallo $(0.5241,0.5350)$.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Common random numbers" ed "Estimating Greeks by Monte Carlo sampling". Fonti: `magistrale/Ottimizzazione in condizione di incertezza/04 - VarianceReduction.pdf` (p. 13-18).

## Prerequisiti
- [[Campionamento antitetico]]: stessa tecnica con correlazione di segno opposto
- [[Pricing di opzioni con Monte Carlo]]: il prezzo di cui si stima la sensitività

## Collegati
- [[Covarianza]]: la covarianza positiva abbassa la varianza della differenza
- [[Quozienti di differenze]]: differenza in avanti contro differenza centrata
