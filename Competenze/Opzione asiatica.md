---
tipo: competenza
area: finanza
corsi: [Financial engineering, Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: [Asian option, opzione asiatica a media aritmetica, arithmetic average option, call asiatica, put asiatica, opzione dipendente dal percorso, path-dependent option]
tags: [competenza, area/finanza]
---

# Opzione asiatica

> Opzione il cui payoff dipende dalla media dei prezzi osservati: senza formula chiusa, si prezza con il Monte Carlo (o nell'albero seguendo i percorsi) e costa meno dell'europea.

## Definizione / enunciato
Con istanti $0<t_1<\dots<t_N=T$ e media $A=\frac1N\sum_jS_{t_j}$ (def. c18-asiatica): la **call asiatica** a strike fisso paga $(A-K)^+$, la **put** $(K-A)^+$, e
$$C^{\mathrm{as}}=e^{-rT}\mathbb E^{\mathbb Q}\Big[\Big(\frac1N\sum_{j=1}^NS_{t_j}-K\Big)^+\Big],\qquad P^{\mathrm{as}}=e^{-rT}\mathbb E^{\mathbb Q}\Big[\Big(K-\frac1N\sum_jS_{t_j}\Big)^+\Big].$$

## Formule chiave
Volatilità effettiva della media continua del logaritmo: varianza $\sigma^2T/3$, cioè circa $\sigma/\sqrt3$; sotto $\mathbb Q$, $\mathbb E^{\mathbb Q}[A]\approx\frac{S_0}{rT}(e^{rT}-1)$.

## Intuizione
La media smorza i valori estremi: un'opzione su una quantità meno volatile vale meno. Il payoff dipende dal percorso, non solo da $S_T$: due percorsi che arrivano allo stesso prezzo finale possono avere payoff diversi, quindi nell'albero ricombinante non basta guardare i nodi finali.

## Come si usa
Esempi del libro: con $S_0=K=100$, $r=5\%$, $\sigma=20\%$, $T=1$, osservazioni giornaliere e $M=10^5$ traiettorie di Euler-Maruyama: $C^{\mathrm{as}}=5.776\pm0.050$, $P^{\mathrm{as}}=3.342\pm0.033$, europea $10.424\pm0.091$; deviazione standard di $S_T$ 21.2 contro 12.0 di $A$. Per una semiampiezza di 0.01 servono circa $2.5\cdot10^6$ traiettorie. Nell'albero binomiale a due periodi ($S_0=80$, $u=1.5$, $d=0.5$, $r=0$) la call asiatica con $K=80$ vale 20 contro 25 dell'europea.

## Nei corsi
- **Financial engineering** (magistrale): cap. 10 es. c10-asiatica; cap. 18 §Opzioni dipendenti dal cammino, listato lst:c18-asiatica. Fonti: `Libri/Financial engineering/capitoli/cap10.tex`, `cap18.tex`; dispensa `magistrale/Financial engineering/esercitazioni/Discretizzazione SDEs e metodo Monte Carlo.pdf`.
- **Ottimizzazione in condizione di incertezza** (magistrale): asiatica a media aritmetica con payoff $\max\{\frac1N\sum_{i=1}^NS(t_i)-K,0\}$, $t_i=i\,\delta t$, $\delta t=T/N$, prezzata con Monte Carlo (`AsianMC`, traiettorie GBM complete) e usata come banco di prova per le variabili di controllo: somma dei prezzi o asiatica geometrica, quest'ultima con prezzo in forma chiusa (formula di Clewlow-Strickland riportata nelle slide, da verificare sul PDF nei dettagli). Fonti: `magistrale/Ottimizzazione in condizione di incertezza/04 - VarianceReduction.pdf` (p. 21-30).

## Prerequisiti
- [[Valutazione neutrale al rischio]]: prezzo come attesa sotto $\mathbb Q$
- [[Metodo Monte Carlo]]: stima del prezzo
- [[Metodo di Euler-Maruyama]]: simulazione delle traiettorie

## Collegati
- [[Opzioni call e put]]: confronto con la call europea
- [[Modello binomiale multiperiodale]]: prezzo seguendo i percorsi
- [[Variabili di controllo]]: l'asiatica geometrica come controllo dell'aritmetica (Ottimizzazione in condizione di incertezza)
