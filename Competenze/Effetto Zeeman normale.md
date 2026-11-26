---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["normal Zeeman effect", "effetto Zeeman", "Zeeman effect", "separazione dei livelli in campo magnetico", "regole di selezione di dipolo elettrico", "selection rules"]
tags: [competenza, area/fisica]
---

# Effetto Zeeman normale

> In un campo magnetico debole $\vec B=B\vec u_3$ i livelli dell'atomo idrogenoide si separano secondo il numero quantico magnetico: $E_{nm}=E_n+\mu_BBm$, rimuovendo la degenerazione in $m$.

## Definizione / enunciato
Trascurando il termine in $B^2$ e lo spin, $H_B\simeq H_0+\frac{eB}{2m_ec}L_3$. Poiché $[H_0,L_3]=0$, gli autostati restano $\psi_{n\ell m}$ dell'atomo di idrogeno:
$$H_0\psi_{n\ell m}=E_n\psi_{n\ell m},\qquad \frac{eB}{2m_ec}L_3\psi_{n\ell m}=\frac{e\hbar B}{2m_ec}m\,\psi_{n\ell m}.$$

## Formule chiave
$$E_{nm}=-\frac{(Ze)^2}{2an^2}+\mu_BBm,\qquad \mu_B=\frac{e\hbar}{2m_ec}\ \ (\text{magnetone di Bohr, } 0{,}927\times10^{-20}\ \text{erg/gauss})$$
Ogni livello $E_n$ si divide in $2n-1$ livelli, $-(n-1)\le m\le n-1$; per $(n,m)$ fissati $|m|\le\ell\le n-1$, degenerazione $n-|m|$.
Regole di selezione: $\Delta m=0,\pm1$ (e $\Delta\ell=\pm1$), dall'elemento di matrice di dipolo $\langle\nu'|\vec r|\nu\rangle$ nella formula dell'intensità irraggiata $I\propto\frac{2e^2}{3c^3}\omega^4|\langle\nu'|\vec r|\nu\rangle|^2$.

## Intuizione
Il campo sceglie una direzione privilegiata, e l'energia dipende ora dalla proiezione di $\vec L$ su di essa. Ogni riga spettrale a $B=0$ si apre in un gruppo di righe vicine.

## Come si usa
Esempi della dispensa: $n=2$ dà $E_2+\mu_BB(-1,0,+1)$; $n=3$ dà $E_3+\mu_BB(-2,\dots,+2)$ (`2022_QP.pdf` pp. 155-156). Il numero di transizioni previsto spiega solo una parte delle osservazioni: servono più livelli, cioè lo spin (effetto Zeeman anomalo).

## Nei corsi
- **Quantum physics** (triennale): §13.1 della dispensa di V. Penna, in unità di Gauss. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 154-156).

## Prerequisiti
- [[Hamiltoniana di una carica in campo elettromagnetico]]: il termine lineare in B
- [[Atomo di idrogeno]]: livelli e autostati imperturbati

## Porta a
- [[Effetto Zeeman anomalo]]: inclusione dello spin

## Collegati
- [[Spettri atomici]]: le righe si separano in campo magnetico
- [[Numeri quantici]]: m diventa osservabile tramite l'energia
- [[Teoria delle perturbazioni stazionarie]]: $\mu_BB$ è piccolo rispetto a $|E_n|$
