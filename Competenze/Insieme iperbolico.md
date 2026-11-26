---
tipo: competenza
area: analisi
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["hyperbolic set", "iperbolicità", "hyperbolicity", "uniformemente iperbolico", "assioma A", "axiom A", "sistema di Anosov", "Anosov system", "misura SRB", "SRB measure", "teorema di Sinai-Ruelle-Bowen", "ipotesi caotica", "chaotic hypothesis", "stabilità strutturale"]
tags: [competenza, area/analisi]
---

# Insieme iperbolico

> Insieme invariante in cui lo spazio tangente si spezza ovunque in direzioni che si contraggono e si dilatano esponenzialmente (più la direzione del flusso); è il modello "buono" di caos, con misure statistiche uniche (SRB).

## Definizione / enunciato
Un invariante $I\subseteq M$ è **iperbolico** se:
1. per ogni $x\in I$, $T_xM=\epsilon^u(x)\oplus\{F(x)\}\oplus\epsilon^s(x)$ (instabile, direzione neutra del flusso, stabile);
2. esistono $k>0$ e $c(x,x')>0$ continue tali che per $t\ge0$, $e_s\in\epsilon^s(x)$, $e_u\in\epsilon^u(x)$:
$$\|M(t,x)e_s\|\le c(x,\phi^tx)^{-1}e^{-kt}\|e_s\|,\qquad\|M(t,x)e_u\|\le c(x,\phi^tx)e^{kt}\|e_u\|,\qquad\gamma_{us}(\phi^tx)\ge c(\phi^tx)\gamma_{us}(x),$$
dove $\gamma_{us}(x)$ è l'angolo fra direzioni stabili e instabili in $x$ (la seconda disuguaglianza è trascritta come nella dispensa; per una direzione instabile ci si aspetterebbe $\ge$, da verificare). Con quantità conservate ci sono più direzioni neutre e si parla di iperbolicità solo sulle ipersuperfici rilevanti.
Gli esponenti di Lyapunov si ordinano $\lambda^{(1)}(x)>\dots>\lambda^{(\nu)}(x)\ge k>\lambda^{(\nu+1)}=0>-k\ge\lambda^{(\nu+2)}(x)>\dots>\lambda^{(n)}(x)$; se $\lambda^{(k)}(x)=\lambda^{(k)}$ per ogni $x\in I$ il sistema è **uniformemente iperbolico**. Un $I$ transitivo non vagante è $I=W_s(I)\cap W_u(I)$; un attrattore coincide con la sua varietà instabile, $I=W_u(I)$.

## Formule chiave
**Teorema (Sinai-Ruelle-Bowen).** Sia $\phi^t$ un flusso $C^2$ con attrattore iperbolico $A$. Esiste un'unica misura $\mu$ supportata su $A$ tale che, per $g$ continua e quasi ogni $x$ (Lebesgue) in un intorno $U$ di $A$:
$$\lim_{T\to\infty}\frac1T\int_0^Tg(\phi^tx)\,dt=\int_Ag\,d\mu .$$
È la misura "fisica" o **SRB**, regolare lungo le direzioni instabili.

## Intuizione
L'iperbolicità garantisce sensibilità alle condizioni iniziali ma in modo controllato: medie temporali ben definite e uguali per quasi ogni condizione iniziale. **Assioma A**: $\Omega$ iperbolico e compatto, con orbite periodiche dense; **Anosov** se $\Omega=M$. Questi sistemi si riducono a una mappa di Poincaré con dinamica simbolica isomorfa a uno shift di Bernoulli, si decompongono in un numero finito di componenti transitive e sono **strutturalmente stabili** (piccole perturbazioni del campo conservano le orbite periodiche).

## Come si usa
I sistemi di particelle realistici difficilmente sono iperbolici (tangenze, esponenti nulli), ma numericamente sono "molto" caotici: da qui l'**ipotesi caotica** di Gallavotti e Cohen, secondo cui un sistema di particelle in stato stazionario si può trattare come un sistema di Anosov, il che implica l'ipotesi ergodica all'equilibrio.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/IntroToDynamicalSystems (1).pdf` (p. 4-6).

## Prerequisiti
- [[Varietà stabile e instabile]]: decomposizione stabile/instabile in un punto
- [[Esponente di Lyapunov]]: gli esponenti non nulli definiscono l'iperbolicità
- [[Insiemi invarianti e attrattori]]: si parla di attrattori iperbolici

## Porta a
- [[Partizione di Markov e dinamica simbolica]]: i sistemi iperbolici ammettono partizioni di Markov
- [[Misura invariante di un sistema dinamico]]: la misura SRB

## Collegati
- [[Caos deterministico]]: il prototipo regolare di caos
