---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa, Numerical opt]
livello: [triennale, magistrale]
aliases: ["convex optimization problem", "ottimizzazione convessa", "problema convesso", "problema concavo", "ottimalità locale e globale", "minimo locale e globale"]
tags: [competenza, area/ottimizzazione]
---

# Problema di ottimizzazione convessa

> Problema di minimo di una funzione convessa su un insieme convesso: ogni minimo locale è globale, quindi un algoritmo di ricerca locale non si blocca.

## Definizione / enunciato
Il problema $\min_{\mathbf x\in S}f(\mathbf x)$ è **convesso** se $S$ e $f$ sono convessi; un problema di massimo è convesso se $S$ è convesso e $f$ è **concava**. Si parla invece di **problema concavo** se si minimizza una funzione concava su un convesso.

**Teorema (ottimalità globale e convessità).** In un problema convesso ogni punto di minimo locale è di minimo globale.

*Dimostrazione.* Sia $\mathbf x^*$ minimo locale e $\mathbf x\in S$. Per convessità di $S$, $\mathbf y=(1-\lambda)\mathbf x^*+\lambda\mathbf x\in S$; per $\lambda>0$ piccolo $f(\mathbf x^*)\le f(\mathbf y)\le(1-\lambda)f(\mathbf x^*)+\lambda f(\mathbf x)$, cioè $\lambda f(\mathbf x^*)\le\lambda f(\mathbf x)$. □

## Formule chiave
$$f(\mathbf x^*)\le f\big((1-\lambda)\mathbf x^*+\lambda\mathbf x\big)\le(1-\lambda)f(\mathbf x^*)+\lambda f(\mathbf x).$$

## Intuizione
Se l'obiettivo è convesso ma $S$ non lo è, una rientranza della regione crea un ottimo locale $\mathbf x_l$ diverso da quello globale $\mathbf x_g$ (figura delle slide). Nei problemi concavi l'ottimo cade sulla frontiera.

## Come si usa
Esempio di problema concavo: $\min-(x-2)^2+3$ con $1\le x\le4$; il punto stazionario $x=2$ è un massimo, ci sono minimi locali agli estremi, $x=1$ locale e $x=4$ globale. Gli LP sono sia convessi sia concavi. Gerarchia dei problemi convessi risolubili con metodi a punti interni: LP ⊂ QP convessa ⊂ QCQP ⊂ SOCP ⊂ SDP (tutti problemi di ottimizzazione conica). Non serve un obiettivo convesso per evitare minimi locali spuri (funzioni quasi-convesse).

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap1.pdf` (p. 21-27); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap4.pdf` (p. 12).
- **Numerical opt** (magistrale): insieme e funzione convessa definiti nell'introduzione. "Teorema 4" delle lezioni: se $f$ è convessa ogni minimo locale è globale; se è anche $C^1$, ogni punto stazionario è minimo globale. Nel caso vincolato su un convesso $X$, la convessità di $f$ rende sufficiente la condizione $\nabla f(x^*)^T(x-x^*)\ge0$ (vedi [[Condizione di ottimalità su insieme convesso]]). Fonti: `magistrale/Numerical opt/Pieraccini/Part_1_Lectures_Pieraccini_Intro_and_Linear_systems.pdf` (p. 8-12); `magistrale/Numerical opt/Pieraccini/Part_2_Lectures_Pieraccini_Nonlinear_Opt_0th_order_1st_order_methods.pdf` (p. 2).

## Prerequisiti
- [[Insieme convesso]]: regione ammissibile convessa
- [[Funzione convessa]]: obiettivo convesso
- [[Modello di ottimizzazione]]: forma generale del problema

## Porta a
- [[Convessità di funzioni differenziabili]]: la stazionarietà diventa sufficiente
- [[Programmazione quadratica]]: classe convessa oltre l'LP
- [[Teorema di dualità forte]]: gap nullo nel caso convesso

## Collegati
- [[Programmazione lineare]]: caso convesso e concavo insieme
- [[Programmazione lineare mista-intera]]: l'interezza fa perdere la convessità
- [[Punti di estremo locale]]: in generale un minimo locale non è globale
