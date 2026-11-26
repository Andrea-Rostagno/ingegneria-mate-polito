---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [replicating portfolio, replica, derivato replicabile, contingent claim raggiungibile, attainable claim, legge del prezzo unico, law of one price, prezzo di non arbitraggio, costo della replica]
tags: [competenza, area/finanza]
---

# Portafoglio replicante

> Portafoglio di titoli il cui valore finale coincide con il payoff di un derivato in ogni scenario: in assenza di arbitraggio il prezzo del derivato è il costo della replica.

## Definizione / enunciato
Un **derivato** con scadenza $T$ paga $X=\varphi(S_T)$ (payoff funzione del prezzo del sottostante). Un portafoglio $h$ **replica** $X$ se $V_h(T)=X$ in ogni scenario; $X$ si dice **replicabile** (raggiungibile).

**Legge del prezzo unico** (prop. c01-prezzo-unico): in un mercato privo di arbitraggio, se due portafogli $A$, $B$ senza flussi intermedi hanno $V_A(T)=V_B(T)$ in ogni scenario, allora $V_A(0)=V_B(0)$; se $V_A(T)\ge V_B(T)$ allora $V_A(0)\ge V_B(0)$.

Conseguenza: il **prezzo di non arbitraggio** di un derivato replicabile è $\Pi(0,X)=V_h(0)$.

## Formule chiave
Replica del forward long (payoff $S_T-K$) con $h=(x,y)$, $x$ = importo nel titolo non rischioso, $y$ = azioni:
$$xe^{rT}+yS_T=S_T-K\ \ \forall S_T\ \Rightarrow\ h=(-Ke^{-rT},\,1),\qquad V_h(0)=S_0-Ke^{-rT}.$$
Il valore è nullo se e solo se $K=S_0e^{rT}=F(0,T)$.

## Intuizione
Se due strategie danno gli stessi flussi futuri, una differenza di prezzo oggi si sfrutterebbe comprando la conveniente e vendendo la cara ("buy cheap, sell dear"). Payoff lineari si replicano **staticamente**; payoff non lineari (opzioni) richiedono un modello per il sottostante e una replica **dinamica**.

## Come si usa
Esempio del libro: $S_0=40$, $r=5\%$, $T=3$ mesi, $F(0,T)=40e^{0.05\cdot0.25}=40.50$. Attenzione: "prezzo = valore atteso scontato del payoff" è falso con le probabilità reali; il prezzo del forward non dipende da quanto ci si aspetta che salga l'azione (vale sotto la misura neutrale al rischio).

## Nei corsi
- **Financial engineering** (magistrale): cap. 1 del libro del corso, def. c01-derivato, c01-replica, prop. c01-prezzo-unico, es. c01-replica-forward. Fonti: `Libri/Financial engineering/capitoli/cap01.tex` §Replica e copertura; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/01 - 24 febbraio a - Lezione_1_Italiano.pdf`, `04 - 25 febbraio - Lesson - no arbitrage pricing.pdf`.

## Prerequisiti
- [[Opportunità di arbitraggio]]: la legge del prezzo unico discende dal non arbitraggio

## Porta a
- [[Prezzo forward]]: replica statica del forward
- [[Modello binomiale a un periodo]]: replica di un payoff non lineare
- [[Mercato completo]]: ogni derivato è replicabile
- [[Formula di Black-Scholes]]: prezzo come costo della replica dinamica

## Collegati
- [[Contratto forward]]: primo derivato replicato
- [[Valutazione neutrale al rischio]]: formula alternativa del prezzo di replica
