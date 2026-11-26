---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa, Ottimizzazione in condizione di incertezza]
livello: [triennale, magistrale]
aliases: ["strong duality theorem", "dualità forte", "strong duality", "gap di dualità nullo", "condizione sufficiente di ottimalità globale"]
tags: [competenza, area/ottimizzazione]
---

# Teorema di dualità forte

> Per un problema convesso che soddisfa la condizione di Slater il gap di dualità è nullo: il massimo della funzione duale coincide con l'ottimo primale.

## Definizione / enunciato
**Teorema (dualità forte).** Sia $\min f(\mathbf x)$ s.t. $g_i(\mathbf x)\le0$ ($i\in I$), $\mathbf x\in S$, con valore ottimo $f^*$ finito, $S$ convesso, $f$ e $g_i$ convesse su $S$, e valga la condizione di Slater
$$\exists\hat{\mathbf x}\in S:\ g_i(\hat{\mathbf x})<0\quad\forall i\in I .$$
Allora $w(\boldsymbol\mu^*)=f^*$.

**Teorema (condizione sufficiente di ottimalità globale).** Se $\mathbf x^*$ risolve il problema rilassato per $\boldsymbol\mu^*$, cioè $f(\mathbf x^*)+\boldsymbol\mu^{*T}\mathbf g(\mathbf x^*)=\min_{\mathbf x\in S}f(\mathbf x)+\boldsymbol\mu^{*T}\mathbf g(\mathbf x)$, e valgono ammissibilità primale ($\mathbf x^*\in S$, $\mathbf g(\mathbf x^*)\le\mathbf 0$), ammissibilità duale ($\boldsymbol\mu^*\ge\mathbf 0$) e scarti complementari ($\mu_i^*g_i(\mathbf x^*)=0$), allora $\mathbf x^*$ è ottimo globale per (P).

## Formule chiave
Prova del secondo teorema: dagli scarti complementari $f(\mathbf x^*)\le f(\mathbf x)+\boldsymbol\mu^{*T}\mathbf g(\mathbf x)$ per ogni $\mathbf x\in S$; per $\mathbf x$ ammissibile $\boldsymbol\mu^{*T}\mathbf g(\mathbf x)\le0$, quindi $f(\mathbf x^*)\le f(\mathbf x)$. □

## Intuizione
La condizione di Slater (un punto strettamente ammissibile) è una delle constraint qualification. Il secondo teorema non chiede né convessità né differenziabilità, ma è solo sufficiente: non garantisce di trovare la coppia; non basta una coppia primale-duale ammissibile, servono anche gli scarti complementari.

## Come si usa
Esempio: $\min x_1^2+x_2^2$ s.t. $x_1+x_2\ge4$, $x\ge0$ è convesso e soddisfa Slater: $w(4)=8=f(2,2)$. Nel caso LP la dualità forte vale senza Slater. Il secondo teorema giustifica le euristiche duali: se aggiustando i moltiplicatori il rilassato si avvicina all'ammissibilità con scarti complementari approssimati, si ottengono soluzioni quasi ottime.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap6.pdf` (p. 43, 45, 53-54).
- **Ottimizzazione in condizione di incertezza** (magistrale): stesse slide del capitolo 6 CLUT; la dualità forte LP è l'ipotesi che permette in Benders e L-shaped di sostituire il sottoproblema con il suo duale ($p(\mathbf y)=d(\mathbf y)$, $Q_s(\mathbf x)=D_s(\mathbf x)$) e in SDDP di ricavare i coefficienti dei tagli. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/08 - (Capitolo 6 libro CLUT di Ricerca Operativa) RO_Slide_Chap6.pdf` (p. 43, 45, 53-54); `magistrale/Ottimizzazione in condizione di incertezza/lezione_1.pdf` (p. 46-47, 51); `magistrale/Ottimizzazione in condizione di incertezza/lezione_2.pdf` (p. 22).

## Prerequisiti
- [[Dualità lagrangiana]]: funzione duale e gap
- [[Constraint qualification]]: la condizione di Slater
- [[Problema di ottimizzazione convessa]]: ipotesi di convessità

## Porta a
- [[Dualità nella programmazione lineare]]: versione LP
- [[Rilassamento lagrangiano]]: fondamento delle euristiche duali

## Collegati
- [[Condizioni di Karush-Kuhn-Tucker]]: stesse condizioni di ammissibilità e scarti complementari
