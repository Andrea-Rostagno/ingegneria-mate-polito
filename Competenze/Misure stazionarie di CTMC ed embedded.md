---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [stationary measures CTMC vs embedded DTMC, "pi proporzionale ad alpha/lambda", relazione con la catena embedded]
tags: [competenza, area/probabilita]
---

# Misure stazionarie di CTMC ed embedded

> Le misure stazionarie della CTMC e della sua embedded si ottengono l'una dall'altra pesando per il tempo medio di permanenza $1/\lambda(j)$.

## Definizione / enunciato
**Teorema.** Sia la CTMC senza stati assorbenti. $\mu$ è misura stazionaria della embedded ($\mu P=\mu$) se e solo se
$$\gamma(j)=\frac{\mu(j)}{\lambda(j)}\quad\text{soddisfa}\quad \gamma Q=0 .$$
Se inoltre la CTMC è **non esplosiva** e $\sum_j\gamma(j)<\infty$, normalizzando $\gamma$ si ottiene la distribuzione stazionaria della CTMC. Viceversa da $\pi$ si ottiene $\mu(j)=\pi(j)\lambda(j)$, stazionaria per la embedded quando normalizzabile.

## Formule chiave
$$\pi(x)\propto\frac{\alpha(x)}{\lambda(x)},\qquad \tilde\pi(x)\propto\pi(x)\lambda(x).$$
Dimostrazione: $\mu P=\mu\iff\sum_{i\ne j}\gamma(i)\lambda(i)r(i,j)=\gamma(j)\lambda(j)\iff\sum_{i\ne j}\gamma(i)q(i,j)=\gamma(j)\lambda(j)\iff(\gamma Q)(j)=0$.

## Intuizione
La embedded conta le *visite*, la CTMC il *tempo*: ogni visita a $j$ dura in media $1/\lambda(j)$, quindi il peso temporale è visite $\times$ durata media. Per questo le due stazionarie in generale differiscono.

## Come si usa
- Due stati: la embedded ha $\tilde\pi=(1/2,1/2)$; $\gamma=(1/(2\alpha),1/(2\beta))$, $M=\frac{\alpha+\beta}{2\alpha\beta}$, $\pi=\big(\frac{\beta}{\alpha+\beta},\frac{\alpha}{\alpha+\beta}\big)$.
- Es. H(c): da $\pi=(1/5,2/5,2/5)$ e $\lambda=(2,3,2)$ si ha $\mu=(2/5,6/5,4/5)$, quindi $\tilde\pi=(1/6,1/2,1/3)$ senza scrivere la matrice della embedded.
- Corollario d'esistenza: CTMC finita irriducibile ha un'unica stazionaria, costruita da quella (unica) della embedded.
- **Rilevare l'esplosione:** embedded transiente più una distribuzione $\gamma$ con $\gamma Q=0$ implica esplosione.
- La ricorrenza positiva non si trasferisce: es. con tassi $2^j$ (CTMC positiva, embedded nulla) ed es. G (il contrario).

## Nei corsi
- **Processi stocastici** (magistrale): argomento 10 ("misure stazionarie"). Fonti: `magistrale/Processi stocastici/Lezione_12_28_10.pdf` (lezione 12, teorema e corollario), `magistrale/Processi stocastici/Lezione_13_03_11.pdf` (lezione 13), `magistrale/Processi stocastici/Lezione_14_04_11.pdf` (lezione 14), `riassunto_del_corso.tex` §Equazioni di Kolmogorov (notazione $\alpha$ per la misura della embedded; nelle slide $\mu$, $\tilde\pi$), `suggested_exercises_CTMC.pdf` (es. H).

## Prerequisiti
- [[Catena embedded]]: misura stazionaria della catena dei salti
- [[Misura stazionaria]]: pesata per i tempi di permanenza
- [[Distribuzione stazionaria di una CTMC]]: lega le due stazionarie

## Porta a
- —

## Collegati
- [[Esplosione di una CTMC]]: embedded transiente con stazionaria implica esplosione
