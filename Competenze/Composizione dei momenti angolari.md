---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["addition of angular momenta", "somma dei momenti angolari", "momento angolare totale", "total angular momentum", "J = L + S", "coefficienti di Clebsch-Gordan", "Clebsch-Gordan coefficients", "base accoppiata", "coupled basis", "regola triangolare"]
tags: [competenza, area/fisica]
---

# Composizione dei momenti angolari

> Sommando due momenti angolari, $\vec J=\vec J_a+\vec J_b$ ha la stessa algebra; i suoi numeri quantici $j$ variano tra $|j_a-j_b|$ e $j_a+j_b$, e i nuovi stati $|j,m_j\rangle$ sono combinazioni dei prodotti $|j_a,m_a\rangle|j_b,m_b\rangle$ con $m_a+m_b=m_j$.

## Definizione / enunciato
Per $\vec J=\vec L+\vec S$: $[J_n,J_m]=i\hbar\varepsilon_{nmk}J_k$ (le componenti di $\vec L$ e $\vec S$ commutano tra loro), quindi $[J^2,J_k]=0$. Poiché $J^2=L^2+S^2+2\vec S\cdot\vec L$, $J^2$ **non** commuta con $L_3$ e $S_3$ ma commuta con $L^2$ e $S^2$: si passa dall'insieme $\{L^2,L_3,S^2,S_3\}$ all'insieme $\{L^2,S^2,J^2,J_3\}$, con numeri quantici $\ell,s,j,m_j$.
Il valore di $j$ si ricava euristicamente dal limite semiclassico ($|\vec L|\simeq\ell$, $|\vec S|\simeq s$, $\ell-s\le|\vec J|\le\ell+s$), confermato dal calcolo esatto.

## Formule chiave
$$|j_a-j_b|\le j\le j_a+j_b,\quad -j\le m_j\le j,\quad m_j=m_a+m_b$$
$$|j,m_j,j_a,j_b\rangle=\sum^*_{m_a,m_b}C(m_a,m_b)|j_a,m_a\rangle|j_b,m_b\rangle\quad(m_a+m_b=m_j)$$
Conteggio: $(2j_a+1)(2j_b+1)$ stati prodotto = numero di stati accoppiati.
Per $s=1/2$, $j=\ell\pm\frac12$:
$$|\ell\pm\tfrac12,m_j\rangle=\alpha_\pm|\ell,m_j-\tfrac12\rangle|+\tfrac12\rangle+\beta_\pm|\ell,m_j+\tfrac12\rangle|-\tfrac12\rangle,\qquad \alpha_\pm=\pm\sqrt{\frac{\ell\pm m_j+1/2}{2\ell+1}}=\pm\beta_\mp$$

## Intuizione
Classicamente $|\vec J|$ va da $|\vec L|-|\vec S|$ (antiparalleli) a $|\vec L|+|\vec S|$ (paralleli); quantisticamente lo stesso intervallo è percorso a passi interi. Lo stesso $m_j$ si ottiene in più modi, da qui le combinazioni lineari.

## Come si usa
I coefficienti si costruiscono con l'algebra: si parte dallo stato più alto $|j=\ell+\frac12,m_j=j\rangle=|\ell,\ell\rangle|+\frac12\rangle$ (annullato da $J_+=L_++S_+$) e si applica ripetutamente $J_-$ fino a $(J_-)^{2j+1}=0$, normalizzando (`2022_QP.pdf` pp. 147-148). Il caso di due spin 1/2 dà singoletto e tripletto. La base accoppiata è necessaria quando nell'hamiltoniana compare $\vec S\cdot\vec L$ (effetto Zeeman anomalo, accoppiamento spin-orbita).

## Nei corsi
- **Quantum physics** (triennale): §12.2 della dispensa di V. Penna (casi $\vec L+\vec S$ e caso generale $\vec J_a+\vec J_b$); §4.2.3 delle note di M. Re Fiorentin (due spin 1/2). Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 145-148, 159-160); `triennale/ANNO 2/quantum phisics/QM_notes3.pdf` (pp. 50-52).

## Prerequisiti
- [[Spettro del momento angolare]]: J ha la stessa algebra di L
- [[Matrici di Pauli]]: lo spin da comporre con L

## Porta a
- [[Singoletto e tripletto di spin]]: caso di due spin 1/2
- [[Effetto Zeeman anomalo]]: livelli nella base |j, m_j, ℓ, s⟩
- [[Accoppiamento spin-orbita]]: H_SL commuta con J² e J₃

## Collegati
- [[Commutatore di operatori]]: scelta di un nuovo insieme completo di osservabili
- [[Numeri quantici]]: j e m_j sostituiscono m e m_s
