---
tipo: competenza
area: fisica
corsi: [Fisica 1, Chimica, Fisica 2]
livello: [triennale]
aliases: ["kinetic theory of gases", "teoria cinetica dei gas", "velocità quadratica media", "root mean square speed", "significato microscopico della temperatura", "pressione cinetica", "legge di Graham", "effusione gassosa", "diffusione gassosa", "distribuzione di Maxwell-Boltzmann", "distribuzione di Boltzmann", "fattore di Boltzmann", "Boltzmann factor"]
tags: [competenza, area/fisica]
---

# Modello cinetico del gas ideale

> Spiega pressione e temperatura di un gas ideale a partire dagli urti elastici delle molecole: la temperatura misura l'energia cinetica traslazionale media.

## Definizione / enunciato
Ipotesi: molecole uguali in moto caotico (velocità media nulla), urti elastici tra molecole e con le pareti, forze intermolecolari solo durante gli urti (niente energia potenziale), volume delle molecole trascurabile.
In un cubo di lato $L$ una molecola che urta la parete cambia quantità di moto di $-2mv_x$ e torna sulla stessa parete dopo $\Delta t=2L/v_x$; dal teorema dell'impulso si ottiene la forza media, poi la pressione di $N$ molecole. Con il moto caotico $\langle v_x^2\rangle=\tfrac13v_{qm}^2$.

## Formule chiave
$$pV=\tfrac13mNv_{qm}^2,\qquad v_{qm}=\sqrt{\frac{3RT}{\mathcal A}},\qquad \langle E_k\rangle=\tfrac12mv_{qm}^2=\tfrac32k_BT$$
($\mathcal A$ massa molare).

## Intuizione
La temperatura è una misura dell'energia cinetica media delle molecole, o equivalentemente della loro velocità quadratica media.

## Come si usa
Tabella a p. 14: a 300 K $v_{qm}=1920$ m/s per H$_2$, 517 m/s per N$_2$, 483 m/s per O$_2$.

## Nei corsi
- **Fisica 1** (triennale): lezioni del 18 e 23/05/2022. Fonti: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Termodinamica/Termodinamica_Lezione3.pdf` (pp. 37-47); `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Termodinamica/Termodinamica_Lezione4.pdf` (pp. 2-14). L'espressione $\tfrac32k_BT$ è letta dall'OCR della slide p. 12 (da verificare sul PDF).
- **Chimica** (triennale): lezione 11; $E_k=\tfrac32k_BT$ con $k_B=1{,}381\cdot10^{-23}$ J/K; distribuzione di Maxwell-Boltzmann delle velocità (a T fissata l'energia cinetica media è la stessa per tutti i gas, la velocità dipende dalla massa). Legge di Graham dell'effusione: $v_{\mathrm{H_2}}/v_{\mathrm{N_2}}=\sqrt{M_{\mathrm{N_2}}/M_{\mathrm{H_2}}}=\sqrt{28/2}=3{,}74$; dalla diffusione si ricava una massa molare incognita, $M_2=(v_1/v_2)^2M_1$ (anello di $\mathrm{NH_4Cl}$ tra HCl e $\mathrm{NH_3}$). Fonte: `triennale/ANNO 1/chimica/C. Gerbaldi - CHIMICA - 11 - I gas.pdf` (lezione 11, pp. 49-56).
- **Fisica 2** (triennale): derivazione di Maxwell (1859): isotropia e indipendenza delle componenti danno $F(v_x^2+v_y^2+v_z^2)=f(v_x)f(v_y)f(v_z)$, quindi $f(v_x)=Ae^{-Bv_x^2}$; normalizzazione e $\langle\tfrac12mv^2\rangle=\tfrac32kT$ fissano $F=\left(\frac{m}{2\pi kT}\right)^{3/2}e^{-m(v_x^2+v_y^2+v_z^2)/2kT}$. Distribuzione di Boltzmann $N_i=Be^{-E_i/k_BT}$; energia media di un oscillatore armonico 1D classico $\langle E_{osc}\rangle=\tfrac12k_BT+\tfrac12k_BT=k_BT$. Il fattore $e^{-U/kT}$ dà l'orientazione media dei dipoli, $\langle p\cos\theta\rangle=\frac{p^2}{3kT}E_D$ per $pE_D\ll kT$. Fonti: `triennale/ANNO 2/fisica 2/lezioni/43&44&45. LEZIONE.pdf` (pp. 13-28); `triennale/ANNO 2/fisica 2/lezioni/8.  LEZIONE.pdf` (pp. 25-30).

## Prerequisiti
- [[Equazione di stato dei gas ideali]]: confronto con pV = nRT
- [[Teorema dell'impulso]]: forza media di una molecola sulla parete
- [[Urto elastico]]: urti elastici delle molecole con le pareti

## Porta a
- [[Equipartizione dell'energia]]: energia cinetica media delle molecole

## Collegati
- [[Teoria delle collisioni]]: distribuzione delle velocità e degli urti molecolari
- [[Polarizzazione dei dielettrici]]: il fattore di Boltzmann fissa l'orientazione media dei dipoli
- [[Distribuzione di Fermi-Dirac]]: per E - μ >> kT si ritrova il fattore di Boltzmann
