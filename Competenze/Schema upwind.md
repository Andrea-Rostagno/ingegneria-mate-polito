---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["upwind scheme", "metodo upwind", "schema sopravento", "viscosità numerica", "viscosità artificiale", "numerical viscosity", "artificial diffusion", "diffusione artificiale"]
tags: [competenza, area/numerica]
---

# Schema upwind

> Si discretizza il termine di trasporto $pu'$ con la differenza "sopravento" (all'indietro se $p\ge0$) invece che centrata: si perde un ordine di accuratezza ma lo schema è stabile per ogni valore del numero di Péclet locale.

## Definizione / enunciato
$$u'(x_i)=\frac{u(x_i)-u(x_{i-1})}h+O(h)\ \ (p\ge0),\qquad u'(x_i)=\frac{u(x_{i+1})-u(x_i)}h+O(h)\ \ (p\le0).$$
Per $p>0$ lo schema per $-du''+pu'=0$ è
$$-d\frac{u_{n+1}-2u_n+u_{n-1}}{h^2}+p\frac{u_n-u_{n-1}}h=0,\quad n=1,\dots,N-1,$$
cioè righe $c\,u_{n-1}+s\,u_n+e\,u_{n+1}$ con $c=-(1+2\mathrm{Pe}_{loc})$, $s=2+2\mathrm{Pe}_{loc}$, $e=-1$: stabile per qualunque $\mathrm{Pe}_{loc}$, con convergenza solo lineare.

## Formule chiave
$$\frac{u_n-u_{n-1}}h=\frac{u_{n+1}-u_{n-1}}{2h}-\frac h2\,\frac{u_{n+1}-2u_n+u_{n-1}}{h^2}.$$
Quindi upwind = schema centrato per $-d_hu''+pu'=0$ con $d_h=d(1+\mathrm{Pe}_{loc})$. La correzione $d_h-d=d\,\mathrm{Pe}_{loc}=ph/2$ è la **viscosità numerica** (o artificiale). Nuovo Péclet locale:
$$\mathrm{Pe}^*_{loc}=\frac{ph}{2d_h}=\frac{\mathrm{Pe}_{loc}}{1+\mathrm{Pe}_{loc}}<1\quad\forall h>0 .$$

## Intuizione
Per $p>0$ il fluido scorre verso destra, quindi $u_n$ è influenzato soprattutto da $u_{n-1}$ (sopravento) e non da $u_{n+1}$ (sottovento): la differenza all'indietro usa solo l'informazione che arriva davvero. Equivale ad aggiungere un po' di diffusione, che smorza le oscillazioni.

## Come si usa
Esempio delle slide con $p/d=1000$ e $h=1/32$: nessuna oscillazione spuria (lo schema centrato invece oscillava). L'errore in norma infinito però converge solo linearmente: EOC $0.61,\ 0.79,\ 0.88,\ 0.93$ per $N=512,\dots,8192$ (errore $2.1\cdot10^{-2}$ con $N=8192$).

## Nei corsi
- **Metodi numerici** (triennale): "Metodo 2 - Metodo upwind". Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_08_ode_valori_limiti_print.pdf` (p. 48-56).

## Prerequisiti
- [[Numero di Péclet]]: lo schema centrato è instabile per $\mathrm{Pe}_{loc}>1$
- [[Formule di derivazione numerica]]: differenze in avanti e all'indietro del primo ordine

## Porta a
- Nessuno.

## Collegati
- [[Metodo delle differenze finite]]: stesso schema con un'altra formula per $u'$
- [[Stabilità di un algoritmo]]: si sacrifica accuratezza per stabilità
