---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali, Equazioni di fisica matematica]
livello: [triennale]
aliases: ["well-posedness", "problema ben posto secondo Hadamard", "Hadamard well-posedness", "esempio di Hadamard", "dipendenza continua dai dati iniziali"]
tags: [competenza, area/analisi]
---

# Buona positura secondo Hadamard

> Un problema per un'EDP è "buono" se ha almeno una soluzione, questa è unica e dipende con continuità dai dati: è il criterio adatto alla modellistica.

## Definizione / enunciato
Un problema con condizioni al contorno
$$F(x,D^\alpha u)=0\ \text{in }\Omega,\ |\alpha|\le k,\qquad \mathcal B(D^\beta u)=0\ \text{su }\partial\Omega,\ |\beta|<k\qquad(2.8)$$
si dice **ben posto secondo Hadamard** (Def. 2.3.3) se:
1. ammette (almeno) una soluzione;
2. la soluzione è unica;
3. la soluzione dipende con continuità dai dati iniziali.

## Formule chiave
Dipendenza continua per Laplace con dato di Dirichlet ($-\Delta u=0$ in $\Omega$, $u=g$ su $\partial\Omega$, (2.11)): se $g\in C^0(\partial\Omega)$ e $u\in C^2(\Omega)$ è soluzione, si chiede che esista $C>0$ con
$$\|u\|_\infty\le C\|g\|_\infty .\qquad(2.12)$$
Per il problema di Poisson (2.13) si applica alla differenza $u=u_1-u_2$ delle soluzioni con dati $g_1,g_2$ vicini in $\|\cdot\|_\infty$.

**Esempio 2.3.4 (Hadamard).** $-\Delta u=0$ in $\mathbb R\times\mathbb R^+$, $u(x,0)=\frac{\sin(nx)}n$, $\partial_yu(x,0)=0$: la soluzione è
$$u_n(x,y)=\frac1n\sin(nx)\cosh(ny).$$
Il dato tende a zero uniformemente per $n\to\infty$, ma per $n$ dispari e $x=\pi/2$ la soluzione esplode esponenzialmente: manca la dipendenza continua.

## Intuizione
Esistenza e unicità non bastano: se dati "vicini" producono soluzioni lontanissime, piccoli errori di misura rendono il modello inutilizzabile. Il problema di Cauchy (dato e derivata normale) per l'equazione di Laplace è l'esempio classico di problema mal posto.

## Come si usa
Lo schema per dimostrare la buona positura di un problema lineare: esistenza (formula esplicita, Lax-Milgram), unicità e stabilità applicando una stima alla differenza di due soluzioni. Le condizioni al bordo possono anche imporre una **compatibilità** sui dati (Es. 2.3.2: per Neumann serve $\int_\Omega f=\int_{\partial\Omega}g$ come scritto nella fonte, segno da verificare sul PDF, e la soluzione è unica solo a meno di costanti).

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): §2.3 "Buona positura secondo Hadamard" (Def. 2.3.3, (2.11)-(2.13), Es. 2.3.2 e 2.3.4). Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 12-15).
- **Equazioni di fisica matematica** (triennale): definizione data per un "problema matematico" qualsiasi: ben posto se valgono contemporaneamente (i) esistenza, (ii) unicità, (iii) dipendenza continua dai dati; se manca anche una sola condizione è **mal posto**. Viene subito dopo la stima $\|y-x\|_\infty\le(1+LTe^{LT})\|y_0-x_0\|$ per i problemi di Cauchy delle ODE, ottenuta con il lemma di Grönwall. Fonte: `triennale/ANNO 3/eq fisica matematica/03 - Lezione 06_10_23.pdf` (p. 6).

## Prerequisiti
- [[Equazione alle derivate parziali]]: il problema (2.8) è un'EDP con dati al bordo
- [[Problema ai limiti]]: tipi di condizioni al contorno

## Porta a
- [[Principio del massimo per le funzioni armoniche]]: dà unicità e la stima di stabilità

## Collegati
- [[Condizionamento dei problemi di Cauchy]]: dipendenza continua dai dati nel caso delle ODE
- [[Problema di Dirichlet per l'equazione di Poisson]]: esempio di problema ben posto
