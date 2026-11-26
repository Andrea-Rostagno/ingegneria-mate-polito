---
tipo: competenza
area: network
corsi: [Matematica discreta, Dinamiche su network]
livello: [triennale, magistrale]
aliases: ["tree", "albero", "grafo aciclico connesso", "foglia di un albero", "numero di archi di un albero", "potatura di una foglia", "caratterizzazione degli alberi"]
tags: [competenza, area/network]
---

# Albero (teoria dei grafi)

> Un albero è un grafo connesso senza cicli. Ha sempre almeno due foglie (se ha almeno due nodi) ed esattamente $|V|-1$ archi.

## Definizione / enunciato
**Definizione 5.2.1.** Un grafo connesso senza cicli si chiama **albero**.

**Teorema 5.2.2.** Se $T=(V,E)$ è un albero con $|V|\ge2$, allora $T$ ha almeno due foglie.

*Dimostrazione:* $T$ è finito, quindi esiste un cammino semplice $v_1,\dots,v_k$ di lunghezza massima. Se $v_k$ non fosse una foglia, sarebbe adiacente a un nodo $w\ne v_{k-1}$. Ci sono due casi:
- se $w$ è nel cammino si forma un ciclo, il che è impossibile;
- altrimenti il cammino si allunga, contro la massimalità.

Quindi $v_k$, e allo stesso modo $v_1$, è una foglia.

**Teorema 5.2.3.** Se $T$ è un albero, $|E|=|V|-1$.

*Dimostrazione per induzione su $|V|$:* si toglie una foglia col suo arco (**potatura**), e resta un albero con un nodo e un arco in meno.

**Teorema 5.2.4 (caratterizzazioni).** Sia $G=(V,E)$ un grafo:
- (a1) se $G$ è connesso, $|E|\ge|V|-1$;
- (a2) se $G$ è connesso e $|E|=|V|-1$, $G$ è un albero;
- (b1) se $G$ non ha cicli, $|E|\le|V|-1$;
- (b2) se $G$ non ha cicli e $|E|=|V|-1$, $G$ è un albero.

## Formule chiave
$$T\ \text{albero}\ \Longrightarrow\ |E|=|V|-1;\qquad \text{connesso}+|E|=|V|-1\ \Longrightarrow\ \text{albero};\qquad \text{aciclico}+|E|=|V|-1\ \Longrightarrow\ \text{albero}.$$
Da $|E|=|V|-1$ da sola **non** segue che il grafo sia un albero: il controesempio ha 4 nodi e 3 archi, ma è sconnesso e ha un ciclo (lezione 7; Tilli Fig. 5.4).

## Intuizione
Un albero è il grafo connesso "minimo": togliendo un arco si sconnette, aggiungendone uno si crea un ciclo. Ha esattamente un arco in meno dei nodi.

## Come si usa
- **Dimostrazione di (a1)** (lezione 7): se $G$ è connesso con dei cicli, si toglie un arco da ciascun ciclo. Il grafo resta connesso con gli stessi nodi, e alla fine si ottiene un albero, per cui $|E|\ge|E_{\text{fin}}|=|V|-1$.
- **(a2) per assurdo:** se ci fosse un ciclo, togliendo un arco si otterrebbe un sottografo connesso con $|V|-2$ archi, contro (a1).
- **Alberi e bipartizione:** ogni albero è bipartito. Si dimostra per induzione togliendo una foglia e colorandola col colore opposto a quello del vicino.
- **Planarità:** ogni albero è planare e ha una sola faccia. È il caso base della formula di Eulero.

## Nei corsi
- **Matematica discreta** (triennale): lezione 7, primo tipo notevole di grafo. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/07 - Grafi .pdf` (lezione 7, pp. 7-12, 16-18, 21); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§5.2, Teor. 5.2.2-5.2.4, pp. 89-93).
- **Dinamiche su network** (magistrale): alberi = grafi semplici aciclici (fortemente) connessi, con $n$ nodi e $m=|\mathcal E|/2$ archi non orientati. Teorema: (1) connesso $\Rightarrow m\ge n-1$; (2) se connesso, albero $\Leftrightarrow m=n-1$; (3) un albero ha almeno due foglie; (4) un albero con esattamente due foglie è una linea. Esempi: linea $L_n$ e stella $S_n$ con $n+1$ nodi. Gli alberi sono bipartiti, quindi 2-colorabili. Fonti: `magistrale/Dinamiche su network/slide/Slides-1-Graphs.pdf` (pp. 46-48, 57, 92).

## Prerequisiti
- [[Componenti connesse di un grafo]]: definizioni di connesso e di ciclo
- [[Principio di induzione]]: $|E|=|V|-1$ per induzione sul numero di nodi

## Porta a
- [[Albero generatore]]: un albero che ricopre tutti i nodi di un grafo
- [[Grafo planare]]: la formula di Eulero parte dagli alberi ($f=1$, $e=v-1$)

## Collegati
- [[Spettro dei grafi bipartiti]]: gli alberi sono bipartiti, quindi il loro spettro è simmetrico
- [[Colorazione di un grafo]]: gli alberi hanno numero cromatico 2 (Dinamiche su network)
