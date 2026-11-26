---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["Péclet number", "numero di Peclet", "Peclet number", "numero di Péclet locale", "numero di Péclet globale", "problema a trasporto dominante", "strato limite", "boundary layer", "oscillazioni spurie", "diffusione-trasporto"]
tags: [competenza, area/numerica]
---

# Numero di Péclet

> Parametro adimensionale che misura quanto il trasporto domina la diffusione in $-du''+pu'=0$; nella versione locale ($|p|h/2d$) decide se lo schema alle differenze centrate è stabile.

## Definizione / enunciato
Problema modello di diffusione-trasporto con $d,p>0$ costanti:
$$-du''+pu'=0\ \text{su}\ [0,1],\quad u(0)=0,\ u(1)=1,\qquad u(x)=\frac{e^{\frac pdx}-1}{e^{\frac pd}-1}.$$
- **Péclet globale:** $\mathrm{Pe}_{glo}=\dfrac{|p|(b-a)}{2d}$; il problema è a trasporto dominante se $\mathrm{Pe}_{glo}\gg1$.
- **Péclet locale:** $\mathrm{Pe}_{loc}=\dfrac{|p|h}{2d}$.

Con le differenze centrate ("Metodo 1") il sistema ha righe $c\,u_{n-1}+s\,u_n+e\,u_{n+1}$ con $c=-(1+\mathrm{Pe}_{loc})$, $s=2$, $e=-(1-\mathrm{Pe}_{loc})$. Per $\mathrm{Pe}_{loc}<1$, cioè $h<2d/p$, la matrice è a diagonale dominante (non in senso stretto) e il sistema ha un'unica soluzione; lo schema è stabile se $\mathrm{Pe}_{loc}\le1$.

## Formule chiave
$$\mathrm{Pe}_{loc}\le1\iff h\le\frac{2d}p .$$
Limiti: se $p\ll d$, $u(x)\approx x$ (pura diffusione); se $d\ll p$, $u(x)\approx e^{\frac pd(x-1)}$, quasi nulla tranne vicino a 1: **strato limite**, con $u'$ molto grande.

## Intuizione
Pensando a $u$ come temperatura in un fluido che scorre verso destra con velocità $p$: se il trasporto domina, l'interno del tubo ha la temperatura dell'ingresso e la condizione all'uscita si fa sentire solo in uno strato sottile. Se la griglia non risolve quello strato, lo schema centrato produce oscillazioni non fisiche.

## Come si usa
Esempi delle slide: con $p/d=1$ e $h=1/32$ lo schema centrato converge con EOC $\approx2$. Con $p/d=1000$ e $h=1/32$ ($\mathrm{Pe}_{loc}\approx16$) compaiono ampie **oscillazioni spurie**; con $h=1/512$ ($\mathrm{Pe}_{loc}\approx0.98$) spariscono. Il vincolo è $h\le2.0\cdot10^{-3}$, e l'errore è $31$ per $N=4$ e scende a $4.6\cdot10^{-4}$ solo per $N=8192$. Il rimedio senza vincoli su $h$ è lo schema upwind.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_08_ode_valori_limiti_print.pdf` (p. 33-47).

## Prerequisiti
- [[Metodo delle differenze finite]]: schema centrato applicato al trasporto
- [[Problema ai limiti]]: problema modello di diffusione-trasporto

## Porta a
- [[Schema upwind]]: stabile per ogni valore di $\mathrm{Pe}_{loc}$

## Collegati
- [[Matrice a diagonale dominante]]: garantita per $\mathrm{Pe}_{loc}<1$
- [[Stabilità assoluta]]: anche lì la stabilità impone un vincolo sul passo h
