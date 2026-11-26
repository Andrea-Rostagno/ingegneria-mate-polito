---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni topologia]
livello: [triennale]
aliases: ["product of connected spaces", "prodotto di connessi", "teorema sui prodotti di connessi", "unione di connessi", "union of connected sets", "connessione di R^n"]
tags: [competenza, area/algebra-geometria]
---

# Prodotto di spazi connessi

> Il prodotto $X\times Y$ è connesso se e solo se lo sono $X$ e $Y$; la dimostrazione si basa su un lemma sulle unioni di connessi che si intersecano.

## Definizione / enunciato
**Lemma 6.13.** Se $A_1,A_2$ sconnettono $X$ ed $E\subseteq X$ è connesso, allora $E\subseteq A_1$ oppure $E\subseteq A_2$.

**Lemma 6.14.** Sia $\{E_i\}_{i\in I}$ una famiglia di connessi tale che
1. $E_i\cap E_j\neq\emptyset$ per ogni $i,j$, oppure
2. esiste $i_0$ con $E_i\cap E_{i_0}\neq\emptyset$ per ogni $i$.
Allora $E=\bigcup_{i\in I}E_i$ è connesso.

**Teorema 6.15.** $(X\times Y,\tau\times\tau')$ è connesso se e solo se $(X,\tau)$ e $(Y,\tau')$ sono connessi.

**Corollario 6.16.** $(\mathbb R^n,\mathcal E_n)$ è connesso per ogni $n$.

## Formule chiave
Fissato $y_0\in Y$:
$$X\times Y=\Big(\bigcup_{x\in X}\{x\}\times Y\Big)\cup\big(X\times\{y_0\}\big),\qquad E_x=\{x\}\times Y,\quad E_0=X\times\{y_0\},\quad E_x\cap E_0=\{(x,y_0)\}\neq\emptyset.$$
$E_x$ ed $E_0$ sono connessi perché omeomorfi a $Y$ e $X$ (Prop. 4.6); si applica il Lemma 6.14 nel caso 2.

## Intuizione
Il prodotto è un "pettine": ogni fibra verticale $\{x\}\times Y$ è connessa e tocca la fibra orizzontale $X\times\{y_0\}$, che le tiene tutte insieme. Nel Lemma 6.14 una sconnessione dovrebbe mettere ogni pezzo tutto da una parte, ma i pezzi si toccano.

## Come si usa
- Il verso "prodotto connesso $\Rightarrow$ fattori connessi" segue dalla continuità e suriettività delle proiezioni (Teor. 6.9).
- Da $\mathbb R$ connesso (Teor. 6.8) segue $\mathbb R^n$ connesso.
- Lo stesso schema vale per la connessione per archi: si congiungono le due coordinate separatamente con $\alpha=(\alpha_1,\alpha_2)$ (Prop. 6.23).

## Nei corsi
- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): punto 13 della lista delle dimostrazioni per l'orale ("teorema sui prodotti di connessi"). Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (§6.3, Lemmi 6.13-6.14, Teor. 6.15, Cor. 6.16, pp. 46-47); `triennale/ANNO 3/istituzioni/topologia/Pejsachwicz (1).pdf` (Teor. 9.7, Prop. 9.8-9.9).

## Prerequisiti
- [[Spazio connesso]]: definizione e immagine continua
- [[Topologia prodotto]]: proiezioni continue e fibre omeomorfe ai fattori

## Porta a
- [[Connessione per archi]]: stesso schema per i prodotti di connessi per archi

## Collegati
- [[Prodotto di spazi compatti]]: risultato analogo per la compattezza
