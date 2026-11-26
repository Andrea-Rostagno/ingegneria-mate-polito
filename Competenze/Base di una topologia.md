---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni topologia]
livello: [triennale]
aliases: ["basis of a topology", "base topologica", "topologia generata da una base", "base di intorni", "neighbourhood base", "spazio a base numerabile", "second countable", "spazio a base di intorni numerabile", "first countable", "teorema sulle basi"]
tags: [competenza, area/algebra-geometria]
---

# Base di una topologia

> Una famiglia di aperti tale che ogni aperto ne sia unione: permette di definire una topologia assegnando solo "gli aperti elementari" (palle, intervalli, rettangoli).

## Definizione / enunciato
Una **base** di $\tau$ è un $\mathcal B\subseteq\tau$ tale che ogni $A\in\tau$ è unione di elementi di $\mathcal B$ (Def. 2.14).

**Teorema 2.15 (sulle basi).**
1. Sia $\mathcal B\subseteq\mathcal P(X)$ con
   a) $\bigcup_{B\in\mathcal B}B=X$;
   b) se $p\in B_1\cap B_2$ con $B_1,B_2\in\mathcal B$, esiste $B_0\in\mathcal B$ con $p\in B_0\subseteq B_1\cap B_2$.
   Allora esiste un'unica topologia $\tau_{\mathcal B}$ di cui $\mathcal B$ è base.
2. Ogni base di una topologia soddisfa a) e b).

$\tau_{\mathcal B}$ è la topologia meno fine che contiene $\mathcal B$. Una **base di intorni** di $p$ è $\mathcal B_p\subseteq\mathcal U_p$ tale che ogni intorno di $p$ contiene un elemento di $\mathcal B_p$ (Def. 2.17).

## Formule chiave
$$\tau_{\mathcal B}=\{A\subseteq X\mid\forall p\in A\ \exists B\in\mathcal B:\ p\in B\subseteq A\}\cup\{\emptyset\}.$$
- Se $\mathcal B$ è base, $\{B\in\mathcal B\mid p\in B\}$ è base di intorni di $p$; l'unione di basi di intorni di tutti i punti è una base (Prop. 2.18).
- Le palle $B_d(p,r)$ formano una base di $\tau_d$ e $\{B_d(p,1/n)\}$ una base di intorni numerabile di $p$ (Prop. 2.19, 2.22).
- $(\mathbb R^n,\mathcal E_n)$ è **a base numerabile**: basta $\{B(x',r')\mid x'\in\mathbb Q^n,\ r'\in\mathbb Q\}$, in biiezione con $\mathbb Q^{n+1}$ (Prop. 2.23).

## Intuizione
Una base è a una topologia quello che un sistema di generatori è a uno spazio vettoriale: la condizione b) garantisce che le intersezioni finite si possano ancora scrivere come unioni di elementi della base. Le stesse topologie ammettono molte basi diverse.

## Come si usa
- $\{[a,b)\mid a<b\}$ è base di una topologia su $\mathbb R$ più fine di quella euclidea, perché $(a,b)=\bigcup_{k\ge2}[a+\frac{b-a}{k},b)$ (Es. 2.16); con questa topologia $\mathbb R$ è totalmente sconnesso (Es. 6.7).
- Per la continuità basta controllare le controimmagini degli elementi di una base (Prop. 3.5), per l'apertura le immagini (Prop. 3.16), per la compattezza i ricoprimenti fatti di elementi di base (Prop. 5.3).
- Base numerabile implica base di intorni numerabile, non viceversa: la topologia discreta su un insieme più che numerabile ha basi di intorni finite $\{\{p\}\}$ ma nessuna base numerabile (Es. 2.21).

## Nei corsi
- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): il Teorema 2.15 è il punto 2 della lista delle dimostrazioni per l'orale. Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (§2.4, Def. 2.14-2.20, Teor. 2.15, Es. 2.16 e 2.21, Prop. 2.18-2.23, pp. 16-19); `triennale/ANNO 3/istituzioni/topologia/Pejsachwicz (1).pdf` (§7.1; Teor. 7.4: uno spazio a base numerabile è separabile).

## Prerequisiti
- [[Spazio topologico]]: gli elementi della base sono aperti
- [[Insieme numerabile]]: base numerabile tramite Q^(n+1)

## Porta a
- [[Topologia prodotto]]: generata dalla base dei rettangoli aperti
- [[Funzione continua tra spazi topologici]]: continuità verificata su una base

## Collegati
- [[Spazio separabile]]: base numerabile implica separabile (Pejsachowicz Teor. 7.4)
- [[Base e dimensione]]: analogia con i sistemi di generatori
