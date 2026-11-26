---
tipo: competenza
area: analisi
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["Verhulst model", "crescita logistica", "logistic growth", "equazione logistica continua", "modello di Malthus", "crescita malthusiana", "Malthusian growth", "capacità del sistema", "carrying capacity"]
tags: [competenza, area/analisi]
---

# Modello di Verhulst

> ODE di crescita di una popolazione con risorse limitate: il tasso di riproduzione cala al crescere della popolazione, che satura alla capacità $K$. Il caso a tasso costante è il modello di Malthus.

## Definizione / enunciato
**Malthus (1798).** $x(t)$ = numero di individui, $t\in[0,+\infty)$. Legge: la variazione nel tempo è proporzionale al numero corrente,
$$\frac{dx}{dt}=rx,\quad r>0\ \Rightarrow\ x(t)=x_0e^{rt},\ t\ge0 ,$$
con $x_0=x(0)$ condizione iniziale.
**Verhulst (1838).** Tasso di riproduzione non costante $r(x)=r_0\left(1-\frac xK\right)$, con $K$ capacità del sistema:
$$\frac{dx}{dt}=r_0\left(1-\frac xK\right)x=r_0x-\frac{r_0}Kx^2 .$$

## Formule chiave
Soluzione (calcolo lasciato per esercizio a lezione):
$$x(t)=x_0\frac{Ke^{r_0t}}{K+x_0(e^{r_0t}-1)},\qquad x(0)=x_0,\qquad\lim_{t\to+\infty}x(t)=K .$$
Punti di equilibrio (L07 p. 3): Malthus $\bar x=0$; Verhulst $f(\bar x)=r_0\bar x(1-\bar x/K)=0\iff\bar x=0,\ \bar x=K$.

## Intuizione
Per $x\ll K$ il termine $-\frac{r_0}Kx^2$ è trascurabile e la crescita è malthusiana (esponenziale); avvicinandosi a $K$ la competizione per le risorse frena la crescita fino a fermarla.

## Come si usa
Esempio di modello con ODE scalare autonoma: si scrive in forma $\dot x=f(x)$, si trovano gli equilibri ponendo $f(\bar x)=0$ e se ne studia la stabilità. Per tempi lunghi il numero di individui satura alla capacità del sistema.

## Nei corsi
- **Equazioni di fisica matematica** (triennale): primo esempio di modello con ODE. Fonti: `triennale/ANNO 3/eq fisica matematica/01 - Lezione 03_10_23 (2).pdf` (pp. 1-3); `triennale/ANNO 3/eq fisica matematica/07 - Lezione 17_10_23.pdf` (p. 3).

## Prerequisiti
- [[Problema di Cauchy]]: modello = ODE con condizione iniziale x(0) = x₀

## Collegati
- [[Modello SIR]]: altro modello di popolazione, a tre compartimenti
- [[Stabilità secondo Lyapunov]]: 0 e K sono gli equilibri di cui studiare la stabilità
- [[Equazione logistica discreta]]: versione a tempo discreto della crescita logistica
