---
tipo: competenza
area: network
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["regular graph", "grafo k-regolare", "k-regular graph", "spettro dei grafi regolari", "vettore degli uni come autovettore"]
tags: [competenza, area/network]
---

# Grafo regolare

> Un grafo è $k$-regolare se tutti i nodi hanno grado $k$. Allora $k$ è l'autovalore massimo, con autovettore il vettore degli 1, e la sua molteplicità è il numero di componenti connesse.

## Definizione / enunciato
**Definizione 6.4.1.** $G$ è **$k$-regolare** se $\deg(v)=k$ per ogni nodo $v$.

**Teorema 6.4.2.** Se $G$ è $k$-regolare, $k$ è un autovalore di $G$ e il vettore $\mathbf 1=(1,\dots,1)^t$ è un autovettore corrispondente.

**Corollario 6.4.4.** Sia $G$ $k$-regolare.
- (a) Se $G$ è connesso, $\lambda=k$ ha molteplicità 1, e ogni autovettore di $k$ è multiplo di $\mathbf 1$.
- (b) In generale, la molteplicità di $\lambda=k$ è il numero delle componenti connesse di $G$.

Inoltre $k$ è l'autovalore massimo (lezione 7), e $G$ è connesso se e solo se $k$ è semplice.

## Formule chiave
$$A\mathbf 1=k\,\mathbf 1,\qquad m_A(k)=\#\{\text{componenti connesse}\}.$$
Dal lemma delle strette di mano, con $n$ nodi si ha $|E|=nk/2$ (conseguenza ricavata qui, non scritta nelle fonti).

## Intuizione
In ogni riga di $A$ ci sono esattamente $k$ uni, quindi $A\mathbf 1=k\mathbf 1$. Se $x$ è un autovettore di $k$ su un grafo connesso, nel nodo dove $x_i$ è massima vale $x_i=$ media dei valori sui vicini. Allora tutti i vicini hanno lo stesso valore, e per connessione $x$ è costante (idea della dimostrazione di Tilli). Ogni componente contribuisce con il proprio vettore indicatore.

## Come si usa
**Esempi** (lezione 7):
- $C_n$ è 2-regolare, con autovalore 2;
- $K_n$ è $(n-1)$-regolare, con autovalore $n-1$;
- $K_{n,n}$ è $n$-regolare, con autovalori $\pm n$.

**Leggere lo spettro.** $\Sigma(K_3\cup C_4)=(-1,-1,2)\cup(-2,0,0,2)=(-2,-1,-1,0,0,2,2)$.
- Il grafo è 2-regolare.
- $\lambda=2$ ha molteplicità 2, quindi le componenti sono 2.

**Escludere la regolarità.** Uno spettro con $\lambda_{\max}=\sqrt2$, che non è intero, non può essere di un grafo regolare, né lo possono essere le sue componenti (esercizio sullo spettro $(-\sqrt2,-\sqrt2,0,0,0,\sqrt2,\sqrt2)$).

## Nei corsi
- **Matematica discreta** (triennale): fine della lezione 7, prima di Perron-Frobenius. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/07 - Grafi .pdf` (lezione 7, pp. 34, 54-55, 58, manoscritto); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§6.4, Def. 6.4.1, Teor. 6.4.2, Cor. 6.4.4, pp. 143-146).

## Prerequisiti
- [[Spettro di un grafo]]: $k$ è un elemento di $\Sigma(G)$
- [[Componenti connesse di un grafo]]: la molteplicità di $k$ le conta

## Porta a
- Nessuno nel corso.

## Collegati
- [[Spettro del grafo completo]]: $K_n$ è $(n-1)$-regolare
- [[Spettro del grafo ciclo]]: $C_n$ è 2-regolare
- [[Teorema di Perron-Frobenius]]: $\lambda_{\max}$ è uguale al grado minimo o massimo solo per componenti regolari
