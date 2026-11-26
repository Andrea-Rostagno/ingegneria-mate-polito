---
tipo: competenza
area: algebra-geometria
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["product rule (counting)", "principio moltiplicativo", "prodotto cartesiano", "Cartesian product", "cardinalità del prodotto cartesiano", "numero di funzioni tra insiemi finiti", "numero di funzioni iniettive"]
tags: [competenza, area/algebra-geometria]
---

# Regola del prodotto

> Se costruire un oggetto richiede una successione di passi, e il passo $i$ si può fare in $p_i$ modi, allora gli oggetti sono $p_1p_2\cdots p_k$. Il caso più semplice è $|A\times B|=|A|\cdot|B|$.

## Definizione / enunciato
- **Prodotto cartesiano** (Tilli, Def. 1.2.4): $A\times B$ è l'insieme delle coppie **ordinate** $(a,b)$ con $a\in A$, $b\in B$. Se $A$ o $B$ è vuoto, $A\times B=\emptyset$. In generale $A\times B\ne B\times A$.
- **Teorema 1.2.6.** Se $A$ e $B$ sono finiti, $|A\times B|=|A|\cdot|B|$, e più in generale $|A_1\times\dots\times A_n|=|A_1|\cdots|A_n|$.
- **Regola del prodotto generalizzata** (lezione 4, Tilli §1.3). Gli elementi di $A$ si costruiscono con $k$ passi successivi, dove il passo $i$ si può eseguire in $p_i$ modi e scelte diverse danno elementi diversi. Allora $|A|=p_1p_2\cdots p_k$. A differenza del prodotto cartesiano, le scelte disponibili a un passo possono dipendere da quelle già fatte: conta solo il loro numero.

## Formule chiave
$$\#\{f:X_k\to Y_n\}=n^k,\qquad \#\{f:X_k\to Y_n\ \text{iniettive}\}=n(n-1)\cdots(n-k+1)=\frac{n!}{(n-k)!},\qquad \#\text{permutazioni}=n!.$$

## Intuizione
Ogni passo moltiplica il numero di possibilità. Le funzioni $X_k\to Y_n$ sono $n^k$ perché una funzione è la $k$-upla delle immagini, cioè un elemento di $Y_n^k$. Se la funzione deve essere iniettiva, a ogni passo resta un'immagine in meno.

## Come si usa
Esempi della lezione 4:
- parole di lunghezza $k$ sull'alfabeto italiano di 21 lettere: $21^k$;
- **permutazioni** di $\{1,2,3,4,5\}$, cioè biiezioni dell'insieme in sé: si sceglie $f(1)$ in 5 modi, $f(2)$ in 4 modi e così via, per un totale di $5!=120$;
- 10 cappelli diversi, uno diverso ogni giorno per 7 giorni: $10\cdot9\cdot8\cdot7\cdot6\cdot5\cdot4$ modi;
- podio di una gara con 30 partecipanti: $30\cdot29\cdot28$ classifiche (disposizioni senza ripetizione).

## Nei corsi
- **Matematica discreta** (triennale): lezione 4, subito dopo la regola della somma. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/04 - Contare con insiemi finiti.pdf` (lezione 4, pp. 2-8); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§1.2-1.3, pp. 8-14, Es. 1.3.1).

## Prerequisiti
- [[Regola della somma]]: dimostra $|A\times B|$ spezzando in righe

## Porta a
- [[Calcolo combinatorio]]: permutazioni, disposizioni e combinazioni
- [[Insieme delle parti]]: due scelte (dentro o fuori) per ogni elemento
- [[Permutazioni con ripetizione]]: si permutano i blocchi uno alla volta

## Collegati
- [[Funzioni iniettive e suriettive]]: conta le funzioni iniettive fra insiemi finiti
