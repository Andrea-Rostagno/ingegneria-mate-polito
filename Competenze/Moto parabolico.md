---
tipo: competenza
area: fisica
corsi: [Fisica 1]
livello: [triennale]
aliases: ["projectile motion", "moto del proiettile", "gittata", "altezza massima", "traiettoria parabolica"]
tags: [competenza, area/fisica]
---

# Moto parabolico

> Moto piano di un punto lanciato con velocità iniziale e soggetto solo alla gravità: uniforme in orizzontale, uniformemente accelerato in verticale, con traiettoria parabolica.

## Definizione / enunciato
Ipotesi: proiettile puntiforme, resistenza dell'aria trascurabile, componenti orizzontale e verticale indipendenti. Con velocità iniziale $v_0$ inclinata di $\theta_0$: $v_x=v_0\cos\theta_0$ costante, $v_y=v_0\,\mathrm{sen}\,\theta_0-gt$. Eliminando $t$ dalla legge oraria si ottiene la traiettoria.

## Formule chiave
$$y(x)=y_0+\mathrm{tan}\,\theta_0\,(x-x_0)-\frac{g}{2(v_0\cos\theta_0)^2}(x-x_0)^2$$
$$G=x_2-x_0=\frac{2v_0^2\cos\theta_0\,\mathrm{sen}\,\theta_0}{g}=\frac{v_0^2\,\mathrm{sen}\,2\theta_0}{g}$$
Il punto di massima altezza si ha dove $v_y=0$.

## Intuizione
Le due componenti sono due moti 1D indipendenti legati solo dal tempo. Dalla formula della gittata segue (osservazione non presente nelle slide) che, a parità di $v_0$, è massima per $\mathrm{sen}\,2\theta_0=1$.

## Come si usa
Esercizio 2 di `Cinematica_Lezione2.pdf` (pp. 22-25): una palla attraversa una finestra larga $w=2$ m e alta $h=1.4$ m, entrando dal centro del bordo inferiore a $t=0$ e uscendo dal centro del lato destro a $t_1=1$ s; dalle condizioni si ricavano le costanti e l'istante di quota massima ($v_y=0$).

## Nei corsi
- **Fisica 1** (triennale): lezione del 14/03/2022. Fonti: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Cinematica_punto_materiale/Cinematica_Lezione3.pdf` (pp. 31-43); `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Cinematica_punto_materiale/Cinematica_Lezione2.pdf` (pp. 22-25).

## Prerequisiti
- [[Moto rettilineo uniformemente accelerato]]: componente verticale con accelerazione -g

## Porta a
- Nessuno.

## Collegati
- [[Analisi dimensionale]]: esempio di controllo dimensionale della gittata
- [[Teorema di Torricelli]]: il getto uscito segue una parabola
