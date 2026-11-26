---
tipo: competenza
area: network
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["spectrum of the cycle graph", "spettro di C_n", "grafo ciclico", "cycle graph", "grafo cammino", "path graph", "spettro di P_n", "2cos(2πj/n)"]
tags: [competenza, area/network]
---

# Spettro del grafo ciclo

> Il ciclo $C_n$ ha autovalori $2\cos(2\pi j/n)$, che si ottengono dalle radici $n$-esime dell'unità. Il cammino $P_n$ ha autovalori $2\cos(\pi k/(n+1))$, tutti semplici.

## Definizione / enunciato
- **Grafo ciclico $C_n$** ($n\ge3$): $n$ nodi collegati in modo da formare un ciclo.
- **Grafo cammino $P_n$**: $n$ nodi collegati in un cammino semplice di lunghezza $n-1$.

**Lemma** (lezione 7). Se $\omega\in\mathbb C$ e $\omega^n=1$, il vettore $x=(1,\omega,\dots,\omega^{n-1})^t$ soddisfa $Ax=(\omega+\omega^{-1})x$. Quindi $\lambda=\omega+\omega^{-1}$ è un autovalore di $C_n$.

Con $\omega_j=e^{i\theta_j}$, $\theta_j=\frac{2\pi}nj$, si ha $\lambda_j=e^{i\theta_j}+e^{-i\theta_j}=2\cos\theta_j$:
$$\Sigma(C_n)=\Big\{2\cos\Big(\frac{2\pi j}{n}\Big):\ j=0,\dots,n-1\Big\}.$$
In Tilli si scrive $A=P+P^t$, con $P$ la matrice della permutazione ciclica.

**$P_n$.** Si ottiene dalle soluzioni di $\omega^{2n+2}=1$, guardando $P_n$ dentro $C_{2n+2}$:
$$\lambda_k=\omega_k+\omega_k^{-1}=2\cos\Big(\frac{k\pi}{n+1}\Big),\qquad k=1,\dots,n,$$
tutti distinti, quindi di molteplicità 1.

## Formule chiave
Proiettando i vertici dell'$n$-agono regolare sull'asse reale e raddoppiando:
- **$n$ dispari:** $-1$ non è radice di $\omega^n=1$, quindi $-2$ non è autovalore. Il massimo 2 è semplice e gli altri autovalori, tutti $>-2$, sono doppi.
- **$n$ pari:** $-1$ è radice, quindi $2$ e $-2$ sono semplici e gli altri, in $(-2,2)$, sono doppi.

## Intuizione
$C_n$ è invariante per rotazione, quindi gli autovettori sono "onde" $\omega^j$ lungo il ciclo, come nella trasformata di Fourier discreta. Ogni nodo ha due vicini, $\omega^{j-1}$ e $\omega^{j+1}$, e da qui viene $\omega+\omega^{-1}$.

## Come si usa
Valori della lezione 7 e di Tilli:
- $C_3$: $(2,-1,-1)$;
- $C_4$: $(2,0,-2,0)$;
- $C_6$: $(2,1,-1,-2,-1,1)$;
- $C_5$: $\lambda_0=2$, $\lambda_1=2\cos\frac{2\pi}5$;
- $P_2=K_2$: $(-1,1)$;
- $P_3=K_{1,2}$: $(-\sqrt2,0,\sqrt2)$;
- $P_4$: $\lambda_k=2\cos\frac{k\pi}5$, $k=1,\dots,4$.

$C_n$ è 2-regolare, e infatti $\lambda=2$ è l'autovalore massimo ed è semplice perché $C_n$ è connesso.

## Nei corsi
- **Matematica discreta** (triennale): lezione 7, dopo $K_n$ e $K_{m,n}$; il cammino $P_n$ verso la fine della lezione. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/07 - Grafi .pdf` (lezione 7, pp. 49-50, 58-59); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (Es. 6.3.6, pp. 135-138; spettro di $P_n$, formula (6.33), p. 149).

## Prerequisiti
- [[Spettro di un grafo]]: si cercano gli autovalori di $A$
- [[Radici n-esime dei numeri complessi]]: $\omega^n=1$ dà gli autovettori

## Porta a
- Nessuno nel corso.

## Collegati
- [[Grafo regolare]]: $C_n$ è 2-regolare con autovalore massimo 2
