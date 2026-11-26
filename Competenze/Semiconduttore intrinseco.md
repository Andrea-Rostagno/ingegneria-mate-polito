---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["intrinsic semiconductor", "elettroni e lacune", "electrons and holes", "livello di Fermi intrinseco", "concentrazione intrinseca", "gap di energia"]
tags: [competenza, area/fisica]
---

# Semiconduttore intrinseco

> In un semiconduttore puro la banda di valenza è piena e quella di conduzione vuota a 0 K; a $T>0$ alcuni elettroni passano in conduzione lasciando lacune, in numero $\propto e^{-E_g/2kT}$, e il livello di Fermi cade a metà gap.

## Definizione / enunciato
Con tutti gli stati della banda occupati il campo non può creare un'asimmetria nello spazio $k$, quindi non dovrebbe esserci corrente. Sperimentalmente ne passa poca, tende a zero per $T\to0$ e cresce con $T$: $E_F$ sta nella banda proibita. Gli elettroni in banda di conduzione (BC) si comportano come liberi, con $g_C(E)$ da elettrone libero misurata da $E_C$; le lacune in banda di valenza (BV) si contano con $1-f$. La neutralità $N_{e,C}=N_{h,V}$ è un'equazione algebrica per $E_F$. La corrente è la somma dei contributi di elettroni e lacune, scritti con le mobilità.

## Formule chiave
$$N(E)=g_C(E)f(E,T),\qquad N_{e,C}=\int_{E_C}^\infty g_C(E)f(E,T)dE=\frac{L^3}{4}\left[\frac{2mkT}{\pi\hbar^2}\right]^{3/2}e^{-\frac{(E_C-E_F)}{kT}}$$
$$N_{e,C}\approx\frac{L^3}{2\pi^2}\left(\frac{2m^*_{BC}}{\hbar^2}\right)^{3/2}e^{-\frac{E_C-E_F}{k_BT}}\frac{\sqrt\pi}{2}(k_BT)^{3/2},\qquad N_{e,V}\approx\frac{L^3}{2\pi^2}\left(\frac{2m^*_{BV}}{\hbar^2}\right)^{3/2}e^{\frac{E_V-E_F}{k_BT}}\frac{\sqrt\pi}{2}(k_BT)^{3/2}$$
$$\int_{E_C}^\infty g_Cf\,dE=\int_{-\infty}^{E_V}g_V(1-f)dE\ \Rightarrow\ E_C-E_F=\frac{(E_C-E_V)}{2}=\frac{E_g}{2}\ \ (g_C,g_V\ \text{uguali})$$
$$\mu_e=\frac{v_e}{E},\quad \mu_h=\frac{v_h}{E},\qquad \sigma=N_{e,C}\mu_ee+N_{h,V}\mu_he$$
$$N_{e,h}=\frac14\left[\frac{2mkT}{\pi\hbar^2}\right]^{3/2}e^{-\frac{E_g}{2kT}},\qquad \sigma=e(\mu_e+\mu_h)\frac14\left[\frac{2mkT}{\pi\hbar^2}\right]^{3/2}e^{-\frac{E_g}{2kT}}$$

## Intuizione
L'approssimazione chiave è $E_F$ lontano dai bordi: la coda di Fermi diventa una coda di Boltzmann $e^{-(E-E_F)/kT}$. L'integrale si riduce a $\int_0^\infty x^{1/2}e^{-x/k_BT}dx=\frac{\sqrt\pi}{2}(k_BT)^{3/2}$, e tutto il peso fisico sta nell'esponenziale del gap: per questo $\sigma$ cresce rapidamente con $T$, al contrario dei metalli. La mobilità dipende dall'agitazione termica e dalle impurezze.

## Come si usa
Esempio delle slide: silicio con $E_g=1$ eV, $N=10^9$ cm⁻³ a $T=300$ K (`71&72.LEZIONE.pdf` p. 13). Refuso nella slide p. 10: il rapporto delle masse è scritto $(m^*_{BC}/m^*_{BC})^{3/2}$ invece di BC/BV.

## Nei corsi
- **Fisica 2** (triennale): lezioni 71-72, "Cenni ai semiconduttori". Fonti: `triennale/ANNO 2/fisica 2/lezioni/71&72.LEZIONE.pdf` (pp. 2-13).

## Prerequisiti
- [[Distribuzione di Fermi-Dirac]]: occupazione di banda di conduzione e di valenza
- [[Massa efficace]]: masse efficaci di elettroni e lacune

## Porta a
- [[Drogaggio dei semiconduttori]]: si aggiungono portatori al materiale puro

## Collegati
- [[Legame metallico]]: classificazione metalli, semiconduttori, isolanti
