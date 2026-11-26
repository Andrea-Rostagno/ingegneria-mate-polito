---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["electrical conduction in metals", "modello di Drude", "Drude model", "modello di Sommerfeld", "velocità di Fermi", "Fermi velocity", "fononi", "resistività dei metalli"]
tags: [competenza, area/fisica]
---

# Conduzione elettrica nei metalli

> Nel modello quantistico (Bethe-Sommerfeld) conducono solo gli elettroni vicini all'energia di Fermi, con $\sigma\propto e^2v_F^2g(E_F)\tau$; gli "urti" sono dovuti a fononi e impurezze, non ai nuclei.

## Definizione / enunciato
**Drude (classico):** gli $N_f=sN$ elettroni liberi accelerano sotto $eC$ e raggiungono una velocità di deriva per effetto degli urti ogni $\tau$. Con $\tau=l/v_{th}$ e $v_{th}$ da gas ideale non si riproduce la dipendenza sperimentale: $\sigma\propto1/T$ ad alte $T$, $\sigma\propto1/(T^5+aN_{im})$ a basse $T$.
**Bethe-Sommerfeld (quantistico):** a $T=0$ gli stati sono pieni fino a $E_F$ e a ogni $k$ corrisponde $-k$, quindi niente corrente netta. Con il campo $C_x$ gli elettroni si spostano in stati liberi contigui e il bilanciamento salta solo vicino a $E_F$. Gli stati stazionari avvolgono i nuclei e non li "urtano": gli urti nascono dagli scostamenti dal reticolo ideale, cioè agitazione termica dei nuclei (fononi, statistica di Bose-Einstein) e impurezze.

## Formule chiave
$$j=\sigma C,\quad j=N_fev_d,\quad v_d=\frac{eC\tau}{m},\quad \sigma=\frac{N_fe^2\tau}{m}\quad\text{(Drude)}$$
$$\vec p=\hbar\vec k=m\vec v,\qquad v_F=\frac{\hbar\pi^{2/3}(3N_f)^{1/3}}{mL}=\left[\frac{3\pi^2sN}{L^3}\right]^{1/3}\frac{\hbar}{m}$$
$$j_x=\sigma C_x=-N_{e,C}v_ee,\qquad N_{e,C}\approx g(E_F)\Delta E,\qquad \frac{\partial E}{\partial k_x}=\frac{\hbar^2k_x}{m}=\hbar v_{F,x},\qquad \Delta k_x=\frac{eC\tau}{\hbar}$$
$$\sigma\propto e^2v_F^2g(E_F)\tau;\qquad T>0:\ N_e=g(E_F)f(E_F,T)=\frac{L^3}{2\pi^2}\left[\frac{2m}{\hbar^2}\right]^{3/2}\frac12E_F^{1/2},\quad \sigma\propto e^2v_F^2N_e\tau$$
$$\tau\propto\frac{1}{N_{imp}},\qquad n(\omega,T)=\frac{1}{e^{\hbar\omega/kT}-1},\qquad \tau=\frac1p\propto\frac{1}{n(\omega,T)}\approx\frac1T$$

## Intuizione
Gli elettroni profondi nella sfera di Fermi non trovano stati liberi vicini e non contribuiscono: il campo sposta di poco l'intera sfera nello spazio $k$, e conta solo la "buccia" attorno a $E_F$, che si muove a velocità $v_F$, molto maggiore di quella termica classica.

## Come si usa
Si spiega la dipendenza di $\sigma$ dalla temperatura: ad alte $T$ dominano i fononi ($\tau\propto1/T$), a basse $T$ le impurezze ($\tau\propto1/N_{imp}$). Gli elettroni nella banda di conduzione del metallo si trattano come liberi con massa efficace.

## Nei corsi
- **Fisica 2** (triennale): lezioni 69-70, "Proprietà elettriche della materia"; il campo elettrico è indicato con $C$ per non confonderlo con l'energia. Fonti: `triennale/ANNO 2/fisica 2/lezioni/69&70. LEZIONE.pdf` (pp. 21-31).

## Prerequisiti
- [[Legge di Ohm]]: modello classico di Drude, σ = Ne²τ/m
- [[Distribuzione di Fermi-Dirac]]: conducono solo gli elettroni vicini a E_F

## Porta a
- Nessuno.

## Collegati
- [[Legame metallico]]: banda semipiena dei metalli
