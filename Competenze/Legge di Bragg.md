---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["Bragg's law", "condizione di Bragg", "diffrazione di raggi X", "X-ray diffraction", "2d sin θ = mλ", "diffrazione di elettroni"]
tags: [competenza, area/fisica]
---

# Legge di Bragg

> I raggi riflessi da piani atomici paralleli di un cristallo, a distanza $d$, interferiscono costruttivamente quando $2d\sin\theta=m\lambda$: vale per i raggi X e, con $\lambda=h/p$, anche per gli elettroni.

## Definizione / enunciato
Un fascio piano di raggi X incide su un cristallo, disposizione ordinata di atomi su piani paralleli a distanza $d$, con angolo $\theta$ rispetto ai piani. I raggi riflessi da due piani adiacenti (raggi 1 e 2) percorrono cammini diversi, $x_2-x_1=2d\sin\theta$, e su uno schermo lontano interferiscono: si osservano zone illuminate e zone di buio. La **condizione di Bragg** (massimi, differenza di fase $2m\pi$) si osserva anche in trasmissione (spettrogramma di Laue).
**Diffrazione di elettroni (Davisson-Germer 1927):** ripetendo l'esperimento con elettroni accelerati da una d.d.p. $V$ si trovano punti in cui arrivano e punti in cui non arrivano con la stessa legge dei raggi X: gli elettroni si comportano come onde.

## Formule chiave
$$k(2d\sin\theta)=2m\pi\quad\Rightarrow\quad 2d\sin\theta=m\lambda$$
$$E(P)=E_0e^{i(kx_1-\omega t)}\left[1+e^{ik(x_2-x_1)}\right],\qquad I(P)\propto|E(P)|^2=4E_0^2\cos^2\left(\frac\Phi2\right),\qquad \Phi=k(x_2-x_1)$$
$$\text{buio: }2d\sin\theta=(2n+1)\frac\lambda2,\ \sin\theta=(2n+1)\frac\lambda4\frac1d;\qquad \text{max: }2d\sin\theta=n\lambda,\ \sin\theta=n\frac\lambda2\frac1d$$
Elettroni: $E_{cin}=eV$; riportando $p$ in funzione di $1/\lambda$ (con $\lambda$ dalla formula di Bragg) si ottiene una retta di pendenza $tg\alpha=h$, cioè $p=h/\lambda$ (de Broglie, con $E=h\nu$).

## Intuizione
È l'interferenza da due sorgenti applicata ai piani cristallini, con differenza di cammino $2d\sin\theta$ invece di $a\sin\theta$. Serve una lunghezza d'onda confrontabile con le distanze atomiche (raggi X, oppure elettroni con $\lambda=h/p$).

## Come si usa
Noti $\lambda$ e gli angoli dei massimi si ricava la distanza $d$ tra i piani (struttura del cristallo, es. NaCl); noto $d$, dagli angoli si ricava $\lambda$, e per gli elettroni si verifica $p=h/\lambda$.

## Nei corsi
- **Fisica 2** (triennale): diffrazione di raggi X da cristalli e di elettroni, come passaggio verso la meccanica quantistica. Refusi: a p. 35 nell'ultimo passaggio di $E(P)$ manca il fattore 2 davanti a $\cos(\Phi/2)$ (l'intensità scritta subito dopo è $4E_0^2\cos^2$); a p. 37 si legge $E_{cin}=p_2/2m$ invece di $p^2/2m$. L'argomento inizia a p. 32 (la mappa indica p. 34). Fonti: `triennale/ANNO 2/fisica 2/lezioni/46&49&50. LEZIONE.pdf` (pp. 32-40).

## Prerequisiti
- [[Interferenza da due sorgenti]]: differenza di fase tra raggi riflessi da piani adiacenti

## Porta a
- Nessuno.

## Collegati
- [[Solidi cristallini]]: i piani reticolari del cristallo fanno da reticolo
- [[Ipotesi di de Broglie]]: Davisson-Germer: gli elettroni seguono la stessa legge
