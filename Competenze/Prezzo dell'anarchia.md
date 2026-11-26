---
tipo: competenza
area: ottimizzazione
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["price of anarchy", "PoA (price of anarchy)", "ottimo di sistema", "system optimum", "SO-TAP", "system optimum traffic assignment", "paradosso di Braess", "Braess paradox"]
tags: [competenza, area/ottimizzazione]
---

# Prezzo dell'anarchia

> Rapporto tra il ritardo totale all'equilibrio di Wardrop e il ritardo totale minimo (ottimo di sistema): misura quanto costa lasciare che ognuno scelga per sé.

## Definizione / enunciato
**Ottimo di sistema (SO-TAP):** con ritardi $\tau_e(f_e)$ convessi non decrescenti, ad esempio $\tau_e(f_e)=\dfrac{b_e}{1-f_e/c_e}$,
$$\min_{f\ge0,\ Bf=\nu}\ \sum_ef_e\,\tau_e(f_e).$$
**Prezzo dell'anarchia** dell'equilibrio di Wardrop $f^{(0)}$:
$$\mathrm{PoA}^{(0)}=\frac{\sum_ef^{(0)}_e\tau_e(f^{(0)}_e)}{\min_{f\ge0,\ Bf=\upsilon(\delta^{(o)}-\delta^{(d)})}\sum_ef_e\tau_e(f_e)}\ \ge1 .$$

## Formule chiave
**Paradosso di Braess** (esempio delle slide): ritardi $d_{e_1}=f_{e_1}$, $d_{e_2}=1$, $d_{e_3}=0$, $d_{e_4}=1$, $d_{e_5}=f_{e_5}$, massa unitaria da $o$ a $d$, tre cammini. Equilibrio di Wardrop $f^{(0)}=(1,0,1,0,1)$; ottimo sociale $f^*=(1/2,1/2,0,1/2,1/2)$.
Calcolo ricavato qui dai dati delle slide: all'equilibrio ritardo totale $1+0+1=2$, all'ottimo $\tfrac14+\tfrac12+\tfrac12+\tfrac14=1.5$, quindi $\mathrm{PoA}=4/3$.

## Intuizione
Ogni guidatore guarda solo al proprio ritardo e ignora quello che impone agli altri (esternalità negativa). Nel paradosso di Braess aggiungere una strada a ritardo nullo peggiora tutti: senza l'arco $e_3$ l'equilibrio sarebbe proprio l'ottimo.

## Come si usa
Si calcolano separatamente l'equilibrio (minimo del costo integrale $\sum_e\int_0^{f_e}\tau_e$) e l'ottimo di sistema (minimo di $\sum_ef_e\tau_e$) e se ne fa il rapporto. Su due archi paralleli con ritardi affini le slide danno la soluzione esplicita dell'ottimo di sistema in tre regimi (tutto su un arco, ripartizione interna, tutto sull'altro).

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 4, "System-Optimum Traffic Assignment", "Price of Anarchy", "Braess paradox". Fonti: `magistrale/Dinamiche su network/slide/Slides-4-NetworkFlowOptimization.pdf` (pp. 6-7, 22, 28-29).

## Prerequisiti
- [[Equilibrio di Wardrop]]: il numeratore
- [[Ottimizzazione convessa di flussi su rete]]: il denominatore è un problema di flusso convesso

## Porta a
- [[Pedaggi a costo marginale]]: riportano il PoA a 1

## Collegati
- [[Equilibrio di Nash]]: inefficienza degli equilibri, come nel dilemma del prigioniero
