---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["mean field SIS", "SIS di campo medio", "SIS ODE", "mean field epidemic model", "modello epidemico di campo medio"]
tags: [competenza, area/network]
---

# Modello SIS di campo medio

> ODE $\dot z_1=\alpha z_1(1-z_1)-z_1$ per la frazione di infetti in una popolazione totalmente mescolata: per $\alpha<1$ l'epidemia si spegne, per $\alpha>1$ si stabilizza a $1-\alpha^{-1}$, e questo descrive il transitorio lunghissimo della catena di Markov SIS.

## Definizione / enunciato
Popolazione grande e omogenea, stati 0 (suscettibile) e 1 (infetto), mescolamento totale: ogni coppia si incontra a tasso $\beta=\alpha/n$ (ogni individuo incontra in media $\alpha$ persone per unità di tempo), guarigione a tasso 1. Con $k$ infetti i nuovi contagi attesi in $\Delta t$ sono $\beta k(n-k)\Delta t$; con $z_1=k/n$:
$$\frac{\Delta z_1}{\Delta t}=\frac{\beta k(n-k)}n-\frac kn=\alpha z_1(1-z_1)-z_1\ \xrightarrow{\Delta t\to0}\ \dot z_1=\alpha z_1(1-z_1)-z_1 .$$
Nessun sistema finito è descritto esattamente da questa ODE: ha senso solo nel limite $n\to+\infty$ (teorema di Kurtz).

## Formule chiave
- $\alpha<1$: unico equilibrio $z_1=0$, asintoticamente stabile.
- $\alpha>1$: equilibri $0$ (instabile) e $1-\alpha^{-1}$ (asintoticamente stabile).
Confronto con la catena SIS su $K_n$ ($x\neq0$): $\alpha<1\Rightarrow\mathbb E_x[T_0]\le\mathbb E_{\mathbb 1}[T_0]\sim\frac{\log n}{1-\alpha}$; $\alpha>1\Rightarrow\mathbb E_x[T_0]\ge\mathbb E[T_0\mid X(0)=\delta_j]\sim\exp(g(\alpha)n)/(\alpha n)$.

## Intuizione
La catena di Markov ha un solo stato assorbente (nessun infetto), quindi alla fine l'epidemia muore sempre. Ma per $\alpha>1$ la ODE dice che il sistema sale a $1-\alpha^{-1}$ e ci resta: il tempo per una fluttuazione che porti a zero è esponenziale in $n$, cioè in pratica infinito. L'ODE cattura il transitorio, non l'asintotica.

## Come si usa
Si studiano gli equilibri dell'ODE logistica e la loro stabilità (segno della derivata del secondo membro); $\alpha=1$ è una biforcazione transcritica che corrisponde alla soglia epidemica della catena. È il primo esempio, nelle slide, di modello di campo medio.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 11, "A mean field epidemic model", "SIS mean field model versus SIS MC model". Fonti: `magistrale/Dinamiche su network/slide/Slides-11-Meanfield.pdf` (pp. 3-13).

## Prerequisiti
- [[Teorema di Kurtz]]: giustifica l'ODE come limite
- [[Epidemia SIS su rete]]: la catena di Markov di partenza

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Biforcazione]]: scambio di stabilità a $\alpha=1$
- [[Modello di Verhulst]]: stessa ODE logistica
- [[Stabilità dei punti di equilibrio]]: analisi degli equilibri dell'ODE
- [[Modello SIR]]: altro modello epidemico di campo medio
