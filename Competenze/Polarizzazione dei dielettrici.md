---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["dielectric polarization", "vettore polarizzazione", "polarization vector", "carica di polarizzazione", "dielettrico", "materiali polari e apolari", "legge di Curie per i dielettrici", "energia di un dipolo in campo elettrico"]
tags: [competenza, area/fisica]
---

# Polarizzazione dei dielettrici

> Un isolante in un campo elettrico si riempie di dipoli (indotti o orientati): il vettore polarizzazione $\vec P$ ne misura il momento per unità di volume e fa comparire cariche di polarizzazione sulle superfici.

## Definizione / enunciato
**Fatto sperimentale (Faraday):** con un dielettrico tra le armature di un condensatore isolato, a parità di carica la d.d.p. diminuisce: $V_{caso\,a}/V_{caso\,b}=\varepsilon_r$, e $C_{dielettrico}=\varepsilon_rC_{vuoto}$. Il campo massimo sopportabile è la rigidità dielettrica (valori tipici MV/m).
**Polarizzazione:** $\vec P=n\vec p$, momento di dipolo per unità di volume ($n$ dipoli per unità di volume); nei materiali isotropi è parallela al campo. Su una superficie del dielettrico compare una carica per unità di area pari alla componente di $\vec P$ lungo la normale.
**Due meccanismi:** materiali **apolari** (dipoli indotti dallo spostamento dei baricentri delle cariche, modello a molla) e **polari** (dipoli permanenti che il campo tende ad allineare contro l'agitazione termica, statistica di Boltzmann).

## Formule chiave
$$\sigma=\vec P\cdot\vec u_n,\qquad \vec P=\varepsilon_0\chi_e\vec E_D,\qquad U=-\vec p\cdot\vec E_D$$
$$\vec p=q\vec x=\frac{q^2}{\omega_0^2m}\vec E_D,\qquad \chi_{e,apolare}=\frac{Nq^2}{\varepsilon_0\omega_0^2m}$$
$$\langle p\cos\theta\rangle=\frac{p^2}{3kT}E_D,\qquad \chi_{e,polare}=N\frac{p^2}{3kT\varepsilon_0},\qquad \chi_{e,totale}=A+\frac BT\ \text{(legge di Curie)}$$

## Intuizione
Dentro il materiale le cariche dei dipoli adiacenti si compensano; restano scoperte solo quelle sulle facce, che generano un campo opposto a quello esterno e lo "smorzano". La parte polare cala con la temperatura perché l'agitazione termica disordina i dipoli.

## Come si usa
Per una lastra perpendicolare al campo, $PSl=Ql$ dà $\sigma_{POL}=P$; per una faccia inclinata $\sigma=P\cos\theta$. Il valore di $\chi_e$ si stima con i modelli microscopici e si separa la parte apolare ($A$) da quella polare ($B/T$).

## Nei corsi
- **Fisica 2** (triennale): lezione 8, prima parte (polarizzazione) e seconda parte (modello per la suscettività, ragionamento di Maxwell e Boltzmann). Notazione $\vec E_D$ per il campo nel dielettrico. Fonti: `triennale/ANNO 2/fisica 2/lezioni/8.  LEZIONE.pdf` (pp. 2-11, 19-31).

## Prerequisiti
- [[Campo elettrostatico]]: il campo esterno sposta o orienta le cariche legate

## Porta a
- [[Vettore spostamento elettrico]]: D = ε0E + P separa cariche libere e di polarizzazione

## Collegati
- [[Legame covalente polare]]: molecole polari e apolari, momento di dipolo microscopico
- [[Modello cinetico del gas ideale]]: il fattore di Boltzmann fissa l'orientazione media dei dipoli
