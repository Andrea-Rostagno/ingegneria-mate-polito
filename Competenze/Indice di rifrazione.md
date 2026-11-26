---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["refractive index", "n = c/v", "n = √εr", "dispersione", "dispersion", "assorbimento", "indice di rifrazione complesso", "diffusione della luce", "colore del cielo", "modello dell'elettrone legato"]
tags: [competenza, area/fisica]
---

# Indice di rifrazione

> Rapporto $n=c/v$ tra la velocità della luce nel vuoto e quella nel mezzo; nel modello dell'elettrone legato dipende dalla frequenza (dispersione) e, con lo smorzamento, diventa complesso (assorbimento).

## Definizione / enunciato
In un mezzo l'onda incidente mette in oscillazione i dipoli microscopici, che irradiano un'onda secondaria; la sovrapposizione onda incidente + secondaria viaggia con velocità $c/\sqrt{\varepsilon_r\mu_r}\approx c/\sqrt{\varepsilon_r}$ (per $\mu_r\approx1$). La frequenza dipende solo dalla sorgente, quindi passando dal vuoto al mezzo cambia la lunghezza d'onda. Se $n$ dipende da $\omega$ si ha **dispersione**. Parte dell'energia assorbita è riemessa in tutto l'angolo solido (**diffusione**), parte dispersa in calore, parte procede indisturbata.
**Modello semiclassico:** l'elettrone è legato al nucleo da una forza elastica, forzato dal campo $E_x$ dell'onda e smorzato: il campo sposta i baricentri delle cariche e crea un dipolo atomico $p=ex$.

## Formule chiave
$$n=\frac{c}{v(mezzo)}\approx\sqrt{\varepsilon_r},\qquad \nu_i=\nu_m\Rightarrow\lambda_m=\frac{\lambda_i}{n},\qquad v=\frac{c}{n(\omega)}=v(\omega)$$
$$m\frac{d^2x}{dt^2}+\gamma\frac{dx}{dt}+kx=-eE_x(t)=-eE_0e^{-i\omega t},\qquad x_0=\frac{eE_0}{m(\omega_0^2-\omega^2)}$$
$$P=Nex(t)=\varepsilon_0\chi_eE(t)=\varepsilon_0(\varepsilon_r-1)E(t),\qquad n^2=\frac{Ne^2/\varepsilon_0}{m(\omega_0^2-\omega^2)}+1=\varepsilon_r$$
Con lo smorzamento: $n_{complesso}=n+ib$, $\;E(z,t)=E_0e^{-k_0bz}e^{i(k_0nz-\omega t)}$ (termine di smorzamento × onda).
Il segno di $x_0$ è quello della slide (p. 30).

## Intuizione
Lontano dalla frequenza propria $\omega_0$ degli elettroni legati $n$ è reale e il mezzo è trasparente; vicino a $\omega_0$ $n$ varia bruscamente (grafico $n$ in funzione di $\omega/\omega_0$, p. 31) e l'onda viene assorbita. Lo schema spiega il blu del cielo di giorno e il rosso di alba e tramonto (la diffusione dipende dalla frequenza).

## Come si usa
Si ricava $v=c/n$ e $\lambda_m=\lambda_i/n$ nel mezzo; con il modello dell'elettrone legato si stima $n(\omega)$; con la parte immaginaria $b$ l'ampiezza decade come $e^{-k_0bz}$.

## Nei corsi
- **Fisica 2** (triennale): lezione opzionale sulle proprietà e.m. e ottiche classiche della materia; $n=\sqrt{\varepsilon_r}$ anche nel testo 30bis. Fonti: `triennale/ANNO 2/fisica 2/lezioni/30bis. LEZIONE (Onde_em).pdf` (p. 4); `triennale/ANNO 2/fisica 2/lezioni/33b_OPZIONALE. LEZIONE.pdf` (pp. 21-32).

## Prerequisiti
- [[Onde elettromagnetiche]]: velocità di propagazione in un mezzo
- [[Vettore spostamento elettrico]]: εr = 1 + χe = n²
- [[Moto armonico semplice]]: elettrone legato da forza elastica e forzato dal campo

## Porta a
- [[Velocità di gruppo]]: in un mezzo dispersivo v dipende da ω

## Collegati
- Nessuno.
