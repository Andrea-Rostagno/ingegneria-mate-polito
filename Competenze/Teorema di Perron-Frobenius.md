---
tipo: competenza
area: algebra-geometria
corsi: [Matematica discreta, Matematica per l'AI, Dinamiche su network]
livello: [triennale, magistrale]
aliases: ["Perron-Frobenius theorem", "Perron-Frobenius", "autovalore di Perron", "autovalore dominante di una matrice non negativa", "matrice irriducibile", "irreducible matrix", "matrice riducibile", "lambda max di un grafo"]
tags: [competenza, area/algebra-geometria]
---

# Teorema di Perron-Frobenius

> Una matrice quadrata a elementi non negativi ha un autovalore reale non negativo che domina tutti gli altri in modulo, con un autovettore non negativo. Se la matrice è irriducibile, l'autovalore è semplice e l'autovettore strettamente positivo. Per i grafi, irriducibile vuol dire connesso.

## Definizione / enunciato
**Definizione 6.4.9.** Una matrice quadrata $A$ è **riducibile** se esiste una matrice di permutazione $P$ tale che
$$P^tAP=\begin{pmatrix}A_1&A_2\\O&A_3\end{pmatrix},$$
con blocchi quadrati $A_1$ e $A_3$. Altrimenti è **irriducibile**.

**Teorema 6.4.12 (Perron-Frobenius).** Sia $A=(a_{ij})$ quadrata, non necessariamente simmetrica, con $a_{ij}\ge0$. Esiste $\sigma\ge0$ tale che:
- (a) $\sigma$ è un autovalore di $A$ con un autovettore $x$ a componenti $x_i\ge0$;
- (b) $\sigma$ è **dominante**: $|\lambda|\le\sigma$ per ogni autovalore $\lambda$, reale o complesso;
- (c) se $A$ è irriducibile, $\sigma$ ha molteplicità 1 (algebrica e geometrica) e ammette un autovettore con $x_i>0$.

**Oss. 6.4.13.** Se $A$ è la matrice di adiacenza di un grafo, $A$ è riducibile se e solo se il grafo è sconnesso.

## Formule chiave
**Teorema 6.4.14 (versione per i grafi).** Sia $\lambda_{\max}$ l'autovalore di $G$ di modulo massimo.
- (a) $\lambda_{\max}\ge0$ e ha un autovettore non negativo.
- (b) Se $G$ è connesso, $\lambda_{\max}$ è semplice e ha un autovettore strettamente positivo.
- (c) Se $p$ è la molteplicità di $\lambda_{\max}$, $G$ ha almeno $p$ componenti connesse (ma potrebbe averne di più).
- (d) $\displaystyle\min_v\deg(v)\le\lambda_{\max}\le\max_v\deg(v)$.
- (e) Se in (d) vale un'uguaglianza, ogni componente che ha $\lambda_{\max}$ come autovalore è $k$-regolare, con $k$ uguale al grado minimo o massimo.

## Intuizione
Per un grafo, l'autovettore positivo di $\lambda_{\max}$ assegna a ogni nodo un "punteggio" proporzionale alla somma dei punteggi dei vicini: è l'idea, citata nella lezione 1, di ordinare le pagine web in base a chi le collega. La connessione garantisce che il punteggio sia unico, a meno di multipli, e ovunque positivo.

## Come si usa
**Escludere spettri.** $(-6,0,0,2,4)$ non è lo spettro di un grafo, perché $|-6|$ supera il massimo autovalore positivo 4, contro (a) (lezione 7).

**(c) non si inverte.** $C_4\cup K_1$ ha spettro $(-2,0,0,0,2)$: $\lambda_{\max}=2$ ha molteplicità 1, ma le componenti sono 2.

**Dedurre la struttura.** Per $\Sigma=(-\sqrt2,-\sqrt2,0,0,0,\sqrt2,\sqrt2)$:
- $\lambda_{\max}=\sqrt2$ ha molteplicità 2, quindi ci sono almeno 2 componenti;
- non è intero, quindi le componenti che lo contengono non sono regolari.

Il grafo è $P_3\cup P_3\cup K_1$.

## Nei corsi
- **Matematica discreta** (triennale): penultimo argomento della lezione 7, nella versione per grafi indiretti senza cappi. Le dispense danno anche l'enunciato generale per matrici non negative. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/07 - Grafi .pdf` (lezione 7, pp. 55-58, manoscritto); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (Def. 6.4.9, Teor. 6.4.12, Oss. 6.4.13, Teor. 6.4.14, pp. 151-155); `triennale/ANNO 1/Matematica discreta/teoria/01 - Esercizi introduttivi.pdf` (motivazione del ranking, pp. 4-5).
- **Matematica per l'AI** (triennale): negli appunti di De Gregorio, premessa al calcolo di $P^n$: ogni matrice stocastica ha l'autovalore $\mu=1$ (se è unico si parla di Perron-Frobenius), perché $(1,\dots,1)^T$ è autovettore destro ($P\mathbf 1=\mathbf 1$); poiché $|P^T-I|=|P-I|=0$, $\mu=1$ è anche autovalore di $P^T$ e c'è un autovettore sinistro di $P$ associato, in generale diverso da $(1,\dots,1)$: è la distribuzione invariante $\pi P=\pi$. Fonti: `triennale/ANNO 3/matematica AI/De Gregorio Mia 1 (2).pdf` (p. 8-10).
- **Dinamiche su network** (magistrale): enunciato per la matrice dei pesi di un grafo orientato pesato $\mathcal G=(\mathcal V,\mathcal E,W)$: esistono $\lambda_W\ge0$ e vettori non negativi $x,y\neq0$ con $Wx=\lambda_Wx$, $W'y=\lambda_Wy$; ogni autovalore $\mu$ ha $|\mu|\le\lambda_W$; se $\mathcal G$ è connesso $\lambda_W$ è semplice; se è connesso e aperiodico ogni $\mu\neq\lambda_W$ ha $|\mu|<\lambda_W$. $\lambda_W=\rho(W)$ è il raggio spettrale. Specializzato a $P=D^{-1}W$ dà le proprietà delle matrici stocastiche (con l'interpretazione geometrica: $P'$ manda il simplesso delle distribuzioni in sé e ha un punto fisso). Usato per la centralità ad autovettore, per il modello di Leontief ($\rho(W)<1$) e per la soglia SIS $\beta\lambda_W<1$. Fonti: `magistrale/Dinamiche su network/slide/Slides-2-Algebraic-Graphs.pdf` (pp. 32-46, 89); `magistrale/Dinamiche su network/slide/Slides-8-Epidemics+PairwiseInteractingSystems.pdf` (p. 67).

## Prerequisiti
- [[Spettro di un grafo]]: proprietà dell'autovalore massimo
- [[Componenti connesse di un grafo]]: irriducibile se e solo se connesso

## Porta a
- Nessuno nel corso.
- [[Matrice stocastica]]: caso $\lambda_P=1$ e distribuzioni invarianti (Dinamiche su network)
- [[Centralità ad autovettore]]: la centralità è l'autovettore di Perron di $W'$ (Dinamiche su network)
- [[Modello input-output di Leontief]]: ammissibile se e solo se $\rho(W)<1$ (Dinamiche su network)
- [[Epidemia SIS su rete]]: estinzione rapida se $\beta\lambda_W<1$ (Dinamiche su network)

## Collegati
- [[Grafo regolare]]: caso di uguaglianza in $\min\deg\le\lambda_{\max}\le\max\deg$
- [[Misura stazionaria]]: per le catene di Markov finite garantisce l'esistenza di una misura invariante
- [[Classi di comunicazione]]: una catena irriducibile ha matrice di transizione irriducibile
- [[Metodo delle potenze]]: approssima l'autovalore dominante e il suo autovettore
- [[Distribuzione stazionaria di una DTMC]]: autovettore sinistro di $P$ per l'autovalore 1 (Matematica per l'AI)
