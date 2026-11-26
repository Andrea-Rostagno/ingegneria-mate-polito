---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [put-call parity, parità call-put, parità put call, conversion, forward sintetico, synthetic forward, parità con dividendi]
tags: [competenza, area/finanza]
---

# Parità put-call

> Relazione di non arbitraggio tra i prezzi di una call e di una put europee con stesso strike e scadenza: call lunga + put corta = forward.

## Definizione / enunciato
**Teorema** (teo. c07-parita-put-call): per un titolo senza dividendi fino a $T$, stesso $K$ e stessa $T$, $r$ continuo, in assenza di arbitraggio
$$c-p=S(0)-Ke^{-rT},\qquad c(t)-p(t)=S(t)-Ke^{-r(T-t)}.$$
**Con dividendi** (cor. c07-parita-dividendi): $c-p=S(0)-I-Ke^{-rT}$ con $I$ valore attuale dei dividendi discreti; con dividend yield $c-p=S(0)e^{-qT}-Ke^{-rT}$.

## Formule chiave
Dimostrazione: $(S_T-K)^+-(K-S_T)^+=S_T-K$ in ogni scenario, quindi call lunga + put corta replica il forward con prezzo di consegna $K$, che vale $S_0-Ke^{-rT}$. Equivalentemente $c+Ke^{-rT}=p+S(0)$: entrambi i lati pagano $\max(S_T,K)$.

## Intuizione
Basta il non arbitraggio, nessun modello. Se un lato costa più dell'altro si vende il caro e si compra il conveniente: la tabella dei flussi dà un profitto certo pari alla differenza capitalizzata. Un dividendo abbassa il prezzo futuro dell'azione: aumenta la put e diminuisce la call.

## Come si usa
Esempi del libro: $K=24$, $T=0.5$, $c=5.09$, $p=7.78$, $S=20.37$, $r=7.48\%$: $c+Ke^{-rT}=28.2090>p+S=28.1500$; si compra azione e put, si vende la call e si prende a prestito $23.06$: profitto certo $0.0612$ a scadenza (valore attuale $0.0590$). Tasso implicito: $K=120$, $c=20$, $p=5$, $S=130$: $Ke^{-r}=115$, $r=4.26\%$ (conversion). Con un dividendo di 1.20 a tre mesi, $S=45$, $K=45$, $c=3.10$: $p=3.1740$. La parità serve anche a ricavare la put di Black-Scholes e le relazioni tra le greche di call e put.

## Nei corsi
- **Financial engineering** (magistrale): cap. 7 §La parità put-call, teo. c07-parita-put-call, cor. c07-parita-dividendi. Fonti: `Libri/Financial engineering/capitoli/cap07.tex`; lezione d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/26 - lez 20 marzo - put call parity e bounds.pdf`.

## Prerequisiti
- [[Opzioni call e put]]: oggetti della relazione
- [[Contratto forward]]: call − put = forward
- [[Opportunità di arbitraggio]]: tabella dei flussi

## Porta a
- [[Limiti di prezzo delle opzioni]]: limiti della put dalla call
- [[Butterfly spread]]: confronto dei costi con call e con put
- [[Formula di Black-Scholes]]: prezzo della put dalla call

## Collegati
- [[Portafoglio replicante]]: replica statica del forward
- [[Greche]]: $\Delta_p=\Delta_c-1$ dalla parità
