---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità, Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["support of a distribution", "supp T", "distribuzione a supporto compatto", "distribuzione nulla su un aperto", "equazione xT=0", "equazioni con distribuzioni"]
tags: [competenza, area/analisi]
---

# Supporto di una distribuzione

> Il supporto di $T$ è il complementare del più grande aperto su cui $T$ è nulla; le distribuzioni a supporto compatto si possono applicare a ogni funzione $C^\infty$ e sono quelle per cui la convoluzione è sempre definita.

## Definizione / enunciato
Per una funzione $f\in\mathcal R^1_{loc}$, $N_f$ è l'unione degli intervalli aperti su cui $f$ è nulla e $\mathrm{supp}(f)=(N_f)^c$ (sempre chiuso).
Per $T\in\mathcal D'$: $T$ è **nulla su un aperto $A$** se $\langle T,\varphi\rangle=0$ per ogni $\varphi$ con $\mathrm{supp}(\varphi)\subseteq A$. Se $N_T$ è l'unione degli intervalli aperti su cui $T$ è nulla, $\mathrm{supp}(T)=(N_T)^c$.

## Formule chiave
- Esempio 4.44: $\mathrm{supp}(\delta_{x_0})=\{x_0\}$. Proposizione 4.45: $\mathrm{supp}(T')\subseteq\mathrm{supp}(T)$.
- Teorema 4.46: se $\mathrm{supp}(T)=\{x_0\}$ allora $T=\sum_{i=0}^na_i\,\delta_{x_0}^{(i)}$ (senza dimostrazione; serve la continuità di $T$).
- Proposizione 4.47: se $xT(x)=0$ allora $T=c\,\delta_0$, $c\in\mathbb R$.

## Intuizione
Il supporto è "dove la distribuzione vive". Una distribuzione concentrata in un punto può essere solo una combinazione di delta e delle sue derivate. Il caso $f=\sin x$ (Esempio 4.43) mostra che si guarda agli aperti: il supporto è tutto $\mathbb R$, non $\mathbb R\setminus\{k\pi\}$.

## Come si usa
**Equazioni con distribuzioni** (§4.7.2): per risolvere $xT=0$ si usa la Proposizione 4.47; più in generale si cercano soluzioni particolari e si aggiungono le soluzioni dell'omogenea concentrate negli zeri del coefficiente (estensioni proposte come esercizio nel testo). Il supporto compatto serve per definire la convoluzione e la trasformata di Laplace di distribuzioni (supporto in $[0,+\infty)$).

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §4.7 "Supporto di una distribuzione" (con §4.7.1 a supporto compatto e §4.7.2 equazioni). Fonti: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 4 (1).pdf` (pp. 29-33 del PDF); `10 - Derivata distribuzionale e Convergenza.pdf` (Richiami di teoria).
- **Equazioni alle derivate parziali** (triennale): Def. 5.2.1, $\operatorname{spt}(T)$ è il più piccolo chiuso $C\subset\Omega$ con $\langle T,\varphi\rangle=0$ per ogni $\varphi\in\mathcal D(\Omega\setminus C)$; $\operatorname{spt}\delta_{x_0}=\{x_0\}$, $\operatorname{spt}T_f=\operatorname{spt}f$. Le distribuzioni a supporto compatto $\mathcal D'_c$ sono quelle con cui si definisce la convoluzione (5.17) e la soluzione $U*f$. Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 51, 54-55).

## Prerequisiti
- [[Distribuzione (funzione generalizzata)]]: insieme dove $T$ non è nulla

## Porta a
- [[Convoluzione]]: una delle due deve avere supporto compatto
- [[Trasformata di Laplace di distribuzioni]]: supporto contenuto in $[0,+\infty)$

## Collegati
- [[Delta di Dirac]]: unica soluzione di $xT=0$ a meno di costanti
