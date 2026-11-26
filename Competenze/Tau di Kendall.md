---
tipo: competenza
area: probabilita
corsi: [Prova finale]
livello: [triennale]
aliases: ["Kendall's tau", "tau di Kendall", "indice di concordanza di Kendall", "Kendall's concordance index", "coppie concordanti e discordanti", "concordanza", "concordance", "misura di concordanza", "rank correlation"]
tags: [competenza, area/probabilita]
---

# Tau di Kendall

> Probabilità di concordanza meno probabilità di discordanza fra due coppie estratte: misura di dipendenza basata sui ranghi, funzione della sola copula, usata per stimare i parametri con il metodo dei momenti.

## Definizione / enunciato
**Versione campionaria** (tesi §5.2.4; Pellerey, slide 64). Su $n$ coppie $(x_i,y_i)$, la coppia di osservazioni $i,j$ è *concordante* se $(x_j-x_i)(y_j-y_i)>0$, *discordante* se $<0$, *legata* se $x_i=x_j$ o $y_i=y_j$. Con $C$ concordanti e $D$ discordanti
$$\tau=\frac{C-D}{\binom n2},\qquad \binom n2=\frac{n(n-1)}2 .$$
Forma equivalente (slide 93): $\tau_n=\frac{4}{n(n-1)}P_n-1$, con $P_n$ numero di coppie concordanti.
**Versione di popolazione** (slide 65; Nelsen, Thm 5.1.3): con $(X_1,Y_1),(X_2,Y_2)$ i.i.d.,
$$\tau_{X,Y}=\mathbb P[(X_1-X_2)(Y_1-Y_2)>0]-\mathbb P[(X_1-X_2)(Y_1-Y_2)<0]=4\iint_{[0,1]^2}C(u,v)\,dC(u,v)-1 .$$

## Formule chiave
Relazioni con i parametri (tesi §5.2.5, `formule.ipynb` §6):

| copula | $\tau(\theta)$ | inversione |
|---|---|---|
| gaussiana e t | $\frac2\pi\arcsin\rho$ | $\rho=\sin(\pi\tau/2)$ |
| Clayton | $\theta/(\theta+2)$ | $\theta=2\tau/(1-\tau)$ |
| Gumbel | $1-1/\theta$ | $\theta=1/(1-\tau)$ |
| Frank | $1-\frac4\theta(1-D_1(\theta))$ | numerica |

Archimedee: $\tau=1+4\int_0^1\varphi/\varphi'\,dt$. FGM: $\tau=2\theta/9$ (Pellerey, slide 68).

## Intuizione
$\tau=1$ è concordanza perfetta ($M$), $\tau=-1$ discordanza perfetta ($W$), $\tau=0$ indipendenza. Dipende solo dai ranghi, quindi è invariante per trasformazioni crescenti, esiste anche senza momenti finiti e coglie relazioni monotone non lineari.

## Come si usa
Sulle volatilità rolling del DAX la tesi riporta $\tau=0.6598$ (tab. 5.6, calcolato con `scipy.stats.kendalltau` perché il conteggio diretto delle coppie costa $O(n^2)$). In §5.3.3 dichiara di usare $\tau=0.8708$, ma i parametri della tab. 5.8 si riproducono con $0.6598$: $1/(1-0.6598)=2.9394$ (Gumbel), $2\cdot0.6598/0.3402=3.8789$ (Clayton), $\sin(\pi\cdot0.6598/2)\approx0.8606$ (gaussiana); anche la Frank $\hat\theta=9.7812$ si ottiene risolvendo l'equazione di Debye con $0.6598$, mentre con $0.8708$ tutti i valori sarebbero molto più grandi (per esempio Gumbel $1/(1-0.8708)\approx7.74$). Il controllo è un mio calcolo sui dati della tesi: il valore $0.8708$ citato in §5.3.3 è quasi certamente un refuso (da verificare sul PDF).

## Nei corsi
- **Prova finale** (triennale): definizione, valori, relazione con le famiglie e uso nel metodo dei momenti. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§5.2.4-5.2.6, pp. 49-53; tab. 5.6, p. 72; §5.3.3, p. 75); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/formule.ipynb` (§6); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 63-65, 83, 93); `triennale/ANNO 3/Prove finali/An Introduction to Copulas - Nelsen.pdf` (Thm 5.1.3, Cor. 5.1.4).

## Prerequisiti
- [[Copula]]: $\tau$ dipende solo da $C$
- [[Invarianza delle copule per trasformazioni crescenti]]: misura basata sui ranghi

## Porta a
- [[Metodo dei momenti]]: si eguaglia $\tau(\theta)$ al $\tau$ campionario
- [[Stima delle copule sul DAX]]: valore 0.6598 e stime per inversione

## Collegati
- [[Rho di Spearman]]: altra misura di concordanza basata sui ranghi
- [[Coefficiente di correlazione]]: misura lineare, 0.8873 sugli stessi dati
- [[Copule archimedee]]: $\tau$ dal generatore
- [[Copula gaussiana]]: $\tau=\frac2\pi\arcsin\rho$
