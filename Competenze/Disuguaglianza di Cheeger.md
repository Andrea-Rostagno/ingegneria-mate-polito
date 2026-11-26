---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["Cheeger inequality", "Cheeger's inequality", "bottleneck ratio", "rapporto di strozzatura", "costante di Cheeger", "conduttanza di un grafo", "isoperimetric constant"]
tags: [competenza, area/network]
---

# Disuguaglianza di Cheeger

> Il gap spettrale $1-\lambda_2$ del random walk su un grafo non orientato è compreso tra $\tfrac12\Phi^2$ e $2\Phi$, dove $\Phi$ misura il peggior collo di bottiglia del grafo.

## Definizione / enunciato
$\mathcal G=(\mathcal V,\mathcal E,W)$ connesso non orientato, $P=D^{-1}W$. Per $\mathcal U\subseteq\mathcal V$ con $w_{\mathcal U}=\sum_{i\in\mathcal U}w_i$:
$$\Phi(\mathcal U)=\frac{\sum_{i\in\mathcal U}\sum_{j\in\mathcal V\setminus\mathcal U}W_{ij}}{w_{\mathcal U}},\qquad \Phi_{\mathcal G}=\min_{\mathcal U:\ 0<w_{\mathcal U}\le\frac12\mathbb 1'w}\Phi(\mathcal U)$$
(bottleneck ratio di $\mathcal U$ e di $\mathcal G$).
**Teorema (Cheeger).** Con $\lambda_2$ secondo autovalore di $P$,
$$\tfrac12\Phi_{\mathcal G}^2\le1-\lambda_2\le2\Phi_{\mathcal G}.$$

## Formule chiave
Grafo semplice: $\Phi_{\mathcal G}=\min_{0<w_{\mathcal U}\le\frac12\mathbb 1'w}\dfrac{|\partial_{\mathcal U}|}{w_{\mathcal U}}$, con $\partial_{\mathcal U}=\{(i,j)\in\mathcal E:i\in\mathcal U,j\notin\mathcal U\}$.
- Completo $K_n$: $|\mathcal U|=k\Rightarrow\Phi(\mathcal U)=\frac{k(n-k)}{k(n-1)}=\frac{n-k}{n-1}$, e $\Phi_{K_n}=\tfrac12(1+\tfrac1{n-1})$ per $n$ pari, $\tfrac12(1+\tfrac2{n-1})$ per $n$ dispari.
- Barbell $B_n$: $\Phi_{B_n}=(n^2/4-n/2+1)^{-1}$.

## Intuizione
Se esiste un insieme che comunica poco con il resto (un solo ponte nel barbell), il random walk ci resta intrappolato a lungo e la dinamica mescola lentamente. Cheeger dice che questo è l'unico motivo per cui il gap può essere piccolo, a meno di un quadrato.

## Come si usa
Per stimare velocità di convergenza al consenso e tempi di mescolamento senza calcolare autovalori: si cerca un taglio con poco peso uscente (limite superiore su $1-\lambda_2$) o si dimostra che tutti i tagli sono "larghi" (limite inferiore). Per il barbell $\Phi_{B_n}\sim4/n^2$, quindi $1-\lambda_2\le8/n^2$ circa (stima ricavata qui dalla formula delle slide).

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 6, "Spectral gap and Cheeger inequality". Fonti: `magistrale/Dinamiche su network/slide/Slides-6-Flows-Reversibility.pdf` (pp. 35-36).

## Prerequisiti
- [[Bilancio dettagliato]]: per grafi non orientati $P$ è reversibile con autovalori reali
- [[Velocità di convergenza al consenso]]: ruolo del gap spettrale

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Spettro del grafo completo]]: il completo ha gap massimo
- [[Teorema max-flow min-cut]]: altro modo di misurare i colli di bottiglia con i tagli
