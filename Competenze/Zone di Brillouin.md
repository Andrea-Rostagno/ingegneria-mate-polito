---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["Brillouin zones", "prima zona di Brillouin", "reticolo reciproco", "reciprocal lattice", "schema a zone ridotte", "condizioni periodiche al contorno"]
tags: [competenza, area/fisica]
---

# Zone di Brillouin

> Poiché in un cristallo $E(k)$ e $\Psi$ sono periodiche in $k$ con il passo del reticolo reciproco, tutta l'informazione sull'elettrone sta nella prima zona di Brillouin $-\pi/a\le k_x\le\pi/a$.

## Definizione / enunciato
In una catena di atomi a distanza $a$ gli atomi si raggiungono con il vettore di traslazione $\vec R=n\vec a$ (reticolo diretto). La relazione di Kronig-Penney contiene $\cos(k_xa)$, invariante per $k_x\to k_x+2n\pi/a$: $E$-$k$ è periodica con passo $G_x$ (reticolo reciproco), e stati con $k_x$ che differiscono di $G_x$ sono equivalenti. I gap si aprono a $k_x=n\pi/a$, dove $|\cos k_xa|=1$. Rappresentazioni: schema a zone periodiche, ridotte (solo la prima zona), estese (si vede lo scostamento dalla parabola libera). **Solido finito:** imponendo $\Psi(x)=\Psi(x+L)$ con $L=Na$, $k_x$ diventa discreto con passo $2\pi/L$, e ogni stato ospita due elettroni con spin opposto.

## Formule chiave
$$P\frac{\sin(\alpha a)}{(\alpha a)}+\cos(\alpha a)=\cos(k_xa),\qquad P=\frac{mab}{\hbar^2}V_0,\qquad \alpha=\sqrt{\frac{2m}{\hbar^2}E}$$
$$\cos(k_xa)=\cos\left(k_x+\frac{2n}{a}\pi\right)a,\qquad G_x=\frac{2n}{a}\pi,\qquad \Psi(k_x,x)=\Psi(k_x+G,x)$$
$$E=\frac{\hbar^2}{2m}\left(k_x+\frac{2n}{a}\pi\right)^2\ \text{(elettrone libero ripiegato)},\qquad k_x=n\frac{\pi}{a}\ \text{(bordi dei gap)}$$
$$e^{ik_xNa}=e^{ik_xL}=1\ \Rightarrow\ k_x=n_x\frac{2\pi}{L}$$
In 3D:
$$\Psi_{\vec k}(\vec r)=u_{\vec k}(\vec r)e^{i\vec k\cdot\vec r},\quad V(\vec r+\vec R)=V(\vec r),\quad \Psi_{\vec k+\vec G}=\Psi_{\vec k}$$
$$\vec R=n_1\vec t_1+n_2\vec t_2+n_3\vec t_3,\quad \vec G=h_1\vec b_1+h_2\vec b_2+h_3\vec b_3,\quad \vec b_1=\frac{\vec t_2\times\vec t_3}{\vec t_1\cdot\vec t_2\times\vec t_3}$$
($\vec b_2,\vec b_3$ per permutazioni cicliche).

## Intuizione
Lo stato dell'elettrone è fissato da due "spazi": $x$ nel reticolo diretto e $k$ nel reticolo reciproco. Come un segnale campionato, $k$ e $k+G$ non si distinguono, quindi basta una cella di $k$. Lontano dai bordi zona la banda è quasi la parabola dell'elettrone libero.

## Come si usa
Si disegna $E(k_x)$ nella prima zona (zone ridotte): ogni punto distanziato $2\pi/L$ è uno stato da 2 elettroni. Si riempie dal basso fino al livello di Fermi per distinguere metalli e isolanti. In 3D la prima zona diventa un solido, e la sua geometria dipende dal reticolo cristallino.

## Nei corsi
- **Fisica 2** (triennale): lezioni 63-66 (bande nella catena 1D, solido finito, reticolo 3D) e riepilogo nelle 67-68; pp. 61-64 sono figure di cristallografia. Fonti: `triennale/ANNO 2/fisica 2/lezioni/63&64&65&66. LEZIONE.pdf` (pp. 19-28, 55-62); `triennale/ANNO 2/fisica 2/lezioni/67&68. LEZIONE.pdf` (pp. 2-4).

## Prerequisiti
- [[Modello di Kronig-Penney]]: E(k) è periodica in k

## Porta a
- [[Massa efficace]]: sviluppo di E(k) vicino a un estremo di banda

## Collegati
- [[Solidi cristallini]]: reticolo diretto e reticolo reciproco
