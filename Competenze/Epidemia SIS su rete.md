---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["SIS epidemics", "modello SIS", "SIS model", "epidemia SIS", "tempo di estinzione", "extinction time", "soglia epidemica", "epidemic threshold", "SIRS epidemics"]
tags: [competenza, area/network]
---

# Epidemia SIS su rete

> Contagio con guarigione e senza immunità: l'epidemia si estingue sempre, ma il tempo di estinzione ha una transizione di fase, logaritmico sotto soglia ed esponenziale in $n$ sopra soglia.

## Definizione / enunciato
Come SI, più orologi di tasso 1 sui nodi: se suona il nodo $i$ e $X_i=I$, allora $X_i$ torna $S$ (guarigione). L'unica configurazione assorbente è $S\mathbb 1$, globalmente raggiungibile: con probabilità 1 l'epidemia si estingue. (Variante SIRS: i rimossi tornano suscettibili quando suona il loro orologio.)
Sul grafo completo $N(t)$ è una nascita-morte continua con $\mu_k=k$, $\lambda_k=\beta k(n-k)$, stato assorbente 0; i tempi $\tau_k=\mathbb E[T_0\mid N(0)=k]$ soddisfano
$$\tau_0=0,\qquad \tau_k=\frac{1+k\tau_{k-1}+\beta k(n-k)\tau_{k+1}}{k+\beta k(n-k)},\qquad \tau_n=\frac1n+\tau_{n-1}.$$

## Formule chiave
**Proposizione** ($K_n$, $\beta=\alpha/n$):
- $\alpha<1\Rightarrow\tau_k\le\tau_n\sim\dfrac{\log n}{1-\alpha}$ (estinzione rapida);
- $\alpha>1\Rightarrow\tau_k\ge\tau_1\sim\dfrac{e^{ng(\alpha)}}{\alpha n}$, con $g(\alpha)=\max_{1/\alpha\le\gamma\le1}(1-\gamma)\log(\alpha\gamma)>0$ (estinzione lenta).
**Grafo generale** (connesso non orientato):
$$\beta\lambda_W<1\ \Longrightarrow\ \mathbb E_x[T_0]\le\frac{1+\log n}{1-\beta\lambda_W}\quad\forall x .$$
L'esistenza di un regime di estinzione lenta dipende da altre proprietà di connettività (studiata ad esempio sui grafi di Erdős-Rényi).

## Intuizione
$\alpha=\beta n$ è il numero medio di contagi prodotti da un infetto prima di guarire. Sotto 1 l'infezione muore in fretta; sopra 1 si stabilizza attorno a una frazione $1-\alpha^{-1}$ di infetti (equilibrio del modello di campo medio) e serve una fluttuazione rarissima per estinguerla.

## Come si usa
Per stabilire se un'epidemia su una rete si spegne in fretta basta confrontare $\beta$ con $1/\lambda_W$: l'autovalore dominante di $W$ fa da soglia epidemica. Sul grafo completo $\lambda_W=n-1$, coerente con la soglia $\beta n\approx1$.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 8, "SIS epidemics", "Extinction time for SIS epidemics on the complete graph", "SIS on general graph"; confronto con il campo medio in Slides 11. Fonti: `magistrale/Dinamiche su network/slide/Slides-8-Epidemics+PairwiseInteractingSystems.pdf` (pp. 11, 19, 64-67); `magistrale/Dinamiche su network/slide/Slides-11-Meanfield.pdf` (pp. 10-13).

## Prerequisiti
- [[Sistemi di interazione a coppie]]: formalismo e configurazioni assorbenti
- [[Catena di nascita e morte continua]]: $N(t)$ sul grafo completo

## Porta a
- [[Modello SIS di campo medio]]: limite ODE per $n\to\infty$

## Collegati
- [[Teorema di Perron-Frobenius]]: $\lambda_W$ come soglia epidemica
- [[Epidemia SI su rete]]: stesso contagio senza guarigione
- [[Probabilità di impatto e tempo medio di impatto]]: tempi di estinzione con l'analisi al primo passo
