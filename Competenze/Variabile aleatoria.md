---
tipo: competenza
area: probabilita
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["random variable", "variabile casuale", "v.a.", "legge di una variabile aleatoria", "distribuzione di X", "law", "variabili equidistribuite", "identicamente distribuite"]
tags: [competenza, area/probabilita]
---

# Variabile aleatoria

> Una funzione misurabile dallo spazio di probabilità a $\mathbb R$: la sua legge è la misura immagine di $\mathbb P$ e trasporta il problema su $(\mathbb R,\mathcal B(\mathbb R))$.

## Definizione / enunciato
Sia $(\Omega,\mathcal F,\mathbb P)$ spazio di probabilità e $(E,\mathcal E)$ spazio misurabile. Una **variabile aleatoria** è una funzione $X:\Omega\to E$ misurabile: $X^{-1}(B)\in\mathcal F$ per ogni $B\in\mathcal E$. V.a. **reale**: $(E,\mathcal E)=(\mathbb R,\mathcal B(\mathbb R))$.
La **legge** (distribuzione) di $X$ è la misura immagine
$$\mathbb P_X(B)=\mathbb P(X^{-1}(B))=\mathbb P(\{\omega:X(\omega)\in B\})=\mathbb P(X\in B),\qquad B\in\mathcal B(\mathbb R),$$
e $(\mathbb R,\mathcal B(\mathbb R),\mathbb P_X)$ è un nuovo spazio di probabilità. Se $\mathbb P_X=\mathbb P_Y$, $X$ e $Y$ sono **equidistribuite**, $X\sim Y$.

## Formule chiave
$X:\Omega\to\mathbb R$ è v.a. $\iff$ $(X\le x)=X^{-1}((-\infty,x])\in\mathcal F$ per ogni $x\in\mathbb R$ (le semirette generano $\mathcal B(\mathbb R)$).

## Intuizione
La misurabilità garantisce di poter calcolare $\mathbb P(X\le x)$ e, in generale, $\mathbb P(X\in B)$. Dopo aver costruito la legge, lo spazio $\Omega$ si può dimenticare: conta solo come la massa di probabilità si distribuisce sui valori.

## Come si usa
Esempi della lezione 8: numero di teste in $n$ lanci di una moneta; primo lancio in cui esce testa; tempo di vita di una lampadina; dimensione di un oggetto. La legge si descrive poi con la funzione di ripartizione, con la densità discreta o con la densità.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezione 8 (appunto manoscritto). Fonte: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione08(19-04-23) (3).pdf` (lezione 8, pp. 2-4). Tabella di corrispondenza teoria della misura / probabilità in `2023Lezione13(01-06-23).pdf` (lezione 13, p. 11).

## Prerequisiti
- [[Funzione misurabile]]: funzione misurabile su $\Omega$
- [[Misura immagine]]: la legge è una misura immagine
- [[Spazio di probabilità]]: dominio della v.a.

## Porta a
- [[Funzione di ripartizione]]: $F(x)=\mathbb P(X\le x)$
- [[Variabile aleatoria discreta]]: legge discreta
- [[Valore atteso]]: media di una v.a.
- [[Variabile aleatoria assolutamente continua]]: legge assolutamente continua

## Collegati
- Nessuno.
