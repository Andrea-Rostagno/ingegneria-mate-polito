---
tipo: competenza
area: network
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["Ramsey numbers", "numero di Ramsey", "R(m,n)", "R(3,3) = 6", "teorema di Ramsey", "problema degli amici e nemici"]
tags: [competenza, area/network]
---

# Numeri di Ramsey

> $R(m,n)$ è il minimo numero di persone che garantisce, in ogni gruppo, $m$ amici reciproci oppure $n$ nemici reciproci. Il caso classico $R(3,3)=6$ si dimostra col principio dei cassetti.

## Definizione / enunciato
In un gruppo ogni coppia è formata da due amici o da due nemici, e le relazioni sono reciproche (simmetriche).

**Definizione.** $R(m,n)$ è il minimo $N\in\mathbb N$ tale che in ogni gruppo di $N$ persone c'è sempre un sottogruppo di $m$ amici reciproci oppure uno di $n$ nemici reciproci.

**Applicazione 2 (lezione 4).** In ogni gruppo di 6 persone ci sono almeno 3 amici reciproci oppure almeno 3 nemici reciproci, cioè $R(3,3)\le6$. Inoltre 5 persone non bastano. Nel disegno della lezione le 5 persone sono i vertici di un pentagono: i lati del pentagono sono amicizie e le diagonali inimicizie, e non ci sono 3 amici né 3 nemici reciproci. Quindi $R(3,3)=6$.

## Formule chiave
$$R(3,3)=6,\qquad R(m,n)=R(n,m)\ \text{(simmetria)},\qquad R(m,n)\le R(m-1,n)+R(m,n-1)\quad(m,n\ge2).$$
La lezione 4 osserva che i valori di $R(m,n)$ con $m,n\ge3$ non sono sempre noti: $R(4,4)=18$, mentre $R(5,5)$ è indicato con "?".

## Intuizione
Abbastanza disordine produce sempre un po' d'ordine. Fissata una persona $A$, le altre 5 vanno in due "scatole", amici e nemici. Per i cassetti, una delle due contiene almeno $\lceil5/2\rceil=3$ persone.

## Come si usa
**Dimostrazione di $R(3,3)\le6$.** Si fissa $A$ e si supponga che abbia almeno 3 amici, per esempio $B,C,D$.
- Se due di loro, ad esempio $B$ e $C$, sono amici, allora $A,B,C$ sono 3 amici reciproci.
- Altrimenti $B,C,D$ sono 3 nemici reciproci.

Se invece $A$ ha almeno 3 nemici, si ragiona allo stesso modo scambiando i ruoli.

In termini di grafi: le persone sono i nodi e l'amicizia è un arco. La simmetria della relazione rende il grafo indiretto.

## Nei corsi
- **Matematica discreta** (triennale): chiude la lezione 4 come applicazione del principio dei cassetti. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/04 - Contare con insiemi finiti.pdf` (lezione 4, pp. 33-34, manoscritto). Non è nelle dispense di Tilli.

## Prerequisiti
- [[Principio dei cassetti]]: le 5 relazioni di $A$ vanno in due scatole

## Porta a
- Nessuno nel corso.

## Collegati
- [[Grafo]]: la relazione simmetrica di amicizia è un grafo indiretto
