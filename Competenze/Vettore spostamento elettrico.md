---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["electric displacement", "induzione dielettrica", "vettore D", "costante dielettrica relativa", "permittività", "suscettività elettrica", "electric susceptibility", "D = ε0E + P"]
tags: [competenza, area/fisica]
---

# Vettore spostamento elettrico

> Campo ausiliario $\vec D=\varepsilon_0\vec E+\vec P$ il cui flusso dipende solo dalle cariche libere: permette di scrivere la legge di Gauss nei dielettrici senza conoscere le cariche di polarizzazione.

## Definizione / enunciato
Tra due piani con densità di carica libera $\sigma_{LIB}$ si inserisce una lastra di dielettrico: sulle sue facce compare $\sigma_{POL}=P$ di segno opposto, quindi $\sigma=\sigma_{LIB}-P$ e il campo nel dielettrico vale $\varepsilon_0E_D=\sigma_{LIB}-P$. Chiamando $E_0$ il campo senza dielettrico a parità di cariche libere, $\varepsilon_0\vec E_D=\varepsilon_0\vec E_0-\vec P$, e si definisce lo **spostamento elettrico** (o induzione dielettrica) $\vec D$: la sua componente normale alla superficie di un conduttore immerso in un dielettrico è uguale alla densità di carica libera superficiale. Unità: $[D]=C\,m^{-2}$, come $\vec P$.
Nei materiali omogenei e isotropi $\vec P=\varepsilon_0\chi_e\vec E_D$ ($\chi_e$ suscettività elettrica, adimensionata); $\varepsilon=(1+\chi_e)\varepsilon_0$ è la permittività del mezzo, $\varepsilon_r=1+\chi_e$ la permittività relativa.

## Formule chiave
$$\vec D=\varepsilon_0\vec E_D+\vec P,\qquad \sigma_{LIB}=\vec D\cdot\vec u_n,\qquad \sigma_{POL}=\vec P\cdot\vec u_n$$
$$\vec D=(1+\chi_e)\varepsilon_0\vec E_D=\varepsilon_0\varepsilon_r\vec E_D=\varepsilon_0\vec E_0,\qquad \vec E_D=\frac{\vec E_0}{\varepsilon_r}$$
$$\oint_S\vec D\cdot d\vec S=q_{LIB},\qquad \oint_S\vec E_D\cdot d\vec S=\frac{q_{LIB}}{\varepsilon_0\varepsilon_r},\qquad \mathrm{div}\vec D=\vec\nabla\cdot\vec D=\rho_{LIB}$$

## Intuizione
$\vec D$ "ignora" il materiale: dipende solo dalle cariche che si controllano (quelle libere). Il campo vero $\vec E_D$ è smorzato di $\varepsilon_r$ per l'effetto di schermatura dei dipoli indotti o orientati.

## Come si usa
Esempio delle slide: una carica puntiforme $q$ nel vuoto ha $E_0=q/4\pi\varepsilon_0r^2$; nel dielettrico $E_D=q/4\pi\varepsilon_0\varepsilon_rr^2$. Per una piastra: $E_D=\sigma_{LIB}/\varepsilon_0\varepsilon_r$ contro $E_0=\sigma_{LIB}/\varepsilon_0$ senza dielettrico.

## Nei corsi
- **Fisica 2** (triennale): lezione 8, dopo il vettore polarizzazione. Fonti: `triennale/ANNO 2/fisica 2/lezioni/8.  LEZIONE.pdf` (pp. 3, 12-19).

## Prerequisiti
- [[Polarizzazione dei dielettrici]]: D = ε0E + P separa cariche libere e di polarizzazione
- [[Teorema di Gauss del flusso]]: il flusso di D conta solo le cariche libere

## Porta a
- [[Indice di rifrazione]]: εr = 1 + χe = n²

## Collegati
- [[Capacità elettrica]]: il dielettrico riduce la d.d.p. di un fattore εr a carica fissata
- [[Magnetizzazione e campo magnetizzante]]: analogia D-E-P con H-B-M
