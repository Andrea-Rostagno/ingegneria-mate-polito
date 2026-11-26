---
tipo: competenza
area: network
corsi: [Matematica discreta, Dinamiche su network]
livello: [triennale, magistrale]
aliases: ["bipartite graphs and spectrum", "spettro simmetrico", "symmetric spectrum", "bipartito se e solo se nessun ciclo dispari", "caratterizzazione dei grafi bipartiti", "alberi bipartiti", "spettro degli alberi"]
tags: [competenza, area/network]
---

# Spettro dei grafi bipartiti

> Un grafo è bipartito se e solo se non ha cicli di lunghezza dispari, e se e solo se il suo spettro è simmetrico rispetto all'origine. Gli alberi sono bipartiti.

## Definizione / enunciato
Un grafo è **bipartito** se $V=V_1\sqcup V_2$ e ogni arco ha un estremo in $V_1$ e uno in $V_2$. La partizione non è sempre unica, e capire se un grafo è bipartito non è sempre facile.

**Teorema 5.3.7** (Tilli).
- (i) Ogni albero è bipartito.
- (ii) Un grafo bipartito non ha cicli di lunghezza dispari.
- (iii) Un grafo è bipartito se e solo se non ha cicli di lunghezza dispari.

**Teorema 6.3.10.** $G$ è bipartito se e solo se il suo spettro è simmetrico rispetto all'origine: se $\lambda\in\Sigma(G)$ allora $-\lambda\in\Sigma(G)$, con la stessa molteplicità.

## Formule chiave
Numerando prima $V_1$ ($|V_1|=p$) e poi $V_2$ ($|V_2|=q$):
$$A=\begin{pmatrix}O_p&B\\B^t&O_q\end{pmatrix},\qquad A\begin{pmatrix}u\\v\end{pmatrix}=\lambda\begin{pmatrix}u\\v\end{pmatrix}\ \Rightarrow\ A\begin{pmatrix}u\\-v\end{pmatrix}=-\lambda\begin{pmatrix}u\\-v\end{pmatrix}.$$

## Intuizione
In un grafo bipartito ogni passo cambia lato, quindi si torna al punto di partenza solo con un numero pari di passi. Cambiare segno alle coordinate di un lato inverte il segno dell'autovalore.

## Come si usa
**Dimostrazione del Teorema 6.3.10.**
- *(spettro simmetrico ⇒ bipartito).* Per $p$ dispari, $\operatorname{tr}A^p=\sum\lambda_i^p=0$ perché i termini si cancellano a coppie. Quindi non ci sono percorsi chiusi di lunghezza dispari, in particolare non ci sono cicli dispari, e il grafo è bipartito per 5.3.7(iii).
- *(bipartito ⇒ simmetrico).* Si usa la struttura a blocchi: da $Bv=\lambda u$ e $B^tu=\lambda v$ segue che $(u,-v)$ è autovettore per $-\lambda$.

**Alberi bipartiti, per induzione** (lezione 7): si toglie una foglia $v$ col suo arco $(v,w)$, si 2-colora il resto e si dà a $v$ il colore opposto a quello di $w$.

**Esempi.** $K_{m,n}$, $C_4$, $P_n$ hanno spettri simmetrici. $K_3$ ha spettro $(-1,-1,2)$, non simmetrico: contiene un triangolo.

**Alberi** (Tilli Teor. 6.4.17, solo nelle dispense):
- lo spettro di un albero con $n$ nodi è simmetrico;
- $\sum\lambda_i^2=2n-2$;
- l'autovalore massimo è semplice.

## Nei corsi
- **Matematica discreta** (triennale): la caratterizzazione con i cicli dispari è nella prima parte della lezione 7 (insieme a "relazione fra bipartiti, completi e alberi"), quella spettrale alla fine. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/07 - Grafi .pdf` (lezione 7, pp. 14-18, 52-53); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (Teor. 5.3.7, pp. 95-98; Teor. 6.3.10, pp. 140-141; Teor. 6.4.17, p. 158).
- **Dinamiche su network** (magistrale): solo la caratterizzazione combinatoria, senza spettro: $\mathcal G=(\mathcal V_1\cup\mathcal V_2,\mathcal E)$ con $\mathcal E\subseteq(\mathcal V_1\times\mathcal V_2)\cup(\mathcal V_2\times\mathcal V_1)$; un grafo semplice è bipartito se e solo se non ha cicli di lunghezza dispari. Esempi: alberi, griglie $L_n\times L_m$, ipercubi, prodotti di bipartiti, anelli $R_n$ con $n$ pari. Collegamenti col resto del corso: un bipartito ha numero cromatico 2 e periodo 2; nel gioco di minoranza il potenziale raggiunge $|\mathcal E|/2$ se e solo se il grafo è bipartito. Fonti: `magistrale/Dinamiche su network/slide/Slides-1-Graphs.pdf` (pp. 55-57, 92); `magistrale/Dinamiche su network/slide/Slides-10-NetworkGames.pdf` (p. 38).

## Prerequisiti
- [[Spettro di un grafo]]: simmetria dello spettro
- [[Potenze della matrice di adiacenza]]: $\operatorname{tr}A^p$ conta i percorsi chiusi di lunghezza $p$

## Porta a
- Nessuno nel corso.
- [[Colorazione di un grafo]]: bipartito equivale a numero cromatico 2 (Dinamiche su network)
- [[Gioco di colorazione]]: il gioco di minoranza raggiunge il massimo potenziale solo sui bipartiti (Dinamiche su network)

## Collegati
- [[Albero (teoria dei grafi)]]: ogni albero è bipartito
- [[Grafo planare]]: $K_{m,n}$ non ha triangoli e soddisfa la condizione $e\le2v-4$
