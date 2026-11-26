---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["Cauchy-Riemann equations", "condizioni CR", "equazioni di Cauchy-Riemann", "CR"]
tags: [competenza, area/analisi]
---

# Condizioni di Cauchy-Riemann

> Una funzione $f=u+iv$ è derivabile in senso complesso se e solo se $u,v$ sono differenziabili e le loro derivate parziali sono accoppiate da $u_x=v_y$, $u_y=-v_x$.

## Definizione / enunciato
**Teorema 2.6.** Con $z=x+iy$, $z_0=x_0+iy_0$, $f(z)=u(x,y)+iv(x,y)$, sono equivalenti:
1. $f$ è derivabile in $z_0$;
2. $u$ e $v$ sono differenziabili in $(x_0,y_0)$ e
$$\frac{\partial u}{\partial x}(x_0,y_0)=\frac{\partial v}{\partial y}(x_0,y_0),\qquad \frac{\partial u}{\partial y}(x_0,y_0)=-\frac{\partial v}{\partial x}(x_0,y_0)\quad(2.5).$$
Inoltre $f'(z_0)=u_x(x_0,y_0)+i\,v_x(x_0,y_0)$ (2.6).

**Teorema 2.9 (versione globale).** $f$ è olomorfa su $D$ $\iff$ $u,v\in C^1(D)$ e valgono $u_x=v_y$, $u_y=-v_x$ su $D$; allora $f'=u_x+iv_x$.

## Formule chiave
$$u_x=v_y,\qquad u_y=-v_x,\qquad f'=u_x+i\,v_x.$$

## Intuizione
La differenziabilità di $u$ e $v$ dà un'approssimazione lineare qualsiasi di $\mathbb R^2$ in sé; le CR impongono che la parte lineare sia la moltiplicazione per un numero complesso, cioè una roto-omotetia.

## Come si usa
Esempi 2.7: per $z^2$, $u=x^2-y^2$, $v=2xy$ e le CR valgono ovunque (funzione intera); per $\bar z$, $u_x=1\ne v_y=-1$ in ogni punto (mai derivabile); per $|z|^2$ le CR diventano $2x_0=0$, $2y_0=0$ (derivabile solo nell'origine). Per costruire $f$ con parte reale assegnata si integrano le CR (armonica coniugata).

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §2.2. Nella dimostrazione del Teorema 2.6 la dispensa ha alcuni refusi negli indici (da verificare sul PDF), gli enunciati sono chiari. Fonte: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 2 (1).pdf` (pp. 3-7 del PDF); richiamo anche in `2 - Funzioni Complesse (2).pdf` (Richiami di teoria).

## Prerequisiti
- [[Funzione olomorfa]]: caratterizzazione della derivabilità complessa

## Porta a
- [[Funzione armonica]]: parte reale e immaginaria risolvono l'equazione di Laplace
- [[Teorema di Cauchy-Goursat]]: con il teorema di Green le CR annullano l'integrale

## Collegati
- [[Differenziabilità in più variabili]]: ipotesi su $u$ e $v$
