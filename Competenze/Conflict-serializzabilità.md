---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["CSR", "conflict equivalence", "conflict-equivalenza", "conflict serializability", "grafo dei conflitti", "conflict graph", "azioni in conflitto"]
tags: [competenza, area/informatica]
---

# Conflict-serializzabilità

> Uno schedule è conflict-serializzabile (CSR) se ha le stesse coppie di azioni in conflitto, nello stesso ordine, di uno schedule seriale; si verifica controllando che il grafo dei conflitti sia aciclico.

## Definizione / enunciato
L'azione $A_j(x)$ è **in conflitto** con $A_i(x)$ ($i\ne j$) se operano sullo stesso oggetto $x$ e almeno una delle due è una scrittura: conflitti lettura-scrittura (RW o WR) e scrittura-scrittura (WW), senza un'altra scrittura $w_k(x)$ in mezzo. Due schedule sono **conflict-equivalenti** se hanno lo stesso insieme di conflitti e ogni coppia in conflitto compare nello stesso ordine. **CSR** = schedule conflict-equivalenti a qualche schedule seriale.

**Grafo dei conflitti**: un nodo per transazione, un arco $T_i\to T_j$ se esiste almeno un conflitto tra un'azione $A_i$ di $T_i$ e $A_j$ di $T_j$ con $A_i$ che precede $A_j$. **Lo schedule è CSR se e solo se il grafo è aciclico** (le slide enunciano il "se"); il controllo della ciclicità è lineare nella dimensione del grafo.

## Formule chiave
$$\text{CSR}\subset\text{VSR}$$
Esempio delle slide: $S=w_0(x)\,r_1(x)\,w_0(z)\,r_1(z)\,r_2(x)\,r_3(z)\,w_3(z)\,w_1(x)$ è conflict-equivalente a $S_s=w_0(x)\,w_0(z)\,r_2(x)\,r_1(x)\,r_1(z)\,w_1(x)\,r_3(z)\,w_3(z)$, quindi CSR (grafo senza cicli).

## Intuizione
Solo le coppie in conflitto vincolano l'ordine: tutto il resto si può scambiare liberamente. Se i vincoli formano un ciclo, nessun ordine seriale li rispetta tutti.

## Come si usa
Esercizio tipico: costruire il grafo dei conflitti di uno schedule e dire se è CSR. Limite pratico (stima delle slide): con 100 tps, transazioni di circa 5 s che accedono a circa 10 pagine, il grafo ha $100\times5=500$ nodi e ad ogni accesso ($500\times10\approx5000$ accessi) va aggiornato e ricontrollato per i cicli. Per questo i DBMS reali usano il locking a due fasi, che genera solo schedule CSR. Esistono schedule VSR ma non CSR (inclusione stretta).

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "Conflict equivalence", grafo dei conflitti, "VSR versus CSR". Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/06 - 17-ConcurrencyControl_new.pdf` (pp. 30-37).

## Prerequisiti
- [[View-serializzabilità]]: classe più ristretta e verificabile in tempo lineare

## Porta a
- [[Locking a due fasi]]: 2PL genera schedule CSR

## Collegati
- Nessuno.
