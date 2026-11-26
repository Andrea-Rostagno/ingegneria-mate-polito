---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [call option, put option, opzione call, opzione put, opzione europea, European option, strike, prezzo di esercizio, premio, payoff, profitto di un'opzione, break-even, moneyness, in the money, at the money, out of the money, valore intrinseco, valore temporale, covered call, protective put, leva delle opzioni]
tags: [competenza, area/finanza]
---

# Opzioni call e put

> Contratti che danno il diritto, non l'obbligo, di comprare (call) o vendere (put) il sottostante a un prezzo $K$ alla scadenza $T$: il primo payoff non lineare del corso.

## Definizione / enunciato
Con strike $K>0$ e scadenza $T$ (def. c01-opzione, c07-call-put):
$$\text{call: }\varphi(S_T)=(S_T-K)^+,\qquad\text{put: }\varphi(S_T)=(K-S_T)^+ .$$
Il venditore (writer) ha il payoff opposto (gioco a somma zero). Prezzi $c(t)$, $p(t)$; europea = esercizio solo in $T$.

**Profitto** (def. c07-profitto): payoff meno premio, $\pi_{\text{long call}}=(S_T-K)^+-c$, $\pi_{\text{short put}}=p-(K-S_T)^+$, ecc.; versione capitalizzata $\varphi(S_T)-ce^{rT}$. Pareggi: call lunga $K+c$, put lunga $K-p$.

**Moneyness** (def. c07-moneyness): ITM se l'esercizio immediato dà un flusso positivo ($S>K$ per la call), ATM se $S=K$, OTM altrimenti; **valore intrinseco** $(S-K)^+$ o $(K-S)^+$; **valore temporale** = prezzo − valore intrinseco.

## Formule chiave
Covered call (azione + call corta): payoff $\min\{S_T,K\}$; protective put (azione + put lunga): payoff $\max\{S_T,K\}$ (def. c08-covered-call, c08-protective-put).

## Intuizione
Il possessore perde al più il premio; la call corta ha perdita illimitata. Le opzioni danno **leva**: amplificano gli esiti in entrambe le direzioni. Il payoff non lineare non si replica staticamente: serve un modello per il sottostante.

## Come si usa
Esempi del libro: put con $K=100$, $p=5$, $S_T=98$: payoff 2, profitto $-3$ (esercitare conviene comunque), short $+3$, pareggio 95. Call con $K=240$ a 12: pareggio 252. Leva: con 5800 \$, azione a 29, call $K=30$ a 2.90: a $S_T=40$ le 200 azioni rendono 2200, le 2000 call 14200; a $S_T=25$ le call perdono tutto. Errore frequente: profitto della put corta scritto con $(S_T-K)^+$.

## Nei corsi
- **Financial engineering** (magistrale): cap. 1 §Forward, futures e opzioni; cap. 7 §§Call e put europee, Moneyness; cap. 8 §Un'opzione più il sottostante. Fonti: `Libri/Financial engineering/capitoli/cap01.tex`, `cap07.tex`, `cap08.tex`; lezione d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/25 - lez 17 marzo - opzioni europee call put.pdf`.

## Prerequisiti
- [[Contratto forward]]: confronto tra payoff lineare e non lineare

## Porta a
- [[Parità put-call]]: relazione di non arbitraggio tra $c$ e $p$
- [[Limiti di prezzo delle opzioni]]: vincoli sul prezzo
- [[Opzione americana]]: esercizio in qualunque istante
- [[Bull e bear spread]]: combinazioni di opzioni
- [[Modello binomiale a un periodo]]: prezzo della call per replica
- [[Formula di Black-Scholes]]: prezzo nel modello continuo

## Collegati
- [[Contratto futures]]: altro derivato di borsa
- [[Probabilità di esercizio di un'opzione]]: probabilità che $S_T>K$
