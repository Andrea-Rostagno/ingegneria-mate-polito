---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [forward contract, contratto a termine, forward, posizione long, posizione short, prezzo di consegna, delivery price, valore di un forward, V_F(t)]
tags: [competenza, area/finanza]
---

# Contratto forward

> Accordo, senza pagamento iniziale, per comprare o vendere un'attività a una data futura $T$ a un prezzo $K$ fissato oggi; payoff lineare nel prezzo del sottostante.

## Definizione / enunciato
Un **forward** con scadenza $T$ obbliga la parte **long** a comprare e la parte **short** a vendere il sottostante in $T$ al prezzo di consegna $K$ (def. c01-forward, c05-forward). Payoff per unità:
$$\text{long: }S_T-K,\qquad\text{short: }K-S_T .$$
Il **prezzo forward** $F(0,T)$ è il valore di $K$ che rende nullo il contratto alla stipula; $F(t,T)$ è il prezzo forward di un contratto con la stessa scadenza stipulato in $t$.

**Valore di un forward già stipulato** (prop. c05-valore-forward):
$$V_F(t)=\big[F(t,T)-K\big]e^{-r(T-t)},$$
con $V_F(0)=0$ se $K=F(0,T)$ e $V_F(T)=S(T)-K$; senza redditi $V_F(t)=S(t)-Ke^{-r(T-t)}$.

## Formule chiave
$$V_F(t)=\big[F(t,T)-K\big]e^{-r(T-t)}.$$

## Intuizione
Payoff e profitto coincidono, perché entrare non costa nulla. Il valore si dimostra per arbitraggio: un nuovo forward short stipulato oggi a $F(t,T)$ chiude la posizione e lascia la differenza certa $F(t,T)-K$ in $T$. Tre oggetti diversi: prezzo forward corrente $F(t,T)$, prezzo di consegna $K$ (fisso), valore $V_F(t)$ (nullo solo alla stipula).

## Come si usa
Esempio del libro (lezione): short forward su 100000 sterline a $1.5000$: con cambio finale $1.4900$ si guadagnano 1000 \$, con $1.5200$ se ne perdono 2000; la controparte long ha esiti opposti. Domande tipiche: "prezzo forward" ($F(t,T)$) e "valore del contratto" ($V_F(t)$) sono domande diverse; per un titolo senza redditi il valore si ottiene direttamente da $V_F(t)=S(t)-Ke^{-r(T-t)}$.

## Nei corsi
- **Financial engineering** (magistrale): cap. 1 §Forward, futures e opzioni; cap. 5 §§Il contratto forward, Valore di un forward già stipulato. La lezione scrive $X$ per il prezzo di consegna, Hull $f$ per il valore. Fonti: `Libri/Financial engineering/capitoli/cap01.tex`, `cap05.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/16 - lez 06 marzo e - forward contratti.pdf`, `18 - lez 10 marzo b - forward price.pdf`.

## Prerequisiti
- [[Portafoglio replicante]]: il forward si replica staticamente

## Porta a
- [[Prezzo forward]]: valore di $K$ di non arbitraggio
- [[Contratto futures]]: versione standardizzata in borsa
- [[Parità put-call]]: call lunga + put corta = forward

## Collegati
- [[Opzioni call e put]]: payoff non lineari a confronto
- [[Tasso forward]]: tasso bloccato oggi per un periodo futuro
