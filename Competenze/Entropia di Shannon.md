---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [Shannon entropy, entropia dell'informazione, information entropy, H(k), equivocazione, equivocation, key equivocation, entropia condizionale, conditional entropy, entropia della chiave]
tags: [competenza, area/informatica]
---

# Entropia di Shannon

> $H(X)=-\sum\Pr\log_2\Pr$ misura in bit l'incertezza di una variabile aleatoria discreta. In crittografia si applica a chiave, messaggio e crittogramma, e le sue versioni condizionate (equivocazioni) misurano cosa resta incerto dopo l'intercettazione.

## Definizione / enunciato
**Entropia della chiave** (`Critto_week2.pdf` §2.2.3):
$$H(k):=-\sum_{k_0\in\mathcal K}\Pr[k=k_0]\log_2\Pr[k=k_0],$$
con la convenzione $0\log_20=0$, coerente con $\lim_{x\to0}x\log_2x=0$. È la speranza di $-\log_2\Pr[k]$. Le entropie $H(P)$ e $H(C)$ si definiscono allo stesso modo.

**Entropia condizionale ed equivocazioni.** Una volta intercettato $C_0$:
$$H(k\mid C=C_0):=-\sum_{\mathcal K}\Pr[k\mid C=C_0]\log_2\Pr[k\mid C=C_0].$$
La media di queste entropie dà l'**equivocazione della chiave** e quella del messaggio:
$$H(k\mid C):=-\sum_{\mathcal K\times\mathcal C}\Pr[(k,C)]\log_2\Pr[k\mid C],\qquad H(P\mid C):=-\sum_{\mathcal P\times\mathcal C}\Pr[(P,C)]\log_2\Pr[P\mid C].$$

## Formule chiave
$$0\le H(k)\le\log_2|\mathcal K|;\qquad H(k\mid C)=H(k)+H(P)-H(C);\qquad H(k)\ge H(k\mid C)$$
- $H(k)=0$ se e solo se una chiave ha probabilità 1;
- $H(k)=\log_2|\mathcal K|$ se e solo se $k$ è uniforme (esercizio 2.2.17).

## Intuizione
È il numero medio di bit necessari a codificare la chiave. Il caso motivante è $\Pr[k=k_0]=2^{-\mathrm{length}(k_0)}$: la parola $k_0$ costa esattamente $\mathrm{length}(k_0)$ bit. Una mappa iniettiva da $\mathcal K$ alle stringhe binarie si chiama **codifica**; le più note sono quella di Fano-Shannon e quella di Huffman.

Attenzione: un'entropia alta non basta. Nell'esercizio 2.2.18 ($\mathcal K=\mathbb Z_2^{100}$, $\Pr[k=0]=1/2$) l'attaccante trova la chiave una volta su due, ma l'entropia non è bassa. Per questo il NIST SP800-90B usa misure diverse.

## Come si usa
- **Esempio 2.2.19:** $\mathcal K=\{[0,0],[0,1],[1,0],[0,0,0],[0,0,1]\}$ con probabilità $2^{-2},2^{-2},2^{-2},2^{-3},2^{-3}$. Allora $H(k)=3\cdot\frac14\cdot2+2\cdot\frac18\cdot3=\frac94=2{,}25$.
- **Esercizio 2.2.20**, sul cifrario dell'esempio 2.2.1: $H(k)\approx0.16$, $H(P)\approx1.20$, $H(C)\approx1.23$.
- **Esercizio 2.2.22:** la segretezza perfetta equivale a $H(P\mid C)=H(P)$.

## Nei corsi
- **Crittografia** (magistrale): lezione 2, dentro la teoria di Shannon. Fonte: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week2.pdf` (Critto 2, pp. 17-20).

## Prerequisiti
- [[Valore atteso]]: $H$ è la speranza di $-\log_2\Pr$
- [[Variabile aleatoria discreta]]: chiave, messaggio e crittogramma sono v.a. discrete
- [[Probabilità condizionata]]: per l'equivocazione

## Porta a
- [[Distanza di unicità]]: si stima azzerando $H(k\mid C^N)$

## Collegati
- [[Segretezza perfetta]]: equivale a $H(P\mid C)=H(P)$
- [[Entropia]]: contrasto, l'entropia termodinamica è un concetto fisico diverso
- [[Indice di coincidenza]]: altra misura statistica della lingua
